from __future__ import annotations
import json
from xml.etree import ElementTree as ET
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate, now_iso
from app.security import clear_rate_limits

TABLES=['turnstile_token_uses','indexnow_queue','site_redirects','published_versions','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in TABLES:
            try: db.execute(text(f'DELETE FROM {table}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def owner_and_site(email='sitemap@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Sitemap Owner','email':email,'password':'SecurePass123!'})
    j=r.json(); c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']})
    h={'X-CSRF-Token':j['csrf_token']}
    c.post('/api/billing/select',headers=h,json={'plan':'FREE'})
    s=c.post('/api/sites',headers=h,json={'business_name':'Sitemap Studio','description':'A public studio site.','template_slug':'luma-wellness','origin':'AI','industry':'Studio','style':'Editorial'})
    return c,h,s.json()['id']

def parse_urls(xml: str):
    root=ET.fromstring(xml)
    ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
    return [{node.tag.rsplit('}',1)[-1]:node.text for node in url} for url in root.findall('s:url',ns)]

def test_platform_sitemap_uses_effective_tags_and_true_lastmod():
    reset_db()
    with TestClient(app) as c:
        r=c.get('/sitemap.xml')
        assert r.status_code==200
        assert '<priority>' not in r.text and '<changefreq>' not in r.text
        rows=parse_urls(r.text)
        assert {x['loc'].rstrip('/').rsplit('/',1)[-1] for x in rows} >= {'127.0.0.1:8000','templates','freelancers','blog'}
        assert all(x.get('lastmod','').endswith('Z') for x in rows)
        assert rows[0]['loc'].endswith('/')
        robots=c.get('/robots.txt').text
        assert 'User-agent: OAI-SearchBot' in robots and 'Sitemap:' in robots

def test_platform_sitemap_never_leaks_draft_page_graph():
    reset_db(); c,h,sid=owner_and_site()
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    site=c.get(f'/api/sites/{sid}').json(); slug=site['slug']
    before=c.get('/sitemap.xml').text
    assert f'/s/{slug}' in before
    # Add a draft-only page after publish. Public discovery must remain bound to the
    # immutable published graph until the owner publishes again.
    with SessionLocal.begin() as db:
        row=db.execute(text('SELECT draft_structure_json FROM sites WHERE id=:s'),{'s':sid}).first()
        doc=json.loads(row[0]); doc.setdefault('pages',[]).append({'id':'secret-draft','sections':[]})
        db.execute(text('UPDATE sites SET draft_structure_json=:j,updated_at=:a WHERE id=:s'),{'j':json.dumps(doc),'a':now_iso(),'s':sid})
    after=c.get('/sitemap.xml').text
    assert 'secret-draft' not in after
    assert c.get(f'/s/{slug}/secret-draft').status_code==404

def test_platform_sitemap_respects_published_noindex_and_custom_domain_canonical():
    reset_db(); c,h,sid=owner_and_site('canonical-sitemap@example.com')
    assert c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={'indexable':False}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']
    assert f'/s/{slug}' not in c.get('/sitemap.xml').text
    # Re-enable and republish, then activate a canonical custom domain. The fallback
    # hosted URL disappears from the platform sitemap; the custom domain owns discovery.
    assert c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={'indexable':True}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    d=c.post(f'/api/sites/{sid}/domains',headers=h,json={'hostname':'www.sitemap-studio.example'}).json()
    assert c.post(f"/api/domains/{d['id']}/refresh",headers=h).status_code==200
    platform=c.get('/sitemap.xml').text
    assert f'/s/{slug}' not in platform
    owned=c.get('/sitemap.xml',headers={'host':'www.sitemap-studio.example'}).text
    assert 'https://www.sitemap-studio.example' in owned and f'/s/{slug}' not in owned
