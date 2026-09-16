from __future__ import annotations

from app.config import settings
from app.provider_health import _usage_alerts, provider_health_snapshot
from app.db import SessionLocal
from app.main import app
from fastapi.testclient import TestClient
from sqlalchemy import text
from uuid import uuid4


def test_provider_health_is_provider_neutral_and_never_returns_secrets(monkeypatch):
    monkeypatch.setattr(settings, "ai_gateway_api_key", "gateway-secret")
    monkeypatch.setattr(settings, "ai_gateway_base_url", "https://ai-gateway.example/v1")
    monkeypatch.setattr(settings, "telnyx_api_key", "telnyx-secret")
    monkeypatch.setattr(settings, "telnyx_email_from", "Zylora <noreply@example.test>")
    monkeypatch.setattr(settings, "razorpay_key_id", "rzp_public")
    monkeypatch.setattr(settings, "cloudflare_api_token", "cf-secret")
    monkeypatch.setattr(settings, "cloudflare_zone_id", "zone-1")
    snapshot = provider_health_snapshot()
    providers = {item["id"]: item for item in snapshot["providers"]}
    assert providers["vercel_ai_gateway"]["status"] == "CONFIGURED"
    assert providers["telnyx"]["status"] == "CONFIGURED"
    assert providers["razorpay"]["status"] == "CONFIGURED"
    assert providers["cloudflare"]["status"] == "CONFIGURED"
    rendered = str(snapshot)
    assert "gateway-secret" not in rendered
    assert "telnyx-secret" not in rendered
    assert "cf-secret" not in rendered


def test_provider_health_reports_penpot_blocked_without_claiming_runtime(monkeypatch):
    monkeypatch.setattr(settings, "studio_engine", "legacy")
    monkeypatch.setattr(settings, "penpot_upstream_version", "")
    monkeypatch.setattr(settings, "penpot_upstream_commit", "")
    snapshot = provider_health_snapshot()
    penpot = next(item for item in snapshot["providers"] if item["id"] == "penpot")
    assert penpot["status"] == "BLOCKED_BY_EXTERNAL_ENVIRONMENT"
    assert penpot["configured"] is False
    assert penpot["source_present"] is True
    assert penpot["source_mode"] == "git_submodule"
    assert penpot["source_path"] == "vendor/penpot"


def test_provider_usage_alerts_are_thresholded_and_provider_neutral(monkeypatch):
    monkeypatch.setattr(settings, "ai_cost_alert_usd", 1.0)
    monkeypatch.setattr(settings, "telnyx_message_alert_count", 3)
    monkeypatch.setattr(settings, "communication_failure_alert_pct", 50.0)
    alerts = _usage_alerts(
        [{"provider_cost_micros": 1_250_000}],
        [{"channel": "email", "status": "accepted", "count": 1}, {"channel": "sms", "status": "failed", "count": 2}],
    )
    assert {item["id"] for item in alerts} == {"ai_cost", "telnyx_volume", "communication_failure_rate"}
    assert all("secret" not in str(item).lower() for item in alerts)


def test_provider_health_and_usage_are_super_admin_only():
    client = TestClient(app)
    email = f"provider-health-{uuid4().hex}@example.com"
    signup = client.post("/api/auth/signup", json={"name": "Health User", "email": email, "password": "HealthTest123!"})
    assert signup.status_code == 200, signup.text
    payload = signup.json()
    assert client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]}).status_code == 200
    headers = {"X-CSRF-Token": payload["csrf_token"]}
    assert client.get("/api/admin/provider-health").status_code == 403
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE users SET role='SUPER_ADMIN' WHERE email=:email"), {"email": email})
    assert client.get("/api/admin/provider-health", headers=headers).status_code == 200
    usage = client.get("/api/admin/provider-usage?days=2", headers=headers)
    assert usage.status_code == 200
    assert usage.json()["days"] == 2
