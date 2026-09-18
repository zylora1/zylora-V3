"""Browser certification for nested and parent-rotated resize gestures."""

from __future__ import annotations

import argparse
import json
import math
import os
import re
import sys
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-nested-resize-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'e2e.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from scripts.editor_media_e2e import bridge, bootstrap  # noqa: E402
from tests.test_ai_first_rebuild import auth, reset_db  # noqa: E402


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return re.sub(
        r'<script src="/static/studio\.js"></script>',
        lambda _: f"<script>{bootstrap()}</script><script>{bundle}</script>",
        html,
    )


HANDLES = ("right", "left", "bottom", "top", "bottom-right", "bottom-left", "top-right", "top-left")
BASE = {"x": 100, "y": 80, "w": 220, "h": 140, "rotation": 30}


def rotate_vector(x: float, y: float, degrees: float) -> tuple[float, float]:
    radians = math.radians(degrees)
    return (x * math.cos(radians) - y * math.sin(radians), x * math.sin(radians) + y * math.cos(radians))


def expected_anchor(rect: dict[str, float], handle: str) -> tuple[float, float]:
    # The opposite corner/edge remains fixed in parent-local coordinates. For
    # rotated children compare the rendered anchor point, rather than the
    # unrotated CSS box's top-left coordinate.
    local_x = -(rect["w"] / 2) if "right" in handle else rect["w"] / 2 if "left" in handle else 0
    local_y = -(rect["h"] / 2) if "bottom" in handle else rect["h"] / 2 if "top" in handle else 0
    cx, cy = rect["x"] + rect["w"] / 2, rect["y"] + rect["h"] / 2
    rotated_x, rotated_y = rotate_vector(local_x, local_y, rect.get("rotation", 0))
    return cx + rotated_x, cy + rotated_y


def read_geometry(page, node) -> dict[str, float]:
    return node.evaluate(
        """node => {
          const s = node.style;
          const n = key => Number.parseFloat(s[key] || '0');
          return {x:n('left'), y:n('top'), w:n('width'), h:n('height'), rotation:n('rotate')};
        }"""
    )


def set_transform(page, values: dict[str, float]) -> None:
    panel = page.locator('[aria-label="Properties inspector"]')
    inputs = panel.locator('input[type="number"]')
    for index, key in enumerate(("x", "y", "w", "h", "rotation")):
        inputs.nth(index).fill(str(values[key]))
        page.wait_for_timeout(30)


def select_layer(page, node_id: str) -> None:
    layer = page.locator(f'[data-layer-node-id="{node_id}"]')
    if layer.count() == 0:
        page.get_by_role("button", name="Layers").click()
        page.wait_for_timeout(60)
        layer = page.locator(f'[data-layer-node-id="{node_id}"]')
    layer.click()
    page.wait_for_timeout(80)
    if page.locator('[aria-label="Properties inspector"]').count() == 0:
        page.get_by_role("button", name="Design").click()
        page.wait_for_timeout(80)


def run(browser_name: str) -> dict:
    reset_db()
    client, headers = auth()
    created = client.post(
        "/api/sites",
        headers=headers,
        json={
            "business_name": "Nested Resize QA",
            "description": "Controlled nested geometry certification.",
            "origin": "AI",
            "industry": "Design",
            "style": "Editorial",
        },
    )
    assert created.status_code == 200, created.text
    site_id = created.json()["id"]
    shell = client.get(f"/studio/{site_id}")
    assert shell.status_code == 200, shell.text
    errors: list[str] = []
    results: dict[str, object] = {"browser": browser_name, "handles": {}}

    with sync_playwright() as playwright:
        browser = getattr(playwright, browser_name).launch(headless=True, args=["--no-sandbox"] if browser_name == "chromium" else [])
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.on("console", lambda msg: errors.append(f"console:{msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda exc: errors.append(f"page:{exc}"))
        page.expose_function("__backendFetch", bridge(client))
        page.set_content(inline_shell(shell.text), wait_until="load")
        page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)

        page.get_by_role("button", name="Sections").click()
        page.get_by_role("button", name="Add blank section").click()
        page.get_by_role("button", name="Elements").click()
        page.get_by_role("button", name="Add Rectangle", exact=True).last.click()
        child = page.locator('[data-studio-type="container"]').last
        assert child.count() == 1
        child_id = child.get_attribute("data-studio-id")
        assert child_id
        parent = page.locator('[data-studio-type="section"]').last
        parent_id = parent.get_attribute("data-studio-id")
        assert parent_id

        select_layer(page, parent_id)
        set_transform(page, {"x": 180, "y": 120, "w": 1200, "h": 700, "rotation": 25})
        parent_style = parent.get_attribute("style") or ""
        assert "rotate: 25deg" in parent_style or "rotate:25deg" in parent_style
        zoom = float(page.get_by_test_id("studio-artboard").get_attribute("data-viewport").split(",")[-1])

        for handle in HANDLES:
            select_layer(page, child_id)
            set_transform(page, BASE)
            before = read_geometry(page, child)
            handle_node = child.locator(f'[data-handle="{handle}"]')
            handle_node.scroll_into_view_if_needed()
            box = handle_node.bounding_box()
            assert box, handle
            hx = box["x"] + box["width"] / 2
            hy = box["y"] + box["height"] / 2
            local_x = 32 if "right" in handle else -32 if "left" in handle else 0
            local_y = 32 if "bottom" in handle else -32 if "top" in handle else 0
            dx, dy = rotate_vector(local_x * zoom, local_y * zoom, 55)
            page.mouse.move(hx, hy)
            page.mouse.down()
            page.mouse.move(hx + dx, hy + dy, steps=6)
            page.mouse.up()
            page.wait_for_timeout(100)
            after = read_geometry(page, child)
            before_anchor = expected_anchor(before, handle)
            after_anchor = expected_anchor(after, handle)
            anchor_error = max(abs(before_anchor[0] - after_anchor[0]), abs(before_anchor[1] - after_anchor[1]))
            changed = abs(after["w"] - before["w"]) > 0.5 or abs(after["h"] - before["h"]) > 0.5
            results["handles"][handle] = {
                "before": before,
                "after": after,
                "handle_box": box,
                "selected": child.get_attribute("data-studio-selected"),
                "anchor_error": anchor_error,
                "changed": changed,
                "parent_rotation": 25,
                "node_rotation": 30,
            }
            assert changed, (handle, before, after, results["handles"][handle])
            assert anchor_error <= 1.0, (handle, before, after, anchor_error)

        assert not errors, errors
        results["nested"] = True
        results["parent_transform"] = {"x": 180, "y": 120, "rotation": 25}
        results["node_rotation"] = 30
        results["errors"] = errors
        browser.close()
    return results


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--browser", choices=("chromium", "firefox", "webkit"), default="chromium")
    args = parser.parse_args()
    print(json.dumps(run(args.browser), indent=2))
