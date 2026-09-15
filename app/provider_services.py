"""Provider-neutral contracts shared by hosted product services.

Adapters implement these protocols; business features never need to know which
provider account or SDK is behind a call.  The value objects intentionally
contain no credential fields and are safe to pass through application layers.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Iterator, Mapping, Protocol, Sequence, runtime_checkable


@dataclass(frozen=True)
class CorrelationContext:
    request_id: str
    feature: str
    user_id: str | None = None
    site_id: str | None = None
    operation: str | None = None


@dataclass(frozen=True)
class AIRequest:
    feature: str
    model: str
    input: Any
    correlation: CorrelationContext
    tools: Sequence[Mapping[str, Any]] = field(default_factory=tuple)
    stream: bool = False
    idempotency_key: str | None = None
    metadata: Mapping[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class AIResponse:
    provider: str
    model: str
    output: Any
    usage: Mapping[str, int]
    provider_request_id: str | None = None
    finish_reason: str | None = None
    tool_calls: Sequence[Mapping[str, Any]] = field(default_factory=tuple)
    metadata: Mapping[str, Any] = field(default_factory=dict)


@dataclass(frozen=True)
class DeliveryResult:
    provider: str
    status: str
    provider_id: str | None
    correlation: CorrelationContext
    metadata: Mapping[str, Any] = field(default_factory=dict)


class ProviderServiceError(RuntimeError):
    """Base error that can be safely translated at an API boundary."""


class ProviderConfigurationError(ProviderServiceError):
    """Raised when a required provider setting is not configured."""


class ProviderUnavailableError(ProviderServiceError):
    """Raised for bounded provider timeouts or retryable outages."""


@runtime_checkable
class AIService(Protocol):
    def complete(self, request: AIRequest) -> AIResponse: ...

    def stream(self, request: AIRequest) -> Iterator[Any]: ...


@runtime_checkable
class CommunicationService(Protocol):
    def send_email(self, **kwargs: Any) -> DeliveryResult: ...

    def send_whatsapp(self, **kwargs: Any) -> DeliveryResult: ...

    def send_sms(self, **kwargs: Any) -> DeliveryResult: ...

    def verify_webhook(self, headers: Mapping[str, str], raw_body: bytes) -> Mapping[str, Any]: ...


@runtime_checkable
class InfrastructureService(Protocol):
    def ensure_domain(self, **kwargs: Any) -> Mapping[str, Any]: ...

    def put_media(self, **kwargs: Any) -> Mapping[str, Any]: ...

    def verify_turnstile(self, **kwargs: Any) -> bool: ...


@runtime_checkable
class PaymentService(Protocol):
    def create_order(self, **kwargs: Any) -> Mapping[str, Any]: ...

    def verify_webhook(self, **kwargs: Any) -> Mapping[str, Any]: ...

    def get_subscription(self, **kwargs: Any) -> Mapping[str, Any]: ...


def safe_provider_metadata(value: Mapping[str, Any] | None) -> dict[str, Any]:
    """Keep provider responses bounded and strip credential-shaped fields."""

    blocked = {"api_key", "authorization", "access_token", "secret", "password", "token"}
    result: dict[str, Any] = {}
    for key, item in (value or {}).items():
        if str(key).lower() in blocked:
            continue
        if isinstance(item, (str, int, float, bool)) or item is None:
            result[str(key)] = item
    return result

