import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from scripts.capture_baseline import seed_baseline_data, SCREENSHOT_DIR
from scripts.browser_e2e import new_page, inline_document, patch_dashboard
from playwright.sync_api import sync_playwright
from fastapi.testclient import TestClient
from app.main import app

sess, csrf, sid = seed_baseline_data()
with TestClient(app, cookies={'zylora_session': sess}) as client, sync_playwright() as p:
    browser = p.chromium.launch()
    html = inline_document('dashboard.html', 'dashboard.css', 'dashboard.js', f'window.__CSRF="{csrf}";', patch=patch_dashboard)
    page = new_page(browser, client, (1440, 900))
    page.set_content(html, wait_until='load')
    page.wait_for_timeout(1200)
    page.screenshot(path=str(SCREENSHOT_DIR / '04_dashboard_websites_1440px.png'))
    browser.close()
print('Screenshot refreshed successfully!')
