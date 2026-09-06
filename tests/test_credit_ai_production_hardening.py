from __future__ import annotations
import json
from datetime import datetime, timezone
from uuid import uuid4
import pytest
from fastapi import HTTPException
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate, now_iso
from app.security import clear_rate_limits
from app.credits import TOPUP_PACKS, debit_wallet, grant_topup, wallet_summary
from app.plans import DEFAULTS, get_plan, update_plan

NEW_TABLES=['chatbot_usage_metrics','chatbot_answer_cache','knowledge_embedding_cache','notification_deliveries','credit_topup_orders','credit_transactions','published_versions','generation_jobs','contacts']
BASE_TABLES=['turnstile_token_uses','indexnow_queue','site_redirects','site_revisions','editor_history','media_assets','support_messages','support_conversations','freelancer_leads','freelancer_outbound_clicks','freelancer_external_links','rate_limit_buckets','source_export_entitlements','source_export_orders','analytics_events','appointment_settings','freelancer_ratings','freelancer_template_submissions','freelancer_profiles','chatbot_messages','site_knowledge_docs','credit_usage','credit_wallets','webhook_events','razorpay_orders','google_sheets_integrations','custom_domains','ownership_transfers','blog_posts','pro_leads','audit_log','billing_events','outbox','whatsapp_otps','notification_settings','appointments','leads','oauth_states','auth_tokens','sites','sessions','users']

def reset_db():
    migrate(); clear_rate_limits()
    with SessionLocal.begin() as db:
        for t in NEW_TABLES+BASE_TABLES:
            try: db.execute(text(f'DELETE FROM {t}'))
            except Exception: pass
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))

def signup(email='hardening@example.com'):
    c=TestClient(app)
    r=c.post('/api/auth/signup',json={'name':'Hardening User','email':email,'password':'SecurePass123!'})
    assert r.status_code==200,r.text
    j=r.json(); assert c.post('/api/auth/email/verify',json={'token':j['debug_verification_token']}).status_code==200
    h={'X-CSRF-Token':j['csrf_token']}; assert c.post('/api/billing/select',headers=h,json={'plan':'FREE'}).status_code==200
    return c,h,j['user_id'] if 'user_id' in j else c.get('/api/auth/me').json()['id']

def create_live_ai(c,h,name='Hardening Site',description='A consulting studio offering strategy and product design services with contact support.'):
    r=c.post('/api/sites',headers={**h,'Idempotency-Key':f'create-{name}'},json={'business_name':name,'description':description,'template_slug':'atelier-noir','origin':'AI','industry':'Consulting','style':'Editorial','motion_style':'Subtle'})
    assert r.status_code==200,r.text
    sid=r.json()['id']; p=c.post(f'/api/sites/{sid}/publish',headers=h); assert p.status_code==200,p.text
    return sid

def test_plan_defaults_dual_wallet_and_contact_only_pro_has_no_wallet():
    reset_db(); c,h,uid=signup()
    assert DEFAULTS['FREE']['ai_credits']==20 and DEFAULTS['FREE']['lead_credits']==20 and DEFAULTS['FREE']['signup_bonus_credits']==0
    assert DEFAULTS['STARTER']['ai_credits']==100 and DEFAULTS['STARTER']['lead_credits']==100
    assert DEFAULTS['GROWTH']['ai_credits']==300 and DEFAULTS['GROWTH']['lead_credits']==300
    w=wallet_summary(uid); assert w['ai']['monthly_remaining']==20 and w['lead']['monthly_remaining']==20
    assert w['fallback_order']==['MONTHLY','SIGNUP_BONUS','TOPUP']
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET plan='PRO',plan_selected=1 WHERE id=:u"),{'u':uid})
    w2=wallet_summary(uid); assert w2['contact_only'] and w2['ai'] is None and w2['lead'] is None
    with SessionLocal() as db: assert db.execute(text('SELECT 1 FROM credit_wallets WHERE user_id=:u'),{'u':uid}).first() is None
    with SessionLocal.begin() as db:
        skipped=debit_wallet(db,uid,'PRO',99,'SHOULD_SKIP',credit_type='ai',idempotency_key='pro-skip')
        assert skipped['skipped'] and skipped['cost']==0
        assert db.execute(text('SELECT 1 FROM credit_wallets WHERE user_id=:u'),{'u':uid}).first() is None

def test_ai_and_lead_fallback_monthly_signup_topup_and_typed_exhaustion():
    reset_db(); c,h,uid=signup('fallback2@example.com')
    with SessionLocal.begin() as db:
        db.execute(text('''UPDATE credit_wallets SET monthly_remaining=1,signup_remaining=2,topup_remaining=4,
            lead_monthly_remaining=1,lead_signup_remaining=2,lead_topup_remaining=4 WHERE user_id=:u'''),{'u':uid})
        ai=debit_wallet(db,uid,'FREE',5,'AI_TEST',credit_type='ai',idempotency_key='a1')
        lead=debit_wallet(db,uid,'FREE',5,'LEAD_TEST',credit_type='lead',idempotency_key='l1')
        assert (ai['monthly_used'],ai['signup_used'],ai['topup_used'])==(1,2,2)
        assert (lead['monthly_used'],lead['signup_used'],lead['topup_used'])==(1,2,2)
    w=wallet_summary(uid); assert w['total']==2 and w['lead_total']==2
    with SessionLocal.begin() as db:
        with pytest.raises(HTTPException) as exc:
            debit_wallet(db,uid,'FREE',3,'LEAD_FAIL',credit_type='lead',idempotency_key='l2')
        assert exc.value.status_code==402 and exc.value.detail['code']=='LEAD_CREDITS_EXHAUSTED'

def test_exact_topup_catalogue_and_payment_verify_is_idempotent():
    reset_db(); c,h,uid=signup('topup2@example.com')
    assert TOPUP_PACKS['ai']=={
        'small':{'name':'Small','credits':50,'price_usd_minor':300},'medium':{'name':'Medium','credits':150,'price_usd_minor':800},
        'large':{'name':'Large','credits':400,'price_usd_minor':1800},'bulk':{'name':'Bulk','credits':1000,'price_usd_minor':4000}}
    assert TOPUP_PACKS['lead']=={
        'small':{'name':'Small','credits':50,'price_usd_minor':500},'medium':{'name':'Medium','credits':150,'price_usd_minor':1300},
        'large':{'name':'Large','credits':400,'price_usd_minor':3000},'bulk':{'name':'Bulk','credits':1000,'price_usd_minor':6500}}
    cat=c.get('/api/billing/credit-topups'); assert cat.status_code==200 and cat.json()['packs']['lead']['bulk']['price_usd_minor']==6500
    before=wallet_summary(uid)['lead_total']
    order=c.post('/api/billing/credit-topups/order',headers=h,json={'credit_type':'lead','pack_code':'small'}); assert order.status_code==200,order.text
    o=order.json(); payload={'order_id':o['order_id'],'payment_id':o['mock_payment_id'],'signature':o['mock_signature']}
    v1=c.post('/api/billing/credit-topups/verify',headers=h,json=payload); assert v1.status_code==200,v1.text
    v2=c.post('/api/billing/credit-topups/verify',headers=h,json=payload); assert v2.status_code==200 and v2.json()['idempotent'] is True
    assert wallet_summary(uid)['lead_total']==before+50

def test_super_admin_midcycle_plan_edit_defers_to_rollover_and_audits_old_new():
    reset_db(); c,h,uid=signup('midcycle@example.com')
    initial=wallet_summary(uid); assert initial['ai']['monthly_remaining']==20 and initial['lead']['monthly_remaining']==20
    # Change live plan configuration. Existing current-period wallet stays stable.
    update_plan('FREE',{'ai_credits':33,'lead_credits':44})
    same=wallet_summary(uid); assert same['ai']['monthly_remaining']==20 and same['lead']['monthly_remaining']==20
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE credit_wallets SET period_key='2000-01' WHERE user_id=:u"),{'u':uid})
    rolled=wallet_summary(uid); assert rolled['ai']['monthly_remaining']==33 and rolled['lead']['monthly_remaining']==44
    # Restore before fixture teardown for deterministic direct calls.
    update_plan('FREE',{'ai_credits':20,'lead_credits':20})

def test_lead_notification_charges_once_failure_refunds_and_contacts_deduplicate(monkeypatch):
    reset_db(); c,h,uid=signup('leadnotify@example.com'); sid=create_live_ai(c,h)
    # Make lead economics unambiguous for this test.
    with SessionLocal.begin() as db:
        db.execute(text('''UPDATE credit_wallets SET lead_monthly_remaining=3,lead_signup_remaining=0,lead_topup_remaining=0 WHERE user_id=:u'''),{'u':uid})
    import app.notifications as n
    monkeypatch.setattr(n,'send_email',lambda recipient,subject,body:{'provider':'test','message_id':'m1'})
    one=c.post('/api/leads',json={'site_id':sid,'name':'Alex Person','email':'alex@client.org','message':'Interested in services','session_id':'session-001'}); assert one.status_code==200,one.text
    assert wallet_summary(uid)['lead_total']==2
    two=c.post('/api/leads',json={'site_id':sid,'name':'Alex Person','email':'alex@client.org','message':'A second enquiry','session_id':'session-002'}); assert two.status_code==200
    assert wallet_summary(uid)['lead_total']==1
    with SessionLocal() as db:
        assert db.execute(text('SELECT count(*) FROM contacts WHERE user_id=:u'),{'u':uid}).scalar_one()==1
        assert db.execute(text('SELECT count(*) FROM leads WHERE contact_id=:c'),{'c':one.json()['contact_id']}).scalar_one()==2
    monkeypatch.setattr(n,'send_email',lambda *a,**k:(_ for _ in ()).throw(RuntimeError('provider down')))
    failed=c.post('/api/leads',json={'site_id':sid,'name':'Jamie Person','email':'jamie@client.org','message':'Third enquiry','session_id':'session-003'}); assert failed.status_code==200
    assert wallet_summary(uid)['lead_total']==1  # reserved then refunded
    with SessionLocal() as db:
        row=db.execute(text("SELECT status FROM notification_deliveries WHERE idempotency_key IS NOT NULL ORDER BY created_at DESC LIMIT 1")).first(); assert row and row[0]=='FAILED'

def test_chatbot_rule_cache_history_metrics_and_hash_cache(monkeypatch):
    reset_db(); c,h,uid=signup('chatmetric@example.com'); sid=create_live_ai(c,h,'Chat Metric Site')
    # Structured facts answer without LLM.
    seo=c.patch(f'/api/sites/{sid}/seo/settings',headers=h,json={'business_name':'Chat Metric Site','telephone':'+91 44 1234 5678','opening_hours':['Mo-Fr 09:00-17:00'],'primary_location':'Chennai'}); assert seo.status_code==200
    rule=c.post('/api/public/chatbot',json={'site_id':sid,'session_id':'session-rule','message':'What are your opening hours?'}); assert rule.status_code==200 and rule.json()['route']=='RULE' and '09:00' in rule.json()['answer']
    k=c.post(f'/api/sites/{sid}/knowledge',headers=h,json={'title':'Policies','content':'Custom projects include a discovery workshop and a written proposal. Delivery timelines depend on scope.'}); assert k.status_code==200
    import app.api_gapfixes as g
    calls=[]
    def fake_llm(question,docs,history=None):
        calls.append({'q':question,'history':history or []}); return 'A discovery workshop is included. — Source: Policies',k.json()['id']
    monkeypatch.setattr(g.settings,'app_env','production'); monkeypatch.setattr(g.settings,'openai_api_key','test-key'); monkeypatch.setattr(g,'verify_turnstile',lambda *a,**k: True); monkeypatch.setattr(g,'grounded_chatbot_answer',fake_llm)
    q={'site_id':sid,'session_id':'session-cache','message':'Is a discovery workshop included in custom projects?'}
    first=c.post('/api/public/chatbot',json=q); assert first.status_code==200 and first.json()['route']=='LLM'
    second=c.post('/api/public/chatbot',json={**q,'message':'Is a discovery workshop included in custom projects please?'}); assert second.status_code==200 and second.json()['route']=='CACHE'
    assert len(calls)==1
    metrics=c.get(f'/api/sites/{sid}/chatbot-metrics',headers=h); assert metrics.status_code==200
    routes=metrics.json()['routes']; assert routes['RULE']['queries']>=1 and routes['LLM']['queries']>=1 and routes['CACHE']['queries']>=1
    with SessionLocal() as db:
        emb=db.execute(text('SELECT content_hash,embedding_json FROM knowledge_embedding_cache WHERE document_id=:i'),{'i':k.json()['id']}).mappings().first(); assert emb and emb['content_hash'] and emb['embedding_json']

def test_prompt_caps_prompt_driven_ia_and_appointment_slot_is_transactionally_unique():
    reset_db(); c,h,uid=signup('iacap@example.com')
    too_long=c.post('/api/sites',headers=h,json={'business_name':'Huge Prompt','description':'x'*6001,'template_slug':'atelier-noir','origin':'AI','industry':'Business','style':'Premium'}); assert too_long.status_code==422
    one=c.post('/api/sites',headers={**h,'Idempotency-Key':'one-page'},json={'business_name':'One Page Hospital','description':'Make a one-page hospital landing page with departments and appointment information.','template_slug':'atelier-noir','origin':'AI','industry':'Hospital','style':'Premium'}); assert one.status_code==200 and one.json()['page_count']==1
    detailed=c.post('/api/sites',headers={**h,'Idempotency-Key':'hospital-pages'},json={'business_name':'Detailed Hospital','description':'Create a hospital website with About, Departments, Doctors, Facilities, Appointments and Contact as separate pages.','template_slug':'atelier-noir','origin':'AI','industry':'Hospital','style':'Premium'}); assert detailed.status_code==200,detailed.text
    assert detailed.json()['page_count']>=7  # Home + six explicit requirements, irrespective of FREE's 2-page template limit.
    sid=detailed.json()['id']; assert c.post(f'/api/sites/{sid}/publish',headers=h).status_code==200
    future=datetime(2099,1,1,10,0,tzinfo=timezone.utc).isoformat()
    a1=c.post('/api/appointments',json={'site_id':sid,'name':'First Person','email':'first@client.org','starts_at':future,'session_id':'appt-one'}); assert a1.status_code==200,a1.text
    a2=c.post('/api/appointments',json={'site_id':sid,'name':'Second Person','email':'second@client.org','starts_at':future,'session_id':'appt-two'}); assert a2.status_code==409 and a2.json()['detail']['code']=='APPOINTMENT_SLOT_TAKEN'
    cancel=c.post(f"/api/public/appointments/{a1.json()['id']}/cancel",json={'token':a1.json()['cancellation_token']}); assert cancel.status_code==200
