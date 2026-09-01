from __future__ import annotations

import json
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.auth_flows import consume_auth_token, issue_auth_token
from app.config import settings, validate_production_settings
from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits

TABLES=[
    'assistant_action_keys','assistant_usage','assistant_messages','assistant_conversations','sales_assistant_configs',
    'notification_deliveries','credit_topup_orders','credit_transactions','generation_jobs','contacts','published_versions',
    'subscriptions','billing_profiles','turnstile_token_uses','indexnow_queue','site_redirects','site_revisions','editor_history',
    'media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links',
    'rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings',
    'freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets',
    'webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads',
    'operational_events','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads',
    'oauth_states','auth_tokens','sites','sessions','users'
]


def reset_db():
    migrate(); clear_rate_limits()
    with SessionLocal.begin() as db:
        for table in TABLES:
            try: db.execute(text(f'DELETE FROM {table}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))


def signup(email='hardening@example.com', *, verify=True):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Hardening User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    if verify:
        assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h,j


def create_site(c,h,name='Hardening Studio',publish=False):
    r=c.post('/api/sites',headers=h,json={
        'business_name':name,
        'description':'A professional consulting business that needs enquiries and appointment scheduling.',
        'origin':'AI','industry':'Consulting','style':'Editorial'
    })
    assert r.status_code==200,r.text
    sid=r.json()['id']
    if publish:
        p=c.post(f'/api/sites/{sid}/publish',headers=h)
        assert p.status_code==200,p.text
    return sid


def test_oauth_preserves_safe_next_and_auth_me_exposes_profile_image():
    reset_db(); c=TestClient(app)
    start=c.get('/api/auth/google/start?mock=1&email=oauth.hardening@example.com&next=/templates',follow_redirects=False)
    assert start.status_code==302
    callback=c.get(start.headers['location'],follow_redirects=False)
    assert callback.status_code==302 and callback.headers['location']=='/templates'
    me=c.get('/api/auth/me'); assert me.status_code==200
    uid=me.json()['id']
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET profile_image_url='https://images.example.test/avatar.png' WHERE id=:u"),{'u':uid})
    assert c.get('/api/auth/me').json()['profile_image_url']=='https://images.example.test/avatar.png'


def test_auth_token_is_single_use_under_concurrent_replay():
    reset_db(); c,h,j=signup('token-race@example.com',verify=False)
    uid=c.get('/api/auth/me').json()['id']
    token=issue_auth_token(uid,'VERIFY_EMAIL','token-race@example.com')
    def consume(_):
        return consume_auth_token(token,'VERIFY_EMAIL')
    with ThreadPoolExecutor(max_workers=2) as ex:
        results=list(ex.map(consume,range(2)))
    assert sum(x is not None for x in results)==1,results


def test_production_configuration_fails_closed(monkeypatch):
    monkeypatch.setattr(settings,'app_env','production')
    monkeypatch.setattr(settings,'database_url','sqlite:///unsafe-production.db')
    with pytest.raises(RuntimeError) as exc:
        validate_production_settings()
    assert 'DATABASE_URL' in str(exc.value)
    assert 'unsafe-production.db' not in str(exc.value)

    # Docker Compose deliberately keeps a convenient development password, but a
    # production process must fail closed if operators forget to override it.
    monkeypatch.setattr(settings,'database_url','postgresql+psycopg://zylora:zylora-dev-only@db:5432/zylora')
    with pytest.raises(RuntimeError) as weak:
        validate_production_settings()
    assert 'DATABASE_URL credentials' in str(weak.value)
    assert 'zylora-dev-only' not in str(weak.value)


def test_assistant_defers_contact_conversion_until_turnstile_verified(monkeypatch):
    reset_db(); c,h,_=signup('assistant-captcha@example.com'); sid=create_site(c,h,publish=True)
    monkeypatch.setattr(settings,'turnstile_secret_key','test-secret')
    conv=c.post(f'/api/public/sites/{sid}/assistant/conversations',json={'session_id':'session-hardening-123'}); assert conv.status_code==200,conv.text
    cid=conv.json()['id']
    msg={'message':'Please call me about a quote on +1 415 555 0199.'}
    first=c.post(f'/api/public/sites/{sid}/assistant/conversations/{cid}/messages',json=msg)
    assert first.status_code==200,first.text
    assert first.json()['lead'] is None and first.json()['conversion_deferred'] is True
    with SessionLocal() as db:
        assert db.execute(text("SELECT count(*) FROM leads WHERE site_id=:s AND source='AI_ASSISTANT'"),{'s':sid}).scalar_one()==0
    second=c.post(f'/api/public/sites/{sid}/assistant/conversations/{cid}/messages',json={**msg,'turnstile_token':'test-pass:assistant-conversion'})
    assert second.status_code==200,second.text
    assert second.json()['lead'] is not None and second.json()['conversion_deferred'] is False


def test_public_appointment_rejects_draft_before_schedule_probe():
    reset_db(); c,h,_=signup('draft-appt@example.com'); sid=create_site(c,h,publish=False)
    starts=(datetime.now(timezone.utc)+timedelta(days=2)).replace(microsecond=0).isoformat()
    r=c.post('/api/appointments',json={'site_id':sid,'name':'Visitor','email':'visitor@example.com','starts_at':starts})
    assert r.status_code==404,r.text
    assert r.json()['detail']=='Live site not found'


def test_provider_exception_is_sanitized_for_subscription_creation(monkeypatch):
    reset_db(); c,h,_=signup('provider-safe@example.com')
    import app.api_extended as ext
    def boom(*args,**kwargs): raise RuntimeError('SECRET_PROVIDER_BODY /etc/zylora/private.key')
    monkeypatch.setattr(ext,'razorpay_create_subscription',boom)
    r=c.post('/api/billing/subscription',headers={**h,'cf-ipcountry':'GB'},json={'plan':'STARTER'})
    assert r.status_code==502
    body=r.text
    assert 'SECRET_PROVIDER_BODY' not in body and '/etc/zylora' not in body
    with SessionLocal() as db:
        rows=[str(x[0]) for x in db.execute(text("SELECT message FROM operational_events WHERE event_code='SUBSCRIPTION_CREATE_FAILED'")).all()]
    assert rows and all('SECRET_PROVIDER_BODY' not in x and '/etc/zylora' not in x for x in rows)


def test_failed_webhook_can_retry_and_grant_topup_exactly_once(monkeypatch):
    reset_db(); c,h,_=signup('webhook-retry@example.com')
    order=c.post('/api/billing/credit-topups/order',headers=h,json={'credit_type':'ai','pack_code':'small'})
    assert order.status_code==200,order.text
    order_id=order.json()['order_id']
    import app.api_extended as ext
    original=ext._complete_credit_topup; calls={'n':0}
    def fail_once(*args,**kwargs):
        calls['n']+=1
        if calls['n']==1: raise RuntimeError('transient provider-side failure')
        return original(*args,**kwargs)
    monkeypatch.setattr(ext,'_complete_credit_topup',fail_once)
    event={'id':'evt-topup-retry-hardening','event':'payment.captured','created_at':1700000100,'payload':{'payment':{'entity':{'order_id':order_id,'id':'pay_retry_hardening','status':'captured'}}}}
    first=c.post('/api/billing/razorpay/webhook',content=json.dumps(event),headers={'content-type':'application/json'})
    assert first.status_code==503,first.text
    with SessionLocal() as db:
        row=db.execute(text('SELECT status,attempt_count,last_error FROM webhook_events WHERE id=:i'),{'i':event['id']}).mappings().one()
        assert row['status']=='FAILED' and row['attempt_count']==1 and 'RuntimeError' in (row['last_error'] or '')
    second=c.post('/api/billing/razorpay/webhook',content=json.dumps(event),headers={'content-type':'application/json'})
    assert second.status_code==200,second.text
    replay=c.post('/api/billing/razorpay/webhook',content=json.dumps(event),headers={'content-type':'application/json'})
    assert replay.status_code==200 and replay.json().get('idempotent') is True
    with SessionLocal() as db:
        row=db.execute(text('SELECT status,attempt_count FROM webhook_events WHERE id=:i'),{'i':event['id']}).mappings().one()
        topup=db.execute(text("SELECT topup_remaining FROM credit_wallets WHERE user_id=(SELECT id FROM users WHERE email='webhook-retry@example.com')")).scalar_one()
    assert row['status']=='SUCCEEDED' and row['attempt_count']==2 and topup==50


def test_stale_subscription_activation_cannot_override_newer_cancellation():
    reset_db(); c,h,_=signup('stale-sub@example.com')
    order=c.post('/api/billing/subscription',headers={**h,'cf-ipcountry':'GB','Idempotency-Key':'stale-sub-order'},json={'plan':'STARTER'})
    assert order.status_code==200,order.text
    sid=order.json()['subscription_id']
    cancel={'id':'evt-cancel-new','event':'subscription.cancelled','created_at':200,'payload':{'subscription':{'entity':{'id':sid}}}}
    assert c.post('/api/billing/razorpay/webhook',content=json.dumps(cancel),headers={'content-type':'application/json'}).status_code==200
    stale={'id':'evt-activation-old','event':'subscription.activated','created_at':100,'payload':{'subscription':{'entity':{'id':sid,'status':'active'}},'payment':{'entity':{'id':'pay_stale','status':'captured','billing_country':'GB'}}}}
    assert c.post('/api/billing/razorpay/webhook',content=json.dumps(stale),headers={'content-type':'application/json'}).status_code==200
    with SessionLocal() as db:
        status=db.execute(text('SELECT status FROM subscriptions WHERE provider_subscription_id=:s'),{'s':sid}).scalar_one()
    assert status=='CANCELLED'
