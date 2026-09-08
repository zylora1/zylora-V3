"""Dedicated browser certification for the unified AI-credit lifecycle.

The script uses an isolated SQLite fixture and a deterministic provider stub;
the production PostgreSQL/OpenAI gates remain separate and are never faked by
this test.  Select an engine with ``ZYLORA_BROWSER=chromium|firefox|webkit``.
"""
from __future__ import annotations

import base64
import json
import os
import shutil
import sys
import tempfile
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT = Path(__file__).resolve().parents[1]
ISOLATED = Path(tempfile.mkdtemp(prefix="zylora-ai-credit-e2e-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(ISOLATED / 'e2e.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(ISOLATED / "media")
sys.path.insert(0, str(ROOT))

from app.config import settings  # noqa: E402
from app.db import SessionLocal, migrate  # noqa: E402
from app.main import app  # noqa: E402


def bridge(client: TestClient):
    def invoke(payload: dict[str, Any]):
        url = str(payload.get("url") or "/")
        path = urlparse(url).path or "/"
        if urlparse(url).query:
            path += "?" + urlparse(url).query
        method = str(payload.get("method") or "GET").upper()
        headers = {str(k): str(v) for k, v in (payload.get("headers") or {}).items()}
        if "cookie" not in {k.lower() for k in headers}:
            cookies = "; ".join(f"{key}={value}" for key, value in client.cookies.items())
            if cookies:
                headers["Cookie"] = cookies
        body = payload.get("body")
        response = client.request(method, path, headers=headers, content=body.encode() if isinstance(body, str) else body)
        try:
            body_text = response.content.decode(response.encoding or "utf-8")
        except Exception:
            body_text = response.content.decode("utf-8", errors="replace")
        return {"status": response.status_code, "headers": {"Content-Type": response.headers.get("content-type", "application/json")}, "body": body_text}
    return invoke


def bootstrap() -> str:
    return r'''(() => {
      const store = {};
      Object.defineProperty(window, 'sessionStorage', {value: {
        getItem: k => Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null,
        setItem: (k,v) => store[k] = String(v), removeItem: k => delete store[k], clear: () => {}
      }});
      window.fetch = async (url, opts = {}) => {
        const headers = {};
        if (opts.headers instanceof Headers) opts.headers.forEach((v,k) => headers[k] = v);
        else if (opts.headers) Object.assign(headers, opts.headers);
        const result = await window.__backendFetch({url: String(url), method: String(opts.method || 'GET'), headers, body: opts.body == null ? null : String(opts.body)});
        return new Response(result.body, {status: result.status, headers: result.headers});
      };
    })();'''


def signup(client: TestClient) -> tuple[str, dict[str, str]]:
    response = client.post("/api/auth/signup", json={"name": "Credit Browser", "email": "credit-browser@example.com", "password": "SecurePass123!"})
    assert response.status_code == 200, response.text
    payload = response.json()
    assert client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]}).status_code == 200
    csrf = payload["csrf_token"]
    assert client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"}).status_code == 200
    return client.get("/api/auth/me").json()["id"], {"X-CSRF-Token": csrf}


def main() -> None:
    print("AI credit browser E2E: migrate", flush=True)
    migrate()
    client = TestClient(app)
    print("AI credit browser E2E: signup", flush=True)
    user_id, csrf = signup(client)
    created = client.post("/api/sites", headers=csrf, json={"business_name": "Credit Browser Site", "description": "A local fixture for AI credit browser certification.", "origin": "AI", "industry": "Consulting", "style": "Editorial"})
    print(f"AI credit browser E2E: creator status={created.status_code}", flush=True)
    assert created.status_code == 200, created.text
    site_id = created.json()["id"]
    assert client.post(f"/api/sites/{site_id}/publish", headers=csrf).status_code == 200

    # Deterministic provider usage lets the browser journey exercise reserve /
    # settlement without sending a real request.  Live OpenAI evidence is a
    # separate explicitly-blocked-or-passed release gate.
    import app.sales_assistant as sales_assistant
    old_key, old_env, old_completion = settings.openai_api_key, settings.app_env, sales_assistant.sales_assistant_completion
    settings.openai_api_key = "e2e-provider-stub"
    settings.app_env = "production"
    calls = {"count": 0}
    def fake_completion(**kwargs):
        calls["count"] += 1
        return {"answer": "Stubbed, grounded assistant response.", "input_tokens": 120, "output_tokens": 24, "model": "gpt-4o-mini"}
    sales_assistant.sales_assistant_completion = fake_completion
    try:
        with SessionLocal.begin() as db:
            db.execute(text("UPDATE credit_wallets SET normal_balance=CAST('5' AS NUMERIC), normal_reserved=0, chatbot_reserved_balance=0, chatbot_reserved_held=0 WHERE user_id=:u"), {"u": user_id})

        html = '''<!doctype html><html><body><main>
          <h1>AI Credits</h1><output id="normal"></output><output id="reserve"></output><output id="status"></output>
          <button id="refresh" type="button">Refresh</button>
          </main></body></html>'''
        engine_name = os.getenv("ZYLORA_BROWSER", "chromium").strip().lower()
        if engine_name not in {"chromium", "firefox", "webkit"}:
            raise ValueError("ZYLORA_BROWSER must be chromium, firefox, or webkit")
        checks: list[str] = []
        with sync_playwright() as pw:
            engine = getattr(pw, engine_name)
            browser = engine.launch(headless=True, args=["--no-sandbox"] if engine_name == "chromium" else [])
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            page.expose_function("__backendFetch", bridge(client))
            page.on("pageerror", lambda exc: print(f"browser page error: {exc}", flush=True))
            page.set_content(html, wait_until="load")
            page.evaluate(bootstrap())
            page.evaluate("""async () => {
              window.refresh = async () => {
                const r = await fetch('http://testserver/api/ai-credits');
                const j = await r.json();
                document.getElementById('normal').textContent = j.wallet.normal_available;
                document.getElementById('reserve').textContent = j.wallet.chatbot_reserved_available;
                return j;
              };
              document.getElementById('refresh').addEventListener('click', window.refresh);
              return window.refresh();
            }""")
            page.wait_for_function("document.querySelector('#normal').textContent !== ''")
            assert page.locator("#normal").inner_text() == "5"; checks.append("dashboard shows starting NORMAL balance")

            conv = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "credit-browser-session"}).json()["id"]
            before_calls = calls["count"]
            first = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conv}/messages", headers={"Idempotency-Key": "browser-normal-1"}, json={"message": "Tell me about services."})
            assert first.status_code == 200 and not first.json().get("credit_exhausted"); checks.append("chatbot consumes NORMAL first")
            with SessionLocal() as db:
                mode = db.execute(text("SELECT wallet_type FROM ai_credit_ledger WHERE account_id=:u AND entry_type='AI_SETTLEMENT' ORDER BY created_at DESC LIMIT 1"), {"u": user_id}).scalar_one()
                assert mode == "NORMAL"
            page.locator("#refresh").click(); page.wait_for_function("document.querySelector('#normal').textContent !== '5'")
            assert page.locator("#normal").inner_text() != "5"; checks.append("dashboard reflects settled usage")

            with SessionLocal.begin() as db:
                db.execute(text("UPDATE credit_wallets SET normal_balance=0, normal_reserved=0, chatbot_reserved_balance=CAST('5' AS NUMERIC), chatbot_reserved_held=0 WHERE user_id=:u"), {"u": user_id})
            conv2 = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "credit-browser-reserve"}).json()["id"]
            reserved = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conv2}/messages", headers={"Idempotency-Key": "browser-reserve-1"}, json={"message": "What services do you offer?"})
            assert reserved.status_code == 200 and not reserved.json().get("credit_exhausted"); checks.append("chatbot falls back to CHATBOT_RESERVED")
            with SessionLocal() as db:
                mode = db.execute(text("SELECT wallet_type FROM ai_credit_ledger WHERE account_id=:u AND entry_type='AI_SETTLEMENT' ORDER BY created_at DESC LIMIT 1"), {"u": user_id}).scalar_one()
                assert mode == "CHATBOT_RESERVED"
            with SessionLocal() as db:
                wallet = db.execute(text("SELECT normal_balance,chatbot_reserved_balance FROM credit_wallets WHERE user_id=:u"), {"u": user_id}).mappings().one()
                assert str(wallet["normal_balance"]) in {"0", "0.000000"} and float(wallet["chatbot_reserved_balance"]) < 5

            with SessionLocal.begin() as db:
                db.execute(text("UPDATE credit_wallets SET normal_balance=0, normal_reserved=0, chatbot_reserved_balance=0, chatbot_reserved_held=0 WHERE user_id=:u"), {"u": user_id})
            before_fallback_calls = calls["count"]
            conv3 = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "credit-browser-fallback"}).json()["id"]
            fallback = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conv3}/messages", headers={"Idempotency-Key": "browser-fallback-1"}, json={"message": "Can you design something custom for me?"})
            assert fallback.status_code == 200 and fallback.json().get("credit_exhausted") is True; checks.append("zero-credit chatbot remains deterministic and useful")
            assert calls["count"] == before_fallback_calls; checks.append("fallback makes no provider call")

            with SessionLocal.begin() as db:
                db.execute(text("UPDATE credit_wallets SET normal_balance=CAST('5' AS NUMERIC), normal_reserved=0, chatbot_reserved_balance=CAST('5' AS NUMERIC), chatbot_reserved_held=0 WHERE user_id=:u"), {"u": user_id})
            conv4 = client.post(f"/api/public/sites/{site_id}/assistant/conversations", json={"session_id": "credit-browser-replenish"}).json()["id"]
            replenished = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conv4}/messages", headers={"Idempotency-Key": "browser-replenish-1"}, json={"message": "What services do you offer?"})
            assert replenished.status_code == 200 and not replenished.json().get("credit_exhausted"); checks.append("replenishment restores NORMAL priority")
            with SessionLocal() as db:
                mode = db.execute(text("SELECT wallet_type FROM ai_credit_ledger WHERE account_id=:u AND entry_type='AI_SETTLEMENT' ORDER BY created_at DESC LIMIT 1"), {"u": user_id}).scalar_one()
                assert mode == "NORMAL"
            before_duplicate_calls = calls["count"]
            duplicate = client.post(f"/api/public/sites/{site_id}/assistant/conversations/{conv4}/messages", headers={"Idempotency-Key": "browser-replenish-1"}, json={"message": "What services do you offer?"})
            assert duplicate.status_code == 200 and calls["count"] == before_duplicate_calls; checks.append("duplicate idempotency key does not double-charge")
            print(json.dumps({"browser": engine_name, "checks": checks, "provider_calls": calls["count"]}, indent=2))
            browser.close()
    finally:
        settings.openai_api_key, settings.app_env, sales_assistant.sales_assistant_completion = old_key, old_env, old_completion
        shutil.rmtree(ISOLATED, ignore_errors=True)


if __name__ == "__main__":
    main()
