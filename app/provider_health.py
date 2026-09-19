"""Safe provider readiness and usage snapshots for Super Admin operations.

The snapshot is deliberately configuration/readiness based.  It never performs
an unbounded live call to a provider from an admin page and never returns a
credential.  Provider outages are represented by the owning service's normal
delivery/operational events rather than taking down the control plane.
"""

from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Any

from sqlalchemy import text

from .config import settings
from .db import SessionLocal


def _configured(value: Any) -> bool:
    return bool(str(value or "").strip())


def provider_health_snapshot() -> dict[str, Any]:
    telnyx_channels = {
        "email": _configured(getattr(settings, "telnyx_email_from", "")),
        "whatsapp": _configured(getattr(settings, "telnyx_whatsapp_from", "")),
        "sms": _configured(getattr(settings, "telnyx_sms_from", "")),
    }
    telnyx_ready = _configured(getattr(settings, "telnyx_api_key", "")) and any(telnyx_channels.values())
    cloudflare_ready = _configured(getattr(settings, "cloudflare_api_token", "")) and _configured(getattr(settings, "cloudflare_zone_id", ""))
    razorpay_ready = str(getattr(settings, "payment_provider", "mock")).lower() == "mock" or all(
        _configured(getattr(settings, name, "")) for name in ("razorpay_key_id", "razorpay_key_secret", "razorpay_webhook_secret")
    )
    providers = [
        {
            "id": "vercel_ai_gateway",
            "name": "Vercel AI Gateway",
            "category": "hosted_ai",
            "configured": _configured(getattr(settings, "ai_gateway_api_key", "")),
            "status": "CONFIGURED" if _configured(getattr(settings, "ai_gateway_api_key", "")) else "NOT_CONFIGURED",
            "capabilities": ["chat", "streaming", "tool_calls"],
        },
        {
            "id": "telnyx",
            "name": "Telnyx Communications",
            "category": "communications",
            "configured": telnyx_ready,
            "status": "CONFIGURED" if telnyx_ready else "NOT_CONFIGURED",
            "channels": telnyx_channels,
        },
        {
            "id": "cloudflare",
            "name": "Cloudflare Infrastructure",
            "category": "infrastructure",
            "configured": cloudflare_ready,
            "status": "CONFIGURED" if cloudflare_ready else "NOT_CONFIGURED",
            "capabilities": ["dns", "custom_domains", "turnstile"] + (["r2"] if _configured(getattr(settings, "r2_bucket", "")) else []),
        },
        {
            "id": "razorpay",
            "name": "Razorpay Customer Payments",
            "category": "payments",
            "configured": razorpay_ready,
            "status": "CONFIGURED" if razorpay_ready else "NOT_CONFIGURED",
            "mode": str(getattr(settings, "payment_provider", "mock")),
        },
        {
            "id": "google_oauth",
            "name": "Google OAuth",
            "category": "identity",
            "configured": _configured(getattr(settings, "google_client_id", "")) and _configured(getattr(settings, "google_client_secret", "")),
            "status": "CONFIGURED" if (_configured(getattr(settings, "google_client_id", "")) and _configured(getattr(settings, "google_client_secret", ""))) else "NOT_CONFIGURED",
        },
        {
            "id": "penpot",
            "name": "Penpot Editing Platform",
            "category": "studio",
            "configured": False,
            "status": "BLOCKED_BY_EXTERNAL_ENVIRONMENT",
            "source_present": True,
            "source_mode": "git_submodule",
            "source_path": "vendor/penpot",
        },
    ]
    return {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "providers": providers,
        "legacy_compatibility": {
            "openai": _configured(getattr(settings, "openai_api_key", "")),
            "resend": _configured(getattr(settings, "resend_api_key", "")),
            "twilio": _configured(getattr(settings, "twilio_account_sid", "")),
        },
    }


def _usage_alerts(ai_rows: list[dict[str, Any]], delivery_rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Return threshold alerts without making provider calls or exposing secrets."""
    alerts: list[dict[str, Any]] = []
    ai_cost_micros = sum(int(row.get("provider_cost_micros") or 0) for row in ai_rows)
    ai_threshold = float(getattr(settings, "ai_cost_alert_usd", 0) or 0)
    if ai_threshold > 0 and ai_cost_micros >= int(ai_threshold * 1_000_000):
        alerts.append({
            "id": "ai_cost",
            "severity": "warning",
            "message": f"Hosted AI provider cost reached ${ai_cost_micros / 1_000_000:.2f} (threshold ${ai_threshold:.2f}).",
        })

    message_count = sum(int(row.get("count") or 0) for row in delivery_rows)
    message_threshold = int(getattr(settings, "telnyx_message_alert_count", 0) or 0)
    if message_threshold > 0 and message_count >= message_threshold:
        alerts.append({
            "id": "telnyx_volume",
            "severity": "warning",
            "message": f"Communication deliveries reached {message_count:,} (threshold {message_threshold:,}).",
        })

    failed_count = sum(int(row.get("count") or 0) for row in delivery_rows if str(row.get("status") or "").lower() in {"failed", "bounced", "complained"})
    failure_threshold = float(getattr(settings, "communication_failure_alert_pct", 0) or 0)
    failure_pct = (failed_count / message_count * 100) if message_count else 0.0
    if failure_threshold > 0 and message_count and failure_pct >= failure_threshold:
        alerts.append({
            "id": "communication_failure_rate",
            "severity": "critical",
            "message": f"Communication failure rate is {failure_pct:.1f}% (threshold {failure_threshold:.1f}%).",
        })
    return alerts


def provider_usage_snapshot(days: int = 30) -> dict[str, Any]:
    days = max(1, min(365, int(days or 30)))
    since = (datetime.now(timezone.utc) - timedelta(days=days)).isoformat()
    ai_rows: list[dict[str, Any]] = []
    delivery_rows: list[dict[str, Any]] = []
    payments: dict[str, int] = {"successful": 0, "failed": 0, "refunds": 0}
    with SessionLocal() as db:
        try:
            ai_rows = [dict(row) for row in db.execute(text("""SELECT COALESCE(provider,'unknown') AS provider,
                COALESCE(model,'unknown') AS model, COUNT(*) AS requests,
                COALESCE(SUM(provider_cost_usd_micros),0) AS provider_cost_micros
                FROM ai_credit_ledger WHERE entry_type='AI_SETTLEMENT' AND created_at>=:since
                GROUP BY COALESCE(provider,'unknown'), COALESCE(model,'unknown')"""), {"since": since}).mappings().all()]
        except Exception:
            ai_rows = []
        try:
            delivery_rows = [dict(row) for row in db.execute(text("""SELECT channel, status, COUNT(*) AS count
                FROM notification_deliveries WHERE created_at>=:since GROUP BY channel,status"""), {"since": since}).mappings().all()]
        except Exception:
            delivery_rows = []
        try:
            payments["successful"] = int(db.execute(text("SELECT COUNT(*) FROM razorpay_orders WHERE status='PAID' AND created_at>=:since"), {"since": since}).scalar_one() or 0)
            payments["failed"] = int(db.execute(text("SELECT COUNT(*) FROM razorpay_orders WHERE status IN ('FAILED','CANCELLED') AND created_at>=:since"), {"since": since}).scalar_one() or 0)
        except Exception:
            pass
    return {
        "days": days,
        "since": since,
        "ai": ai_rows,
        "communications": delivery_rows,
        "payments": payments,
        "alerts": _usage_alerts(ai_rows, delivery_rows),
    }
