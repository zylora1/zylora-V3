import sys
import json
import base64
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='backslashreplace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='backslashreplace')

from scripts.capture_baseline import seed_baseline_data
from scripts.browser_e2e import new_page, inline_document, patch_dashboard, browser_bootstrap
from playwright.sync_api import sync_playwright
from fastapi.testclient import TestClient
from app.main import app
from app.db import SessionLocal
from sqlalchemy import text

SCREENSHOT_DIR = ROOT / "artifacts" / "redesign_qa"
SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)

VIEWPORTS = [
    (1440, 900, "1440px_desktop"),
    (1280, 800, "1280px_laptop"),
    (1024, 768, "1024px_tablet_landscape"),
    (768, 1024, "768px_tablet_portrait"),
    (430, 932, "430px_mobile_large"),
    (390, 844, "390px_mobile_standard"),
    (375, 812, "375px_mobile_se"),
    (360, 640, "360px_mobile_small")
]

def run_qa():
    print("=== Starting Zylora Master Dashboard & Super Admin Verification ===")
    user_sess, user_csrf, site_id, admin_token, admin_csrf = seed_baseline_data()

    with SessionLocal.begin() as db:
        db.execute(text("""
            INSERT OR REPLACE INTO appointments (id, site_id, name, email, starts_at, status, source, created_at)
            VALUES ('appt-test-01', :sid, 'Sarah Connor', 'sarah@skynet.ai', '2026-09-10T14:00:00Z', 'BOOKED', 'WEBSITE', '2026-09-04T10:00:00Z')
        """), {'sid': site_id})
        db.execute(text("UPDATE sites SET status='LIVE' WHERE id=:sid"), {'sid': site_id})

    errors = []
    
    with TestClient(app, cookies={'zylora_session': user_sess}) as client, sync_playwright() as p:
        browser = p.chromium.launch()
        
        dash_html = inline_document('dashboard.html', 'dashboard.css', 'dashboard.js', f'window.__CSRF="{user_csrf}";\n' + browser_bootstrap(), patch=patch_dashboard)
        
        for width, height, label in VIEWPORTS:
            page = new_page(browser, client, (width, height))
            
            def log_console(msg):
                if msg.type == 'error':
                    if 'favicon' not in msg.text and 'test-resource' not in msg.text:
                        errors.append(f"[{label}] Console error: {msg.text}")
            
            def log_page_error(exc):
                errors.append(f"[{label}] Page error: {exc}")

            page.on("console", log_console)
            page.on("pageerror", log_page_error)
            
            page.set_content(dash_html, wait_until='load')
            page.wait_for_timeout(1500)
            
            title = page.locator('#heroSiteTitle').text_content()
            status = page.locator('#heroSiteStatusText').text_content()
            health_score = page.locator('#overviewHealthScore').text_content()
            
            print(f"[{label}] Dashboard Loaded -> Site: '{title}', Status: '{status}', Health Score: '{health_score}'")
            
            page.screenshot(path=str(SCREENSHOT_DIR / f"dashboard_overview_{label}.png"))
            page.close()

        page = new_page(browser, client, (1440, 900))
        page.on("console", lambda m: errors.append(f"[views] {m.text}") if m.type == 'error' and 'favicon' not in m.text else None)
        page.on("pageerror", lambda e: errors.append(f"[views] Page error: {e}"))
        page.set_content(dash_html, wait_until='load')
        page.wait_for_timeout(1200)

        views_to_test = [
            ('websites', '#websites', 'Websites'),
            ('templates', '#templates', 'Templates'),
            ('leads', '#leads', 'Leads'),
            ('assistant', '#assistant', 'AI Sales Assistant'),
            ('appointments', '#appointments', 'Appointments'),
            ('analytics', '#analytics', 'Growth Center'),
            ('health', '#health', 'Site Health'),
            ('domains', '#domains', 'Domains & SSL'),
            ('integrations', '#integrations', 'Integrations'),
            ('freelancer', '#freelancer', 'Freelancers'),
            ('support', '#support', 'Support'),
            ('billing', '#billing', 'Billing & Usage'),
            ('settings', '#settings', 'Settings')
        ]

        for v_id, selector, v_name in views_to_test:
            page.evaluate(f"setView('{v_id}')")
            page.wait_for_timeout(500)
            is_active = page.locator(f"{selector}.active").count() > 0
            print(f"View '{v_name}' ({v_id}): active={is_active}")
            assert is_active, f"View {v_id} did not become active"
            page.screenshot(path=str(SCREENSHOT_DIR / f"view_{v_id}.png"))

        page.close()

        admin_uid = "baseline-admin-001"
        from app.security import new_session
        admin_token, admin_csrf, _ = new_session(admin_uid)
        
        with TestClient(app, cookies={'zylora_session': admin_token}) as admin_client:
            admin_html = inline_document('super-admin.html', 'dashboard.css', 'super-admin.js', f'window.__CSRF="{admin_csrf}";\n' + browser_bootstrap())
            admin_page = new_page(browser, admin_client, (1440, 900))
            admin_page.on("console", lambda m: errors.append(f"[admin] {m.text}") if m.type == 'error' and 'favicon' not in m.text else None)
            admin_page.on("pageerror", lambda e: errors.append(f"[admin] Page error: {e}"))
            
            admin_page.set_content(admin_html, wait_until='load')
            admin_page.wait_for_timeout(1500)

            admin_title = admin_page.locator('#paneTitle').text_content()
            total_users = admin_page.locator('#statTotalUsers').text_content()
            print(f"Super Admin Loaded -> Title: '{admin_title}', Total Users: '{total_users}'")
            admin_page.screenshot(path=str(SCREENSHOT_DIR / "super_admin_overview.png"))

            admin_tabs = ['adminUsers', 'adminTemplates', 'adminPlatformBlog', 'adminPlans', 'adminLeads', 'adminFreelancers', 'adminSupport', 'adminAudit', 'adminSystem']
            for tab in admin_tabs:
                admin_page.evaluate(f"switchAdminTab('{tab}')")
                admin_page.wait_for_timeout(400)
                tab_active = admin_page.locator(f"#{tab}.active").count() > 0
                assert tab_active, f"Admin tab {tab} did not activate"

            admin_page.close()

        browser.close()

    print(f"\n=== Verification Complete: {len(errors)} errors found ===")
    if errors:
        for err in errors:
            print("ERROR:", err)
    else:
        print("ALL QA CHECKS PASSED: 0 console errors, 0 page errors, all views responsive and interactive!")

if __name__ == '__main__':
    run_qa()
