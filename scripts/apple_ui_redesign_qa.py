from __future__ import annotations

import json
import re
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
STATIC = ROOT / "static"
OUT = ROOT / "artifacts" / "apple-redesign-qa"
WIDTHS = [1440, 1280, 1024, 768, 430, 390, 375, 360]
results: list[dict] = []
console_errors: list[str] = []
network_errors: list[str] = []


def inline_local_assets(name: str, *, scripts: bool = False) -> str:
    html = (STATIC / name).read_text(encoding="utf-8")

    def css(match: re.Match[str]) -> str:
        path = STATIC / match.group(1).split("/static/", 1)[-1]
        return f"<style>{path.read_text(encoding='utf-8')}</style>" if path.exists() else ""

    html = re.sub(r'<link\b[^>]*href=["\'](/static/[^"\']+\.css)["\'][^>]*?/?>', css, html, flags=re.I)
    html = re.sub(r'<link[^>]+href=["\']https://fonts\.[^>]+>', "", html, flags=re.I)
    if not scripts:
        html = re.sub(r"<script\b[^>]*>.*?</script>", "", html, flags=re.I | re.S)
    return html


def record(page, surface: str, width: int) -> None:
    data = page.evaluate(
        """()=>({
          viewport: innerWidth,
          viewportHeight: innerHeight,
          rootWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          visible: [...document.querySelectorAll('button,a,input,select,textarea')].filter(e=>{
            const r=e.getBoundingClientRect(),s=getComputedStyle(e);return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0
          }).length,
          overflowers: [...document.querySelectorAll('*')].map(e=>{const r=e.getBoundingClientRect();return {tag:e.tagName,cls:String(e.className||'').slice(0,80),left:Math.round(r.left),right:Math.round(r.right),width:Math.round(r.width)}}).filter(x=>x.right>innerWidth+1||x.left<-1).slice(0,8),
          rail: (()=>{const e=document.querySelector('.rail.sneat-sidebar');if(!e)return null;const r=e.getBoundingClientRect();return {left:Math.round(r.left),position:getComputedStyle(e).position,shell:e.parentElement?.className}})()
        })"""
    )
    # The root scrolling element determines user-visible horizontal overflow.
    # body.scrollWidth may include deliberately clipped decorative children.
    ok = data["rootWidth"] <= data["viewport"] + 1
    results.append({"surface": surface, "width": width, "noHorizontalOverflow": ok, **data})


def static_surface(browser, name: str, selectors: list[tuple[str, str]]) -> None:
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    page.on("pageerror", lambda exc: console_errors.append(f"{name}: {exc}"))
    page.set_content(inline_local_assets(name), wait_until="load")
    for label, selector in selectors:
        page.evaluate("sel=>{document.querySelectorAll('.view,.admin-pane').forEach(x=>x.classList.remove('active'));document.querySelector(sel)?.classList.add('active')}", selector)
        for width in WIDTHS:
            page.set_viewport_size({"width": width, "height": 900})
            page.wait_for_timeout(25)
            record(page, label, width)
        if label in {"dashboard-overview", "super-admin-overview"}:
            for width, height in [(1366, 768), (1280, 800)]:
                page.set_viewport_size({"width": width, "height": height})
                page.wait_for_timeout(25)
                record(page, f"{label}-laptop", width)
        if label in {"dashboard-overview", "dashboard-assistant", "dashboard-appointments", "super-admin-overview", "super-admin-users"}:
            page.set_viewport_size({"width": 1440, "height": 1000})
            page.screenshot(path=str(OUT / f"{label}-1440.png"), full_page=False)
            page.set_viewport_size({"width": 390, "height": 844})
            page.screenshot(path=str(OUT / f"{label}-390.png"), full_page=False)
    page.close()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 1000})
        page.on("pageerror", lambda exc: console_errors.append(f"landing: {exc}"))
        page.on("requestfailed", lambda request: network_errors.append(f"{request.method} {request.url}: {request.failure}"))
        page.set_content(inline_local_assets("index.html"), wait_until="load")
        for width in WIDTHS:
            page.set_viewport_size({"width": width, "height": 900})
            page.wait_for_timeout(25)
            record(page, "landing", width)
        for width, height in [(1366, 768), (1280, 800)]:
            page.set_viewport_size({"width": width, "height": height})
            page.wait_for_timeout(25)
            record(page, "landing-laptop", width)
        page.set_viewport_size({"width": 1440, "height": 1000})
        page.screenshot(path=str(OUT / "landing-1440.png"), full_page=False)
        page.set_viewport_size({"width": 390, "height": 844})
        page.screenshot(path=str(OUT / "landing-390.png"), full_page=False)
        page.close()

        static_surface(browser, "dashboard.html", [("dashboard-overview", "#overview"), ("dashboard-assistant", "#assistant"), ("dashboard-appointments", "#appointments"), ("dashboard-analytics", "#analytics")])
        static_surface(browser, "super-admin.html", [("super-admin-overview", "#adminOverview"), ("super-admin-users", "#adminUsers")])

        runtime = (STATIC / "public-runtime.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
        widget = browser.new_page(viewport={"width": 1440, "height": 900})
        widget.on("pageerror", lambda exc: console_errors.append(f"booking-widget: {exc}"))
        widget_html = f"""<!doctype html><html><head><meta name='viewport' content='width=device-width,initial-scale=1'></head><body><main><h1>Published site</h1></main><script>
        window.ZYLORA_SITE_ID='qa-site';
        window.fetch=async url=>{{url=String(url);if(url.includes('/assistant/config'))return new Response(JSON.stringify({{enabled:true,business_name:'QA Business',prompt:'How can I help?',appointment_booking:true,contact_options:{{}}}}),{{status:200,headers:{{'Content-Type':'application/json'}}}});if(url.endsWith('/assistant/conversations'))return new Response(JSON.stringify({{id:'qa-conversation'}}),{{status:200,headers:{{'Content-Type':'application/json'}}}});if(url.endsWith('/assistant/availability'))return new Response(JSON.stringify({{slots:['2026-09-09T09:00:00Z','2026-09-09T09:30:00Z','2026-09-10T10:00:00Z']}}),{{status:200,headers:{{'Content-Type':'application/json'}}}});return new Response('{{}}',{{status:200,headers:{{'Content-Type':'application/json'}}}})}};
        </script><script>{runtime}</script></body></html>"""
        widget.set_content(widget_html, wait_until="load")
        widget.locator(".zylora-sales-launcher").click()
        widget.locator('[data-z-action="book"]').click()
        widget.wait_for_selector(".zylora-booking-picker")
        assert widget.locator(".zylora-calendar-days button:not([disabled])").count() == 2
        assert widget.locator(".zylora-time-panel button").count() == 2
        for width in [1440, 390]:
            widget.set_viewport_size({"width": width, "height": 844})
            widget.wait_for_timeout(25)
            record(widget, "booking-widget", width)
        widget.screenshot(path=str(OUT / "booking-widget-390.png"), full_page=False)
        widget.close()

        live = browser.new_page(viewport={"width": 1280, "height": 800})
        live.on("pageerror", lambda exc: console_errors.append(f"live-landing: {exc}"))
        live.on("requestfailed", lambda request: network_errors.append(f"{request.method} {request.url}: {request.failure}"))
        live.on("response", lambda response: network_errors.append(f"HTTP {response.status} {response.url}") if response.status >= 400 else None)
        live.goto("http://127.0.0.1:8000/?apple-browser-qa=1", wait_until="networkidle")
        assert live.locator("h1").inner_text() == "Your business deserves more than a website."
        assert live.locator("#starterRegionalPrice").inner_text().strip() not in {"", "{{STARTER_REGIONAL_PRICE}}"}
        live.close()
        browser.close()

    failed = [x for x in results if not x["noHorizontalOverflow"]]
    report = {
        "viewports": WIDTHS,
        "checks": len(results),
        "passed": len(results) - len(failed),
        "failed": len(failed),
        "results": results,
        "consoleErrors": console_errors,
        "networkErrors": network_errors,
    }
    (OUT / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"apple_ui_redesign_qa: {report['passed']}/{report['checks']} geometry checks passed")
    print(f"console errors: {len(console_errors)}; network errors: {len(network_errors)}")
    for item in failed:
        print("OVERFLOW", item["surface"], item["width"], item["rootWidth"], item["bodyWidth"])
    raise SystemExit(1 if failed or console_errors else 0)


if __name__ == "__main__":
    main()
