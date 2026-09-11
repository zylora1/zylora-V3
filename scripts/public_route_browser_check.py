from __future__ import annotations

import argparse
import json
from pathlib import Path

from playwright.sync_api import sync_playwright


ROUTES = [
    '/',
    '/pricing',
    '/features',
    '/ai-editor',
    '/seo',
    '/solutions/schools',
    '/solutions/coaching-centers',
    '/solutions/portfolio',
    '/about',
    '/security',
    '/status',
    '/support',
    '/contact',
    '/help',
    '/help/studio',
]
VIEWPORTS = {'desktop': {'width': 1440, 'height': 900}, 'mobile': {'width': 390, 'height': 844}}


def main() -> int:
    parser = argparse.ArgumentParser(description='Smoke-test Zylora public routes in Playwright.')
    parser.add_argument('--base', default='http://127.0.0.1:8765')
    parser.add_argument('--output-dir', default='artifacts/public-route-browser')
    parser.add_argument('--screenshots', action='store_true', help='Capture viewport screenshots for the first three representative routes.')
    parser.add_argument('--browsers', nargs='+', choices=('chromium', 'firefox', 'webkit'), default=['chromium', 'firefox', 'webkit'])
    args = parser.parse_args()
    out = Path(args.output_dir)
    out.mkdir(parents=True, exist_ok=True)
    results = []

    with sync_playwright() as playwright:
        for browser_name in args.browsers:
            try:
                browser = getattr(playwright, browser_name).launch(headless=True)
            except Exception as exc:  # The report must distinguish host runtime failures.
                results.append({'browser': browser_name, 'status': 'blocked', 'error': type(exc).__name__ + ': ' + str(exc)[:300]})
                continue
            try:
                for viewport_name, viewport in VIEWPORTS.items():
                    page = browser.new_page(viewport=viewport)
                    page.set_default_timeout(5000)
                    console_errors: list[str] = []
                    page.on('console', lambda message: console_errors.append(message.text) if message.type == 'error' else None)
                    for route in ROUTES:
                        try:
                            response = page.goto(args.base + route, wait_until='domcontentloaded', timeout=8000)
                            # Try the skill-recommended settled state, but do not let an
                            # unreachable third-party font request hide route results.
                            try:
                                page.wait_for_load_state('networkidle', timeout=1500)
                            except Exception:
                                pass
                            status = response.status if response else None
                            overflow = page.evaluate('document.documentElement.scrollWidth > window.innerWidth + 1')
                            h1_count = page.locator('h1').count()
                            results.append({'browser': browser_name, 'viewport': viewport_name, 'route': route, 'status': status, 'h1_count': h1_count, 'horizontal_overflow': bool(overflow), 'console_errors': len(console_errors)})
                            if args.screenshots and route in {'/', '/features', '/help'}:
                                # Keep captures to the visible viewport: full-page screenshots
                                # can exhaust the Windows headless renderer on long landing pages.
                                page.screenshot(path=str(out / f'{browser_name}-{viewport_name}-{route.strip("/").replace("/", "-") or "home"}.png'), full_page=False)
                        except Exception as exc:
                            results.append({'browser': browser_name, 'viewport': viewport_name, 'route': route, 'status': 'error', 'error': type(exc).__name__ + ': ' + str(exc)[:300]})
                    page.close()
            finally:
                browser.close()

    report = {'routes': ROUTES, 'viewports': VIEWPORTS, 'results': results}
    (out / 'report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(json.dumps(report, indent=2))
    failures = [row for row in results if row.get('status') != 200 or row.get('h1_count') != 1 or row.get('horizontal_overflow') or row.get('console_errors')]
    return 1 if failures else 0


if __name__ == '__main__':
    raise SystemExit(main())
