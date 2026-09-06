"""Server-authoritative AI model catalogue.

Only models backed by configured provider credentials are returned.  Provider
model identifiers are never accepted from the browser without validation.
"""
from __future__ import annotations

from .config import settings


def _openai_models() -> list[dict]:
    if not settings.openai_api_key:
        return []
    configured = [str(settings.openai_model or '').strip(), str(settings.sales_assistant_model or '').strip()]
    result: list[dict] = []
    # Pricing is intentionally limited to models with a verified local pricing
    # record.  Unknown configured models remain usable by the existing provider
    # path but are not exposed as selectable billable catalogue entries.
    pricing = {
        'gpt-5-mini': {'input_usd_per_mtok': 0.25, 'cached_input_usd_per_mtok': 0.025, 'output_usd_per_mtok': 2.0},
        'gpt-4o-mini': {'input_usd_per_mtok': 0.15, 'cached_input_usd_per_mtok': 0.075, 'output_usd_per_mtok': 0.60},
    }
    labels = {'gpt-5-mini': ('GPT-5 mini', 'Balanced'), 'gpt-4o-mini': ('GPT-4o mini', 'Fast')}
    for model in dict.fromkeys(x for x in configured if x):
        key = model.lower()
        if key not in pricing:
            continue
        label, tier = labels[key]
        result.append({
            'id': model,
            'provider': 'openai',
            'name': label,
            'tier': tier,
            'pricing_version': 'openai-verified-2026-09',
            **pricing[key],
            'enabled': True,
        })
    return result


def enabled_models() -> list[dict]:
    return _openai_models()


def default_model() -> str | None:
    models = enabled_models()
    configured = str(settings.openai_model or '').strip()
    if any(m['id'] == configured for m in models):
        return configured
    return models[0]['id'] if models else None


def validate_model(model: str | None, *, fallback: str | None = None) -> str | None:
    requested = str(model or '').strip()
    allowed = {str(m['id']) for m in enabled_models()}
    if requested:
        if requested not in allowed:
            raise ValueError('Unsupported or unavailable AI model')
        return requested
    candidate = fallback or default_model()
    if candidate and candidate in allowed:
        return candidate
    return None
