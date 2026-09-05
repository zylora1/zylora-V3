import os
import re
import sys
import time
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from app.main import app
from app.db import SessionLocal, migrate
from app.security import hash_password, new_session
from sqlalchemy import text

from scripts.browser_e2e import (
    inline_document,
    inline_standalone,
    browser_bootstrap,
    patch_dashboard,
    patch_editor,
    patch_auth,
    new_page,
    render_public_page,
)

SCREENSHOT_DIR = ROOT / "artifacts" / "baseline_screenshots"
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

VIEWPORTS = [
    (1440, 900, "1440px"),
    (1280, 800, "1280px"),
    (1024, 768, "1024px"),
    (768, 1024, "768px"),
    (430, 932, "430px"),
    (390, 844, "390px"),
    (375, 812, "375px"),
    (360, 640, "360px"),
]

def seed_baseline_data():
    migrate()
    with SessionLocal.begin() as db:
        uid = "baseline-user-001"
        db.execute(text("DELETE FROM sessions WHERE user_id=:u"), {"u": uid})
        db.execute(text("DELETE FROM users WHERE id=:u"), {"u": uid})
        db.execute(text("INSERT INTO users (id, email, password_hash, name, role, plan, ai_credits, lead_credits, email_verified, created_at) VALUES (:u, 'demo@zylora.com', :p, 'Alex Morgan', 'USER', 'GROWTH', 50, 20, 1, '2026-08-01T00:00:00Z')"), {"u": uid, "p": hash_password("Password123!")})

        admin_uid = "baseline-admin-001"
        db.execute(text("DELETE FROM sessions WHERE user_id=:u"), {"u": admin_uid})
        db.execute(text("DELETE FROM users WHERE id=:u"), {"u": admin_uid})
        db.execute(text("INSERT INTO users (id, email, password_hash, name, role, plan, ai_credits, lead_credits, email_verified, created_at) VALUES (:u, 'admin@zylora.com', :p, 'Super Admin', 'SUPER_ADMIN', 'PRO', 999, 999, 1, '2026-08-01T00:00:00Z')"), {"u": admin_uid, "p": hash_password("Password123!")})

        sid = "baseline-site-001"
        db.execute(text("DELETE FROM sites WHERE id=:s"), {"s": sid})
        db.execute(text("INSERT INTO sites (id, user_id, name, slug, template_slug, origin, status, business_name, tagline, description, accent, updated_at, created_at) VALUES (:s, :u, 'Aura Aesthetic Clinic', 'aura-clinic', 'prime-dental', 'TEMPLATE', 'DRAFT', 'Aura Clinic', 'Modern skin and wellness solutions', 'Premier clinic offering medical and aesthetic skincare treatments.', '#10b981', '2026-08-20T10:00:00Z', '2026-08-20T10:00:00Z')"), {"s": sid, "u": uid})
    sess_token, csrf, _ = new_session(uid)
    admin_token, admin_csrf, _ = new_session(admin_uid)
    return sess_token, csrf, admin_token, admin_csrf, sid

def main():
    sess_token, csrf, admin_token, admin_csrf, site_id = seed_baseline_data()

    with TestClient(app, cookies={"zylora_session": sess_token}) as client, sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=["--no-sandbox"])

        # Prepare inlined documents
        landing_html = inline_document("index.html", "landing.css", "landing.js", browser_bootstrap())
        login_html = inline_document("login.html", "auth.css", "auth.js", browser_bootstrap(), patch_auth)
        signup_html = inline_document("signup.html", "auth.css", "auth.js", browser_bootstrap(), patch_auth)
        dash_html = inline_document("dashboard.html", "dashboard.css", "dashboard.js", browser_bootstrap(), patch_dashboard)
        admin_doc_html = inline_document("super-admin.html", "dashboard.css", "super-admin.js", browser_bootstrap())
        editor_html = inline_document("editor.html", "editor.css", "editor.js", browser_bootstrap(), lambda j: patch_editor(j, site_id))

        for w, h, label in VIEWPORTS:
            print(f"Capturing viewport: {label} ({w}x{h})...")

            # 1. Landing page
            page = new_page(browser, client, (w, h))
            page.set_content(landing_html, wait_until="load")
            time.sleep(0.3)
            page.screenshot(path=str(SCREENSHOT_DIR / f"01_landing_{label}.png"), full_page=False)
            page.close()

            # 2. Login page
            page = new_page(browser, client, (w, h))
            page.set_content(login_html, wait_until="load")
            time.sleep(0.3)
            page.screenshot(path=str(SCREENSHOT_DIR / f"02_login_{label}.png"), full_page=False)
            page.close()

            # 3. Signup page
            page = new_page(browser, client, (w, h))
            page.set_content(signup_html, wait_until="load")
            time.sleep(0.3)
            page.screenshot(path=str(SCREENSHOT_DIR / f"03_signup_{label}.png"), full_page=False)
            page.close()

            # 4. Dashboard (Websites view)
            page = new_page(browser, client, (w, h))
            page.set_content(dash_html, wait_until="load")
            time.sleep(0.8)
            page.screenshot(path=str(SCREENSHOT_DIR / f"04_dashboard_websites_{label}.png"), full_page=False)

            # 5. Dashboard (Templates view)
            tmpl_btn = page.locator('.rail-btn[data-view="templates"]')
            if tmpl_btn.count():
                tmpl_btn.evaluate("b => b.click()")
                time.sleep(0.5)
                page.screenshot(path=str(SCREENSHOT_DIR / f"05_dashboard_templates_{label}.png"), full_page=False)

            # 6. Dashboard (Site Health view)
            health_btn = page.locator('.rail-btn[data-view="health"]')
            if health_btn.count():
                health_btn.evaluate("b => b.click()")
                time.sleep(0.5)
                page.screenshot(path=str(SCREENSHOT_DIR / f"06_dashboard_health_{label}.png"), full_page=False)

            page.close()

            # 7. SUPER_ADMIN Control Plane
            with TestClient(app, cookies={"zylora_session": admin_token}) as admin_client:
                admin_page = new_page(browser, admin_client, (w, h))
                admin_page.set_content(admin_doc_html, wait_until="load")
                time.sleep(0.5)
                admin_page.screenshot(path=str(SCREENSHOT_DIR / f"07_super_admin_{label}.png"), full_page=False)
                admin_page.close()

            # 8. AI Editor
            page = new_page(browser, client, (w, h))
            page.set_content(editor_html, wait_until="load")
            time.sleep(1.0)
            page.screenshot(path=str(SCREENSHOT_DIR / f"08_editor_{label}.png"), full_page=False)
            page.close()

            # 9 & 10. AI Sales Assistant widget on preview
            try:
                page = render_public_page(browser, client, f"/api/sites/{site_id}/preview")
                page.set_viewport_size({"width": w, "height": h})
                time.sleep(0.8)
                launcher = page.locator(".zylora-sales-launcher")
                if launcher.is_visible():
                    launcher.click()
                    time.sleep(0.4)
                    page.screenshot(path=str(SCREENSHOT_DIR / f"09_sales_assistant_open_{label}.png"), full_page=False)
                    enquiry_btn = page.locator('[data-z-action="enquiry"]')
                    if enquiry_btn.is_visible():
                        enquiry_btn.click()
                        time.sleep(0.4)
                        page.screenshot(path=str(SCREENSHOT_DIR / f"10_sales_assistant_enquiry_{label}.png"), full_page=False)
                page.close()
            except Exception as e:
                print(f"Assistant capture note ({label}): {e}")

        browser.close()
    print("Baseline capture complete!")

if __name__ == "__main__":
    main()
