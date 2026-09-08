"""Responsive browser matrix for the authenticated AI-credit dashboard.

This uses the real dashboard HTML/CSS/JS with an isolated SQLite backend and
the supported in-process Playwright bridge.  It verifies the credit card,
usage/history content, top-up affordance, low-balance status and horizontal
overflow at every release viewport.
"""
from __future__ import annotations

import json
import os
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright
from sqlalchemy import text
from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

# Reuse the same isolated fixture and account setup as the dedicated credit E2E.
from ai_credit_browser_e2e import bridge, migrate, signup, app, SessionLocal  # noqa: E402
from browser_e2e import inline_document, browser_bootstrap, patch_dashboard, new_page  # noqa: E402

VIEWPORTS = [
    (1440, 900), (1366, 768), (1280, 720), (1024, 768),
    (768, 1024), (430, 932), (390, 844), (375, 812), (360, 800),
]
if os.getenv("ZYLORA_MATRIX_ONLY"):
    VIEWPORTS = [tuple(map(int, os.environ["ZYLORA_MATRIX_ONLY"].split("x", 1)))]


def wait_for_credit_panel(page) -> None:
    # The responsive shell intentionally hides the rail at tablet/mobile widths;
    # use the same public view router the rail button invokes.
    page.evaluate("window.setView('billing')")
    page.wait_for_function(
        "document.querySelector('#normalAiBalance')?.textContent.trim() !== '' && "
        "document.querySelector('#chatbotReserveBalance')?.textContent.trim() !== ''",
        timeout=12000,
    )


def main() -> None:
    migrate()
    with TestClient(app) as client:
        user_id, _csrf = signup(client)
        with SessionLocal.begin() as db:
            db.execute(
                text(
                    "UPDATE credit_wallets SET normal_balance=CAST('12.3456' AS NUMERIC), "
                    "normal_reserved=0, normal_allocation=CAST('20' AS NUMERIC), "
                    "chatbot_reserved_balance=CAST('20' AS NUMERIC), chatbot_reserved_allocation=CAST('20' AS NUMERIC), "
                    "chatbot_reserved_held=0 WHERE user_id=:u"
                ),
                {"u": user_id},
            )

        html = inline_document("dashboard.html", "dashboard.css", "dashboard.js", browser_bootstrap(), patch_dashboard)
        results: list[dict[str, object]] = []
        errors: list[str] = []
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True, args=["--no-sandbox"])
            for width, height in VIEWPORTS:
                page = new_page(browser, client, (width, height))
                page_errors: list[str] = []
                page.on("pageerror", lambda exc: page_errors.append(str(exc)))
                page.set_content(html, wait_until="load")
                try:
                    page.wait_for_function("document.querySelector('#userName')?.textContent.trim() !== ''", timeout=12000)
                    wait_for_credit_panel(page)
                    # Keep assertions tied to the real card and its server-rendered values.
                    normal = page.locator("#normalAiBalance").inner_text().strip()
                    reserve = page.locator("#chatbotReserveBalance").inner_text().strip()
                    allocation = page.locator("#normalAiAllocation").inner_text().strip()
                    reserve_meta = page.locator("#chatbotReserveMeta").inner_text().strip()
                    page.locator("#creditTopupPanel").scroll_into_view_if_needed()
                    topup_visible = page.locator("#creditTopupPanel").is_visible()
                    topup_text = page.locator("#creditTopupPanel").inner_text()
                    card_box = page.locator("#aiCreditUsageCard").bounding_box()
                    normal_box = page.locator("#normalAiBalance").bounding_box()
                    reserve_box = page.locator("#chatbotReserveBalance").bounding_box()
                    overflow = page.evaluate(
                        "document.documentElement.scrollWidth > document.documentElement.clientWidth + 1"
                    )
                    clipped = bool(card_box and (card_box["x"] < -1 or card_box["x"] + card_box["width"] > width + 1))
                    targets = page.locator("#creditTopupPanel button, #billingPlans button")
                    target_sizes = targets.evaluate_all(
                        "els => els.map(e => { const r=e.getBoundingClientRect(), s=getComputedStyle(e), p=e.parentElement?.getBoundingClientRect(), a=e.closest('article')?.getBoundingClientRect(), g=e.closest('.billing-grid')?.getBoundingClientRect(); return {w:r.width,h:r.height,visible:s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0,label:(e.innerText||e.getAttribute('aria-label')||e.id||'').trim(), parent_w:p?.width, article_w:a?.width, grid_w:g?.width, css_width:s.width, box:s.boxSizing}; }).filter(x => x.visible)"
                    ) if targets.count() else []
                    small_targets = [x for x in target_sizes if x["w"] < 40 or x["h"] < 40]
                    row_count = page.locator("#aiCreditTransactionRows tr").count()
                    if not normal or not reserve or not allocation or not reserve_meta:
                        raise AssertionError("credit balances or allocation metadata did not render")
                    if not topup_visible or "Buy extra credits" not in topup_text:
                        raise AssertionError("manual credit purchase panel is not visible")
                    if overflow or clipped:
                        raise AssertionError(f"horizontal overflow/clipping at {width}x{height}")
                    if small_targets:
                        raise AssertionError(f"small billing touch target at {width}x{height}: {small_targets[:2]}")
                    if page_errors:
                        raise AssertionError(f"page errors: {page_errors[:2]}")
                    results.append({
                        "viewport": f"{width}x{height}",
                        "normal": normal,
                        "reserve": reserve,
                        "allocation": allocation,
                        "reserve_meta": reserve_meta,
                        "usage_rows": row_count,
                        "overflow": False,
                        "card_width": round(card_box["width"], 2) if card_box else None,
                        "normal_visible": bool(normal_box),
                        "reserve_visible": bool(reserve_box),
                        "manual_topup_visible": topup_visible,
                        "touch_targets_below_40px": 0,
                        "page_errors": 0,
                    })
                    print(f"PASS {width}x{height}: AI credit card, reserve, top-up and no overflow", flush=True)
                except Exception as exc:
                    errors.append(f"{width}x{height}: {exc}")
                    print(f"FAIL {width}x{height}: {exc}", flush=True)
                finally:
                    page.close()
            browser.close()
        report = {"browser": "chromium", "viewports": results, "errors": errors}
        print(json.dumps(report, indent=2))
        if errors:
            raise SystemExit(1)


if __name__ == "__main__":
    main()
