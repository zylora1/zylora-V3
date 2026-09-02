from __future__ import annotations

from uuid import uuid4

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal, migrate, now_iso
from app.main import app
from app.providers import estimate_openai_cost_micros
from app.security import clear_rate_limits
from app.templates import TEMPLATES


def _signup(email: str, name: str):
    client=TestClient(app)
    response=client.post('/api/auth/signup',json={'name':name,'email':email,'password':'SecurePass123!'})
    assert response.status_code==200,response.text
    body=response.json(); headers={'X-CSRF-Token':body['csrf_token']}
    return client,headers


def _reset():
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        db.execute(text('DELETE FROM template_catalogue_state'))
        db.execute(text('DELETE FROM ai_api_usage'))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))


def test_super_admin_has_dedicated_portal_without_subscription_wallet():
    _reset(); admin,headers=_signup(f'admin-{uuid4().hex[:8]}@example.com','Portal Admin')
    with SessionLocal.begin() as db:
        uid=db.execute(text("SELECT id FROM users WHERE name='Portal Admin' ORDER BY created_at DESC LIMIT 1")).scalar_one()
        db.execute(text("UPDATE users SET role='SUPER_ADMIN',plan='FREE',plan_selected=0 WHERE id=:u"),{'u':uid})
    me=admin.get('/api/auth/me'); assert me.status_code==200
    payload=me.json()
    assert payload['role']=='SUPER_ADMIN' and payload['plan_selected'] is True
    assert payload['subscription_required'] is False
    assert 'credit_wallet' not in payload and 'ai_credits' not in payload and 'lead_credits' not in payload
    dashboard=admin.get('/dashboard',follow_redirects=False)
    assert dashboard.status_code==302 and dashboard.headers['location'] in {'/admin',payload['admin_portal_url']}
    login=TestClient(app).post('/api/auth/login',json={'email':payload['email'],'password':'SecurePass123!'})
    assert login.status_code==200 and login.json()['role']=='SUPER_ADMIN' and login.json()['next'] in {'/admin',payload['admin_portal_url']}


def test_normal_user_cannot_read_admin_analytics_or_manage_templates():
    _reset(); user,headers=_signup(f'user-{uuid4().hex[:8]}@example.com','Normal Customer')
    assert user.get('/api/admin/analytics').status_code==403
    assert user.get('/api/admin/templates').status_code==403
    slug=TEMPLATES[0]['slug']
    assert user.patch(f'/api/admin/templates/{slug}',headers=headers,json={'published':False}).status_code==403


def test_admin_can_unpublish_and_restore_template_and_drill_into_customer():
    _reset(); customer,_=_signup(f'customer-{uuid4().hex[:8]}@example.com','Detailed Customer')
    customer_id=customer.get('/api/auth/me').json()['id']
    admin,headers=_signup(f'admin-{uuid4().hex[:8]}@example.com','Catalogue Admin')
    with SessionLocal.begin() as db:
        admin_id=db.execute(text("SELECT id FROM users WHERE name='Catalogue Admin' ORDER BY created_at DESC LIMIT 1")).scalar_one()
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE id=:u"),{'u':admin_id})
    slug=TEMPLATES[0]['slug']
    hidden=admin.patch(f'/api/admin/templates/{slug}',headers=headers,json={'published':False})
    assert hidden.status_code==200 and hidden.json()['published'] is False
    assert slug not in {item['slug'] for item in customer.get('/api/templates').json()['items']}
    restored=admin.patch(f'/api/admin/templates/{slug}',headers=headers,json={'published':True})
    assert restored.status_code==200 and restored.json()['published'] is True
    assert slug in {item['slug'] for item in customer.get('/api/templates').json()['items']}
    detail=admin.get(f'/api/admin/users/{customer_id}')
    assert detail.status_code==200 and detail.json()['user']['email'].startswith('customer-')
    assert {'sites','live_sites','leads','appointments','emails_sent','whatsapp_sent','chatbot_cost_micros','website_cost_micros'} <= detail.json()['stats'].keys()


def test_admin_analytics_keeps_delivery_and_ai_cost_surfaces_separate():
    _reset(); admin,_=_signup(f'admin-{uuid4().hex[:8]}@example.com','Analytics Admin')
    with SessionLocal.begin() as db:
        admin_id=db.execute(text("SELECT id FROM users WHERE name='Analytics Admin' ORDER BY created_at DESC LIMIT 1")).scalar_one()
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE id=:u"),{'u':admin_id})
        db.execute(text("INSERT INTO ai_api_usage(id,user_id,site_id,surface,operation,model,input_tokens,cached_input_tokens,output_tokens,estimated_cost_micros,created_at) VALUES (:i,:u,NULL,'WEBSITE','TEST','gpt-5-mini',100,0,25,75,:a)"),{'i':str(uuid4()),'u':admin_id,'a':now_iso()})
    response=admin.get('/api/admin/analytics?days=7'); assert response.status_code==200
    body=response.json(); assert body['days']==7
    assert body['totals']['website_cost_micros']==75 and body['totals']['chatbot_cost_micros']==0
    assert len(body['series'])==7


def test_openai_cost_estimate_uses_provider_token_usage_and_cached_rate():
    assert estimate_openai_cost_micros('gpt-4o-mini',{
        'input_tokens':1_000_000,
        'output_tokens':1_000_000,
    }) == 750_000
    assert estimate_openai_cost_micros('gpt-4o-mini',{
        'input_tokens':1_000_000,
        'input_tokens_details':{'cached_tokens':1_000_000},
        'output_tokens':0,
    }) == 75_000
    assert estimate_openai_cost_micros('unpriced-future-model',{'input_tokens':1_000_000}) == 0
