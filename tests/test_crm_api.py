from __future__ import annotations
from uuid import uuid4
from fastapi.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits

def _signup_user(email: str, name: str = 'User'):
    clear_rate_limits()
    with SessionLocal.begin() as db:
        try: db.execute(text("DELETE FROM rate_limit_buckets"))
        except Exception: pass
    c = TestClient(app)
    r = c.post('/api/auth/signup', json={'name': name, 'email': email, 'password': 'SecurePass123!'})
    assert r.status_code == 200, r.text
    j = r.json()
    headers = {'X-CSRF-Token': j['csrf_token']}
    if j.get('debug_verification_token'):
        c.post('/api/auth/email/verify', json={'token': j['debug_verification_token']})
    c.post('/api/billing/select', headers=headers, json={'plan': 'FREE'})
    return c, headers

def test_tenant_isolation_and_security():
    user_a_email = f"user-a-{uuid4().hex[:8]}@example.com"
    user_b_email = f"user-b-{uuid4().hex[:8]}@example.com"

    client_a, headers_a = _signup_user(user_a_email, "Account A")
    client_b, headers_b = _signup_user(user_b_email, "Account B")

    # Account A creates a contact
    c_res = client_a.post('/api/crm/contacts', headers=headers_a, json={
        'first_name': 'Private',
        'last_name': 'Contact',
        'email': 'private@usera.com',
        'phone': '+15551112222',
        'company_name': 'Company A'
    })
    assert c_res.status_code == 200, c_res.text
    contact_a_id = c_res.json()['id']

    # Account A creates a deal
    p_res = client_a.get('/api/crm/pipelines', headers=headers_a)
    assert p_res.status_code == 200
    pipe_a = p_res.json()['items'][0]
    stage_a = pipe_a['stages'][0]

    d_res = client_a.post('/api/crm/deals', headers=headers_a, json={
        'title': 'Confidential Deal A',
        'amount': 50000.0,
        'pipeline_id': pipe_a['id'],
        'stage_id': stage_a['id'],
        'contact_id': contact_a_id
    })
    assert d_res.status_code == 200, d_res.text
    deal_a_id = d_res.json()['id']

    # Account A creates a task
    t_res = client_a.post('/api/crm/tasks', headers=headers_a, json={
        'title': 'Private Follow Up',
        'task_type': 'CALL',
        'contact_id': contact_a_id
    })
    assert t_res.status_code == 200
    task_a_id = t_res.json()['id']

    # --- CROSS-TENANT UNAUTHORIZED ACCESS ATTEMPTS (Account B tries to access A) ---
    assert client_b.get(f'/api/crm/contacts/{contact_a_id}', headers=headers_b).status_code == 404
    assert client_b.patch(f'/api/crm/contacts/{contact_a_id}', headers=headers_b, json={'company_name': 'Hacked'}).status_code == 404
    assert client_b.delete(f'/api/crm/contacts/{contact_a_id}', headers=headers_b).status_code == 404

    assert client_b.get(f'/api/crm/deals/{deal_a_id}', headers=headers_b).status_code == 404
    assert client_b.post(f'/api/crm/deals/{deal_a_id}/stage', headers=headers_b, json={'stage_id': stage_a['id']}).status_code == 404

    assert client_b.post(f'/api/crm/tasks/{task_a_id}/complete', headers=headers_b).status_code == 404

    b_contacts = client_b.get('/api/crm/contacts', headers=headers_b).json()
    assert all(c['id'] != contact_a_id for c in b_contacts.get('items', []))

    b_deals = client_b.get('/api/crm/deals', headers=headers_b).json()
    assert all(d['id'] != deal_a_id for d in b_deals.get('items', []))

def test_contacts_crud_filtering_and_timeline():
    client, headers = _signup_user(f"crm-user-{uuid4().hex[:8]}@example.com")

    # Create contacts
    c1_res = client.post('/api/crm/contacts', headers=headers, json={
        'first_name': 'Grace', 'last_name': 'Hopper', 'email': 'grace@navy.mil',
        'company_name': 'US Navy', 'lifecycle_stage': 'CUSTOMER'
    })
    assert c1_res.status_code == 200, c1_res.text
    c1 = c1_res.json()

    c2_res = client.post('/api/crm/contacts', headers=headers, json={
        'first_name': 'Ada', 'last_name': 'Lovelace', 'email': 'ada@analytical.org',
        'company_name': 'Babbage Engine', 'lifecycle_stage': 'LEAD'
    })
    assert c2_res.status_code == 200, c2_res.text
    c2 = c2_res.json()

    # Search
    search_res = client.get('/api/crm/contacts?search=Hopper', headers=headers).json()
    assert search_res['total'] == 1
    assert search_res['items'][0]['email'] == 'grace@navy.mil'

    # Lifecycle stage filter
    stage_res = client.get('/api/crm/contacts?lifecycle_stage=CUSTOMER', headers=headers).json()
    assert any(c['id'] == c1['id'] for c in stage_res['items'])
    assert all(c['id'] != c2['id'] for c in stage_res['items'])

    # Timeline note logging
    note_res = client.post(f"/api/crm/contacts/{c1['id']}/notes", headers=headers, json={
        'content': 'Demonstrated compiler prototype to stakeholders.'
    })
    assert note_res.status_code == 200

    timeline = client.get(f"/api/crm/contacts/{c1['id']}/timeline", headers=headers).json()
    assert len(timeline.get('timeline', [])) >= 2

def test_pipeline_deals_and_kanban_stage_movement():
    client, headers = _signup_user(f"pipeline-user-{uuid4().hex[:8]}@example.com")

    # Get default pipeline and stages
    pipe = client.get('/api/crm/pipelines', headers=headers).json()['items'][0]
    stages = pipe['stages']
    assert len(stages) >= 4
    s_lead = stages[0]
    s_won = [s for s in stages if s.get('stage_type') == 'WON' or s.get('name') == 'Won'][0]

    # Create Deal
    deal = client.post('/api/crm/deals', headers=headers, json={
        'title': 'Enterprise SLA',
        'amount': 25000.0,
        'pipeline_id': pipe['id'],
        'stage_id': s_lead['id'],
        'priority': 'HIGH'
    }).json()
    assert deal['amount'] == 25000.0
    assert deal['revision'] == 1

    # Move Stage
    move_res = client.post(f"/api/crm/deals/{deal['id']}/stage", headers=headers, json={
        'stage_id': s_won['id'],
        'revision': 1
    })
    assert move_res.status_code == 200, move_res.text
    moved_deal = move_res.json()
    assert moved_deal['stage_id'] == s_won['id']
    assert moved_deal['revision'] == 2

    # Overview analytics shows won deal
    analytics = client.get('/api/crm/analytics/overview', headers=headers).json()
    assert analytics['deals']['won_revenue'] >= 25000.0

def test_csv_export_sanitization_endpoint():
    client, headers = _signup_user(f"csv-user-{uuid4().hex[:8]}@example.com")

    # Create contact with potentially dangerous formula prefix
    c_res = client.post('/api/crm/contacts', headers=headers, json={
        'first_name': '=cmd|/c calc',
        'last_name': '+100',
        'email': 'safe@csv.com'
    })
    assert c_res.status_code == 200, c_res.text

    # Download CSV export
    exp = client.get('/api/crm/export/contacts', headers=headers)
    assert exp.status_code == 200
    assert exp.headers['content-type'].startswith('text/csv')
    csv_text = exp.text

    # Verify formula prefixes are safely escaped with single quote
    assert "'=cmd|/c calc" in csv_text or "\'=cmd" in csv_text
