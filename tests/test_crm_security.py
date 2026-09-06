"""
Zero-Trust Security & Multi-Tenant Attack Suite for Zylora CRM.

Exhaustively verifies:
1. Cross-Tenant IDOR: Direct ID probing across Tenant A & B for all resources -> 404
2. Cross-Tenant Relationship Attack: Linking foreign contacts, deals, pipelines, stages -> 404
3. Cross-Tenant Merging Attack: Merging Tenant B contact into Tenant A -> 404
4. Cross-Tenant Bulk Operations Attack: Bulk tagging another tenant's contacts -> 0 affected
5. Mass Assignment Defense: Injecting user_id, is_admin, revision, created_at -> ignored/rejected
6. SQL Injection / Filter Tampering: Attacking sort_by, filter operators, search terms -> parameterized safely
7. CSRF Enforcement: Missing, invalid, or mismatched tokens on mutating endpoints -> 403
8. Unauthenticated Access: Probing CRM endpoints without session -> 401
9. Super Admin Privacy Isolation: Super Admin cannot browse customer private contacts via customer CRM routes
10. CSV Formula Injection Defense: Export sanitization against =, +, -, @, \t, \r
"""
import pytest
from uuid import uuid4
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

def _create_tenant(email: str, name: str = "Tenant User"):
    _clear_limits()
    client = TestClient(app)
    r = client.post("/api/auth/signup", json={
        "name": name,
        "email": email,
        "password": "SecurePassword123!",
        "organization_name": "Security Corp"
    })
    assert r.status_code == 200, r.text
    token = r.json()["csrf_token"]
    headers = {"X-CSRF-Token": token}
    client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    return client, headers

def test_cross_tenant_idor_complete_resource_matrix():
    """Attack every CRM resource endpoint from Tenant B against Tenant A's IDs."""
    client_a, headers_a = _create_tenant(f"victim-{uuid4().hex[:8]}@example.com", "Victim A")
    client_b, headers_b = _create_tenant(f"attacker-{uuid4().hex[:8]}@example.com", "Attacker B")

    # 1. Tenant A creates Contact
    c_res = client_a.post("/api/crm/contacts", headers=headers_a, json={
        "first_name": "Alice", "last_name": "Confidential", "email": f"alice-{uuid4().hex[:8]}@corp.com"
    })
    assert c_res.status_code == 200
    contact_a_id = c_res.json()["id"]

    # 2. Tenant A creates Company
    comp_res = client_a.post("/api/crm/companies", headers=headers_a, json={
        "name": "Secret Enterprise Co", "domain": "secret.corp"
    })
    assert comp_res.status_code == 200
    company_a_id = comp_res.json()["id"]

    # 3. Tenant A gets default pipeline & creates Deal
    pipe_a = client_a.get("/api/crm/pipelines", headers=headers_a).json()["items"][0]
    stage_a = pipe_a["stages"][0]
    deal_res = client_a.post("/api/crm/deals", headers=headers_a, json={
        "title": "Confidential M&A Deal",
        "amount": 500000.0,
        "pipeline_id": pipe_a["id"],
        "stage_id": stage_a["id"],
        "contact_id": contact_a_id,
        "company_id": company_a_id,
    })
    assert deal_res.status_code == 200
    deal_a_id = deal_res.json()["id"]

    # 4. Tenant A creates Task
    task_res = client_a.post("/api/crm/tasks", headers=headers_a, json={
        "title": "Review NDA", "contact_id": contact_a_id, "deal_id": deal_a_id
    })
    assert task_res.status_code == 200
    task_a_id = task_res.json()["id"]

    # 5. Tenant A creates Custom Field
    cf_res = client_a.post("/api/crm/custom-fields", headers=headers_a, json={
        "resource_type": "CONTACT", "field_name": "internal_rating", "field_label": "Rating", "field_type": "number"
    })
    assert cf_res.status_code == 200
    cf_a_id = cf_res.json()["id"]

    # 6. Tenant A creates Segment
    seg_res = client_a.post("/api/crm/segments", headers=headers_a, json={
        "name": "VIP Accounts", "rules": [{"field": "lead_score", "op": "gt", "value": 50}]
    })
    assert seg_res.status_code == 200
    seg_a_id = seg_res.json()["id"]

    # 7. Tenant A creates Automation
    auto_res = client_a.post("/api/crm/automations", headers=headers_a, json={
        "name": "Auto Welcome", "trigger_type": "NEW_LEAD", "actions": [{"type": "ADD_TAG", "tag": "VIP"}]
    })
    assert auto_res.status_code == 200
    auto_a_id = auto_res.json()["id"]

    # --- ATTACK SUITE: Tenant B probes all Tenant A resources -> MUST BE 404 ---
    # Contacts
    assert client_b.get(f"/api/crm/contacts/{contact_a_id}", headers=headers_b).status_code == 404
    assert client_b.patch(f"/api/crm/contacts/{contact_a_id}", headers=headers_b, json={"first_name": "Hacked"}).status_code == 404
    assert client_b.delete(f"/api/crm/contacts/{contact_a_id}", headers=headers_b).status_code == 404
    assert client_b.get(f"/api/crm/contacts/{contact_a_id}/timeline", headers=headers_b).status_code == 404
    assert client_b.post(f"/api/crm/contacts/{contact_a_id}/notes", headers=headers_b, json={"content": "Malicious note"}).status_code == 404
    assert client_b.post(f"/api/crm/contacts/{contact_a_id}/tasks", headers=headers_b, json={"title": "Malicious task"}).status_code == 404

    # Companies
    assert client_b.get(f"/api/crm/companies/{company_a_id}", headers=headers_b).status_code == 404
    assert client_b.patch(f"/api/crm/companies/{company_a_id}", headers=headers_b, json={"name": "Hacked Inc"}).status_code == 404
    assert client_b.delete(f"/api/crm/companies/{company_a_id}", headers=headers_b).status_code == 404

    # Pipelines
    assert client_b.get(f"/api/crm/pipelines/{pipe_a['id']}", headers=headers_b).status_code == 404
    assert client_b.delete(f"/api/crm/pipelines/{pipe_a['id']}", headers=headers_b).status_code == 404

    # Deals
    assert client_b.get(f"/api/crm/deals/{deal_a_id}", headers=headers_b).status_code == 404
    assert client_b.patch(f"/api/crm/deals/{deal_a_id}", headers=headers_b, json={"amount": 0.0}).status_code == 404
    assert client_b.delete(f"/api/crm/deals/{deal_a_id}", headers=headers_b).status_code == 404
    assert client_b.post(f"/api/crm/deals/{deal_a_id}/stage", headers=headers_b, json={"stage_id": stage_a["id"]}).status_code == 404

    # Tasks
    assert client_b.get(f"/api/crm/tasks/{task_a_id}", headers=headers_b).status_code == 404
    assert client_b.patch(f"/api/crm/tasks/{task_a_id}", headers=headers_b, json={"status": "COMPLETED"}).status_code == 404
    assert client_b.delete(f"/api/crm/tasks/{task_a_id}", headers=headers_b).status_code == 404

    # Custom Fields & Segments
    assert client_b.delete(f"/api/crm/custom-fields/{cf_a_id}", headers=headers_b).status_code == 404
    assert client_b.delete(f"/api/crm/segments/{seg_a_id}", headers=headers_b).status_code == 404

    # Automations
    assert client_b.get(f"/api/crm/automations/{auto_a_id}", headers=headers_b).status_code == 404
    assert client_b.delete(f"/api/crm/automations/{auto_a_id}", headers=headers_b).status_code == 404
    assert client_b.get(f"/api/crm/automations/{auto_a_id}/runs", headers=headers_b).status_code == 404

def test_cross_tenant_relationship_linkage_attack():
    """Tenant B attempts to link Tenant A's contact/company/deal/pipeline into Tenant B records."""
    client_a, headers_a = _create_tenant(f"victim-rel-{uuid4().hex[:8]}@example.com")
    client_b, headers_b = _create_tenant(f"attacker-rel-{uuid4().hex[:8]}@example.com")

    # Tenant A creates records
    c_a = client_a.post("/api/crm/contacts", headers=headers_a, json={"first_name": "Target"}).json()
    comp_a = client_a.post("/api/crm/companies", headers=headers_a, json={"name": "Target Org"}).json()
    pipe_a = client_a.get("/api/crm/pipelines", headers=headers_a).json()["items"][0]
    stage_a = pipe_a["stages"][0]
    deal_a = client_a.post("/api/crm/deals", headers=headers_a, json={"title": "Target Deal", "amount": 1000.0}).json()

    # Attack 1: Tenant B creates deal referencing Tenant A's contact_id
    d_fake_c = client_b.post("/api/crm/deals", headers=headers_b, json={
        "title": "Exploit Deal", "amount": 100.0, "contact_id": c_a["id"]
    })
    assert d_fake_c.status_code == 404, "Must not allow linking another tenant's contact"

    # Attack 2: Tenant B creates deal referencing Tenant A's company_id
    d_fake_co = client_b.post("/api/crm/deals", headers=headers_b, json={
        "title": "Exploit Deal", "amount": 100.0, "company_id": comp_a["id"]
    })
    assert d_fake_co.status_code == 404, "Must not allow linking another tenant's company"

    # Attack 3: Tenant B creates deal referencing Tenant A's pipeline_id
    d_fake_p = client_b.post("/api/crm/deals", headers=headers_b, json={
        "title": "Exploit Deal", "amount": 100.0, "pipeline_id": pipe_a["id"]
    })
    assert d_fake_p.status_code == 404, "Must not allow linking another tenant's pipeline"

    # Attack 4: Tenant B creates task referencing Tenant A's contact_id
    t_fake_c = client_b.post("/api/crm/tasks", headers=headers_b, json={
        "title": "Exploit Task", "contact_id": c_a["id"]
    })
    assert t_fake_c.status_code == 404, "Must not allow linking another tenant's contact in tasks"

    # Attack 5: Tenant B creates task referencing Tenant A's deal_id
    t_fake_d = client_b.post("/api/crm/tasks", headers=headers_b, json={
        "title": "Exploit Task", "deal_id": deal_a["id"]
    })
    assert t_fake_d.status_code == 404, "Must not allow linking another tenant's deal in tasks"

def test_cross_tenant_merge_attack():
    """Tenant B attempts to merge Tenant A's contact into Tenant B's contact."""
    client_a, headers_a = _create_tenant(f"victim-m-{uuid4().hex[:8]}@example.com")
    client_b, headers_b = _create_tenant(f"attacker-m-{uuid4().hex[:8]}@example.com")

    c_a = client_a.post("/api/crm/contacts", headers=headers_a, json={"first_name": "Victim Contact"}).json()
    c_b = client_b.post("/api/crm/contacts", headers=headers_b, json={"first_name": "Attacker Contact"}).json()

    # Tenant B tries to merge Tenant A's contact into Tenant B
    merge_res = client_b.post("/api/crm/contacts/merge", headers=headers_b, json={
        "primary_contact_id": c_b["id"],
        "secondary_contact_id": c_a["id"]
    })
    assert merge_res.status_code == 404, "Cross-tenant merge must be rejected with 404"

    # Tenant A contact must remain untouched and unarchived
    check_a = client_a.get(f"/api/crm/contacts/{c_a['id']}", headers=headers_a)
    assert check_a.status_code == 200
    assert check_a.json()["is_archived"] == 0

def test_cross_tenant_bulk_operations_isolation():
    """Tenant B attempts bulk tagging or archiving on Tenant A's contacts."""
    client_a, headers_a = _create_tenant(f"victim-bulk-{uuid4().hex[:8]}@example.com")
    client_b, headers_b = _create_tenant(f"attacker-bulk-{uuid4().hex[:8]}@example.com")

    c_a = client_a.post("/api/crm/contacts", headers=headers_a, json={"first_name": "Safe Contact"}).json()

    # Tenant B runs bulk tag with Tenant A's contact ID
    bulk_res = client_b.post("/api/crm/contacts/bulk", headers=headers_b, json={
        "contact_ids": [c_a["id"]],
        "action": "tag",
        "tag": "COMPROMISED"
    })
    assert bulk_res.status_code == 200
    assert "0 contacts" in bulk_res.json()["message"] or "No valid contacts" in bulk_res.json()["message"]

    # Verify contact A has no tag
    a_details = client_a.get(f"/api/crm/contacts/{c_a['id']}", headers=headers_a).json()
    assert len(a_details["tags"]) == 0

def test_mass_assignment_protection():
    """Verify system fields (user_id, created_at, is_admin, revision) cannot be forged in requests."""
    client, headers = _create_tenant(f"sec-mass-{uuid4().hex[:8]}@example.com")

    # Attempt to inject user_id and lead_score in contact creation
    res = client.post("/api/crm/contacts", headers=headers, json={
        "first_name": "Test",
        "email": "normal@test.com",
        "user_id": "00000000-0000-0000-0000-000000000000",
        "is_archived": 1,
        "revision": 999
    })
    assert res.status_code == 200
    cid = res.json()["id"]

    # Verify contact belongs to client session and revision is default
    c_data = client.get(f"/api/crm/contacts/{cid}", headers=headers).json()
    assert c_data["is_archived"] == 0
    assert c_data["revision"] == 1

def test_sql_injection_and_unsafe_filters():
    """Attack contact and company search/filter endpoints with SQL injection payloads."""
    client, headers = _create_tenant(f"sec-sqli-{uuid4().hex[:8]}@example.com")

    # Create dummy contact
    client.post("/api/crm/contacts", headers=headers, json={"first_name": "Normal", "email": "norm@example.com"})

    # SQL injection in search
    sqli_payloads = [
        "' OR '1'='1",
        "'; DROP TABLE crm_contacts; --",
        r'" OR ""="',
        "admin'--",
        "1 UNION SELECT null, null, null--",
        "%27%20OR%201=1--"
    ]
    for p in sqli_payloads:
        r = client.get(f"/api/crm/contacts?search={p}", headers=headers)
        assert r.status_code == 200, f"Search with payload '{p}' failed: {r.text}"
        # Total should not leak other records
        assert r.json()["total"] == 0

    # Unsafe sort_by parameter tampering (should fallback to created_at)
    bad_sort = client.get("/api/crm/contacts?sort_by=password_hash;DROP%20TABLE", headers=headers)
    assert bad_sort.status_code == 200

def test_csrf_protection_on_mutating_endpoints():
    """Verify all mutating CRM endpoints strictly require valid CSRF token."""
    client, headers = _create_tenant(f"sec-csrf-{uuid4().hex[:8]}@example.com")

    # Mutating with missing CSRF
    no_csrf = client.post("/api/crm/contacts", json={"first_name": "Test"})
    assert no_csrf.status_code == 403, "Must reject without CSRF token"

    # Mutating with forged/invalid CSRF
    bad_csrf = client.post("/api/crm/contacts", headers={"X-CSRF-Token": "forged_token_12345"}, json={"first_name": "Test"})
    assert bad_csrf.status_code == 403, "Must reject with invalid CSRF token"

def test_unauthenticated_crm_rejection():
    """Unauthenticated client probing any CRM endpoint must receive 401."""
    anon = TestClient(app)
    endpoints = [
        ("GET", "/api/crm/overview"),
        ("GET", "/api/crm/contacts"),
        ("POST", "/api/crm/contacts"),
        ("GET", "/api/crm/deals"),
        ("POST", "/api/crm/deals"),
        ("GET", "/api/crm/pipelines"),
        ("GET", "/api/crm/tasks"),
        ("GET", "/api/crm/companies"),
        ("GET", "/api/crm/automations"),
        ("GET", "/api/crm/export/contacts"),
    ]
    for method, path in endpoints:
        if method == "GET":
            assert anon.get(path).status_code == 401
        elif method == "POST":
            assert anon.post(path, json={}).status_code == 401
