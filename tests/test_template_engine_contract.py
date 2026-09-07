from __future__ import annotations

import io
import json
import zipfile

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits
from app.structured_editor import (
    SchemaCapabilityRequired,
    generate_operations,
    parse_document,
    validate_operation,
)

TABLES=['turnstile_token_uses','indexnow_queue','site_redirects','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']


def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in TABLES:
            db.execute(text(f'DELETE FROM {table}'))
        for plan,limit in [('FREE',2),('STARTER',5),('GROWTH',8),('PRO',10)]:
            db.execute(text('UPDATE plan_configs SET page_limit=:l,site_limit=10 WHERE plan=:p'),{'l':limit,'p':plan})


def signup(email='engine@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Engine User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h


def create_ai(c,h,name='Engine Site',description=None):
    description=description or 'Create separate Home, About, Services, Work and Contact pages for a professional design studio.'
    r=c.post('/api/sites',headers=h,json={'business_name':name,'description':description,'origin':'AI','industry':'Professional services','style':'editorial-asymmetric'})
    assert r.status_code==200,r.text
    return r.json()


def test_ai_creation_persists_prompt_derived_site_document_without_plan_truncation():
    reset_db(); c,h=signup()
    assert c.get('/api/templates').json()=={'items':[],'retired':True}
    legacy=c.post('/api/sites',headers=h,json={'business_name':'Legacy','description':'A removed legacy template request.','origin':'TEMPLATE','template_slug':'atelier-noir'})
    assert legacy.status_code==410

    ai=create_ai(c,h)
    doc=c.get(f"/api/sites/{ai['id']}/structure").json()
    assert doc['schemaVersion']==3 and doc['effectsVersion']==1
    assert ai['page_count']==len(doc['pages'])>=5
    assert [n['pageId'] for n in doc['navigation']]==[p['id'] for p in doc['pages']]
    assert doc['template']['slug']=='ai-runtime'
    assert doc['designPlan']['composition_source']=='prompt+business-requirements'
    # FREE's 2-page value applies only to selectable template sites. AI page count
    # is brief-derived and therefore remains publishable on FREE.
    published=c.post(f"/api/sites/{ai['id']}/publish",headers=h)
    assert published.status_code==200,published.text


def test_new_writes_are_site_document_only_and_legacy_documents_remain_readable():
    with pytest.raises(ValueError):
        validate_operation({'page':'home','type':'set_html','selector':'main','html':'<p>raw</p>'})
    with pytest.raises(ValueError):
        validate_operation({'page':'home','type':'add_section','position':'end','html':'<section>raw</section>'})
    op=validate_operation({'page':'home','type':'set_effect','selector':'h1','effect_kind':'scroll','effect':'fade-up','config':{'duration_ms':650,'delay_ms':40}})
    assert op['effect_kind']=='scroll' and op['effect']=='fade-up' and op['config']['duration_ms']==650
    legacy=parse_document({'schemaVersion':2,'operations':[{'page':'home','type':'set_animation','selector':'h1','animation':'fade-up'}]})
    assert legacy['operations'][0]['type']=='set_animation'


def test_unsupported_structural_ai_request_returns_schema_capability_request_locally():
    with pytest.raises(SchemaCapabilityRequired) as exc:
        generate_operations({'business_name':'Studio'},'Add a new case study section',page='home')
    assert exc.value.detail['code']=='SCHEMA_CAPABILITY_REQUIRED'
    assert exc.value.detail['capability']=='structured_section_insertion'
    assert exc.value.detail['smallest_schema_extension']


def test_export_preserves_site_document_effect_runtime_and_prompt_derived_routes():
    reset_db(); c,h=signup('engine-export@example.com')
    site=create_ai(c,h,'Export Engine','Create separate Home, Projects, Studio, Process and Contact pages for a creative practice.')
    sid=site['id']
    r=c.post(f'/api/sites/{sid}/structure',headers=h,json={'operations':[{'page':'home','type':'set_effect','selector':'h1','effect_kind':'hover','effect':'lift'}]})
    assert r.status_code==200,r.text
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json()
    assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']}).status_code==200
    exp=c.get(f'/api/sites/{sid}/export'); assert exp.status_code==200
    z=zipfile.ZipFile(io.BytesIO(exp.content))
    doc=json.loads(z.read('zylora-structured-edits.json'))
    site_manifest=json.loads(z.read('zylora-site.json'))
    client=z.read('app/zylora-edits.jsx').decode()
    page_ids=[p['id'] for p in doc['pages']]
    assert page_ids[0]=='home' and {'projects','studio','process','contact'}.issubset(page_ids)
    assert site_manifest['renderer']=='ai-runtime'
    assert site_manifest['pages'][0]=='/' and '/projects' in site_manifest['pages'] and '/contact' in site_manifest['pages']
    assert 'effect_kind' in client and 'set_effect' in client
    assert "export const dynamic='force-static';" in z.read('app/robots.js').decode()
    assert "export const dynamic='force-static';" in z.read('app/sitemap.js').decode()
