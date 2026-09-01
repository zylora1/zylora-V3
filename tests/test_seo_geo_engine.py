from __future__ import annotations
import io, json, re, zipfile
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from app.seo_engine import structured_data_for_page
from tests.billing_helpers import activate_zylora

TABLES=['assistant_messages','assistant_conversations','assistant_settings','assistant_usage','subscriptions','billing_profiles','turnstile_token_uses','indexnow_queue','site_redirects','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for t in TABLES:
            try: db.execute(text(f'DELETE FROM {t}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def signup(email='seo@example.com'):
    c=TestClient(app); r=c.post('/api/auth/signup',json={'name':'SEO Owner','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text; j=r.json(); c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']})
    h={'X-CSRF-Token':j['csrf_token']}; assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h

def site(c,h,name='Acme Dental'):
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':'Family dental care with preventive and restorative services.','template_slug':'luma-wellness','origin':'AI','industry':'Dentist','style':'Editorial'})
    assert r.status_code==200,r.text; return r.json()['id']

def test_server_metadata_sitemap_robots_jsonld_custom_domain_and_redirects():
    reset_db(); c,h=signup(); activate_zylora(c,h,country='GB'); sid=site(c,h)
    s=c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={
        'site_title':'Acme Dental','description':'Family dental care in Chennai.','business_name':'Acme Dental','business_type':'Dentist','primary_topic':'Dental Clinic','primary_location':'Chennai','telephone':'+91 44 5555 0101','street':'10 Example Road','locality':'Chennai','region':'Tamil Nadu','postal_code':'600001','country':'IN','opening_hours':['Mo-Fr 09:00-17:00'],'service_area':['Chennai'],'social_profiles':['https://www.linkedin.com/company/acme-dental'],'indexable':True,'follow_links':True,'indexnow_enabled':True,'llms_txt':True
    }); assert s.status_code==200,s.text
    p=c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'services','title':'Dental Treatments in Chennai | Acme Dental','description':'Preventive and restorative dental treatments from Acme Dental in Chennai.','slug':'dental-treatments'}); assert p.status_code==200,p.text
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    live=c.get(f'/api/sites/{sid}').json(); slug=live['slug']
    home=c.get(f'/s/{slug}'); assert home.status_code==200
    from bs4 import BeautifulSoup
    soup=BeautifulSoup(home.text,'html.parser'); assert soup.find('meta',attrs={'name':'description'}) and soup.find('link',rel='canonical')
    assert 'application/ld+json' in home.text and 'Dentist' in home.text and 'Acme Dental' in home.text
    page=c.get(f'/s/{slug}/dental-treatments'); assert page.status_code==200 and 'Dental Treatments in Chennai' in page.text
    old=c.get(f'/s/{slug}/services',follow_redirects=False); assert old.status_code in {301,308} and old.headers['location'].endswith('/dental-treatments')
    robots=c.get(f'/s/{slug}/robots.txt'); assert robots.status_code==200 and 'OAI-SearchBot' in robots.text and f'/s/{slug}/sitemap.xml' in robots.text
    sm=c.get(f'/s/{slug}/sitemap.xml'); assert sm.status_code==200 and '/dental-treatments' in sm.text and '<lastmod>' in sm.text and '<priority>' not in sm.text and '<changefreq>' not in sm.text
    llms=c.get(f'/s/{slug}/llms.txt'); assert llms.status_code==200 and 'Acme Dental' in llms.text and '/api/' not in llms.text
    missing=c.get(f'/s/{slug}/definitely-missing')
    assert missing.status_code==404 and 'Page not found | Acme Dental' in missing.text
    assert 'noindex,nofollow' in missing.text and missing.headers.get('x-robots-tag')=='noindex, nofollow'

    d=c.post(f'/api/sites/{sid}/domains',headers=h,json={'hostname':'www.acme-dental.example'}); assert d.status_code==200
    did=d.json()['id']; assert c.post(f'/api/domains/{did}/refresh',headers=h).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    hosted=c.get('/dental-treatments',headers={'host':'www.acme-dental.example'}); assert hosted.status_code==200
    assert 'https://www.acme-dental.example/dental-treatments' in hosted.text
    r2=c.get('/robots.txt',headers={'host':'www.acme-dental.example'}); assert 'Sitemap: https://www.acme-dental.example/sitemap.xml' in r2.text
    s2=c.get('/sitemap.xml',headers={'host':'www.acme-dental.example'}); assert 'https://www.acme-dental.example/dental-treatments' in s2.text and f'/s/{slug}/' not in s2.text
    h404=c.get('/missing-on-custom-domain',headers={'host':'www.acme-dental.example'})
    assert h404.status_code==404 and 'noindex,nofollow' in h404.text and 'href="/"' in h404.text


def test_customer_blog_is_not_part_of_site_seo_or_runtime():
    reset_db(); c,h=signup('blogseo@example.com'); activate_zylora(c,h,country='GB'); sid=site(c,h,'Evidence Dental')
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']
    assert c.get(f'/api/sites/{sid}/blog',headers=h).status_code==404
    assert c.get(f'/s/{slug}/blog').status_code==404
    assert c.get(f'/s/{slug}/blog/example-post').status_code==404
    sm=c.get(f'/s/{slug}/sitemap.xml'); assert sm.status_code==200 and '/blog' not in sm.text

def test_seo_security_escaping_invalid_canonical_health_and_export_preservation():
    reset_db(); c,h=signup('escape@example.com'); activate_zylora(c,h,country='GB'); sid=site(c,h,'Safe & Sound')
    bad=c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'home','canonical':'javascript:alert(1)'}); assert bad.status_code==422
    x=c.patch(f'/api/sites/{sid}/seo',headers=h,json={'page':'home','title':'</title><script>alert(1)</script>','description':'<img src=x onerror=alert(1)>'}); assert x.status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']; html=c.get(f'/s/{slug}').text
    assert '<script>alert(1)</script>' not in html and '&lt;script&gt;' in html
    health=c.get(f'/api/sites/{sid}/seo/health'); assert health.status_code==200 and isinstance(health.json().get('issues'),list)
    # Development test grants a deterministic independent source-export entitlement.
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert order.status_code==200
    if not order.json().get('entitled'):
        o=order.json(); vr=c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':o['order_id'],'payment_id':o['mock_payment_id'],'signature':o['mock_signature']}); assert vr.status_code==200,vr.text
    data=c.get(f'/api/sites/{sid}/export'); assert data.status_code==200,data.text
    z=zipfile.ZipFile(io.BytesIO(data.content)); names=z.namelist(); assert 'app/robots.js' in names and 'app/sitemap.js' in names and 'zylora-seo.json' in names
    assert all(not n.startswith('/') and '..' not in n.split('/') and '\\' not in n for n in names)
    assert 'NEXT_PUBLIC_SITE_URL' in z.read('README-ZYLORA.md').decode()
    home_src=z.read('app/page.jsx').decode()
    assert 'NEXT_PUBLIC_SITE_URL' in home_src and 'metadataBase:new URL(zyloraSiteUrl)' in home_src
    assert 'alternates:{canonical:"/"}' in home_src and '/s/' not in home_src.split('export const metadata=',1)[1].split('export default',1)[0]
    assert 'app/not-found.jsx' in names and 'index:false' in z.read('app/not-found.jsx').decode()


def test_structured_data_has_stable_entity_ids_and_only_real_fields():
    reset_db(); c,h=signup('schema@example.com'); sid=site(c,h,'Schema Studio')
    c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={'business_name':'Schema Studio','business_type':'Organization','description':'A design studio.','indexable':True})
    with SessionLocal() as db: row=dict(db.execute(text('SELECT * FROM sites WHERE id=:s'),{'s':sid}).mappings().one())
    graph=structured_data_for_page(row,'home'); ids={x.get('@id') for x in graph if x.get('@id')}
    assert any(x and x.endswith('/#organization') for x in ids); assert any(x and x.endswith('/#website') for x in ids)
    blob=json.dumps(graph); assert 'aggregateRating' not in blob and 'openingHours' not in blob and 'telephone' not in blob
