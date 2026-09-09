from __future__ import annotations

import json
import uuid
import concurrent.futures
from datetime import datetime, timedelta, timezone

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

import app.sales_assistant as sales_assistant
from app.db import SessionLocal, now_iso
from app.main import app
from app.security import clear_rate_limits


def _owner(prefix: str):
    clear_rate_limits()
    with SessionLocal.begin() as db:
        db.execute(text("DELETE FROM rate_limit_buckets"))
    client = TestClient(app)
    email = f"{prefix}-{uuid.uuid4().hex[:10]}@example.com"
    response = client.post("/api/auth/signup", json={"name": "Assistant QA", "email": email, "password": "SecurePass123!"})
    assert response.status_code == 200, response.text
    payload = response.json()
    if payload.get("debug_verification_token"):
        verified = client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]})
        assert verified.status_code == 200, verified.text
    headers = {"X-CSRF-Token": payload["csrf_token"]}
    selected = client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    assert selected.status_code == 200, selected.text
    return client, headers


def _published_site(client: TestClient, headers: dict, name: str = "Dental Clinic") -> str:
    response = client.post(
        "/api/sites",
        headers=headers,
        json={
            "business_name": name,
            "description": "A dental clinic offering confirmed veneer consultations and preventive care.",
            "origin": "AI",
            "industry": "Dental",
            "style": "Premium",
        },
    )
    assert response.status_code == 200, response.text
    site_id = response.json()["id"]
    published = client.post(f"/api/sites/{site_id}/publish", headers=headers)
    assert published.status_code == 200, published.text
    return site_id


def _future_weekday() -> tuple[str, int]:
    now = datetime.now(timezone.utc)
    target = now + timedelta(days=1)
    while target.weekday() not in {0, 1, 2, 3, 4}:
        target += timedelta(days=1)
    return target.date().isoformat(), target.weekday()


def _configure_appointments(client: TestClient, headers: dict, site_id: str) -> tuple[str, str]:
    requested_date, weekday = _future_weekday()
    configured = client.put(
        f"/api/sites/{site_id}/appointment-settings",
        headers=headers,
        json={"timezone": "UTC", "weekdays": [weekday], "start_hour": 9, "end_hour": 17, "duration_minutes": 60, "buffer_minutes": 30},
    )
    assert configured.status_code == 200, configured.text
    available = client.get(f"/api/public/sites/{site_id}/assistant/availability?date={requested_date}&daypart=afternoon")
    assert available.status_code == 200, available.text
    slots = available.json()["slots"]
    assert slots, available.text
    return requested_date, slots[0]


def test_sales_assistant_booking_is_grounded_linked_and_idempotent(monkeypatch):
    client, headers = _owner("deep-booking")
    site_id = _published_site(client, headers)
    requested_date, slot = _configure_appointments(client, headers, site_id)
    monkeypatch.setattr(sales_assistant.settings, "openai_api_key", "")

    conversation = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations",
        json={"session_id": "deep-booking-session", "page_url": "/book"},
    ).json()
    message = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/messages",
        json={
            "message": f"I want a veneer consultation on {requested_date} in the afternoon.",
            "contact": {"name": "Asha", "email": "asha@example.com", "phone": "+919900001111", "service_interest": "Veneer consultation"},
        },
    )
    assert message.status_code == 200, message.text
    body = message.json()
    assert slot in body["slots"]
    assert body["lead"] and body["lead"]["score"] >= 40

    booking_headers = {"Idempotency-Key": "deep-booking-idem", "X-CSRF-Token": headers["X-CSRF-Token"]}
    booking = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/appointments",
        headers=booking_headers,
        json={"starts_at": slot, "name": "Asha", "email": "asha@example.com", "phone": "+919900001111", "service_interest": "Veneer consultation", "service_enquiry_consent": True},
    )
    assert booking.status_code == 200, booking.text
    assert booking.json()["idempotent"] is False

    repeated = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/appointments",
        headers=booking_headers,
        json={"starts_at": slot, "name": "Asha", "email": "asha@example.com", "phone": "+919900001111", "service_interest": "Veneer consultation", "service_enquiry_consent": True},
    )
    assert repeated.status_code == 200 and repeated.json()["idempotent"] is True

    with SessionLocal() as db:
        row = db.execute(text("SELECT a.status,a.source,a.conversation_id,a.lead_id,c.appointment_id FROM appointments a JOIN assistant_conversations c ON c.id=a.conversation_id WHERE a.id=:i"), {"i": booking.json()["id"]}).mappings().one()
        assert row["status"] == "BOOKED" and row["source"] == "AI_ASSISTANT"
        assert row["conversation_id"] == conversation["id"] and row["appointment_id"] == booking.json()["id"]

    duplicate_conversation = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations",
        json={"session_id": "deep-booking-session-2"},
    ).json()
    duplicate = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{duplicate_conversation['id']}/appointments",
        headers={"Idempotency-Key": "deep-booking-other"},
        json={"starts_at": slot, "name": "Bala", "email": "bala@example.com", "service_enquiry_consent": True},
    )
    assert duplicate.status_code == 409
    assert duplicate.json()["detail"]["code"] in {"APPOINTMENT_SLOT_UNAVAILABLE", "APPOINTMENT_SLOT_TAKEN"}


def test_sales_assistant_unknown_model_answer_cannot_override_grounding(monkeypatch):
    client, headers = _owner("deep-grounding")
    site_id = _published_site(client, headers, "Dental Clinic A")
    conversation = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "deep-grounding-session"}).json()
    monkeypatch.setattr(sales_assistant.settings, "openai_api_key", "controlled-test-key")
    monkeypatch.setattr(
        sales_assistant,
        "sales_assistant_completion",
        lambda **kwargs: {"answer": "Yes, we offer laser dentistry in Mumbai for $50.", "input_tokens": 12, "output_tokens": 10, "model": "gpt-4o-mini"},
    )
    response = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/messages",
        json={"message": "Do you offer laser dentistry in Mumbai?"},
    )
    assert response.status_code == 200, response.text
    answer = response.json()["answer"].lower()
    assert "laser dentistry" not in answer
    assert "don't have confirmed information" in answer or "contact" in answer


def test_sales_assistant_message_idempotency_prevents_double_charge(monkeypatch):
    client, headers = _owner("deep-message-idem")
    site_id = _published_site(client, headers, "Consulting Idempotency")
    conversation = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "deep-message-idem-session"}).json()
    monkeypatch.setattr(sales_assistant.settings, "openai_api_key", "controlled-test-key")
    calls = {"count": 0}

    def provider(**kwargs):
        calls["count"] += 1
        return {"answer": "Our confirmed services include strategy workshops.", "input_tokens": 10, "output_tokens": 10, "model": "gpt-4o-mini"}

    monkeypatch.setattr(sales_assistant, "sales_assistant_completion", provider)
    request_headers = {"Idempotency-Key": "deep-message-idem-key"}
    first = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/messages", headers=request_headers, json={"message": "What services do you provide?"})
    second = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/messages", headers=request_headers, json={"message": "What services do you provide?"})
    assert first.status_code == 200 and second.status_code == 200
    assert calls["count"] == 1
    assert second.json().get("idempotent") is True
    owner_id = client.get("/api/auth/me").json()["id"]
    with SessionLocal() as db:
        settlements = db.execute(text("SELECT count(*) FROM ai_credit_ledger WHERE account_id=:u AND entry_type='AI_SETTLEMENT' AND idempotency_key LIKE 'assistant:%'"), {"u": owner_id}).scalar_one()
        messages = db.execute(text("SELECT count(*) FROM assistant_messages WHERE conversation_id=:c"), {"c": conversation["id"]}).scalar_one()
    assert settlements == 1
    assert messages == 2


def test_sales_assistant_cross_tenant_grounding_isolation():
    client_a, headers_a = _owner("deep-tenant-a")
    site_a = _published_site(client_a, headers_a, "Dental Clinic A")
    client_b, headers_b = _owner("deep-tenant-b")
    site_b = _published_site(client_b, headers_b, "Dental Clinic B")
    with SessionLocal.begin() as db:
        for site_id, content in ((site_a, "Clinic A offers ceramic veneers."), (site_b, "Clinic B offers sports physiotherapy.")):
            db.execute(text("INSERT INTO site_knowledge_docs(id,site_id,title,content,created_at,updated_at) VALUES (:i,:s,'Approved',:c,:a,:a)"), {"i": str(uuid.uuid4()), "s": site_id, "c": content, "a": now_iso()})
    conv = client_a.post(f"/api/public/sites/{site_a}/assistant/conversations", json={"session_id": "deep-tenant-session"}).json()
    response = client_a.post(f"/api/public/sites/{site_a}/assistant/conversations/{conv['id']}/messages", json={"message": "Do you offer ceramic veneers?"})
    assert response.status_code == 200
    assert "ceramic veneers" in response.json()["answer"]
    assert "physiotherapy" not in response.json()["answer"]
    assert client_b.get(f"/api/sites/{site_a}/assistant/settings", headers=headers_b).status_code == 404


def test_sales_assistant_booking_race_allows_only_one_slot_owner():
    client, headers = _owner("deep-race")
    site_id = _published_site(client, headers, "Dental Clinic Race")
    _requested_date, slot = _configure_appointments(client, headers, site_id)
    conversations = [
        client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": f"deep-race-{i}"}).json()["id"]
        for i in (1, 2)
    ]

    def book(index: int):
        worker = TestClient(app)
        return worker.post(
            f"/api/public/sites/{site_id}/assistant/conversations/{conversations[index]}/appointments",
            headers={"Idempotency-Key": f"deep-race-{index}"},
            json={"starts_at": slot, "name": f"Visitor {index}", "email": f"visitor{index}@example.com", "service_enquiry_consent": True},
        ).status_code

    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor:
        statuses = [future.result() for future in (executor.submit(book, 0), executor.submit(book, 1))]
    assert sorted(statuses) == [200, 409], statuses


def test_sales_assistant_resolves_weekday_language_to_requested_date():
    client, headers = _owner("deep-date")
    site_id = _published_site(client, headers, "Dental Clinic Date")
    requested_date, _slot = _configure_appointments(client, headers, site_id)
    weekday_name = datetime.fromisoformat(requested_date).strftime("%A")
    conversation = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "deep-date-session"}).json()
    response = client.post(
        f"/api/public/sites/{site_id}/assistant/conversations/{conversation['id']}/messages",
        json={"message": f"Do you have a veneer consultation this {weekday_name} afternoon?"},
    )
    assert response.status_code == 200, response.text
    assert response.json()["slots"]
    assert {value[:10] for value in response.json()["slots"]} == {requested_date}
