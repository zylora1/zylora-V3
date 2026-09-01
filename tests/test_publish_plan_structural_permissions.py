from __future__ import annotations

import io
import json

from fastapi.testclient import TestClient
from PIL import Image
from sqlalchemy import text

from app.db import SessionLocal, migrate
from app.main import app
from app.publish_permissions import plan_is_paid, project_document_for_publish
from app.security import clear_rate_limits
from tests.billing_helpers import activate_zylora


def reset_db():
    clear_rate_limits(); migrate()
    tables=['site_revisions','editor_history','imported_site_pages','site_imports','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']
    with SessionLocal.begin() as db:
        for table in tables: db.execute(text(f'DELETE FROM {table}'))
        for plan,limit in [('FREE',2),('STARTER',5),('GROWTH',8),('PRO',10)]:
            db.execute(text('UPDATE plan_configs SET page_limit=:l,site_limit=10 WHERE plan=:p'),{'l':limit,'p':plan})


def unselected_user(email='publish-plan@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Publish Plan User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    assert j['plan_selected'] is False and j['next']=='/dashboard'
    assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.get('/api/auth/me').json()['plan_selected'] is False
    return c,h


def create_ai_site(c,h):
    r=c.post('/api/sites',headers=h,json={
        'business_name':'Planless Studio',
        'description':'A focused one-page creative studio website for testing publish permissions.',
        'origin':'AI','industry':'Creative studio','style':'Editorial','motion_style':'None',
    })
    assert r.status_code==200,r.text
    return r.json()['id']


def png_bytes():
    b=io.BytesIO(); Image.new('RGB',(8,8),(80,120,160)).save(b,format='PNG'); return b.getvalue()


def test_editor_is_plan_agnostic_and_free_publish_projects_structural_edits_only():
    reset_db(); c,h=unselected_user(); sid=create_ai_site(c,h)

    # Editing is fully available before a plan exists.
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home')
    assert doc.status_code==200,doc.text
    nodes=doc.json()['nodes']
    heading=next(x for x in nodes if x.get('tag')=='h1')
    image=next(x for x in nodes if x.get('kind')=='image')

    upload=c.post(f'/api/sites/{sid}/assets',headers=h,files={'file':('replacement.png',png_bytes(),'image/png')},data={'alt_text':'Replacement image'})
    assert upload.status_code==200,upload.text; asset_id=upload.json()['asset']['id']
    ops=[
        {'page':'home','type':'set_text','selector':f'[data-zylora-id="{heading["id"]}"]','text':'This text must survive Free publish'},
        {'page':'home','type':'set_style','selector':f'[data-zylora-id="{heading["id"]}"]','styles':{'font-size':'91px','color':'#123456'}},
        {'page':'home','type':'replace_image','selector':f'[data-zylora-id="{image["id"]}"]','asset_id':asset_id,'mode':'image','alt':'Replacement image'},
        {'page':'home','type':'set_style','selector':f'[data-zylora-id="{image["id"]}"]','styles':{'width':'55%','border-radius':'16px'}},
    ]
    edited=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':ops,'action':'PLAN_AGNOSTIC_EDIT'})
    assert edited.status_code==200,edited.text
    assert c.get('/api/auth/me').json()['plan_selected'] is False

    first=c.post(f'/api/sites/{sid}/publish',headers=h)
    assert first.status_code==409,first.text
    d=first.json()['detail']; assert d['code']=='PLAN_SELECTION_REQUIRED' and d['has_structural_changes'] is True
    flags={x['plan']:x['is_paid'] for x in d['plans']}; assert flags=={'FREE':False,'STARTER':True,'GROWTH':True}

    free=c.post(f'/api/sites/{sid}/publish',headers=h,json={'selected_plan':'FREE'})
    assert free.status_code==409,free.text
    warning=free.json()['detail']; assert warning['code']=='FREE_STRUCTURAL_RESET_CONFIRMATION_REQUIRED'
    assert 'text and images are safe' in warning['message'].lower()
    assert c.get('/api/auth/me').json()['plan_selected'] is False  # selection is not committed before confirmation

    confirmed=c.post(f'/api/sites/{sid}/publish',headers=h,json={'selected_plan':'FREE','confirm_free_structural_reset':True})
    assert confirmed.status_code==200,confirmed.text
    result=confirmed.json(); assert result['is_paid'] is False and result['structural_reset_applied'] is True
    assert c.get('/api/auth/me').json()['plan_selected'] is True and c.get('/api/auth/me').json()['plan']=='FREE'

    site=c.get(f'/api/sites/{sid}').json()
    draft=json.loads(site['draft_structure_json']); live=json.loads(site['published_structure_json'])
    # Draft retains everything so an upgrade can publish it later.
    assert any(op.get('styles',{}).get('font-size')=='91px' for op in draft['operations'])
    assert any(op.get('styles',{}).get('width')=='55%' for op in draft['operations'])
    # Live Free projection preserves content/non-structural style, strips structural size edits.
    assert any(op['type']=='set_text' and op.get('text')=='This text must survive Free publish' for op in live['operations'])
    assert any(op['type']=='replace_image' and op.get('asset_id')==asset_id for op in live['operations'])
    assert any(op.get('styles',{}).get('color')=='#123456' for op in live['operations'])
    assert any(op.get('styles',{}).get('border-radius')=='16px' for op in live['operations'])
    assert not any('font-size' in op.get('styles',{}) for op in live['operations'])
    assert not any('width' in op.get('styles',{}) for op in live['operations'])
    baseline=json.loads(site['template_default_structural_snapshot_json'])
    assert baseline['version']==1 and baseline['pages'].get('home') and len(baseline['sha256'])==64

    slug=site['slug']; html=c.get(f'/s/{slug}').text
    assert 'This text must survive Free publish' in html
    assert f'/media/{asset_id}/' in html
    assert 'font-size:91px' not in html and 'width:55%' not in html


def test_paid_boolean_preserves_structural_draft_for_current_and_legacy_paid_entitlements():
    baseline={'pages':{'home':[{'id':'home-h1','tag':'h1','sibling_index':0}]},'sha256':'a'*64}
    draft={'schemaVersion':3,'operations':[{'id':'x','page':'home','type':'set_style','selector':'h1','styles':{'font-size':'88px','width':'70%'}}]}
    assert plan_is_paid('FREE') is False
    # Starter and Growth are public paid entitlements; legacy ZYLORA remains
    # recognized so historical subscriptions can still publish.
    for plan in ('STARTER','GROWTH','ZYLORA'):
        assert plan_is_paid(plan) is True
        out,meta=project_document_for_publish(draft,is_paid=plan_is_paid(plan),baseline_snapshot=baseline)
        assert out['operations']==draft['operations'] and meta['structural_reset_applied'] is False


def test_active_paid_plan_publishes_structural_changes_without_warning():
    reset_db(); c,h=unselected_user('paid-publish@example.com'); sid=create_ai_site(c,h)
    # New paid access must use the regional Starter/Growth subscription path.
    activate_zylora(c, h, country='GB')
    doc=c.get(f'/api/sites/{sid}/editor-document?page=home').json(); h1=next(x for x in doc['nodes'] if x.get('tag')=='h1')
    e=c.post(f'/api/sites/{sid}/editor/actions',headers=h,json={'operations':[{'page':'home','type':'set_style','selector':f'[data-zylora-id="{h1["id"]}"]','styles':{'font-size':'88px'}}]}); assert e.status_code==200,e.text
    pub=c.post(f'/api/sites/{sid}/publish',headers=h); assert pub.status_code==200,pub.text
    assert pub.json()['is_paid'] is True and pub.json()['structural_reset_applied'] is False
    live=json.loads(c.get(f'/api/sites/{sid}').json()['published_structure_json'])
    assert any(op.get('styles',{}).get('font-size')=='88px' for op in live['operations'])
