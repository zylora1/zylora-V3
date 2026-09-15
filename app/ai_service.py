"""Hosted AI orchestration and model registry.

The service owns model selection and delegates transport to an adapter. Credit
reservation/settlement remains owned by the existing ai_billing boundary until
each feature is migrated to this service.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Iterator, Mapping, Sequence

from .ai_gateway import VercelAIGatewayAdapter
from .config import settings
from .provider_services import AIRequest, AIResponse, AIService, CorrelationContext


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
        self.adapter = adapter or VercelAIGatewayAdapter()
        self.registry = {str(key): dict(value) for key, value in (registry or default_model_registry()).items()}

    def resolve_model(self, feature: str, requested: str | None = None) -> str:
        config = self.registry.get(feature)
        if config is None:
            config = {"primary": settings.ai_default_model or settings.openai_model, "fallback": None}
        primary = str(config.get("primary") or "").strip()
        fallback = str(config.get("fallback") or "").strip() or None
        if requested:
            candidate = str(requested).strip()
            if candidate not in {primary, fallback}:
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
        return self.adapter.complete(request)

    def stream(self, request: AIRequest) -> Iterator[Any]:
        return self.adapter.stream(request)

    def execute(self, request: AIRequest, reservation: Any | None = None) -> AIResponse:
        """Execute one logical request; reservation is handled by the caller."""

        return self.complete(request)


ai_service = HostedAIService()

