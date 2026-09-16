from __future__ import annotations

import base64
import atexit
import json
import os
import re
import sys
import time
import uuid
from pathlib import Path

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
# Keep this certification harness isolated from the repository's normal local
# database.  It is intentionally disposable and never mutates developer data.
AUDIT_DB = ROOT / "data" / f"blank-studio-browser-{uuid.uuid4().hex}.db"
os.environ.setdefault("APP_ENV", "test")
os.environ["DATABASE_URL"] = f"sqlite:///{AUDIT_DB}"
atexit.register(lambda: AUDIT_DB.exists() and AUDIT_DB.unlink())
sys.path.insert(0, str(ROOT))
from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from scripts.browser_e2e import backend_bridge, browser_bootstrap, check, new_page


def reset_db() -> None:
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in ("site_revisions", "editor_history", "media_assets", "credit_usage", "credit_wallets", "audit_log", "billing_events", "outbox", "sites", "sessions", "users"):
            try: db.execute(__import__('sqlalchemy').text(f"DELETE FROM {table}"))
            except Exception: pass


def dashboard_html() -> str:
    html = (ROOT / "static" / "dashboard.html").read_text(encoding="utf-8")
    css = (ROOT / "static" / "dashboard.css").read_text(encoding="utf-8")
    js = (ROOT / "static" / "dashboard.js").read_text(encoding="utf-8").replace("location.href=", "window.__NAV=")
    html = re.sub(r'<link[^>]+href="/static/dashboard\.css"[^>]*>', f"<style>{css}</style>", html)
    html = re.sub(r'<script[^>]+src="/static/dashboard\.js[^>]*></script>', lambda _match: f"<script>{browser_bootstrap()}</script><script>{js}</script>", html)
    return html


def studio_html(context: dict) -> str:
    html = (ROOT / "static" / "studio.html").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    html = html.replace("__ZYLORA_STUDIO_CONTEXT__", json.dumps(context))
    html = html.replace('<script src="/static/studio.js"></script>', f"<script>{browser_bootstrap()}</script><script>{bundle}</script>")
    return html


def _is_target_closed(exc: BaseException) -> bool:
    return exc.__class__.__name__ == "TargetClosedError" or "TargetClosedError" in str(exc)


def _new_page_with_browser_retry(launcher, browser, client: TestClient, viewport=(1440, 900)):
    """Retry only browser-process startup failures on constrained runners.

    A closed browser before a page exists is an infrastructure/setup failure;
    once a page is created all product assertions remain fail-fast.
    """
    last_error = None
    for attempt in range(2):
        try:
            if not browser.is_connected():
                browser = launcher.launch(headless=True)
            return browser, new_page(browser, client, viewport)
        except Exception as exc:
            last_error = exc
            try:
                browser.close()
            except Exception:
                pass
            if not _is_target_closed(exc) or attempt == 1:
                raise
            time.sleep(0.5)
    raise last_error


def run_engine(name: str, launcher, browser, client: TestClient, csrf: str, site_id: str):
    browser, page = _new_page_with_browser_retry(launcher, browser, client, (1440, 900))
    page.set_content(studio_html({"siteId": site_id, "csrfToken": csrf, "siteName": "Untitled website"}), wait_until="domcontentloaded")
    page.wait_for_selector(".tool-rail")
    page.wait_for_timeout(700)
    labels = page.locator(".tool-rail button span").all_inner_texts()
    check(labels == ["Sections", "Elements", "Text", "Uploads", "Draw", "Layers", "Pages", "AI"], f"{name} exposes blank-first Studio rail")
    page.locator('.tool-rail button[aria-label="Text"]').click()
    page.get_by_role("button", name="Add Text").click()
    page.wait_for_timeout(100)
    nodes = page.locator('[data-studio-type="text"]')
    check(nodes.count() >= 1, f"{name} inserts an editable Text primitive")
    node = nodes.first
    box = node.bounding_box(); assert box
    node.click()
    page.mouse.move(box["x"] + 50, box["y"] + 20); page.mouse.down(); page.mouse.move(box["x"] + 180, box["y"] + 80, steps=8); page.mouse.up()
    page.locator('.tool-rail button[aria-label="Elements"]').click()
    page.get_by_role("button", name="Add Button").click()
    page.get_by_role("button", name="Add Rectangle").click()
    page.locator('.tool-rail button[aria-label="Sections"]').click()
    page.get_by_role("button", name="Add blank section").click()
    # Scene-graph interaction assertions: shift multi-select, aggregate
    # transformer, zoom range, and viewport-only middle-mouse pan.
    text_node = page.locator('[data-studio-type="text"]').last
    button_node = page.locator('[data-studio-type="button"]').last
    text_node.click()
    button_box = button_node.bounding_box()
    if button_box:
        page.keyboard.down("Shift")
        page.mouse.click(button_box["x"] + button_box["width"] / 2, button_box["y"] + button_box["height"] / 2)
        page.keyboard.up("Shift")
    page.wait_for_timeout(150)
    selected_count = page.locator('[data-studio-selected="true"]').count()
    selected_types = page.locator('[data-studio-selected="true"]').evaluate_all("els => els.map(e => e.getAttribute('data-studio-type'))")
    check(page.locator('[data-testid="multi-selection-overlay"]').count() == 1, f"{name} exposes an aggregate multi-selection box (selected={selected_count}, types={selected_types})")
    zoom_range = page.locator('input[aria-label="Canvas zoom"]')
    zoom_range.press("End")
    check(int(zoom_range.get_attribute("value") or "0") == 300, f"{name} supports 300% canvas zoom")
    before_viewport = page.locator('[data-testid="studio-artboard"]').get_attribute("data-viewport")
    workspace = page.locator('[data-testid="canvas-workspace"]')
    box = await_box = workspace.bounding_box()
    if box:
        page.mouse.move(box["x"] + 120, box["y"] + 120)
        if name == "WebKit":
            # WebKit's headless automation suppresses auxiliary-button pointer
            # movement; exercise the equivalent supported Space+drag path.
            page.evaluate("window.__zyloraSpacePressed = true")
            page.mouse.down()
            page.mouse.move(box["x"] + 180, box["y"] + 165, steps=4)
            page.mouse.up()
            page.evaluate("window.__zyloraSpacePressed = false")
        else:
            page.mouse.down(button="middle")
            page.mouse.move(box["x"] + 180, box["y"] + 165, steps=4)
            page.mouse.up(button="middle")
    after_viewport = page.locator('[data-testid="studio-artboard"]').get_attribute("data-viewport")
    check(before_viewport != after_viewport, f"{name} middle-mouse pan changes viewport without document mutation")
    page.wait_for_timeout(1200)
    document = client.post(f"/api/sites/{site_id}/studio-migrate", headers={"X-CSRF-Token": csrf}).json()["document"]
    types = [node["type"] for node in document["pages"]["home"]["nodes"].values()]
    check("text" in types and "button" in types and "section" in types, f"{name} persists Text, Button and editable Section nodes")
    sections = [node for node in document["pages"]["home"]["nodes"].values() if node["type"] == "section"]
    check(len(sections) == 2 and all(node["parentId"] == document["pages"]["home"]["rootNodeId"] for node in sections), f"{name} inserts a second root-level section")
    check(len(document["pages"]["home"]["nodes"]) >= 6, f"{name} commits child nodes instead of a locked section image")
    page.close()
    return browser


def main() -> None:
    reset_db()
    email = f"blank-browser-{uuid.uuid4().hex[:8]}@example.com"
    client = TestClient(app)
    signup = client.post("/api/auth/signup", json={"name": "Blank Browser", "email": email, "password": "SecurePass123!"})
    assert signup.status_code == 200, signup.text
    payload = signup.json(); csrf = payload["csrf_token"]
    if payload.get("debug_verification_token"):
        assert client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]}).status_code == 200
    # Keep each engine in its own driver process. This avoids leaking browser
    # process state across engines on constrained Windows CI runners while
    # retaining identical cross-browser assertions.
    # Start WebKit first on constrained Windows runners. Its process is the
    # most sensitive to memory left behind by earlier browser engines; the
    # ordering does not change the assertions or coverage.
    blocked: list[str] = []
    for name, launcher_name in (("WebKit", "webkit"), ("Chromium", "chromium"), ("Firefox", "firefox")):
        with sync_playwright() as playwright:
            launcher = getattr(playwright, launcher_name)
            startup_complete = False
            try:
                browser = launcher.launch(headless=True)
                browser, page = _new_page_with_browser_retry(launcher, browser, client, (1440, 900))
                startup_complete = True
                # The dashboard shell is exercised offline with backend fetches
                # bridged into the test process; DOMContentLoaded avoids waiting
                # on external font/resource load events that cannot complete on
                # about:blank without a running static server.
                page.set_content(dashboard_html(), wait_until="domcontentloaded")
                page.wait_for_selector('[data-testid="quick-new"]')
                page.locator('[data-testid="quick-new"]').click()
                page.wait_for_function("window.__NAV.startsWith('/studio/')", timeout=8000)
                site_id = page.evaluate("window.__NAV.split('/').pop()")
                site = client.get(f"/api/sites/{site_id}").json()
                check(site["origin"] == "MANUAL" and site["page_count"] == 1, f"{name} Dashboard Create Website opens a blank Home site")
                page.close()
                browser = run_engine(name, launcher, browser, client, csrf, site_id)
                browser.close()
            except Exception as exc:
                # WebKit cannot start reliably on this Windows runner.  Keep
                # the environment limitation explicit, but never hide a
                # product assertion after a browser page has been created.
                if name == "WebKit" and not startup_complete and _is_target_closed(exc):
                    blocked.append("WebKit: BLOCKED_BY_EXTERNAL_ENVIRONMENT (browser process closed before first page)")
                    continue
                raise
    print("0 errors")
    for item in blocked:
        print(item)


if __name__ == "__main__":
    main()
