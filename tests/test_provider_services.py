from app.config import settings
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


def test_target_settings_have_one_gateway_and_one_communications_surface():
    assert settings.ai_gateway_provider == "vercel"
    assert hasattr(settings, "ai_gateway_api_key")
    assert hasattr(settings, "telnyx_api_key")
    assert hasattr(settings, "r2_endpoint")
    assert settings.studio_engine == "legacy"


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

