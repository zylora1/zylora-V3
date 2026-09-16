import json

import httpx
import pytest

from app.ai_gateway import LegacyOpenAIAdapter, VercelAIGatewayAdapter
from app.ai_service import HostedAIService
from app.provider_services import AIRequest, CorrelationContext, ProviderServiceError
from app.ai_billing import calculate_provider_cost
from app.db import SessionLocal, migrate


def _request(*, stream=False, model="anthropic/claude-sonnet-4.5"):
    return AIRequest(
        feature="TEST_FEATURE",
        model=model,
        input="Say hello",
        stream=stream,
        tools=({"type": "function", "function": {"name": "lookup", "parameters": {"type": "object"}}},),
        idempotency_key="idem-1",
        correlation=CorrelationContext(request_id="req-1", feature="TEST_FEATURE"),
    )


def test_gateway_maps_chat_completion_and_tools_without_leaking_key():
    seen = {}

    def handler(request):
        seen["headers"] = dict(request.headers)
        seen["payload"] = json.loads(request.content)
        return httpx.Response(200, json={
            "id": "chat-1",
            "model": "anthropic/claude-sonnet-4.5",
            "choices": [{"message": {"content": "hello", "tool_calls": []}, "finish_reason": "stop"}],
            "usage": {"prompt_tokens": 4, "completion_tokens": 2, "total_tokens": 6},
        })

    client = httpx.Client(transport=httpx.MockTransport(handler))
    adapter = VercelAIGatewayAdapter(api_key="gateway-secret", base_url="https://gateway.test/v1", client=client)
    result = adapter.complete(_request())

    assert result.output == "hello"
    assert result.provider == "vercel"
    assert result.usage == {"input_tokens": 4, "output_tokens": 2, "total_tokens": 6}
    assert seen["headers"]["authorization"] == "Bearer gateway-secret"
    assert seen["headers"]["idempotency-key"] == "idem-1"
    assert seen["payload"]["model"] == "anthropic/claude-sonnet-4.5"
    assert seen["payload"]["tools"][0]["function"]["name"] == "lookup"
    assert "gateway-secret" not in repr(result)
    client.close()


def test_gateway_retries_transient_failure_then_succeeds():
    attempts = {"count": 0}

    def handler(request):
        attempts["count"] += 1
        if attempts["count"] == 1:
            return httpx.Response(503, json={"error": {"message": "busy"}})
        return httpx.Response(200, json={"id": "chat-2", "choices": [{"message": {"content": "ok"}}], "usage": {}})

    client = httpx.Client(transport=httpx.MockTransport(handler))
    result = VercelAIGatewayAdapter(api_key="secret", base_url="https://gateway.test/v1", client=client, max_retries=1).complete(_request())
    assert attempts["count"] == 2
    assert result.output == "ok"
    client.close()


def test_gateway_stream_normalizes_sse_content():
    body = b'data: {"choices":[{"delta":{"content":"hel"}}]}\n\ndata: {"choices":[{"delta":{"content":"lo"}}]}\n\ndata: [DONE]\n\n'

    def handler(request):
        return httpx.Response(200, headers={"content-type": "text/event-stream"}, content=body)

    client = httpx.Client(transport=httpx.MockTransport(handler))
    chunks = list(VercelAIGatewayAdapter(api_key="secret", base_url="https://gateway.test/v1", client=client).stream(_request(stream=True)))
    assert chunks == ["hel", "lo"]
    client.close()


def test_gateway_rejects_non_retryable_error_without_secret_in_message():
    def handler(request):
        return httpx.Response(401, json={"error": {"message": "invalid key"}})

    client = httpx.Client(transport=httpx.MockTransport(handler))
    with pytest.raises(ProviderServiceError) as exc:
        VercelAIGatewayAdapter(api_key="secret-value", base_url="https://gateway.test/v1", client=client).complete(_request())
    assert "secret-value" not in str(exc.value)
    client.close()


def test_hosted_service_resolves_feature_model_and_fallback():
    class Adapter:
        def complete(self, request):
            return request

        def stream(self, request):
            yield request

    service = HostedAIService(adapter=Adapter(), registry={
        "TEST_FEATURE": {"primary": "provider/primary", "fallback": "provider/fallback", "max_cost_micros": 10},
    })
    request = service.build_request(feature="TEST_FEATURE", input="hello", correlation=CorrelationContext(request_id="r", feature="TEST_FEATURE"))
    assert request.model == "provider/primary"
    assert service.resolve_model("TEST_FEATURE", "provider/fallback") == "provider/fallback"


def test_legacy_adapter_is_compatibility_only_and_normalizes_responses_api():
    seen = {}

    def handler(request):
        seen["url"] = str(request.url)
        seen["headers"] = dict(request.headers)
        seen["payload"] = json.loads(request.content)
        return httpx.Response(200, json={
            "id": "resp-1",
            "model": "gpt-5-mini",
            "output_text": '{"operations":[]}',
            "usage": {"input_tokens": 3, "output_tokens": 2},
        })

    client = httpx.Client(transport=httpx.MockTransport(handler))
    adapter = LegacyOpenAIAdapter(api_key="legacy-secret", client=client)
    result = adapter.complete(_request(model="gpt-5-mini"))
    assert result.provider == "openai"
    assert result.output == '{"operations":[]}'
    assert seen["url"] == "https://api.openai.com/v1/responses"
    assert seen["headers"]["authorization"] == "Bearer legacy-secret"
    assert "legacy-secret" not in repr(result)
    client.close()


def test_hosted_service_execute_json_uses_injected_adapter_and_returns_usage():
    class Adapter:
        def complete(self, request):
            return type("Response", (), {
                "provider": "vercel",
                "model": request.model,
                "output": '{"answer":"ok"}',
                "usage": {"input_tokens": 4, "output_tokens": 1},
            })()

        def stream(self, request):
            yield "ok"

    service = HostedAIService(adapter=Adapter(), registry={"TEST_FEATURE": {"primary": "provider/primary"}})
    parsed, response = service.execute_json(
        "TEST_FEATURE",
        "Return JSON only",
        request_id="req-json",
    )
    assert parsed == {"answer": "ok"}
    assert response.provider == "vercel"
    assert response.usage["input_tokens"] + response.usage["output_tokens"] == 5


def test_migrated_site_copy_uses_ai_service_without_legacy_http(monkeypatch):
    from app import providers
    from app.config import settings

    monkeypatch.setattr(settings, "ai_gateway_api_key", "gateway-test")
    monkeypatch.setattr(settings, "openai_api_key", "")

    class Response:
        provider = "vercel"
        model = "openai/gpt-5-mini"
        usage = {"input_tokens": 2, "output_tokens": 3}

    calls = []

    def execute_json(feature, prompt, **kwargs):
        calls.append((feature, kwargs.get("requested_model")))
        return {"tagline": "Clear", "description": "Factual copy"}, Response()

    monkeypatch.setattr(providers.ai_service, "execute_json", execute_json)
    result = providers.ai_generate_site("Acme", "Factual services", "Agency", "Minimal")
    assert result["provider"] == "vercel"
    assert calls == [("SITE_COPY", "openai/gpt-5-mini")]


def test_gateway_namespace_resolves_existing_server_pricing_alias():
    migrate()
    with SessionLocal() as db:
        result = calculate_provider_cost(db, provider="vercel", model="openai/gpt-5-mini", input_units=100, output_units=25)
    assert result["provider"] == "vercel"
    assert result["model"] == "openai/gpt-5-mini"
    assert result["provider_cost_micros"] > 0
