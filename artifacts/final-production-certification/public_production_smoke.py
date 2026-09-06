from __future__ import annotations

import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "https://zylora-api-production.up.railway.app"
ENGINE = sys.argv[1] if len(sys.argv) > 1 else "chromium"
OUT = Path(__file__).parent / "browser-results" / f"public-{ENGINE}.json"
OUT.parent.mkdir(parents=True, exist_ok=True)
routes = ["/", "/signup", "/login", "/templates", "/freelancers", "/choose-plan", "/blog", "/terms", "/privacy", "/llms.txt", "/robots.txt", "/sitemap.xml"]
result = {"engine": ENGINE, "base": BASE, "routes": [], "console_errors": [], "page_errors": [], "failed_requests": [], "unexpected_http": []}
with sync_playwright() as pw:
    browser = getattr(pw, ENGINE).launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.on("console", lambda msg: result["console_errors"].append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda exc: result["page_errors"].append(str(exc)))
    page.on("requestfailed", lambda req: result["failed_requests"].append(f"{req.method} {req.url}"))
    page.on("response", lambda response: result["unexpected_http"].append(f"{response.status} {response.url}") if response.status >= 500 else None)
    for route in routes:
        try:
            response = page.goto(BASE + route, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(700)
            result["routes"].append({"route": route, "status": response.status if response else None, "url": page.url, "title": page.title(), "width": page.evaluate("document.documentElement.scrollWidth"), "viewport": page.evaluate("document.documentElement.clientWidth")})
        except Exception as exc:
            result["routes"].append({"route": route, "error": str(exc)})
    browser.close()
OUT.write_text(json.dumps(result, indent=2), encoding="utf-8")
print(json.dumps(result, indent=2))
