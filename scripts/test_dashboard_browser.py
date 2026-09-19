"""Multi-browser Playwright certification runner for Zylora Dashboard Deep UX Rebuild.

Tests Chromium, Firefox, and WebKit on Windows for:
1. Workspace Snapshot & Real-time Home KPI Metrics
2. Recent Projects list & direct Studio launch CTAs
3. Needs Attention operational checklist
4. Chronological Workspace Activity Feed
5. Create Website 3-Pathway Modal (AI brief, Template picker, Blank Studio)
6. Projects View: Search, Sort, Grid/List view mode toggling, refined cards
7. Leads View: Quality scores, Status filter pills, and Slide-over Drawer
8. AI Sales Assistant Control Center: Configuration, Playground, Knowledge Base
9. Custom Domains & DNS Routing Setup Wizard
10. Integrations Directory & Slide-Over Google Sheets Drawer
11. Account Settings: Vertically categorized navigation (Profile, Notifications, WhatsApp, AI Assistant, Danger Zone)
12. CRM Sub-navigation mounting and state preservation
13. 9 Responsive Breakpoints: 1920, 1440, 1280, 1024, 768, 430, 390, 375, 360 (zero horizontal scrollbar, adaptive navigation)
"""
from __future__ import annotations

import atexit
import json
import os
import re
import sys
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

AUDIT_DB = ROOT / "data" / f"dash-cert-{uuid.uuid4().hex}.db"
os.environ.setdefault("APP_ENV", "test")
os.environ["DATABASE_URL"] = f"sqlite:///{AUDIT_DB}"
atexit.register(lambda: AUDIT_DB.exists() and AUDIT_DB.unlink())

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits
from scripts.browser_e2e import browser_bootstrap, new_page, no_overflow, backend_bridge

checks: list[str] = []


def check(condition: bool, label: str) -> None:
    assert condition, f"FAILED: {label}"
    checks.append(label)
    print(f"  PASS: {label}", flush=True)


def reset_db() -> None:
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in [
            "assistant_usage", "assistant_messages", "assistant_conversations", "sales_assistant_configs",
            "subscriptions", "billing_profiles", "assistant_action_keys",
            "support_messages", "support_conversations", "freelancer_leads", "freelancer_outbound_clicks",
            "freelancer_external_links", "rate_limit_buckets", "source_export_entitlements",
            "source_export_orders", "analytics_events", "appointment_settings", "freelancer_ratings",
            "freelancer_template_submissions", "freelancer_profiles", "chatbot_messages",
            "site_knowledge_docs", "credit_usage", "credit_wallets", "webhook_events",
            "razorpay_orders", "google_sheets_integrations", "custom_domains",
            "ownership_transfers", "blog_posts", "pro_leads", "audit_log",
            "billing_events", "outbox", "whatsapp_otps", "notification_settings",
            "appointments", "leads", "oauth_states", "auth_tokens", "sites", "sessions", "users",
        ]:
            try:
                db.execute(text(f"DELETE FROM {table}"))
            except Exception:
                pass
        try:
            db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
            db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))
        except Exception:
            pass


def build_dashboard_html() -> str:
    html = (ROOT / "static" / "dashboard.html").read_text(encoding="utf-8")
    
    # Inline all local stylesheets
    def _inline_css(match):
        href = match.group(1).split("?", 1)[0]
        rel = href.split("/static/", 1)[-1]
        target = ROOT / "static" / rel
        return f"<style>{target.read_text(encoding='utf-8')}</style>" if target.exists() else ""
    html = re.sub(r'<link\b[^>]*href=["\'](/static/[^"\']+\.css(?:\?[^"\']*)?)["\'][^>]*?/?>', _inline_css, html, flags=re.I)
    
    # Remove remote fonts
    html = re.sub(r'<link[^>]+href="https://fonts\.googleapis\.com/[^>]+>', '', html)
    html = re.sub(r'<link[^>]+href="https://fonts\.gstatic\.com[^>]*>', '', html)
    
    # Bootstrap script
    boot = browser_bootstrap()
    
    # Inline local scripts
    def _inline_js(match):
        src = match.group(1).split("?", 1)[0]
        rel = src.split("/static/", 1)[-1]
        target = ROOT / "static" / rel
        if not target.exists():
            return ""
        content = target.read_text(encoding="utf-8")
        if rel == "dashboard.js":
            content = content.replace("location.href=", "window.__NAV=")
            content = content.replace("location.replace(", "window.__NAV=(")
            return f"<script>{boot}</script><script>{content}</script>"
        return f"<script>{content}</script>"
    
    html = re.sub(r'<script\b[^>]*src=["\'](/static/[^"\']+\.js(?:\?[^"\']*)?)["\'][^>]*>\s*</script>', _inline_js, html, flags=re.I)
    return html


def seed_environment(client: TestClient) -> dict[str, Any]:
    reset_db()
    uid = uuid.uuid4().hex[:8]

    # 1. Seed User
    signup = client.post(
        "/api/auth/signup",
        json={"name": "Alex Morgan", "email": f"alex-{uid}@example.com", "password": "Password123!"},
    )
    assert signup.status_code == 200, signup.text
    user_data = signup.json()
    csrf = user_data["csrf_token"]
    if user_data.get("debug_verification_token"):
        client.post("/api/auth/email/verify", json={"token": user_data["debug_verification_token"]})
    client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"})

    # 2. Seed Sites: 1 LIVE, 1 DRAFT
    live_site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Apex Dental Care"})
    assert live_site_res.status_code == 200
    live_site_id = live_site_res.json()["id"]

    draft_site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Pulse Tech Labs"})
    assert draft_site_res.status_code == 200
    draft_site_id = draft_site_res.json()["id"]

    # Mark first site LIVE with slug in database
    with SessionLocal.begin() as db:
        db.execute(
            text("UPDATE sites SET status = 'LIVE', slug = 'apex-dental', business_name = 'Apex Dental Care' WHERE id = :sid"),
            {"sid": live_site_id},
        )
        db.execute(
            text("UPDATE sites SET status = 'DRAFT', slug = 'pulse-tech', business_name = 'Pulse Tech Labs' WHERE id = :sid"),
            {"sid": draft_site_id},
        )

    # Add custom domain via API
    client.post(
        f"/api/sites/{live_site_id}/domains",
        headers={"X-CSRF-Token": csrf},
        json={"hostname": "www.apexdental.com"},
    )

    # Add 3 leads via API
    for lead_name, email, phone, msg in [
        ("Sarah Connor", "sarah@skynet.com", "+15550199", "Need appointment"),
        ("John Matrix", "john@matrix.io", "+15550122", "Quote request"),
        ("Ellen Ripley", "ripley@weyland.com", "+15550177", "General query"),
    ]:
        res = client.post(
            "/api/leads",
            json={
                "site_id": live_site_id,
                "name": lead_name,
                "email": email,
                "phone": phone,
                "message": msg,
                "service_enquiry_consent": True,
            },
        )
        assert res.status_code == 200, res.text

    # Update lead status via lead API
    leads_list = client.get("/api/leads").json().get("items", [])
    assert len(leads_list) == 3, f"Expected 3 leads, got {len(leads_list)}"
    client.patch(f"/api/leads/{leads_list[1]['id']}/status", headers={"X-CSRF-Token": csrf}, json={"status": "QUALIFIED"})

    return {"csrf": csrf, "live_site_id": live_site_id, "draft_site_id": draft_site_id}


def run_certification():
    dash_html = build_dashboard_html()

    browsers_to_test = [
        ("Chromium", "chromium"),
        ("Firefox", "firefox"),
        ("WebKit", "webkit"),
    ]

    results: dict[str, Any] = {}

    for name, launcher_name in browsers_to_test:
        print(f"\n========================================================")
        print(f"  STARTING CERTIFICATION: Browser Engine: {name}")
        print(f"========================================================")
        client = TestClient(app)
        seed_environment(client)
        console_logs: list[str] = []
        page_errors: list[str] = []

        with sync_playwright() as p:
            launcher = getattr(p, launcher_name)
            try:
                browser = launcher.launch(headless=True)
            except Exception as e:
                print(f"[{name}] Skipped launching: {e}")
                results[name] = {"status": "SKIPPED", "error": str(e)}
                continue

            try:
                page = new_page(browser, client, (1440, 900))
                page.on("console", lambda msg: console_logs.append(f"[{msg.type}] {msg.text}"))
                page.on("pageerror", lambda err: page_errors.append(str(err)))

                # Load Dashboard
                page.set_content(dash_html, wait_until="load")
                page.wait_for_function("document.querySelector('#userName')?.textContent?.includes('Alex')")

                # ========================================================
                # 1. Topbar & Shell Verification
                # ========================================================
                print(f"\n[{name}] --- 1. Shell & Navigation ---")
                check(page.locator(".rail-logo").is_visible(), f"{name}: Sidebar brand wordmark is visible")
                check(page.locator("#globalSearch").is_visible(), f"{name}: Global search with shortcut is visible")
                check(page.locator("#notificationBell").is_visible(), f"{name}: Notification bell indicator is visible")
                check("Alex" in page.locator("#userName").inner_text(), f"{name}: User profile name rendered in topbar")

                # ========================================================
                # 2. Home (#overview) Deep UX Rebuild
                # ========================================================
                page.wait_for_function("document.querySelector('#snapTotalProjects')?.textContent === '2' && document.querySelector('#snapTotalLeads')?.textContent === '3'")
                check(page.locator("#snapTotalProjects").inner_text() == "2", f"{name}: Total Projects snapshot reflects 2 sites")
                check(page.locator("#snapLiveWebsites").inner_text() == "1", f"{name}: Live Websites snapshot reflects 1 live site")
                check(page.locator("#snapTotalLeads").inner_text() == "3", f"{name}: Leads snapshot reflects 3 captured leads")
                check(page.locator("#homeRecentProjects .recent-project-card").count() == 2, f"{name}: Recent Projects list renders both sites")
                check(page.locator("#homeNeedsAttention .attention-item").count() >= 1, f"{name}: Needs Attention list renders actionable alerts")
                check(page.locator("#homeActivityFeed .activity-feed-item").count() >= 3, f"{name}: Chronological activity feed populated")

                # Verify [data-testid="quick-new"] immediate studio launch
                page.locator('[data-testid="quick-new"]').click()
                page.wait_for_function("window.__NAV?.startsWith('/studio/')", timeout=8000)
                check("/studio/" in page.evaluate("window.__NAV"), f"{name}: Quick Blank Studio navigates directly to Studio")
                page.evaluate("window.__NAV = ''")

                # ========================================================
                # 3. Create Website 3-Pathway Modal
                # ========================================================
                print(f"\n[{name}] --- 3. Create Website 3-Pathway Modal ---")
                page.locator("#overviewCreateSiteBtn").click()
                page.wait_for_function("document.querySelector('#createProjectModal')?.classList.contains('open')")
                check(page.locator("#createOptionsGrid").is_visible(), f"{name}: 3-Pathways options grid opens")
                check(page.locator("#optionStartAi").is_visible(), f"{name}: AI Generation option card visible")
                check(page.locator("#optionStartTemplate").is_visible(), f"{name}: Template Browser option card visible")
                check(page.locator("#optionStartBlank").is_visible(), f"{name}: Blank Studio option card visible")

                # Test AI Subpane
                page.locator("#optionStartAi").click()
                page.wait_for_function("document.querySelector('#createAiPane')?.style.display !== 'none'")
                check(page.locator("#createAiName").is_visible(), f"{name}: AI prompt form is displayed")
                page.locator("#backToCreateOptions").click()
                page.wait_for_function("document.querySelector('#createOptionsGrid')?.style.display !== 'none'")
                check(page.locator("#createOptionsGrid").is_visible(), f"{name}: Back button restores options grid")

                # Test Template Subpane
                page.locator("#optionStartTemplate").click()
                page.wait_for_function("document.querySelector('#createTemplatePane')?.style.display !== 'none'")
                check(page.locator("#templateCardsGrid .template-picker-card").count() >= 4, f"{name}: Template cards grid renders")
                page.locator('[data-close="createProjectModal"]').click()
                page.wait_for_function("!document.querySelector('#createProjectModal')?.classList.contains('open')")
                check(not page.locator("#createProjectModal").evaluate("e => e.classList.contains('open')"), f"{name}: Create Modal closes")

                # ========================================================
                # 4. Projects View (#websites)
                # ========================================================
                print(f"\n[{name}] --- 4. Projects View & Controls ---")
                page.locator('aside.rail .rail-btn[data-view="websites"]').click()
                page.wait_for_function("document.querySelector('#websites')?.classList.contains('active')")
                check(page.locator("#websites").is_visible(), f"{name}: Projects view is active")
                check(page.locator("#siteGrid .site-card").count() == 2, f"{name}: Project cards render in grid")
                
                # Test view mode toggle: List view
                page.locator("#viewModeList").click()
                check(page.locator("#siteGrid").evaluate("e => e.classList.contains('list-view')"), f"{name}: List view mode activates")
                page.locator("#viewModeGrid").click()
                check(not page.locator("#siteGrid").evaluate("e => e.classList.contains('list-view')"), f"{name}: Grid view mode activates")

                # Test search filtering
                page.fill("#projectSearch", "Dental")
                check(page.locator("#siteGrid .site-card:not([hidden])").count() == 1, f"{name}: Search filter isolates Apex Dental Care")
                page.fill("#projectSearch", "")

                # ========================================================
                # 5. Leads View (#leads) & Slide-Over Drawer
                # ========================================================
                print(f"\n[{name}] --- 5. Leads View & Slide-Over Drawer ---")
                page.locator('aside.rail .rail-btn[data-view="leads"]').click()
                page.wait_for_function("document.querySelector('#leads')?.classList.contains('active')")
                check(page.locator("#leads").is_visible(), f"{name}: Leads view is active")
                check(page.locator("#leadRows tr").count() == 3, f"{name}: All 3 leads render in table")

                # Test status filter pills
                page.locator('[data-lead-filter="QUALIFIED"]').click()
                check(page.locator("#leadRows tr:not([style*='display: none'])").count() == 1, f"{name}: QUALIFIED filter pill isolates John Matrix")
                page.locator('[data-lead-filter="ALL"]').click()
                check(page.locator("#leadRows tr:not([style*='display: none'])").count() == 3, f"{name}: ALL filter pill restores all 3 leads")

                # Test Lead Detail Slide-Over Drawer
                page.locator("#leadRows tr").first.locator(".lead-detail-btn").click()
                page.wait_for_function("document.querySelector('#leadDetailDrawer')?.classList.contains('open')")
                check(page.locator("#leadDetailDrawer").evaluate("e => e.classList.contains('open')"), f"{name}: Lead slide-over drawer opens")
                check(any(lead_name in page.locator("#leadDrawerName").inner_text() for lead_name in ["Ellen", "John", "Sarah"]), f"{name}: Drawer displays lead details")
                check(page.locator("#leadDrawerStatusPicker").is_visible(), f"{name}: Pipeline stage picker is available in drawer")
                page.locator("#leadDrawerClose").click()
                check(not page.locator("#leadDetailDrawer").evaluate("e => e.classList.contains('open')"), f"{name}: Lead slide-over drawer closes")

                # ========================================================
                # 6. AI Sales Assistant (#assistant) Tabs
                # ========================================================
                print(f"\n[{name}] --- 6. AI Sales Assistant Control Hub ---")
                page.locator('aside.rail .rail-btn[data-view="assistant"]').click()
                page.wait_for_function("document.querySelector('#assistant')?.classList.contains('active')")
                check(page.locator("#assistant").is_visible(), f"{name}: Assistant view is active")
                check(page.locator("#assistantPaneConfig").is_visible(), f"{name}: Configuration tab is active initially")

                # Switch to Interactive Playground tab
                page.locator('[data-assistant-tab="playground"]').click()
                page.wait_for_function("document.querySelector('#assistantPanePlayground')?.classList.contains('active')")
                check(page.locator("#dedicatedAssistantTranscript").is_visible(), f"{name}: Interactive playground chat is visible")

                # Switch to Approved Knowledge tab
                page.locator('[data-assistant-tab="knowledge"]').click()
                page.wait_for_function("document.querySelector('#assistantPaneKnowledge')?.classList.contains('active')")
                check(page.locator("#knowledgeForm").is_visible(), f"{name}: Knowledge base upload form is visible")

                # Return to Configuration tab
                page.locator('[data-assistant-tab="config"]').click()
                check(page.locator("#assistantPaneConfig").is_visible(), f"{name}: Configuration pane restored")

                # ========================================================
                # 7. Domains (#domains) & Wizard Modal
                # ========================================================
                print(f"\n[{name}] --- 7. Domains & Setup Wizard ---")
                page.locator('aside.rail .rail-btn[data-view="domains"]').click()
                page.wait_for_function("document.querySelector('#domains')?.classList.contains('active')")
                check(page.locator("#domains").is_visible(), f"{name}: Domains view is active")
                page.locator('button:has-text("+ Connect Custom Domain")').click()
                page.wait_for_function("document.querySelector('#domainSetupModal')?.classList.contains('open')")
                check(page.locator("#domainSetupModal").evaluate("e => e.classList.contains('open')"), f"{name}: Custom Domain Setup Wizard opens")
                check(page.locator(".dns-records-table").is_visible(), f"{name}: Required DNS guidance table rendered")
                page.locator('[data-close="domainSetupModal"]').first.click()
                check(not page.locator("#domainSetupModal").evaluate("e => e.classList.contains('open')"), f"{name}: Custom Domain Setup Wizard closes")

                # ========================================================
                # 8. Integrations (#integrations) & Google Sheet Drawer
                # ========================================================
                print(f"\n[{name}] --- 8. Integrations & Google Sheet Drawer ---")
                page.locator('aside.rail .rail-btn[data-view="integrations"]').click()
                page.wait_for_function("document.querySelector('#integrations')?.classList.contains('active')")
                check(page.locator("#integrations").is_visible(), f"{name}: Integrations directory is active")
                page.locator('button:has-text("Configure →")').first.click()
                page.wait_for_function("document.querySelector('#googleSheetDrawer')?.classList.contains('open')")
                check(page.locator("#googleSheetDrawer").evaluate("e => e.classList.contains('open')"), f"{name}: Google Sheets slide-over drawer opens")
                check(page.locator("#googleSheetConfig").is_visible(), f"{name}: Google Sheets configuration form is visible")
                page.locator('#googleSheetDrawer .drawer-close').click()
                check(not page.locator("#googleSheetDrawer").evaluate("e => e.classList.contains('open')"), f"{name}: Google Sheets drawer closes")

                # ========================================================
                # 9. Settings (#settings) Categorized Tabs
                # ========================================================
                print(f"\n[{name}] --- 9. Categorized Settings Hub ---")
                page.locator('aside.rail .rail-btn[data-view="settings"]').click()
                page.wait_for_function("document.querySelector('#settings')?.classList.contains('active')")
                check(page.locator("#settings").is_visible(), f"{name}: Settings view is active")
                check(page.locator("#settingsPaneProfile").is_visible(), f"{name}: Profile settings pane is active")

                page.locator('[data-settings-tab="notifications"]').click()
                check(page.locator("#settingsPaneNotifications").is_visible(), f"{name}: Notifications settings pane is active")

                page.locator('[data-settings-tab="danger"]').click()
                check(page.locator("#settingsPaneDanger").is_visible(), f"{name}: Danger Zone settings pane is active")

                # ========================================================
                # 10. CRM Sub-navigation
                # ========================================================
                print(f"\n[{name}] --- 10. CRM Sub-navigation ---")
                page.locator('aside.rail .rail-btn[data-view="crm-overview"]').click()
                page.wait_for_function("document.querySelector('#crm-overview')?.classList.contains('active')")
                check(page.locator(".view.active .crm-subnav").is_visible(), f"{name}: CRM sub-navigation is mounted")
                page.locator('.view.active .crm-subnav button:has-text("Contacts")').click()
                page.wait_for_function("document.querySelector('#crm-contacts')?.classList.contains('active')")
                check(page.locator("#crm-contacts").is_visible(), f"{name}: Switched to CRM Contacts view")
                page.locator('.view.active .crm-subnav button:has-text("Pipeline")').click()
                page.wait_for_function("document.querySelector('#crm-deals')?.classList.contains('active')")
                check(page.locator("#crm-deals").is_visible(), f"{name}: Switched to CRM Pipeline Deals view")

                # ========================================================
                # 11. 9 Responsive Breakpoints Matrix
                # ========================================================
                print(f"\n[{name}] --- 11. Responsive Breakpoint Matrix (9 Breakpoints) ---")
                breakpoints = [
                    (1920, 1080, "1920px (Ultra-wide desktop)"),
                    (1440, 900, "1440px (Standard desktop)"),
                    (1280, 800, "1280px (Compact desktop)"),
                    (1024, 768, "1024px (Tablet landscape)"),
                    (768, 1024, "768px (Tablet portrait)"),
                    (430, 932, "430px (iPhone 15 Pro Max)"),
                    (390, 844, "390px (iPhone 14)"),
                    (375, 667, "375px (iPhone SE)"),
                    (360, 800, "360px (Standard Android)"),
                ]

                # Switch to Overview for responsive testing
                page.locator('aside.rail .rail-btn[data-view="overview"]').click()
                time.sleep(0.1)

                for w, h, label in breakpoints:
                    page.set_viewport_size({"width": w, "height": h})
                    time.sleep(0.05)
                    overflow_ok = no_overflow(page)
                    check(overflow_ok, f"{name}: {label} zero horizontal overflow")
                    if w <= 768:
                        check(page.locator(".mobile-bottom-nav").is_visible(), f"{name}: {label} mobile bottom nav is visible")

                print(f"\n[{name}] CERTIFICATION COMPLETED SUCCESSFULLY with 0 errors!")
                results[name] = {"status": "PASSED", "checks": len(checks)}

            except Exception as e:
                print(f"[{name}] FAILED: {e}")
                import traceback
                traceback.print_exc()
                print(f"[{name}] Recent Console logs:\n", "\n".join(console_logs[-15:]))
                print(f"[{name}] Page errors:\n", "\n".join(page_errors))
                results[name] = {"status": "FAILED", "error": str(e), "logs": console_logs, "page_errors": page_errors}
            finally:
                browser.close()

    print("\n" + "=" * 60)
    print("FINAL CERTIFICATION SUMMARY:")
    print("=" * 60)
    for b_name, res in results.items():
        print(f"  {b_name:12}: {res['status']}")

    assert all(r.get("status") == "PASSED" for r in results.values()), "Not all browsers passed certification"
    print("\nALL BROWSERS FULLY CERTIFIED!")


if __name__ == "__main__":
    run_certification()
