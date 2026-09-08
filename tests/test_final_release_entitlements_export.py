from __future__ import annotations
import io, zipfile
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits

TABLES=['site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in TABLES: db.execute(text(f'DELETE FROM {table}'))
        for plan,limit in [('FREE',2),('STARTER',5),('GROWTH',8),('PRO',10)]:
            db.execute(text('UPDATE plan_configs SET page_limit=:l,site_limit=10 WHERE plan=:p'),{'l':limit,'p':plan})

def raw_signup(email='final@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Final User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    assert j['plan_selected'] is False
    assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    return c,h,j

def ai_site(c,h,name='Final Site'):
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':'A complete business description for the final entitlement and export certification.','template_slug':'atelier-noir','origin':'AI','industry':'Consulting','style':'Editorial'})
    assert r.status_code==200,r.text
    return r.json()['id'],r.json()['page_count']

def test_signup_requires_explicit_plan_choice_and_ai_publish_is_not_page_gated():
    reset_db(); c,h,_=raw_signup()
    me=c.get('/api/auth/me').json(); assert me['plan']=='FREE' and me['plan_selected'] is False
    chooser=c.get('/choose-plan'); assert chooser.status_code==200 and 'Start free. Upgrade as your business grows.' in chooser.text and '₹799/month' in chooser.text and 'US$9/month' in chooser.text and '₹1,799/month' in chooser.text and 'US$19/month' in chooser.text and 'finite Sales Assistant Protection allowance' in chooser.text
    sid,pages=ai_site(c,h); assert pages>=1
    blocked=c.post(f'/api/sites/{sid}/publish',headers=h)
    assert blocked.status_code==409 and blocked.json()['detail']['code']=='PLAN_SELECTION_REQUIRED'
    assert c.post('/api/billing/select',headers=h,json={'plan':'STARTER'}).status_code==409
    selected=c.post('/api/billing/select',headers=h,json={'plan':'FREE'}); assert selected.status_code==200
    # AI information architecture is prompt-driven, so a Free plan may publish an AI site
    # whose page graph exceeds the template-site entitlement.
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200


def test_legacy_template_creation_is_blocked_while_catalogue_is_rebuilt():
    reset_db(); c,h,_=raw_signup('upgrade@example.com'); assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    r=c.post('/api/sites',headers=h,json={'business_name':'Removed Template','description':'A complete template-site description for removed catalogue validation.','template_slug':'atelier-noir','origin':'TEMPLATE','industry':'Consulting','style':'Editorial'})
    assert r.status_code==410
    assert c.get('/api/templates').json()=={'items':[],'retired':True}

def test_pro_contact_only_blocks_ai_and_has_no_wallet_while_ai_cap_is_product_level():
    reset_db(); c,h,_=raw_signup('aicap@example.com'); assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    uid=c.get('/api/auth/me').json()['id']
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET plan='PRO',plan_selected=1 WHERE id=:u"),{'u':uid})
        db.execute(text("UPDATE plan_configs SET page_limit=3 WHERE plan='GROWTH'"))
    me=c.get('/api/auth/me').json(); assert me['credit_wallet']['contact_only'] is True and me['credit_wallet']['ai'] is None and me['credit_wallet']['lead'] is None
    with SessionLocal() as db: assert db.execute(text('SELECT count(*) FROM credit_wallets WHERE user_id=:u'),{'u':uid}).scalar_one()==0
    r=c.post('/api/sites',headers=h,json={'business_name':'Managed Account','description':'A valid business description for a managed account.','template_slug':'atelier-noir','origin':'AI','industry':'Consulting','style':'Editorial'})
    assert r.status_code==403 and r.json()['detail']['code']=='MANAGED_SELF_SERVICE_UNAVAILABLE'
    billing=c.get('/api/billing').json(); assert billing['limits']['ai_max_pages']==20


def test_paid_source_export_contains_next16_static_metadata_route_opt_in():
    reset_db(); c,h,_=raw_signup('export-static@example.com'); assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    sid,_=ai_site(c,h,'Export Static Site')
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert order.status_code==200
    o=order.json(); assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':o['order_id'],'payment_id':o['mock_payment_id'],'signature':o['mock_signature']}).status_code==200
    exp=c.get(f'/api/sites/{sid}/export'); assert exp.status_code==200
    z=zipfile.ZipFile(io.BytesIO(exp.content))
    robots=z.read('app/robots.js').decode(); sitemap=z.read('app/sitemap.js').decode()
    assert "export const dynamic='force-static';" in robots
    assert "export const dynamic='force-static';" in sitemap
    assert robots.index("export const dynamic='force-static';") < robots.index('export default function robots')
    assert sitemap.index("export const dynamic='force-static';") < sitemap.index('export default function sitemap')
