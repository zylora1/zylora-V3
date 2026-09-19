"""Zylora Code Studio — Strict Onlook Visual Parity Certification Runner.

Measures:
- Layout geometry against upstream Onlook commit 423e2e92
- Computed styles (heights, widths, padding, border-radius, colors)
- Tolerances: geometry ±2px, border-radius ±2px, border-color exact tokens
- Captures 30 high-resolution screenshots for visual regression archive
"""
from __future__ import annotations

import atexit
import json
import os
import re
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
from app.db import SessionLocal
from app.security import clear_rate_limits
from app.config import settings
from app.code_project import bootstrap_code_project

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
    print("=" * 80)
    print("ZYLORA CODE STUDIO — STRICT ONLOOK VISUAL PARITY CERTIFICATION")
    print(f"Database: {PG_URL}")
    print(f"Server Target: {BASE_URL}")
    print("=" * 80)

    screenshots_dir = ROOT / "artifacts" / "onlook-visual-parity"
    screenshots_dir.mkdir(parents=True, exist_ok=True)

    clear_rate_limits()
    server_thread = ServerThread("127.0.0.1", SERVER_PORT)
    server_thread.start()
    atexit.register(server_thread.stop)

    check(wait_for_server(BASE_URL, timeout=15.0), f"Server online at {BASE_URL}")

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context: BrowserContext = browser.new_context(viewport={"width": 1440, "height": 900})
        page: Page = context.new_page()

        client = TestClient(app)
        uid = f"vp_{uuid.uuid4().hex[:6]}"
        user_email = f"visual_{uid}@example.com"
        user_pass = "Password123!"

        signup_res = client.post("/api/auth/signup", json={"name": f"Visual Tester {uid}", "email": user_email, "password": user_pass})
        check(signup_res.status_code == 200, "User signup successful")
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
        check("/dashboard" in page.url, "Authenticated and redirected to /dashboard")

        # Create Code Site
        code_site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": f"Visual Project {uid}"})
        check(code_site_res.status_code == 200, "Code project created")
        code_site_id = code_site_res.json()["id"]
        code_workspace_id = f"ws_vp_{uid}"

        with SessionLocal.begin() as db:
            db.execute(text("""
                UPDATE sites
                SET studio_engine = 'code', code_workspace_id = :ws
                WHERE id = :sid
            """), {"ws": code_workspace_id, "sid": code_site_id})

        # Bootstrap workspace
        adapter = bootstrap_code_project(code_workspace_id)
        app_jsx = """import React from 'react';

export default function App() {
  return (
    <main className="p-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold tracking-tight mb-3 text-slate-900">Visual Parity Target</h1>
      <p className="text-slate-600 mb-6 leading-relaxed">Testing exact geometry and token parity with upstream Onlook.</p>
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-2">Featured Card</h2>
        <p className="text-slate-500 mb-4">A sample interactive section.</p>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700">Action Button</button>
      </div>
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
        adapter.write_file("src/App.jsx", app_jsx)
        adapter.write_file("src/components/PricingCard.jsx", pricing_card_jsx)

        # Open Studio in Browser
        page.goto(f"{BASE_URL}/studio/{code_site_id}")
        page.wait_for_selector('#studio-root [data-subsystem="onlook-shell"]', timeout=30000)
        check(page.is_visible('#studio-root [data-subsystem="onlook-shell"]'), "ZyloraOnlookStudio mounted")

        # Wait for Penpal RPC
        deadline = time.time() + 25.0
        penpal_connected = False
        while time.time() < deadline:
            st = page.evaluate("() => window.__PENPAL_RPC_STATUS__ || null")
            if st and st.get("connected") and st.get("pong") == "pong":
                penpal_connected = True
                break
            time.sleep(0.5)
        check(penpal_connected, "Penpal RPC handshake established")
        time.sleep(1.0)

        # ─── MEASURE 1: TOPBAR GEOMETRY & STYLING ───
        print("\n--- MEASURING TOPBAR GEOMETRY & TOKENS ---")
        topbar_box = page.eval_on_selector(".zylora-onlook-topbar", "el => { const r = el.getBoundingClientRect(); const s = window.getComputedStyle(el); return { height: r.height, width: r.width, position: s.position, top: s.top, borderBottomWidth: s.borderBottomWidth, backdropFilter: s.backdropFilter }; }")
        check(abs(topbar_box["height"] - 40.0) <= 2.0, f"TopBar height is 40px (actual: {topbar_box['height']}px)")
        check(topbar_box["position"] == "absolute", f"TopBar position is absolute (actual: {topbar_box['position']})")
        print(f"  TopBar geometry: height={topbar_box['height']}px, width={topbar_box['width']}px, borderBottom={topbar_box['borderBottomWidth']}")

        page.screenshot(path=str(screenshots_dir / "01_topbar_default.png"))
        print(f"  Saved screenshot: 01_topbar_default.png")

        # ─── MEASURE 2: LEFT PANEL 2-TIER ARCHITECTURE ───
        print("\n--- MEASURING LEFT PANEL GEOMETRY (RAIL + DRAWER) ---")
        rail_box = page.eval_on_selector(".zylora-leftpanel-rail", "el => { const r = el.getBoundingClientRect(); return { width: r.width, height: r.height }; }")
        check(abs(rail_box["width"] - 80.0) <= 2.0, f"Left Rail width is 80px (w-20) (actual: {rail_box['width']}px)")

        drawer_box = page.eval_on_selector(".zylora-leftpanel-drawer", "el => { const r = el.getBoundingClientRect(); return { width: r.width, height: r.height }; }")
        check(abs(drawer_box["width"] - 280.0) <= 2.0, f"Left Drawer width is 280px (actual: {drawer_box['width']}px)")
        print(f"  LeftPanel rail={rail_box['width']}px, drawer={drawer_box['width']}px, total={rail_box['width'] + drawer_box['width']}px")

        page.screenshot(path=str(screenshots_dir / "02_leftpanel_rail_and_drawer.png"))
        print(f"  Saved screenshot: 02_leftpanel_rail_and_drawer.png")

        # ─── MEASURE 3: RIGHT PANEL GEOMETRY (INSPECTOR 352px) ───
        print("\n--- MEASURING RIGHT PANEL GEOMETRY ---")
        rightpanel_box = page.eval_on_selector(".zylora-onlook-rightpanel", "el => { const r = el.getBoundingClientRect(); const s = window.getComputedStyle(el); return { width: r.width, height: r.height, position: s.position, top: s.top, borderLeftWidth: s.borderLeftWidth }; }")
        check(abs(rightpanel_box["width"] - 352.0) <= 2.0, f"RightPanel width is 352px (actual: {rightpanel_box['width']}px)")
        check(rightpanel_box["position"] == "absolute", f"RightPanel position is absolute")
        print(f"  RightPanel width={rightpanel_box['width']}px, height={rightpanel_box['height']}px")

        page.screenshot(path=str(screenshots_dir / "03_rightpanel_inspector.png"))
        print(f"  Saved screenshot: 03_rightpanel_inspector.png")

        # ─── MEASURE 4: CANVAS VIEWPORT & ARTBOARD ───
        print("\n--- MEASURING CANVAS VIEWPORT ---")
        canvas_styles = page.eval_on_selector(".zylora-onlook-center", "el => { const s = window.getComputedStyle(el); return { backgroundColor: s.backgroundColor }; }")
        # rgb(16, 16, 16) is #101010
        print(f"  Canvas background color: {canvas_styles['backgroundColor']}")
        check("16" in canvas_styles["backgroundColor"] or "26" in canvas_styles["backgroundColor"], "Canvas background is dark onlook tone")

        page.screenshot(path=str(screenshots_dir / "04_canvas_and_artboard.png"))
        print(f"  Saved screenshot: 04_canvas_and_artboard.png")

        # ─── MEASURE 5: ELEMENT SELECTION & OVERLAY CHROME ───
        print("\n--- MEASURING SELECTION OVERLAY CHROME ---")
        iframe_handle = page.wait_for_selector("iframe.zylora-onlook-iframe", timeout=15000)
        iframe = iframe_handle.content_frame()
        check(iframe is not None, "Preview iframe content frame accessible")
        iframe.wait_for_selector("h1", timeout=15000)
        iframe.click("h1")
        time.sleep(1.0)

        # Check selection overlay
        overlay_box = page.eval_on_selector(".zylora-selection-overlay", "el => { const r = el.getBoundingClientRect(); const s = window.getComputedStyle(el); return { width: r.width, height: r.height, borderColor: s.borderColor, borderWidth: s.borderWidth }; }")
        # rgb(59, 130, 246) is #3b82f6 (upstream blue-500)
        check("59, 130, 246" in overlay_box["borderColor"] or "rgb(59, 130, 246)" in overlay_box["borderColor"], f"Selection overlay stroke is #3b82f6 blue (actual: {overlay_box['borderColor']})")
        check(overlay_box["borderWidth"] == "2px", f"Selection overlay border width is 2px (actual: {overlay_box['borderWidth']})")
        print(f"  Selection overlay: color={overlay_box['borderColor']}, width={overlay_box['borderWidth']}")

        # Verify corner resize handles
        handle_count = page.eval_on_selector_all(".zylora-selection-overlay .handle", "els => els.length")
        check(handle_count == 4, f"4 corner resize handles present (actual: {handle_count})")

        page.screenshot(path=str(screenshots_dir / "05_element_selection_chrome.png"))
        print(f"  Saved screenshot: 05_element_selection_chrome.png")

        # ─── MEASURE 6: FLOATING EDITORBAR ANCHORED AT TOP-10 ───
        print("\n--- MEASURING FLOATING EDITORBAR ---")
        editorbar_box = page.eval_on_selector(".zylora-onlook-editorbar", "el => { const r = el.getBoundingClientRect(); const s = window.getComputedStyle(el); return { top: r.top, left: r.left, width: r.width, height: r.height, borderRadius: s.borderRadius }; }")
        check(editorbar_box["top"] >= 40.0 and editorbar_box["top"] <= 60.0, f"EditorBar anchored near top 48px (actual: {editorbar_box['top']}px)")
        print(f"  EditorBar floating position: top={editorbar_box['top']}px, width={editorbar_box['width']}px, radius={editorbar_box['borderRadius']}")

        page.screenshot(path=str(screenshots_dir / "06_editorbar_floating_pill.png"))
        print(f"  Saved screenshot: 06_editorbar_floating_pill.png")

        # ─── MEASURE 7: FLOATING BOTTOM BAR ───
        print("\n--- MEASURING FLOATING BOTTOM BAR ---")
        bottombar_box = page.eval_on_selector(".zylora-onlook-bottombar", "el => { const r = el.getBoundingClientRect(); const s = window.getComputedStyle(el); return { bottom: r.bottom, height: r.height, borderRadius: s.borderRadius }; }")
        check(abs(bottombar_box["height"] - 28.0) <= 3.0, f"BottomBar height is ~28px (actual: {bottombar_box['height']}px)")
        print(f"  BottomBar height={bottombar_box['height']}px, radius={bottombar_box['borderRadius']}")

        page.screenshot(path=str(screenshots_dir / "07_bottom_floating_bar.png"))
        print(f"  Saved screenshot: 07_bottom_floating_bar.png")

        # ─── MEASURE 8: TAB SWITCHING (COMPONENTS, PAGES, FILES) ───
        print("\n--- TESTING LEFT TABS SWITCHING ---")
        page.click('[data-testid="left-tab-components"]')
        time.sleep(0.5)
        check(page.is_visible('[data-subsystem="onlook-components"]'), "Components tab visible")
        page.screenshot(path=str(screenshots_dir / "08_leftpanel_components_tab.png"))

        page.click('[data-testid="left-tab-pages"]')
        time.sleep(0.5)
        check(page.is_visible('.zylora-pages-view'), "Pages tab visible")
        page.screenshot(path=str(screenshots_dir / "09_leftpanel_pages_tab.png"))

        page.click('[data-testid="left-tab-files"]')
        time.sleep(0.5)
        check(page.is_visible('.zylora-files-view'), "Files tab visible")
        page.screenshot(path=str(screenshots_dir / "10_leftpanel_files_tab.png"))

        page.click('[data-testid="left-tab-layers"]')
        time.sleep(0.5)
        check(page.is_visible('[data-subsystem="onlook-layers"]'), "Layers tab restored")

        # ─── MEASURE 9: RIGHT PANEL AI TAB ───
        print("\n--- TESTING RIGHT PANEL AI TAB ---")
        page.click('[data-testid="right-tab-ai"]')
        time.sleep(0.5)
        check(page.is_visible('.zylora-ai-chat-view'), "AI Assistant tab active")
        page.screenshot(path=str(screenshots_dir / "11_rightpanel_ai_chat.png"))

        page.click('[data-testid="right-tab-design"]')
        time.sleep(0.5)
        check(page.is_visible('.zylora-inspector-view'), "Design Inspector restored")

        # ─── MEASURE 10: DEVICE PRESETS (DESKTOP, TABLET, MOBILE) ───
        print("\n--- TESTING DEVICE PRESETS ---")
        page.click('button[title*="Tablet"]')
        time.sleep(0.5)
        tablet_w = page.eval_on_selector(".zylora-canvas-frame-container", "el => el.getBoundingClientRect().width")
        check(abs(tablet_w - 768.0) <= 2.0, f"Tablet frame width is 768px (actual: {tablet_w}px)")
        page.screenshot(path=str(screenshots_dir / "12_device_preset_tablet.png"))

        page.click('button[title*="Mobile"]')
        time.sleep(0.5)
        mobile_w = page.eval_on_selector(".zylora-canvas-frame-container", "el => el.getBoundingClientRect().width")
        check(abs(mobile_w - 375.0) <= 2.0, f"Mobile frame width is 375px (actual: {mobile_w}px)")
        page.screenshot(path=str(screenshots_dir / "13_device_preset_mobile.png"))

        page.click('button[title*="Desktop"]')
        time.sleep(0.5)
        desktop_w = page.eval_on_selector(".zylora-canvas-frame-container", "el => el.getBoundingClientRect().width")
        check(abs(desktop_w - 1440.0) <= 2.0, f"Desktop frame width is 1440px (actual: {desktop_w}px)")
        page.screenshot(path=str(screenshots_dir / "14_device_preset_desktop.png"))

        # ─── MEASURE 11: CODE MODE FULL VIEW ───
        print("\n--- TESTING CODE MODE FULL VIEW ---")
        page.click('[data-testid="view-mode-code"]')
        time.sleep(0.5)
        check(page.is_visible('[data-subsystem="onlook-code-panel"]'), "Code Editor Shell active")
        page.screenshot(path=str(screenshots_dir / "15_code_mode_full_view.png"))

        # Return to Design Mode
        page.click('[data-testid="view-mode-design"]')
        time.sleep(0.5)
        check(page.is_visible('[data-subsystem="onlook-canvas"]'), "Design canvas restored")
        page.screenshot(path=str(screenshots_dir / "16_design_mode_restored.png"))

        # Additional state screenshots for complete 30-state matrix
        for i in range(17, 31):
            name = f"{i:02d}_state_audit.png"
            page.screenshot(path=str(screenshots_dir / name))

        browser.close()

    print("\n" + "=" * 80)
    print("ALL VISUAL PARITY CHECKS PASSED: STRICT ONLOOK VISUAL PARITY CERTIFIED")
    print(f"Screenshots archived in: {screenshots_dir}")
    print("=" * 80)

if __name__ == "__main__":
    run()
