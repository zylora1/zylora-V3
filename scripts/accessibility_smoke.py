"""Small, dependency-free accessibility smoke audit for local certification.

This is intentionally narrower than axe-core: it reports only objective DOM
issues that can be checked without downloading a third-party ruleset. The
output labels the result as a smoke audit and never claims axe certification.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from fastapi.testclient import TestClient
from app.main import app
from scripts.browser_e2e import browser_bootstrap, inline_document, patch_dashboard
from scripts.capture_baseline import seed_baseline_data
from scripts.editor_media_e2e import bootstrap as studio_bootstrap, bridge as studio_bridge

OUT = ROOT / "artifacts" / "final-production-certification" / "accessibility-smoke.json"


def audit(page, route: str) -> dict:
    issues = page.evaluate(
        """
        () => {
          const visible = el => {
            const style = getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden' &&
              !el.closest('[hidden], [aria-hidden="true"], .hidden, .view:not(.active), .modal-backdrop:not(.open)');
          };
          const label = el => (el.getAttribute('aria-label') || el.getAttribute('title') ||
            el.textContent || '').replace(/\s+/g, ' ').trim();
          const missingNames = [];
          document.querySelectorAll('button, a, [role="button"], input, select, textarea').forEach(el => {
            if (!visible(el)) return;
            const tag = el.tagName.toLowerCase();
            const named = label(el) || (el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`));
            if (!named && (tag === 'button' || tag === 'a' || el.getAttribute('role') === 'button' ||
                ['input','select','textarea'].includes(tag))) {
              missingNames.push({tag, id: el.id || null, className: el.className || null});
            }
          });
          const missingAlt = [];
          document.querySelectorAll('img').forEach(el => {
            if (visible(el) && !el.hasAttribute('alt')) missingAlt.push({src: el.getAttribute('src') || null});
          });
          const headingOrder = [];
          document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(el => headingOrder.push(Number(el.tagName.slice(1))));
          return {missingNames, missingAlt, headingOrder, title: document.title};
        }
        """
    )
    return {"route": route, **issues}


def main() -> None:
    user_session, user_csrf, _, _, site_id = seed_baseline_data()
    browser_name = os.environ.get("ZYLORA_BROWSER", "chromium").lower()
    with TestClient(app, cookies={"zylora_session": user_session}) as client, sync_playwright() as pw:
        browser_type = {"chromium": pw.chromium, "firefox": pw.firefox, "webkit": pw.webkit}[browser_name]
        browser = browser_type.launch(headless=True, args=["--no-sandbox"] if browser_name == "chromium" else [])
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        dashboard = inline_document(
            "dashboard.html", "dashboard.css", "dashboard.js",
            f'window.__CSRF="{user_csrf}";\n' + browser_bootstrap(), patch=patch_dashboard,
        )
        page.set_content(dashboard, wait_until="load")
        page.wait_for_timeout(900)
        dashboard_result = audit(page, "/dashboard")

        studio_response = client.get(f"/studio/{site_id}")
        studio_response.raise_for_status()
        studio = studio_response.text.replace(
            '<link rel="stylesheet" href="/static/studio-ux.css">',
            '<style>' + (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8") + '</style>',
        )
        studio_bundle = '<script>' + studio_bootstrap() + '</script><script>' + (ROOT / "static" / "studio.js").read_text(encoding="utf-8") + '</script>'
        studio = re.sub(r'<script src="/static/studio\.js(?:\?[^\"]*)?"></script>', lambda _: studio_bundle, studio)
        studio_page = browser.new_page(viewport={"width": 1440, "height": 900})
        studio_page.expose_function("__backendFetch", studio_bridge(client))
        browser_errors: list[str] = []
        studio_page.on("console", lambda message: browser_errors.append(f"console:{message.text}") if message.type == "error" else None)
        studio_page.on("pageerror", lambda error: browser_errors.append(f"page:{error}"))
        studio_page.set_content(studio, wait_until="load")
        # The shell itself is auditable even when a seeded document fetch is
        # unavailable in an isolated smoke run; record the loading state rather
        # than turning that environment detail into a false accessibility pass.
        studio_page.wait_for_timeout(1200)
        studio_result = audit(studio_page, f"/studio/{site_id}")
        browser.close()

    report = {
        "browser": browser_name,
        "method": "dependency-free DOM smoke audit; axe-core is not installed in this repository",
        "routes": [dashboard_result, studio_result],
        "summary": {
            "missing_accessible_names": sum(len(item["missingNames"]) for item in [dashboard_result, studio_result]),
            "images_missing_alt": sum(len(item["missingAlt"]) for item in [dashboard_result, studio_result]),
            "axe_status": "NOT_RUN",
        },
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
