"""Browser proof for the Super Admin SMTP Mail Center critical path."""
from __future__ import annotations

import atexit
import json
import os
import re
import sys
import uuid
from pathlib import Path

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

ROOT = Path(__file__).resolve().parents[1]
os.environ.setdefault('APP_ENV', 'test')
DB_PATH = ROOT / 'data' / f'mail-center-browser-{uuid.uuid4().hex}.db'
os.environ['DATABASE_URL'] = f'sqlite:///{DB_PATH}'
sys.path.insert(0, str(ROOT))

from app.db import SessionLocal, migrate  # noqa: E402
from app.main import app  # noqa: E402
from app.security import clear_rate_limits  # noqa: E402
from scripts.browser_e2e import backend_bridge, browser_bootstrap, inline_document, new_page  # noqa: E402

atexit.register(lambda: DB_PATH.exists() and DB_PATH.unlink())


def reset_db() -> None:
    clear_rate_limits(); migrate()
    with SessionLocal.begin() as db:
        for table in ('email_campaign_events', 'email_campaign_unsubscribe_tokens', 'email_campaign_attachments',
                      'email_campaign_jobs', 'email_campaign_recipients', 'platform_campaigns', 'email_suppressions',
                      'audit_log', 'outbox', 'sessions', 'users'):
            try:
                db.execute(text(f'DELETE FROM {table}'))
            except Exception:
                pass


def main() -> None:
    reset_db()
    checks: list[str] = []

    def check(condition: bool, label: str) -> None:
        assert condition, label
        checks.append(label)
        print('PASS', label, flush=True)

    with TestClient(app) as client:
        signup = client.post('/api/auth/signup', json={'name': 'Browser Mail Admin', 'email': 'browser-mail-admin@example.com', 'password': 'SecurePass123!'})
        assert signup.status_code == 200, signup.text
        csrf = signup.json()['csrf_token']
        with SessionLocal.begin() as db:
            db.execute(text("UPDATE users SET role='SUPER_ADMIN',email_verified=1 WHERE email='browser-mail-admin@example.com'"))

        html = inline_document('super-admin.html', 'dashboard.css', 'super-admin.js', browser_bootstrap(), lambda js: js.replace('location.href=', 'window.__NAV='))
        errors: list[str] = []
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(headless=True, args=['--no-sandbox'])
            page = new_page(browser, client, (1440, 1000))
            page.add_init_script('history.pushState = () => {}; history.replaceState = () => {};')
            page.on('pageerror', lambda exc: errors.append(str(exc)))
            page.on('console', lambda msg: errors.append(f'{msg.type}:{msg.text}') if msg.type == 'error' else None)
            page.set_content(html, wait_until='load')
            page.evaluate('(token) => { window.__CSRF = token; sessionStorage.setItem("csrf", token); }', csrf)
            page.wait_for_function("document.querySelector('#sideUserName')?.textContent === 'Browser Mail Admin'", timeout=15000)
            page.locator('[data-admin-tab="adminCampaigns"]').click()
            page.wait_for_selector('#adminCampaignForm')
            check(page.locator('#campaignRichEditor').is_visible(), 'Mail Center exposes rich compose surface')
            check(page.locator('#campaignPreviewFrame').get_attribute('sandbox') == '', 'Mail preview is sandboxed')
            page.fill('#campaignTitle', 'Browser campaign')
            page.select_option('#campaignAudience', 'MANUAL')
            page.fill('#campaignSubject', 'A browser-tested update')
            page.locator('#campaignRichEditor').fill('<h1>Update</h1><p>Safe browser body</p>')
            page.locator('[data-recipient]').fill('browser-recipient@example.com')
            page.locator('#adminCampaignForm button[type="submit"]').click()
            page.wait_for_function("document.querySelector('#campaignMsg')?.textContent.includes('Draft saved')", timeout=15000)
            check('Browser campaign' in page.locator('#campaignList').inner_text(), 'Mail Center saves a draft through the real API')
            check(page.locator('#queueDraft').is_enabled(), 'Saved draft enables queue control')
            page.fill('#campaignTestRecipients', 'qa@example.com')
            page.locator('#testCurrentCampaign').click()
            page.wait_for_timeout(250)
            page.locator('#queueDraft').click()
            page.wait_for_function("document.querySelector('#campaignList')?.innerText.includes('QUEUED')", timeout=15000)
            check('QUEUED' in page.locator('#campaignList').inner_text(), 'Mail Center queues the draft for background delivery')
            if errors:
                print('BROWSER ERRORS', errors, flush=True)
            check(not errors, 'Mail Center browser journey has no uncaught errors')
            page.close(); browser.close()

        with SessionLocal() as db:
            campaign = db.execute(text("SELECT status,total_recipients FROM platform_campaigns WHERE title='Browser campaign'" )).mappings().one()
            test_mail = db.execute(text("SELECT count(*) FROM outbox WHERE recipient='qa@example.com' AND channel='EMAIL'")).scalar_one()
        check(campaign['status'] == 'QUEUED' and campaign['total_recipients'] == 1, 'Browser actions persist campaign queue state and recipient snapshot')
        check(test_mail == 1, 'Test send is isolated to the supplied QA recipient')

    report = {'mode': 'Playwright Chromium + real FastAPI bridge', 'checks': len(checks), 'errors': errors, 'items': checks}
    output = ROOT / 'data' / 'mail-center-browser-e2e.json'
    output.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(f'mail_center_browser_e2e: {len(checks)} checks / {len(errors)} errors')


if __name__ == '__main__':
    main()
