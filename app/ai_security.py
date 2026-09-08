from __future__ import annotations

import json
import re
from uuid import uuid4

from sqlalchemy import text

from .db import SessionLocal, now_iso


SALES_ASSISTANT = 'SALES_ASSISTANT'
PUBLIC_SITE_ASSISTANT = 'PUBLIC_SITE_ASSISTANT'
OWNER_ASSISTANT = 'OWNER_ASSISTANT'
SUPER_ADMIN_ASSISTANT = 'SUPER_ADMIN_ASSISTANT'
_SECRET_VALUE = re.compile(r'(?i)\b(?:sk-[A-Za-z0-9_-]{12,}|bearer\s+[A-Za-z0-9._~-]{12,})\b|\b(?:api[_ -]?key|access[_ -]?token|refresh[_ -]?token|client[_ -]?secret|password|turnstile[_ -]?secret)\s*[:=]\s*[^\s,;]+')


def record_ai_usage_event(*, assistant_type: str, status: str, model: str, user_id: str | None = None,
                          site_id: str | None = None, conversation_id: str | None = None,
                          request_id: str | None = None, input_tokens: int = 0,
                          cached_input_tokens: int = 0, output_tokens: int = 0,
                          provider_cost_micros: int = 0, billable_credits: int = 0,
                          tool_calls: list[str] | None = None, error_code: str | None = None,
                          duration_ms: int | None = None) -> str:
    """Write a privacy-minimized, non-secret AI usage record."""
    event_id = str(uuid4())
    with SessionLocal.begin() as db:
        db.execute(text('''INSERT INTO ai_usage_events(
            id,request_id,user_id,site_id,conversation_id,assistant_type,status,model,
            input_tokens,cached_input_tokens,output_tokens,provider_cost_micros,billable_credits,
            tool_calls_json,error_code,duration_ms,created_at)
            VALUES (:i,:r,:u,:s,:c,:at,:st,:m,:tin,:cached,:tout,:cost,:credits,:tools,:err,:duration,:a)'''), {
            'i': event_id, 'r': request_id or str(uuid4()), 'u': user_id, 's': site_id,
            'c': conversation_id, 'at': assistant_type, 'st': str(status or 'UNKNOWN')[:30],
            'm': str(model or 'unknown')[:120], 'tin': max(0, int(input_tokens or 0)),
            'cached': max(0, int(cached_input_tokens or 0)), 'tout': max(0, int(output_tokens or 0)),
            'cost': max(0, int(provider_cost_micros or 0)), 'credits': max(0, int(billable_credits or 0)),
            'tools': json.dumps([str(x)[:80] for x in (tool_calls or [])[:40]], separators=(',', ':')),
            'err': str(error_code or '')[:120] or None, 'duration': max(0, int(duration_ms or 0)) if duration_ms is not None else None,
            'a': now_iso(),
        })
    return event_id


def assert_assistant_type(actual: str | None, expected: str) -> None:
    if str(actual or '') != expected:
        raise PermissionError('Assistant scope mismatch')


def redact_ai_output(value: str, *, max_chars: int = 1600) -> str:
    """Remove recognizable credential-shaped values at the final model boundary."""
    return _SECRET_VALUE.sub('[redacted]', ' '.join(str(value or '').split())[:max_chars])
