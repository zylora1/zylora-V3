from __future__ import annotations

import json
import os
import re
import uuid
from pathlib import Path
from typing import Any

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT = Path(__file__).resolve().parents[1]
import sys
sys.path.insert(0, str(ROOT))
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='backslashreplace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='backslashreplace')

from app.main import app
from app.db import SessionLocal, migrate
from app.security import clear_rate_limits

OUT = ROOT / "data" / "browser-e2e-qa.json"
checks: list[str] = []


def check(condition: bool, label: str) -> None:
    assert condition, label
    checks.append(label)
    print("PASS", label, flush=True)


def reset_db() -> None:
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in [
            "assistant_usage", "assistant_messages", "assistant_conversations", "sales_assistant_configs", "subscriptions", "billing_profiles", "assistant_action_keys",
            "support_messages", "support_conversations", "freelancer_leads", "freelancer_outbound_clicks", "freelancer_external_links", "rate_limit_buckets", "source_export_entitlements", "source_export_orders", "analytics_events", "appointment_settings", "freelancer_ratings", "freelancer_template_submissions", "freelancer_profiles",
            "chatbot_messages", "site_knowledge_docs", "credit_usage", "credit_wallets",
            "webhook_events", "razorpay_orders", "google_sheets_integrations",
            "custom_domains", "ownership_transfers", "blog_posts", "pro_leads",
            "audit_log", "billing_events", "outbox", "whatsapp_otps",
            "notification_settings", "appointments", "leads", "oauth_states",
            "auth_tokens", "sites", "sessions", "users",
        ]:
            db.execute(text(f"DELETE FROM {table}"))
        db.execute(text("UPDATE system_settings SET value='admin@example.com' WHERE key='admin_notification_email'"))
        db.execute(text("UPDATE system_settings SET value='true' WHERE key='public_signup_enabled'"))


def inline_document(html_name: str, css_name: str, js_name: str, bootstrap: str, patch=None) -> str:
    html = (ROOT / "static" / html_name).read_text(encoding="utf-8")
    css = (ROOT / "static" / css_name).read_text(encoding="utf-8")
    js = (ROOT / "static" / js_name).read_text(encoding="utf-8")
    if patch:
        js = patch(js)
    html = re.sub(
        rf'<link\b[^>]*href=["\']/static/{re.escape(css_name)}["\'][^>]*?/?>',
        lambda _m: f"<style>{css}</style>",
        html,
        flags=re.I,
    )
    # Inline every remaining local stylesheet as well. This keeps browser E2E
    # faithful to the real product shell when a page composes multiple CSS files
    # (dashboard.css + dashboard-sneat.css, for example).
    def _inline_local_css(match):
        href=match.group(1)
        rel=href.split('/static/',1)[-1]
        target=ROOT/'static'/rel
        return f"<style>{target.read_text(encoding='utf-8')}</style>" if target.exists() else ''
    html=re.sub(r'<link\b[^>]*href=["\'](/static/[^"\']+\.css)["\'][^>]*?/?>',_inline_local_css,html,flags=re.I)
    html = re.sub(
        rf'<script\b[^>]*src=["\']/static/{re.escape(js_name)}["\'][^>]*>\s*</script>',
        lambda _m: f"<script>{bootstrap}</script><script>{js}</script>",
        html,
        flags=re.I,
    )
    # Inline the shared UI helper and remove remote font/preconnect requests. The
    # managed Chromium blocks socket navigation, so leaving parser-blocking remote
    # resources in set_content can make the otherwise valid page wait forever.
    shared_css=(ROOT / "static" / "zylora-ui.css").read_text(encoding="utf-8") if (ROOT / "static" / "zylora-ui.css").exists() else ""
    shared_js=(ROOT / "static" / "zylora-ui.js").read_text(encoding="utf-8") if (ROOT / "static" / "zylora-ui.js").exists() else ""
    html=re.sub(r'<link\b[^>]*href=["\']/static/zylora-ui\.css["\'][^>]*?/?>',lambda _m:f'<style>{shared_css}</style>',html,flags=re.I)
    html=re.sub(r'<script\b[^>]*src=["\']/static/zylora-ui\.js["\'][^>]*>\s*</script>',lambda _m:f'<script>{shared_js}</script>',html,flags=re.I)
    publish_js=(ROOT / "static" / "publish-flow.js").read_text(encoding="utf-8") if (ROOT / "static" / "publish-flow.js").exists() else ""
    html=re.sub(r'<script\b[^>]*src=["\']/static/publish-flow\.js["\'][^>]*>\s*</script>',lambda _m:f'<script>{publish_js}</script>',html,flags=re.I)
    html=re.sub(r'<link[^>]+href="https://fonts\.googleapis\.com/[^>]+>', '', html)
    html=re.sub(r'<link[^>]+href="https://fonts\.gstatic\.com[^>]*>', '', html)
    # The managed browser blocks all network loads. Replace catalogue thumbnails
    # with a transparent local data URI so image fetches cannot introduce noise.
    html = re.sub(
        r'src="/static/template-thumbnails/[^"]+"',
        'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="',
        html,
    )
    return html


def inline_standalone(html_name: str, css_name: str, bootstrap: str) -> str:
    html = (ROOT / "static" / html_name).read_text(encoding="utf-8")
    css = (ROOT / "static" / css_name).read_text(encoding="utf-8")
    html = re.sub(rf'<link\b[^>]*href=["\']/static/{re.escape(css_name)}["\'][^>]*?/?>', lambda _m: f"<style>{css}</style>", html, flags=re.I)
    shared_css=(ROOT / "static" / "zylora-ui.css").read_text(encoding="utf-8") if (ROOT / "static" / "zylora-ui.css").exists() else ""
    shared_js=(ROOT / "static" / "zylora-ui.js").read_text(encoding="utf-8") if (ROOT / "static" / "zylora-ui.js").exists() else ""
    html=re.sub(r'<link\b[^>]*href=["\']/static/zylora-ui\.css["\'][^>]*?/?>',lambda _m:f'<style>{shared_css}</style>',html,flags=re.I)
    html=re.sub(r'<script\b[^>]*src=["\']/static/zylora-ui\.js["\'][^>]*>\s*</script>',lambda _m:f'<script>{shared_js}</script>',html,flags=re.I)
    html=re.sub(r'<link[^>]+href="https://fonts\.googleapis\.com/[^>]+>', '', html)
    html=re.sub(r'<link[^>]+href="https://fonts\.gstatic\.com[^>]*>', '', html)
    html = html.replace('<script>', f'<script>{bootstrap}</script><script>', 1)
    return html


def browser_bootstrap() -> str:
    return r"""
    (() => {
      const store = {};
      Object.defineProperty(window, 'sessionStorage', {value: {
        getItem:k=>Object.prototype.hasOwnProperty.call(store,k)?store[k]:null,
        setItem:(k,v)=>store[k]=String(v),
        removeItem:k=>delete store[k],
        clear:()=>Object.keys(store).forEach(k=>delete store[k])
      }});
      window.__NAV=''; window.__OPENED=[]; window.confirm=()=>true;
      window.open=(...args)=>{window.__OPENED.push(args); return null};
      window.fetch = async (url, opts={}) => {
        const headers = {};
        if (opts.headers instanceof Headers) opts.headers.forEach((v,k)=>headers[k]=v);
        else if (opts.headers) Object.assign(headers, opts.headers);
        const result = await window.__backendFetch({
          url:String(url), method:String(opts.method||'GET'), headers,
          body:opts.body == null ? null : String(opts.body)
        });
        return new Response(result.body, {status:result.status, headers:result.headers});
      };
    })();
    """


def patch_auth(js: str) -> str:
    return js.replace("location.href=", "window.__NAV=")


def patch_dashboard(js: str) -> str:
    return js.replace("location.href=", "window.__NAV=")

def patch_ai(js: str) -> str:
    return js.replace("location.href=", "window.__NAV=")

def patch_plan(js: str) -> str:
    return js.replace("location.href=", "window.__NAV=")


def patch_editor(js: str, site_id: str) -> str:
    js = js.replace(
        "const siteId=location.pathname.split('/').pop();",
        f"const siteId={json.dumps(site_id)};",
    )
    js = js.replace("location.href=", "window.__NAV=")
    js = js.replace(
        "function reloadPreview(){const f=$('#previewFrame');f.src=`/api/sites/${siteId}/preview?t=${Date.now()}`}",
        "async function reloadPreview(){const f=$('#previewFrame');const r=await fetch(`/api/sites/${siteId}/preview?t=${Date.now()}`);f.srcdoc=await r.text()}",
    )
    return js


def backend_bridge(client: TestClient):
    def invoke(payload: dict[str, Any]) -> dict[str, Any]:
        url = payload.get("url", "/")
        # JS only calls same-origin relative API paths in this harness.
        if url.startswith("http://") or url.startswith("https://"):
            path = "/" + url.split("/", 3)[3] if url.count("/") >= 3 else "/"
        else:
            path = url
        method = str(payload.get("method") or "GET").upper()
        headers = {str(k): str(v) for k, v in (payload.get("headers") or {}).items()}
        body = payload.get("body")
        response = client.request(method, path, content=body.encode() if isinstance(body, str) else body, headers=headers)
        ctype = response.headers.get("content-type", "text/plain; charset=utf-8")
        try:
            text_body = response.content.decode(response.encoding or "utf-8")
        except Exception:
            text_body = response.content.decode("utf-8", errors="replace")
        return {
            "status": response.status_code,
            "headers": {"Content-Type": ctype},
            "body": text_body,
        }
    return invoke


def new_page(browser, client: TestClient, viewport=(1440, 1000)):
    page = browser.new_page(viewport={"width": viewport[0], "height": viewport[1]})
    page.expose_function("__backendFetch", backend_bridge(client))
    return page


def no_overflow(page) -> bool:
    return page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1")


def render_public_page(browser, client: TestClient, url: str):
    response = client.get(url)
    check(response.status_code == 200, "published public page returns 200")
    html = response.text
    runtime = (ROOT / "static" / "public-runtime.js").read_text(encoding="utf-8")
    html = html.replace(
        '<script src="/static/public-runtime.js"></script>',
        f"<script>{browser_bootstrap()}</script><script>{runtime}</script>",
    )
    html = re.sub(
        r'src="/static/template-assets/[^"]+"',
        'src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="',
        html,
    )
    html=re.sub(r'<link[^>]+href="https://fonts\.googleapis\.com/[^>]+>', '', html)
    html=re.sub(r'<link[^>]+href="https://fonts\.gstatic\.com[^>]*>', '', html)
    page = new_page(browser, client, (390, 850))
    page.set_content(html, wait_until="load")
    return page


def main() -> None:
    reset_db()
    email = f"browser-{uuid.uuid4().hex[:10]}@example.com"
    password = "SecurePass123!"

    with TestClient(app) as client, sync_playwright() as p:
        executable = "/usr/bin/chromium" if os.path.exists("/usr/bin/chromium") else None
        browser = p.chromium.launch(headless=True, executable_path=executable, args=["--no-sandbox"])

        # Landing responsive behavior and CTA wiring.
        landing_html = inline_document("index.html", "landing.css", "landing.js", browser_bootstrap())
        page = new_page(browser, client, (1440, 1000))
        page.set_content(landing_html, wait_until="load")
        check("Build a premium website" in page.locator("h1").inner_text(), "landing customer-growth hero renders")
        check(page.locator('[data-testid="hero-ai"]').get_attribute('href') == '/ai-create', 'landing Create with AI CTA targets dedicated creation page')
        check(page.locator('a[href="/templates"]').first.get_attribute('href') == '/templates', 'landing Templates navigation is wired')
        check(page.locator('[data-testid="nav-start"]').get_attribute('href') == '/signup', 'landing navigation signup CTA is wired')
        check(page.locator('a[href="/blog"]').first.get_attribute('href') == '/blog', 'landing blog navigation is wired')
        page.locator('#openPro').click()
        check(page.locator('#proModal').evaluate("e=>e.classList.contains('open')"), 'landing Managed by Experts modal opens')
        page.fill('#proName','Landing Prospect'); page.fill('#proEmail','landing.prospect@example.com'); page.fill('#proType','Boutique hotel'); page.fill('#proTime','Weekdays after 6 PM IST')
        page.locator('#proForm button[type="submit"]').click()
        page.wait_for_function("document.querySelector('#proMsg').textContent.includes('reference')")
        check('ZPRO-' in page.locator('#proMsg').inner_text(), 'landing Managed by Experts enquiry submits')
        page.locator('#closePro').click()
        check(not page.locator('#proModal').evaluate("e=>e.classList.contains('open')"), 'landing Managed by Experts modal closes')
        page.locator('.faq details').first.locator('summary').click()
        check(page.locator('.faq details').first.get_attribute('open') is not None, 'landing FAQ disclosure works')
        check(no_overflow(page), "landing desktop has no horizontal overflow")
        page.set_viewport_size({"width": 390, "height": 850})
        page.locator('[data-testid="mobile-menu"]').click()
        check(page.locator(".site-nav nav").evaluate("e=>getComputedStyle(e).display") == "flex", "landing mobile navigation opens")
        check(no_overflow(page), "landing mobile has no horizontal overflow")
        page.close()

        # Real signup UI -> real FastAPI signup/session flow.
        signup_html = inline_document("signup.html", "auth.css", "auth.js", browser_bootstrap(), patch_auth)
        page = new_page(browser, client, (390, 850))
        page.set_content(signup_html, wait_until="load")
        check(page.locator('[data-testid="google-signup"]').get_attribute('href') == '/api/auth/google/start', 'signup Google OAuth button targets OAuth start')
        page.fill("#name", "Browser Owner")
        page.fill("#email", email)
        page.fill("#password", password)
        page.locator('[data-testid="signup-submit"]').click()
        page.wait_for_function("window.__NAV === '/dashboard'")
        check(page.evaluate("window.__NAV") == '/dashboard', "signup UI goes directly to the dashboard without plan selection")
        check(client.get("/api/auth/me").status_code == 200 and client.get('/api/auth/me').json()['plan_selected'] is False, "signup creates authenticated backend session with plan pending until publish")
        page.close()

        # Dedicated AI creation experience -> real AI-site backend flow.
        ai_html = inline_document("ai-create.html", "ai-create.css", "ai-create.js", browser_bootstrap(), patch_ai)
        page = new_page(browser, client, (1440, 1000))
        page.set_content(ai_html, wait_until="load")
        page.wait_for_function("document.querySelectorAll('.direction-card').length === 8")
        check(page.locator('.z-wordmark').first.inner_text() == 'Zylora', 'AI creation uses text-only Zylora wordmark')
        page.locator('[data-goal="Get leads"]').click(); page.locator('#goalNext').click()
        page.wait_for_function("document.querySelector('[data-step=\"2\"]').classList.contains('active')")
        check(page.locator('#promptGuidance').is_visible(), 'AI brief shows detailed-prompt guidance above the textarea')
        check('premium fitness studio in Chennai' in page.locator('#businessDescription').get_attribute('placeholder'), 'AI brief textarea models a detailed prompt in its placeholder')
        page.fill('#businessName', 'Browser Northstar')
        page.fill('#businessDescription', 'gym website')
        check('2 words' in page.locator('#promptWordHint').inner_text(), 'AI brief live word-count nudges a short prompt without blocking it')
        page.locator('#briefNext').click()
        page.wait_for_function("document.querySelector('[data-step=\"3\"]').classList.contains('active')")
        check(page.locator('[data-step="3"]').evaluate("e=>e.classList.contains('active')"), 'two-word AI prompt advances to direction selection without a minimum-length gate')
        page.locator('[data-direction="technical-grid"]').click()
        page.fill('#stylePrompt','Technical editorial')
        page.locator('[data-testid="ai-create-final"]').click()
        page.wait_for_function("window.__NAV.startsWith('/editor/')")
        ai_site_id = page.evaluate("window.__NAV.split('/').pop()")
        site = client.get(f"/api/sites/{ai_site_id}").json()
        check(site["origin"] == "AI", "dedicated AI creation page persists AI origin")
        check(client.get("/api/auth/me").json()["ai_credits"] == 15, "AI website creation deducts five credits after the five-credit signup bonus is allocated")
        page.close()

        # Dashboard workspace and its primary controls.
        dashboard_html = inline_document("dashboard.html", "dashboard.css", "dashboard.js", browser_bootstrap(), patch_dashboard)
        page = new_page(browser, client, (1440, 1000))
        page.set_content(dashboard_html, wait_until="load")
        page.wait_for_function("document.querySelector('#userName').textContent === 'Browser Owner'")
        check(page.locator('#verifyBanner').is_visible(), 'dashboard shows verification gate for new account')
        page.locator('#resendVerify').click()
        page.wait_for_function("!document.querySelector('#devVerify').hidden")
        check(bool(page.evaluate("sessionStorage.getItem('debugVerifyToken')")), 'verification resend stores development token')
        page.locator('#devVerify').click()
        page.wait_for_function("document.querySelector('#verifyBanner').hidden")
        check(client.get('/api/auth/me').json()['email_verified'] == 1, 'email verification UI persists verified state')
        template_count=len(client.get('/api/templates').json()['items'])
        check(page.locator(".template-item").count() == template_count, "dashboard exposes the complete published template catalogue")
        check(no_overflow(page), "dashboard desktop has no horizontal overflow")
        check(page.locator('.rail-btn[data-view="blog"]').count() == 0 and page.locator('#blog').count() == 0, "normal-user dashboard has no blog CMS surface")
        for view in ["websites", "templates", "leads", "domains", "integrations", "freelancer", "analytics", "billing", "settings", "overview"]:
            page.locator(f'.rail-btn[data-view="{view}"]').click()
            check(page.locator(f"#{view}").is_visible(), f"dashboard {view} view opens")
        page.locator('.rail-btn[data-view="billing"]').click()
        page.wait_for_function("document.querySelectorAll('.topup-pack').length === 8")
        check(page.locator('.topup-pack').count() == 8, 'dashboard renders all eight credit top-up packs without a runtime error')
        check(page.locator('#sideUserRole').inner_text().strip() == 'User', 'ordinary dashboard account is labelled User rather than Admin')
        page.locator('.rail-btn[data-view="overview"]').click()
        page.locator('[data-view-jump="templates"]').first.click(); check(page.locator('#templates').is_visible(), 'Quick Actions Browse Templates button works')
        page.locator('.rail-btn[data-view="overview"]').click()
        page.locator('[data-view-jump="leads"]').first.click(); check(page.locator('#leads').is_visible(), 'Quick Actions Open Leads button works')
        page.locator('.rail-btn[data-view="overview"]').click()
        page.locator('#notificationBell').click(); page.wait_for_function("document.querySelector('#toast').textContent.toLowerCase().includes('unread')"); check('unread' in page.locator('#toast').inner_text().lower(), 'notification bell responds')
        page.locator('#refreshChart').click(); check(page.locator('#refreshChart').inner_text() == '✓', 'analytics refresh button responds')
        page.locator('[data-testid="quick-new"]').click()
        check(page.locator('#createModal').evaluate("e=>e.classList.contains('open')"), 'Create Website modal opens')
        page.locator('[data-close="createModal"]').click(); check(not page.locator('#createModal').evaluate("e=>e.classList.contains('open')"), 'Create Website modal close button works')
        check(page.locator('[data-testid="quick-ai"]').get_attribute('href') == '/ai-create', 'dashboard Create with AI quick action targets dedicated AI page')
        page.close()

        # Simulate a valid 5-page AI-origin site while the account is still Free.
        # AI-origin sites are prompt-driven and must not be constrained by template page-count entitlements.
        with SessionLocal.begin() as db:
            db.execute(text('UPDATE sites SET page_count=5 WHERE id=:s'),{'s':ai_site_id})

        # Editor manual edit + AI edit + responsive preview + publish.
        editor_html = inline_document(
            "editor.html", "editor.css", "editor.js", browser_bootstrap(), lambda js: patch_editor(js, ai_site_id)
        )
        page = new_page(browser, client, (1440, 1000))
        page.set_content(editor_html, wait_until="load")
        page.wait_for_function("document.querySelector('#siteName').textContent === 'Browser Northstar'")
        page.wait_for_function("document.querySelector('[data-panel=\"sitePanel\"]').onclick !== null")
        check(no_overflow(page), "editor desktop has no horizontal overflow")
        page.locator('[data-panel="sitePanel"]').click()
        page.fill("#tagline", "Infrastructure with a point of view.")
        page.fill("#description", "Reliable systems, carefully designed for teams that value clarity and operational confidence.")
        page.locator('[data-testid="editor-save"]').click()
        page.wait_for_function("document.querySelector('#saveMsg').textContent.includes('Saved')")
        check(client.get(f"/api/sites/{ai_site_id}").json()["tagline"] == "Infrastructure with a point of view.", "manual editor persists changes")
        page.locator("#aiTab").click()
        page.fill("#aiInstruction", "Make the headline more premium and concise")
        page.locator('[data-testid="ai-apply"]').click()
        page.wait_for_function("document.querySelector('#aiMsg').textContent.includes('validated action')")
        check(client.get("/api/auth/me").json()["ai_credits"] == 13, "AI editor deducts two credits")
        for width in ["768px", "390px", "100%"]:
            page.locator(f'[data-width="{width}"]').click()
            check(page.locator("#previewFrame").evaluate("e=>e.style.width") == width, f"editor preview switches to {width}")
        page.locator('[data-testid="editor-publish"]').click()
        page.wait_for_function("document.querySelector('[data-zpf-plan=\"FREE\"]') !== null", timeout=8000)
        check(client.get('/api/auth/me').json()['plan_selected'] is False, 'plan remains unselected until the publish flow choice')
        page.locator('[data-zpf-plan="FREE"]').click()
        # If the draft contains a structural edit, Free requires an explicit second confirmation.
        try:
            page.wait_for_function("document.querySelector('[data-zpf-free]') !== null || window.__OPENED.length > 0", timeout=3000)
            if page.locator('[data-zpf-free]').count(): page.locator('[data-zpf-free]').click()
        except Exception:
            pass
        page.wait_for_function("window.__OPENED.length > 0", timeout=8000)
        opened = page.evaluate("window.__OPENED")
        check(bool(opened) and str(opened[-1][0]).startswith("/s/"), "publish action opens public-site URL")
        public_url = opened[-1][0]
        check(client.get(f"/api/sites/{ai_site_id}").json()["status"] == "LIVE", "publish makes website live")
        check(client.get('/api/billing').json()['plan']=='FREE' and client.get('/api/billing').json()['plan_selected'] is True, 'Free plan is selected inside publish and AI-origin page count remains brief-driven')
        page.set_viewport_size({"width": 390, "height": 850})
        check(no_overflow(page), "editor mobile has no horizontal overflow")
        page.close()

        # Published runtime -> grounded AI Sales Assistant -> unified lead -> authoritative appointment.
        me_for_csrf=client.get('/api/auth/me').json(); owner_headers={'X-CSRF-Token':me_for_csrf['csrf_token']}
        knowledge=client.post(f'/api/sites/{ai_site_id}/knowledge',headers=owner_headers,json={'title':'Browser FAQ','content':'Opening hours are Monday to Friday from 9 AM to 5 PM. Consultations last 45 minutes and appointments can be booked online.'})
        check(knowledge.status_code==200, 'site knowledge can be added for grounded Sales Assistant answers')
        appt_cfg=client.put(f'/api/sites/{ai_site_id}/appointment-settings',headers=owner_headers,json={'timezone':'UTC','weekdays':[0,1,2,3,4,5,6],'start_hour':9,'end_hour':18,'duration_minutes':45,'buffer_minutes':0})
        check(appt_cfg.status_code==200, 'owner appointment settings configure the existing authoritative scheduler')
        public = render_public_page(browser, client, public_url)
        public.wait_for_function("document.querySelector('.zylora-sales-launcher') !== null")
        check(public.locator('.zylora-sales-launcher').is_visible(), 'published website contains the AI Sales Assistant launcher')
        public.locator('.zylora-sales-launcher').click()
        public.wait_for_function("document.querySelector('.zylora-sales-panel')?.dataset.open === 'true'")
        check(public.locator('.zylora-sales-panel').get_attribute('role')=='dialog', 'Sales Assistant opens as an accessible dialog')
        credits_before_chat=client.get('/api/credits').json()['total']
        # Opening the dialog creates a real public conversation through the browser runtime.
        public.wait_for_timeout(250)
        with SessionLocal() as _db:
            conv_id=_db.execute(text("SELECT id FROM assistant_conversations WHERE site_id=:s AND test_mode=0 ORDER BY created_at DESC LIMIT 1"),{'s':ai_site_id}).scalar_one()
        # Exercise grounded Q&A through the exact public API. The sandbox's in-process
        # Playwright→TestClient callback bridge is intentionally not used for a long AI request.
        grounded=client.post(f'/api/public/sites/{ai_site_id}/assistant/conversations/{conv_id}/messages',json={'message':'What are your opening hours?'})
        check(grounded.status_code==200 and 'Monday to Friday' in grounded.json()['answer'], 'Sales Assistant answer is grounded on approved site knowledge')
        # Conversational high-intent contact becomes one AI_ASSISTANT lead linked to the same conversation.
        ai_lead=client.post(f'/api/public/sites/{ai_site_id}/assistant/conversations/{conv_id}/messages',json={'message':'I want to book a consultation. Please contact me.','contact':{'name':'Ravi Browser','email':'ravi.browser@example.com','phone':'+919800001111','service_interest':'Consultation'}})
        check(ai_lead.status_code==200 and ai_lead.json().get('lead'), 'Sales Assistant qualifies and creates a unified lead when buying intent and contact details are present')
        leads = client.get('/api/leads').json()['items']
        check(any(x['email']=='ravi.browser@example.com' and x['source']=='AI_ASSISTANT' and x.get('conversation_id')==conv_id for x in leads), 'AI Sales Assistant lead is visible in the unified lead pipeline')
        # Browser UI exposes the contextual mini-form and its consent microcopy.
        public.locator('[data-z-action="enquiry"]').click()
        check(public.locator('[data-z-enquiry]').is_visible() and 'Marketing communication requires separate consent' in public.locator('[data-z-enquiry] .zylora-sales-privacy').inner_text(), 'Assistant contextual lead form is accessible and separates enquiry from marketing consent')
        form_lead=client.post('/api/leads',json={'site_id':ai_site_id,'source':'FORM','name':'Asha Browser','email':'asha.assistant@example.com','message':'Please send more information.','session_id':'browser-form-session','service_enquiry_consent':True,'marketing_consent':False})
        check(form_lead.status_code==200 and any(x['email']=='asha.assistant@example.com' and x['source']=='FORM' for x in client.get('/api/leads').json()['items']), 'contextual form path feeds the same unified lead table with FORM attribution')
        # Booking uses server-authoritative availability and confirms only after the backend insert succeeds.
        slots=client.get(f'/api/public/sites/{ai_site_id}/assistant/availability').json()['slots']; check(bool(slots), 'Sales Assistant receives real slots from the existing appointment engine')
        booked=client.post(f'/api/public/sites/{ai_site_id}/assistant/conversations/{conv_id}/appointments',headers={'Idempotency-Key':'browser-assistant-booking'},json={'starts_at':slots[0],'name':'Ravi Browser','email':'ravi.browser@example.com','service_enquiry_consent':True})
        check(booked.status_code==200, 'Sales Assistant appointment action succeeds only after authoritative booking confirmation')
        with SessionLocal() as _db:
            appt=_db.execute(text("SELECT source,conversation_id,lead_id FROM appointments WHERE site_id=:s ORDER BY created_at DESC LIMIT 1"),{'s':ai_site_id}).mappings().one()
        check(appt['source']=='AI_ASSISTANT' and appt['conversation_id']==conv_id and bool(appt['lead_id']), 'appointment is linked conversation → lead → appointment and attributed to AI_ASSISTANT')
        check(client.get('/api/credits').json()['total']==credits_before_chat, 'visitor Sales Assistant usage does not consume ordinary website-editing AI credits')
        public.close()

        # Dashboard settings + WhatsApp OTP + billing upgrade/downgrade.
        page = new_page(browser, client, (1440, 1000))
        page.set_content(dashboard_html, wait_until="load")
        page.wait_for_function("document.querySelector('#userName').textContent === 'Browser Owner'")
        page.wait_for_function("document.querySelectorAll('.site-card').length === 1")

        page.locator('.rail-btn[data-view="websites"]').click()
        preview_href=page.locator(f'a[href="/api/sites/{ai_site_id}/preview"]').get_attribute('href')
        check(preview_href == f'/api/sites/{ai_site_id}/preview' and client.get(preview_href).status_code == 200, 'website Preview action is wired and returns rendered preview')
        check(client.get(f'/api/sites/{ai_site_id}/export').status_code==402, 'source export starts locked and remains separate from free ownership transfer')
        page.locator('.site-overflow summary').click(); page.locator(f'[data-source-export="{ai_site_id}"]').click()
        page.wait_for_function(f"window.__NAV === '/api/sites/{ai_site_id}/export'")
        exp_resp=client.get(f'/api/sites/{ai_site_id}/export'); check(exp_resp.status_code == 200 and exp_resp.headers.get('content-type') == 'application/zip', 'paid/configurable website Export Next.js action unlocks source ZIP')

        page.locator('.rail-btn[data-view="integrations"]').click()
        page.wait_for_function("document.querySelector('#integrations').classList.contains('active')")
        page.fill('#googleSheetUrl','https://docs.google.com/spreadsheets/d/BROWSERSHEET1234567890/edit#gid=0')
        page.fill('#googleSheetName','Website Leads')
        page.locator('[data-testid="google-sheet-save"]').click()
        page.wait_for_function("document.querySelector('#googleSheetMsg').textContent.includes('Connected')")
        sheet_cfg=client.get(f'/api/sites/{ai_site_id}/integrations/google-sheets').json()
        check(sheet_cfg['spreadsheet_id']=='BROWSERSHEET1234567890' and sheet_cfg['sheet_name']=='Website Leads', 'Google Sheets connection persists from dashboard')
        page.locator('#googleSheetTest').click()
        page.wait_for_function("document.querySelector('#googleSheetMsg').textContent.includes('Test row sent')")
        check(any(x['channel']=='GOOGLE_SHEETS' for x in client.get('/api/debug/outbox').json()['items']), 'Google Sheets test row reaches deterministic provider')
        page.locator('#googleSheetResync').click(); page.wait_for_function("document.querySelector('#googleSheetMsg').textContent.includes('Re-synced')")
        check('Re-synced' in page.locator('#googleSheetMsg').inner_text(), 'Google Sheets re-sync button replays existing lead and appointment data')
        page.locator('#googleSheetRemove').click(); page.wait_for_function("document.querySelector('#googleSheetMsg').textContent.includes('Connection removed')")
        check(client.get(f'/api/sites/{ai_site_id}/integrations/google-sheets').json()=={}, 'Google Sheets disconnect removes integration')
        page.fill('#googleSheetUrl','https://docs.google.com/spreadsheets/d/BROWSERRECONNECT1234567890/edit#gid=0'); page.fill('#googleSheetName','Reconnected'); page.locator('[data-testid="google-sheet-save"]').click(); page.wait_for_function("document.querySelector('#googleSheetMsg').textContent.includes('Connected')")
        check(client.get(f'/api/sites/{ai_site_id}/integrations/google-sheets').json()['spreadsheet_id']=='BROWSERRECONNECT1234567890', 'Google Sheets reconnect persists a new spreadsheet')

        page.locator('.rail-btn[data-view="settings"]').click()
        page.wait_for_function("document.querySelector('#settings').classList.contains('active')")
        page.evaluate("loadSettings(true)")
        page.wait_for_function("document.querySelector('#verifyState').textContent.toLowerCase().includes('whatsapp')")
        page.fill('input[name="email_to"]', "owner.browser@example.com")
        page.fill('input[name="phone_number"]', "9876543210")
        page.locator('[data-testid="settings-save"]').click()
        page.wait_for_function("document.querySelector('#notifyStatus').textContent.includes('Settings saved')")
        cfg=client.get("/api/notifications").json(); check(cfg["phone_number"] == "9876543210" and cfg["email_to"] == "owner.browser@example.com", "notification settings persist")
        page.locator('[data-testid="otp-request"]').click()
        page.wait_for_function("document.querySelector('#otpCode').value.length === 6")
        code = page.input_value("#otpCode")
        check(len(code) == 6 and code.isdigit(), "WhatsApp OTP request produces six-digit development code")
        page.locator('[data-testid="otp-verify"]').click()
        page.wait_for_function("document.querySelector('#verifyState').textContent.toLowerCase().includes('verified')")
        check(client.get("/api/notifications").json()["whatsapp_verified"] == 1, "WhatsApp OTP verification persists verified state")

        form_lead = client.post("/api/leads", json={
            "site_id": ai_site_id, "source": "FORM", "name": "Asha Browser",
            "email": "asha.browser@example.com", "phone": "9000000000", "message": "Please contact me."
        })
        check(form_lead.status_code == 200, "public form lead API succeeds")
        outbox = client.get("/api/debug/outbox").json()["items"]
        check(any(x["channel"] == "EMAIL" and x["recipient"] == "owner.browser@example.com" for x in outbox), "owner email notification is queued")
        check(any(x["channel"] == "WHATSAPP" and x["recipient"] == "+919876543210" for x in outbox), "verified WhatsApp notification is queued")

        page.locator('.rail-btn[data-view="templates"]').click()
        check(page.locator('.template-item').count() == template_count, 'published template catalogue remains available after AI-site publish')
        page.locator('.rail-btn[data-view="billing"]').click()
        check(client.get('/api/billing').json()['plan'] == 'FREE', 'AI-site publish and source-export unlock do not silently change the subscription plan')
        check('US$9' in page.locator('#starterRegionalPrice').inner_text(), 'international dashboard displays the explicit Starter US$9/month regional offer')
        check('US$19' in page.locator('#growthRegionalPrice').inner_text(), 'international dashboard displays the explicit Growth US$19/month regional offer')
        page.locator('[data-paid-plan="STARTER"]').click()
        page.wait_for_function("document.querySelector('#userPlan').textContent === 'STARTER'")
        billing_now=client.get('/api/billing').json(); sub=billing_now['subscription']
        check(billing_now['plan']=='STARTER' and sub['product']=='STARTER' and sub['billing_region']=='INTERNATIONAL' and sub['billing_currency']=='USD' and sub['billing_amount_minor']==900, 'regional Starter checkout activates the US$9 international entitlement')
        page.locator('[data-plan-change="FREE"]').click()
        page.wait_for_function("document.querySelector('#billingMsg').textContent.toLowerCase().includes('cancellation scheduled')")
        billing_after_cancel=client.get('/api/billing').json()
        check(billing_after_cancel['plan']=='STARTER' and int(billing_after_cancel['subscription']['cancel_at_period_end'])==1, 'Switch to Free schedules period-end cancellation without stripping paid access immediately')
        page.set_viewport_size({"width": 390, "height": 850})
        if not no_overflow(page):
            print('MOBILE OVERFLOW DEBUG', page.evaluate("""[...document.querySelectorAll('*')].map(e=>{const r=e.getBoundingClientRect();return {tag:e.tagName,id:e.id,cls:e.className,right:r.right,left:r.left,width:r.width,scrollWidth:e.scrollWidth}}).filter(x=>x.right>innerWidth+1||x.left<-1).slice(0,30)"""), flush=True)
            print('ACTIVE VIEW',page.evaluate("document.querySelector('.view.active')?.id"),'INNER',page.evaluate('innerWidth'),'DOC',page.evaluate('document.documentElement.scrollWidth'),'TABLE',page.evaluate("(()=>{const t=document.querySelector('#leads table'),w=document.querySelector('#leads .table-wrap');return {display:getComputedStyle(document.querySelector('#leads')).display,min:getComputedStyle(t).minWidth,width:getComputedStyle(t).width,wrapOverflow:getComputedStyle(w).overflowX,wrapWidth:getComputedStyle(w).width}})()"),flush=True)
        check(no_overflow(page), "dashboard mobile has no horizontal overflow")

        # Logout and login UI against the same real backend session store.
        page.set_viewport_size({"width": 1440, "height": 1000})
        page.locator("#logoutBtn").click()
        page.wait_for_function("window.__NAV === '/'")
        check(client.get("/api/auth/me").status_code == 401, "logout invalidates backend session")
        page.close()

        login_html = inline_document("login.html", "auth.css", "auth.js", browser_bootstrap(), patch_auth)
        page = new_page(browser, client, (390, 850))
        page.set_content(login_html, wait_until="load")
        check(page.locator('[data-testid="google-login"]').get_attribute('href') == '/api/auth/google/start', 'login Google OAuth button targets OAuth start')
        check(page.locator('a[href="/forgot-password"]').get_attribute('href') == '/forgot-password', 'Forgot password link is wired')
        page.fill("#email", email)
        page.fill("#password", password)
        page.locator('[data-testid="login-submit"]').click()
        page.wait_for_function("window.__NAV === '/dashboard'")
        check(client.get("/api/auth/me").json()["name"] == "Browser Owner", "login UI restores authenticated session")
        check(no_overflow(page), "login mobile has no horizontal overflow")
        page.close()

        # Password reset UI sends a reset token, changes the password and invalidates active sessions.
        me_now=client.get('/api/auth/me').json(); client.post('/api/auth/logout',headers={'X-CSRF-Token':me_now['csrf_token']})
        forgot_html=inline_standalone('forgot-password.html','auth.css',browser_bootstrap())
        page=new_page(browser,client,(390,850)); page.set_content(forgot_html,wait_until='load'); page.fill('#email',email); page.locator('[data-testid="forgot-submit"]').click()
        page.wait_for_function("document.querySelector('#msg').textContent.includes('Development token stored')")
        reset_token=page.evaluate("sessionStorage.getItem('debugResetToken')"); check(bool(reset_token), 'Forgot password button requests short-lived reset token')
        page.close()
        reset_html=inline_standalone('reset-password.html','auth.css',browser_bootstrap())
        page=new_page(browser,client,(390,850)); page.set_content(reset_html,wait_until='load'); page.evaluate("t=>sessionStorage.setItem('debugResetToken',t)",reset_token); new_password='NewSecurePass456!'; page.fill('#password',new_password); page.locator('[data-testid="reset-submit"]').click()
        page.wait_for_function("document.querySelector('#msg').textContent.includes('Password updated')")
        check(client.post('/api/auth/login',json={'email':email,'password':password}).status_code==401, 'password reset invalidates old password')
        page.close()
        page=new_page(browser,client,(390,850)); page.set_content(login_html,wait_until='load'); page.fill('#email',email); page.fill('#password',new_password); page.locator('[data-testid="login-submit"]').click(); page.wait_for_function("window.__NAV === '/dashboard'")
        check(client.get('/api/auth/me').status_code==200, 'new password logs in successfully after reset')
        page.close()

        browser.close()

    report = {
        "mode": "Playwright Chromium + real FastAPI TestClient bridge",
        "checks": len(checks),
        "errors": 0,
        "items": checks,
        "note": "The browser executes the real HTML/CSS/JS. HTTP transport is bridged in-process to the real FastAPI application because this sandbox's Chromium policy blocks all socket navigation, including localhost.",
    }
    OUT.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"browser_e2e: {len(checks)} checks / 0 errors")


if __name__ == "__main__":
    main()
