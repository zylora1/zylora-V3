from __future__ import annotations

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy import func, select
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from apps.api.app.auth import get_db
from apps.api.app.config import settings
from apps.api.app.db import Base
from apps.api.app.main import app
from apps.api.app.models import Lead, NotificationDelivery, Site, User
from apps.api.app.security import hash_password, issue_token
from apps.api.app.services import leads as lead_service
from apps.api.app.services import notifications as notification_service
from apps.api.app.services.notifications import NotificationError, TransientNotificationError
from apps.api.app.services.sites import create_site, switch_live_site


class FakeProvider:
    def __init__(self, outcomes=None):
        self.outcomes = list(outcomes or ["SM-test"])
        self.calls: list[tuple[str, str]] = []

    def send(self, destination: str, body: str) -> str:
        self.calls.append((destination, body))
        outcome = self.outcomes.pop(0) if self.outcomes else "SM-test"
        if isinstance(outcome, Exception):
            raise outcome
        return outcome


def live_site(db, owner: User, slug: str = "whatsapp-site") -> Site:
    site = create_site(db, owner, "WhatsApp Site", slug, "AI", 1)
    return switch_live_site(db, owner, site.id)


def delivery_for(db, lead_id: int) -> NotificationDelivery:
    return db.scalar(select(NotificationDelivery).where(NotificationDelivery.lead_id == lead_id))


@pytest.fixture
def inline_notifications():
    old = settings.notification_delivery_mode
    object.__setattr__(settings, "notification_delivery_mode", "inline")
    try:
        yield
    finally:
        object.__setattr__(settings, "notification_delivery_mode", old)


def test_missing_number_skips_delivery_but_persists_lead(db, user, inline_notifications):
    site = live_site(db, user)
    lead = lead_service.capture_lead(db, site.id, "FORM", "A Lead", "lead@example.com", client_request_id="missing-number-1")
    assert db.get(Lead, lead.id) is not None
    delivery = delivery_for(db, lead.id)
    assert delivery.status == "SKIPPED"
    assert delivery.attempt_count == 1
    assert delivery.last_error == "owner_whatsapp_not_configured"


def test_successful_delivery_uses_trusted_owner_and_marks_sent(db, user, monkeypatch, inline_notifications):
    user.whatsapp_number = "+919876543210"
    db.commit()
    site = live_site(db, user)
    provider = FakeProvider(["SM-success"])
    monkeypatch.setattr(notification_service, "TwilioWhatsAppProvider", lambda: provider)
    lead = lead_service.capture_lead(
        db, site.id, "PROACTIVE", "  Alice\x00  ", "ALICE@EXAMPLE.COM", phone=" +91 90000 00000 ",
        message="Hello\x07\n\n\nPlease call", client_request_id="success-lead-0001",
    )
    delivery = delivery_for(db, lead.id)
    assert delivery.status == "SENT" and delivery.provider_message_id == "SM-success"
    assert len(provider.calls) == 1 and provider.calls[0][0] == user.whatsapp_number
    assert "New lead from WhatsApp Site" in provider.calls[0][1]
    assert "Source: PROACTIVE" in provider.calls[0][1]
    assert "None" not in provider.calls[0][1]
    assert lead.name == "Alice" and lead.email == "alice@example.com"


def test_provider_failure_never_rolls_back_lead(db, user, monkeypatch, inline_notifications):
    user.whatsapp_number = "+14155552671"
    db.commit()
    site = live_site(db, user)
    provider = FakeProvider([NotificationError("twilio_permanent_http_401")])
    monkeypatch.setattr(notification_service, "TwilioWhatsAppProvider", lambda: provider)
    lead = lead_service.capture_lead(db, site.id, "CHATBOT", "Chat Lead", "chat@example.com", client_request_id="provider-failure-1")
    assert db.get(Lead, lead.id) is not None
    delivery = delivery_for(db, lead.id)
    assert delivery.status == "FAILED" and "401" in delivery.last_error


def test_transient_retry_is_bounded_and_eventually_succeeds(db, user, monkeypatch):
    user.whatsapp_number = "+442071838750"
    db.commit()
    site = live_site(db, user)
    monkeypatch.setattr(lead_service, "dispatch_delivery", lambda *_: None)
    lead = lead_service.capture_lead(db, site.id, "FORM", "Retry Lead", "retry@example.com", client_request_id="retry-success-01")
    delivery = delivery_for(db, lead.id)
    provider = FakeProvider([TransientNotificationError("timeout"), TransientNotificationError("429"), "SM-retried"])
    with pytest.raises(TransientNotificationError):
        notification_service.process_delivery(db, delivery.id, provider=provider, max_attempts=3)
    with pytest.raises(TransientNotificationError):
        notification_service.process_delivery(db, delivery.id, provider=provider, max_attempts=3)
    assert notification_service.process_delivery(db, delivery.id, provider=provider, max_attempts=3) == "SENT"
    db.refresh(delivery)
    assert delivery.attempt_count == 3 and len(provider.calls) == 3

    lead2 = lead_service.capture_lead(db, site.id, "FORM", "Failed Retry", "failed@example.com", client_request_id="retry-failure-01")
    delivery2 = delivery_for(db, lead2.id)
    always_fails = FakeProvider([TransientNotificationError("503")] * 3)
    for _ in range(2):
        with pytest.raises(TransientNotificationError):
            notification_service.process_delivery(db, delivery2.id, provider=always_fails, max_attempts=3)
    assert notification_service.process_delivery(db, delivery2.id, provider=always_fails, max_attempts=3) == "FAILED"
    db.refresh(delivery2)
    assert delivery2.attempt_count == 3 and len(always_fails.calls) == 3


def test_idempotent_request_and_worker_redelivery_do_not_duplicate(db, user, monkeypatch, inline_notifications):
    user.whatsapp_number = "+33142278186"
    db.commit()
    site = live_site(db, user)
    provider = FakeProvider(["SM-once"])
    monkeypatch.setattr(notification_service, "TwilioWhatsAppProvider", lambda: provider)
    args = (db, site.id, "FORM", "Same Lead", "same@example.com")
    first = lead_service.capture_lead(*args, client_request_id="same-browser-request")
    second = lead_service.capture_lead(*args, client_request_id="same-browser-request")
    assert first.id == second.id
    assert db.scalar(select(func.count(Lead.id)).where(Lead.site_id == site.id)) == 1
    assert db.scalar(select(func.count(NotificationDelivery.id)).where(NotificationDelivery.lead_id == first.id)) == 1
    delivery = delivery_for(db, first.id)
    assert notification_service.process_delivery(db, delivery.id, provider=provider) == "SENT"
    assert len(provider.calls) == 1
    with pytest.raises(lead_service.LeadError, match="idempotency_conflict"):
        lead_service.capture_lead(db, site.id, "FORM", "Changed", "same@example.com", client_request_id="same-browser-request")


@pytest.mark.parametrize("source", ["FORM", "PROACTIVE", "CHATBOT"])
def test_all_public_sources_use_same_pipeline(db, user, monkeypatch, inline_notifications, source):
    user.whatsapp_number = "+61293744000"
    db.commit()
    site = live_site(db, user, slug=f"source-{source.lower()}")
    provider = FakeProvider([f"SM-{source}"])
    monkeypatch.setattr(notification_service, "TwilioWhatsAppProvider", lambda: provider)
    lead = lead_service.capture_lead(db, site.id, source, f"{source} Lead", f"{source.lower()}@example.com", client_request_id=f"source-{source.lower()}-0001")
    assert delivery_for(db, lead.id).status == "SENT"
    assert provider.calls[0][0] == user.whatsapp_number


def test_tenant_integrity_and_destination_spoofing(db, user, monkeypatch, inline_notifications):
    user.whatsapp_number = "+81312345678"
    other = User(email="other@example.com", password_hash="hash", role="USER", plan="GROWTH", whatsapp_number="+551155256325")
    db.add(other)
    db.commit()
    site = live_site(db, user)
    provider = FakeProvider(["SM-tenant"])
    monkeypatch.setattr(notification_service, "TwilioWhatsAppProvider", lambda: provider)
    lead = lead_service.capture_lead(db, site.id, "FORM", "Tenant Lead", "tenant@example.com", client_request_id="tenant-isolation-1")
    assert provider.calls[0][0] == user.whatsapp_number and provider.calls[0][0] != other.whatsapp_number

    delivery = delivery_for(db, lead.id)
    assert delivery.owner_id == user.id and delivery.site_id == site.id
    delivery.status = "PENDING"
    delivery.owner_id = other.id
    db.commit()
    assert notification_service.process_delivery(db, delivery.id, provider=provider) == "FAILED"
    assert len(provider.calls) == 1


def test_settings_and_manual_endpoint_are_authenticated_and_scoped(monkeypatch):
    engine=create_engine('sqlite+pysqlite:///:memory:',connect_args={'check_same_thread':False},poolclass=StaticPool)
    Base.metadata.create_all(engine)
    Session=sessionmaker(bind=engine,expire_on_commit=False,future=True)
    db=Session()
    user=User(email='settings@example.com',password_hash=hash_password('password123'),plan='GROWTH',role='USER')
    db.add(user);db.commit();db.refresh(user)
    site = live_site(db, user)
    app.dependency_overrides[get_db] = lambda: db
    unauthenticated = TestClient(app)
    assert unauthenticated.get("/notifications/settings").status_code == 401
    assert unauthenticated.post("/notifications/whatsapp", json={"site_id": site.id}).status_code == 401

    client = TestClient(app)
    client.cookies.set("zylora_session", issue_token(user.id, user.role, settings.secret_key))
    assert client.put("/notifications/settings", json={"whatsapp_number": "12345"}).status_code == 422
    saved = client.put("/notifications/settings", json={"whatsapp_number": "+91 98765-43210"})
    assert saved.status_code == 200 and saved.json()["whatsapp_number"] == "+919876543210"
    assert client.get("/notifications/settings").json()["whatsapp_number"] == "+919876543210"
    forged = client.post("/notifications/whatsapp", json={"site_id": site.id, "to": "+551155256325", "message": "relay"})
    assert forged.status_code == 422
    provider=FakeProvider(["SM-manual"])
    monkeypatch.setattr("apps.api.app.routers.notifications.TwilioWhatsAppProvider",lambda:provider)
    sent=client.post("/notifications/whatsapp",json={"site_id":site.id})
    assert sent.status_code==200 and sent.json()["provider_message_id"]=="SM-manual"
    failing=FakeProvider([NotificationError("provider unavailable")])
    monkeypatch.setattr("apps.api.app.routers.notifications.TwilioWhatsAppProvider",lambda:failing)
    assert client.post("/notifications/whatsapp",json={"site_id":site.id}).status_code==503

    other = User(email="manual-other@example.com", password_hash="hash", role="USER", plan="GROWTH")
    db.add(other)
    db.commit()
    other_site = live_site(db, other, "manual-other")
    assert client.post("/notifications/whatsapp", json={"site_id": other_site.id}).status_code == 404
    app.dependency_overrides.clear()
    db.close()


def test_public_payload_rejects_forged_tenant_fields(db, user):
    site = live_site(db, user)
    app.dependency_overrides[get_db] = lambda: db
    client = TestClient(app)
    payload = {
        "site_id": site.id,
        "source": "FORM",
        "name": "Forged",
        "email": "forged@example.com",
        "idempotency_key": "forged-request-1",
        "owner_id": 999,
        "tenant_id": 999,
        "recipient_whatsapp": "+551155256325",
    }
    assert client.post("/leads/public", json=payload).status_code == 422
    assert db.scalar(select(func.count(Lead.id)).where(Lead.site_id == site.id)) == 0
    app.dependency_overrides.clear()


def test_celery_task_has_bounded_retry_policy():
    from apps.worker.tasks import deliver_whatsapp_notification
    assert deliver_whatsapp_notification.max_retries == 2


def test_provider_adapter_and_number_normalization(monkeypatch):
    assert notification_service.normalize_whatsapp_number(None) is None
    assert notification_service.normalize_whatsapp_number("  ") is None
    assert notification_service.normalize_whatsapp_number("whatsapp:+1 (415) 555-2671") == "+14155552671"
    with pytest.raises(ValueError, match="invalid_whatsapp_number"):
        notification_service.normalize_whatsapp_number("0044-not-e164")

    monkeypatch.setattr(notification_service, "twilio_whatsapp", lambda *_: {"sid": "SM-adapter"})
    assert notification_service.TwilioWhatsAppProvider().send("+14155552671", "hello") == "SM-adapter"
    monkeypatch.setattr(notification_service, "twilio_whatsapp", lambda *_: {})
    with pytest.raises(NotificationError, match="missing_message_id"):
        notification_service.TwilioWhatsAppProvider().send("+14155552671", "hello")
    from apps.api.app.integrations import IntegrationError, TransientIntegrationError
    def transient(*_): raise TransientIntegrationError("temporary")
    monkeypatch.setattr(notification_service, "twilio_whatsapp", transient)
    with pytest.raises(TransientNotificationError):
        notification_service.TwilioWhatsAppProvider().send("+14155552671", "hello")
    def permanent(*_): raise IntegrationError("permanent")
    monkeypatch.setattr(notification_service, "twilio_whatsapp", permanent)
    with pytest.raises(NotificationError):
        notification_service.TwilioWhatsAppProvider().send("+14155552671", "hello")


def test_outbox_helpers_cover_existing_invalid_and_pending_paths(db, user, monkeypatch):
    monkeypatch.setattr(lead_service, "dispatch_delivery", lambda *_: None)
    site = live_site(db, user)
    lead = lead_service.capture_lead(db, site.id, "FORM", "Outbox", "outbox@example.com", client_request_id="outbox-helper-01")
    delivery = delivery_for(db, lead.id)
    assert notification_service.create_delivery(db, lead).id == delivery.id
    assert delivery.id in notification_service.pending_delivery_ids(db)
    with pytest.raises(NotificationError, match="notification_not_found"):
        notification_service.process_delivery(db, 999999, provider=FakeProvider())

    user.whatsapp_number = "bad-number"
    db.commit()
    assert notification_service.process_delivery(db, delivery.id, provider=FakeProvider()) == "FAILED"
    db.refresh(delivery)
    assert delivery.last_error == "invalid_owner_whatsapp_number"

    delivery.status = "PENDING"
    delivery.last_error = None
    db.commit()
    notification_service.mark_enqueue_error(db, delivery.id, RuntimeError("redis offline"))
    db.refresh(delivery)
    assert delivery.status == "PENDING" and delivery.last_error.startswith("queue_unavailable:")


def test_dispatch_modes_isolate_inline_and_broker_failures(db, user, monkeypatch):
    monkeypatch.setattr(lead_service, "dispatch_delivery", lambda *_: None)
    site = live_site(db, user)
    lead = lead_service.capture_lead(db, site.id, "FORM", "Dispatch", "dispatch@example.com", client_request_id="dispatch-helper-1")
    delivery = delivery_for(db, lead.id)
    old = settings.notification_delivery_mode
    try:
        object.__setattr__(settings, "notification_delivery_mode", "inline")
        monkeypatch.setattr(notification_service, "process_delivery", lambda *_: (_ for _ in ()).throw(TransientNotificationError("later")))
        notification_service.dispatch_delivery(db, delivery.id)

        object.__setattr__(settings, "notification_delivery_mode", "celery")
        from apps.worker import tasks
        calls = []
        monkeypatch.setattr(tasks.deliver_whatsapp_notification, "delay", lambda notification_id: calls.append(notification_id))
        notification_service.dispatch_delivery(db, delivery.id)
        assert calls == [delivery.id]
        monkeypatch.setattr(tasks.deliver_whatsapp_notification, "delay", lambda *_: (_ for _ in ()).throw(RuntimeError("broker down")))
        notification_service.dispatch_delivery(db, delivery.id)
        db.refresh(delivery)
        assert "broker down" in delivery.last_error
    finally:
        object.__setattr__(settings, "notification_delivery_mode", old)


def test_lead_validation_rejects_draft_bad_contact_and_bad_keys(db, user):
    draft = create_site(db, user, "Draft", "validation-draft", "AI", 1)
    with pytest.raises(lead_service.LeadError, match="site_not_found"):
        lead_service.capture_lead(db, draft.id, "FORM", "A", "a@example.com", client_request_id="validation-01")
    site = switch_live_site(db, user, draft.id)
    with pytest.raises(lead_service.LeadError, match="invalid_source"):
        lead_service.capture_lead(db, site.id, "FORGED", "A", "a@example.com", client_request_id="validation-02")
    with pytest.raises(lead_service.LeadError, match="invalid_email"):
        lead_service.capture_lead(db, site.id, "FORM", "A", "not-an-email", client_request_id="validation-03")
    with pytest.raises(lead_service.LeadError, match="invalid_idempotency_key"):
        lead_service.capture_lead(db, site.id, "FORM", "A", "a@example.com", client_request_id="short")
    with pytest.raises(lead_service.LeadError, match="invalid_message"):
        lead_service.capture_lead(db, site.id, "FORM", "A", "a@example.com", message="x" * 2001, client_request_id="validation-04")


def test_message_omits_absent_optional_fields(db, user, monkeypatch):
    monkeypatch.setattr(lead_service, "dispatch_delivery", lambda *_: None)
    site = live_site(db, user)
    lead = lead_service.capture_lead(db, site.id, "FORM", "No Phone", "no-phone@example.com", phone="", message="", client_request_id="optional-fields-1")
    body = notification_service.build_new_lead_message(lead, site)
    assert "Phone:" not in body and "None" not in body
