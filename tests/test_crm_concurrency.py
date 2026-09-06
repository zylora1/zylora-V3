"""
Concurrency & Race Condition Verification for Zylora CRM.

Tests:
1. OCC Revision Conflict: Parallel moves of the same deal with stale revision -> 409 Conflict for stale update
2. Concurrent Lead Ingestion: Parallel requests with identical lead email -> safe deduplication, no integrity violations
"""
import concurrent.futures
from uuid import uuid4
import pytest
from starlette.testclient import TestClient
from sqlalchemy import text
from app.main import app
from app.db import SessionLocal
from app.security import clear_rate_limits

def _clear_limits():
    clear_rate_limits()
    with SessionLocal.begin() as db:
        try:
            db.execute(text("DELETE FROM rate_limit_buckets"))
        except Exception:
            pass

def _create_tenant(email: str, name: str = "Concurrency User"):
    _clear_limits()
    client = TestClient(app)
    r = client.post("/api/auth/signup", json={
        "name": name,
        "email": email,
        "password": "SecurePassword123!",
        "organization_name": "Concurrency Corp"
    })
    assert r.status_code == 200, r.text
    body = r.json()
    if body.get("debug_verification_token"):
        vr = client.post("/api/auth/email/verify", json={"token": body["debug_verification_token"]})
        assert vr.status_code == 200, vr.text
    token = body["csrf_token"]
    headers = {"X-CSRF-Token": token}
    client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    return client, headers

def _create_site(client: TestClient, headers: dict) -> str:
    r = client.post('/api/sites', headers=headers, json={
        'business_name': 'Concurrency Sales Site',
        'description': 'Concurrency site description.',
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

def test_occ_deal_revision_race_condition():
    """Two concurrent updates with the same revision number: exactly one succeeds, one receives 409."""
    client, headers = _create_tenant(f"occ-{uuid4().hex[:8]}@example.com")
    
    # 1. Create deal
    pipe = client.get("/api/crm/pipelines", headers=headers).json()["items"][0]
    stage_1 = pipe["stages"][0]["id"]
    stage_2 = pipe["stages"][1]["id"]
    stage_3 = pipe["stages"][2]["id"]

    deal = client.post("/api/crm/deals", headers=headers, json={
        "title": "Race Condition Deal",
        "amount": 25000.0,
        "pipeline_id": pipe["id"],
        "stage_id": stage_1
    }).json()
    deal_id = deal["id"]

    current_deal = client.get(f"/api/crm/deals/{deal_id}", headers=headers).json()
    initial_rev = current_deal["revision"]
    assert initial_rev >= 1

    results = []
    def move_to(target_stage):
        worker_client = TestClient(app, cookies=client.cookies)
        res = worker_client.post(f"/api/crm/deals/{deal_id}/stage", headers=headers, json={
            "stage_id": target_stage,
            "expected_revision": initial_rev
        })
        return res.status_code

    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        f1 = executor.submit(move_to, stage_2)
        f2 = executor.submit(move_to, stage_3)
        results = [f1.result(), f2.result()]

    assert 200 in results, f"Expected at least one 200, got {results}"
    assert 409 in results, f"Expected one 409 Conflict due to OCC, got {results}"

    final_deal = client.get(f"/api/crm/deals/{deal_id}", headers=headers).json()
    assert final_deal["revision"] == initial_rev + 1

def test_concurrent_lead_ingestion_deduplication():
    """Simultaneous public lead form submissions with the identical email."""
    client, headers = _create_tenant(f"leads-race-{uuid4().hex[:8]}@example.com")
    site_id = _create_site(client, headers)

    shared_email = f"lead-race-{uuid4().hex[:8]}@prospectcorp.com"

    def submit_lead(worker_idx):
        anon_client = TestClient(app)
        res = anon_client.post("/api/leads", json={
            "site_id": site_id,
            "name": f"Prospect Ingest {worker_idx}",
            "email": shared_email,
            "phone": "+1 555 900 1234",
            "message": f"Enquiry #{worker_idx} from landing page",
            "source": "landing_contact_form"
        })
        return res.status_code

    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        futures = [executor.submit(submit_lead, i) for i in range(5)]
        status_codes = [f.result() for f in futures]

    assert all(code in (200, 201) for code in status_codes), f"Status codes: {status_codes}"

    contacts = client.get(f"/api/crm/contacts?search={shared_email}", headers=headers).json()
    matching = [c for c in contacts["items"] if c["email"] == shared_email]
    assert len(matching) == 1, f"Expected exactly 1 contact due to deduplication, found {len(matching)}"
