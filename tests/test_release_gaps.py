from __future__ import annotations

from datetime import datetime, timedelta, timezone
import io
import json
import zipfile

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.config import settings
from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits
from tests.billing_helpers import activate_plan, activate_zylora

TABLES=[
    'assistant_action_keys','assistant_messages','assistant_usage','assistant_conversations','sales_assistant_configs','lead_form_configs','subscriptions','billing_profiles',
    'site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles',
    'chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders',
    'google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log',
    'billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states',
    'auth_tokens','sites','sessions','users'
]


def reset_db():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for t in TABLES: db.execute(text(f'DELETE FROM {t}'))
        db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))
        for plan,limit,ai,lead,contact in [('FREE',2,15,20,0),('STARTER',5,100,100,0),('GROWTH',8,300,300,0),('PRO',10,0,0,1)]:
            db.execute(text('UPDATE plan_configs SET site_limit=10,page_limit=:l,ai_credits=:a,lead_credits=:lead,contact_only=:co WHERE plan=:p'),{'l':limit,'a':ai,'lead':lead,'co':contact,'p':plan})


def signup(email='user@example.com', name='User', verify=True, turnstile_token=None):
    c=TestClient(app)
    body={'name':name,'email':email,'password':'SecurePass123!'}
    if turnstile_token is not None: body['turnstile_token']=turnstile_token
    r=c.post('/api/auth/signup',json=body)
    assert r.status_code==200,r.text
    j=r.json(); h={'X-CSRF-Token':j['csrf_token']}
    if verify:
        assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h,j


def ai_site(c,h,name='AI Studio',template='atelier-noir'):
    r=c.post('/api/sites',headers=h,json={
        'business_name':name,'description':'A complete independent business description for an AI-created website.',
        'template_slug':template,'origin':'AI','industry':'Consulting','style':'Editorial'
    })
    assert r.status_code==200,r.text
    return r.json()['id']


def upgrade(c,h,plan='STARTER',country='US'):
    if plan in {'STARTER','GROWTH'}:
        return activate_plan(c,h,plan,country)
    r=c.post('/api/billing/change',headers=h,json={'plan':plan})
    assert r.status_code==200,r.text
    return r.json()


def template_site(c,h,name='Template Studio',template='brivon'):
    r=c.post('/api/sites',headers=h,json={
        'business_name':name,'description':'A complete independent business description for a template-created website.',
        'template_slug':template,'origin':'TEMPLATE','industry':'Business','style':'Editorial'
    })
    assert r.status_code==200,r.text
    return r.json()['id']


def make_admin(email='admin-release@example.com'):
    c,h,_=signup(email,'Release Admin')
    uid=c.get('/api/auth/me').json()['id']
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE id=:u"),{'u':uid})
    return c,h,uid


def test_chatbot_grounding_zero_credit_and_chatbot_appointment_booking():
    reset_db(); c,h,_=signup(); upgrade(c,h,'STARTER'); sid=ai_site(c,h,'Grounded Clinic')
    before=c.get('/api/credits').json()['total']
    upload=c.post(
        f'/api/sites/{sid}/knowledge/upload',headers=h,
        files={'file':('faq.txt',b'Opening hours are Monday to Friday from 9 AM to 5 PM. Consultations last 45 minutes.','text/plain')},
        data={'title':'Clinic FAQ'}
    )
    assert upload.status_code==200,upload.text
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200

    grounded=c.post('/api/public/chatbot',json={'site_id':sid,'message':'What are your opening hours?','session_id':'session-grounded'})
    assert grounded.status_code==200,grounded.text
    g=grounded.json(); assert g['grounded'] is True and 'Monday to Friday' in g['answer'] and g['credit_cost']==0
    unsupported=c.post('/api/public/chatbot',json={'site_id':sid,'message':'Do you have a helicopter landing pad?','session_id':'session-grounded'})
    assert unsupported.status_code==200 and unsupported.json()['grounded'] is False
    assert "don't have that information" in unsupported.json()['answer']

    booking=c.post('/api/public/chatbot',json={'site_id':sid,'message':'I want to book an appointment','session_id':'session-booking'})
    assert booking.status_code==200
    bj=booking.json(); assert bj['action']=='BOOK_APPOINTMENT' and len(bj['slots'])>=1 and bj['credit_cost']==0
    appt=c.post('/api/appointments',json={'site_id':sid,'name':'Chat Client','email':'chat@example.com','starts_at':bj['slots'][0],'source':'CHATBOT'})
    assert appt.status_code==200,appt.text
    with SessionLocal() as db:
        row=db.execute(text("SELECT source FROM appointments WHERE site_id=:s"),{'s':sid}).first()
        messages=db.execute(text('SELECT count(*) FROM chatbot_messages WHERE site_id=:s'),{'s':sid}).scalar_one()
    assert row[0]=='CHATBOT' and messages==6
    after=c.get('/api/credits').json()['total']
    assert before==after, 'chatbot messages and booking suggestions must not consume AI credits'


def test_credit_wallet_three_bucket_fallback_and_atomic_exhaustion_mid_edit():
    reset_db(); c,h,_=signup('credits@example.com','Credits User')
    me=c.get('/api/auth/me').json(); assert me['ai_credits']==20
    w=me['credit_wallet']; assert w['monthly_remaining']==15 and w['signup_remaining']==5 and w['topup_remaining']==0
    assert w['fallback_order']==['MONTHLY','SIGNUP_BONUS','TOPUP']

    sites=[ai_site(c,h,f'AI {n}') for n in range(1,4)]
    w=c.get('/api/credits').json(); assert (w['monthly_remaining'],w['signup_remaining'],w['topup_remaining'],w['total'])==(0,5,0,5)
    s=sites[0]
    r=c.post(f'/api/sites/{s}/ai-edit',headers=h,json={'instruction':'Make the headline concise'}); assert r.status_code==200
    r=c.post(f'/api/sites/{s}/ai-edit',headers=h,json={'instruction':'Make the description warmer'}); assert r.status_code==200
    w=c.get('/api/credits').json(); assert (w['monthly_remaining'],w['signup_remaining'],w['topup_remaining'],w['total'])==(0,1,0,1)
    before=c.get(f'/api/sites/{s}').json()
    exhausted=c.post(f'/api/sites/{s}/ai-edit',headers=h,json={'instruction':'This edit must not partially apply'})
    assert exhausted.status_code==402
    detail=exhausted.json()['detail']; assert detail['code']=='AI_CREDITS_EXHAUSTED' and detail['available']==1 and detail['required']==2
    after=c.get(f'/api/sites/{s}').json(); assert after['tagline']==before['tagline'] and after['description']==before['description']
    w=c.get('/api/credits').json(); assert w['total']==1 and w['signup_remaining']==1

    admin,ha,_=make_admin(); uid=me['id']
    top=admin.post(f'/api/admin/users/{uid}/credits/topup',headers=ha,json={'credits':3}); assert top.status_code==200,top.text
    mixed=c.post(f'/api/sites/{s}/ai-edit',headers=h,json={'instruction':'Use the remaining signup credit then top-up credit'})
    assert mixed.status_code==200,mixed.text
    debit=mixed.json()['credits']; assert debit['signup_used']==1 and debit['topup_used']==1 and debit['monthly_used']==0
    w=c.get('/api/credits').json(); assert w['signup_remaining']==0 and w['topup_remaining']==2 and w['total']==2


def test_draft_limit_and_ai_page_count_is_plan_independent_while_templates_are_paused():
    reset_db(); c,h,_=signup('limits@example.com','Limits User')
    billing=c.get('/api/billing').json(); assert billing['limits']['drafts']==10 and billing['limits']['monthly_ai_credits']==15 and billing['limits']['monthly_lead_credits']==20 and billing['limits']['ai_max_pages']==20
    legacy=c.post('/api/sites',headers=h,json={'business_name':'Removed Template','description':'A complete business description for removed template validation.','template_slug':'atelier-noir','origin':'TEMPLATE','industry':'Architecture','style':'Editorial'})
    assert legacy.status_code in {400,404,409}
    # AI page count follows the brief rather than the selected plan.
    detailed=c.post('/api/sites',headers={**h,'Idempotency-Key':'limits-detailed'},json={'business_name':'Detailed Clinic','description':'Create separate Home, About, Services, Doctors, Facilities, Appointments and Contact pages.','origin':'AI','industry':'Clinic','style':'Editorial'})
    assert detailed.status_code==200 and detailed.json()['page_count']>=6
    assert c.post(f"/api/sites/{detailed.json()['id']}/publish",headers=h).status_code==200
    # Draft limit remains an account-level guardrail. Lower the configured limit
    # for this isolated test so rate limits/credits do not obscure the guardrail.
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE plan_configs SET site_limit=1 WHERE plan='FREE'"))
    first_draft=c.post('/api/sites',headers={**h,'Idempotency-Key':'draft-one'},json={'business_name':'Draft One','description':'A simple one-page consulting website for a real business.','origin':'AI','industry':'Consulting','style':'swiss-minimal'})
    assert first_draft.status_code==200,first_draft.text
    second_draft=c.post('/api/sites',headers={**h,'Idempotency-Key':'draft-two'},json={'business_name':'Draft Two','description':'A simple one-page consulting website for a real business.','origin':'AI','industry':'Consulting','style':'swiss-minimal'})
    assert second_draft.status_code==409 and second_draft.json()['detail']['code']=='DRAFT_LIMIT_REACHED'

def test_custom_domain_follows_live_site_switch_without_losing_ssl_state():
    reset_db(); c,h,_=signup('domainswitch@example.com','Domain Switch'); upgrade(c,h,'STARTER')
    s1=ai_site(c,h,'First Live'); s2=ai_site(c,h,'Second Live')
    assert c.post(f'/api/sites/{s1}/publish',headers=h).status_code==200
    d=c.post(f'/api/sites/{s1}/domains',headers=h,json={'hostname':'www.switch.example'}); assert d.status_code==200,d.text
    did=d.json()['id']; refresh=c.post(f'/api/domains/{did}/refresh',headers=h); assert refresh.status_code==200
    assert refresh.json()['status']=='ACTIVE' and refresh.json()['ssl_status']=='ACTIVE'
    switched=c.post(f'/api/sites/{s2}/publish',headers=h); assert switched.status_code==200
    assert 'www.switch.example' in switched.json()['custom_domains_transferred']
    with SessionLocal() as db:
        row=db.execute(text('SELECT site_id,status,ssl_status FROM custom_domains WHERE id=:i'),{'i':did}).mappings().one()
    assert row['site_id']==s2 and row['status']=='ACTIVE' and row['ssl_status']=='ACTIVE'
    hosted=c.get('/',headers={'host':'www.switch.example'}); assert hosted.status_code==200 and 'Second Live' in hosted.text
    sites=c.get('/api/sites').json()['items']; assert sum(x['status']=='LIVE' for x in sites)==1


def test_google_sheets_resync_disconnect_and_reconnect():
    reset_db(); c,h,_=signup('sheets@example.com','Sheets User'); upgrade(c,h,'STARTER'); sid=ai_site(c,h,'Sheet Site'); assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    url1='https://docs.google.com/spreadsheets/d/PRIMARYSHEET1234567890/edit#gid=0'
    url2='https://docs.google.com/spreadsheets/d/SECONDSHEET1234567890/edit#gid=0'
    assert c.put(f'/api/sites/{sid}/integrations/google-sheets',headers=h,json={'spreadsheet_url':url1,'sheet_name':'Pipeline','enabled':True,'sync_leads':True,'sync_appointments':True}).status_code==200
    assert c.post(f'/api/sites/{sid}/integrations/google-sheets/test',headers=h).status_code==200
    assert c.post('/api/leads',json={'site_id':sid,'source':'FORM','name':'Sheet Lead','email':'lead@example.com','message':'Sync this lead'}).status_code==200
    start=(datetime.now(timezone.utc)+timedelta(days=1)).replace(microsecond=0).isoformat()
    assert c.post('/api/appointments',json={'site_id':sid,'name':'Sheet Appt','email':'appt@example.com','starts_at':start,'source':'PUBLIC'}).status_code==200
    rs=c.post(f'/api/sites/{sid}/integrations/google-sheets/resync',headers=h); assert rs.status_code==200 and rs.json()['events_synced']==2
    assert c.delete(f'/api/sites/{sid}/integrations/google-sheets',headers=h).status_code==200
    assert c.get(f'/api/sites/{sid}/integrations/google-sheets').json()=={}
    assert c.post(f'/api/sites/{sid}/integrations/google-sheets/resync',headers=h).status_code==409
    rec=c.put(f'/api/sites/{sid}/integrations/google-sheets',headers=h,json={'spreadsheet_url':url2,'sheet_name':'Leads','enabled':True,'sync_leads':True,'sync_appointments':False}); assert rec.status_code==200
    assert rec.json()['spreadsheet_id']=='SECONDSHEET1234567890'
    assert c.post(f'/api/sites/{sid}/integrations/google-sheets/test',headers=h).status_code==200
    assert c.post(f'/api/sites/{sid}/integrations/google-sheets/resync',headers=h).json()['events_synced']==1


def test_freelancer_program_fees_transfer_template_publish_and_rating():
    reset_db(); freelancer,h,_=signup('freelancer@example.com','Freelancer'); sid=ai_site(freelancer,h,'Client Build')
    join=freelancer.put('/api/freelancer/profile',headers=h,json={'display_name':'Studio Nova','bio':'Independent designer building client sites.'}); assert join.status_code==200
    dash=freelancer.get('/api/freelancer/dashboard').json(); assert 'fees' not in dash; assert dash['pricing']['transfer_usd_minor']==0 and dash['pricing']['standalone_export_usd_minor']==9900
    assert freelancer.get(f'/api/sites/{sid}/export').status_code==402
    legacy=freelancer.post(f'/api/freelancer/sites/{sid}/fees/EXPORT',headers=h); assert legacy.status_code==410
    order=freelancer.post(f'/api/sites/{sid}/source-export/order',headers=h,json={'currency':'USD'}); assert order.status_code==200 and order.json()['amount']==9900
    oj=order.json(); assert freelancer.post(f'/api/sites/{sid}/source-export/verify',headers=h,json={'order_id':oj['order_id'],'payment_id':oj['mock_payment_id'],'signature':oj['mock_signature']}).status_code==200
    export=freelancer.get(f'/api/sites/{sid}/export'); assert export.status_code==200
    z=zipfile.ZipFile(io.BytesIO(export.content)); assert 'package.json' in z.namelist()
    published=freelancer.post(f'/api/freelancer/sites/{sid}/publish-template',headers=h,json={'name':'Client Build Template','description':'A polished client-ready site adapted into a reusable catalogue submission.'})
    assert published.status_code==409 and published.json()['detail']['code']=='TEMPLATE_SUBMISSIONS_PAUSED'
    with SessionLocal() as db: assert db.execute(text('SELECT count(*) FROM freelancer_template_submissions WHERE source_site_id=:s'),{'s':sid}).scalar_one()==0

    client,hc,_=signup('client@example.com','Client')
    req=freelancer.post(f'/api/sites/{sid}/transfer',headers=h,json={'email':'client@example.com'}); assert req.status_code==200
    assert freelancer.post(f'/api/freelancer/sites/{sid}/fees/TRANSFER',headers=h).status_code==410
    accepted=client.post('/api/ownership/accept',headers=hc,json={'token':req.json()['debug_token']}); assert accepted.status_code==200
    d=freelancer.get('/api/freelancer/dashboard').json(); assert d['profile']['closed_count']==1
    eligible=client.get('/api/freelancer/ratings/eligible').json()['items']; assert len(eligible)==1 and eligible[0]['stars'] is None
    rated=client.post('/api/freelancer/ratings',headers=hc,json={'site_id':sid,'stars':5}); assert rated.status_code==200
    assert client.post('/api/freelancer/ratings',headers=hc,json={'site_id':sid,'stars':4}).status_code==409
    d=freelancer.get('/api/freelancer/dashboard').json(); assert d['profile']['rating_average']==5.0 and d['profile']['rating_count']==1


def test_pro_lead_pending_to_closed_super_admin_flow():
    reset_db(); visitor=TestClient(app)
    lead=visitor.post('/api/pro/enquiries',json={'name':'Managed Prospect','email':'managed@example.com','website_type':'Premium hospitality website','preferred_contact_time':'Weekdays after 5 PM IST'})
    assert lead.status_code==200 and lead.json()['lead_code'].startswith('ZPRO-')
    admin,ha,_=make_admin('pro-admin@example.com')
    rows=admin.get('/api/admin/pro-leads').json()['items']; row=next(x for x in rows if x['lead_code']==lead.json()['lead_code'])
    assert row['status']=='PENDING' and row['amount_received_minor']==0
    patch=admin.patch(f"/api/admin/pro-leads/{row['id']}",headers=ha,json={'status':'CLOSED','amount_received_minor':250000,'currency':'INR','internal_notes':'Signed project'}); assert patch.status_code==200
    updated=next(x for x in admin.get('/api/admin/pro-leads').json()['items'] if x['id']==row['id'])
    assert updated['status']=='CLOSED' and updated['closed_at'] and updated['referred_at'] and updated['amount_received_minor']==250000


def test_turnstile_enforcement_and_google_oidc_jwks_verification(monkeypatch):
    reset_db()
    old_secret,old_site=settings.turnstile_secret_key,settings.turnstile_site_key
    monkeypatch.setattr(settings,'turnstile_secret_key','test-secret')
    monkeypatch.setattr(settings,'turnstile_site_key','site-public')
    c=TestClient(app)
    missing=c.post('/api/auth/signup',json={'name':'Bot Gate','email':'bot@example.com','password':'SecurePass123!'})
    assert missing.status_code==400 and missing.json()['detail']['code']=='TURNSTILE_REQUIRED'
    allowed=c.post('/api/auth/signup',json={'name':'Human Gate','email':'human@example.com','password':'SecurePass123!','turnstile_token':'test-pass'})
    assert allowed.status_code==200
    cfg=c.get('/api/public/security-config').json(); assert cfg=={'turnstile_required':True,'turnstile_configured':True,'turnstile_site_key':'site-public'}

    import jwt
    from app import providers
    monkeypatch.setattr(settings,'google_client_id','jwks-client.apps.googleusercontent.com')
    seen={}
    class FakeSigningKey: key='public-key-from-google-jwks'
    class FakeJWKClient:
        def __init__(self,url,cache_keys=True): seen['jwks_url']=url; seen['cache_keys']=cache_keys
        def get_signing_key_from_jwt(self,raw): seen['raw']=raw; return FakeSigningKey()
    def fake_decode(raw,key,algorithms,audience,options):
        seen.update(key=key,algorithms=algorithms,audience=audience,options=options)
        return {'iss':'https://accounts.google.com','aud':audience,'exp':9999999999,'iat':1,'sub':'google-sub-123','email':'oidc@example.com','email_verified':True,'name':'OIDC User'}
    monkeypatch.setattr(jwt,'PyJWKClient',FakeJWKClient)
    monkeypatch.setattr(jwt,'decode',fake_decode)
    claims=providers.google_verify_id_token('signed.jwt.token')
    assert claims['sub']=='google-sub-123'
    assert seen['raw']=='signed.jwt.token' and seen['audience']=='jwks-client.apps.googleusercontent.com'
    assert seen['jwks_url']=='https://www.googleapis.com/oauth2/v3/certs' and seen['algorithms']==['RS256']

    def fake_unverified_decode(raw,key,algorithms,audience,options):
        return {'iss':'https://accounts.google.com','aud':audience,'exp':9999999999,'iat':1,'sub':'google-sub-unverified','email':'unverified@example.com','email_verified':False}
    monkeypatch.setattr(jwt,'decode',fake_unverified_decode)
    with pytest.raises(RuntimeError,match='email is not verified'):
        providers.google_verify_id_token('unverified.jwt.token')


def test_production_paid_upgrade_guard_and_safe_compose_defaults(monkeypatch):
    """Paid plans cannot be granted through the direct plan-change endpoint."""
    reset_db(); c,h,_=signup('billing-guard@example.com','Billing Guard')
    monkeypatch.setattr(settings,'payment_provider','mock')
    monkeypatch.setattr(settings,'app_env','production')
    for plan in ('STARTER','GROWTH'):
        blocked=c.post('/api/billing/change',headers=h,json={'plan':plan})
        assert blocked.status_code==409 and blocked.json()['detail']['code']=='CHECKOUT_REQUIRED'
    assert c.get('/api/billing').json()['plan']=='FREE'

    # Development can use the mocked regional subscription flow, but never direct mutation.
    monkeypatch.setattr(settings,'app_env','development')
    assert c.post('/api/billing/change',headers=h,json={'plan':'GROWTH'}).status_code==409
    paid=activate_plan(c,h,'STARTER','US')
    assert paid['plan']=='STARTER'
    # The old one-time Razorpay route cannot mint a new public subscription.
    retired=c.post('/api/billing/razorpay/order',headers=h,json={'plan':'GROWTH'})
    assert retired.status_code==410 and retired.json()['detail']['code']=='LEGACY_CHECKOUT_RETIRED'

    from pathlib import Path
    compose=(Path(__file__).resolve().parents[1]/'docker-compose.yml').read_text(encoding='utf-8')
    assert 'APP_ENV: ${APP_ENV:-development}' in compose
    assert 'POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-zylora-dev-only}' in compose
    assert 'SESSION_TTL_HOURS: ${SESSION_TTL_HOURS:-168}' in compose
    assert 'SALES_ASSISTANT_MODEL: ${SALES_ASSISTANT_MODEL:-gpt-4o-mini}' in compose
    assert 'INDEXNOW_ENDPOINT: ${INDEXNOW_ENDPOINT:-https://api.indexnow.org/indexnow}' in compose
    assert 'APP_ENV: production\n      APP_URL: http://localhost' not in compose

def test_production_ai_paths_fail_closed_without_openai(monkeypatch):
    from app import providers
    from app.structured_editor import generate_operations
    monkeypatch.setattr(settings,'app_env','production')
    monkeypatch.setattr(settings,'openai_api_key','')
    with pytest.raises(RuntimeError,match='OpenAI is not configured'):
        providers.ai_generate_site('Acme','A sufficiently detailed business description.','Business','Premium')
    with pytest.raises(RuntimeError,match='OpenAI is not configured'):
        providers.ai_edit({'business_name':'Acme','tagline':'Hello','description':'Details'},'Make it warmer')
    with pytest.raises(RuntimeError,match='OpenAI is not configured'):
        generate_operations({'business_name':'Acme'},'Make the hero larger','home')
    with pytest.raises(RuntimeError,match='OpenAI is not configured'):
        providers.grounded_chatbot_answer('What are your hours?',[{'id':'doc-1','title':'FAQ','content':'We are open Monday to Friday.'}])


def test_health_security_headers_and_api_no_store():
    reset_db(); c=TestClient(app)
    r=c.get('/api/health')
    assert r.status_code==200 and r.json()=={'status':'ok'}
    assert r.headers['x-content-type-options']=='nosniff'
    assert r.headers['referrer-policy']=='strict-origin-when-cross-origin'
    assert r.headers['x-frame-options']=='SAMEORIGIN'
    assert r.headers['content-security-policy']=="frame-ancestors 'self'"
    assert r.headers['cache-control']=='no-store'


def test_production_container_forwards_provider_configuration_and_excludes_test_dependencies():
    from pathlib import Path
    root=Path(__file__).resolve().parents[1]
    compose=(root/'docker-compose.yml').read_text(encoding='utf-8')
    required=[
        'OPENAI_API_KEY','WHATSAPP_PHONE_NUMBER_ID','WHATSAPP_ACCESS_TOKEN',
        'GOOGLE_CLIENT_ID','GOOGLE_CLIENT_SECRET','TURNSTILE_SITE_KEY','TURNSTILE_SECRET_KEY',
        'RAZORPAY_KEY_ID','RAZORPAY_KEY_SECRET','RAZORPAY_WEBHOOK_SECRET',
        'CLOUDFLARE_API_TOKEN','CLOUDFLARE_ZONE_ID','CLOUDFLARE_SAAS_TARGET','PUBLIC_BASE_DOMAIN'
    ]
    for name in required:
        assert f'{name}: ${{{name}' in compose, f'{name} is not forwarded into the app container'
    prod=(root/'requirements-prod.txt').read_text(encoding='utf-8')
    assert 'pytest==' not in prod and 'playwright==' not in prod
    docker=(root/'Dockerfile').read_text(encoding='utf-8')
    assert 'COPY requirements-prod.txt .' in docker and '-r requirements-prod.txt' in docker


def test_published_versions_history_and_rollback():
    reset_db(); c,h,_=signup(); upgrade(c,h,'STARTER')
    created=c.post('/api/sites',headers=h,json={'business_name':'Rollback Studio','description':'A premium independent business with a clear digital proposition for rollback testing.','origin':'AI','industry':'Consulting','style':'Premium'})
    assert created.status_code==200,created.text
    sid=created.json()['id']
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    original_tagline='Original launch tagline'
    assert c.put(f'/api/sites/{sid}',headers=h,json={'tagline':original_tagline}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    assert c.put(f'/api/sites/{sid}',headers=h,json={'tagline':'A second, different tagline'}).status_code==200
    assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200

    versions=c.get(f'/api/sites/{sid}/published-versions',headers=h).json()['items']
    assert len(versions)==3 and [v['revision'] for v in versions]==[3,2,1]

    other,ho,_=signup('other-rollback@example.com','Other')
    assert other.get(f'/api/sites/{sid}/published-versions',headers=ho).status_code==404
    assert other.post(f'/api/sites/{sid}/rollback/1',headers=ho).status_code==404

    assert c.post(f'/api/sites/{sid}/rollback/999',headers=h).status_code==404
    rollback=c.post(f'/api/sites/{sid}/rollback/2',headers=h)
    assert rollback.status_code==200,rollback.text
    assert rollback.json()=={'ok':True,'restored_revision':2,'published_revision':4}

    with SessionLocal() as db:
        site=dict(db.execute(text('SELECT tagline,published_revision,published_snapshot_json FROM sites WHERE id=:s'),{'s':sid}).mappings().first())
    assert site['published_revision']==4 and site['tagline']=='A second, different tagline'
    restored_snapshot=json.loads(site['published_snapshot_json'])
    assert restored_snapshot['tagline']==original_tagline
