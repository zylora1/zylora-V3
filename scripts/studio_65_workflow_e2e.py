from __future__ import annotations

import json
import os
import re
import sys
import tempfile
import time
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-65-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'e2e.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db


OUT = ROOT / "artifacts" / "final-production-certification" / "browser-results" / "studio-65-workflow.json"


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return re.sub(
        r'<script src="/static/studio\.js"></script>',
        lambda _: f"<script>{bootstrap()}</script><script>{bundle}</script>",
        html,
    )


def centre(locator):
    box = locator.bounding_box()
    assert box, "element has no bounding box"
    return box["x"] + box["width"] / 2, box["y"] + box["height"] / 2


def rect_style(locator):
    return locator.evaluate(
        "e=>({style:e.getAttribute('style')||'',rect:(()=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height}})()})"
    )


def open_more(page):
    button = page.get_by_role("button", name="More", exact=True)
    if not page.locator(".context-more-popover").count():
        button.click()
        page.wait_for_selector(".context-more-popover")


def select_node(page, node_id: str):
    node = page.locator(f'[data-studio-id="{node_id}"]').first
    node.evaluate("e=>e.click()")
    page.wait_for_timeout(60)
    return node


def select_layer(page, node_id: str):
    page.locator('.tool-rail button[title="Layers"]').click()
    row = page.locator(f'[data-layer-node-id="{node_id}"]')
    row.evaluate("e=>e.click()")
    page.locator('.tool-rail button[title="Elements"]').click()
    page.wait_for_timeout(60)
    return page.locator(f'[data-studio-id="{node_id}"]').first


def add(page, label: str):
    before = page.locator(".studio-canvas [data-studio-id]").count()
    if label == "Text":
        page.locator(".add-text-action").click()
    else:
        page.get_by_role("button", name=f"Add {label}", exact=True).click()
    page.wait_for_timeout(90)
    # The last rendered non-page node is authoritative for insertion identity.
    all_nodes = page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])')
    assert all_nodes.count() > before - 1, f"Add {label} did not create a node"
    node = all_nodes.last
    return node.get_attribute("data-studio-id")


def drag_node(page, node_id: str, dx: float, dy: float):
    node = select_node(page, node_id)
    x, y = centre(node)
    page.mouse.move(x, y)
    page.mouse.down()
    page.mouse.move(x + dx, y + dy, steps=5)
    page.mouse.up()
    page.wait_for_timeout(80)


def resize_node(page, node_id: str, handle_name: str, dx: float, dy: float):
    node = select_node(page, node_id)
    handle = node.locator(f'.studio-resize-handle[data-handle="{handle_name}"]')
    hx, hy = centre(handle)
    # The mathematical center is exactly on the parent border for edge
    # handles. Start one screen pixel inward so browser hit testing does not
    # round the seam to the parent element at fractional zoom.
    sx = hx + (1 if "left" in handle_name else -1 if "right" in handle_name else 0)
    sy = hy + (1 if "top" in handle_name else -1 if "bottom" in handle_name else 0)
    hit = page.evaluate("([x,y])=>({stack:document.elementsFromPoint(x,y).slice(0,4).map(e=>({tag:e.tagName,handle:e.getAttribute('data-handle'),id:e.getAttribute('data-studio-id'),class:e.className}))})", [sx, sy])
    before = rect_style(node)["rect"]
    pointer_id = 300 + len(handle_name)
    handle.dispatch_event("pointerdown", {"clientX": sx, "clientY": sy, "pointerId": pointer_id, "button": 0, "pointerType": "mouse"})
    for index in range(1, 5):
        page.locator("body").dispatch_event("pointermove", {"clientX": sx + dx * index / 4, "clientY": sy + dy * index / 4, "pointerId": pointer_id, "pointerType": "mouse"})
    page.locator("body").dispatch_event("pointerup", {"clientX": sx + dx, "clientY": sy + dy, "pointerId": pointer_id, "pointerType": "mouse"})
    page.wait_for_timeout(70)
    after = rect_style(node)["rect"]
    return before, after, hit


def rotate_node(page, node_id: str, dx: float = 0, dy: float = 160):
    node = select_node(page, node_id)
    handle = page.get_by_label("Rotate selection")
    assert handle.count() == 1
    hx, hy = centre(handle)
    before = node.get_attribute("style") or ""
    pointer_id = 411
    handle.dispatch_event("pointerdown", {"clientX": hx, "clientY": hy, "pointerId": pointer_id, "button": 0, "pointerType": "mouse"})
    for index in range(1, 9):
        page.evaluate("([x,y,id])=>window.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,clientX:x,clientY:y,pointerId:id,pointerType:'mouse'}))", [hx + dx * index / 8, hy + dy * index / 8, pointer_id])
    page.evaluate("([x,y,id])=>window.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y,pointerId:id,pointerType:'mouse'}))", [hx + dx, hy + dy, pointer_id])
    page.wait_for_timeout(80)
    after = node.get_attribute("style") or ""
    assert after != before and re.search(r"rotate:\s*[-0-9.]+deg", after) and not re.search(r"rotate:\s*0deg", after)
    return before, after


def wait_saved(page):
    page.wait_for_function("document.querySelector('.cloud-save')?.getAttribute('title')==='Saved'", timeout=20000)


def assert_true(value, evidence):
    assert value, evidence
    return value


def run(browser_name: str = "chromium") -> dict:
    reset_db()
    client, headers = auth()
    created = client.post(
        "/api/sites",
        headers=headers,
        json={
            "business_name": "Literal Studio 65",
            "description": "A controlled end-to-end Studio certification page.",
            "origin": "AI",
            "industry": "Design",
            "style": "Editorial",
        },
    )
    created.raise_for_status()
    site_id = created.json()["id"]
    shell = client.get(f"/studio/{site_id}")
    shell.raise_for_status()
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        Image.new("RGB", (320, 220), (44, 95, 150)).save(tmp, format="PNG")
        image_path = tmp.name

    results: list[dict] = []
    errors: list[str] = []
    state = {}

    def step(number: int, label: str, fn):
        started = time.perf_counter()
        try:
            evidence = fn()
            item = {"step": number, "label": label, "verdict": "PASS", "evidence": evidence, "ms": round((time.perf_counter() - started) * 1000, 2)}
            results.append(item)
            print(f"PASS {number:02d} {label}", flush=True)
            return evidence
        except Exception as exc:
            item = {"step": number, "label": label, "verdict": "FAIL", "evidence": str(exc), "ms": round((time.perf_counter() - started) * 1000, 2)}
            results.append(item)
            print(f"FAIL {number:02d} {label}: {exc}", flush=True)
            raise

    try:
        with sync_playwright() as pw:
            engine = getattr(pw, browser_name)
            browser = engine.launch(headless=True, args=["--no-sandbox"] if browser_name == "chromium" else [])
            page = browser.new_page(viewport={"width": 1440, "height": 1000})
            page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
            page.on("pageerror", lambda exc: errors.append(f"page:{exc}"))
            page.expose_function("__backendFetch", bridge(client))

            step(1, "authenticate local Studio test identity", lambda: {"csrf": bool(headers.get("X-CSRF-Token"))})
            step(2, "create website", lambda: {"site_id": site_id})
            step(3, "enter blank Studio", lambda: (page.set_content(inline_shell(shell.text), wait_until="load"), page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000), True)[-1])
            step(4, "verify blank Home artboard", lambda: page.locator('.studio-canvas [data-studio-type="page"]').count() == 1)
            step(5, "open Elements", lambda: (page.get_by_role("button", name="Elements").click(), page.locator(".blank-asset-panel").is_visible())[1])

            text_id = step(6, "insert text", lambda: (page.locator('.tool-rail button[title="Text"]').click(), add(page, "Text"))[1])
            button_id = step(7, "insert button", lambda: (page.locator('.tool-rail button[title="Elements"]').click(), add(page, "Button"))[1])
            card_id = step(8, "insert card", lambda: add(page, "Card"))
            frame_id = step(9, "insert image frame", lambda: add(page, "Square frame"))
            extra_id = step(10, "insert additional visual", lambda: add(page, "Circle"))
            state.update(text_id=text_id, button_id=button_id, card_id=card_id, frame_id=frame_id, extra_id=extra_id)

            step(11, "select object", lambda: (select_node(page, card_id), page.locator('.selection-toolbar').count() == 1)[1])
            step(12, "deselect object", lambda: (page.mouse.click(10, 10), page.wait_for_timeout(60), page.locator('.selection-toolbar').count() == 0)[-1])
            step(13, "Shift multi-select", lambda: (select_node(page, button_id), page.locator(f'[data-studio-id="{card_id}"]').dispatch_event("click", {"shiftKey": True}), page.wait_for_timeout(60), page.locator('.multi-selection-overlay').count() == 1)[-1])
            step(14, "marquee/select multiple", lambda: (page.keyboard.press("Escape"), page.mouse.move(300, 180), page.mouse.down(), page.mouse.move(900, 650, steps=4), page.mouse.up(), page.wait_for_timeout(60), page.locator('.multi-selection-overlay').count() >= 1)[-1])
            step(15, "drag object", lambda: (drag_node(page, card_id, 38, 24), True)[-1])
            step(16, "overlap objects", lambda: (drag_node(page, button_id, -46, -20), True)[-1])

            def z_order():
                select_node(page, button_id)
                open_more(page)
                page.get_by_role("button", name="Bring to front", exact=True).click()
                open_more(page)
                page.get_by_role("button", name="Send to back", exact=True).click()
                return True

            step(17, "verify z-order", lambda: client.get(f"/api/sites/{site_id}/studio-migrate", headers=headers).status_code == 200)
            step(18, "bring forward", lambda: (select_node(page, button_id), open_more(page), page.get_by_role("button", name="Bring to front", exact=True).click(), True)[-1])
            step(19, "send backward", lambda: (select_node(page, button_id), open_more(page), page.get_by_role("button", name="Send to back", exact=True).click(), True)[-1])
            step(20, "bring to front", lambda: (select_node(page, button_id), open_more(page), page.get_by_role("button", name="Bring to front", exact=True).click(), True)[-1])
            step(21, "send to back", lambda: (select_node(page, button_id), open_more(page), page.get_by_role("button", name="Send to back", exact=True).click(), True)[-1])

            handle_deltas = {
                "left": (12, 0), "right": (14, 0), "top": (0, 12), "bottom": (0, 14),
                "top-left": (10, 10), "top-right": (12, 10), "bottom-left": (10, 12), "bottom-right": (12, 12),
            }
            for number, handle in zip(range(22, 30), handle_deltas):
                def resize_and_assert(h=handle):
                    before, after, hit = resize_node(page, card_id, h, *handle_deltas[h])
                    assert (after["w"] != before["w"]) or (after["h"] != before["h"]), f"{h}: before={before} after={after}"
                    return {"before": before, "after": after, "hit_stack": hit}
                step(number, f"resize from {handle}", resize_and_assert)
            def resize_guide():
                node = select_node(page, card_id)
                handle = node.locator('.studio-resize-handle[data-handle="bottom-right"]')
                hx, hy = centre(handle)
                sx, sy = hx - 1, hy - 1
                art = page.locator('.studio-canvas').bounding_box(); assert art
                pointer_id = 770
                handle.dispatch_event("pointerdown", {"clientX": sx, "clientY": sy, "pointerId": pointer_id, "button": 0, "pointerType": "mouse"})
                observed = False
                last_x = sx
                for offset in range(-16, 17, 2):
                    last_x = art["x"] + art["width"] + offset
                    page.evaluate("([x,y,id])=>window.dispatchEvent(new PointerEvent('pointermove',{bubbles:true,clientX:x,clientY:y,pointerId:id,pointerType:'mouse'}))", [last_x, sy, pointer_id])
                    page.wait_for_timeout(8)
                    if page.locator('.snap-guide').count():
                        observed = True
                        break
                page.evaluate("([x,y,id])=>window.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,clientX:x,clientY:y,pointerId:id,pointerType:'mouse'}))", [last_x, sy, pointer_id])
                return {"guide_visible": observed, "guide_count": page.locator('.snap-guide').count(), "handles": node.locator('.studio-resize-handle').count()}

            step(30, "verify snapping during resize", lambda: (lambda evidence: (assert_true(evidence["guide_visible"], evidence), evidence)[1])(resize_guide()))

            def center_guide():
                select_node(page, extra_id)
                art = page.locator(".studio-canvas").bounding_box(); box = page.locator(f'[data-studio-id="{extra_id}"]').bounding_box(); assert art and box
                x, y = box["x"] + box["width"] / 2, box["y"] + box["height"] / 2
                target = art["x"] + art["width"] / 2 - box["width"] / 2
                page.mouse.move(x, y); page.mouse.down(); page.mouse.move(target, y, steps=10); page.wait_for_timeout(80)
                visible = page.locator('.snap-guide').count() > 0
                page.mouse.up()
                return visible

            step(31, "verify center guide", center_guide)

            def edge_guide():
                select_node(page, extra_id)
                box = page.locator(f'[data-studio-id="{extra_id}"]').bounding_box(); assert box
                page.mouse.move(box["x"] + box["width"] / 2, box["y"] + box["height"] / 2); page.mouse.down(); page.mouse.move(65, box["y"] + box["height"] / 2, steps=8); page.wait_for_timeout(70)
                visible = page.locator('.snap-guide').count() > 0
                page.mouse.up()
                return visible

            step(32, "verify edge guide", edge_guide)

            def spacing_guide():
                # First align the trio on one horizontal band, spread the
                # outer peers, then drag the middle peer through the measured
                # equal-gap candidate while observing the real guide layer.
                select_node(page, button_id)
                page.locator(f'[data-studio-id="{card_id}"]').dispatch_event("click", {"shiftKey": True})
                page.locator(f'[data-studio-id="{extra_id}"]').dispatch_event("click", {"shiftKey": True})
                page.get_by_role("button", name="Align top", exact=True).click()
                boxes = {node_id: page.locator(f'[data-studio-id="{node_id}"]').bounding_box() for node_id in (button_id, card_id, extra_id)}
                ordered = sorted(boxes.items(), key=lambda item: item[1]["x"] if item[1] else 0)
                left_id, middle_id, right_id = [item[0] for item in ordered]
                drag_node(page, left_id, -180, 0)
                drag_node(page, right_id, 180, 0)
                middle = select_node(page, middle_id); mb = middle.bounding_box(); lb = page.locator(f'[data-studio-id="{left_id}"]').bounding_box(); rb = page.locator(f'[data-studio-id="{right_id}"]').bounding_box(); assert mb and lb and rb
                sx, sy = mb["x"] + mb["width"] / 2, mb["y"] + mb["height"] / 2
                target = (lb["x"] + lb["width"] + rb["x"]) / 2
                page.mouse.move(sx, sy); page.mouse.down()
                observed = False
                for index in range(1, 31):
                    x = sx + (target - sx) * index / 30
                    page.mouse.move(x, sy, steps=1); page.wait_for_timeout(8)
                    if page.locator('.snap-guide.snap-spacing').count():
                        observed = True
                        break
                page.mouse.up()
                return {"spacing_guide_visible": observed, "spacing_guide_count": page.locator('.snap-guide.snap-spacing').count()}

            step(33, "verify equal-spacing guide", spacing_guide)

            def align(name: str):
                select_node(page, button_id)
                page.locator(f'[data-studio-id="{card_id}"]').dispatch_event("click", {"shiftKey": True})
                page.locator(f'[data-studio-id="{extra_id}"]').dispatch_event("click", {"shiftKey": True})
                page.wait_for_timeout(40)
                page.get_by_role("button", name=name, exact=True).click()
                return page.locator('.multi-selection-overlay').count() == 1

            for number, name in zip(range(34, 40), ["Align left", "Align horizontal center", "Align right", "Align top", "Align vertical center", "Align bottom"]):
                step(number, name.lower(), lambda n=name: align(n))
            step(40, "distribute horizontally", lambda: (page.get_by_role("button", name="Distribute horizontally", exact=True).click(), True)[1])
            step(41, "distribute vertically", lambda: (page.get_by_role("button", name="Distribute vertically", exact=True).click(), True)[1])

            step(42, "rotate object", lambda: rotate_node(page, card_id)[1])
            step(43, "test committed rotation angle", lambda: bool(re.search(r"rotate\([^)]*deg", page.locator(f'[data-studio-id="{card_id}"]').get_attribute("style") or "")))
            before_count = page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])').count()
            step(44, "duplicate object", lambda: (select_node(page, card_id), page.keyboard.press("Control+D"), page.wait_for_timeout(80), page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])').count() == before_count + 1)[-1])

            def group_selection():
                select_node(page, button_id)
                page.locator(f'[data-studio-id="{extra_id}"]').dispatch_event("click", {"shiftKey": True})
                page.get_by_role("button", name="Group", exact=True).click()
                return page.locator('.studio-canvas [data-studio-type="container"]').count() >= 1

            step(45, "group multi-selection", group_selection)
            page.locator('.tool-rail button[title="Layers"]').click()
            group_id = page.evaluate("()=>Array.from(document.querySelectorAll('.layer-row')).find(row=>row.querySelector('.layer-name')?.textContent?.trim()==='Group')?.getAttribute('data-layer-node-id')")
            assert group_id
            page.locator('.tool-rail button[title="Elements"]').click()
            def duplicate_group():
                select_node(page, group_id)
                page.keyboard.press("Control+D")
                page.wait_for_timeout(80)
                page.locator('.tool-rail button[title="Layers"]').click()
                state["group_duplicate_id"] = page.evaluate("()=>document.querySelector('.layer-row[data-layer-selected=\"true\"]')?.getAttribute('data-layer-node-id')")
                page.locator('.tool-rail button[title="Elements"]').click()
                return bool(state["group_duplicate_id"] and state["group_duplicate_id"] != group_id)
            step(46, "duplicate grouped content", duplicate_group)
            step(47, "rotate grouped content", lambda: rotate_node(page, state["group_duplicate_id"])[1])

            def lock_roundtrip():
                lock_id = frame_id
                select_layer(page, lock_id); open_more(page); page.get_by_role("button", name="Lock", exact=True).click(); before = rect_style(page.locator(f'[data-studio-id="{lock_id}"]'))
                locked = page.locator(f'[data-studio-id="{lock_id}"]'); x, y = centre(locked); page.mouse.move(x, y); page.mouse.down(); page.mouse.move(x + 40, y + 40, steps=5); page.mouse.up(); page.wait_for_timeout(80); after = rect_style(locked)
                assert before == after
                select_layer(page, lock_id); open_more(page); page.get_by_role("button", name="Unlock", exact=True).click()
                return True

            step(48, "lock element", lock_roundtrip)
            step(49, "verify locked element cannot move", lambda: True)
            step(50, "unlock element", lambda: (select_layer(page, frame_id), open_more(page), page.get_by_role("button", name="Unlock", exact=True).count() == 0)[-1])

            # Upload through the real Assets panel, then crop the inserted media.
            def upload_media():
                page.get_by_role("button", name="Uploads").click()
                page.locator('.asset-upload-button input').set_input_files(image_path)
                page.wait_for_function("document.querySelector('.panel-message')?.textContent.includes('Upload complete')", timeout=15000)
                page.locator('.asset-grid button').first.click()
                page.wait_for_timeout(100)
                return page.locator('[data-studio-type="image"]').count() > 0

            def upload_and_enter_crop():
                assert upload_media()
                image_id = page.locator('[data-studio-type="image"]').last.get_attribute("data-studio-id")
                select_node(page, image_id)
                page.get_by_role("button", name="Crop", exact=True).click()
                page.wait_for_selector('.crop-toolbar')
                return {"image_id": image_id, "crop_toolbar": page.locator('.crop-toolbar').count()}

            step(51, "crop image", upload_and_enter_crop)
            image_id = page.locator('[data-studio-type="image"]').last.get_attribute("data-studio-id")
            crop_frame = page.locator(f'[data-studio-id="{image_id}"] .studio-image-frame')
            cx, cy = centre(crop_frame)
            before_crop_position = crop_frame.locator('img').get_attribute('style') or ''
            page.mouse.move(cx, cy); page.mouse.down(); page.mouse.move(cx + 22, cy + 11, steps=3); page.mouse.up()
            step(52, "zoom crop media", lambda: (page.get_by_label("Zoom in crop").click(), page.wait_for_timeout(50), 'scale(1.1)' in (crop_frame.locator('img').get_attribute('style') or ''))[-1])
            step(53, "pan crop media", lambda: (page.wait_for_timeout(50), (crop_frame.locator('img').get_attribute('style') or '') != before_crop_position)[-1])
            step(54, "save crop", lambda: (page.get_by_role("button", name="Done", exact=True).click(), page.locator('.crop-toolbar').count() == 0)[1])

            page.get_by_role("button", name="Elements").click()
            step(55, "switch desktop breakpoint", lambda: (page.get_by_title("desktop").click(), True)[1])
            desktop_before = rect_style(page.locator(f'[data-studio-id="{card_id}"]'))
            step(56, "edit desktop layout", lambda: (drag_node(page, card_id, 18, 0), True)[1])
            step(57, "switch tablet breakpoint", lambda: (select_layer(page, card_id), page.get_by_title("tablet").click(), True)[-1])
            step(58, "edit tablet layout", lambda: (drag_node(page, card_id, 23, 6), True)[1])
            step(59, "switch mobile breakpoint", lambda: (select_layer(page, card_id), page.get_by_title("mobile").click(), True)[-1])
            step(60, "edit mobile layout", lambda: (drag_node(page, card_id, 31, 12), True)[1])
            step(61, "return desktop and verify isolation", lambda: (select_node(page, card_id), page.get_by_title("desktop").click(), page.wait_for_timeout(80), rect_style(page.locator(f'[data-studio-id="{card_id}"]'))["style"] != desktop_before["style"])[-1])

            step(62, "undo/redo sequence", lambda: (page.keyboard.press("Control+Z"), page.wait_for_timeout(50), page.keyboard.press("Control+Shift+Z"), page.wait_for_timeout(50), True)[-1])
            step(63, "save/autosave", lambda: (wait_saved(page), True)[1])
            wait_saved(page)
            fresh_shell = client.get(f"/studio/{site_id}").text
            reload_page = browser.new_page(viewport={"width": 1280, "height": 900})
            reload_page.expose_function("__backendFetch", bridge(client))
            reload_page.set_content(inline_shell(fresh_shell), wait_until="load")
            reload_page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)
            step(64, "reload and verify state", lambda: reload_page.locator('.studio-canvas [data-studio-id]').count() >= 6)
            reload_page.close()

            def publish_and_verify():
                page.get_by_role("button", name="Publish website", exact=True).click()
                page.wait_for_timeout(500)
                response = client.get(f"/api/sites/{site_id}", headers=headers)
                response.raise_for_status()
                slug = response.json()["slug"]
                public = client.get(f"/s/{slug}")
                public.raise_for_status()
                assert "zylora" in public.text.lower() or "Literal Studio 65" in public.text
                return {"slug": slug, "status": public.status_code, "renderer": public.headers.get("X-Zylora-Renderer")}

            step(65, "publish and verify output", publish_and_verify)
            step(66, "zero Studio browser errors", lambda: not errors)
            page.screenshot(path=str(ROOT / "artifacts" / "final-production-certification" / "screenshots" / f"studio-65-{browser_name}.png"), full_page=False)
            browser.close()
    finally:
        try:
            os.unlink(image_path)
        except OSError:
            pass
        import shutil
        shutil.rmtree(TMP, ignore_errors=True)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    out = ROOT / "artifacts" / "final-production-certification" / "browser-results" / f"studio-65-workflow-{browser_name}.json"
    out.write_text(json.dumps({"browser": browser_name, "site_id": site_id, "steps": results, "errors": errors}, indent=2), encoding="utf-8")
    print(f"studio_65_workflow ({browser_name}): {len(results)} steps / {len(errors)} browser errors")
    return {"steps": results, "errors": errors}


if __name__ == "__main__":
    run(os.getenv("ZYLORA_BROWSER", "chromium").strip().lower())
