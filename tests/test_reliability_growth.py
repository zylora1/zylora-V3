from __future__ import annotations

from datetime import datetime, timedelta, timezone
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits


def reset_db():
    migrate(); clear_rate_limits()
    tables=[
        'ai_edit_previews','payment_recovery_cases','operational_events','publish_qa_runs','site_backups','notification_deliveries',
        'credit_topup_orders','credit_transactions','published_versions','generation_jobs','contacts','turnstile_token_uses',
        'indexnow_queue','site_redirects','site_revisions','editor_history','media_assets','rate_limit_buckets',
        'source_export_entitlements','source_export_orders','analytics_events','appointment_settings','chatbot_messages',
        'site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations',
        'custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps',
        'notification_settings','appointments','leads','assistant_messages','assistant_conversations','assistant_settings','assistant_usage','subscriptions','billing_profiles','oauth_states','auth_tokens','sites','sessions','users'
    ]
    with SessionLocal.begin() as db:
        for table in tables:
            try: db.execute(text(f'DELETE FROM {table}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='publish_qa_blocking'"))


def signup(email='reliability@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Reliability User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    h={'X-CSRF-Token':j['csrf_token']}; assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h


def create_site(c,h,name='Reliability Studio'):
    r=c.post('/api/sites',headers={**h,'Idempotency-Key':f'create-{name}'},json={
        'business_name':name,'description':'A one-page consulting studio with clear services and a contact call to action.',
        'template_slug':'atelier-noir','origin':'AI','industry':'Consulting','style':'Editorial','motion_style':'None'
    })
    assert r.status_code==200,r.text
    return r.json()['id']


def test_backup_restore_health_and_publish_preflight():
    reset_db(); c,h=signup(); sid=create_site(c,h)
    original=c.get(f'/api/sites/{sid}').json()['tagline']
    b=c.post(f'/api/sites/{sid}/backups',headers=h,json={'label':'Before copy change'})
    assert b.status_code==200,b.text; bid=b.json()['backup']['id']
    assert c.put(f'/api/sites/{sid}',headers=h,json={'tagline':'Temporary changed tagline'}).status_code==200
    assert c.get(f'/api/sites/{sid}').json()['tagline']=='Temporary changed tagline'
    restored=c.post(f'/api/sites/{sid}/backups/{bid}/restore',headers=h)
    assert restored.status_code==200,restored.text
    assert c.get(f'/api/sites/{sid}').json()['tagline']==original
    health=c.get(f'/api/sites/{sid}/health'); assert health.status_code==200,health.text
    assert health.json()['score']>=0 and 'launch' in health.json()
    pub=c.post(f'/api/sites/{sid}/publish',headers=h); assert pub.status_code==200,pub.text
    with SessionLocal() as db:
        reasons=[x[0] for x in db.execute(text('SELECT reason FROM site_backups WHERE site_id=:s'),{'s':sid}).all()]
        assert 'PRE_PUBLISH' in reasons and 'PRE_RESTORE' in reasons
        assert db.execute(text('SELECT count(*) FROM publish_qa_runs WHERE site_id=:s'),{'s':sid}).scalar_one()>=1


def test_business_profile_design_system_and_sitewide_ai(monkeypatch):
    reset_db(); c,h=signup('design-system@example.com'); sid=create_site(c,h,'Design System Studio')
    p=c.patch(f'/api/sites/{sid}/business-profile',headers=h,json={
        'business_name':'Unified Studio','tagline':'One source of truth','description':'Unified business information.',
        'phone':'+91 90000 00000','country':'India','services':['Strategy','Design']
    })
    assert p.status_code==200,p.text
    site=c.get(f'/api/sites/{sid}').json(); assert site['business_name']=='Unified Studio' and site['tagline']=='One source of truth'
    brand=c.patch(f'/api/sites/{sid}/brand',headers=h,json={
        'primary':'#111111','accent':'#4f46e5','muted':'#667085','border':'#e4e7ec','container_width':'1280px',
        'section_spacing':'96px','content_gap':'24px','body_font_size':'16px','heading_scale':'balanced'
    })
    assert brand.status_code==200,brand.text
    assert brand.json()['brand']['container_width']=='1280px'
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); h1=next(x for x in doc['nodes'] if x.get('tag')=='h1')
    import app.api_operations as ops
    def fake_generate(context,instruction,page):
        if page!='home': return [],'test'
        return [{'page':'home','type':'set_text','selector':f'[data-zylora-id="{h1["id"]}"]','text':'Improved site-wide headline'}],'test'
    monkeypatch.setattr(ops,'generate_operations',fake_generate)
    preview=c.post(f'/api/sites/{sid}/ai-edit/sitewide',headers=h,json={'instruction':'Improve the headline site-wide','expected_version':doc['document_version'],'preview_only':True})
    assert preview.status_code==200,preview.text; assert preview.json()['impact']['operations']==1
    applied=c.post(f'/api/sites/{sid}/ai-edit/sitewide',headers=h,json={'instruction':'Improve the headline site-wide','expected_version':doc['document_version'],'preview_only':False,'preview_id':preview.json()['preview_id']})
    assert applied.status_code==200,applied.text and applied.json()['applied'] is True
    with SessionLocal() as db:
        assert db.execute(text("SELECT count(*) FROM site_backups WHERE site_id=:s AND reason='PRE_AI_SITEWIDE'"),{'s':sid}).scalar_one()==1


def test_first_party_growth_tracking_and_payment_recovery_surface():
    reset_db(); c,h=signup('growth@example.com'); sid=create_site(c,h,'Growth Studio')
    pub=c.post(f'/api/sites/{sid}/publish',headers=h); assert pub.status_code==200,pub.text
    for session in ('session-a-12345','session-b-12345'):
        r=c.post('/api/public/analytics',json={'site_id':sid,'event_type':'PAGE_VIEW','session_id':session,'path':'/','device':'mobile'})
        assert r.status_code==200,r.text
    assert c.post('/api/public/analytics',json={'site_id':sid,'event_type':'CTA_CLICK','session_id':'session-a-12345','path':'/','label':'Book now'}).status_code==200
    growth=c.get(f'/api/growth?days=30&site_id={sid}'); assert growth.status_code==200,growth.text
    t=growth.json()['totals']; assert t['page_views']==2 and t['visitors']==2 and t['cta_clicks']==1

    # The recovery surface must monitor the current regional subscription lifecycle,
    # not create a forbidden new Starter/Growth order.  Leave a server-created
    # subscription unverified, age it, and ensure it is surfaced without granting
    # the paid entitlement.
    order=c.post('/api/billing/subscription',headers={**h,'Idempotency-Key':'recovery-current-sub','cf-ipcountry':'GB'},json={}); assert order.status_code==200,order.text
    local=order.json()['local_subscription_id']
    with SessionLocal.begin() as db:
        db.execute(text('UPDATE subscriptions SET created_at=:a WHERE id=:i'),{'a':(datetime.now(timezone.utc)-timedelta(hours=2)).isoformat(),'i':local})
    recovery=c.get('/api/billing/recovery'); assert recovery.status_code==200,recovery.text
    item=next(x for x in recovery.json()['items'] if x['local_order_id']==local)
    assert item['order_kind']=='SUBSCRIPTION'
    assert c.get('/api/auth/me').json()['plan']=='FREE'


def test_publish_qa_can_block_a_rendering_defect(monkeypatch):
    reset_db(); c,h=signup('qa-block@example.com'); sid=create_site(c,h,'QA Block Studio')
    import app.api as api_mod
    def blocked(site,user_id,persist=True):
        return {'score':40,'blocking_count':1,'warning_count':0,'blockers':[{'code':'BROKEN_INTERNAL_LINK','message':'Broken internal link','page':'home'}],'warnings':[],'pages_checked':1,'seo':{},'generated_at':'now','publishable':False,'run_id':'qa-test'}
    monkeypatch.setattr(api_mod,'run_site_qa',blocked)
    r=c.post(f'/api/sites/{sid}/publish',headers=h)
    assert r.status_code==409,r.text
    assert r.json()['detail']['code']=='PUBLISH_QA_BLOCKED'
