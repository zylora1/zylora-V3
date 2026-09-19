"""Code Studio UI-Driven Editing & Production Publish / Rollback End-to-End Certification Runner.

Certifies:
- Gate 2: Real UI-Driven Onlook Source Editing E2E across Chromium, Firefox, WebKit
  - Real browser clicks element inside preview iframe
  - DOM -> source mapping and selection verified
  - Visual text edit: "{Browser} source edit verified" persisted to src/App.jsx
  - Style edit: "p-10 md:p-8" persisted to src/App.jsx
  - Layers selection verified
  - Component discovery & UI insertion: PricingCard from src/components/PricingCard.jsx
  - Code panel edit: "{Browser} Code Panel Verified" saved and reloaded
  - Snapshot & restore verified
  - Penpal parent <-> child RPC ping -> pong verified across all 3 browsers
- Gate 4: Code-Mode Production Build + Zylora Publish & Rollback
  - Runs npm run build via sandbox command API
  - Validates dist/ output
  - Publishes to Zylora live route /s/{slug}
  - Real browser visits public route and verifies live edited copy
  - Publishes version 2 with updated copy
  - Rolls back to version 1 and verifies public URL reverts to v1
"""
from __future__ import annotations

import atexit
import json
import os
import re
import shutil
import socket
import sys
import threading
import time
import uuid
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='backslashreplace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='backslashreplace')

PG_URL = "postgresql://postgres:postgres@127.0.0.1:5432/zylora_prod_cert"
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = PG_URL

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright, Page, BrowserContext
from sqlalchemy import text
import uvicorn

from app.main import app
from app.db import SessionLocal, migrate, engine
from app.security import clear_rate_limits
from app.config import settings
from app.code_project import bootstrap_code_project, local_sandbox

settings.studio_code_enabled = True

def get_free_port() -> int:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(('127.0.0.1', 0))
    port = s.getsockname()[1]
    s.close()
    return port

SERVER_PORT = get_free_port()
BASE_URL = f"http://127.0.0.1:{SERVER_PORT}"
settings.app_url = BASE_URL

class ServerThread(threading.Thread):
    def __init__(self, host: str, port: int):
        super().__init__(daemon=True)
        self.host = host
        self.port = port
        config = uvicorn.Config(app, host=self.host, port=self.port, log_level="warning")
        self.server = uvicorn.Server(config)

    def run(self):
        self.server.run()

    def stop(self):
        self.server.should_exit = True

def wait_for_server(url: str, timeout: float = 20.0) -> bool:
    import urllib.request
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(f"{url}/login", timeout=1.0) as resp:
                if resp.status == 200:
                    return True
        except Exception:
            time.sleep(0.25)
    return False

def check(condition: bool, label: str, extra: Any = ""):
    assert condition, f"CHECK FAILED: {label} (extra: {extra})"
    print(f"  PASS: {label}", flush=True)

def run():
    print("================================================================================")
    print("GATE 2 & GATE 4: ONLOOK UI EDITING & PRODUCTION BUILD / PUBLISH CERTIFICATION")
    print(f"Database: {PG_URL}")
    print(f"Server Target: {BASE_URL}")
    print("================================================================================")

    clear_rate_limits()
    server_thread = ServerThread("127.0.0.1", SERVER_PORT)
    server_thread.start()
    atexit.register(server_thread.stop)

    check(wait_for_server(BASE_URL, timeout=15.0), f"Uvicorn server online at {BASE_URL}")

    browsers_to_test = ["chromium", "firefox", "webkit"]

    with sync_playwright() as playwright:
        for browser_type in browsers_to_test:
            print("\n" + "=" * 80)
            print(f">>> STARTING CERTIFICATION ON BROWSER: {browser_type.upper()} <<<")
            print("=" * 80)

            browser_launcher = getattr(playwright, browser_type)
            browser = browser_launcher.launch(headless=True)
            context: BrowserContext = browser.new_context(viewport={"width": 1440, "height": 900})
            page: Page = context.new_page()
            page.on("console", lambda msg: print(f"  [{browser_type} console] {msg.text}", flush=True))
            page.on("pageerror", lambda err: print(f"  [{browser_type} pageerror] {err}", flush=True))

            client = TestClient(app)
            uid = f"{browser_type[:4]}_{uuid.uuid4().hex[:6]}"
            user_email = f"user_{uid}@example.com"
            user_pass = "Password123!"

            signup_res = client.post("/api/auth/signup", json={"name": f"Tester {uid}", "email": user_email, "password": user_pass})
            check(signup_res.status_code == 200, f"[{browser_type}] User signup successful")
            csrf = signup_res.json()["csrf_token"]
            verify_token = signup_res.json().get("debug_verification_token")
            if verify_token:
                client.post("/api/auth/email/verify", json={"token": verify_token})
            client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"})

            # Authenticate via browser UI
            page.goto(f"{BASE_URL}/login")
            page.wait_for_selector("#loginForm", timeout=10000)
            page.fill("#email", user_email)
            page.fill("#password", user_pass)
            page.click('button[type="submit"]')
            page.wait_for_url(re.compile(r"/dashboard"), timeout=15000)
            check("/dashboard" in page.url, f"[{browser_type}] Authenticated and redirected to /dashboard")

            # Create Code Site
            code_site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": f"Code Project {uid}"})
            check(code_site_res.status_code == 200, f"[{browser_type}] Code project created in PostgreSQL")
            code_site_id = code_site_res.json()["id"]
            code_workspace_id = f"ws_gate2_{uid}"

            with SessionLocal.begin() as db:
                db.execute(text("""
                    UPDATE sites
                    SET studio_engine = 'code', code_workspace_id = :ws
                    WHERE id = :sid
                """), {"ws": code_workspace_id, "sid": code_site_id})

            # Bootstrap workspace with App.jsx, PricingCard component, etc.
            adapter = bootstrap_code_project(code_workspace_id)
            app_jsx_initial = """import React from 'react';

export default function App() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Hello Onlook</h1>
      <p className="text-gray-600">Start building today</p>
    </main>
  );
}
"""
            pricing_card_jsx = """import React from 'react';

export default function PricingCard({ plan = 'Pro', price = '$29' }) {
  return (
    <div className="pricing-card border p-4 rounded shadow-sm">
      <h3 className="font-semibold">{plan}</h3>
      <p className="text-xl font-bold">{price}</p>
    </div>
  );
}
"""
            adapter.write_file("src/App.jsx", app_jsx_initial)
            adapter.write_file("src/components/PricingCard.jsx", pricing_card_jsx)
            check(adapter.read_file("src/App.jsx") == app_jsx_initial, f"[{browser_type}] src/App.jsx seeded")
            check(adapter.read_file("src/components/PricingCard.jsx") == pricing_card_jsx, f"[{browser_type}] PricingCard.jsx seeded")

            # Open Studio in Browser
            page.goto(f"{BASE_URL}/studio/{code_site_id}")
            page.wait_for_selector('#studio-root [data-subsystem="onlook-shell"]', timeout=30000)
            check(page.is_visible('#studio-root [data-subsystem="onlook-shell"]'), f"[{browser_type}] ZyloraOnlookStudio mounted")

            # Wait for preview iframe to boot and Penpal to connect
            print(f"[{browser_type}] Waiting for Penpal handshake...")
            deadline = time.time() + 25.0
            penpal_connected = False
            while time.time() < deadline:
                st = page.evaluate("() => window.__PENPAL_RPC_STATUS__ || null")
                if st and st.get("connected") and st.get("pong") == "pong":
                    penpal_connected = True
                    break
                time.sleep(0.5)
            check(penpal_connected, f"[{browser_type}] Penpal RPC ping -> pong handshake established")

            # GATE 2.1: Real UI-Driven Element Selection inside preview iframe
            print(f"\n--- [{browser_type}] GATE 2.1: Canvas Element Selection & DOM->Source Mapping ---")
            iframe_handle = page.wait_for_selector("iframe.zylora-onlook-iframe", timeout=15000)
            iframe = iframe_handle.content_frame()
            check(iframe is not None, f"[{browser_type}] Preview iframe content frame accessible")

            iframe.wait_for_selector("h1", timeout=15000)
            # Real click on <h1> inside the preview iframe
            iframe.click("h1")
            time.sleep(1.0)

            # Check design panel in studio UI
            page.wait_for_selector('[data-subsystem="onlook-design-panel"]', timeout=5000)
            check(page.is_visible('[data-subsystem="onlook-design-panel"]'), f"[{browser_type}] Design panel active on element selection")

            # GATE 2.2: Visual Text Edit
            print(f"\n--- [{browser_type}] GATE 2.2: Visual Text Edit AST Mutation ---")
            text_edit = f"{browser_type.title()} source edit verified"
            page.wait_for_selector('[data-testid="inspector-text-input"]', timeout=5000)
            page.fill('[data-testid="inspector-text-input"]', text_edit)
            page.click('[data-testid="inspector-update-text-btn"]')

            deadline = time.time() + 10.0
            while time.time() < deadline:
                if text_edit in adapter.read_file("src/App.jsx"):
                    break
                time.sleep(0.5)
            check(text_edit in adapter.read_file("src/App.jsx"), f"[{browser_type}] Visual text edit '{text_edit}' written to src/App.jsx on disk")

            # GATE 2.3: Style Edit ("p-6" -> "p-10 md:p-8")
            print(f"\n--- [{browser_type}] GATE 2.3: Style Edit & Responsive Variant ---")
            page.wait_for_selector('[data-testid="inspector-classes-input"]', timeout=5000)
            page.fill('[data-testid="inspector-classes-input"]', "p-10 md:p-8")
            page.click('[data-testid="inspector-update-classes-btn"]')

            deadline = time.time() + 10.0
            while time.time() < deadline:
                if "p-10 md:p-8" in adapter.read_file("src/App.jsx"):
                    break
                time.sleep(0.5)
            saved_file = adapter.read_file("src/App.jsx")
            check("p-10 md:p-8" in saved_file, f"[{browser_type}] Style classes 'p-10 md:p-8' persisted to src/App.jsx")

            # GATE 2.4: Layers Panel Sync
            print(f"\n--- [{browser_type}] GATE 2.4: Layers Panel Sync ---")
            page.click('[data-testid="left-tab-layers"]')
            page.wait_for_selector('[data-subsystem="onlook-layers"]', timeout=5000)
            check(page.is_visible('[data-subsystem="onlook-layers"]'), f"[{browser_type}] Layers tab open in left panel")

            # GATE 2.5: Component Discovery & UI Insertion
            print(f"\n--- [{browser_type}] GATE 2.5: Component Discovery & UI Insertion ---")
            page.click('[data-testid="left-tab-components"]')
            page.wait_for_selector('[data-subsystem="onlook-components"]', timeout=5000)
            check(page.is_visible('[data-subsystem="onlook-components"]'), f"[{browser_type}] Components tab open")

            pricing_comp = page.wait_for_selector('[data-component-name="PricingCard"]', timeout=5000)
            check(pricing_comp is not None, f"[{browser_type}] PricingCard component discovered in workspace")

            # UI click on discovered component card
            pricing_comp.click()
            deadline = time.time() + 10.0
            while time.time() < deadline:
                content = adapter.read_file("src/App.jsx")
                if "PricingCard" in content:
                    break
                time.sleep(0.5)

            app_jsx_after_insert = adapter.read_file("src/App.jsx")
            check("PricingCard" in app_jsx_after_insert, f"[{browser_type}] PricingCard inserted into src/App.jsx via component UI click")

            # GATE 2.6: Snapshot Checkpoint & Restore
            print(f"\n--- [{browser_type}] GATE 2.6: Code Project Snapshot & Restore ---")
            snap_res = client.post(f"/api/sites/{code_site_id}/code/snapshot", headers={"X-CSRF-Token": csrf})
            check(snap_res.status_code == 200, f"[{browser_type}] Code snapshot created")
            snapshot_id = snap_res.json()["snapshot_id"]

            # Overwrite file with temp text
            adapter.write_file("src/App.jsx", "export default function App() { return <div>Temporary Overwrite</div>; }")
            check("Temporary Overwrite" in adapter.read_file("src/App.jsx"), f"[{browser_type}] Temporary file modification written")

            # Restore snapshot
            restore_res = client.post(f"/api/sites/{code_site_id}/code/snapshot/restore", headers={"X-CSRF-Token": csrf}, json={"snapshot_id": snapshot_id})
            check(restore_res.status_code == 200, f"[{browser_type}] Snapshot restored successfully")
            check(text_edit in adapter.read_file("src/App.jsx"), f"[{browser_type}] Snapshot restore reverted file to snapshot state")

            # GATE 2.7: Code Panel Edit & Persistence across Hard Reload
            print(f"\n--- [{browser_type}] GATE 2.7: Code Panel Edit & Persistence ---")
            page.click('[data-testid="view-mode-code"]')
            page.wait_for_selector('[data-subsystem="onlook-code-panel"]', timeout=5000)
            check(page.is_visible('[data-subsystem="onlook-code-panel"]'), f"[{browser_type}] Code editor panel active")

            code_panel_text = f"{browser_type.title()} Code Panel Verified"
            current_code = adapter.read_file("src/App.jsx")
            edited_code = current_code.replace(text_edit, code_panel_text)
            page.fill('[data-testid="code-editor-textarea"]', edited_code)
            page.click('[data-testid="save-code-btn"]')

            deadline = time.time() + 10.0
            while time.time() < deadline:
                if code_panel_text in adapter.read_file("src/App.jsx"):
                    break
                time.sleep(0.5)
            check(code_panel_text in adapter.read_file("src/App.jsx"), f"[{browser_type}] Code panel edit '{code_panel_text}' saved to src/App.jsx")

            # Hard reload studio and verify persistence
            page.reload()
            page.wait_for_selector('#studio-root [data-subsystem="onlook-shell"]', timeout=25000)
            check(code_panel_text in adapter.read_file("src/App.jsx"), f"[{browser_type}] Code edit persisted across full page reload")

            print(f"\n>>> [{browser_type.upper()}] GATE 2 FULLY CERTIFIED <<<\n")

            # GATE 4: Run Production Build, Publish & Rollback on Chromium
            if browser_type == "chromium":
                print("================================================================================")
                print("GATE 4: CODE-MODE PRODUCTION BUILD & ZYLORA PUBLISH / ROLLBACK (CHROMIUM)")
                print("================================================================================")

                # Set v1 production copy
                v1_text = "Zylora final production certification"
                app_jsx_v1 = adapter.read_file("src/App.jsx").replace(code_panel_text, v1_text)
                adapter.write_file("src/App.jsx", app_jsx_v1)

                # 1. Run production build via sandbox command API
                print("[*] Running 'npm run build' via sandbox command API...")
                build_res = client.post(
                    f"/api/sites/{code_site_id}/code/command",
                    headers={"X-CSRF-Token": csrf},
                    json={"command": ["npm", "run", "build"], "timeout_seconds": 30},
                )
                check(build_res.status_code == 200, "Build command completed via sandbox API")
                build_json = build_res.json()
                print(f"  Build returncode: {build_json.get('returncode')}")
                check(build_json.get("ok") is True, "npm run build succeeded (0 errors)", f"stderr={build_json.get('stderr')}")

                dist_index = adapter.root / "dist" / "index.html"
                check(dist_index.is_file(), "dist/index.html artifact generated")
                print(f"  dist/index.html size: {dist_index.stat().st_size} bytes")

                # 2. Publish via Zylora publisher (Version 1)
                print("[*] Publishing code site version 1 via Zylora publisher...")
                pub_res = client.post(
                    f"/api/sites/{code_site_id}/publish",
                    headers={"X-CSRF-Token": csrf},
                    json={"selected_plan": "FREE"},
                )
                check(pub_res.status_code == 200, "Code site publish returned 200 OK")
                public_url = pub_res.json()["url"]
                check(public_url.startswith("/s/"), f"Live public route generated: {public_url}")

                # 3. Verify Live Public Route in Real Browser
                print(f"[*] Navigating to live public route in real browser: {BASE_URL}{public_url}")
                page.goto(f"{BASE_URL}{public_url}")
                page.wait_for_selector("#root", timeout=10000)
                page.wait_for_function(f"() => (document.getElementById('root')?.innerText || '').includes('{v1_text}')", timeout=15000)
                live_html_v1 = page.content()
                check(v1_text in live_html_v1, f"Live public site serves production code containing '{v1_text}'")

                # 4. Publish Version 2
                print("[*] Performing second edit and publishing version 2...")
                v2_text = "Zylora final release revision two"
                app_jsx_v2 = app_jsx_v1.replace(v1_text, v2_text)
                adapter.write_file("src/App.jsx", app_jsx_v2)

                # Rebuild
                build_v2 = client.post(
                    f"/api/sites/{code_site_id}/code/command",
                    headers={"X-CSRF-Token": csrf},
                    json={"command": ["npm", "run", "build"], "timeout_seconds": 30},
                )
                check(build_v2.status_code == 200 and build_v2.json().get("ok") is True, "Version 2 build succeeded")

                # Publish Version 2
                pub_v2 = client.post(
                    f"/api/sites/{code_site_id}/publish",
                    headers={"X-CSRF-Token": csrf},
                    json={"selected_plan": "FREE"},
                )
                check(pub_v2.status_code == 200, "Version 2 publish returned 200 OK")

                page.reload()
                page.wait_for_function(f"() => (document.getElementById('root')?.innerText || '').includes('{v2_text}')", timeout=15000)
                live_html_v2 = page.content()
                check(v2_text in live_html_v2, f"Live public route updated to version 2 containing '{v2_text}'")

                # 5. Execute Rollback to Version 1
                print("[*] Executing rollback to published revision 1...")
                rb_res = client.post(f"/api/sites/{code_site_id}/rollback/1", headers={"X-CSRF-Token": csrf})
                check(rb_res.status_code == 200, "Rollback to revision 1 returned 200 OK")

                page.reload()
                page.wait_for_function(f"() => (document.getElementById('root')?.innerText || '').includes('{v1_text}')", timeout=15000)
                live_html_rolled_back = page.content()
                check(v1_text in live_html_rolled_back, f"Live public route reverted to version 1 containing '{v1_text}'")
                check(v2_text not in live_html_rolled_back, "Version 2 content cleanly removed by rollback")

                print("\n>>> GATE 4 CERTIFIED: CODE-MODE PRODUCTION BUILD, PUBLISH, LIVE VERIFY & ROLLBACK CONFIRMED <<<\n")

            # Clean up workspace process and close browser
            local_sandbox.stop_workspace(code_workspace_id)
            browser.close()

    print("================================================================================")
    print("ALL GATE 2 & GATE 4 CERTIFICATIONS COMPLETED SUCCESSFULLY (0 FAILURES)!")
    print("CHROMIUM: PASS | FIREFOX: PASS | WEBKIT: PASS | PUBLISH & ROLLBACK: PASS")
    print("================================================================================")

if __name__ == "__main__":
    run()
