from __future__ import annotations

import json
import os
import sys
import tempfile
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-perf-"))
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'e2e.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from tests.test_ai_first_rebuild import auth, reset_db
from scripts.editor_media_e2e import bootstrap, bridge


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return html.replace('<script src="/static/studio.js"></script>', f"<script>{bootstrap()}</script><script>{bundle}</script>")


def run(count: int) -> dict:
    reset_db()
    client, headers = auth()
    created = client.post(
        "/api/sites",
        headers=headers,
        json={"business_name": f"Studio performance {count}", "description": "Node-count benchmark", "origin": "AI"},
    )
    created.raise_for_status()
    site_id = created.json()["id"]
    shell = client.get(f"/studio/{site_id}")
    shell.raise_for_status()
    errors: list[str] = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=["--no-sandbox"])
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.on("console", lambda msg: errors.append(f"console:{msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda exc: errors.append(f"page:{exc}"))
        page.expose_function("__backendFetch", bridge(client))
        page.set_content(inline_shell(shell.text), wait_until="load")
        page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)
        page.get_by_role("button", name="Elements").click()
        add = page.get_by_role("button", name="Add Rectangle")
        started = time.perf_counter()
        for _ in range(count):
            add.click()
        insertion_ms = (time.perf_counter() - started) * 1000
        page.wait_for_timeout(250)
        nodes = page.locator('.studio-canvas [data-studio-id]')
        actual = nodes.count() - 1
        target = nodes.last
        box = target.bounding_box()
        drag_ms = None
        if box:
            x = box["x"] + box["width"] / 2
            y = box["y"] + box["height"] / 2
            started = time.perf_counter()
            page.mouse.move(x, y)
            page.mouse.down()
            for step in range(24):
                page.mouse.move(x + step * 2, y + step, steps=1)
            page.mouse.up()
            drag_ms = (time.perf_counter() - started) * 1000
        result = {
            "nodes_requested": count,
            "nodes_rendered": actual,
            "insertion_ms": round(insertion_ms, 2),
            "pointer_drag_24_moves_ms": round(drag_ms, 2) if drag_ms is not None else None,
            "dom_elements": page.locator("*").count(),
            "browser_errors": errors,
        }
        browser.close()
        return result


if __name__ == "__main__":
    print(json.dumps([run(count) for count in (50, 100, 250, 500)], indent=2))
