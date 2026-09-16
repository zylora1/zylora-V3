"""Hosted AI orchestration and model registry.

The service owns model selection and delegates transport to an adapter. Credit
reservation/settlement remains owned by the existing ai_billing boundary until
each feature is migrated to this service.
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from typing import Any, Iterator, Mapping, Sequence
from uuid import uuid4

from .ai_gateway import LegacyOpenAIAdapter, VercelAIGatewayAdapter
from .config import settings
from .provider_services import (
    AIRequest,
    AIResponse,
    AIService,
    CorrelationContext,
    ProviderConfigurationError,
)


@dataclass(frozen=True)
class AIModelConfig:
    internal_id: str
    gateway_model_id: str
    capability: str
    enabled: bool = True
    supports_streaming: bool = True
    supports_tools: bool = True
    fallback_model: str | None = None
    max_cost_micros: int | None = None
    credit_multiplier: float = 1.0


def default_model_registry() -> dict[str, dict[str, Any]]:
    primary = settings.ai_default_model or settings.openai_model
    editor = settings.ai_editor_model or primary
    sales = settings.ai_sales_assistant_model or settings.sales_assistant_model
    return {
        "SITE_GENERATION": {"primary": primary, "fallback": editor},
        "STUDIO_V4_EDIT": {"primary": editor, "fallback": primary},
        "AI_SITEWIDE_EDIT": {"primary": editor, "fallback": primary},
        "AI_SEO_METADATA": {"primary": primary, "fallback": editor},
        "AI_CMS_PROPOSAL": {"primary": editor, "fallback": primary},
        "SALES_ASSISTANT": {"primary": sales, "fallback": primary},
    }


class HostedAIService(AIService):
    def __init__(self, *, adapter: Any | None = None, registry: Mapping[str, Mapping[str, Any]] | None = None) -> None:
        # An injected adapter is used by tests and controlled migrations.  In
        # production the adapter is selected lazily so settings changes made by
        # a process supervisor (and compatibility tests) are respected without
        # constructing a client with an empty key at import time.
        self.adapter = adapter
        self.registry = {str(key): dict(value) for key, value in (registry or default_model_registry()).items()}

    @staticmethod
    def configured() -> bool:
        gateway_ready = bool(
            str(settings.ai_gateway_api_key or '').strip()
            and str(settings.ai_gateway_base_url or '').strip()
        )
        # Legacy direct-provider credentials remain usable only in local/test
        # compatibility flows. Production fails closed until the canonical
        # Vercel gateway is configured.
        legacy_compatibility = settings.app_env != 'production' and bool(
            str(settings.openai_api_key or '').strip()
        )
        return gateway_ready or legacy_compatibility

    def _adapter_for_request(self) -> Any:
        if self.adapter is not None:
            return self.adapter
        gateway_key = str(settings.ai_gateway_api_key or '').strip()
        if gateway_key and str(settings.ai_gateway_base_url or '').strip():
            return VercelAIGatewayAdapter(api_key=gateway_key)
        legacy_key = str(settings.openai_api_key or '').strip()
        if settings.app_env != 'production' and legacy_key:
            return LegacyOpenAIAdapter(api_key=legacy_key)
        raise ProviderConfigurationError('AI_GATEWAY_API_KEY and AI_GATEWAY_BASE_URL are required')

    def resolve_model(self, feature: str, requested: str | None = None) -> str:
        config = self.registry.get(feature)
        if config is None:
            config = {"primary": settings.ai_default_model or settings.openai_model, "fallback": None}
        primary = str(config.get("primary") or "").strip()
        fallback = str(config.get("fallback") or "").strip() or None
        if requested:
            candidate = str(requested).strip()
            configured_models = {primary, fallback}
            for item in self.registry.values():
                configured_models.add(str(item.get('primary') or '').strip())
                configured_models.add(str(item.get('fallback') or '').strip())
            if candidate not in configured_models:
                raise ValueError("Unsupported model for feature")
            return candidate
        if not primary:
            raise ValueError("No model configured for feature")
        return primary

    def build_request(
        self,
        *,
        feature: str,
        input: Any,
        correlation: CorrelationContext,
        requested_model: str | None = None,
        tools: Sequence[Mapping[str, Any]] = (),
        stream: bool = False,
        idempotency_key: str | None = None,
        metadata: Mapping[str, Any] | None = None,
    ) -> AIRequest:
        return AIRequest(
            feature=feature,
            model=self.resolve_model(feature, requested_model),
            input=input,
            tools=tools,
            stream=stream,
            idempotency_key=idempotency_key,
            correlation=correlation,
            metadata=metadata or {},
        )

    def complete(self, request: AIRequest) -> AIResponse:
        return self._adapter_for_request().complete(request)

    def stream(self, request: AIRequest) -> Iterator[Any]:
        return self._adapter_for_request().stream(request)

    def execute(self, request: AIRequest, reservation: Any | None = None) -> AIResponse:
        """Execute one logical request; reservation is handled by the caller."""

        return self.complete(request)

    def execute_json(
        self,
        feature: str,
        prompt: str,
        *,
        request_id: str | None = None,
        user_id: str | None = None,
        site_id: str | None = None,
        requested_model: str | None = None,
        max_output_tokens: int = 2048,
        idempotency_key: str | None = None,
        metadata: Mapping[str, Any] | None = None,
    ) -> tuple[dict[str, Any], AIResponse]:
        """Run one structured JSON model call through the selected adapter.

        JSON parsing is centralized here so every migrated feature gets the
        same bounded, fenced-output handling and no module needs provider-
        specific response fields such as ``output_text``.
        """
        correlation = CorrelationContext(
            request_id=(str(request_id or uuid4())[:200]),
            feature=feature,
            user_id=user_id,
            site_id=site_id,
            operation=feature,
        )
        request = self.build_request(
            feature=feature,
            input=prompt,
            correlation=correlation,
            requested_model=requested_model,
            stream=False,
            idempotency_key=idempotency_key,
            metadata={
                **dict(metadata or {}),
                "json_object": True,
                "max_output_tokens": max(1, min(int(max_output_tokens), 8192)),
            },
        )
        response = self.execute(request)
        raw = response.output
        if isinstance(raw, dict):
            parsed = raw
        else:
            text = str(raw or '').strip()
            fenced = re.fullmatch(r"```(?:json)?\s*(.*?)\s*```", text, flags=re.IGNORECASE | re.DOTALL)
            if fenced:
                text = fenced.group(1).strip()
            try:
                parsed = json.loads(text or '{}')
            except json.JSONDecodeError as exc:
                raise ValueError('AI provider returned invalid structured JSON') from exc
        if not isinstance(parsed, dict):
            raise ValueError('AI provider returned a JSON value instead of an object')
        return parsed, response


def hosted_ai_configured() -> bool:
    """Compatibility predicate for feature gates during provider cutover."""
    return HostedAIService.configured()


ai_service = HostedAIService()
