from __future__ import annotations
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits, now_iso
from tests.billing_helpers import activate_zylora

TABLES=['assistant_usage','assistant_messages','assistant_conversations','sales_assistant_configs','subscriptions','billing_profiles','assistant_action_keys','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for t in TABLES: db.execute(text(f'DELETE FROM {t}'))
        db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def signup(email='user@example.com', name='User', verify=True):
    c=TestClient(app); r=c.post('/api/auth/signup',json={'name':name,'email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text; j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    if verify:
        assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h,j

def site(c,h,name='Studio',template='atelier-noir',origin='AI'):
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':'A premium independent business with enough detail for a real website.','template_slug':template,'origin':origin,'industry':'Business','style':'Editorial'})
    assert r.status_code==200,r.text; return r.json()['id']

def test_email_verification_and_password_reset():
    reset_db(); c,h,j=signup(verify=False); sid=site(c,h)
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==403
    assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    rr=c.post('/api/auth/password/request',json={'email':'user@example.com'}); assert rr.status_code==200 and rr.json().get('debug_token')
    token=rr.json()['debug_token']; assert c.post('/api/auth/password/confirm',json={'token':token,'password':'NewSecurePass456!'}).status_code==200
    assert c.get('/api/auth/me').status_code==401
    assert c.post('/api/auth/login',json={'email':'user@example.com','password':'SecurePass123!'}).status_code==401
    assert c.post('/api/auth/login',json={'email':'user@example.com','password':'NewSecurePass456!'}).status_code==200


def test_google_oauth_mock_flow():
    reset_db(); c=TestClient(app)
    r=c.get('/api/auth/google/start?mock=1&email=oauth.user@example.com',follow_redirects=True)
    assert r.status_code==200
    me=c.get('/api/auth/me'); assert me.status_code==200
    j=me.json(); assert j['email']=='oauth.user@example.com' and j['email_verified']==1
    with SessionLocal() as db:
        row=db.execute(text('SELECT google_sub FROM users WHERE email=:e'),{'e':'oauth.user@example.com'}).first()
    assert row and row[0].startswith('mock-')


def test_domains_ssl_google_sheets_and_custom_host_runtime():
    reset_db(); c,h,_=signup(); activate_zylora(c,h,'GB'); sid=site(c,h,'Domain Studio','luma-wellness')
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    s=c.get(f'/api/sites/{sid}').json(); slug=s['slug']
    d=c.post(f'/api/sites/{sid}/domains',headers=h,json={'hostname':'www.domain-studio.example'}); assert d.status_code==200,d.text
    did=d.json()['id']; assert d.json()['status']=='PENDING'
    rr=c.post(f'/api/domains/{did}/refresh',headers=h); assert rr.status_code==200 and rr.json()['status']=='ACTIVE' and rr.json()['ssl_status']=='ACTIVE'
    hosted=c.get('/',headers={'host':'www.domain-studio.example'}); assert hosted.status_code==200 and 'Domain Studio' in hosted.text

    gs=c.put(f'/api/sites/{sid}/integrations/google-sheets',headers=h,json={'spreadsheet_url':'https://docs.google.com/spreadsheets/d/TESTSHEET1234567890/edit#gid=0','sheet_name':'Leads','enabled':True,'sync_leads':True,'sync_appointments':True}); assert gs.status_code==200,gs.text
    assert gs.json()['spreadsheet_id']=='TESTSHEET1234567890'
    tst=c.post(f'/api/sites/{sid}/integrations/google-sheets/test',headers=h); assert tst.status_code==200 and tst.json()['provider']=='local'
    pub=c.get(f'/api/public/sites/{sid}/integrations').json(); assert pub['google_sheets_connected'] is True
    lead=c.post('/api/leads',json={'site_id':sid,'source':'FORM','name':'Sheet Lead','email':'sheet.lead@example.com','message':'Please sync me.'}); assert lead.status_code==200
    with SessionLocal() as db:
        sheet_rows=db.execute(text("SELECT body FROM outbox WHERE channel='GOOGLE_SHEETS' ORDER BY created_at")).fetchall()
    assert len(sheet_rows)>=2 and any('FORM_LEAD' in row[0] for row in sheet_rows)

    # Customer websites intentionally have no blog CMS or /blog runtime.
    assert c.get(f'/api/sites/{sid}/blog',headers=h).status_code==404
    assert c.post(f'/api/sites/{sid}/blog',headers=h,json={'title':'Not available','excerpt':'Customer blog is disabled.','content':'This content must never be accepted as a site-owned blog post.'}).status_code==404
    assert c.get(f'/s/{slug}/blog').status_code==404
    sitemap=c.get('/sitemap.xml').text; assert f'/s/{slug}/blog' not in sitemap and f'/s/{slug}' not in sitemap
    hosted_sitemap=c.get('/sitemap.xml',headers={'host':'www.domain-studio.example'}).text
    assert 'https://www.domain-studio.example' in hosted_sitemap and f'/s/{slug}' not in hosted_sitemap


def test_ownership_transfer():
    reset_db(); owner,ho,_=signup('owner@example.com','Owner'); sid=site(owner,ho,'Transfer Site')
    target,ht,_=signup('target@example.com','Target')
    r=owner.post(f'/api/sites/{sid}/transfer',headers=ho,json={'email':'target@example.com'}); assert r.status_code==200
    token=r.json()['debug_token']; accepted=target.post('/api/ownership/accept',headers=ht,json={'token':token}); assert accepted.status_code==200
    assert owner.get(f'/api/sites/{sid}').status_code==404
    assert target.get(f'/api/sites/{sid}').status_code==200


def test_razorpay_mock_managed_crm_and_admin_control_plane():
    reset_db(); user,h,_=signup('buyer@example.com','Buyer')
    verified=activate_zylora(user,h,'GB'); assert verified['plan']=='STARTER' and verified['currency']=='USD' and verified['amount_minor']==900
    assert user.get('/api/billing').json()['plan']=='STARTER'

    pro=user.post('/api/pro/enquiries',json={'name':'Asha Rao','email':'asha@example.com','website_type':'Boutique hotel website','preferred_contact_time':'Weekdays after 6 PM IST'}); assert pro.status_code==200 and pro.json()['lead_code'].startswith('ZPRO-')

    assert user.get('/api/admin/blog').status_code in {401,403}
    assert user.post('/api/admin/blog',headers=h,json={'title':'Blocked user post','excerpt':'Normal users cannot publish platform articles.','content':'This write must be rejected because the platform blog is SUPER_ADMIN only.'}).status_code in {401,403}

    admin,ha,_=signup('superadmin@example.com','Admin')
    with SessionLocal.begin() as db: db.execute(text("UPDATE users SET role='SUPER_ADMIN',plan='STARTER',ai_credits=500 WHERE email='superadmin@example.com'"))
    overview=admin.get('/api/admin/overview'); assert overview.status_code==200 and overview.json()['pro_leads']==1
    users=admin.get('/api/admin/users').json()['items']; assert any(x['email']=='buyer@example.com' for x in users)
    plans=admin.get('/api/admin/plans').json()['items']; starter=next(x for x in plans if x['plan']=='STARTER'); old_inr,old_usd=starter['price_inr_minor'],starter['price_usd_minor']
    patch={k:starter[k] for k in ('public_name','site_limit','page_limit','ai_credits','lead_credits','signup_bonus_credits','ai_site_cost','ai_edit_cost','contact_only')}; patch.update(price_inr_minor=old_inr+100,price_usd_minor=old_usd+1)
    regional=admin.patch('/api/admin/plans/STARTER',headers=ha,json=patch); assert regional.status_code==200
    starter_updated=next(x for x in admin.get('/api/admin/plans').json()['items'] if x['plan']=='STARTER'); assert starter_updated['price_inr_minor']==old_inr+100 and starter_updated['price_usd_minor']==old_usd+1
    patch.update(price_inr_minor=old_inr,price_usd_minor=old_usd); assert admin.patch('/api/admin/plans/STARTER',headers=ha,json=patch).status_code==200
    provider_settings=admin.put('/api/admin/settings',headers=ha,json={'starter_india_provider_plan_id':'plan_starter_in','starter_international_provider_plan_id':'plan_starter_us','growth_india_provider_plan_id':'plan_growth_in','growth_international_provider_plan_id':'plan_growth_us'}); assert provider_settings.status_code==200
    pro_rows=admin.get('/api/admin/pro-leads').json()['items']; lead=pro_rows[0]
    assert admin.patch(f"/api/admin/pro-leads/{lead['id']}",headers=ha,json={'status':'CLOSED','amount_received_minor':250000,'currency':'INR','internal_notes':'Project confirmed'}).status_code==200
    bp=admin.post('/api/admin/blog',headers=ha,json={'title':'What makes a business website credible','excerpt':'A practical framework for clarity, trust and conversion without generic design patterns.','content':'Credibility begins with relevance.\n\nDesign should make the business easier to understand.','seo_title':'What makes a business website credible | Zylora','seo_description':'A practical Zylora guide to website credibility, clarity, trust and conversion.'}); assert bp.status_code==200
    assert admin.post(f"/api/admin/blog/{bp.json()['id']}/publish",headers=ha).status_code==200
    assert admin.get('/blog').status_code==200 and 'What makes a business website credible' in admin.get('/blog').text
    assert admin.get('/api/admin/audit').status_code==200
