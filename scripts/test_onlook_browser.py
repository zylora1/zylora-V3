"""Cross-browser certification runner for Zylora Code Studio (Onlook OSS Engine) and Native Studio.

Tests Chromium, Firefox, and WebKit on Windows for:
1. Gated Code Studio mounting ZyloraOnlookStudio
2. Diagnostic registry `window.__ONLOOK_DIAGNOSTICS__` verification
3. DOM `data-subsystem` assertions
4. Interactive subsystem switching (tabs, view modes, devices)
5. Native Studio zero-regression verification
"""
import atexit
import json
import os
import re
import sys
import time
import uuid
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
AUDIT_DB = ROOT / "data" / f"onlook-cert-{uuid.uuid4().hex}.db"
os.environ.setdefault("APP_ENV", "test")
os.environ["DATABASE_URL"] = f"sqlite:///{AUDIT_DB}"
atexit.register(lambda: AUDIT_DB.exists() and AUDIT_DB.unlink())
sys.path.insert(0, str(ROOT))

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from scripts.browser_e2e import browser_bootstrap, new_page, check


def reset_db():
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in ("sites", "users", "sessions", "credit_usage", "credit_wallets"):
            try:
                db.execute(text(f"DELETE FROM {table}"))
            except Exception:
                pass


def studio_html(context: dict) -> str:
    html = (ROOT / "static" / "studio.html").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    html = html.replace("__ZYLORA_STUDIO_CONTEXT__", json.dumps(context))
    html = html.replace('<script src="/static/studio.js"></script>', f"<script>{browser_bootstrap()}</script><script>{bundle}</script>")
    return html


def run_certification():
    reset_db()
    client = TestClient(app)
    uid = uuid.uuid4().hex[:8]

    # Create user
    signup = client.post(
        "/api/auth/signup",
        json={"name": f"Cert User {uid}", "email": f"cert-{uid}@example.com", "password": "Password123!"},
    )
    assert signup.status_code == 200, signup.text
    payload = signup.json()
    csrf = payload["csrf_token"]
    if payload.get("debug_verification_token"):
        client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]})
    client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"})

    # Create Code Site
    site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Onlook Code Site"})
    assert site_res.status_code == 200
    code_site_id = site_res.json()["id"]
    code_workspace_id = f"ws_cert_{uid}"

    # Create Native Site
    native_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Native Site"})
    assert native_res.status_code == 200
    native_site_id = native_res.json()["id"]

    # Configure sites in DB
    with SessionLocal.begin() as db:
        db.execute(
            text("UPDATE sites SET studio_engine = 'code', code_workspace_id = :ws WHERE id = :sid"),
            {"ws": code_workspace_id, "sid": code_site_id},
        )
        db.execute(
            text("UPDATE sites SET studio_engine = 'native' WHERE id = :sid"),
            {"sid": native_site_id},
        )

    # Bootstrap code workspace directory
    ws_dir = ROOT / "data" / "code-projects" / code_workspace_id
    ws_dir.mkdir(parents=True, exist_ok=True)
    src_dir = ws_dir / "src"
    src_dir.mkdir(parents=True, exist_ok=True)
    (src_dir / "App.tsx").write_text('export default function App() { return <div className="p-4"><h1>Hello Onlook</h1></div>; }', encoding="utf-8")
    (ws_dir / "package.json").write_text('{"name": "cert-app", "dependencies": {"react": "^19.0.0"}}', encoding="utf-8")

    code_context = {
        "siteId": code_site_id,
        "csrfToken": csrf,
        "siteName": "Onlook Code Site",
        "studioEngine": "code",
        "codeWorkspaceId": code_workspace_id,
    }
    native_context = {
        "siteId": native_site_id,
        "csrfToken": csrf,
        "siteName": "Native Site",
        "studioEngine": "native",
    }

    code_page_html = studio_html(code_context)
    native_page_html = studio_html(native_context)

    browsers_to_test = [
        ("WebKit", "webkit"),
        ("Chromium", "chromium"),
        ("Firefox", "firefox"),
    ]

    results = {}

    for name, launcher_name in browsers_to_test:
        print(f"\n==========================================")
        print(f"Testing Browser Engine: {name}")
        print(f"==========================================")
        console_logs = []
        page_errors = []

        with sync_playwright() as playwright:
            launcher = getattr(playwright, launcher_name)
            try:
                browser = launcher.launch(headless=True)
            except Exception as e:
                print(f"[{name}] Failed to launch browser: {e}")
                results[name] = {"status": "SKIPPED", "reason": str(e)}
                continue

            try:
                page = new_page(browser, client, (1440, 900))
                page.on("console", lambda msg: console_logs.append(f"[{msg.type}] {msg.text}"))
                page.on("pageerror", lambda err: page_errors.append(str(err)))

                # 1. Test Code Studio (Onlook OSS Engine)
                print(f"[{name}] Mounting Zylora Onlook Code Studio...")
                page.set_content(code_page_html, wait_until="domcontentloaded")

                # Wait for Onlook Shell subsystem
                page.wait_for_selector('[data-subsystem="onlook-shell"]', timeout=10000)
                check(page.locator('[data-subsystem="onlook-shell"]').count() == 1, f"{name}: Onlook Shell subsystem rendered")

                # Verify Canvas subsystem
                page.wait_for_selector('[data-subsystem="onlook-canvas"]', timeout=5000)
                check(page.locator('[data-subsystem="onlook-canvas"]').count() == 1, f"{name}: Onlook Canvas subsystem rendered")

                # Verify Left Panel & EditorBar subsystems
                check(page.locator('[data-subsystem="onlook-leftpanel"]').count() == 1, f"{name}: Onlook Left Panel subsystem rendered")
                check(page.locator('[data-subsystem="onlook-editorbar"]').count() == 1, f"{name}: Onlook EditorBar subsystem rendered")

                # Verify window.__ONLOOK_DIAGNOSTICS__ registry
                diag = page.evaluate("() => window.__ONLOOK_DIAGNOSTICS__ ? { events: window.__ONLOOK_DIAGNOSTICS__.events.map(e => e.event), subsystems: Object.keys(window.__ONLOOK_DIAGNOSTICS__.subsystems).reduce((acc, k) => { acc[k] = window.__ONLOOK_DIAGNOSTICS__.subsystems[k].mounted; return acc; }, {}), version: window.__ONLOOK_DIAGNOSTICS__.version } : null")
                assert diag is not None, f"{name}: window.__ONLOOK_DIAGNOSTICS__ not found on window!"
                print(f"[{name}] Diagnostics: version={diag['version']}, events={diag['events']}")
                print(f"[{name}] Subsystems mounted: {diag['subsystems']}")

                check("ONLOOK_EDITOR_STORE_READY" in diag["events"], f"{name}: ONLOOK_EDITOR_STORE_READY event fired")
                check("ONLOOK_SHELL_MOUNTED" in diag["events"], f"{name}: ONLOOK_SHELL_MOUNTED event fired")
                check("ONLOOK_CANVAS_MOUNTED" in diag["events"], f"{name}: ONLOOK_CANVAS_MOUNTED event fired")
                check("ONLOOK_LAYERS_MOUNTED" in diag["events"], f"{name}: ONLOOK_LAYERS_MOUNTED event fired")
                check("ONLOOK_COMPONENTS_MOUNTED" in diag["events"], f"{name}: ONLOOK_COMPONENTS_MOUNTED event fired")
                check(diag["subsystems"].get("EditorEngine") is True, f"{name}: EditorEngine store mounted")
                check(diag["subsystems"].get("Canvas") is True, f"{name}: Canvas mounted")
                check(diag["subsystems"].get("ASTParser") is True, f"{name}: ASTParser mounted")

                # Test Tab Switching: Components Tab
                page.locator('button:has-text("Components")').click()
                page.wait_for_selector('[data-subsystem="onlook-components"]', timeout=3000)
                check(page.locator('[data-subsystem="onlook-components"]').count() == 1, f"{name}: Components tab opened")

                # Switch to Code View Mode
                page.locator('button:has-text("Code")').first.click()
                page.wait_for_selector('[data-subsystem="onlook-code-panel"]', timeout=3000)
                check(page.locator('[data-subsystem="onlook-code-panel"]').count() == 1, f"{name}: Code Panel view opened")

                # Switch back to Design Mode
                page.locator('button:has-text("Design")').first.click()
                page.wait_for_selector('[data-subsystem="onlook-canvas"]', timeout=3000)
                check(page.locator('[data-subsystem="onlook-canvas"]').count() == 1, f"{name}: Returned to Canvas design mode")

                # Check for zero unexpected runtime page errors
                non_trivial_errors = [e for e in page_errors if "ResizeObserver" not in e]
                check(len(non_trivial_errors) == 0, f"{name}: 0 non-trivial runtime exceptions in Code Studio (errors: {non_trivial_errors})")

                page.close()

                # 2. Test Native Studio (Zero Regressions)
                print(f"[{name}] Mounting Native Zylora Studio...")
                page_native = new_page(browser, client, (1440, 900))
                page_native.set_content(native_page_html, wait_until="domcontentloaded")
                page_native.wait_for_selector(".tool-rail", timeout=10000)
                check(page_native.locator(".tool-rail").count() == 1, f"{name}: Native tool-rail mounted")
                check(page_native.locator('[data-testid="canvas-workspace"]').count() == 1, f"{name}: Native canvas-workspace mounted")
                page_native.close()

                results[name] = {
                    "status": "PASSED",
                    "code_studio": "CERTIFIED",
                    "native_studio": "CERTIFIED",
                    "events_fired": diag["events"],
                    "subsystems_verified": diag["subsystems"],
                }
                print(f"[{name}] ALL CERTIFICATION CHECKS PASSED!")

            except Exception as exc:
                print(f"[{name}] FAILED with exception: {exc}")
                print(f"[{name}] Console logs:\n" + "\n".join(console_logs[-15:]))
                print(f"[{name}] Page errors:\n" + "\n".join(page_errors))
                results[name] = {"status": "FAILED", "error": str(exc)}
            finally:
                try:
                    browser.close()
                except Exception:
                    pass

    print("\n==========================================")
    print("FINAL BROWSER CERTIFICATION SUMMARY:")
    print("==========================================")
    print(json.dumps(results, indent=2))

    all_passed = all(r.get("status") == "PASSED" for r in results.values())
    if not all_passed:
        sys.exit(1)
    print("\nALL BROWSER ENGINES CERTIFIED SUCCESSFULLY (0 ERRORS)")


if __name__ == "__main__":
    run_certification()
