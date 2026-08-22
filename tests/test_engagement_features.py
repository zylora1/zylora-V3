from datetime import datetime, timedelta, timezone
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from apps.api.app.main import app
from apps.api.app.auth import get_db
from apps.api.app.db import Base
from apps.api.app.models import User, Site, BlogPost, ChatSession, ChatMessage, SchedulingConfig, Lead
from apps.api.app.security import hash_password, issue_token
from apps.api.app.config import settings


def setup():
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine)
    Session=sessionmaker(bind=engine,expire_on_commit=False,future=True)
    db=Session()
    user=User(email='owner@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER',ai_credits=3,lead_credits=3)
    admin=User(email='admin2@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='SUPER_ADMIN',ai_credits=10,lead_credits=10)
    db.add_all([user,admin]);db.commit();db.refresh(user);db.refresh(admin)
    app.dependency_overrides[get_db]=lambda:db
    return db,user,admin


def authed(user):
    c=TestClient(app)
    c.cookies.set('zylora_session',issue_token(user.id,user.role,settings.secret_key))
    return c


def test_blog_admin_full_crud_http():
    db,user,admin=setup(); c=authed(admin)
    created=c.post('/blog',json={'title':'Original title','slug':'original','excerpt':'Excerpt','content':'This is a long enough article body for the blog validation rules.'})
    assert created.status_code==201
    pid=created.json()['id']
    listed=c.get('/blog'); assert listed.status_code==200 and listed.json()[0]['id']==pid
    edited=c.patch(f'/blog/{pid}',json={'title':'Corrected title','slug':'corrected','content':'This corrected article body is also long enough to remain valid.'})
    assert edited.status_code==200 and edited.json()['title']=='Corrected title' and edited.json()['slug']=='corrected'
    assert c.patch(f'/blog/{pid}/status',json={'status':'PUBLISHED'}).status_code==200
    assert c.get('/blog/public/corrected').status_code==200
    deleted=c.delete(f'/blog/{pid}'); assert deleted.status_code==204
    assert db.get(BlogPost,pid) is None
    assert c.get('/blog/public/corrected').status_code==404
    db.close()


def test_chatbot_is_reachable_persists_conversation_and_consumes_credit():
    db,user,admin=setup()
    site=Site(owner_id=user.id,name='Clinic',slug='clinic-chat',origin='TEMPLATE',page_count=2,template_key='template-0001-dental-minimalism',state='LIVE',content_json='{"businessName":"Bright Clinic","phone":"12345","services":["Dental care","Checkups"]}')
    db.add(site);db.commit();db.refresh(site)
    c=TestClient(app)
    r=c.post('/chatbot/public',json={'site_id':site.id,'visitor_key':'visitor-12345678','message':'What services do you offer?'})
    assert r.status_code==200,r.text
    body=r.json(); assert body['mode']=='LEAD_CREDITS' and 'Dental care' in body['reply']
    db.refresh(user); assert user.lead_credits==2
    session=db.scalar(select(ChatSession).where(ChatSession.site_id==site.id)); assert session is not None
    assert len(db.scalars(select(ChatMessage).where(ChatMessage.session_id==session.id)).all())==2
    db.close()


def test_chatbot_fallback_modes_are_real_http_behavior():
    db,user,admin=setup(); site=Site(owner_id=user.id,name='Studio',slug='studio',origin='AI',page_count=1,state='LIVE',content_json='{"businessName":"Studio"}')
    db.add(site);db.commit();db.refresh(site); c=TestClient(app)
    user.lead_credits=0;user.ai_credits=1;db.commit()
    a=c.post('/chatbot/public',json={'site_id':site.id,'visitor_key':'visitor-abcdefgh','message':'hello'});assert a.status_code==200 and a.json()['mode']=='AI_FALLBACK_EMAIL_ONLY'
    db.refresh(user);assert user.ai_credits==0
    b=c.post('/chatbot/public',json={'site_id':site.id,'visitor_key':'visitor-abcdefgh','message':'hello again'});assert b.status_code==200 and b.json()['mode']=='CACHED_FORCED_CAPTURE' and b.json()['force_capture'] is True
    db.close()


def test_regular_lead_can_book_real_calendar_slot():
    db,user,admin=setup(); site=Site(owner_id=user.id,name='Clinic',slug='clinic-book',origin='TEMPLATE',page_count=2,state='LIVE')
    db.add(site);db.commit();db.refresh(site)
    cfg=SchedulingConfig(site_id=site.id,enabled=True,timezone='UTC',duration_minutes=30,buffer_minutes=0,day_start_minute=0,day_end_minute=1440,weekdays_csv='0,1,2,3,4,5,6')
    db.add(cfg);db.commit(); c=TestClient(app)
    lead=c.post('/leads/public',json={'site_id':site.id,'source':'FORM','name':'A Visitor','email':'visitor@example.com','idempotency_key':'booking-lead-0001'}); assert lead.status_code==201
    day=(datetime.now(timezone.utc)+timedelta(days=2)).date().isoformat()
    slots=c.get('/scheduling/slots',params={'site_id':site.id,'on':day});assert slots.status_code==200 and slots.json()
    booked=c.post('/scheduling/book',json={'site_id':site.id,'starts_at':slots.json()[0],'lead_id':lead.json()['id']});assert booked.status_code==201
    db.close()


def test_bulk_email_resolves_unique_audience(monkeypatch):
    db,user,admin=setup()
    site=Site(owner_id=user.id,name='Site',slug='mail-site',origin='AI',page_count=1,state='LIVE');db.add(site);db.commit();db.refresh(site)
    db.add(Lead(owner_id=user.id,site_id=site.id,source='FORM',name='Lead',email='lead@example.com'));db.commit()
    calls=[]
    monkeypatch.setattr('apps.api.app.main.resend_email',lambda to,subject,html: calls.append((to,subject,html)) or {'id':'mail'})
    c=authed(admin)
    r=c.post('/admin/email/bulk',json={'audience':'ALL','subject':'Hello','html':'<p>Campaign</p>'});assert r.status_code==200,r.text
    assert r.json()['sent']==3  # owner, admin, lead
    assert sorted(x[0] for x in calls)==['admin2@example.com','lead@example.com','owner@example.com']
    db.close()


def test_schedule_config_can_be_read_by_owner():
    db,user,admin=setup(); c=authed(user)
    site=c.post('/sites',json={'name':'Bookable','slug':'bookable','origin':'AI','page_count':1}).json()
    initial=c.get(f"/scheduling/config/{site['id']}");assert initial.status_code==200 and initial.json()['enabled'] is False
    cfg={**initial.json(),'enabled':True,'duration_minutes':45}; assert c.put('/scheduling/config',json=cfg).status_code==200
    saved=c.get(f"/scheduling/config/{site['id']}");assert saved.json()['enabled'] is True and saved.json()['duration_minutes']==45
    db.close()
