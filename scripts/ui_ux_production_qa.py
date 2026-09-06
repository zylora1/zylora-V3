from __future__ import annotations

import json
import os
import re
import sys
import uuid
from pathlib import Path
from typing import Any

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"
sys.path.insert(0, str(ROOT))

from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits

WIDTHS = [1440, 1280, 1024, 768, 430, 390, 375, 360]
STATIC_SURFACES = [
    "index.html",
    "login.html",
    "signup.html",
    "ai-create.html",
    "templates.html",
    "freelancers.html",
    "choose-plan.html",
    "editor.html",
]
OUT = ROOT / "data" / "ui-ux-production-qa.json"
checks: list[dict[str, Any]] = []
errors: list[str] = []


def check(condition: bool, label: str, **meta: Any) -> None:
    checks.append({"label": label, "ok": bool(condition), **meta})
    if not condition:
        errors.append(label)
        print("ERROR", label, flush=True)
    else:
        print("PASS", label, flush=True)


def reset_db() -> None:
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in [
            "assistant_usage", "assistant_messages", "assistant_conversations", "sales_assistant_configs",
            "subscriptions", "billing_profiles", "assistant_action_keys", "support_messages", "support_conversations",
            "freelancer_leads", "freelancer_outbound_clicks", "freelancer_external_links", "rate_limit_buckets",
            "source_export_entitlements", "source_export_orders", "analytics_events", "appointment_settings",
            "freelancer_ratings", "freelancer_template_submissions", "freelancer_profiles", "chatbot_messages",
            "site_knowledge_docs", "credit_usage", "credit_wallets", "webhook_events", "razorpay_orders",
            "google_sheets_integrations", "custom_domains", "ownership_transfers", "blog_posts", "pro_leads",
            "audit_log", "billing_events", "outbox", "whatsapp_otps", "notification_settings", "appointments",
            "leads", "oauth_states", "auth_tokens", "sites", "sessions", "users",
        ]:
            try:
                db.execute(text(f"DELETE FROM {table}"))
            except Exception:
                pass


def backend_bridge(client: TestClient):
    def invoke(payload: dict[str, Any]) -> dict[str, Any]:
        url = str(payload.get("url") or "/")
        path = url if url.startswith("/") else "/" + url.split("/", 3)[-1]
        method = str(payload.get("method") or "GET").upper()
        headers = {str(k): str(v) for k, v in (payload.get("headers") or {}).items()}
        body = payload.get("body")
        response = client.request(method, path, content=body.encode() if isinstance(body, str) else body, headers=headers)
        return {
            "status": response.status_code,
            "headers": {"Content-Type": response.headers.get("content-type", "text/plain; charset=utf-8")},
            "body": response.text,
        }
    return invoke


def inline_local_styles(html: str) -> str:
    def repl(match: re.Match[str]) -> str:
        rel = match.group(1).split("/static/", 1)[-1]
        target = STATIC / rel
        return f"<style>{target.read_text(encoding='utf-8')}</style>" if target.exists() else ""
    html = re.sub(r'<link\b[^>]*href=["\'](/static/[^"\']+\.css)["\'][^>]*?/?>', repl, html, flags=re.I)
    html = re.sub(r'<link[^>]+href=["\']https://fonts\.googleapis\.com/[^>]+>', "", html, flags=re.I)
    html = re.sub(r'<link[^>]+href=["\']https://fonts\.gstatic\.com[^>]*>', "", html, flags=re.I)
    return html


def static_shell(name: str) -> str:
    html = inline_local_styles((STATIC / name).read_text(encoding="utf-8"))
    # Geometry audit does not require production JS on static shells. Removing
    # scripts prevents network/API noise while preserving the exact DOM/CSS.
    html = re.sub(r'<script\b[^>]*>.*?</script>', "", html, flags=re.I | re.S)
    return html


def dashboard_document() -> str:
    html = inline_local_styles((STATIC / "dashboard.html").read_text(encoding="utf-8"))
    shared = (STATIC / "zylora-ui.js").read_text(encoding="utf-8")
    dash = (STATIC / "dashboard.js").read_text(encoding="utf-8").replace("location.href=", "window.__NAV=")
    html = re.sub(r'<script\b[^>]*src=["\']/static/zylora-ui\.js(?:\?[^"\']*)?["\'][^>]*>\s*</script>', lambda _m: f"<script>{shared}</script>", html, flags=re.I)
    html = re.sub(r'<script\b[^>]*src=["\']/static/dashboard\.js(?:\?[^"\']*)?["\'][^>]*>\s*</script>', lambda _m: f"<script>{dash}</script>", html, flags=re.I)
    boot = r"""
    <script>(()=>{
      const store={};
      Object.defineProperty(window,'sessionStorage',{value:{
        getItem:k=>Object.prototype.hasOwnProperty.call(store,k)?store[k]:null,
        setItem:(k,v)=>store[k]=String(v),removeItem:k=>delete store[k],
        clear:()=>Object.keys(store).forEach(k=>delete store[k])
      }});
      window.__NAV=''; window.confirm=()=>true;
      window.fetch=async(url,opts={})=>{
        const headers={};
        if(opts.headers instanceof Headers)opts.headers.forEach((v,k)=>headers[k]=v);
        else if(opts.headers)Object.assign(headers,opts.headers);
        const r=await window.__backendFetch({url:String(url),method:String(opts.method||'GET'),headers,body:opts.body==null?null:String(opts.body)});
        return new Response(r.body,{status:r.status,headers:r.headers});
      };
    })();</script>
    """
    return html.replace("</head>", "</head>" + boot, 1)


def no_root_overflow(page) -> bool:
    return bool(page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1"))


def visible_descendant_max_right(page, selector: str) -> float:
    return float(page.evaluate(
        """sel=>{const root=document.querySelector(sel);if(!root)return 0;let max=0;for(const e of root.querySelectorAll('*')){const s=getComputedStyle(e),r=e.getBoundingClientRect();if(s.display==='none'||s.visibility==='hidden'||r.width<=0||r.height<=0)continue;max=Math.max(max,r.right)}return max}""",
        selector,
    ))


def main() -> None:
    reset_db()
    with TestClient(app) as client:
        email = f"ui-qa-{uuid.uuid4().hex[:10]}@example.com"
        signup = client.post("/api/auth/signup", json={"name": "UI QA User", "email": email, "password": "SecurePass123!"})
        check(signup.status_code == 200, "UI QA account can be created")
        csrf = signup.json().get("csrf_token") or client.get("/api/auth/me").json().get("csrf_token")
        plan = client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"})
        check(plan.status_code == 200, "UI QA account can select Free")

        with sync_playwright() as p:
            executable = "/usr/bin/chromium" if os.path.exists("/usr/bin/chromium") else None
            browser = p.chromium.launch(headless=True, executable_path=executable, args=["--no-sandbox"])

            # Product-shell CSS geometry across every requested breakpoint.
            for name in STATIC_SURFACES:
                page = browser.new_page(viewport={"width": 1440, "height": 1000})
                page.set_content(static_shell(name), wait_until="load")
                for width in WIDTHS:
                    page.set_viewport_size({"width": width, "height": 900})
                    check(no_root_overflow(page), f"{name} has no root overflow at {width}px", page=name, width=width)
                    heading = page.locator("h1").first
                    if heading.count() and heading.is_visible():
                        box = heading.bounding_box()
                        check(bool(box and box["x"] >= -1 and box["x"] + box["width"] <= width + 1), f"{name} primary heading stays inside {width}px viewport", page=name, width=width)
                page.close()

            page = browser.new_page(viewport={"width": 1440, "height": 1000})
            page.expose_function("__backendFetch", backend_bridge(client))
            page_errors: list[str] = []
            page.on("pageerror", lambda exc: page_errors.append(str(exc)))
            page.set_content(dashboard_document(), wait_until="load")
            page.wait_for_function("document.querySelector('#userName').textContent === 'UI QA User'")
            page.wait_for_timeout(250)
            check(not page_errors, "dashboard initializes without JavaScript errors", errors=page_errors)
            check(page.locator("#sideUserRole").inner_text().strip() == "User", "ordinary account is labelled User in sidebar")

            for width in WIDTHS:
                page.set_viewport_size({"width": width, "height": 900})
                page.wait_for_timeout(60)
                check(no_root_overflow(page), f"dashboard overview has no root overflow at {width}px", width=width)
                if width <= 680:
                    check(page.locator(".search").evaluate("e=>getComputedStyle(e).display") == "none", f"mobile dashboard removes unusable search affordance at {width}px", width=width)
                if 375 <= width <= 430:
                    cards = page.locator(".overview-stat-grid .stat-card")
                    boxes = [cards.nth(i).bounding_box() for i in range(min(4, cards.count()))]
                    two_by_two = len(boxes) == 4 and abs(boxes[0]["y"] - boxes[1]["y"]) < 3 and abs(boxes[2]["y"] - boxes[3]["y"]) < 3 and boxes[2]["y"] > boxes[0]["y"]
                    check(two_by_two, f"dashboard stats compose as 2×2 at {width}px", width=width)
            page.set_viewport_size({"width": 1440, "height": 1000})
            credit = page.locator("#creditDensity")
            welcome = page.locator(".welcome-card")
            check(credit.bounding_box()["width"] > welcome.bounding_box()["width"], "desktop Usage Balance spans the overview row")
            quick_bg = page.locator(".quick-grid .ai-quick").evaluate("e=>getComputedStyle(e).backgroundColor")
            check(quick_bg == "rgb(105, 108, 255)", "Create with AI quick action uses dashboard primary purple", color=quick_bg)

            page.evaluate("setView('billing')")
            page.wait_for_function("document.querySelectorAll('.topup-pack').length === 8")
            check(page.locator(".topup-group").count() == 2, "billing separates AI and lead credit groups")
            check(page.locator(".topup-pack").count() == 8, "billing renders all eight top-up packs")
            pack_bg = page.locator(".topup-pack").first.evaluate("e=>getComputedStyle(e).backgroundColor")
            check(pack_bg == "rgb(255, 255, 255)", "top-up packs use light card styling instead of legacy dark buttons", color=pack_bg)
            for price_id in ["#starterRegionalPrice", "#growthRegionalPrice"]:
                check(page.locator(price_id).evaluate("e=>e.scrollWidth<=e.clientWidth+1"), f"{price_id} price cadence does not collide")

            for width in [768, 430, 390, 375, 360]:
                page.set_viewport_size({"width": width, "height": 1000})
                page.wait_for_timeout(50)
                check(no_root_overflow(page), f"billing has no root overflow at {width}px", width=width)
                if width <= 430:
                    max_right = visible_descendant_max_right(page, "#billing")
                    check(max_right <= width + 1, f"billing descendants stay inside {width}px viewport", width=width, max_right=max_right)
                    table_display = page.locator(".billing-history-card table").evaluate("e=>getComputedStyle(e).display")
                    check(table_display == "block", f"billing history switches to mobile card layout at {width}px", width=width)
            browser.close()

    report = {"widths": WIDTHS, "checks": checks, "errors": errors, "summary": {"total": len(checks), "passed": sum(1 for c in checks if c["ok"]), "failed": len(errors)}}
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"ui_ux_production_qa: {report['summary']['passed']}/{report['summary']['total']} passed; errors {len(errors)}")
    raise SystemExit(1 if errors else 0)


if __name__ == "__main__":
    main()
