"""Provider-neutral communications service.

Feature modules depend on this boundary; Telnyx selection and credential
handling stay inside the adapter layer.  Legacy Resend/Twilio compatibility is
kept in their existing adapters until the staged cutover removes those secrets.
"""

from __future__ import annotations

from typing import Any, Mapping

from .config import settings
from .provider_services import DeliveryResult, ProviderConfigurationError
from .telnyx import TelnyxAdapter


class HostedCommunicationService:
    provider = "telnyx"

    @staticmethod
    def configured() -> bool:
        return bool(str(settings.telnyx_api_key or '').strip())

    def _adapter(self) -> TelnyxAdapter:
        if not self.configured():
            raise ProviderConfigurationError("TELNYX_API_KEY is not configured")
        return TelnyxAdapter()

    def send_email(self, **kwargs: Any) -> DeliveryResult:
        return self._adapter().send_email(**kwargs)

    def send_whatsapp(self, **kwargs: Any) -> DeliveryResult:
        return self._adapter().send_whatsapp(**kwargs)

    def send_sms(self, **kwargs: Any) -> DeliveryResult:
        return self._adapter().send_sms(**kwargs)

    def verify_webhook(self, headers: Mapping[str, str], raw_body: bytes) -> Mapping[str, Any]:
        return self._adapter().verify_webhook(headers, raw_body)


communication_service = HostedCommunicationService()
