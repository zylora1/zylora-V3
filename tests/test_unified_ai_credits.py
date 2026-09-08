from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from decimal import Decimal
from uuid import uuid4

import pytest
from fastapi import HTTPException
from fastapi.testclient import TestClient
from sqlalchemy import text
from sqlalchemy.exc import OperationalError

from app.ai_billing import (
    CHATBOT_RESERVED,
    NORMAL,
    calculate_provider_cost,
    feature_reservation_budget,
    provider_cost_to_credits_decimal,
    reconcile_wallet,
    release_ai_operation,
    reserve_ai_operation,
    settle_ai_operation,
    transaction_history,
    usage_summary,
    wallet_snapshot,
)
from app.credits import grant_topup
from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits


def _signup() -> tuple[str, str]:
    """Create an isolated, verified Free account through the public API."""
    clear_rate_limits()
    with SessionLocal.begin() as db:
        db.execute(text("DELETE FROM rate_limit_buckets"))
    client = TestClient(app)
    email = f"unified-{uuid4().hex}@example.com"
    result = client.post(
        "/api/auth/signup",
        json={"name": "Unified Credit Test", "email": email, "password": "SecurePass123!"},
    )
    assert result.status_code == 200, result.text
    payload = result.json()
    verify = client.post(
        "/api/auth/email/verify",
        json={"token": payload["debug_verification_token"]},
    )
    assert verify.status_code == 200, verify.text
    csrf = payload["csrf_token"]
    selected = client.post(
        "/api/billing/select",
        headers={"X-CSRF-Token": csrf},
        json={"plan": "FREE"},
    )
    assert selected.status_code == 200, selected.text
    me = client.get("/api/auth/me")
    assert me.status_code == 200, me.text
    return me.json()["id"], csrf


def _set_wallet(user_id: str, *, normal: str, reserve: str) -> None:
    with SessionLocal.begin() as db:
        db.execute(
            text("""UPDATE credit_wallets
                SET normal_balance=CAST(:normal AS NUMERIC), normal_reserved=0,
                    chatbot_reserved_balance=CAST(:reserve AS NUMERIC), chatbot_reserved_held=0,
                    legacy_normal_snapshot=CAST(monthly_remaining+signup_remaining+topup_remaining AS NUMERIC)
                WHERE user_id=:user_id"""),
            {"normal": normal, "reserve": reserve, "user_id": user_id},
        )


def test_cost_conversion_and_model_pricing_are_decimal_and_configurable():
    assert provider_cost_to_credits_decimal(10_000) == Decimal("1.000000")
    assert provider_cost_to_credits_decimal(100_000) == Decimal("10.000000")
    assert provider_cost_to_credits_decimal(1_000_000) == Decimal("100.000000")
    assert provider_cost_to_credits_decimal(10_000, multiplier="1.4") == Decimal("1.400000")

    migrate()
    with SessionLocal() as db:
        priced = calculate_provider_cost(
            db,
            provider="openai",
            model="gpt-4o-mini",
            input_units=1_000_000,
            output_units=0,
        )
    assert priced["provider_cost_micros"] == 150_000
    assert priced["credits"] == Decimal("15.000000")
    assert priced["pricing_version"]


def test_normal_reservation_settlement_releases_fractional_unused_amount_and_is_idempotent():
    user_id, _ = _signup()
    _set_wallet(user_id, normal="10", reserve="7")
    with SessionLocal.begin() as db:
        reservation = reserve_ai_operation(
            db,
            account_id=user_id,
            user_id=user_id,
            plan="FREE",
            estimated_credits="3.25",
            feature="AI_EDITOR",
            operation_id="editor-operation-1",
            request_id="editor-request-1",
            idempotency_key="editor-idem-1",
        )
        assert reservation["wallet_type"] == NORMAL
        assert reservation["requested_amount"] == Decimal("3.250000")

    with SessionLocal.begin() as db:
        settled = settle_ai_operation(
            db,
            reservation,
            "1.82",
            provider_cost_micros=18_200,
            customer_usage_value_micros=18_200,
            provider="openai",
            model="gpt-4o-mini",
        )
        assert settled["settled_amount"] == Decimal("1.820000")
        assert settled["released_amount"] == Decimal("1.430000")

    with SessionLocal() as db:
        snapshot = wallet_snapshot(db, user_id, "FREE")
        assert snapshot["normal_available"] == 8.18
        assert snapshot["normal_reserved"] == 0
        summary = usage_summary(db, user_id)
        assert summary["total"] == 1.82
        history = transaction_history(db, user_id)
        assert {item["entry_type"] for item in history} >= {
            "AI_RESERVATION",
            "AI_SETTLEMENT",
            "AI_RESERVATION_RELEASE",
        }

    with SessionLocal.begin() as db:
        again = settle_ai_operation(db, reservation, "99")
        assert again["idempotent"] is True
        assert again["settled_amount"] == Decimal("1.820000")


def test_chatbot_uses_normal_first_then_reserved_and_reserved_is_feature_scoped():
    user_id, _ = _signup()
    _set_wallet(user_id, normal="0.2", reserve="5")
    with SessionLocal.begin() as db:
        with pytest.raises(HTTPException) as blocked:
            reserve_ai_operation(
                db,
                account_id=user_id,
                user_id=user_id,
                plan="FREE",
                estimated_credits="1.5",
                feature="AI_EDITOR",
                allow_reserved=True,
            )
        assert blocked.value.status_code == 403

        reservation = reserve_ai_operation(
            db,
            account_id=user_id,
            user_id=user_id,
            plan="FREE",
            estimated_credits="1.5",
            feature="SALES_ASSISTANT",
            operation_id="assistant-operation-1",
            request_id="assistant-request-1",
            idempotency_key="assistant-idem-1",
            allow_reserved=True,
        )
        assert reservation["wallet_type"] == CHATBOT_RESERVED

    with SessionLocal.begin() as db:
        settle_ai_operation(db, reservation, "1.25")
        snapshot = wallet_snapshot(db, user_id, "FREE")
        assert snapshot["normal_available"] == 0.2
        assert snapshot["chatbot_reserved_available"] == 3.75


def test_reserve_release_is_idempotent_and_billing_cycle_resets_reserve_without_rollover():
    user_id, _ = _signup()
    _set_wallet(user_id, normal="4", reserve="50")
    with SessionLocal.begin() as db:
        reservation = reserve_ai_operation(
            db,
            account_id=user_id,
            user_id=user_id,
            plan="FREE",
            estimated_credits="2",
            feature="SALES_ASSISTANT",
            allow_reserved=True,
        )
        release = release_ai_operation(db, reservation, "provider_rejected")
        assert release["status"] == "RELEASED"
        duplicate = release_ai_operation(db, reservation, "duplicate")
        assert duplicate["idempotent"] is True
        assert wallet_snapshot(db, user_id, "FREE")["normal_available"] == 4
        db.execute(
            text("UPDATE credit_wallets SET cycle_key='2000-01', period_key='2000-01' WHERE user_id=:u"),
            {"u": user_id},
        )
        reset = wallet_snapshot(db, user_id, "FREE")
        assert reset["chatbot_reserved_available"] == 20


def test_concurrent_normal_reservations_cannot_overdraw_wallet():
    """The database compare-and-update admits only the available reservations."""
    user_id, _ = _signup()
    _set_wallet(user_id, normal="5", reserve="0")

    def attempt(index: int):
        # SQLite fixtures can briefly report a write lock while parallel
        # workers are committing. Retry that environmental transient so the
        # assertion exercises the wallet CAS rather than lock timing.
        for _ in range(5):
            try:
                with SessionLocal.begin() as db:
                    reservation = reserve_ai_operation(
                        db,
                        account_id=user_id,
                        user_id=user_id,
                        plan="FREE",
                        estimated_credits="2",
                        feature="AI_EDITOR",
                        operation_id=f"concurrent-operation-{index}",
                        request_id=f"concurrent-request-{index}",
                    )
                    return ("reserved", reservation["reservation_id"])
            except HTTPException as exc:
                if exc.status_code != 402:
                    raise
                return ("blocked", None)
            except OperationalError as exc:
                if "locked" not in str(exc).lower():
                    raise
        return ("lock-timeout", None)

    with ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(attempt, range(4)))

    reservations = [value for status, value in results if status == "reserved"]
    assert len(reservations) == 2
    assert all(status in {"reserved", "blocked", "lock-timeout"} for status, _ in results)
    with SessionLocal.begin() as db:
        snapshot = wallet_snapshot(db, user_id, "FREE")
        assert snapshot["normal_available"] == 1
        for reservation_id in reservations:
            release_ai_operation(db, reservation_id, "concurrency-test-cleanup")


def test_ai_topup_enters_normal_wallet_and_not_chatbot_reserve():
    user_id, _ = _signup()
    with SessionLocal.begin() as db:
        before = wallet_snapshot(db, user_id, "FREE")
        grant_topup(user_id, 40, "ai", db=db)
        after = wallet_snapshot(db, user_id, "FREE")
        assert after["normal_available"] == before["normal_available"] + 40
        assert after["chatbot_reserved_available"] == before["chatbot_reserved_available"]
        purchase = db.execute(
            text("SELECT entry_type,wallet_type,amount FROM ai_credit_ledger WHERE account_id=:u AND feature='PURCHASE'"),
            {"u": user_id},
        ).mappings().first()
        assert purchase and purchase["entry_type"] == "PURCHASE" and purchase["wallet_type"] == NORMAL
        assert reconcile_wallet(db, user_id)["ok"] is True


def test_provider_reservation_budget_is_server_capped_and_multiplier_aware():
    user_id, _ = _signup()
    migrate()
    with SessionLocal.begin() as db:
        baseline = feature_reservation_budget(
            db, feature="AI_EDIT", provider="openai", model="gpt-4o-mini",
        )
        db.execute(text("UPDATE system_settings SET value='1.4',updated_at=CURRENT_TIMESTAMP WHERE key='ai_cost_multiplier'"))
    with SessionLocal() as db:
        marked_up = feature_reservation_budget(
            db, feature="AI_EDIT", provider="openai", model="gpt-4o-mini",
        )
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE system_settings SET value='1',updated_at=CURRENT_TIMESTAMP WHERE key='ai_cost_multiplier'"))
    assert baseline > Decimal("0")
    assert marked_up > baseline
    # The global input/output caps must not expand the feature's own bounds.
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE system_settings SET value='1',updated_at=CURRENT_TIMESTAMP WHERE key='ai_provider_input_token_cap'"))
    with SessionLocal() as db:
        capped = feature_reservation_budget(db, feature="AI_EDIT", provider="openai", model="gpt-4o-mini")
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE system_settings SET value='100000',updated_at=CURRENT_TIMESTAMP WHERE key='ai_provider_input_token_cap'"))
    assert capped < baseline


def test_reconciliation_detects_balance_tampering_without_mutating_history():
    user_id, _ = _signup()
    with SessionLocal() as db:
        clean = reconcile_wallet(db, user_id)
    assert clean["ok"] is True
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE credit_wallets SET normal_balance=normal_balance+CAST('1' AS NUMERIC) WHERE user_id=:u"), {"u": user_id})
    with SessionLocal() as db:
        tampered = reconcile_wallet(db, user_id)
        ledger_count = db.execute(text("SELECT count(*) FROM ai_credit_ledger WHERE account_id=:u"), {"u": user_id}).scalar_one()
    assert tampered["ok"] is False
    assert any("NORMAL balance differs" in item for item in tampered["anomalies"])
    assert ledger_count >= 1
