from __future__ import annotations

import json
import re
import time
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel, Field
from sqlalchemy import text

from .ai_security import SUPER_ADMIN_ASSISTANT, redact_ai_output, record_ai_usage_event
from .config import settings
from .db import SessionLocal, now_iso
from .providers import estimate_openai_cost_micros, super_admin_completion
from .security import current_user, durable_rate_limit, require_csrf


router = APIRouter(prefix='/api')


class AdminAssistantMessage(BaseModel):
    message: str = Field(min_length=1, max_length=2000)


def _admin(request: Request, *, csrf: bool = False) -> dict:
    user = current_user(request)
    if csrf:
        require_csrf(request, user, request.headers.get('X-CSRF-Token'))
    if user.get('role') != 'SUPER_ADMIN':
        raise HTTPException(403, 'Super Admin Intelligence Assistant is restricted to SUPER_ADMIN')
    return user


def _window(question: str) -> tuple[str, str]:
    now = datetime.now(timezone.utc)
    low = question.lower()
    if 'today' in low:
        start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    elif 'this week' in low or 'week' in low:
        start = now - timedelta(days=7)
    elif 'this month' in low or 'month' in low:
        start = now - timedelta(days=31)
    else:
        start = now - timedelta(days=30)
    return start.isoformat(), now.isoformat()


def _tool_users(db, question: str) -> tuple[str, dict]:
    low = question.lower()
    if 'plan' in low and ('break' in low or 'by plan' in low or 'free' in low or 'starter' in low or 'growth' in low or 'pro' in low):
        rows = db.execute(text("SELECT plan,count(*) AS total FROM users WHERE role<>'SUPER_ADMIN' GROUP BY plan ORDER BY plan")).mappings().all()
        data = {'plans': {str(row['plan']): int(row['total']) for row in rows}}
        return 'get_plan_breakdown', data
    if 'paid' in low or 'subscriber' in low:
        total = db.execute(text("SELECT count(*) FROM users WHERE role<>'SUPER_ADMIN' AND plan IN ('STARTER','GROWTH','ZYLORA','PRO')")).scalar_one()
        return 'get_paid_user_count', {'paid_users': int(total)}
    if 'never published' in low or ('created' in low and 'published' in low):
        total = db.execute(text("""SELECT count(DISTINCT s.user_id) FROM sites s
            WHERE s.status<>'LIVE' AND NOT EXISTS (SELECT 1 FROM sites live WHERE live.user_id=s.user_id AND live.status='LIVE')""")).scalar_one()
        return 'get_unpublished_owner_count', {'owners_with_unpublished_sites': int(total)}
    if 'new users' in low or 'joined' in low or 'signups' in low:
        start, _ = _window(question)
        total = db.execute(text("SELECT count(*) FROM users WHERE role<>'SUPER_ADMIN' AND created_at>=:start"), {'start': start}).scalar_one()
        return 'get_new_user_count', {'new_users': int(total), 'since': start}
    total = db.execute(text("SELECT count(*) FROM users WHERE role<>'SUPER_ADMIN'")).scalar_one()
    return 'get_user_count', {'users': int(total)}


def _tool_ai(db, question: str) -> tuple[str, dict]:
    start, end = _window(question)
    low = question.lower()
    if 'plan' in low and 'usage' in low:
        rows = db.execute(text("""SELECT u.plan,COALESCE(sum(e.input_tokens+e.output_tokens),0) AS tokens,
            COALESCE(sum(e.provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events e JOIN users u ON u.id=e.user_id
            WHERE e.created_at>=:start AND e.assistant_type<>'SUPER_ADMIN_ASSISTANT' AND e.status='SUCCEEDED'
            GROUP BY u.plan ORDER BY tokens DESC"""), {'start': start}).mappings().all()
        return 'get_ai_usage_by_plan', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    if 'model' in low and ('most' in low or 'top' in low):
        rows = db.execute(text("""SELECT model,COALESCE(sum(input_tokens+output_tokens),0) AS tokens,
            count(*) AS calls FROM ai_usage_events WHERE created_at>=:start AND status='SUCCEEDED'
            GROUP BY model ORDER BY tokens DESC LIMIT 10"""), {'start': start}).mappings().all()
        return 'get_ai_usage_by_model', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    if ('site' in low or 'website' in low) and ('sales' in low or 'assistant' in low or 'visitor' in low):
        rows = db.execute(text("""SELECT e.site_id,COALESCE(s.business_name,'Unknown site') AS business_name,
            count(*) AS calls,COALESCE(sum(e.input_tokens+e.output_tokens),0) AS tokens,
            COALESCE(sum(e.provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events e LEFT JOIN sites s ON s.id=e.site_id
            WHERE e.created_at>=:start AND e.status='SUCCEEDED'
              AND e.assistant_type IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT','OWNER_ASSISTANT')
            GROUP BY e.site_id,s.business_name ORDER BY tokens DESC LIMIT 20"""), {'start': start}).mappings().all()
        return 'get_sales_assistant_usage_by_site', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    if 'top' in low or 'most' in low:
        scope = "AND e.assistant_type IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT','OWNER_ASSISTANT')" if ('sales assistant' in low or 'visitor' in low) else "AND e.assistant_type<>'SUPER_ADMIN_ASSISTANT'"
        rows = db.execute(text("""SELECT e.user_id,u.name,u.plan,
            COALESCE(sum(e.input_tokens+e.output_tokens),0) AS tokens,
            COALESCE(sum(e.provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events e LEFT JOIN users u ON u.id=e.user_id
            WHERE e.created_at>=:start AND e.status='SUCCEEDED' """ + scope + """
            GROUP BY e.user_id,u.name,u.plan ORDER BY tokens DESC LIMIT 10"""), {'start': start}).mappings().all()
        return 'get_top_ai_consumers', {'since': start, 'until': end, 'items': [
            {'user_id': str(r['user_id']) if r['user_id'] else None, 'name': str(r['name'] or '')[:120],
             'plan': str(r['plan'] or ''),
             'tokens': int(r['tokens'] or 0), 'cost_micros': int(r['cost_micros'] or 0)} for r in rows]}
    if 'failed' in low or 'failure' in low or 'error' in low:
        rows = db.execute(text("""SELECT status,COALESCE(error_code,'unknown') AS error_code,count(*) AS calls
            FROM ai_usage_events WHERE created_at>=:start AND status<>'SUCCEEDED'
            GROUP BY status,error_code ORDER BY calls DESC LIMIT 20"""), {'start': start}).mappings().all()
        return 'get_ai_failure_stats', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    if 'super admin' in low or 'admin usage' in low:
        row = db.execute(text("""SELECT count(*) AS calls,COALESCE(sum(input_tokens+output_tokens),0) AS tokens,
            COALESCE(sum(provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events WHERE created_at>=:start AND assistant_type='SUPER_ADMIN_ASSISTANT'
              AND status IN ('SUCCEEDED','LOCAL_TOOL_ANSWER','PROVIDER_FALLBACK')"""), {'start': start}).mappings().first()
        return 'get_super_admin_usage', {'since': start, 'until': end, 'calls': int(row['calls'] or 0), 'tokens': int(row['tokens'] or 0), 'cost_micros': int(row['cost_micros'] or 0)}
    if 'visitor' in low:
        row = db.execute(text("""SELECT count(*) AS calls,COALESCE(sum(input_tokens+output_tokens),0) AS tokens,
            COALESCE(sum(provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events WHERE created_at>=:start AND assistant_type IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT') AND status='SUCCEEDED'"""), {'start': start}).mappings().first()
        return 'get_sales_assistant_usage', {'since': start, 'until': end, 'calls': int(row['calls'] or 0), 'tokens': int(row['tokens'] or 0), 'cost_micros': int(row['cost_micros'] or 0)}
    if 'sales' in low or 'assistant' in low:
        row = db.execute(text("""SELECT count(*) AS calls,COALESCE(sum(input_tokens+output_tokens),0) AS tokens,
            COALESCE(sum(provider_cost_micros),0) AS cost_micros
            FROM ai_usage_events WHERE created_at>=:start AND assistant_type IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT','OWNER_ASSISTANT') AND status='SUCCEEDED'"""), {'start': start}).mappings().first()
        return 'get_sales_assistant_usage', {'since': start, 'until': end, 'calls': int(row['calls'] or 0), 'tokens': int(row['tokens'] or 0), 'cost_micros': int(row['cost_micros'] or 0)}
    row = db.execute(text("""SELECT count(*) AS calls,COALESCE(sum(input_tokens+output_tokens),0) AS tokens,
        COALESCE(sum(provider_cost_micros),0) AS cost_micros
        FROM ai_usage_events WHERE created_at>=:start AND status='SUCCEEDED'"""), {'start': start}).mappings().first()
    return 'get_ai_usage_summary', {'since': start, 'until': end, 'calls': int(row['calls'] or 0), 'tokens': int(row['tokens'] or 0), 'cost_micros': int(row['cost_micros'] or 0)}


def _tool_sites(db, question: str) -> tuple[str, dict]:
    low = question.lower()
    if 'traffic' in low or 'views' in low:
        rows = db.execute(text("""SELECT a.site_id,s.business_name,count(*) AS views FROM analytics_events a
            JOIN sites s ON s.id=a.site_id WHERE a.event_type IN ('page_view','PAGE_VIEW')
            GROUP BY a.site_id,s.business_name ORDER BY views DESC LIMIT 10""")).mappings().all()
        return 'get_site_traffic', {'items': [dict(r) for r in rows]}
    if 'not updated' in low or 'inactive' in low or 'recently' in low:
        cutoff = (datetime.now(timezone.utc) - timedelta(days=30)).isoformat()
        rows = db.execute(text("""SELECT id,business_name,slug,status,updated_at FROM sites
            WHERE updated_at<:cutoff ORDER BY updated_at ASC LIMIT 50"""), {'cutoff': cutoff}).mappings().all()
        return 'get_stale_sites', {'cutoff': cutoff, 'items': [dict(r) for r in rows]}
    if 'lead' in low and ('no lead' in low or 'without lead' in low):
        rows = db.execute(text("""SELECT s.id,s.business_name,s.slug,s.user_id FROM sites s
            WHERE NOT EXISTS (SELECT 1 FROM leads l WHERE l.site_id=s.id) ORDER BY s.created_at DESC LIMIT 50""")).mappings().all()
        return 'get_sites_without_leads', {'items': [dict(r) for r in rows]}
    if 'published' in low or 'live' in low:
        total = db.execute(text("SELECT count(*) FROM sites WHERE status='LIVE'")).scalar_one()
        return 'get_published_site_count', {'published_sites': int(total)}
    total = db.execute(text('SELECT count(*) FROM sites')).scalar_one()
    return 'get_site_count', {'sites': int(total)}


def _tool_leads(db, question: str) -> tuple[str, dict]:
    start, end = _window(question)
    low = question.lower()
    if 'plan' in low and ('average' in low or 'avg' in low or 'most' in low or 'highest' in low):
        rows = db.execute(text("""SELECT u.plan,
            count(l.id) AS leads,COUNT(DISTINCT s.user_id) AS owners,
            ROUND(CAST(count(l.id) AS FLOAT)/NULLIF(COUNT(DISTINCT s.user_id),0),2) AS average_leads
            FROM users u JOIN sites s ON s.user_id=u.id LEFT JOIN leads l
              ON l.site_id=s.id AND l.created_at>=:start
            WHERE u.role<>'SUPER_ADMIN' GROUP BY u.plan ORDER BY average_leads DESC"""), {'start': start}).mappings().all()
        return 'get_leads_by_plan', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    if 'site' in low or 'most' in low:
        rows = db.execute(text("""SELECT l.site_id,s.business_name,count(*) AS leads FROM leads l
            JOIN sites s ON s.id=l.site_id WHERE l.created_at>=:start GROUP BY l.site_id,s.business_name
            ORDER BY leads DESC LIMIT 10"""), {'start': start}).mappings().all()
        return 'get_leads_by_site', {'since': start, 'until': end, 'items': [dict(r) for r in rows]}
    row = db.execute(text("""SELECT count(*) AS total,
        sum(CASE WHEN source='AI_ASSISTANT' THEN 1 ELSE 0 END) AS ai_leads
        FROM leads WHERE created_at>=:start"""), {'start': start}).mappings().first()
    return 'get_lead_stats', {'since': start, 'until': end, 'leads': int(row['total'] or 0), 'ai_assistant_leads': int(row['ai_leads'] or 0)}


def _tool_operations(db, question: str) -> tuple[str, dict]:
    start, end = _window(question)
    low = question.lower()
    if 'appointment' in low or 'booking' in low:
        total = db.execute(text("SELECT count(*) FROM appointments WHERE created_at>=:start AND status='BOOKED'"), {'start': start}).scalar_one()
        return 'get_appointment_stats', {'since': start, 'until': end, 'appointments_booked': int(total)}
    if 'domain' in low:
        domain_filter = " WHERE status IN ('ACTIVE','CONNECTED')" if 'active' in low else ''
        rows = db.execute(text("SELECT status,count(*) AS total FROM custom_domains" + domain_filter + " GROUP BY status ORDER BY status")).mappings().all()
        return 'get_domain_stats', {'statuses': {str(r['status']): int(r['total']) for r in rows}}
    if 'payment' in low or 'billing' in low:
        rows = db.execute(text("""SELECT status,count(*) AS total FROM (
            SELECT status FROM razorpay_orders UNION ALL SELECT status FROM credit_topup_orders
        ) payment_rows GROUP BY status ORDER BY status""")).mappings().all()
        return 'get_payment_stats', {'statuses': {str(r['status']): int(r['total']) for r in rows}}
    if 'storage' in low:
        rows = db.execute(text("""SELECT m.user_id,u.name,u.email,COALESCE(sum(m.size_bytes),0) AS bytes
            FROM media_assets m LEFT JOIN users u ON u.id=m.user_id WHERE m.deleted_at IS NULL
            GROUP BY m.user_id,u.name,u.email ORDER BY bytes DESC LIMIT 10""")).mappings().all()
        return 'get_storage_consumers', {'items': [dict(r) for r in rows]}
    if 'error' in low or 'failure' in low or 'provider' in low:
        rows = db.execute(text("""SELECT event_code,severity,count(*) AS total FROM operational_events
            WHERE created_at>=:start AND severity IN ('ERROR','CRITICAL') GROUP BY event_code,severity
            ORDER BY total DESC LIMIT 20"""), {'start': start}).mappings().all()
        return 'get_provider_failures', {'since': start, 'items': [dict(r) for r in rows]}
    rows = db.execute(text("""SELECT plan,count(*) AS total FROM users WHERE role<>'SUPER_ADMIN' AND ai_credits<=3
        GROUP BY plan ORDER BY plan""")).mappings().all()
    return 'get_users_near_credit_limit', {'items': [dict(r) for r in rows]}


def run_safe_admin_tool(question: str) -> tuple[str, dict]:
    """Resolve natural language to a finite, parameterized read-only tool set."""
    low = question.lower()
    with SessionLocal() as db:
        if 'lead' in low and any(x in low for x in ('lead', 'captured', 'generated', 'enquir')):
            return _tool_leads(db, question)
        if 'credit limit' in low or 'near zero' in low or ('approaching' in low and 'credit' in low):
            return _tool_operations(db, question)
        if any(x in low for x in ('token', 'ai usage', 'ai ', 'sales assistant', 'model', 'provider cost')):
            return _tool_ai(db, question)
        if any(x in low for x in ('storage', 'domain', 'payment', 'billing', 'appointment', 'booking', 'provider', 'failure', 'error', 'credit limit', 'near zero')):
            return _tool_operations(db, question)
        if any(x in low for x in ('user', 'subscriber', 'plan', 'signup', 'joined', 'paid')):
            return _tool_users(db, question)
        if any(x in low for x in ('lead', 'website', 'site', 'published', 'live')):
            return _tool_leads(db, question) if 'lead' in low else _tool_sites(db, question)
        return _tool_operations(db, question)


def _answer(tool: str, data: dict) -> str:
    if tool == 'get_user_count': return f"There are {data['users']} registered customer users."
    if tool == 'get_paid_user_count': return f"There are {data['paid_users']} customer users on a paid or managed plan."
    if tool == 'get_plan_breakdown': return 'Plan breakdown: ' + ', '.join(f"{k}: {v}" for k, v in data['plans'].items()) + '.'
    if tool == 'get_unpublished_owner_count': return f"{data['owners_with_unpublished_sites']} customer owners have created a site but have not published one."
    if tool == 'get_new_user_count': return f"{data['new_users']} new customer users joined in the selected window."
    if tool == 'get_published_site_count': return f"There are {data['published_sites']} published websites."
    if tool == 'get_site_count': return f"There are {data['sites']} websites in the platform."
    if tool == 'get_ai_usage_summary': return f"AI usage in the selected window is {data['tokens']} tokens across {data['calls']} successful calls."
    if tool == 'get_ai_usage_by_plan': return 'AI usage by plan: ' + ', '.join(f"{x['plan']}: {x['tokens']} tokens" for x in data['items']) + '.'
    if tool == 'get_ai_usage_by_model': return 'AI usage by model: ' + ', '.join(f"{x['model']}: {x['tokens']} tokens" for x in data['items']) + '.'
    if tool == 'get_ai_failure_stats': return 'AI failure categories: ' + ', '.join(f"{x['error_code']}: {x['calls']} ({x['status']})" for x in data['items']) + '.'
    if tool == 'get_sales_assistant_usage': return f"Sales Assistant usage is {data['tokens']} tokens across {data['calls']} calls in the selected window."
    if tool == 'get_sales_assistant_usage_by_site': return 'Sales Assistant usage by site: ' + ', '.join(f"{x['business_name']}: {x['tokens']} tokens" for x in data['items']) + '.'
    if tool == 'get_super_admin_usage': return f"Super Admin Assistant usage is {data['tokens']} tokens across {data['calls']} calls in the selected window."
    if tool == 'get_lead_stats': return f"There are {data['leads']} leads in the selected window, including {data['ai_assistant_leads']} from Sales Assistants."
    if tool == 'get_leads_by_plan': return 'Average leads by plan: ' + ', '.join(f"{x['plan']}: {x['average_leads']} per owner" for x in data['items']) + '.'
    if tool == 'get_appointment_stats': return f"There were {data['appointments_booked']} booked appointments in the selected window."
    if tool == 'get_domain_stats': return 'Custom domain status: ' + ', '.join(f"{k}: {v}" for k, v in data['statuses'].items()) + '.'
    if tool == 'get_payment_stats': return 'Payment status: ' + ', '.join(f"{k}: {v}" for k, v in data['statuses'].items()) + '.'
    if tool == 'get_site_traffic': return 'Highest traffic sites: ' + ', '.join(f"{x['business_name']}: {x['views']} views" for x in data['items']) + '.'
    if tool == 'get_stale_sites': return f"{len(data['items'])} sites have not been updated in the selected stale window."
    if tool == 'get_storage_consumers': return 'Largest storage users: ' + ', '.join(f"{x['name'] or x['email']}: {x['bytes']} bytes" for x in data['items']) + '.'
    if tool == 'get_users_near_credit_limit': return f"Users near the AI credit limit, grouped by plan: {data['items']}."
    if tool == 'get_provider_failures': return f"The selected window has {len(data['items'])} grouped provider/platform failure categories."
    if tool == 'get_sites_without_leads': return f"{len(data['items'])} sites currently have no captured leads in the returned set."
    if tool == 'get_leads_by_site': return 'Top lead-generating sites: ' + ', '.join(f"{x['business_name']}: {x['leads']}" for x in data['items']) + '.'
    return 'I could not map that request to an approved read-only analytics tool.'


@router.post('/super-admin/assistant')
def super_admin_assistant(payload: AdminAssistantMessage, request: Request):
    admin = _admin(request, csrf=True)
    durable_rate_limit(f'super-admin-assistant:{admin["id"]}', 240, 3600)
    started = time.perf_counter()
    request_id = str(__import__('uuid').uuid4())
    tool, data = run_safe_admin_tool(payload.message)
    answer = redact_ai_output(_answer(tool, data))
    model = settings.openai_model
    input_tokens = output_tokens = cached_tokens = cost = 0
    status = 'LOCAL_TOOL_ANSWER'
    error_code = None
    if settings.openai_api_key:
        try:
            result = super_admin_completion(question=payload.message, tool_name=tool, tool_result=data, model=model)
            answer = redact_ai_output(result.get('answer') or answer)
            input_tokens = int(result.get('input_tokens') or 0)
            output_tokens = int(result.get('output_tokens') or 0)
            cached_tokens = int(result.get('cached_input_tokens') or 0)
            model = result.get('model') or model
            cost = estimate_openai_cost_micros(model, {'input_tokens': input_tokens, 'output_tokens': output_tokens, 'cached_input_tokens': cached_tokens})
            status = 'SUCCEEDED'
        except Exception as exc:
            # Safe deterministic tool answer remains available; the failed provider call is metered as failed.
            error_code = type(exc).__name__[:120]
            status = 'PROVIDER_FALLBACK'
    event_id = record_ai_usage_event(
        assistant_type=SUPER_ADMIN_ASSISTANT, status=status, model=model, user_id=admin['id'],
        request_id=request_id, input_tokens=input_tokens, cached_input_tokens=cached_tokens,
        output_tokens=output_tokens, provider_cost_micros=cost, tool_calls=[tool],
        error_code=error_code, duration_ms=round((time.perf_counter() - started) * 1000),
    )
    with SessionLocal.begin() as db:
        db.execute(text("INSERT INTO audit_log(user_id,action,object_type,object_id,metadata,created_at) VALUES (:u,'SUPER_ADMIN_ASSISTANT_QUERY','ai_usage',:i,:m,:a)"), {
            'u': admin['id'], 'i': event_id, 'm': json.dumps({'tool': tool, 'assistant_type': SUPER_ADMIN_ASSISTANT}), 'a': now_iso(),
        })
    return {'assistant_type': SUPER_ADMIN_ASSISTANT, 'answer': answer, 'tool_calls': [tool], 'data': data, 'as_of': now_iso(), 'usage_event_id': event_id}
