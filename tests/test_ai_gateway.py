import json

import httpx
import pytest

from app.ai_gateway import VercelAIGatewayAdapter
from app.ai_service import HostedAIService
from app.provider_services import AIRequest, CorrelationContext, ProviderServiceError


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

