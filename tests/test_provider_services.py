import pytest

from app.config import Settings, settings
from app.ai_service import HostedAIService
from app.providers import verify_turnstile
from app.provider_services import ProviderConfigurationError
from app.provider_services import (
    AIRequest,
    AIResponse,
    AIService,
    CommunicationService,
    CorrelationContext,
    DeliveryResult,
    InfrastructureService,
    PaymentService,
)
from app.infrastructure_service import CloudflareInfrastructureService
from app.payment_service import RazorpayPaymentService


def test_target_settings_have_one_gateway_and_one_communications_surface():
    assert settings.ai_gateway_provider == "vercel"
    assert hasattr(settings, "ai_gateway_api_key")
    assert hasattr(settings, "telnyx_api_key")
    assert hasattr(settings, "r2_endpoint")
    assert settings.studio_engine == "legacy"


def test_production_ai_service_does_not_select_direct_openai_compatibility(monkeypatch):
    monkeypatch.setattr(settings, "app_env", "production")
    monkeypatch.setattr(settings, "ai_gateway_api_key", "")
    monkeypatch.setattr(settings, "openai_api_key", "legacy-only-key")
    service = HostedAIService()
    assert service.configured() is False
    with pytest.raises(ProviderConfigurationError, match="AI_GATEWAY_API_KEY"):
        service._adapter_for_request()


def test_turnstile_can_be_disabled_without_provider_secret(monkeypatch):
    monkeypatch.setattr(settings, "app_env", "production")
    monkeypatch.setattr(settings, "turnstile_enabled", False)
    monkeypatch.setattr(settings, "turnstile_secret_key", "")
    assert verify_turnstile(None) is True


def test_cloudflare_r2_names_feed_the_existing_s3_compatible_media_service():
    configured = Settings(
        _env_file=None,
        media_storage_provider="s3",
        r2_access_key_id="r2-key",
        r2_secret_access_key="r2-secret",
        r2_endpoint="https://account.r2.cloudflarestorage.com",
        r2_bucket="zylora-media",
    )
    assert configured.media_s3_access_key_id == "r2-key"
    assert configured.media_s3_secret_access_key == "r2-secret"
    assert configured.media_s3_endpoint_url.endswith("cloudflarestorage.com")
    assert configured.media_s3_bucket == "zylora-media"


def test_provider_contracts_are_runtime_checkable_without_secret_fields():
    correlation = CorrelationContext(request_id="req-1", feature="test")
    request = AIRequest(feature="test", model="test-model", input="hello", correlation=correlation)
    response = AIResponse(provider="test", model="test-model", output="ok", usage={})
    delivery = DeliveryResult(provider="test", status="accepted", provider_id="msg-1", correlation=correlation)

    class AI:
        def complete(self, request):
            return response

        def stream(self, request):
            yield "ok"

    class Communications:
        def send_email(self, **kwargs):
            return delivery

        def send_whatsapp(self, **kwargs):
            return delivery

        def send_sms(self, **kwargs):
            return delivery

        def verify_webhook(self, headers, raw_body):
            return {"event_id": "evt-1"}

    class Infrastructure:
        def ensure_domain(self, **kwargs):
            return {"status": "pending"}

        def put_media(self, **kwargs):
            return {"status": "stored"}

        def verify_turnstile(self, **kwargs):
            return True

    class Payments:
        def create_order(self, **kwargs):
            return {"status": "created"}

        def verify_webhook(self, **kwargs):
            return {"event_id": "evt-1"}

        def get_subscription(self, **kwargs):
            return {"status": "active"}

    assert isinstance(AI(), AIService)
    assert isinstance(Communications(), CommunicationService)
    assert isinstance(Infrastructure(), InfrastructureService)
    assert isinstance(Payments(), PaymentService)
    assert not hasattr(response, "api_key")
    assert request.correlation.request_id == "req-1"


def test_infrastructure_and_payment_facades_delegate_without_exposing_provider_modules(monkeypatch):
    monkeypatch.setattr("app.providers.cloudflare_create_hostname", lambda hostname: {"hostname": hostname, "provider": "cloudflare"})
    monkeypatch.setattr("app.providers.razorpay_create_order", lambda amount, currency, receipt, notes=None: {"id": receipt, "amount": amount, "currency": currency})
    assert CloudflareInfrastructureService().ensure_domain(hostname="www.example.test")["provider"] == "cloudflare"
    assert RazorpayPaymentService().create_order(amount_minor=100, currency="INR", receipt="r-1")["id"] == "r-1"
