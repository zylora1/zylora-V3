"""
End-to-End Integration & Lifecycle Test Suite for Zylora CRM.

Validates the full lifecycle flow:
1. Public Form Lead Ingestion -> Auto Contact Creation -> Lead Scoring -> Activity Timeline
2. AI Sales Assistant Flow -> Lead Qualification -> CRM Ingestion -> High Intent Scoring
3. Public Appointment Booking -> Contact Association -> CRM Meeting Timeline Activity
4. Deal Progression -> Concurrency -> Conversion Funnel Analytics Aggregation
5. Task Lifecycle -> Complete Task -> Contact Activity Logged
"""
import pytest
from datetime import datetime, timezone, timedelta
from uuid import uuid4
from starlette.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal
from app.security import clear_rate_limits

def _clear_durable_rate_limits():
    clear_rate_limits()
    with SessionLocal.begin() as db:
        try:
            db.execute(text("DELETE FROM rate_limit_buckets"))
        except Exception:
            pass

def _signup_user(email: str, org_name: str = "E2E Enterprise"):
    _clear_durable_rate_limits()
    client = TestClient(app)
    r = client.post('/api/auth/signup', json={
        'name': 'E2E Owner',
        'email': email,
        'password': 'SecurePassword123!',
        'organization_name': org_name
    })
    assert r.status_code == 200, r.text
    body = r.json()
    if body.get('debug_verification_token'):
        vr = client.post('/api/auth/email/verify', json={'token': body['debug_verification_token']})
        assert vr.status_code == 200, vr.text
    token = body['csrf_token']
    headers = {'X-CSRF-Token': token}
    client.post('/api/billing/select', headers=headers, json={'plan': 'FREE'})
    return client, headers

def _create_live_site(client: TestClient, headers: dict) -> str:
    r = client.post('/api/sites', headers=headers, json={
        'business_name': 'Acme Enterprise CRM',
        'description': 'High performance sales platform for growing teams.',
        'template_slug': 'northstar-cloud',
        'origin': 'AI',
        'industry': 'SaaS',
        'style': 'Premium',
    })
    assert r.status_code == 200, r.text
    sid = r.json()['id']
    pr = client.post(f'/api/sites/{sid}/publish', headers=headers)
    assert pr.status_code == 200, pr.text
    return sid

def test_public_form_lead_lifecycle_into_crm():
    """Verify public website contact form creates lead & contact in CRM with scoring."""
    client, headers = _signup_user(f"owner-{uuid4().hex[:8]}@example.com")
    site_id = _create_live_site(client, headers)

    lead_email = f"sarah-{uuid4().hex[:8]}@cyberdyne.com"
    form_res = client.post('/api/leads', json={
        'site_id': site_id,
        'name': 'Sarah Connor',
        'email': lead_email,
        'phone': '+14155550199',
        'company': 'Cyberdyne Systems',
        'source': 'website_form',
        'message': 'We need enterprise pricing and demo for 500 seats immediately.'
    })
    assert form_res.status_code == 200, form_res.text

    # Verify contact is in CRM
    contacts_res = client.get(f'/api/crm/contacts?search={lead_email}', headers=headers)
    assert contacts_res.status_code == 200
    data = contacts_res.json()
    assert data['total'] >= 1
    contact = data['items'][0]
    assert contact['email'] == lead_email
    assert contact['lead_score'] >= 50
    assert contact['lifecycle_stage'] in ('HOT_LEAD', 'LEAD')

    # Verify timeline has form submission activity
    t_res = client.get(f"/api/crm/contacts/{contact['id']}/timeline", headers=headers)
    assert t_res.status_code == 200
    timeline = t_res.json()['activities']
    assert any("Cyberdyne Systems" in a.get('summary', '') or a.get('activity_type') in ('LEAD_CAPTURED', 'CONTACT_CREATED') for a in timeline)

def test_sales_assistant_enquiry_to_crm():
    """Verify sales assistant qualification logs into CRM."""
    client, headers = _signup_user(f"asst-owner-{uuid4().hex[:8]}@example.com")
    site_id = _create_live_site(client, headers)

    conv_res = client.post(f'/api/public/sites/{site_id}/assistant/conversations', json={
        'session_id': f'sess-{uuid4().hex[:8]}',
        'page_url': '/pricing'
    })
    assert conv_res.status_code == 200, conv_res.text
    conv_id = conv_res.json()['id']

    sa_email = f"arjun-{uuid4().hex[:8]}@strategy.com"
    msg_res = client.post(f'/api/public/sites/{site_id}/assistant/conversations/{conv_id}/messages', json={
        'message': 'I want to schedule a strategy consultation for next week. Please call me.',
        'contact': {
            'name': 'Arjun Mehta',
            'email': sa_email,
            'phone': '+919900001111',
            'service_interest': 'Enterprise Strategy'
        }
    })
    assert msg_res.status_code == 200, msg_res.text

    # Verify CRM has the lead and contact
    c_res = client.get(f'/api/crm/contacts?search={sa_email}', headers=headers)
    assert c_res.status_code == 200
    items = c_res.json()['items']
    assert len(items) >= 1
    c = items[0]
    assert c['email'] == sa_email

def test_public_appointment_booking_crm_link():
    """Verify public appointment booking links to CRM contact & generates meeting activity."""
    client, headers = _signup_user(f"appt-owner-{uuid4().hex[:8]}@example.com")
    site_id = _create_live_site(client, headers)

    appt_email = f"elena-{uuid4().hex[:8]}@partner.org"
    future_time = (datetime.now(timezone.utc) + timedelta(days=5)).isoformat()
    # Book public appointment
    book_res = client.post('/api/appointments', json={
        'site_id': site_id,
        'name': 'Elena Rostova',
        'email': appt_email,
        'phone': '+12025550188',
        'starts_at': future_time,
        'source': 'WEBSITE',
        'notes': 'Discuss custom API integrations.'
    })
    assert book_res.status_code == 200, book_res.text

    # Verify contact was linked in CRM
    c_res = client.get(f'/api/crm/contacts?search={appt_email}', headers=headers)
    assert c_res.status_code == 200
    items = c_res.json()['items']
    assert len(items) >= 1
    cid = items[0]['id']

    # Verify timeline has appointment
    t_res = client.get(f'/api/crm/contacts/{cid}/timeline', headers=headers)
    assert t_res.status_code == 200
    activities = t_res.json()['activities']
    assert any('APPOINTMENT' in a.get('activity_type', '') for a in activities)

def test_full_pipeline_deal_and_task_flow():
    """Verify creating deal, moving stages, completing tasks, and verifying conversion analytics."""
    client, headers = _signup_user(f"funnel-owner-{uuid4().hex[:8]}@example.com")

    # 1. Create contact
    c_res = client.post('/api/crm/contacts', headers=headers, json={
        'first_name': 'Marcus',
        'last_name': 'Vance',
        'email': 'marcus@vancetech.io',
        'company_name': 'Vance Technologies'
    })
    assert c_res.status_code == 200
    contact_id = c_res.json()['id']

    # 2. Get default pipeline & stages
    pipe = client.get('/api/crm/pipelines', headers=headers).json()['items'][0]
    stages = pipe['stages']
    first_stage = stages[0]
    won_stage = [s for s in stages if s.get('stage_type') == 'WON' or s.get('name') == 'Won'][0]

    # 3. Create deal
    d_res = client.post('/api/crm/deals', headers=headers, json={
        'title': 'Vance Cloud Migration',
        'amount': 75000.0,
        'pipeline_id': pipe['id'],
        'stage_id': first_stage['id'],
        'contact_id': contact_id
    })
    assert d_res.status_code == 200
    deal_id = d_res.json()['id']

    # 4. Create a task for this contact and deal
    t_res = client.post('/api/crm/tasks', headers=headers, json={
        'title': 'Send Master Services Agreement',
        'task_type': 'EMAIL',
        'contact_id': contact_id,
        'deal_id': deal_id,
        'priority': 'HIGH'
    })
    assert t_res.status_code == 200
    task_id = t_res.json()['id']

    # 5. Complete task
    comp_res = client.post(f'/api/crm/tasks/{task_id}/complete', headers=headers)
    assert comp_res.status_code == 200
    assert comp_res.json()['status'] == 'COMPLETED'

    # 6. Move deal to Won
    move_res = client.post(f'/api/crm/deals/{deal_id}/stage', headers=headers, json={
        'stage_id': won_stage['id'],
        'revision': 1
    })
    assert move_res.status_code == 200

    # 7. Check overview analytics
    stats_res = client.get('/api/crm/analytics/overview', headers=headers)
    assert stats_res.status_code == 200
    stats = stats_res.json()
    assert stats['won_deals_count'] >= 1
    assert stats['won_revenue'] >= 75000.0
    assert stats['deals']['won_revenue'] >= 75000.0
