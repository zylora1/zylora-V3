from __future__ import annotations
import io, json, re, zipfile
from pathlib import Path
import pytest
from bs4 import BeautifulSoup
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from tests.billing_helpers import activate_zylora
from app.link_icons import detect_link_platform, normalize_footer_links, footer_links_fragment, apply_footer_links_html
from app.structured_editor import validate_operation

TABLES=['turnstile_token_uses','indexnow_queue','site_redirects','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for t in TABLES:
            try: db.execute(text(f'DELETE FROM {t}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def signup(email):
    c=TestClient(app); r=c.post('/api/auth/signup',json={'name':'Owner','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text; j=r.json(); assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    h={'X-CSRF-Token':j['csrf_token']}; assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h

def create_site(c,h,name='Policy Studio',template='atelier-noir'):
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':'A public marketing website for a real business.','template_slug':template,'origin':'AI','industry':'Business','style':'Editorial'})
    assert r.status_code==200,r.text; return r.json()['id']

def test_platform_registry_parsing_lookalikes_unknown_shorteners_and_limit():
    cases={
      'https://INSTAGRAM.com/example':'instagram','https://www.youtube.com/@x':'youtube','https://x.com/example':'x',
      'https://facebook.com/example':'facebook','https://www.linkedin.com/company/x':'linkedin','https://tiktok.com/@x':'tiktok',
      'https://wa.me/919999999999':'whatsapp','https://t.me/example':'telegram','https://maps.google.com/?q=x':'google_maps',
      'https://g.page/example':'google_business','mailto:hello@domain.com':'email','tel:+919999999999':'phone',
      'https://open.spotify.com/artist/x':'spotify','https://apps.apple.com/app/id1':'app_store','https://play.google.com/store/apps/details?id=x':'google_play',
      'https://github.com/example':'github','https://medium.com/@example':'medium','https://behance.net/example':'behance',
      'https://dribbble.com/example':'dribbble','https://threads.net/@example':'threads','https://snapchat.com/add/example':'snapchat',
      'https://yelp.com/biz/example':'yelp','https://tripadvisor.com/Hotel_Review-x':'tripadvisor',
    }
    for url,platform in cases.items(): assert detect_link_platform(url)['platform']==platform,(url,detect_link_platform(url))
    assert detect_link_platform('https://evil-instagram.com/u')['platform']=='generic'
    assert detect_link_platform('https://example.org/profile')['platform']=='generic'
    assert detect_link_platform('https://bit.ly/abc')['platform']=='generic' and detect_link_platform('https://bit.ly/abc')['warning']
    with pytest.raises(Exception): detect_link_platform('javascript:alert(1)')
    with pytest.raises(Exception): normalize_footer_links([{'url':f'https://example{i}.com'} for i in range(9)])


def test_footer_rendering_accessibility_footer_only_and_tenant_scope():
    reset_db(); a,ha=signup('links-a@example.com'); b,hb=signup('links-b@example.com'); sa=create_site(a,ha,'Link A'); sb=create_site(b,hb,'Link B')
    payload={'links':[{'url':'https://instagram.com/example'},{'url':'mailto:hello@realbusiness.com'},{'url':'https://unknown.example/path'}]}
    assert a.put(f'/api/sites/{sa}/footer-links',headers=ha,json=payload).status_code==200
    assert a.put(f'/api/sites/{sb}/footer-links',headers=ha,json=payload).status_code in {403,404}
    assert a.get(f'/api/sites/{sb}/footer-links').status_code in {403,404}
    preview=a.get(f'/api/sites/{sa}/preview'); assert preview.status_code==200
    soup=BeautifulSoup(preview.text,'html.parser'); row=soup.select_one('footer [data-zylora-footer-links]'); assert row
    assert not soup.select_one('header [data-zylora-footer-links], main [data-zylora-footer-links]')
    links=row.select('a'); assert len(links)==3
    assert links[0].get('aria-label')=='Visit our Instagram' and links[0].get('target')=='_blank' and 'noopener' in (links[0].get('rel') or [])
    assert links[1].get('aria-label')=='Email us' and not links[1].get('target')
    # No configured links => no empty row.
    empty=apply_footer_links_html('<html><body><main></main><footer>F</footer></body></html>',[])
    assert 'zylora-footer-links' not in empty


def test_static_site_policy_blocks_fake_backend_controls_and_ai_policy_cost():
    with pytest.raises(ValueError): validate_operation({'page':'home','type':'set_html','selector':'#x','html':'<p>Our customer dashboard gives teams visibility.</p>'})
    with pytest.raises(ValueError): validate_operation({'page':'home','type':'set_html','selector':'#x','html':'<a href="https://app.real.example/login">Sign in</a>'})
    with pytest.raises(ValueError): validate_operation({'page':'home','type':'set_html','selector':'#x','html':'<form><input type="password"><button>Sign in</button></form>'})
    with pytest.raises(ValueError): validate_operation({'page':'home','type':'add_section','html':'<section><button>Add to cart</button></section>'})
    with pytest.raises(ValueError): validate_operation({'page':'home','type':'add_section','html':'<div class="zylora-footer-links"><a href="https://instagram.com/x">x</a></div>'})
    reset_db(); c,h=signup('ai-policy@example.com'); sid=create_site(c,h,'AI Policy')
    before=c.get('/api/credits').json()['total']
    r=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'page':'home','instruction':'Add a login form with password and forgot password'}); assert r.status_code==200,r.text
    j=r.json(); assert j['provider']=='policy' and j['operations']==[] and 'public' in j['message'].lower()
    after=c.get('/api/credits').json()['total']; assert after==before
    # A real external destination is accepted as configuration, without creating a per-site account backend.
    s=c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={'login_url':'https://app.realbusiness.example/login'}); assert s.status_code==200,s.text
    assert s.json()['seo']['external_destinations']['login_url'].startswith('https://')



def test_ai_social_icon_header_request_is_redirected_to_footer_without_fabrication():
    reset_db(); c,h=signup('ai-footer-policy@example.com'); sid=create_site(c,h,'Footer Policy')
    before=c.get('/api/credits').json()['total']
    missing=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'page':'home','instruction':'Put Instagram in the header'})
    assert missing.status_code==200,missing.text
    j=missing.json(); assert j['provider']=='policy' and j['operations']==[] and 'footer-only' in j['message'].lower() and 'need the real destination url' in j['message'].lower()
    assert j.get('footer_links')==[] and c.get('/api/credits').json()['total']==before
    configured=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'page':'home','instruction':'Put Instagram in the hero: https://instagram.com/realbusiness'})
    assert configured.status_code==200,configured.text
    k=configured.json(); assert k['provider']=='policy' and len(k.get('footer_links') or [])==1
    assert k['footer_links'][0]['platform']=='instagram'
    preview=c.get(f'/api/sites/{sid}/preview'); soup=BeautifulSoup(preview.text,'html.parser')
    assert soup.select_one('footer a[data-platform="instagram"]')
    assert not soup.select_one('header a[data-platform="instagram"], main a[data-platform="instagram"]')
    assert c.get('/api/credits').json()['total']==before

def test_footer_links_survive_publish_and_standalone_export_without_api_dependency():
    reset_db(); c,h=signup('export-links@example.com'); activate_zylora(c,h,'GB'); sid=create_site(c,h,'Export Links','copper-table')
    assert c.put(f'/api/sites/{sid}/footer-links',headers=h,json={'links':[{'url':'https://github.com/example'},{'url':'https://linkedin.com/company/example'}]}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    site=c.get(f'/api/sites/{sid}').json(); live=c.get(f"/s/{site['slug']}"); assert live.status_code==200 and 'data-zylora-footer-links' in live.text
    o=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert o.status_code==200
    if not o.json().get('entitled'):
        j=o.json(); v=c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':j['order_id'],'payment_id':j['mock_payment_id'],'signature':j['mock_signature']}); assert v.status_code==200,v.text
    zres=c.get(f'/api/sites/{sid}/export'); assert zres.status_code==200
    z=zipfile.ZipFile(io.BytesIO(zres.content)); js=z.read('app/zylora-edits.jsx').decode()
    assert 'github.com/example' in js and 'linkedin.com/company/example' in js and 'data-zylora-footer-links' in js
    assert '/api/sites/' not in js


def test_template_content_policy_and_consent_microcopy():
    forbidden=[r'@example\.com',r'₹\s*\d',r'99\.99% SLA',r'\bSOC2 TYPE II\b',r'\b42 Foundry Lane\b',r'\b12 Garden Lane\b',r'\bDock 9\b',r'\b11 Awards\b']
    roots=[Path('site_templates'),Path('template_projects')]
    blob='\n'.join(p.read_text(errors='ignore') for root in roots for p in root.rglob('*') if p.is_file() and p.suffix in {'.html','.jsx','.js'})
    for pat in forbidden: assert not re.search(pat,blob,re.I),pat
    runtime=Path('static/public-runtime.js').read_text()
    assert 'We use the details you submit to respond to this enquiry.' in runtime
    assert 'We use the details you submit only to handle this appointment request' in runtime
    assert '#zylora-enquiry' in runtime and '#zylora-booking' in runtime
