from datetime import datetime, timedelta, timezone

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, func, select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from apps.api.app.auth import get_db
from apps.api.app.config import settings
from apps.api.app.db import Base
from apps.api.app.main import app
from apps.api.app.models import ManagedLead, ManagedLeadEmailDelivery, ManagedSchedulingConfig, PlatformConfig, User
from apps.api.app.security import hash_password, issue_token
from apps.api.app.services.managed_emails import (
    ADMIN_NOTIFICATION,
    CUSTOMER_CONFIRMATION,
    TransientManagedEmailError,
    ManagedEmailError,
    ResendProvider,
    dispatch_delivery,
    pending_delivery_ids,
    process_delivery,
)


@pytest.fixture
def api_db(monkeypatch):
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine)
    Session=sessionmaker(bind=engine,expire_on_commit=False,future=True)
    db=Session()
    user=User(email='user@example.com',password_hash=hash_password('password123'),role='USER',plan='GROWTH')
    admin=User(email='admin@example.com',password_hash=hash_password('password123'),role='SUPER_ADMIN',plan='GROWTH')
    db.add_all([user,admin,ManagedSchedulingConfig(id=1,enabled=True,timezone='UTC',duration_minutes=30,buffer_minutes=0,day_start_minute=540,day_end_minute=1020,weekdays_csv='0,1,2,3,4,5,6')]);db.commit()
    app.dependency_overrides[get_db]=lambda:db
    monkeypatch.setattr('apps.api.app.routers.managed.dispatch_delivery',lambda db,delivery_id:None)
    yield db,user,admin
    app.dependency_overrides.clear();db.close()


def auth_client(user):
    client=TestClient(app);client.cookies.set('zylora_session',issue_token(user.id,user.role,settings.secret_key));return client


def public_payload(client,key='managed-request-0001',name='Maya <script>alert(1)</script>',email='maya@example.com',website_type='Dental <b>clinic</b> website'):
    target=(datetime.now(timezone.utc)+timedelta(days=2)).date().isoformat()
    slot=client.get('/managed/slots',params={'on':target}).json()[0]
    return {'name':name,'email':email,'website_type':website_type,'starts_at':slot,'idempotency_key':key}


def test_notification_email_config_is_trimmed_persisted_and_super_admin_only(api_db):
    db,user,admin=api_db
    admin_client=auth_client(admin);user_client=auth_client(user);anonymous=TestClient(app)
    saved=admin_client.put('/admin/config/lead_notification_email',json={'value':'  Ops@Example.COM  '})
    assert saved.status_code==200 and saved.json()['value']=='ops@example.com'
    assert admin_client.get('/admin/config').json()['lead_notification_email']=='ops@example.com'
    assert user_client.get('/admin/config').status_code==403
    assert anonymous.get('/admin/config').status_code==401
    assert user_client.put('/admin/config/lead_notification_email',json={'value':'other@example.com'}).status_code==403
    assert anonymous.put('/admin/config/lead_notification_email',json={'value':'other@example.com'}).status_code==401
    invalid=admin_client.put('/admin/config/lead_notification_email',json={'value':'not-an-email'})
    assert invalid.status_code==422
    assert admin_client.put('/admin/config/lead_notification_email',json={'value':'bad..dots@example.com'}).status_code==422
    assert db.get(PlatformConfig,'lead_notification_email').value=='ops@example.com'


def test_submission_atomically_creates_lead_customer_and_admin_outbox(api_db):
    db,user,admin=api_db
    auth_client(admin).put('/admin/config/lead_notification_email',json={'value':'alerts@example.com'})
    public=TestClient(app);payload=public_payload(public)
    response=public.post('/managed/enquiries',json=payload)
    assert response.status_code==201 and 'alerts@example.com' not in response.text
    lead=db.scalar(select(ManagedLead).where(ManagedLead.lead_code==response.json()['lead_code']))
    deliveries=list(db.scalars(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==lead.id)).all())
    assert len(deliveries)==2
    customer=next(x for x in deliveries if x.kind==CUSTOMER_CONFIRMATION)
    admin_mail=next(x for x in deliveries if x.kind==ADMIN_NOTIFICATION)
    assert customer.recipient=='maya@example.com' and lead.lead_code in customer.subject and lead.lead_code in customer.html
    assert admin_mail.recipient=='alerts@example.com' and admin_mail.recipient!=lead.email
    for detail in (lead.lead_code,'maya@example.com','Dental &lt;b&gt;clinic&lt;/b&gt; website','PENDING','Preferred contact time'):
        assert detail in admin_mail.html
    assert '<script>' not in admin_mail.html and '&lt;script&gt;' in admin_mail.html
    assert '\r' not in admin_mail.subject and '\n' not in admin_mail.subject
    assert any(item['lead_code']==lead.lead_code for item in auth_client(admin).get('/managed/enquiries').json())


def test_missing_admin_recipient_keeps_lead_and_customer_confirmation(api_db):
    db,user,admin=api_db
    public=TestClient(app);response=public.post('/managed/enquiries',json=public_payload(public,key='managed-request-0002'))
    assert response.status_code==201
    lead=db.get(ManagedLead,response.json()['id'])
    deliveries=list(db.scalars(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==lead.id)).all())
    assert [(x.kind,x.recipient) for x in deliveries]==[(CUSTOMER_CONFIRMATION,lead.email)]


def test_request_and_worker_retries_are_idempotent(api_db):
    db,user,admin=api_db
    auth_client(admin).put('/admin/config/lead_notification_email',json={'value':'alerts@example.com'})
    public=TestClient(app);payload=public_payload(public,key='managed-request-0003')
    first=public.post('/managed/enquiries',json=payload);second=public.post('/managed/enquiries',json=payload)
    assert first.status_code==201 and second.status_code==201 and first.json()['id']==second.json()['id']
    assert db.scalar(select(func.count()).select_from(ManagedLead))==1
    assert db.scalar(select(func.count()).select_from(ManagedLeadEmailDelivery))==2
    changed={**payload,'name':'Different person'}
    assert public.post('/managed/enquiries',json=changed).status_code==409

    delivery=db.scalar(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.kind==ADMIN_NOTIFICATION))
    class TemporaryProvider:
        def send(self,item): raise TransientManagedEmailError('provider_timeout')
    with pytest.raises(TransientManagedEmailError): process_delivery(db,delivery.id,TemporaryProvider(),max_attempts=3)
    assert db.get(ManagedLead,first.json()['id']) is not None
    assert db.get(ManagedLeadEmailDelivery,delivery.id).status=='PENDING'
    class SuccessProvider:
        calls=0
        def send(self,item): self.calls+=1;return 'email-provider-id'
    provider=SuccessProvider()
    assert process_delivery(db,delivery.id,provider,max_attempts=3)=='SENT'
    assert process_delivery(db,delivery.id,provider,max_attempts=3)=='SENT'
    assert provider.calls==1


def test_worker_recovery_and_three_attempt_terminal_failure(api_db):
    db,user,admin=api_db
    public=TestClient(app);response=public.post('/managed/enquiries',json=public_payload(public,key='managed-request-0004'))
    delivery=db.scalar(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==response.json()['id']))
    class TemporaryProvider:
        def send(self,item): raise TransientManagedEmailError('temporary')
    for _ in range(2):
        with pytest.raises(TransientManagedEmailError): process_delivery(db,delivery.id,TemporaryProvider(),max_attempts=3)
    assert process_delivery(db,delivery.id,TemporaryProvider(),max_attempts=3)=='FAILED'
    assert db.get(ManagedLead,delivery.managed_lead_id) is not None
    assert delivery.id not in pending_delivery_ids(db)


def test_resend_provider_mapping_and_delivery_failures(api_db,monkeypatch):
    db,user,admin=api_db
    public=TestClient(app);response=public.post('/managed/enquiries',json=public_payload(public,key='managed-request-0005'))
    delivery=db.scalar(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==response.json()['id']))
    calls=[]
    def success(to,subject,html,idempotency_key=None): calls.append((to,idempotency_key));return {'id':'resend-id'}
    monkeypatch.setattr('apps.api.app.services.managed_emails.resend_email',success)
    assert ResendProvider().send(delivery)=='resend-id'
    assert calls==[(delivery.recipient,f'managed-lead/{delivery.managed_lead_id}/{delivery.kind.lower()}')]
    monkeypatch.setattr('apps.api.app.services.managed_emails.resend_email',lambda *a,**k:{})
    with pytest.raises(ManagedEmailError,match='resend_missing_message_id'): ResendProvider().send(delivery)
    from apps.api.app.integrations import IntegrationError,TransientIntegrationError
    def transient(*a,**k): raise TransientIntegrationError('temporary')
    monkeypatch.setattr('apps.api.app.services.managed_emails.resend_email',transient)
    with pytest.raises(TransientManagedEmailError): ResendProvider().send(delivery)
    def permanent(*a,**k): raise IntegrationError('invalid')
    monkeypatch.setattr('apps.api.app.services.managed_emails.resend_email',permanent)
    with pytest.raises(ManagedEmailError): ResendProvider().send(delivery)
    delivery.status='PENDING';db.commit()
    class PermanentProvider:
        def send(self,item): raise ManagedEmailError('permanent')
    assert process_delivery(db,delivery.id,PermanentProvider())=='FAILED'
    with pytest.raises(ManagedEmailError,match='managed_email_not_found'): process_delivery(db,999999)


def test_recovery_and_inline_or_celery_dispatch(api_db,monkeypatch):
    db,user,admin=api_db
    public=TestClient(app);response=public.post('/managed/enquiries',json=public_payload(public,key='managed-request-0006'))
    delivery=db.scalar(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==response.json()['id']))
    delivery.status='SENDING';delivery.claimed_at=datetime.utcnow()-timedelta(minutes=11);db.commit()
    assert delivery.id in pending_delivery_ids(db) and delivery.status=='PENDING'
    original_mode=settings.notification_delivery_mode
    object.__setattr__(settings,'notification_delivery_mode','inline')
    called=[]
    monkeypatch.setattr('apps.api.app.services.managed_emails.process_delivery',lambda db,delivery_id:called.append(delivery_id))
    dispatch_delivery(db,delivery.id);assert called==[delivery.id]
    def transient_process(*a,**k): raise TransientManagedEmailError('retry')
    monkeypatch.setattr('apps.api.app.services.managed_emails.process_delivery',transient_process)
    dispatch_delivery(db,delivery.id)
    object.__setattr__(settings,'notification_delivery_mode','celery')
    from apps.worker.tasks import deliver_managed_lead_email
    queued=[];monkeypatch.setattr(deliver_managed_lead_email,'delay',lambda delivery_id:queued.append(delivery_id))
    dispatch_delivery(db,delivery.id);assert queued==[delivery.id]
    monkeypatch.setattr(deliver_managed_lead_email,'delay',lambda delivery_id:(_ for _ in ()).throw(RuntimeError('queue down')))
    dispatch_delivery(db,delivery.id);assert db.get(ManagedLeadEmailDelivery,delivery.id).last_error.startswith('queue_unavailable:')
    object.__setattr__(settings,'notification_delivery_mode',original_mode)


def test_invalid_legacy_recipient_is_skipped_without_losing_lead(api_db):
    db,user,admin=api_db
    db.add(PlatformConfig(key='lead_notification_email',value='legacy garbage'));db.commit()
    public=TestClient(app);response=public.post('/managed/enquiries',json=public_payload(public,key='managed-request-0007'))
    assert response.status_code==201 and db.get(ManagedLead,response.json()['id']) is not None
    deliveries=list(db.scalars(select(ManagedLeadEmailDelivery).where(ManagedLeadEmailDelivery.managed_lead_id==response.json()['id'])).all())
    assert [x.kind for x in deliveries]==[CUSTOMER_CONFIRMATION]
