from __future__ import annotations

import uuid

from fastapi.testclient import TestClient

from app.main import app
from app.plans import MAX_PAGES_PER_SITE, all_plans


def _owner():
    client = TestClient(app)
    email = f"page-limit-{uuid.uuid4().hex[:10]}@example.com"
    signup = client.post(
        "/api/auth/signup",
        json={"name": "Page Limit QA", "email": email, "password": "SecurePass123!"},
    )
    assert signup.status_code == 200, signup.text
    body = signup.json()
    verify = client.post("/api/auth/email/verify", json={"token": body["debug_verification_token"]})
    assert verify.status_code == 200, verify.text
    return client, {"X-CSRF-Token": body["csrf_token"]}


def test_every_public_and_legacy_plan_uses_the_same_298_page_ceiling():
    plans = all_plans()
    assert {plan["page_limit"] for plan in plans} == {MAX_PAGES_PER_SITE}
    assert {plan["plan"] for plan in plans} == {"FREE", "STARTER", "GROWTH", "PRO", "ZYLORA"}


def test_studio_save_rejects_page_299_server_side():
    client, headers = _owner()
    selected = client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    assert selected.status_code == 200, selected.text
    created = client.post("/api/sites/blank", headers=headers, json={"name": "Page Ceiling QA"})
    assert created.status_code == 200, created.text
    site_id = created.json()["id"]
    migrated = client.post(f"/api/sites/{site_id}/studio-migrate", headers=headers)
    assert migrated.status_code == 200, migrated.text
    document = migrated.json()["document"]
    for index in range(2, MAX_PAGES_PER_SITE + 2):
        document["pages"][f"page-{index}"] = {}
    rejected = client.post(f"/api/sites/{site_id}/studio-save", headers=headers, json=document)
    assert rejected.status_code == 422, rejected.text
    detail = rejected.json()["detail"]
    assert detail["code"] == "PAGE_LIMIT_EXCEEDED"
    assert detail["page_count"] == MAX_PAGES_PER_SITE + 1
    assert detail["page_limit"] == MAX_PAGES_PER_SITE
