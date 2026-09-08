from __future__ import annotations
import io, os, zipfile
from datetime import datetime, timedelta, timezone
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from tests.billing_helpers import activate_zylora


def auth_client(email='owner@example.com', name='Owner'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':name,'email':email,'password':'SecurePass123!'})
    assert r.status_code==200, r.text
    data=r.json(); csrf=data['csrf_token']
    if data.get('debug_verification_token'):
        vr=c.post('/api/auth/email/verify',json={'token':data['debug_verification_token']}); assert vr.status_code==200, vr.text
    h={'X-CSRF-Token':csrf}; assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h

def reset_db():
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for t in ['site_revisions','editor_history','imported_site_pages','site_imports','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']:
            db.execute(text(f'DELETE FROM {t}'))
        db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def create_site(c,h,name='Northstar',template='atelier-noir',origin='AI',description='A premium independent business with a clear digital proposition.'):
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':description,'template_slug':template,'origin':origin,'industry':'Consulting','style':'Premium'})
    assert r.status_code==200,r.text
    return r.json()['id']

def test_full_product_workflows():
    reset_db(); c,h=auth_client()
    me=c.get('/api/auth/me').json(); assert me['plan']=='FREE' and me['ai_credits']==20
    assert c.get('/api/templates').json()=={'items':[],'retired':True}

    ai_sid=create_site(c,h,name='AI Launch',template='northstar-cloud',origin='AI')
    assert c.get(f'/api/sites/{ai_sid}').json()['origin']=='AI'
    assert c.get('/api/auth/me').json()['ai_credits']==15
    activate_zylora(c,h,'US'); paid_credits=c.get('/api/auth/me').json()['ai_credits']; assert c.get('/api/auth/me').json()['plan']=='STARTER' and paid_credits>=100
    sid=create_site(c,h)
    r=c.get(f'/api/sites/{sid}'); assert r.status_code==200 and r.json()['origin']=='AI' and r.json()['template_slug']=='ai-runtime' and r.json()['page_count']>=1
    r=c.put(f'/api/sites/{sid}',headers=h,json={'tagline':'Designed with intent.','description':'Updated copy for a focused premium website.','accent':'#c8ff44'}); assert r.status_code==200
    r=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'instruction':'Make it more premium and concise'}); assert r.status_code==200; assert r.json()['provider']=='local'
    assert c.get('/api/auth/me').json()['ai_credits']==paid_credits-7

    r=c.post(f'/api/sites/{sid}/publish',headers=h); assert r.status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']; pub=c.get(f'/s/{slug}'); assert pub.status_code==200 and 'public-runtime.js' in pub.text

    # Account notifications load/save and OTP verification.
    r=c.put('/api/notifications',headers=h,json={'email_to':'owner@example.com','country_code':'+91','phone_number':'9876543210','notify_new_form_lead':True,'notify_new_chatbot_lead':True,'notify_new_appointment':True,'notify_appointment_cancelled_or_rescheduled':True,'notify_other_enquiries':False}); assert r.status_code==200
    otp=c.post('/api/notifications/whatsapp/request-otp',headers=h).json(); assert 'debug_code' in otp
    bad=c.post('/api/notifications/whatsapp/verify',headers=h,json={'code':'000000'}); assert bad.status_code==400
    good=c.post('/api/notifications/whatsapp/verify',headers=h,json={'code':otp['debug_code']}); assert good.status_code==200
    cfg=c.get('/api/notifications').json(); assert cfg['whatsapp_verified']==1 and cfg['notify_other_enquiries']==0

    # Form lead => client email + admin email + verified WhatsApp.
    lead=c.post('/api/leads',json={'site_id':sid,'source':'FORM','name':'Asha','email':'asha@example.com','phone':'9000000000','message':'Interested in the service.'}); assert lead.status_code==200
    out=c.get('/api/debug/outbox').json()['items']; channels=[x['channel'] for x in out]; assert 'EMAIL' in channels and 'WHATSAPP' in channels
    assert any(x['recipient']=='+919876543210' and x['channel']=='WHATSAPP' for x in out)
    assert any(x['recipient']=='owner@example.com' and x['channel']=='EMAIL' for x in out)
    assert any(x['recipient']=='admin@example.com' and x['channel']=='EMAIL' for x in out)

    # Chatbot lead and lead inbox.
    r=c.post('/api/leads',json={'site_id':sid,'source':'CHATBOT','name':'Ravi','email':'ravi@example.com','message':'Can you help?'}); assert r.status_code==200
    leads=c.get('/api/leads').json()['items']; assert {x['source'] for x in leads}>={'FORM','CHATBOT'}

    # Appointment booking and conflict protection.
    start=(datetime.now(timezone.utc)+timedelta(days=1)).replace(microsecond=0).isoformat()
    appt={'site_id':sid,'name':'Nila','email':'nila@example.com','starts_at':start}
    assert c.post('/api/appointments',json=appt).status_code==200
    assert c.post('/api/appointments',json=appt).status_code==409

    # The regional Starter entitlement is active; AI-created page count is still prompt-driven rather than plan-driven.
    assert c.get('/api/auth/me').json()['plan']=='STARTER'

    # Source export is independent from ownership transfer and is paid/configurable.
    locked=c.get(f'/api/sites/{sid}/export'); assert locked.status_code==402
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert order.status_code==200
    oj=order.json(); verify=c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':oj['order_id'],'payment_id':oj['mock_payment_id'],'signature':oj['mock_signature']}); assert verify.status_code==200
    exp=c.get(f'/api/sites/{sid}/export'); assert exp.status_code==200 and exp.headers['content-type']=='application/zip'
    z=zipfile.ZipFile(io.BytesIO(exp.content)); names=set(z.namelist()); assert {'package.json','next.config.mjs','app/page.jsx','app/layout.jsx','zylora-site.json'} <= names
    manifest=__import__('json').loads(z.read('zylora-site.json')); assert len(manifest['pages'])>=1 and manifest['export_format'].startswith('Next.js')
    exported='\n'.join(z.read(n).decode(errors='ignore') for n in names if n.endswith(('.jsx','.json','.md'))); assert 'Designed with intent.' in exported and 'Updated copy for a focused premium website.' in exported

    # SEO endpoints.
    assert c.get('/robots.txt').status_code==200; assert c.get('/sitemap.xml').status_code==200
    c.close()


def test_authorization_and_site_limits():
    reset_db(); a,ha=auth_client('a@example.com','A User'); sid=create_site(a,ha,'Site A',origin='AI')
    b,hb=auth_client('b@example.com','B User')
    assert b.get(f'/api/sites/{sid}').status_code==404
    assert b.put(f'/api/sites/{sid}',headers=hb,json={'tagline':'hacked'}).status_code==404
    legacy=a.post('/api/sites',headers=ha,json={'business_name':'Premium Template','description':'A sufficiently long description for removed-template validation.','template_slug':'northstar-cloud','origin':'TEMPLATE','industry':'Tech','style':'Glass'})
    assert legacy.status_code==410
    a.close(); b.close()


def test_single_live_site_switching():
    reset_db(); c,h=auth_client(); activate_zylora(c,h,'US'); s1=create_site(c,h,'One',origin='AI'); s2=create_site(c,h,'Two','copper-table',origin='AI')
    assert c.post(f'/api/sites/{s1}/publish',headers=h).status_code==200
    assert c.post(f'/api/sites/{s2}/publish',headers=h).status_code==200
    sites=c.get('/api/sites').json()['items']; assert sum(x['status']=='LIVE' for x in sites)==1; assert next(x for x in sites if x['id']==s2)['status']=='LIVE'
    c.close()


def test_notification_toggles_control_whatsapp():
    reset_db(); c,h=auth_client(); activate_zylora(c,h,'US'); sid=create_site(c,h,origin='AI'); assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    c.put('/api/notifications',headers=h,json={'email_to':'owner@example.com','country_code':'+91','phone_number':'9876543210','notify_new_form_lead':False,'notify_new_chatbot_lead':True,'notify_new_appointment':True,'notify_appointment_cancelled_or_rescheduled':True,'notify_other_enquiries':True})
    otp=c.post('/api/notifications/whatsapp/request-otp',headers=h).json(); c.post('/api/notifications/whatsapp/verify',headers=h,json={'code':otp['debug_code']})
    with SessionLocal.begin() as db: db.execute(text("DELETE FROM outbox"))
    c.post('/api/leads',json={'site_id':sid,'source':'FORM','name':'No WA','email':'no@example.com','message':'test'})
    rows=c.get('/api/debug/outbox').json()['items']; assert all(x['channel']!='WHATSAPP' for x in rows)
    c.post('/api/leads',json={'site_id':sid,'source':'CHATBOT','name':'Yes WA','email':'yes@example.com','message':'test'})
    rows=c.get('/api/debug/outbox').json()['items']; assert any(x['channel']=='WHATSAPP' for x in rows)
    c.close()


def test_published_ai_site_seo_has_clean_title_and_absolute_canonical():
    reset_db(); c,h=auth_client('seo-owner@example.com','SEO Owner'); activate_zylora(c,h,'US')
    r=c.post('/api/sites',headers=h,json={
        'business_name':'Seo Test Biz',
        'description':'A boutique architecture studio focused on light, material and climate-responsive spaces.',
        'template_slug':'atelier-noir','origin':'AI','industry':'Architecture','style':'Editorial'
    })
    assert r.status_code==200, r.text
    sid=r.json()['id']
    site=c.get(f'/api/sites/{sid}').json()
    assert not site['tagline'].lower().startswith('seo test biz')
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']
    pub=c.get(f'/s/{slug}')
    assert pub.status_code==200
    assert 'Seo Test Biz — Seo Test Biz' not in pub.text
    assert '<title>Seo Test Biz — A boutique architecture studio focused on light, material' in pub.text
    from bs4 import BeautifulSoup
    seo_soup=BeautifulSoup(pub.text,'html.parser')
    assert seo_soup.select_one('link[rel="canonical"]')['href']==f'http://127.0.0.1:8000/s/{slug}'
    assert f'<meta property="og:url" content="http://127.0.0.1:8000/s/{slug}">' in pub.text

    templates=c.get('/templates',follow_redirects=False)
    assert templates.status_code==307 and templates.headers['location']=='/signup'

    landing=c.get('/')
    assert landing.status_code==200
    assert '<title>Zylora' in landing.text
    c.close()


def test_production_app_url_guard_rejects_dev_origins():
    from app.config import settings
    from app.main import _public_base_url
    old_env,old_url=settings.app_env,settings.app_url
    try:
        settings.app_env='production'; settings.app_url='http://127.0.0.1:8000'
        try:
            _public_base_url()
            assert False, 'production localhost APP_URL must be rejected'
        except RuntimeError as exc:
            assert 'real public Zylora origin' in str(exc)
        settings.app_url='https://zylora.example'
        try:
            _public_base_url()
            assert False, '.example APP_URL must be rejected in production'
        except RuntimeError:
            pass
        settings.app_url='https://zylora.test-domain.com'
        assert _public_base_url()=='https://zylora.test-domain.com'
    finally:
        settings.app_env,settings.app_url=old_env,old_url
