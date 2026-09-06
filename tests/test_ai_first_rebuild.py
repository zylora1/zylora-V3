from __future__ import annotations
import io, zipfile
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits


def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for t in ['cms_ai_proposals','cms_item_relations','cms_item_values','cms_item_revisions','cms_bindings','cms_dynamic_pages','cms_permissions','cms_views','cms_items','cms_fields','cms_collections','site_revisions','editor_history','media_assets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','generation_jobs','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','rate_limit_buckets','sites','sessions','users']:
            try: db.execute(text(f'DELETE FROM {t}'))
            except Exception: pass


def auth():
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Rebuild QA','email':'rebuild-qa@example.com','password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    if j.get('debug_verification_token'):
        assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h


def test_catalogue_removed_ai_is_template_independent_and_exportable():
    reset_db(); c,h=auth()
    items=c.get('/api/templates').json()['items']; assert len(items)>=40 and all(x.get('publication',{}).get('state')=='public' for x in items)
    legacy=c.post('/api/sites',headers=h,json={'business_name':'Legacy','description':'A valid business description for a removed legacy template.','template_slug':'atelier-noir','origin':'TEMPLATE'})
    assert legacy.status_code in {400,404,409}
    created=c.post('/api/sites',headers={**h,'Idempotency-Key':'ai-first-rebuild'},json={
        'business_name':'Harbor Dental',
        'description':'Create a dental clinic website with separate Home, About, Services, Dentists, Appointments and Contact pages for families.',
        'origin':'AI','industry':'Dentist','style':'swiss-minimal','motion_style':'Subtle'})
    assert created.status_code==200,created.text
    sid=created.json()['id']; assert created.json()['page_count']>=5
    site=c.get(f'/api/sites/{sid}').json()
    assert site['template_slug']=='ai-runtime' and site['origin']=='AI'
    preview=c.get(f'/api/sites/{sid}/preview')
    assert preview.status_code==200
    assert 'Harbor Dental' in preview.text and 'TEMPLATE-00' not in preview.text and 'template-thumbnails' not in preview.text
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json()
    assert len(doc['structure']['pages'])==created.json()['page_count']
    # Development source-export entitlement is created through the mock checkout.
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert order.status_code==200
    o=order.json(); assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':o['order_id'],'payment_id':o['mock_payment_id'],'signature':o['mock_signature']}).status_code==200
    exp=c.get(f'/api/sites/{sid}/export'); assert exp.status_code==200,exp.text
    z=zipfile.ZipFile(io.BytesIO(exp.content)); names=set(z.namelist())
    assert {'package.json','next.config.mjs','app/page.jsx','app/layout.jsx','app/site-page.jsx','app/globals.css','zylora-site.json'}<=names
    manifest=__import__('json').loads(z.read('zylora-site.json'))
    assert manifest['renderer']=='ai-runtime' and manifest['origin']=='AI'
    assert b'prompt-derived SiteDocument' in z.read('README-ZYLORA.md')


def test_minimal_brand_font_and_public_template_runtime_not_exposed():
    c=TestClient(app)
    home=c.get('/'); assert home.status_code==200
    assert 'Space+Grotesk' in home.text and 'Wix+Madefor' not in home.text
    assert 'Build a website that brings you customers' in home.text or 'Build a premium website' in home.text
    templates=c.get('/templates'); assert templates.status_code==200 and ('Designed one by one.' in templates.text or 'Curated Website Templates' in templates.text)
    assert c.get('/template-preview/ai-runtime').status_code==404
