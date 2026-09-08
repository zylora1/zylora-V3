from __future__ import annotations

import json
import re
from pathlib import Path

from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"
OUT = ROOT / "artifacts" / "zylora-rebuild-visual-qa"
WIDTHS = [1536, 1440, 1280, 1024, 834, 768, 430, 412, 390, 375, 360, 320]


def inline_landing() -> str:
    html = (STATIC / "index.html").read_text(encoding="utf-8")
    css = (STATIC / "zylora-public-rebuild.css").read_text(encoding="utf-8")
    js = (STATIC / "zylora-public-rebuild.js").read_text(encoding="utf-8")
    html = re.sub(r'<link\b[^>]*href=["\']/static/(?:public-theme|zylora-public-rebuild)\.css(?:\?[^"\']*)?[^>]*>', f"<style>{css}</style>", html, flags=re.I)
    html = re.sub(r'<script\b[^>]*src=["\']/static/zylora-public-rebuild\.js(?:\?[^"\']*)?[^>]*>\s*</script>', f"<script>{js}</script>", html, flags=re.I)
    html = re.sub(r'<link\b[^>]*href=["\']https://fonts[^>]+>', "", html, flags=re.I)
    html = html.replace('href="{{APP_URL}}/llms.txt"', 'href="/llms.txt"')
    return html


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    html = inline_landing()
    results = []
    with sync_playwright() as playwright:
        for browser_name in ("chromium", "firefox", "webkit"):
            browser = getattr(playwright, browser_name).launch(headless=True, args=["--no-sandbox"] if browser_name == "chromium" else None)
            for width in WIDTHS:
                errors: list[str] = []
                page = browser.new_page(viewport={"width": width, "height": 900}, reduced_motion="reduce")
                page.on("console", lambda message: errors.append(message.text) if message.type == "error" else None)
                page.on("pageerror", lambda error: errors.append(str(error)))
                page.set_content(html, wait_until="load")
                page.wait_for_timeout(80)
                metrics = page.evaluate("""() => ({
                    viewport: innerWidth,
                    scrollWidth: document.documentElement.scrollWidth,
                    canvas: Boolean(document.querySelector('#sonarCanvas')),
                    sonarWidth: Math.round(document.querySelector('[data-sonar-field]')?.getBoundingClientRect().width || 0),
                    prompt: (() => { const element = document.querySelector('[data-sonar-trigger]'); const rect = element?.getBoundingClientRect(); return { top: Math.round(rect?.top || 0), bottom: Math.round(rect?.bottom || 0), computedBottom: getComputedStyle(element).bottom }; })(),
                    heading: document.querySelector('h1')?.textContent.trim(),
                    mobileMenu: getComputedStyle(document.querySelector('.zr-menu-toggle')).display !== 'none',
                    oldLandingSelectors: document.querySelectorAll('.hero-editorial, .studio-canvas-window, .floating-assistant-card').length,
                    overflowers: [...document.querySelectorAll('body *')].map(element => { const rect = element.getBoundingClientRect(); return { tag: element.tagName, cls: String(element.className || '').slice(0, 80), text: String(element.textContent || '').trim().slice(0, 60), left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) }; }).filter(item => item.left < -1 || item.right > innerWidth + 1).slice(0, 4)
                })""")
                page.locator("[data-sonar-trigger]").click(force=True)
                page.screenshot(path=str(OUT / f"landing-{browser_name}-{width}.png"), full_page=False)
                passed = metrics["scrollWidth"] <= metrics["viewport"] and metrics["canvas"] and metrics["sonarWidth"] > 0 and not errors and metrics["oldLandingSelectors"] == 0
                results.append({"browser": browser_name, "width": width, "passed": passed, "errors": errors, "metrics": metrics})
                page.close()
            browser.close()
    report = {"browsers": ["Chromium", "Firefox", "WebKit"], "widths": WIDTHS, "checks": len(results), "passed": sum(item["passed"] for item in results), "failed": sum(not item["passed"] for item in results), "results": results}
    (OUT / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"zylora_rebuild_visual_qa: {report['passed']}/{report['checks']} checks passed")
    for item in results:
        if not item["passed"]:
            print("FAIL", item["browser"], item["width"], item["errors"], item["metrics"])
    raise SystemExit(0 if report["failed"] == 0 else 1)


if __name__ == "__main__":
    main()
