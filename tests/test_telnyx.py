import base64
import json
import time

import httpx
import pytest

from app.config import settings
from app.telnyx import TelnyxAdapter, TelnyxWebhookError


def test_telnyx_email_uses_v2_email_messages_and_idempotency():
    seen = {}

    def handler(request):
        seen["url"] = str(request.url)
        seen["headers"] = dict(request.headers)
        seen["payload"] = json.loads(request.content)
        return httpx.Response(200, json={"data": {"id": "email-1"}})

    client = httpx.Client(transport=httpx.MockTransport(handler))
    adapter = TelnyxAdapter(
        api_key="telnyx-secret",
        email_from="Zylora <mail@example.com>",
        client=client,
    )
    result = adapter.send_email(
        recipient="user@example.com",
        subject="Hello",
        text_body="Plain text",
        html_body="<p>Hello</p>",
        idempotency_key="delivery-1",
    )
    assert result.provider == "telnyx"
    assert result.provider_id == "email-1"
    assert seen["url"] == "https://api.telnyx.com/v2/email_messages"
    assert seen["headers"]["authorization"] == "Bearer telnyx-secret"
    assert seen["headers"]["idempotency-key"] == "delivery-1"
    assert seen["payload"]["to"] == ["user@example.com"]
    assert "telnyx-secret" not in repr(result)
    client.close()


def test_telnyx_whatsapp_and_sms_use_distinct_official_endpoints():
    urls = []

    def handler(request):
        urls.append(str(request.url))
        return httpx.Response(200, json={"data": {"id": "message-1"}})

    client = httpx.Client(transport=httpx.MockTransport(handler))
    adapter = TelnyxAdapter(api_key="secret", whatsapp_from="+15551234567", sms_from="+15551234567", client=client)
    adapter.send_whatsapp(recipient="+15557654321", body="Hello", idempotency_key="wa-1")
    adapter.send_sms(recipient="+15557654321", body="Hello", idempotency_key="sms-1")
    assert urls == [
        "https://api.telnyx.com/v2/messages/whatsapp",
        "https://api.telnyx.com/v2/messages",
    ]
    client.close()


def test_telnyx_webhook_verification_checks_signature_and_replay_window(monkeypatch):
    cryptography = pytest.importorskip("cryptography")
    from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey

    private = Ed25519PrivateKey.generate()
    public = private.public_key().public_bytes_raw()
    monkeypatch.setattr(settings, "telnyx_webhook_public_key", base64.b64encode(public).decode())
    body = b'{"data":{"id":"evt-1","event_type":"message.sent"}}'
    timestamp = str(int(time.time()))
    signature = private.sign(timestamp.encode() + b"|" + body)
    adapter = TelnyxAdapter(api_key="secret")
    result = adapter.verify_webhook(
        {"telnyx-timestamp": timestamp, "telnyx-signature-ed25519": base64.b64encode(signature).decode()},
        body,
    )
    assert result["data"]["id"] == "evt-1"
    with pytest.raises(TelnyxWebhookError):
        adapter.verify_webhook(
            {"telnyx-timestamp": str(int(time.time()) - 301), "telnyx-signature-ed25519": base64.b64encode(signature).decode()},
            body,
        )


def test_email_and_whatsapp_facades_select_telnyx_when_configured(monkeypatch):
    from app import email_service as email_module
    import app.communication_service as communication_module
    from app import providers
    from app.provider_services import DeliveryResult, CorrelationContext

    monkeypatch.setattr(settings, "telnyx_api_key", "telnyx-test")
    monkeypatch.setattr(settings, "telnyx_email_from", "Zylora <mail@example.com>")
    monkeypatch.setattr(settings, "telnyx_whatsapp_from", "+15551234567")

    class FakeAdapter:
        def __init__(self, **_kwargs):
            pass

        def send_email(self, **_kwargs):
            return DeliveryResult("telnyx", "ACCEPTED", "email-1", CorrelationContext("r", "EMAIL"))

        def send_whatsapp(self, **_kwargs):
            return DeliveryResult("telnyx", "ACCEPTED", "wa-1", CorrelationContext("r", "WHATSAPP"))

    monkeypatch.setattr(communication_module.communication_service, "send_email", lambda **kwargs: FakeAdapter().send_email(**kwargs))
    monkeypatch.setattr(communication_module.communication_service, "send_whatsapp", lambda **kwargs: FakeAdapter().send_whatsapp(**kwargs))
    monkeypatch.setattr(email_module, "_outbox", lambda *args, **kwargs: None)
    monkeypatch.setattr(providers, "_outbox", lambda *args, **kwargs: None)
    monkeypatch.setattr(email_module, "record_operational_event", lambda *args, **kwargs: None)

    email = email_module.email_service.send_transactional("user@example.com", "Subject", "Body")
    whatsapp = providers.send_whatsapp("+15557654321", "Hello")
    assert email == {"provider": "telnyx", "status": "ACCEPTED", "message_id": "email-1"}
    assert whatsapp == {"provider": "telnyx", "status": "ACCEPTED", "message_id": "wa-1"}
