"""Vercel AI Gateway adapter using its OpenAI-compatible REST surface."""

from __future__ import annotations

import json
import time
from collections.abc import Iterator
from typing import Any

import httpx

from .config import settings
from .provider_services import (
    AIRequest,
    AIResponse,
    ProviderConfigurationError,
    ProviderServiceError,
    ProviderUnavailableError,
)


DEFAULT_GATEWAY_BASE_URL = "https://ai-gateway.vercel.sh/v1"


class VercelAIGatewayAdapter:
    """Small, dependency-light adapter for the gateway's chat-completions API."""

    provider = "vercel"

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str | None = None,
        timeout: float = 45,
        max_retries: int = 2,
        client: httpx.Client | None = None,
    ) -> None:
        self.api_key = (api_key if api_key is not None else settings.ai_gateway_api_key).strip()
        self.base_url = (base_url or settings.ai_gateway_base_url or DEFAULT_GATEWAY_BASE_URL).rstrip("/")
        self.timeout = max(1.0, min(float(timeout), 120.0))
        self.max_retries = max(0, min(int(max_retries), 3))
        self.client = client or httpx.Client(timeout=self.timeout)

    def _headers(self, request: AIRequest) -> dict[str, str]:
        if not self.api_key:
            raise ProviderConfigurationError("AI_GATEWAY_API_KEY is not configured")
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Request-ID": request.correlation.request_id,
        }
        if request.idempotency_key:
            headers["Idempotency-Key"] = request.idempotency_key[:200]
        return headers

    @staticmethod
    def _messages(value: Any) -> list[dict[str, Any]]:
        if isinstance(value, str):
            return [{"role": "user", "content": value}]
        if isinstance(value, list) and all(isinstance(item, dict) for item in value):
            return value
        return [{"role": "user", "content": str(value)}]

    def _payload(self, request: AIRequest) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "model": request.model,
            "messages": self._messages(request.input),
            "stream": bool(request.stream),
        }
        if request.tools:
            payload["tools"] = list(request.tools)
        max_output_tokens = request.metadata.get("max_output_tokens")
        if max_output_tokens:
            payload["max_tokens"] = max(1, min(int(max_output_tokens), 8192))
        if request.metadata.get("json_object"):
            payload["response_format"] = {"type": "json_object"}
        return payload

    def _post(self, request: AIRequest) -> httpx.Response:
        last_error: Exception | None = None
        for attempt in range(self.max_retries + 1):
            try:
                response = self.client.post(
                    f"{self.base_url}/chat/completions",
                    headers=self._headers(request),
                    json=self._payload(request),
                    timeout=self.timeout,
                )
            except (httpx.TimeoutException, httpx.NetworkError, httpx.RemoteProtocolError) as exc:
                last_error = exc
                if attempt >= self.max_retries:
                    raise ProviderUnavailableError("AI Gateway request failed") from exc
                time.sleep(min(0.2 * (2**attempt), 1.0))
                continue
            if response.status_code == 429 or response.status_code >= 500:
                if attempt < self.max_retries:
                    time.sleep(min(0.2 * (2**attempt), 1.0))
                    continue
                raise ProviderUnavailableError("AI Gateway is temporarily unavailable")
            if response.status_code >= 400:
                raise ProviderServiceError(f"AI Gateway rejected the request (HTTP {response.status_code})")
            return response
        raise ProviderUnavailableError("AI Gateway request failed") from last_error

    @staticmethod
    def _usage(raw: Any) -> dict[str, int]:
        usage = raw if isinstance(raw, dict) else {}
        return {
            "input_tokens": int(usage.get("input_tokens", usage.get("prompt_tokens", 0)) or 0),
            "output_tokens": int(usage.get("output_tokens", usage.get("completion_tokens", 0)) or 0),
            "total_tokens": int(usage.get("total_tokens", 0) or 0),
        }

    def complete(self, request: AIRequest) -> AIResponse:
        response = self._post(request)
        try:
            payload = response.json()
        except ValueError as exc:
            raise ProviderServiceError("AI Gateway returned invalid JSON") from exc
        choice = ((payload.get("choices") or [{}])[0] or {})
        message = choice.get("message") or {}
        return AIResponse(
            provider=self.provider,
            model=str(payload.get("model") or request.model),
            output=message.get("content") or "",
            usage=self._usage(payload.get("usage")),
            provider_request_id=str(payload.get("id") or "") or None,
            finish_reason=str(choice.get("finish_reason") or "") or None,
            tool_calls=tuple(message.get("tool_calls") or ()),
        )

    def stream(self, request: AIRequest) -> Iterator[str]:
        headers = self._headers(request)
        payload = self._payload(request)
        payload["stream"] = True
        try:
            with self.client.stream(
                "POST",
                f"{self.base_url}/chat/completions",
                headers={**headers, "Accept": "text/event-stream"},
                json=payload,
                timeout=self.timeout,
            ) as response:
                if response.status_code == 429 or response.status_code >= 500:
                    raise ProviderUnavailableError("AI Gateway is temporarily unavailable")
                if response.status_code >= 400:
                    raise ProviderServiceError(f"AI Gateway rejected the request (HTTP {response.status_code})")
                for line in response.iter_lines():
                    if not line or not line.startswith("data:"):
                        continue
                    data = line[5:].strip()
                    if data == "[DONE]":
                        break
                    try:
                        chunk = json.loads(data)
                    except json.JSONDecodeError as exc:
                        raise ProviderServiceError("AI Gateway returned malformed stream data") from exc
                    delta = (((chunk.get("choices") or [{}])[0] or {}).get("delta") or {})
                    content = delta.get("content")
                    if content:
                        yield str(content)
        except (httpx.TimeoutException, httpx.NetworkError, httpx.RemoteProtocolError) as exc:
            raise ProviderUnavailableError("AI Gateway stream failed") from exc


class LegacyOpenAIAdapter:
    """Temporary Responses API adapter used during the provider cutover.

    This class is deliberately kept behind ``AIService``.  Feature modules do
    not import it and cannot choose a provider.  It exists only so a deployment
    can switch credentials after the Vercel gateway contract is verified without
    breaking an in-flight release.
    """

    provider = "openai"

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str = "https://api.openai.com/v1",
        timeout: float = 45,
        client: httpx.Client | None = None,
    ) -> None:
        self.api_key = (api_key if api_key is not None else settings.openai_api_key).strip()
        self.base_url = base_url.rstrip("/")
        self.timeout = max(1.0, min(float(timeout), 120.0))
        self.client = client or httpx.Client(timeout=self.timeout)

    def _headers(self, request: AIRequest) -> dict[str, str]:
        if not self.api_key:
            raise ProviderConfigurationError("AI provider is not configured")
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Request-ID": request.correlation.request_id,
        }
        if request.idempotency_key:
            headers["Idempotency-Key"] = request.idempotency_key[:200]
        return headers

    @staticmethod
    def _input(value: Any) -> Any:
        if isinstance(value, (str, list, dict)):
            return value
        return str(value)

    def _payload(self, request: AIRequest) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "model": request.model,
            "input": self._input(request.input),
            "max_output_tokens": max(1, min(int(request.metadata.get("max_output_tokens") or 2048), 8192)),
        }
        if request.metadata.get("json_object"):
            payload["text"] = {"format": {"type": "json_object"}}
        if request.tools:
            payload["tools"] = list(request.tools)
        return payload

    def complete(self, request: AIRequest) -> AIResponse:
        try:
            response = self.client.post(
                f"{self.base_url}/responses",
                headers=self._headers(request),
                json=self._payload(request),
                timeout=self.timeout,
            )
        except (httpx.TimeoutException, httpx.NetworkError, httpx.RemoteProtocolError) as exc:
            raise ProviderUnavailableError("AI provider request failed") from exc
        status_code = int(getattr(response, "status_code", 200) or 200)
        if status_code == 429 or status_code >= 500:
            raise ProviderUnavailableError("AI provider is temporarily unavailable")
        if status_code >= 400:
            raise ProviderServiceError(f"AI provider rejected the request (HTTP {status_code})")
        raise_for_status = getattr(response, "raise_for_status", None)
        if callable(raise_for_status):
            raise_for_status()
        try:
            payload = response.json()
        except ValueError as exc:
            raise ProviderServiceError("AI provider returned invalid JSON") from exc
        usage = payload.get("usage") if isinstance(payload, dict) else {}
        usage = usage if isinstance(usage, dict) else {}
        return AIResponse(
            provider=self.provider,
            model=str(payload.get("model") or request.model),
            output=payload.get("output_text") or "",
            usage={
                "input_tokens": int(usage.get("input_tokens") or 0),
                "output_tokens": int(usage.get("output_tokens") or 0),
                "total_tokens": int(usage.get("total_tokens") or 0),
            },
            provider_request_id=str(payload.get("id") or "") or None,
        )

    def stream(self, request: AIRequest) -> Iterator[str]:
        # The legacy Responses streaming surface is intentionally not exposed
        # by the compatibility path.  The Vercel adapter is the certified
        # streaming implementation; callers fail closed instead of silently
        # using a different protocol.
        raise ProviderServiceError("Legacy AI provider streaming is unavailable during migration")
