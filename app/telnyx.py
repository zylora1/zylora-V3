"""Telnyx communications adapter.

The adapter is intentionally transport-only.  Email/WhatsApp/SMS business
flows continue to use the existing notification and outbox services; this
module only owns the authenticated Telnyx HTTP contract and webhook
verification.
"""

from __future__ import annotations

import base64
import binascii
import json
import time
from typing import Any, Mapping

import httpx

from .config import settings
from .provider_services import (
    CorrelationContext,
    DeliveryResult,
    ProviderConfigurationError,
    ProviderServiceError,
    ProviderUnavailableError,
)


class TelnyxWebhookError(ProviderServiceError):
    """Raised when a Telnyx webhook cannot be authenticated or parsed."""


class TelnyxAdapter:
    provider = "telnyx"

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str | None = None,
        email_from: str | None = None,
        whatsapp_from: str | None = None,
        sms_from: str | None = None,
        timeout: float = 20,
        client: httpx.Client | None = None,
    ) -> None:
        self.api_key = (api_key if api_key is not None else settings.telnyx_api_key).strip()
        self.base_url = (base_url or settings.telnyx_base_url or "https://api.telnyx.com/v2").rstrip("/")
        self.email_from = str(email_from if email_from is not None else settings.telnyx_email_from or settings.email_from).strip()
        self.whatsapp_from = str(whatsapp_from if whatsapp_from is not None else settings.telnyx_whatsapp_from).strip()
        self.sms_from = str(sms_from if sms_from is not None else settings.telnyx_sms_from).strip()
        self.timeout = max(1.0, min(float(timeout), 120.0))
        self.client = client or httpx.Client(timeout=self.timeout)

    def _headers(self, idempotency_key: str | None = None) -> dict[str, str]:
        if not self.api_key:
            raise ProviderConfigurationError("TELNYX_API_KEY is not configured")
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
        if idempotency_key:
            headers["Idempotency-Key"] = str(idempotency_key).strip()[:200]
        return headers

    def _post(self, path: str, payload: Mapping[str, Any], *, idempotency_key: str | None = None) -> dict[str, Any]:
        try:
            response = self.client.post(
                f"{self.base_url}/{path.lstrip('/')}",
                headers=self._headers(idempotency_key),
                json=dict(payload),
                timeout=self.timeout,
            )
        except (httpx.TimeoutException, httpx.NetworkError, httpx.RemoteProtocolError) as exc:
            raise ProviderUnavailableError("Telnyx request failed") from exc
        status_code = int(getattr(response, "status_code", 200) or 200)
        if status_code == 429 or status_code >= 500:
            raise ProviderUnavailableError("Telnyx is temporarily unavailable")
        if status_code >= 400:
            raise ProviderServiceError(f"Telnyx rejected the request (HTTP {status_code})")
        try:
            body = response.json()
        except ValueError as exc:
            raise ProviderServiceError("Telnyx returned invalid JSON") from exc
        if not isinstance(body, dict):
            raise ProviderServiceError("Telnyx returned an invalid response")
        return body

    @staticmethod
    def _provider_id(body: Mapping[str, Any]) -> str | None:
        data = body.get("data") if isinstance(body.get("data"), dict) else body
        value = data.get("id") if isinstance(data, dict) else None
        return str(value).strip() if value else None

    def send_email(
        self,
        *,
        recipient: str,
        subject: str,
        text_body: str,
        html_body: str | None = None,
        idempotency_key: str | None = None,
        correlation: CorrelationContext | None = None,
        attachments: list[Mapping[str, Any]] | None = None,
    ) -> DeliveryResult:
        if not self.email_from:
            raise ProviderConfigurationError("TELNYX_EMAIL_FROM is not configured")
        payload: dict[str, Any] = {
            "from": self.email_from,
            "to": [str(recipient).strip()],
            "subject": str(subject).strip(),
            "text_body": str(text_body or ""),
        }
        if html_body:
            payload["html_body"] = html_body
        if attachments:
            payload["attachments"] = list(attachments)
        body = self._post("email_messages", payload, idempotency_key=idempotency_key)
        return DeliveryResult(
            provider=self.provider,
            status="ACCEPTED",
            provider_id=self._provider_id(body),
            correlation=correlation or CorrelationContext(request_id=idempotency_key or "telnyx", feature="EMAIL"),
            metadata={"channel": "EMAIL"},
        )

    def send_whatsapp(
        self,
        *,
        recipient: str,
        body: str,
        idempotency_key: str | None = None,
        correlation: CorrelationContext | None = None,
    ) -> DeliveryResult:
        if not self.whatsapp_from:
            raise ProviderConfigurationError("TELNYX_WHATSAPP_FROM is not configured")
        payload = {
            "from": self.whatsapp_from,
            "to": str(recipient).strip(),
            "whatsapp_message": {"type": "text", "text": {"body": str(body or ""), "preview_url": False}},
        }
        response = self._post("messages/whatsapp", payload, idempotency_key=idempotency_key)
        return DeliveryResult(
            provider=self.provider,
            status="ACCEPTED",
            provider_id=self._provider_id(response),
            correlation=correlation or CorrelationContext(request_id=idempotency_key or "telnyx", feature="WHATSAPP"),
            metadata={"channel": "WHATSAPP"},
        )

    def send_sms(
        self,
        *,
        recipient: str,
        body: str,
        idempotency_key: str | None = None,
        correlation: CorrelationContext | None = None,
    ) -> DeliveryResult:
        if not self.sms_from:
            raise ProviderConfigurationError("TELNYX_SMS_FROM is not configured")
        payload = {"from": self.sms_from, "to": str(recipient).strip(), "text": str(body or "")}
        response = self._post("messages", payload, idempotency_key=idempotency_key)
        return DeliveryResult(
            provider=self.provider,
            status="ACCEPTED",
            provider_id=self._provider_id(response),
            correlation=correlation or CorrelationContext(request_id=idempotency_key or "telnyx", feature="SMS"),
            metadata={"channel": "SMS"},
        )

    def verify_webhook(self, headers: Mapping[str, str], raw_body: bytes) -> dict[str, Any]:
        public_key = str(settings.telnyx_public_key or settings.telnyx_webhook_public_key or "").strip()
        signature = str(headers.get("telnyx-signature-ed25519") or headers.get("Telnyx-Signature-Ed25519") or "").strip()
        timestamp = str(headers.get("telnyx-timestamp") or headers.get("Telnyx-Timestamp") or "").strip()
        if not public_key or not signature or not timestamp:
            raise TelnyxWebhookError("Telnyx webhook signature is missing")
        try:
            timestamp_int = int(timestamp)
        except ValueError as exc:
            raise TelnyxWebhookError("Telnyx webhook timestamp is invalid") from exc
        if abs(int(time.time()) - timestamp_int) > 300:
            raise TelnyxWebhookError("Telnyx webhook timestamp is outside the replay window")
        try:
            from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PublicKey
            from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat

            del Encoding, PublicFormat
            key_bytes = base64.b64decode(public_key, validate=True)
            sig_bytes = base64.b64decode(signature, validate=True)
            Ed25519PublicKey.from_public_bytes(key_bytes).verify(sig_bytes, timestamp.encode() + b"|" + raw_body)
        except (ValueError, TypeError, binascii.Error, ImportError) as exc:
            raise TelnyxWebhookError("Telnyx webhook signature is invalid") from exc
        except Exception as exc:
            raise TelnyxWebhookError("Telnyx webhook signature is invalid") from exc
        try:
            event = json.loads(raw_body.decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError) as exc:
            raise TelnyxWebhookError("Telnyx webhook body is invalid JSON") from exc
        if not isinstance(event, dict):
            raise TelnyxWebhookError("Telnyx webhook body is invalid")
        return event
