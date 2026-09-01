from __future__ import annotations

import io
import json
import zipfile
from datetime import datetime, timezone

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.config import settings
from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits, durable_rate_limit
from tests.billing_helpers import activate_zylora

TABLES=[
    'site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links',
    'rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings',
    'freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs',
    'credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains',
    'ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings',
    'appointments','leads','oauth_states','auth_tokens','sites','sessions','users'
]


def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        existing={r[0] for r in db.execute(text("SELECT name FROM sqlite_master WHERE type='table'")).fetchall()}
        for table in TABLES:
            if table in existing: db.execute(text(f'DELETE FROM {table}'))
        db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))
        db.execute(text("UPDATE system_settings SET value='9900' WHERE key='source_export_usd_minor'"))
        db.execute(text("UPDATE system_settings SET value='829900' WHERE key='source_export_inr_minor'"))
        defaults={'FREE':(10,2,15,20,5,5,2,0),'STARTER':(10,5,100,100,5,5,2,0),'GROWTH':(10,8,300,300,5,5,2,0),'PRO':(10,10,0,0,0,0,0,1)}
        for plan,(sites,pages,ai,lead,bonus,site_cost,edit_cost,contact_only) in defaults.items():
            db.execute(text('UPDATE plan_configs SET site_limit=:s,page_limit=:p,ai_credits=:a,lead_credits=:l,signup_bonus_credits=:b,ai_site_cost=:sc,ai_edit_cost=:ec,contact_only=:co WHERE plan=:plan'),{'s':sites,'p':pages,'a':ai,'l':lead,'b':bonus,'sc':site_cost,'ec':edit_cost,'co':contact_only,'plan':plan})


def signup(email,name='User',verify=True):
    c=TestClient(app); r=c.post('/api/auth/signup',json={'name':name,'email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    if verify: assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h,c.get('/api/auth/me').json()


def make_admin(email='admin-market@example.com'):
    c,h,me=signup(email,'Marketplace Admin')
    with SessionLocal.begin() as db: db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE id=:i"),{'i':me['id']})
    return c,h,me['id']


def application_payload():
    return {
        'full_name':'Nora Designer','display_name':'Nora Studio','profile_photo_url':'https://images.example.org/nora.jpg',
        'bio':'Independent designer focused on distinctive Zylora websites for service businesses.',
        'description':'I design and build carefully art-directed marketing websites, portfolios and local-business websites using Zylora.',
        'skills':['Brand systems','Editorial web design'],'services':['Website design','Zylora implementation'],'years_experience':6,
        'starting_price_minor':75000,'currency':'USD','portfolio_url':'https://portfolio.example.org/nora',
        'fiverr_url':'https://www.fiverr.com/nora-studio','github_url':'https://github.com/nora-studio','location':'Chennai','timezone':'Asia/Kolkata'
    }


def test_marketplace_application_moderation_public_redirect_guest_enquiry_and_durable_abuse_control():
    reset_db(); user,h,me=signup('nora@example.com','Nora'); admin,ha,_=make_admin()
    # Guests cannot apply, and a normal USER cannot self-approve.
    assert TestClient(app).post('/api/freelancer/application',json=application_payload()).status_code==401
    app_r=user.post('/api/freelancer/application',headers=h,json=application_payload()); assert app_r.status_code==200,app_r.text
    slug=app_r.json()['slug']; assert app_r.json()['status']=='PENDING'
    assert user.patch(f"/api/admin/freelancers/{me['id']}",headers=h,json={'status':'APPROVED'}).status_code==403
    assert TestClient(app).get(f'/api/public/freelancers/{slug}').status_code==404
    # Admin has the full moderation editor and approves; detected links derive platform from hostname.
    rows=admin.get('/api/admin/freelancers?status=PENDING&search=Nora').json()['items']; assert len(rows)==1
    fid=rows[0]['user_id']; assert {x['platform'] for x in rows[0]['links']}>={'FIVERR','GITHUB','WEBSITE'}
    assert admin.patch(f'/api/admin/freelancers/{fid}',headers=ha,json={'status':'APPROVED','bio':'Approved public bio for Nora Studio.','starting_price_minor':85000,'links':['https://www.upwork.com/freelancers/nora','https://portfolio.example.org/nora']}).status_code==200
    public=TestClient(app).get(f'/api/public/freelancers/{slug}'); assert public.status_code==200
    pj=public.json(); assert pj['bio'].startswith('Approved') and {x['platform'] for x in pj['links']}=={'UPWORK','WEBSITE'}
    # Unsafe/local URLs are rejected on both application and moderation paths.
    bad=application_payload(); bad['portfolio_url']='javascript:alert(1)'; assert user.post('/api/freelancer/application',headers=h,json=bad).status_code==422
    assert admin.patch(f'/api/admin/freelancers/{fid}',headers=ha,json={'profile_photo_url':'http://127.0.0.1/private.png'}).status_code==422
    # Tracked redirect records one click and returns only validated external destination.
    link=pj['links'][0]; redir=TestClient(app).get(link['tracked_url'],follow_redirects=False); assert redir.status_code==302 and redir.headers['location'].startswith('https://www.upwork.com/')
    assert admin.get('/api/admin/freelancers?status=APPROVED').json()['items'][0]['click_count']==1
    # E-commerce is deliberately routed away from the freelancer marketplace.
    guest=TestClient(app); base={'name':'Guest Lead','email':'lead@example.com','website_type':'Business website','project_description':'A polished service-business marketing website with five pages and a contact flow.','idempotency_key':'lead-1'}
    ec={**base,'website_type':'E-commerce online store','project_description':'Need a shopping cart and payment gateway for an online store.'}
    rr=guest.post(f'/api/public/freelancers/{slug}/enquiries',json=ec); assert rr.status_code==409 and rr.json()['detail']['code']=='MANAGED_SERVICE_REQUIRED'
    # Guest enquiry needs no account, is idempotent, queues exactly the two expected emails once.
    with SessionLocal() as db: emails_before=db.execute(text("SELECT count(*) FROM outbox WHERE channel='EMAIL'")).scalar_one()
    first=guest.post(f'/api/public/freelancers/{slug}/enquiries',json=base); assert first.status_code==200,first.text
    retry=guest.post(f'/api/public/freelancers/{slug}/enquiries',json=base); assert retry.status_code==200 and retry.json()['idempotent'] is True and retry.json()['id']==first.json()['id']
    with SessionLocal() as db:
        assert db.execute(text('SELECT count(*) FROM freelancer_leads')).scalar_one()==1
        assert db.execute(text("SELECT count(*) FROM outbox WHERE channel='EMAIL'")).scalar_one()-emails_before==2
        stored_keys=[r[0] for r in db.execute(text('SELECT bucket_key FROM rate_limit_buckets')).fetchall()]
    assert stored_keys and all('lead@example.com' not in k and 'testclient' not in k for k in stored_keys)
    # Two more distinct submissions are allowed in the 15-minute IP window; the next is a generic 429.
    for n in [2,3]:
        p={**base,'email':f'lead{n}@example.com','project_description':base['project_description']+f' Variant {n}.','idempotency_key':f'lead-{n}'}
        assert guest.post(f'/api/public/freelancers/{slug}/enquiries',json=p).status_code==200
    p={**base,'email':'lead4@example.com','project_description':base['project_description']+' Variant 4.','idempotency_key':'lead-4'}
    assert guest.post(f'/api/public/freelancers/{slug}/enquiries',json=p).status_code==429
    # Suspension removes public exposure immediately; reactivation restores it.
    assert admin.patch(f'/api/admin/freelancers/{fid}',headers=ha,json={'status':'SUSPENDED'}).status_code==200
    assert guest.get(f'/api/public/freelancers/{slug}').status_code==404
    assert admin.patch(f'/api/admin/freelancers/{fid}',headers=ha,json={'status':'APPROVED'}).status_code==200
    assert guest.get(f'/api/public/freelancers/{slug}').status_code==200


def test_support_user_admin_flow_idor_internal_notes_filters_assignment_and_deduped_email():
    reset_db(); user,h,me=signup('support-user@example.com','Support User'); other,ho,_=signup('other@example.com','Other User'); admin,ha,aid=make_admin('support-admin@example.com')
    site=user.post('/api/sites',headers=h,json={'business_name':'Support Site','description':'A complete business description long enough for website creation.','template_slug':'atelier-noir','origin':'AI','industry':'Studio','style':'Editorial'}); assert site.status_code==200
    sid=site.json()['id']
    created=user.post('/api/support/conversations',headers=h,json={'website_id':sid,'subject':'Publishing question','category':'Publishing','message':'I need help understanding my publish workflow.'}); assert created.status_code==200
    cj=created.json(); assert cj['reference_code'].startswith('ZSUP-') and cj['status']=='WAITING_ON_SUPPORT'; cid=cj['id']
    assert other.get(f'/api/support/conversations/{cid}').status_code==404
    assert other.post(f'/api/support/conversations/{cid}/messages',headers=ho,json={'body':'Trying to enumerate another user thread.'}).status_code==404
    assert user.get('/api/admin/support').status_code==403
    meta=admin.get('/api/admin/support/meta').json(); assert any(x['id']==sid for x in meta['sites']) and any(x['id']==aid for x in meta['operators']) and 'FREE' in meta['plans']
    # Filters actually constrain the inbox by plan and website.
    listed=admin.get(f'/api/admin/support?plan=FREE&website_id={sid}&search=ZSUP').json()['items']; assert len(listed)==1 and listed[0]['id']==cid
    assert admin.patch(f'/api/admin/support/{cid}',headers=ha,json={'priority':'HIGH','assigned_admin_id':aid,'status':'WAITING_ON_SUPPORT'}).status_code==200
    # Internal note is durable for admin but never leaves the server in USER responses.
    assert admin.post(f'/api/admin/support/{cid}/messages',headers=ha,json={'body':'Private escalation context.','is_internal':True}).status_code==200
    user_thread=user.get(f'/api/support/conversations/{cid}').json(); assert all('Private escalation' not in x['body'] for x in user_thread['messages'])
    admin_thread=admin.get(f'/api/admin/support/{cid}').json(); assert any(x['is_internal']==1 and 'Private escalation' in x['body'] for x in admin_thread['messages'])
    # Admin external replies set unread state; repeated replies within 30 minutes generate one consolidated email.
    assert admin.post(f'/api/admin/support/{cid}/messages',headers=ha,json={'body':'First support reply.','is_internal':False}).status_code==200
    assert admin.post(f'/api/admin/support/{cid}/messages',headers=ha,json={'body':'One more detail.','is_internal':False}).status_code==200
    lst=user.get('/api/support/conversations').json()['items']; assert lst[0]['unread_count']==2 and lst[0]['status']=='WAITING_ON_USER'
    with SessionLocal() as db:
        emails=db.execute(text("SELECT count(*) FROM outbox WHERE channel='EMAIL' AND recipient='support-user@example.com' AND subject='New reply from Zylora Support'")).scalar_one()
    assert emails==1
    user_thread=user.get(f'/api/support/conversations/{cid}').json(); assert any(x['body']=='First support reply.' for x in user_thread['messages'])
    assert user.get('/api/support/conversations').json()['items'][0]['unread_count']==0
    assert user.post(f'/api/support/conversations/{cid}/resolve',headers=h).json()['status']=='RESOLVED'
    assert user.post(f'/api/support/conversations/{cid}/messages',headers=h,json={'body':'Should require reopen'}).status_code==409
    assert user.post(f'/api/support/conversations/{cid}/reopen',headers=h).json()['status']=='WAITING_ON_SUPPORT'
    assert user.post('/api/support/attachments',headers=h).status_code==501


def test_super_admin_controls_every_plan_limit_credit_cost_and_export_price_and_transfer_is_free():
    reset_db(); admin,ha,_=make_admin('pricing-admin@example.com')
    patch={'public_name':'Free','price_inr_minor':12300,'price_usd_minor':199,'site_limit':2,'page_limit':2,'ai_credits':30,'lead_credits':40,'signup_bonus_credits':7,'ai_site_cost':4,'ai_edit_cost':3,'contact_only':False}
    r=admin.patch('/api/admin/plans/FREE',headers=ha,json=patch); assert r.status_code==200,r.text
    assert admin.put('/api/admin/settings',headers=ha,json={'source_export_usd_minor':7700,'source_export_inr_minor':640000}).status_code==200
    public=admin.get('/api/public/plans').json()['items']; free=next(x for x in public if x['plan']=='FREE')
    for k,v in patch.items(): assert free[k]==v
    new,h,me=signup('configured@example.com','Configured User'); assert me['credit_wallet']['monthly_remaining']==30 and me['credit_wallet']['signup_remaining']==7
    # AI create cost follows SUPER_ADMIN configuration and site limit is enforced from plan, not a hard-coded 10.
    payload={'business_name':'Configured One','description':'A complete business description long enough for an AI website.','template_slug':'atelier-noir','origin':'AI','industry':'Business','style':'Editorial'}
    one=new.post('/api/sites',headers=h,json=payload); assert one.status_code==200
    assert new.get('/api/credits').json()['total']==33
    two=new.post('/api/sites',headers=h,json={**payload,'business_name':'Configured Two'}); assert two.status_code==200
    blocked=new.post('/api/sites',headers=h,json={**payload,'business_name':'Configured Three'}); assert blocked.status_code==409 and blocked.json()['detail']['limit']==2
    # AI-edit price is configurable too.
    before=new.get('/api/credits').json()['total']; assert new.post(f"/api/sites/{one.json()['id']}/ai-edit",headers=h,json={'instruction':'Add a subtle fade animation'}).status_code==200
    assert new.get('/api/credits').json()['total']==before-3
    cfg=new.get('/api/source-export/config').json()['prices']; assert cfg=={'USD':7700,'INR':640000}
    # Ownership transfer never creates or checks a freelancer/user transfer payment.
    recipient,hr,_=signup('recipient@example.com','Recipient')
    req=new.post(f"/api/sites/{one.json()['id']}/transfer",headers=h,json={'email':'recipient@example.com'}); assert req.status_code==200,req.text
    assert recipient.post('/api/ownership/accept',headers=hr,json={'token':req.json()['debug_token']}).status_code==200
    with SessionLocal() as db:
        names={r[0] for r in db.execute(text("SELECT name FROM sqlite_master WHERE type='table'")).fetchall()}
    assert 'freelancer_fee_transactions' not in names


def test_structured_ai_editor_sections_layout_images_typography_motion_safety_publish_isolation_and_export():
    reset_db(); c,h,_=signup('editor@example.com','Editor User'); activate_zylora(c,h,'GB')
    site=c.post('/api/sites',headers=h,json={'business_name':'Structured Studio','description':'A refined architecture studio focused on material and light. Include separate Home, Projects and Contact pages.','origin':'AI','industry':'Architecture','style':'Editorial'}); assert site.status_code==200
    sid=site.json()['id']; assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    slug=c.get(f'/api/sites/{sid}').json()['slug']; before_live=c.get(f'/s/{slug}').text
    # Direct validated operations exercise arbitrary section content/composition/image/type/layout/motion capabilities.
    operations=[
        {'page':'home','type':'set_text','selector':'h1','text':'A new structured hero'},
        {'page':'home','type':'set_style','selector':'.zy-ai-hero','styles':{'display':'grid','grid-template-columns':'repeat(2,minmax(0,1fr))','gap':'48px'}},
        {'page':'home','type':'set_style','selector':'h1','styles':{'font-family':"Georgia,'Times New Roman',serif",'font-size':'clamp(58px,9vw,132px)'}},
        {'page':'home','type':'set_image','selector':'.zy-ai-hero-media','src':'https://images.example.org/new-hero.jpg','alt':'Architecture model'},
        {'page':'home','type':'set_effect','selector':'.zy-ai-hero','effect_family':'scroll','effect':'fade-up'},
    ]
    r=c.post(f'/api/sites/{sid}/structure',headers=h,json={'operations':operations}); assert r.status_code==200,r.text
    preview=c.get(f'/api/sites/{sid}/preview').text; assert 'A new structured hero' in preview and 'zy-motion-fade-up' in preview and 'grid-template-columns' in preview
    # All new writes preserve the authoritative SiteDocument; raw section HTML is rejected on both origins.
    blocked_section=c.post(f'/api/sites/{sid}/structure',headers=h,json={'operations':[{'page':'home','type':'add_section','position':'before_footer','html':'<section><h2>Not allowed here</h2></section>'}]}); assert blocked_section.status_code==422
    ai_site=c.post('/api/sites',headers=h,json={'business_name':'Flexible AI Studio','description':'A flexible AI-origin site for structured section composition and safe customization.','template_slug':'atelier-noir','origin':'AI','industry':'Architecture','style':'Editorial'}); assert ai_site.status_code==200
    ai_sid=ai_site.json()['id']; added=c.post(f'/api/sites/{ai_sid}/structure',headers=h,json={'operations':[{'page':'home','type':'add_section','position':'before_footer','html':'<section id="case-study"><h2>Material study</h2><p>Stone, timber and daylight.</p></section>'}]}); assert added.status_code==422,added.text
    # Current LIVE snapshot is unchanged until Republish.
    live_during=c.get(f'/s/{slug}').text; assert 'A new structured hero' not in live_during and live_during==before_live
    # Natural-language AI adds further structured operations and consumes configured credits atomically.
    ai=c.post(f'/api/sites/{sid}/ai-edit',headers=h,json={'page':'projects','instruction':'Use serif headings, make the heading larger, and add a subtle fade reveal'}); assert ai.status_code==200,ai.text
    assert ai.json()['operations'] and all(x['page']=='projects' for x in ai.json()['operations'])
    project_preview=c.get(f'/api/sites/{sid}/preview/projects').text; assert 'zy-motion-' in project_preview and ('Georgia' in project_preview or 'Times New Roman' in project_preview)
    # Unsafe executable URL cannot enter the structure.
    unsafe=c.post(f'/api/sites/{sid}/structure',headers=h,json={'operations':[{'page':'home','type':'set_image','selector':'img','src':'javascript:alert(1)'}]}); assert unsafe.status_code==422
    # Republish atomically promotes draft content+structure to the public snapshot.
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    live_after=c.get(f'/s/{slug}').text; assert 'A new structured hero' in live_after
    # Paid export contains an executable-safe structured edit client and the validated operation manifest.
    order=c.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}).json(); assert c.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':order['order_id'],'payment_id':order['mock_payment_id'],'signature':order['mock_signature']}).status_code==200
    export=c.get(f'/api/sites/{sid}/export'); assert export.status_code==200
    z=zipfile.ZipFile(io.BytesIO(export.content)); names=set(z.namelist()); assert {'app/zylora-edits.jsx','zylora-structured-edits.json'}<=names
    manifest=json.loads(z.read('zylora-structured-edits.json')); assert len(manifest['operations'])>=len(operations)
    client=z.read('app/zylora-edits.jsx').decode(); assert 'prefers-reduced-motion' in client and 'javascript:alert' not in client


def test_production_turnstile_and_shared_limiter_fail_closed(monkeypatch):
    reset_db()
    from app import providers
    old={k:getattr(settings,k) for k in ['app_env','turnstile_secret_key','turnstile_site_key','payment_provider','razorpay_key_id','razorpay_key_secret','cloudflare_api_token','cloudflare_zone_id','whatsapp_phone_number_id','whatsapp_access_token','google_service_account_json','google_service_account_file']}
    monkeypatch.setattr(settings,'app_env','production'); monkeypatch.setattr(settings,'turnstile_secret_key',''); monkeypatch.setattr(settings,'turnstile_site_key','')
    cfg=TestClient(app).get('/api/public/security-config').json(); assert cfg['turnstile_required'] is True and cfg['turnstile_configured'] is False and cfg['turnstile_site_key']==''
    with pytest.raises(Exception): providers.razorpay_create_order(100,'USD','r',{})
    with pytest.raises(Exception): providers.cloudflare_create_hostname('www.example.com')
    with pytest.raises(Exception): providers.send_email('x@example.com','Subject','Body')
    with pytest.raises(Exception): providers.send_whatsapp('+919000000000','Message')
    with pytest.raises(Exception): providers.google_sheets_append('sheet','Sheet1',['x'])
    with pytest.raises(Exception): providers.verify_turnstile(None,'203.0.113.5')
    # Durable limiter state survives the in-memory limiter reset because it is persisted in DB.
    monkeypatch.setattr(settings,'app_env','development')
    durable_rate_limit('shared-key',2,3600); clear_rate_limits(); durable_rate_limit('shared-key',2,3600)
    with pytest.raises(Exception): durable_rate_limit('shared-key',2,3600)


def test_durable_rate_limiter_is_atomic_across_concurrent_workers():
    reset_db()
    from concurrent.futures import ThreadPoolExecutor
    from fastapi import HTTPException

    def hit(_):
        try:
            durable_rate_limit('atomic-marketplace-key', 5, 3600)
            return 200
        except HTTPException as exc:
            return exc.status_code

    with ThreadPoolExecutor(max_workers=10) as pool:
        results=list(pool.map(hit, range(10)))
    assert results.count(200) == 5, results
    assert results.count(429) == 5, results
    with SessionLocal() as db:
        row=db.execute(text('SELECT request_count FROM rate_limit_buckets')).first()
        assert row and int(row[0]) == 5
