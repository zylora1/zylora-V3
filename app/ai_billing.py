"""Authoritative AI usage economics, wallet reservations, and immutable ledger.

The legacy ``credit_wallets`` integer buckets remain a compatibility projection
for older product code.  All new AI accounting uses Decimal values in the
normal or chatbot-reserved wallet columns and writes an append-only ledger row.
"""
from __future__ import annotations

import json
from datetime import datetime, timedelta, timezone
from decimal import Decimal, ROUND_DOWN, ROUND_HALF_UP, InvalidOperation
from typing import Any
from uuid import uuid4

from fastapi import HTTPException
from sqlalchemy import text
from sqlalchemy.exc import IntegrityError

from .db import now_iso
from .plans import get_plan
from .settings_store import get_system_setting

NORMAL = "NORMAL"
CHATBOT_RESERVED = "CHATBOT_RESERVED"
_ZERO = Decimal("0")


def _dec(value: Any, default: Decimal = _ZERO) -> Decimal:
    if value is None or value == "":
        return default
    try:
        return Decimal(str(value))
    except (InvalidOperation, ValueError, TypeError):
        return default


def precision() -> int:
    try:
        return max(0, min(12, int(get_system_setting("ai_credit_precision", "6") or 6)))
    except (TypeError, ValueError):
        return 6


def quantize_credits(value: Any) -> Decimal:
    places = Decimal(1).scaleb(-precision())
    return _dec(value).quantize(places, rounding=ROUND_HALF_UP)


def reservation_amount(value: Any) -> Decimal:
    """Return a non-zero reservation for any positive estimated usage.

    A very small provider estimate can round to zero at the configured display
    precision.  Reserving one smallest unit in that case prevents an otherwise
    billable provider call from bypassing authorization; settlement releases
    it when measured usage is actually zero.
    """
    raw = _dec(value)
    if raw <= _ZERO:
        return _ZERO
    rounded = quantize_credits(raw)
    return rounded if rounded > _ZERO else Decimal(1).scaleb(-precision())


def _bounded_setting_int(key: str, default: int, *, minimum: int = 1, maximum: int = 1_000_000) -> int:
    """Read a bounded provider-input/output cap without ever trusting a client.

    These caps are deliberately server-side settings.  They are used only for
    pre-provider authorization; final settlement still uses provider usage.
    """
    try:
        value = int(get_system_setting(key, str(default)) or default)
    except (TypeError, ValueError):
        value = default
    return max(minimum, min(maximum, value))


def maximum_provider_reservation(db, *, provider: str, model: str,
                                 requests: list[tuple[int, int]]) -> Decimal:
    """Calculate the maximum legitimate customer charge for bounded calls.

    ``requests`` contains (input-token-cap, output-token-cap) pairs.  Input
    caps are supplied by server code from bounded prompt construction and are
    intentionally charged as uncached input (the safe upper bound).  The
    result is based on the active pricing version and therefore changes when
    an operator publishes a new price catalogue; the selected version is
    retained on settlement records.
    """
    if not requests:
        return _ZERO
    total = _ZERO
    global_input_cap = _bounded_setting_int("ai_provider_input_token_cap", 100_000, minimum=1)
    global_output_cap = _bounded_setting_int("ai_provider_output_token_cap", 20_000, minimum=1)
    for input_cap, output_cap in requests:
        # A global safety cap may reduce a feature budget, never expand it.
        # Feature callers pass the maximum prompt/output they actually allow.
        inp = max(1, min(int(input_cap), global_input_cap))
        out = max(1, min(int(output_cap), global_output_cap))
        measured = calculate_provider_cost(db, provider=provider, model=model,
                                           input_units=inp, output_units=out)
        total += _dec(measured["credits"])
    return reservation_amount(total)


def feature_reservation_budget(db, *, feature: str, provider: str, model: str,
                               page_count: int = 1) -> Decimal:
    """Return a server-authoritative cap for a known AI feature.

    Feature-specific limits mirror the max_output_tokens values in the active
    provider paths.  Site-wide edits multiply the bounded per-page call by the
    bounded page count.  Legacy/local provider paths continue to use their
    configured compatibility charge and do not call this helper.
    """
    if feature == "WEBSITE_CREATOR":
        inp = _bounded_setting_int("ai_creator_input_token_limit", 20_000)
        primary_out = _bounded_setting_int("ai_creator_primary_output_token_limit", 800, maximum=20_000)
        copy_out = _bounded_setting_int("ai_creator_copy_output_token_limit", 500, maximum=20_000)
        return maximum_provider_reservation(db, provider=provider, model=model,
                                             requests=[(inp, primary_out), (inp, copy_out)])
    if feature in {"AI_EDIT", "AI_EDITOR", "STUDIO_AI_EDITOR"}:
        inp = _bounded_setting_int("ai_editor_input_token_limit", 30_000)
        out = _bounded_setting_int("ai_editor_output_token_limit", 1_200, maximum=20_000)
        return maximum_provider_reservation(db, provider=provider, model=model,
                                             requests=[(inp, out)])
    if feature == "AI_SITEWIDE_EDIT":
        pages = max(1, min(20, int(page_count or 1)))
        inp = _bounded_setting_int("ai_sitewide_input_token_limit", 30_000)
        out = _bounded_setting_int("ai_sitewide_output_token_limit", 800, maximum=20_000)
        per_page = maximum_provider_reservation(db, provider=provider, model=model,
                                                 requests=[(inp, out)])
        return reservation_amount(per_page * pages)
    if feature in {"SALES_ASSISTANT", "PUBLIC_SITE_ASSISTANT"}:
        inp = _bounded_setting_int("ai_assistant_input_token_limit", 30_000)
        out = _bounded_setting_int("assistant_output_token_limit", 350, maximum=2_000)
        return maximum_provider_reservation(db, provider=provider, model=model,
                                             requests=[(inp, out)])
    if feature == "AI_SEO_METADATA":
        inp = _bounded_setting_int("ai_seo_input_token_limit", 12_000)
        out = _bounded_setting_int("ai_seo_output_token_limit", 220, maximum=20_000)
        return maximum_provider_reservation(db, provider=provider, model=model,
                                             requests=[(inp, out)])
    if feature == "AI_CMS_PROPOSAL":
        inp = _bounded_setting_int("ai_cms_input_token_limit", 15_000)
        out = _bounded_setting_int("ai_cms_output_token_limit", 1_600, maximum=20_000)
        return maximum_provider_reservation(db, provider=provider, model=model,
                                             requests=[(inp, out)])
    return _ZERO


def public_decimal(value: Any) -> int | float:
    """Convert Decimal for JSON/UI compatibility without affecting accounting."""
    d = quantize_credits(value)
    if d == d.to_integral_value():
        return int(d)
    return float(d)


def _period_key() -> str:
    n = datetime.now(timezone.utc)
    return f"{n.year:04d}-{n.month:02d}"


def _is_contact_only(plan: str) -> bool:
    return bool(int(get_plan(plan).get("contact_only") or 0))


def _legacy_total(row: Any) -> Decimal:
    return _dec(row["monthly_remaining"]) + _dec(row["signup_remaining"]) + _dec(row["topup_remaining"])


def _sync_user_projection(db, user_id: str, normal_balance: Decimal | None = None) -> None:
    row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    if not row:
        return
    if normal_balance is None:
        normal_balance = _dec(row.get("normal_balance"))
    lead = sum((_dec(row[k]) for k in ("lead_monthly_remaining", "lead_signup_remaining", "lead_topup_remaining")), _ZERO)
    db.execute(text("UPDATE users SET ai_credits=:a, lead_credits=:l, updated_at=:n WHERE id=:u"), {
        "a": int(normal_balance.to_integral_value(rounding=ROUND_DOWN)),
        "l": int(lead.to_integral_value(rounding=ROUND_DOWN)),
        "n": now_iso(), "u": user_id,
    })


def _insert_ledger(db, *, account_id: str, user_id: str | None, site_id: str | None,
                   feature: str, wallet_type: str, entry_type: str, amount: Decimal,
                   balance_before: Decimal, balance_after: Decimal, operation_id: str | None = None,
                   request_id: str | None = None, reservation_id: str | None = None,
                   idempotency_key: str | None = None, provider: str | None = None,
                   model: str | None = None, pricing_version: str | None = None,
                   input_units: int = 0, cached_input_units: int = 0, output_units: int = 0,
                   provider_cost_micros: int = 0, customer_usage_value_micros: int = 0,
                   metadata: dict | None = None) -> str:
    lid = str(uuid4())
    db.execute(text("""INSERT INTO ai_credit_ledger(
      id,account_id,user_id,site_id,feature,wallet_type,entry_type,amount,
      balance_before,balance_after,provider,model,pricing_version,input_units,
      cached_input_units,output_units,provider_cost_usd_micros,
      customer_usage_value_usd_micros,operation_id,request_id,reservation_id,
      idempotency_key,metadata_json,created_at)
      VALUES (:id,:account_id,:user_id,:site_id,:feature,:wallet_type,:entry_type,:amount,
      :before,:after,:provider,:model,:version,:input,:cached,:output,:provider_cost,
      :customer_value,:operation,:request,:reservation,:idem,:metadata,:created)"""), {
        "id": lid, "account_id": account_id, "user_id": user_id, "site_id": site_id,
        "feature": feature, "wallet_type": wallet_type, "entry_type": entry_type,
        "amount": str(quantize_credits(amount)), "before": str(quantize_credits(balance_before)),
        "after": str(quantize_credits(balance_after)), "provider": provider, "model": model,
        "version": pricing_version, "input": int(input_units or 0),
        "cached": int(cached_input_units or 0), "output": int(output_units or 0),
        "provider_cost": int(provider_cost_micros or 0), "customer_value": int(customer_usage_value_micros or 0),
        "operation": operation_id, "request": request_id, "reservation": reservation_id,
        "idem": idempotency_key, "metadata": json.dumps(metadata or {}, separators=(",", ":")),
        "created": now_iso(),
    })
    return lid


def _reconcile_legacy_projection(db, row: Any) -> dict:
    """Import direct legacy-bucket mutations exactly once.

    A few compatibility callers and historical admin tools still update the
    integer columns.  Treat a change from the stored snapshot as an explicit
    balance adjustment, then move the snapshot forward so it cannot be replayed.
    """
    legacy = _legacy_total(row)
    snapshot = _dec(row.get("legacy_normal_snapshot"))
    normal = _dec(row.get("normal_balance"))
    delta = legacy - snapshot
    if delta != _ZERO:
        normal = quantize_credits(normal + delta)
        db.execute(text("UPDATE credit_wallets SET normal_balance=CAST(:b AS NUMERIC),legacy_normal_snapshot=CAST(:s AS NUMERIC),updated_at=:n WHERE user_id=:u"), {
            "b": str(normal), "s": str(legacy), "n": now_iso(), "u": row["user_id"],
        })
        _insert_ledger(db, account_id=row["user_id"], user_id=row["user_id"], site_id=None,
                       feature="LEGACY_RECONCILIATION", wallet_type=NORMAL,
                       entry_type="ADMIN_ADJUSTMENT", amount=delta,
                       balance_before=quantize_credits(normal - delta), balance_after=normal,
                       metadata={"source": "legacy_credit_wallet_projection"})
    return {"normal": normal, "legacy": legacy}


def ensure_ai_wallet(db, user_id: str, plan: str) -> dict | None:
    """Create/renew the extended wallet while preserving old allocations/topups."""
    cfg = get_plan(plan)
    if _is_contact_only(plan):
        db.execute(text("DELETE FROM credit_wallets WHERE user_id=:u"), {"u": user_id})
        db.execute(text("UPDATE users SET ai_credits=0,lead_credits=0,updated_at=:n WHERE id=:u"), {"n": now_iso(), "u": user_id})
        return None
    period = _period_key()
    reserved_allowance = quantize_credits(cfg.get("chatbot_reserved_credits", cfg.get("ai_credits", 0)))
    normal_allowance = quantize_credits(_dec(cfg.get("ai_credits")) + _dec(cfg.get("signup_bonus_credits")))
    row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    if not row:
        monthly = int(cfg.get("ai_credits") or 0)
        signup = int(cfg.get("signup_bonus_credits") or 0)
        lead_monthly = int(cfg.get("lead_credits") or 0)
        db.execute(text("""INSERT INTO credit_wallets(
          user_id,monthly_remaining,signup_remaining,topup_remaining,
          lead_monthly_remaining,lead_signup_remaining,lead_topup_remaining,
          period_key,updated_at,normal_balance,normal_reserved,
          chatbot_reserved_balance,chatbot_reserved_held,normal_allocation,
          chatbot_reserved_allocation,cycle_key,legacy_normal_snapshot)
          VALUES (:u,:m,:s,0,:lm,:ls,0,:p,:n,:normal,0,:reserve,0,:allocation,:reserve_alloc,:p,:legacy)"""), {
            "u": user_id, "m": monthly, "s": signup, "lm": lead_monthly, "ls": signup,
            "p": period, "n": now_iso(), "normal": str(normal_allowance), "reserve": str(reserved_allowance),
            "allocation": str(normal_allowance), "reserve_alloc": str(reserved_allowance),
            "legacy": str(quantize_credits(monthly + signup)),
        })
        _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                       feature="PLAN_ALLOCATION", wallet_type=NORMAL,
                       entry_type="PLAN_ALLOCATION", amount=normal_allowance,
                       balance_before=_ZERO, balance_after=normal_allowance)
        if reserved_allowance > _ZERO:
            _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                           feature="CHATBOT_RESERVE_ALLOCATION", wallet_type=CHATBOT_RESERVED,
                           entry_type="CHATBOT_RESERVE_ALLOCATION", amount=reserved_allowance,
                           balance_before=_ZERO, balance_after=reserved_allowance)
        return {"normal": normal_allowance, "reserved": reserved_allowance}
    reconciled = _reconcile_legacy_projection(db, row)
    row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    if str(row.get("cycle_key") or row.get("period_key") or "") != period:
        # Normal monthly allowance resets, while the legacy top-up bucket is
        # retained.  Reserved protection is always replaced, never rolled over.
        topup = _dec(row.get("topup_remaining"))
        signup = _dec(cfg.get("signup_bonus_credits"))
        previous_normal = _dec(row.get("normal_balance"))
        previous_reserved = _dec(row.get("chatbot_reserved_balance"))
        normal = quantize_credits(_dec(cfg.get("ai_credits")) + signup + topup)
        normal_held = _dec(row.get("normal_reserved"))
        reserved_held = _dec(row.get("chatbot_reserved_held"))
        db.execute(text("""UPDATE credit_wallets SET monthly_remaining=:m,signup_remaining=:s,
          lead_monthly_remaining=:lm,lead_signup_remaining=:ls,normal_balance=:normal,
          normal_reserved=:normal_held,chatbot_reserved_balance=:reserve,chatbot_reserved_held=:reserved_held,
          normal_allocation=:allocation,chatbot_reserved_allocation=:reserve_alloc,
          period_key=:p,cycle_key=:p,legacy_normal_snapshot=CAST(:legacy AS NUMERIC),updated_at=:n WHERE user_id=:u"""), {
            "m": int(cfg.get("ai_credits") or 0), "s": int(cfg.get("signup_bonus_credits") or 0),
            "lm": int(cfg.get("lead_credits") or 0), "ls": int(cfg.get("signup_bonus_credits") or 0),
            "normal": str(normal), "normal_held": str(normal_held), "reserve": str(reserved_allowance), "reserved_held": str(reserved_held), "allocation": str(normal_allowance),
            "reserve_alloc": str(reserved_allowance), "p": period, "legacy": str(quantize_credits(_dec(cfg.get("ai_credits")) + signup + topup)),
            "n": now_iso(), "u": user_id,
        })
        if normal != previous_normal:
            _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                           feature="PLAN_RENEWAL", wallet_type=NORMAL,
                           entry_type="PLAN_RENEWAL", amount=quantize_credits(normal - previous_normal),
                           balance_before=previous_normal, balance_after=normal,
                           operation_id=f"cycle:{period}")
        if reserved_allowance != previous_reserved:
            _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                           feature="CHATBOT_RESERVE_RESET", wallet_type=CHATBOT_RESERVED,
                           entry_type="CHATBOT_RESERVE_RESET", amount=quantize_credits(reserved_allowance - previous_reserved),
                           balance_before=previous_reserved, balance_after=reserved_allowance,
                           operation_id=f"cycle:{period}")
        row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    else:
        # Populate columns for wallets created by a partial/old deployment.
        if _dec(row.get("normal_balance")) == _ZERO and _legacy_total(row) != _ZERO and _dec(row.get("legacy_normal_snapshot")) == _ZERO:
            normal = _legacy_total(row)
            db.execute(text("UPDATE credit_wallets SET normal_balance=CAST(:b AS NUMERIC),normal_allocation=CAST(:a AS NUMERIC),chatbot_reserved_balance=CAST(:r AS NUMERIC),chatbot_reserved_allocation=CAST(:r AS NUMERIC),cycle_key=:p,legacy_normal_snapshot=CAST(:s AS NUMERIC),updated_at=:n WHERE user_id=:u"), {
                "b": str(normal), "a": str(normal_allowance), "r": str(reserved_allowance), "p": period,
                "s": str(normal), "n": now_iso(), "u": user_id,
            })
            _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                           feature="PLAN_ALLOCATION", wallet_type=NORMAL,
                           entry_type="PLAN_ALLOCATION", amount=normal,
                           balance_before=_ZERO, balance_after=normal,
                           metadata={"source": "legacy_wallet_backfill"})
            if reserved_allowance > _ZERO:
                _insert_ledger(db, account_id=user_id, user_id=user_id, site_id=None,
                               feature="CHATBOT_RESERVE_ALLOCATION", wallet_type=CHATBOT_RESERVED,
                               entry_type="CHATBOT_RESERVE_ALLOCATION", amount=reserved_allowance,
                               balance_before=_ZERO, balance_after=reserved_allowance,
                               metadata={"source": "legacy_wallet_backfill"})
    row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    _sync_user_projection(db, user_id, _dec(row.get("normal_balance")))
    return dict(row)


def wallet_snapshot(db, user_id: str, plan: str) -> dict:
    row = ensure_ai_wallet(db, user_id, plan)
    if row is None:
        return {"contact_only": True, "normal_available": _ZERO, "chatbot_reserved_available": _ZERO}
    row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().first()
    normal = _dec(row.get("normal_balance")); held = _dec(row.get("normal_reserved"))
    reserve = _dec(row.get("chatbot_reserved_balance")); reserve_held = _dec(row.get("chatbot_reserved_held"))
    normal_available = max(_ZERO, quantize_credits(normal - held))
    reserved_available = max(_ZERO, quantize_credits(reserve - reserve_held))
    usage = db.execute(text("""SELECT feature,SUM(CASE WHEN amount<0 THEN -amount ELSE 0 END) AS used
      FROM ai_credit_ledger WHERE account_id=:u AND entry_type='AI_SETTLEMENT' GROUP BY feature ORDER BY feature"""), {"u": user_id}).mappings().all()
    return {
        **dict(row), "contact_only": False,
        "normal_balance": public_decimal(normal), "normal_reserved": public_decimal(held),
        "normal_available": public_decimal(normal_available), "chatbot_reserved_balance": public_decimal(reserve),
        "chatbot_reserved_held": public_decimal(reserve_held), "chatbot_reserved_available": public_decimal(reserved_available),
        "chatbot_reserved_allocation": public_decimal(_dec(row.get("chatbot_reserved_allocation"))),
        "plan_allocation": public_decimal(_dec(row.get("normal_allocation"))),
        "purchased_credits": public_decimal(_dec(row.get("topup_remaining"))),
        "cycle_key": row.get("cycle_key") or row.get("period_key"),
        "usage_by_feature": {str(x["feature"]): public_decimal(_dec(x["used"])) for x in usage},
    }


def _available_expr(wallet_type: str) -> tuple[str, str]:
    if wallet_type == NORMAL:
        return "normal_balance", "normal_reserved"
    return "chatbot_reserved_balance", "chatbot_reserved_held"


def reserve_ai_operation(db, *, account_id: str, plan: str, estimated_credits: Any,
                         feature: str, site_id: str | None = None, user_id: str | None = None,
                         operation_id: str | None = None, request_id: str | None = None,
                         idempotency_key: str | None = None, provider: str | None = None,
                         model: str | None = None, allow_reserved: bool = False) -> dict | None:
    amount = reservation_amount(estimated_credits)
    if amount <= _ZERO:
        return {"skipped": True, "wallet_type": NORMAL, "requested_amount": _ZERO, "reservation_id": None}
    ensure_ai_wallet(db, account_id, plan)
    recover_expired_reservations(db, account_id=account_id)
    operation_id = operation_id or str(uuid4()); request_id = request_id or str(uuid4())
    if idempotency_key:
        prior = db.execute(text("SELECT * FROM ai_credit_reservations WHERE account_id=:a AND idempotency_key=:k"), {"a": account_id, "k": idempotency_key}).mappings().first()
        if prior:
            if prior["status"] in {"RESERVED", "SETTLED"}:
                return {**dict(prior), "requested_amount": _dec(prior["requested_amount"]), "idempotent": True}
            # A failed/released attempt is terminal, but an explicit retry must
            # be able to obtain a fresh reservation without rewriting history.
            idempotency_key = f"{idempotency_key}:retry:{uuid4().hex[:12]}"
    wallets = [NORMAL, CHATBOT_RESERVED] if allow_reserved else [NORMAL]
    if allow_reserved and feature not in {"SALES_ASSISTANT", "PUBLIC_SITE_ASSISTANT"}:
        raise HTTPException(403, "Reserved chatbot credits are restricted to published-site assistant requests")
    for wallet_type in wallets:
        balance_col, held_col = _available_expr(wallet_type)
        for _ in range(8):
            row = db.execute(text(f"SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": account_id}).mappings().first()
            if not row:
                raise HTTPException(409, "Credit wallet is unavailable")
            balance = _dec(row[balance_col]); held = _dec(row[held_col]); available = quantize_credits(balance - held)
            if available < amount:
                break
            changed = db.execute(text(f"UPDATE credit_wallets SET {held_col}={held_col}+CAST(:amount AS NUMERIC),legacy_normal_snapshot=monthly_remaining+signup_remaining+topup_remaining,updated_at=:n WHERE user_id=:u AND {held_col}=CAST(:held AS NUMERIC) AND {balance_col} - {held_col} >= CAST(:amount AS NUMERIC)"), {
                "amount": str(amount), "n": now_iso(), "u": account_id, "held": str(held),
            })
            if changed.rowcount != 1:
                continue
            rid = str(uuid4()); expires = (datetime.now(timezone.utc) + timedelta(seconds=int(get_system_setting("ai_reservation_ttl_seconds", "900") or 900))).isoformat()
            try:
                # Keep a uniqueness race (usually an idempotency-key replay)
                # inside a savepoint so the surrounding wallet transaction
                # remains usable when we inspect the winning reservation.
                with db.begin_nested():
                    db.execute(text("""INSERT INTO ai_credit_reservations(id,account_id,user_id,site_id,feature,wallet_type,requested_amount,status,operation_id,request_id,idempotency_key,provider,model,expires_at,created_at)
                      VALUES (:id,:account,:user,:site,:feature,:wallet,:amount,'RESERVED',:operation,:request,:idem,:provider,:model,:expires,:created)"""), {
                        "id": rid, "account": account_id, "user": user_id or account_id, "site": site_id,
                        "feature": feature, "wallet": wallet_type, "amount": str(amount), "operation": operation_id,
                        "request": request_id, "idem": idempotency_key, "provider": provider, "model": model,
                        "expires": expires, "created": now_iso(),
                    })
            except IntegrityError:
                if idempotency_key:
                    prior = db.execute(text("SELECT * FROM ai_credit_reservations WHERE account_id=:a AND idempotency_key=:k"), {"a": account_id, "k": idempotency_key}).mappings().first()
                    db.execute(text(f"UPDATE credit_wallets SET {held_col}={held_col}-:amount,updated_at=:n WHERE user_id=:u"), {"amount": str(amount), "n": now_iso(), "u": account_id})
                    if prior:
                        return {**dict(prior), "requested_amount": _dec(prior["requested_amount"]), "idempotent": True}
                raise
            _insert_ledger(db, account_id=account_id, user_id=user_id or account_id, site_id=site_id, feature=feature, wallet_type=wallet_type, entry_type="AI_RESERVATION", amount=-amount, balance_before=available, balance_after=quantize_credits(available - amount), operation_id=operation_id, request_id=request_id, reservation_id=rid, idempotency_key=idempotency_key, provider=provider, model=model)
            return {"id": rid, "reservation_id": rid, "account_id": account_id, "wallet_type": wallet_type, "feature": feature, "requested_amount": amount, "operation_id": operation_id, "request_id": request_id, "idempotent": False}
    if allow_reserved:
        return None
    available = wallet_snapshot(db, account_id, plan).get("normal_available", 0)
    raise HTTPException(402, detail={"code": "AI_CREDITS_EXHAUSTED", "required": public_decimal(amount), "available": available, "credit_type": "ai"})


def settle_ai_operation(db, reservation: dict | str, actual_credits: Any, *, provider_cost_micros: int = 0,
                        customer_usage_value_micros: int = 0, provider: str | None = None,
                        model: str | None = None, pricing_version: str | None = None,
                        input_units: int = 0, cached_input_units: int = 0, output_units: int = 0,
                        metadata: dict | None = None) -> dict:
    rid = reservation.get("reservation_id") if isinstance(reservation, dict) else reservation
    row = db.execute(text("SELECT * FROM ai_credit_reservations WHERE id=:i"), {"i": rid}).mappings().first()
    if not row:
        raise HTTPException(404, "AI credit reservation not found")
    if row["status"] == "SETTLED":
        return {**dict(row), "idempotent": True, "settled_amount": _dec(row["settled_amount"])}
    if row["status"] in {"RELEASED", "EXPIRED"}:
        raise HTTPException(409, "AI credit reservation is no longer active")
    requested = quantize_credits(row["requested_amount"]); actual = max(_ZERO, quantize_credits(actual_credits)); charge = min(actual, requested)
    wallet_type = row["wallet_type"]; balance_col, held_col = _available_expr(wallet_type)
    wallet = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": row["account_id"]}).mappings().first()
    before_available = quantize_credits(_dec(wallet[balance_col]) - _dec(wallet[held_col]))
    released = quantize_credits(requested - charge)
    changed = db.execute(text(f"UPDATE credit_wallets SET {balance_col}={balance_col}-CAST(:charge AS NUMERIC),{held_col}={held_col}-CAST(:requested AS NUMERIC),legacy_normal_snapshot=monthly_remaining+signup_remaining+topup_remaining,updated_at=:n WHERE user_id=:u AND {held_col}>=CAST(:requested AS NUMERIC)"), {
        "charge": str(charge), "requested": str(requested), "n": now_iso(), "u": row["account_id"],
    })
    if changed.rowcount != 1:
        raise HTTPException(409, "AI credit reservation changed concurrently")
    status_changed = db.execute(text("UPDATE ai_credit_reservations SET settled_amount=:charge,released_amount=:released,status='SETTLED',settled_at=:n WHERE id=:i AND status='RESERVED'"), {
        "charge": str(charge), "released": str(released), "n": now_iso(), "i": rid,
    }).rowcount
    # Another worker may have settled this reservation after our initial read.
    # Abort the transaction so the wallet mutation above is rolled back rather
    # than allowing a second settlement to create a double debit.
    if status_changed != 1:
        raise HTTPException(409, "AI credit reservation was settled concurrently")
    # ``before_available`` excludes this reservation's held amount.  Settling
    # consumes ``charge`` from the wallet balance and releasing the hold adds
    # back the unused portion; the net available balance is therefore the
    # pre-settlement available amount plus only the released amount.  Charging
    # the actual amount a second time here would create a silent double debit.
    after_available = quantize_credits(before_available + released)
    common = dict(account_id=row["account_id"], user_id=row["user_id"], site_id=row["site_id"], feature=row["feature"], wallet_type=wallet_type, operation_id=row["operation_id"], request_id=row["request_id"], reservation_id=rid, idempotency_key=row["idempotency_key"], provider=provider or row["provider"], model=model or row["model"], pricing_version=pricing_version, input_units=input_units, cached_input_units=cached_input_units, output_units=output_units, provider_cost_micros=provider_cost_micros, customer_usage_value_micros=customer_usage_value_micros, metadata=metadata)
    if charge > _ZERO:
        _insert_ledger(db, entry_type="AI_SETTLEMENT", amount=-charge, balance_before=before_available, balance_after=quantize_credits(before_available - charge), idempotency_key=(str(row["idempotency_key"])+":settlement") if row["idempotency_key"] else None, **{k:v for k,v in common.items() if k!='idempotency_key'})
    if released > _ZERO:
        _insert_ledger(db, entry_type="AI_RESERVATION_RELEASE", amount=released, balance_before=quantize_credits(before_available - charge), balance_after=after_available, idempotency_key=(str(row["idempotency_key"])+":release") if row["idempotency_key"] else None, **{k:v for k,v in common.items() if k!='idempotency_key'})
    _sync_user_projection(db, row["account_id"], _dec(wallet["normal_balance"]) - (charge if wallet_type == NORMAL else _ZERO))
    return {**dict(row), "status": "SETTLED", "settled_amount": charge, "released_amount": released, "idempotent": False}


def release_ai_operation(db, reservation: dict | str, reason: str = "released") -> dict:
    rid = reservation.get("reservation_id") if isinstance(reservation, dict) else reservation
    row = db.execute(text("SELECT * FROM ai_credit_reservations WHERE id=:i"), {"i": rid}).mappings().first()
    if not row:
        raise HTTPException(404, "AI credit reservation not found")
    if row["status"] == "RELEASED":
        return {**dict(row), "idempotent": True}
    if row["status"] != "RESERVED":
        return {**dict(row), "idempotent": True}
    _, held_col = _available_expr(row["wallet_type"])
    amount = quantize_credits(row["requested_amount"])
    changed = db.execute(text(f"UPDATE credit_wallets SET {held_col}={held_col}-CAST(:amount AS NUMERIC),legacy_normal_snapshot=monthly_remaining+signup_remaining+topup_remaining,updated_at=:n WHERE user_id=:u AND {held_col}>=CAST(:amount AS NUMERIC)"), {"amount": str(amount), "n": now_iso(), "u": row["account_id"]})
    if changed.rowcount != 1:
        raise HTTPException(409, "AI credit reservation changed concurrently")
    status_changed = db.execute(text("UPDATE ai_credit_reservations SET released_amount=:amount,status='RELEASED',released_at=:n WHERE id=:i AND status='RESERVED'"), {"amount": str(amount), "n": now_iso(), "i": rid}).rowcount
    if status_changed != 1:
        raise HTTPException(409, "AI credit reservation was released concurrently")
    wallet = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": row["account_id"]}).mappings().first()
    available = quantize_credits(_dec(wallet[_available_expr(row["wallet_type"])[0]]) - _dec(wallet[held_col]))
    _insert_ledger(db, account_id=row["account_id"], user_id=row["user_id"], site_id=row["site_id"], feature=row["feature"], wallet_type=row["wallet_type"], entry_type="AI_RESERVATION_RELEASE", amount=amount, balance_before=quantize_credits(available - amount), balance_after=available, operation_id=row["operation_id"], request_id=row["request_id"], reservation_id=rid, idempotency_key=(str(row["idempotency_key"])+":release") if row["idempotency_key"] else None, metadata={"reason": reason})
    return {**dict(row), "status": "RELEASED", "released_amount": amount, "idempotent": False}


def recover_expired_reservations(db, *, account_id: str | None = None, limit: int = 100) -> int:
    """Release stale holds so a crashed worker cannot strand wallet credits."""
    params = {"now": datetime.now(timezone.utc).isoformat(), "limit": max(1, min(500, int(limit)))}
    where = "status='RESERVED' AND expires_at<:now"
    if account_id:
        where += " AND account_id=:account"; params["account"] = account_id
    ids = [str(r[0]) for r in db.execute(text(f"SELECT id FROM ai_credit_reservations WHERE {where} ORDER BY expires_at LIMIT :limit"), params).all()]
    for rid in ids:
        release_ai_operation(db, rid, "reservation_ttl_expired")
    return len(ids)


def provider_cost_to_credits_decimal(cost_micros: int, *, multiplier: Any | None = None, credits_per_usd: Any | None = None) -> Decimal:
    cost = max(0, int(cost_micros or 0))
    mult = _dec(multiplier if multiplier is not None else get_system_setting("ai_cost_multiplier", "1"), Decimal("1"))
    rate = _dec(credits_per_usd if credits_per_usd is not None else get_system_setting("ai_credits_per_usd", "100"), Decimal("100"))
    if cost == 0 or mult <= 0 or rate <= 0:
        return _ZERO
    return quantize_credits((Decimal(cost) / Decimal(1_000_000)) * mult * rate)


def pricing_for(db, provider: str, model: str) -> dict | None:
    row = db.execute(text("SELECT * FROM ai_pricing_versions WHERE provider=:p AND model=:m AND active=1 ORDER BY effective_at DESC LIMIT 1"), {"p": provider, "m": model}).mappings().first()
    return dict(row) if row else None


def calculate_provider_cost(db, *, provider: str = "openai", model: str, input_units: int = 0, output_units: int = 0, cached_input_units: int = 0) -> dict:
    price = pricing_for(db, provider, model)
    if not price:
        raise ValueError(f"No active pricing version configured for {provider}/{model}")
    inp = max(0, int(input_units or 0)); out = max(0, int(output_units or 0)); cached = max(0, int(cached_input_units or 0))
    total = (Decimal(inp) * Decimal(int(price["input_usd_micros_per_million"] or 0)) + Decimal(cached) * Decimal(int(price["cached_input_usd_micros_per_million"] or 0)) + Decimal(out) * Decimal(int(price["output_usd_micros_per_million"] or 0))) / Decimal(1_000_000)
    micros = int(total.to_integral_value(rounding=ROUND_HALF_UP))
    multiplier = _dec(get_system_setting("ai_cost_multiplier", "1"), Decimal("1"))
    customer_value = int((Decimal(micros) * multiplier).to_integral_value(rounding=ROUND_HALF_UP))
    return {"provider": provider, "model": model, "pricing_version": price["pricing_version"], "input_units": inp, "cached_input_units": cached, "output_units": out, "provider_cost_micros": micros, "customer_usage_value_micros": customer_value, "credits": provider_cost_to_credits_decimal(micros, multiplier=multiplier)}


def usage_summary(db, account_id: str, *, since: str | None = None) -> dict:
    where = "account_id=:a AND entry_type='AI_SETTLEMENT'"
    params = {"a": account_id}
    if since:
        where += " AND created_at>=:since"; params["since"] = since
    rows = db.execute(text(f"SELECT feature,SUM(CASE WHEN amount<0 THEN -amount ELSE 0 END) AS credits,COUNT(*) AS requests FROM ai_credit_ledger WHERE {where} GROUP BY feature ORDER BY feature"), params).mappings().all()
    total = sum((_dec(r["credits"]) for r in rows), _ZERO)
    return {"total": public_decimal(total), "by_feature": [{"feature": r["feature"], "credits": public_decimal(_dec(r["credits"])), "requests": int(r["requests"] or 0)} for r in rows]}


def transaction_history(db, account_id: str, limit: int = 100) -> list[dict]:
    rows = db.execute(text("SELECT created_at,feature,wallet_type,entry_type,amount,provider_cost_usd_micros,customer_usage_value_usd_micros,operation_id,request_id FROM ai_credit_ledger WHERE account_id=:a ORDER BY created_at DESC LIMIT :limit"), {"a": account_id, "limit": max(1, min(500, int(limit)))}).mappings().all()
    return [{**dict(r), "amount": public_decimal(_dec(r["amount"]))} for r in rows]


def reconcile_wallet(db, account_id: str) -> dict:
    """Reconcile stored wallet balances and holds against immutable history.

    Reservation/release rows describe holds and are intentionally excluded from
    the balance equation; only allocation, purchase, adjustment, renewal,
    settlement and refund rows change the wallet's total balance.  The result
    is diagnostic-only and never mutates history or balances.
    """
    wallet = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": account_id}).mappings().first()
    if not wallet:
        return {"account_id": account_id, "ok": True, "wallet": None, "wallets": {}, "anomalies": []}
    rows = db.execute(text("""SELECT wallet_type,entry_type,amount
      FROM ai_credit_ledger WHERE account_id=:a"""), {"a": account_id}).mappings().all()
    balance_entries = {
        "PLAN_ALLOCATION", "PLAN_RENEWAL", "PURCHASE", "ADMIN_ADJUSTMENT",
        "AI_REFUND", "AI_CREDIT_PURCHASE", "CHATBOT_RESERVE_ALLOCATION",
        "CHATBOT_RESERVE_RESET", "AI_SETTLEMENT",
    }
    expected = {NORMAL: _ZERO, CHATBOT_RESERVED: _ZERO}
    for row in rows:
        if str(row.get("entry_type") or "") in balance_entries:
            expected[str(row.get("wallet_type") or NORMAL)] = expected.get(str(row.get("wallet_type") or NORMAL), _ZERO) + _dec(row.get("amount"))
    holds = db.execute(text("""SELECT wallet_type,COALESCE(SUM(requested_amount),0) AS held
      FROM ai_credit_reservations WHERE account_id=:a AND status='RESERVED' GROUP BY wallet_type"""), {"a": account_id}).mappings().all()
    expected_holds = {NORMAL: _ZERO, CHATBOT_RESERVED: _ZERO}
    for row in holds:
        expected_holds[str(row.get("wallet_type") or NORMAL)] = quantize_credits(_dec(row.get("held")))
    stored = {
        NORMAL: quantize_credits(_dec(wallet.get("normal_balance"))),
        CHATBOT_RESERVED: quantize_credits(_dec(wallet.get("chatbot_reserved_balance"))),
    }
    stored_holds = {
        NORMAL: quantize_credits(_dec(wallet.get("normal_reserved"))),
        CHATBOT_RESERVED: quantize_credits(_dec(wallet.get("chatbot_reserved_held"))),
    }
    wallets = {}
    anomalies = []
    for wallet_type in (NORMAL, CHATBOT_RESERVED):
        balance_delta = quantize_credits(stored[wallet_type] - expected[wallet_type])
        hold_delta = quantize_credits(stored_holds[wallet_type] - expected_holds[wallet_type])
        wallets[wallet_type] = {
            "stored_balance": public_decimal(stored[wallet_type]),
            "ledger_balance": public_decimal(expected[wallet_type]),
            "balance_delta": public_decimal(balance_delta),
            "stored_held": public_decimal(stored_holds[wallet_type]),
            "reservation_held": public_decimal(expected_holds[wallet_type]),
            "held_delta": public_decimal(hold_delta),
            "available": public_decimal(max(_ZERO, stored[wallet_type] - stored_holds[wallet_type])),
        }
        if balance_delta != _ZERO:
            anomalies.append(f"{wallet_type} balance differs from ledger by {balance_delta}")
        if hold_delta != _ZERO:
            anomalies.append(f"{wallet_type} held amount differs from active reservations by {hold_delta}")
        if stored[wallet_type] < _ZERO or stored_holds[wallet_type] < _ZERO or stored_holds[wallet_type] > stored[wallet_type]:
            anomalies.append(f"{wallet_type} has an impossible negative or over-held balance")
    impossible = db.execute(text("""SELECT id,status,wallet_type FROM ai_credit_reservations
      WHERE account_id=:a AND ((status='SETTLED' AND settled_amount=0 AND requested_amount>0)
        OR (status IN ('RELEASED','EXPIRED') AND released_amount=0 AND requested_amount>0))"""), {"a": account_id}).mappings().all()
    if impossible:
        anomalies.append(f"{len(impossible)} reservation lifecycle rows need review")
    return {"account_id": account_id, "ok": not anomalies, "wallet": dict(wallet), "wallets": wallets, "anomalies": anomalies}


def adjust_wallet(db, *, account_id: str, plan: str, amount: Any, wallet_type: str,
                  feature: str = "ADMIN_ADJUSTMENT", reason: str, actor_id: str,
                  site_id: str | None = None, entry_type: str = "ADMIN_ADJUSTMENT") -> dict:
    if not reason or len(reason.strip()) < 3:
        raise HTTPException(422, "A reason is required for credit adjustments")
    if wallet_type not in {NORMAL, CHATBOT_RESERVED}:
        raise HTTPException(422, "Unknown wallet type")
    amount_d = quantize_credits(amount)
    if ensure_ai_wallet(db, account_id, plan) is None:
        raise HTTPException(409, "Managed/contact-only accounts do not have an AI credit wallet")
    balance_col, held_col = _available_expr(wallet_type)
    if entry_type not in {"ADMIN_ADJUSTMENT", "AI_REFUND", "AI_CREDIT_PURCHASE"}:
        raise HTTPException(422, "Unknown credit adjustment entry type")
    for _ in range(8):
        row = db.execute(text("SELECT * FROM credit_wallets WHERE user_id=:u"), {"u": account_id}).mappings().first()
        balance = _dec(row[balance_col]); held = _dec(row[held_col]); available = quantize_credits(balance - held)
        if amount_d < _ZERO and available + amount_d < _ZERO:
            raise HTTPException(409, "Adjustment would make the wallet negative")
        new_balance = quantize_credits(balance + amount_d)
        changed = db.execute(text(f"UPDATE credit_wallets SET {balance_col}=CAST(:b AS NUMERIC),updated_at=:n WHERE user_id=:u AND {balance_col}=CAST(:old AS NUMERIC) AND {held_col}=CAST(:held AS NUMERIC)"), {
            "b": str(new_balance), "old": str(balance), "held": str(held), "n": now_iso(), "u": account_id,
        }).rowcount
        if changed != 1:
            continue
        _insert_ledger(db, account_id=account_id, user_id=account_id, site_id=site_id, feature=feature, wallet_type=wallet_type, entry_type=entry_type, amount=amount_d, balance_before=available, balance_after=quantize_credits(available + amount_d), metadata={"reason": reason, "actor_id": actor_id})
        _sync_user_projection(db, account_id, new_balance)
        return {"wallet_type": wallet_type, "amount": public_decimal(amount_d), "balance": public_decimal(new_balance), "reason": reason, "actor_id": actor_id}
    raise HTTPException(409, "Credit wallet changed concurrently; retry safely")
