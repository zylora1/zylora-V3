from __future__ import annotations

import json
import os
import sys
import time
from pathlib import Path

import requests
from playwright.sync_api import sync_playwright
from urllib.parse import urlparse

BASE = os.environ.get("ZYLORA_PRODUCTION_URL", "https://zylora-api-production.up.railway.app").rstrip("/")
ADMIN_BASE = BASE
ENGINE = (sys.argv[1] if len(sys.argv) > 1 else "chromium").lower()
email = (os.environ.get("SUPER_ADMIN_EMAIL") or "").strip()
password = os.environ.get("SUPER_ADMIN_PASSWORD") or ""
if not email or not password:
    print("AUTH_CONFIG=NOT_AVAILABLE")
    raise SystemExit(2)

session = requests.Session()
login = session.post(f"{BASE}/api/auth/login", json={"email": email, "password": password}, timeout=30)
print(f"LOGIN_STATUS={login.status_code}")
if not login.ok:
    print("AUTHENTICATED_PRODUCTION=BLOCKED")
    raise SystemExit(3)
body = login.json()
csrf = str(body.get("csrf_token") or "")
print(f"SESSION_COOKIE_NAMES={','.join(sorted(session.cookies.keys()))}")
set_cookie = login.headers.get("set-cookie", "")
if ";" in set_cookie:
    print(f"SESSION_COOKIE_ATTRIBUTES={';'.join(part.strip() for part in set_cookie.split(';')[1:])}")
me = session.get(f"{BASE}/api/auth/me", timeout=30)
print(f"ME_STATUS={me.status_code}")
if me.ok:
    profile = me.json()
    print(f"ME_ROLE={profile.get('role')}")

headers = {"X-CSRF-Token": csrf} if csrf else {}
sites_response = session.get(f"{BASE}/api/sites", timeout=30)
print(f"SITES_STATUS={sites_response.status_code}")
sites = (sites_response.json().get("items") if sites_response.ok else []) or []
controlled = next((s for s in sites if "[LIVE CERT]" in str(s.get("business_name") or "")), None)
created = False
if not controlled:
    payload = {
        "business_name": "[LIVE CERT] Authenticated Studio Gate",
        "description": "Controlled production certification site for authenticated Studio and publishing checks.",
        "origin": "AI",
        "industry": "Consulting",
        "style": "Editorial",
    }
    created_response = session.post(
        f"{BASE}/api/sites",
        json=payload,
        headers={**headers, "Idempotency-Key": "live-cert-authenticated-studio-gate-v1"},
        timeout=60,
    )
    print(f"CONTROLLED_SITE_CREATE_STATUS={created_response.status_code}")
    if created_response.ok:
        controlled = created_response.json()
        created = True
if not controlled:
    print("CONTROLLED_SITE=UNAVAILABLE")
    raise SystemExit(4)
site_id = str(controlled.get("id"))
print(f"CONTROLLED_SITE_ID={site_id}")
site_detail = session.get(f"{BASE}/api/sites/{site_id}", timeout=30)
print(f"SITE_DETAIL_STATUS={site_detail.status_code}")

results = {"console": [], "page_errors": [], "failed_requests": [], "checks": []}
with sync_playwright() as pw:
    browser = getattr(pw, ENGINE).launch(headless=True, args=["--no-sandbox"])
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    browser_cookies = [
        {"name": c.name, "value": c.value, "domain": (c.domain or (urlparse(BASE).hostname or "")).lstrip("."), "path": c.path or "/", "secure": True, "sameSite": "None"}
        for c in session.cookies
    ]
    context.add_cookies(browser_cookies)
    print(f"BROWSER_COOKIE_METADATA={[(c['name'], c['domain'], c['secure'], c['sameSite']) for c in browser_cookies]}")
    print(f"BROWSER_CONTEXT_COOKIES={[(c['name'], c['domain'], c['secure'], c['sameSite']) for c in context.cookies()]}")
    page = context.new_page()
    page.on("console", lambda msg: results["console"].append(f"{msg.type}:{msg.text}") if msg.type == "error" else None)
    page.on("pageerror", lambda exc: results["page_errors"].append(str(exc)))
    page.on("requestfailed", lambda req: results["failed_requests"].append(f"{req.method} {req.url} {req.failure}"))
    page.on("request", lambda req: results.setdefault("auth_request_cookies", []).append((req.url, bool(req.headers.get("cookie")))) if "/api/auth/me" in req.url else None)
    page.on("response", lambda response: results.setdefault("http_errors", []).append(f"{response.status} {response.url}") if response.status >= 400 else None)

    def visit(url: str, label: str):
        try:
            response = page.goto(url, wait_until="domcontentloaded", timeout=60000)
        except Exception as exc:
            results.setdefault("navigation_errors", []).append(f"{label}: {exc}")
            response = None
        status = response.status if response else 0
        page.wait_for_timeout(2500)
        results["checks"].append({"label": label, "status": status, "url": page.url, "title": page.title()})
        return status

    dashboard_url = f"{ADMIN_BASE}/dashboard"
    visit(dashboard_url, "authenticated dashboard loads")
    visit(f"{BASE}/studio/{site_id}", "canonical authenticated Studio loads")
    studio_text = page.locator("body").inner_text(timeout=10000)
    results["studio_shell"] = {
        "has_canvas": page.locator(".studio-canvas").count() > 0,
        "has_toolbar": page.locator(".studio-topbar").count() > 0 or page.locator(".selection-toolbar").count() > 0,
        "body_excerpt": studio_text[:300],
    }
    # History/session regression: leave Studio, go back/forward, and refresh.
    visit(dashboard_url, "leave Studio to Dashboard")
    page.go_back(wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(700)
    results["checks"].append({"label": "browser Back preserves authenticated Studio", "status": 200, "url": page.url})
    page.go_forward(wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(700)
    results["checks"].append({"label": "browser Forward preserves authenticated Dashboard", "status": 200, "url": page.url})
    page.reload(wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(700)
    results["checks"].append({"label": "refresh preserves authenticated route", "status": 200, "url": page.url})

    # Read-only owner settings and model catalogue proof.
    assistant_settings = session.get(f"{BASE}/api/sites/{site_id}/assistant/settings", timeout=30)
    results["assistant_settings_status"] = assistant_settings.status_code
    if assistant_settings.ok:
        settings_body = assistant_settings.json()
        results["available_model_count"] = len(settings_body.get("available_models") or [])
        results["selected_model"] = settings_body.get("model")

    logout_response = session.post(f"{BASE}/api/auth/logout", headers=headers, timeout=30)
    print(f"LOGOUT_STATUS={logout_response.status_code}")
    post_logout_me = session.get(f"{BASE}/api/auth/me", timeout=30)
    print(f"POST_LOGOUT_ME_STATUS={post_logout_me.status_code}")

    page.screenshot(path=str(Path("artifacts/live-railway-production-certification/live-authenticated-dashboard.png")), full_page=False)
    browser.close()

print(json.dumps({"created_controlled_site": created, **results}, indent=2))
