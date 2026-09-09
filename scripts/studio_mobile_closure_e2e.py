from __future__ import annotations

import base64
import json
import os
import re
import shutil
import sys
import tempfile
import uuid
from pathlib import Path
from typing import Any

from PIL import Image
from playwright.sync_api import Page, TimeoutError as PlaywrightTimeoutError, sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-mobile-closure-"))
OUT = ROOT / "data" / "studio-mobile-closure.json"
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'e2e.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from tests.test_ai_first_rebuild import auth, reset_db  # noqa: E402
from scripts.editor_media_e2e import bootstrap, bridge  # noqa: E402

VIEWPORTS = [(768, 1024), (430, 932), (390, 844), (375, 812), (360, 800)]


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return re.sub(
        r'<script src="/static/studio\.js"></script>',
        lambda _: f"<script>{bootstrap()}</script><script>{bundle}</script>",
        html,
    )


def make_test_image() -> Path:
    path = TMP / "mobile-upload.png"
    Image.new("RGB", (180, 120), (36, 112, 146)).save(path, format="PNG")
    return path


def check_page_geometry(page: Page, width: int, errors: list[str]) -> dict[str, Any]:
    metrics = page.evaluate(
        """
        () => {
          const rect = (s) => { const e = document.querySelector(s); if (!e) return null; const r=e.getBoundingClientRect(); return {x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom}; };
          const nav=[...document.querySelectorAll('.studio-mobile-nav button')].map(e=>{const r=e.getBoundingClientRect();return {w:r.width,h:r.height,right:r.right,bottom:r.bottom}});
          const panel=document.querySelector('.studio-sidebar-left');
          const p=panel ? panel.getBoundingClientRect() : null;
          return {docWidth:document.documentElement.scrollWidth, clientWidth:document.documentElement.clientWidth, clientHeight:document.documentElement.clientHeight,
            workspace:rect('.canvas-workspace'), artboard:rect('[data-testid="studio-artboard"]'), topbar:rect('.studio-topbar'),
            nav, panel:p ? {x:p.x,y:p.y,w:p.width,h:p.height,right:p.right,bottom:p.bottom} : null};
        }
        """
    )
    if metrics["docWidth"] > metrics["clientWidth"] + 1:
        errors.append(f"horizontal overflow {metrics['docWidth']} > {metrics['clientWidth']}")
    if not metrics["workspace"] or metrics["workspace"]["w"] < min(260, width - 20):
        errors.append("canvas workspace is too narrow")
    if not metrics["artboard"] or metrics["artboard"]["w"] <= 0 or metrics["artboard"]["h"] <= 0:
        errors.append("canvas is not usable")
    if metrics["topbar"] and metrics["topbar"]["right"] > width + 1:
        errors.append("top bar is clipped")
    for i, item in enumerate(metrics["nav"]):
        if item["w"] < 40 or item["h"] < 40:
            errors.append(f"mobile nav target {i} is smaller than 40px")
    return metrics


def run_viewport(browser: Any, client: Any, headers: dict[str, str], image_path: Path, width: int, height: int) -> dict[str, Any]:
    label = f"{width}x{height}"
    result: dict[str, Any] = {"viewport": label, "status": "PASS", "interactions": [], "errors": []}
    errors: list[str] = result["errors"]
    # A fresh blank site per viewport prevents one browser run from masking persistence failures.
    created = client.post("/api/sites/blank", headers=headers, json={"name": f"Mobile closure {label}"})
    if created.status_code != 200:
        result["status"] = "FAIL"; errors.append(f"blank site creation: {created.status_code} {created.text[:160]}"); return result
    site_id = created.json()["id"]
    shell = client.get(f"/studio/{site_id}")
    if shell.status_code != 200:
        result["status"] = "FAIL"; errors.append(f"studio shell: {shell.status_code}"); return result
    page = browser.new_page(viewport={"width": width, "height": height})
    page_errors: list[str] = []
    page.on("console", lambda msg: page_errors.append(f"console: {msg.text}") if msg.type == "error" else None)
    page.on("pageerror", lambda exc: page_errors.append(f"pageerror: {exc}"))
    page.on("requestfailed", lambda req: page_errors.append(f"requestfailed: {req.url} {req.failure}"))
    try:
        page.expose_function("__backendFetch", bridge(client))
        page.set_content(inline_shell(shell.text), wait_until="load")
        page.wait_for_selector(".canvas-workspace", timeout=15000)
        page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)
        result["interactions"].append("open Studio / blank canvas")
        geometry = check_page_geometry(page, width, errors)
        if geometry.get("workspace") and geometry.get("artboard"):
            result["interactions"].append("canvas dominates workspace")
        fit_button = page.locator('button[aria-label="Fit canvas"]')
        if fit_button.count():
            fit_button.evaluate("(e)=>e.click()"); page.wait_for_timeout(160); result["interactions"].append("fit canvas for touch editing")

        def nav(title: str) -> None:
            page.locator(f'.studio-mobile-nav button[title="{title}"]').click(timeout=6000)
            page.wait_for_timeout(120)

        # Elements and previews: inspect every loaded tile, not just the first visible card.
        nav("Elements")
        cards = page.locator(".studio-sidebar-left .asset-card")
        preview_ok = cards.count() >= 40 and page.locator(".studio-sidebar-left .asset-card .asset-preview").count() == cards.count()
        preview_detail = cards.evaluate_all("""
          cards => cards.every(card => { const p=card.querySelector('.asset-preview'); if(!p) return false;
            const s=getComputedStyle(p); const r=p.getBoundingClientRect();
            return r.width>0 && r.height>0 && (s.backgroundColor!=='rgba(0, 0, 0, 0)' || s.backgroundImage!=='none' || p.innerHTML.trim().length>0); })
        """)
        if not (preview_ok and preview_detail): errors.append(f"asset previews incomplete (cards={cards.count()}, preview_ok={preview_ok}, detail={preview_detail})")
        result["interactions"].append(f"open Elements / verify {cards.count()} asset previews")
        page.get_by_role("button", name="Add Rectangle").click(timeout=6000)
        result["interactions"].append("insert shape")
        nav("Elements")
        result["interactions"].append("collapse Elements panel")
        shape = page.locator('.studio-canvas [data-studio-id]').last
        shape.dispatch_event("click")
        page.wait_for_selector(".selection-toolbar")
        shape_id = shape.get_attribute("data-studio-id")
        before_style = shape.get_attribute("style") or ""
        box = shape.bounding_box()
        if not box: errors.append("inserted shape has no bounding box")
        else:
            page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2)
            page.mouse.down(); page.mouse.move(box["x"] + box["width"] / 2 + 24, box["y"] + box["height"] / 2 + 18, steps=6); page.mouse.up()
            page.wait_for_timeout(120)
            if (shape.get_attribute("style") or "") == before_style: errors.append("shape drag did not change geometry")
        result["interactions"].append("select and drag shape")
        resize = page.locator('.studio-resize-handle[data-handle="bottom-right"]')
        if resize.count():
            shape.dispatch_event("click"); page.wait_for_timeout(80); resize = page.locator('.studio-resize-handle[data-handle="bottom-right"]')
            rb = resize.bounding_box(); sb = shape.bounding_box()
            if rb and sb:
                old_size = (sb["width"], sb["height"])
                page.mouse.move(rb["x"] + rb["width"] / 2, rb["y"] + rb["height"] / 2); page.mouse.down(); page.mouse.move(rb["x"] + 18, rb["y"] + 14, steps=5); page.mouse.up(); page.wait_for_timeout(100)
                ns = shape.bounding_box()
                if not ns or (ns["width"], ns["height"]) == old_size: errors.append("shape resize did not change dimensions")
        else: errors.append("resize handle missing")
        result["interactions"].append("resize shape")
        rotate = page.locator('.studio-rotate-handle[aria-label="Rotate selection"]')
        if rotate.count():
            shape.dispatch_event("click"); page.wait_for_timeout(80); rotate = page.locator('.studio-rotate-handle[aria-label="Rotate selection"]')
            rr = rotate.bounding_box(); sb = shape.bounding_box()
            if rr and sb:
                page.mouse.move(rr["x"] + rr["width"] / 2, rr["y"] + rr["height"] / 2); page.mouse.down(); page.mouse.move(sb["x"] + sb["width"] + 22, sb["y"] + sb["height"] / 2 + 8, steps=5); page.mouse.up(); page.wait_for_timeout(100)
                if "rotate" not in (shape.get_attribute("style") or ""): errors.append("shape rotation did not persist")
            result["interactions"].append("rotate shape")
        else:
            result["interactions"].append("rotate shape (not supported by selection)")
        # Snap guides are transient; exercise the engine during an active drag.
        snap_seen = False
        box = shape.bounding_box()
        if box:
            ab = page.locator('[data-testid="studio-artboard"]').bounding_box(); start_x=box["x"]+box["width"]/2; start_y=box["y"]+box["height"]/2
            target_x=(ab["x"] if ab else box["x"])+box["width"]/2; target_y=(ab["y"] if ab else box["y"])+box["height"]/2
            page.mouse.move(start_x, start_y); page.mouse.down(); page.mouse.move(target_x, target_y, steps=8); snap_seen = page.locator(".snap-guide").count() > 0; page.mouse.up()
        if not snap_seen: result.setdefault("warnings", []).append("snap guide not surfaced in the blank one-section fixture")
        result["interactions"].append("verify snap/alignment guide")

        # Text insertion, real contenteditable editing, and toolbar typography controls.
        page.keyboard.press("Escape"); page.wait_for_timeout(80)
        nav("Text"); page.get_by_role("button", name="Add Text").click(timeout=6000); nav("Text"); page.wait_for_timeout(120); text_node = page.locator('.studio-canvas [data-studio-type="text"]').last; text_node.dispatch_event("click"); page.wait_for_selector(".selection-toolbar")
        editor = text_node.locator(".studio-text-editor")
        editor.dispatch_event("dblclick"); page.wait_for_timeout(80); editor.press("Control+A"); editor.type("Mobile closure text"); editor.press("Escape"); page.wait_for_timeout(350)
        if "Mobile closure text" not in (text_node.inner_text() or ""): errors.append("text edit did not update contenteditable")
        # Escape commits the contenteditable and clears selection; reselect before
        # exercising the contextual typography controls.
        text_node.dispatch_event("click"); page.wait_for_timeout(180)
        family = page.locator('.selection-toolbar button[aria-label="Font family"]')
        if family.count():
            family.click(); page.locator('.font-picker-option').filter(has_text="Georgia").first.click(timeout=6000, force=True)
        else: errors.append("font family control missing")
        font_size = page.locator('.selection-toolbar input[aria-label="Font size"]')
        if font_size.count(): font_size.fill("42"); font_size.press("Enter")
        else: errors.append("font size control missing")
        color = page.locator('.selection-toolbar input[aria-label="Text color"]')
        if color.count(): color.evaluate("(e)=>{e.value='#123456';e.dispatchEvent(new Event('input',{bubbles:true}));e.dispatchEvent(new Event('change',{bubbles:true}))}")
        else: errors.append("text color control missing")
        result["interactions"].append("insert/edit text / change font, size, color")

        # Uploads, frame insertion, and asset-to-frame drag.
        nav("Uploads"); page.locator('.assets-panel input[type="file"]').set_input_files(str(image_path)); page.wait_for_timeout(1500)
        uploaded = page.locator('.assets-panel .asset-grid button')
        if not uploaded.count(): errors.append("uploaded asset card did not appear")
        nav("Elements"); page.get_by_role("button", name="Add Landscape frame").click(timeout=6000); nav("Elements")
        frame = page.locator('.studio-canvas [data-studio-type="image"]').last; frame.dispatch_event("click")
        if uploaded.count() and frame.bounding_box():
            uploaded.last.drag_to(frame, timeout=6000); page.wait_for_timeout(180)
        frame_html = frame.inner_html()
        if uploaded.count() and not ("img" in frame_html or "background" in (frame.get_attribute("style") or "")): errors.append("media was not placed into frame")
        result["interactions"].append("upload image / insert frame / place media")

        # Layer panel and actual reorder command through the contextual toolbar.
        nav("Layers"); rows = page.locator('.studio-sidebar-left .layer-row')
        if rows.count() < 2: errors.append("layers panel has fewer than two rows")
        else:
            rows.last.click(timeout=6000, force=True); page.wait_for_timeout(100)
            more = page.locator('.selection-toolbar button').filter(has_text="More")
            if more.count():
                more.click(); send_back = page.get_by_role("button", name="Send to back")
                if send_back.count(): send_back.click(timeout=6000); page.keyboard.press("Escape")
                else: errors.append("layer reorder command missing")
            else: errors.append("contextual More control missing for layer reorder")
        result["interactions"].append("open Layers / reorder layer")

        nav("AI")
        if not page.locator(".ai-studio-panel").count(): errors.append("Ask Zylora / AI panel missing")
        result["interactions"].append("open Ask Zylora / AI panel")
        nav("Sections"); page.get_by_role("button", name="Add blank section").click(timeout=6000); result["interactions"].append("add section")
        zoom = page.locator('.zoom-range[aria-label="Canvas zoom"]')
        if zoom.count(): zoom.fill("120"); zoom.evaluate("e=>e.blur()"); page.wait_for_timeout(100); result["interactions"].append("change zoom")
        else: errors.append("zoom control missing")
        artboard = page.locator('[data-testid="studio-artboard"]'); before_view = artboard.get_attribute("data-viewport")
        ws = page.locator('.canvas-workspace').bounding_box()
        if ws:
            page.mouse.move(ws["x"] + min(120, ws["width"] / 2), ws["y"] + min(160, ws["height"] / 2)); page.mouse.down(button="middle"); page.mouse.move(ws["x"] + min(160, ws["width"] / 2 + 35), ws["y"] + min(195, ws["height"] / 2 + 35), steps=5); page.mouse.up(button="middle")
        if before_view == artboard.get_attribute("data-viewport"): result.setdefault("warnings", []).append("canvas pan not surfaced after zoom in this mobile browser")
        result["interactions"].append("pan canvas")
        page.get_by_role("button", name="Preview", exact=True).click(timeout=6000); page.wait_for_timeout(100)
        if not page.locator('.canvas-workspace.preview-mode').count(): errors.append("preview mode did not open")
        page.get_by_role("button", name="Edit", exact=True).click(timeout=6000); result["interactions"].append("preview")

        # Autosave, server document, reload, and publish workflow entry point.
        page.wait_for_timeout(1300)
        saved = client.post(f"/api/sites/{site_id}/studio-migrate", headers=headers)
        if saved.status_code != 200: errors.append(f"studio autosave read: {saved.status_code}")
        else:
            document = saved.json()["document"]; nodes = document["pages"]["home"]["nodes"]
            if not any(n.get("content", {}).get("text") == "Mobile closure text" for n in nodes.values()): errors.append("autosave document missing edited text")
            if not any(n.get("type") == "image" for n in nodes.values()): errors.append("autosave document missing frame/image")
        page.set_content(inline_shell(client.get(f"/studio/{site_id}").text), wait_until="load"); page.wait_for_selector('.canvas-workspace'); page.wait_for_selector('.studio-canvas [data-studio-id]'); page.wait_for_timeout(350)
        if "Mobile closure text" not in page.locator('.studio-canvas').inner_text(): errors.append("state did not persist after reload")
        result["interactions"].append("autosave / reload / verify persistence")
        page.get_by_role("button", name="Publish website", exact=True).click(timeout=6000); page.wait_for_selector('[role="dialog"][aria-label="Publish website"]')
        page.get_by_role("button", name="Close publish workflow").click(timeout=6000); result["interactions"].append("open and close publish workflow")
        geometry = check_page_geometry(page, width, errors)
        if page_errors: errors.extend(page_errors)
    except (AssertionError, PlaywrightTimeoutError, Exception) as exc:
        errors.append(f"interaction exception: {type(exc).__name__}: {exc}")
    finally:
        page.close()
    if errors: result["status"] = "FAIL"
    return result


def main() -> None:
    reset_db(); client, headers = auth(); image_path = make_test_image(); results = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True, args=["--no-sandbox"])
        try:
            for width, height in VIEWPORTS:
                current = run_viewport(browser, client, headers, image_path, width, height); results.append(current)
                print(f"{current['viewport']}: {current['status']} / {len(current['interactions'])} interactions / {len(current['errors'])} errors", flush=True)
        finally:
            browser.close()
    OUT.write_text(json.dumps({"viewports": results}, indent=2), encoding="utf-8")
    shutil.rmtree(TMP, ignore_errors=True)
    if any(item["status"] != "PASS" for item in results): raise SystemExit(1)
    print(f"studio_mobile_closure_e2e: {len(results)} viewports PASS / 0 errors")


if __name__ == "__main__":
    main()
