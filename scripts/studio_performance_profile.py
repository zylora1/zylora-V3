"""Repeatable 500-node Studio resize profile.

This is a read-only browser benchmark. It uses the real Studio bundle and
browser pointer events against an isolated temporary SQLite database; it never
opens or mutates the developer database.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import tempfile
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
TMP = Path(tempfile.mkdtemp(prefix="zylora-studio-profile-"))
REQUIRED_OPERATIONS = ("selection", "drag", "resize", "zoom", "breakpoint", "undo", "save")
REQUIRED_OPERATION_METRICS = ("long_tasks", "p95_frame_ms")
sys.path.insert(0, str(ROOT))

def validate_profile_result(result: dict) -> list[str]:
    errors: list[str] = []
    browser_errors = result.get("browser_errors")
    if browser_errors:
        errors.extend(f"browser error: {value}" for value in browser_errors)
    operations = result.get("operations")
    if not isinstance(operations, dict):
        return ["missing operations"]
    for operation in REQUIRED_OPERATIONS:
        metric = operations.get(operation)
        if not isinstance(metric, dict):
            errors.append(f"missing operation: {operation}")
            metric = {}
        for name in REQUIRED_OPERATION_METRICS:
            if name not in metric:
                errors.append(f"{operation} missing metric: {name}")
    return errors


def inline_shell(html: str) -> str:
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    return html.replace('<script src="/static/studio.js"></script>', f"<script>{bootstrap()}</script><script>{bundle}</script>")


def install_profile(page) -> None:
    page.evaluate(
        """
        () => {
          window.__zyloraProfile = {
            frames: [], longTasks: [], eventTimings: [], layoutReads: 0,
            layoutReadMs: 0, active: true, previousFrame: 0
          };
          const profile = window.__zyloraProfile;
          if (window.PerformanceObserver) {
            try {
              new PerformanceObserver(list => profile.longTasks.push(
                ...list.getEntries().map(entry => ({
                  duration: entry.duration,
                  start: entry.startTime,
                  name: entry.name
                }))
              )).observe({entryTypes: ['longtask']});
            } catch (_) {}
            try {
              new PerformanceObserver(list => profile.eventTimings.push(
                ...list.getEntries().filter(entry => entry.name === 'pointermove').map(entry => ({
                  duration: entry.duration,
                  inputDelay: entry.processingStart - entry.startTime,
                  processing: entry.processingEnd - entry.processingStart,
                  presentation: entry.duration - (entry.processingEnd - entry.startTime)
                }))
              )).observe({type: 'event', buffered: true, durationThreshold: 8});
            } catch (_) {}
          }
          const originalRect = Element.prototype.getBoundingClientRect;
          Element.prototype.getBoundingClientRect = function () {
            const start = performance.now();
            const value = originalRect.call(this);
            profile.layoutReads += 1;
            profile.layoutReadMs += performance.now() - start;
            return value;
          };
          const frame = time => {
            if (!profile.active) return;
            if (profile.previousFrame) profile.frames.push(time - profile.previousFrame);
            profile.previousFrame = time;
            requestAnimationFrame(frame);
          };
          requestAnimationFrame(frame);
        }
        """
    )


def read_profile(page) -> dict:
    return page.evaluate(
        """
        () => {
          const profile = window.__zyloraProfile || {frames: [], longTasks: [], eventTimings: [], layoutReads: 0, layoutReadMs: 0};
          const frames = profile.frames.filter(value => value > 0).sort((a, b) => a - b);
          const percentile = (values, ratio) => values.length ? values[Math.min(values.length - 1, Math.floor(values.length * ratio))] : 0;
          const eventTimings = profile.eventTimings;
          const longTasks = profile.longTasks.map(item => item.duration).sort((a, b) => a - b);
          return {
            frames: frames.length,
            median_frame_ms: percentile(frames, .5),
            p95_frame_ms: percentile(frames, .95),
            max_frame_ms: frames.length ? frames[frames.length - 1] : 0,
            long_task_count: longTasks.length,
            max_long_task_ms: longTasks.length ? longTasks[longTasks.length - 1] : 0,
            p95_long_task_ms: percentile(longTasks, .95),
            input_event_count: eventTimings.length,
            p95_input_duration_ms: percentile(eventTimings.map(item => item.duration).sort((a, b) => a - b), .95),
            p95_input_delay_ms: percentile(eventTimings.map(item => item.inputDelay).sort((a, b) => a - b), .95),
            layout_reads: profile.layoutReads,
            layout_read_ms: profile.layoutReadMs,
            long_tasks: profile.longTasks
          };
        }
        """
    )


def reset_profile(page) -> None:
    page.evaluate(
        """
        () => {
          const profile = window.__zyloraProfile;
          if (!profile) return;
          profile.frames = [];
          profile.longTasks = [];
          profile.eventTimings = [];
          profile.layoutReads = 0;
          profile.layoutReadMs = 0;
          profile.active = true;
          profile.previousFrame = 0;
        }
        """
    )


def profile_operation(page, name: str, action, settle_ms: int = 180) -> dict:
    reset_profile(page)
    started = time.perf_counter()
    action()
    wall_ms = (time.perf_counter() - started) * 1000
    page.wait_for_timeout(settle_ms)
    metric = read_profile(page)
    metric.update({"operation": name, "wall_ms": round(wall_ms, 2)})
    return metric


def drag_node(page, target) -> None:
    box = target.bounding_box()
    if not box:
        raise RuntimeError("drag target has no bounding box")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    page.mouse.move(x, y)
    page.mouse.down()
    for index in range(1, 25):
        page.mouse.move(x + index * 0.75, y + index * 0.5)
    page.mouse.up()


def resize_node(page, target) -> None:
    handle = target.locator('.studio-resize-handle[data-handle="bottom-right"]')
    if target.get_attribute("data-studio-selected") != "true":
        target.evaluate("element => element.click()")
        handle.wait_for(state="visible", timeout=5000)
    box = handle.bounding_box()
    if not box:
        raise RuntimeError("resize handle is not visible")
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    page.mouse.move(x, y)
    page.mouse.down()
    for index in range(1, 25):
        page.mouse.move(x + index * 0.75, y + index * 0.5)
    page.mouse.up()


def install_serialization_probe(page) -> None:
    page.evaluate(
        """
        () => {
          if (window.__zyloraSerializationProbe) return;
          const original = JSON.stringify;
          const timings = [];
          JSON.stringify = function (...args) {
            if (!window.__captureZyloraSerialization) return original.apply(this, args);
            const started = performance.now();
            try { return original.apply(this, args); }
            finally { timings.push(performance.now() - started); }
          };
          window.__zyloraSerializationProbe = timings;
        }
        """
    )


def make_document(client, headers) -> str:
    created = client.post(
        "/api/sites",
        headers=headers,
        json={"business_name": "Studio 500-node profile", "description": "Performance profile", "origin": "AI"},
    )
    created.raise_for_status()
    site_id = created.json()["id"]
    shell = client.get(f"/studio/{site_id}")
    shell.raise_for_status()
    return inline_shell(shell.text)


def build_stress_document(site_id: str, count: int) -> dict:
    from app.studio_document import create_empty_document

    document = create_empty_document().model_dump(exclude_none=True)
    document["id"] = site_id
    page = document["pages"]["home"]
    section = page["nodes"]["section_1"]
    for index in range(count):
        node_id = f"profile_rect_{index:04d}"
        column = index % 10
        row = index // 10
        left = 24 + column * 142
        top = 24 + row * 96
        page["nodes"][node_id] = {
            "id": node_id,
            "type": "container",
            "parentId": "section_1",
            "children": [],
            "content": {},
            "style": {
                "css": {
                    "position": "absolute",
                    "left": f"{left}px",
                    "top": f"{top}px",
                    "width": "120px",
                    "height": "72px",
                    "background": f"hsl({index % 360} 65% 60%)",
                },
                "tokens": {},
            },
            "layout": {},
            "responsiveOverrides": {},
            "interactions": [],
            "visibility": "visible",
            "accessibility": {},
            "bindings": {},
            "metadata": {"displayName": "Profile rectangle", "kind": "shape"},
            "geometry": {
                "x": left,
                "y": top,
                "width": 120,
                "height": 72,
                "rotation": 0,
                "mode": "freeform",
            },
        }
        section["children"].append(node_id)
    return document


def run(count: int) -> dict:
    global bootstrap, bridge, auth, reset_db
    os.environ["APP_ENV"] = "test"
    os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / f'profile-{count}.sqlite').as_posix()}"
    os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
    from scripts.editor_media_e2e import bootstrap, bridge
    from tests.test_ai_first_rebuild import auth, reset_db

    reset_db()
    client, headers = auth()
    created = client.post("/api/sites/blank", headers=headers, json={"name": f"Studio {count}-node profile"})
    created.raise_for_status()
    site_id = created.json()["id"]
    started = time.perf_counter()
    response = client.post(f"/api/sites/{site_id}/studio-save", headers=headers, json=build_stress_document(site_id, count))
    response.raise_for_status()
    fixture_ms = (time.perf_counter() - started) * 1000
    shell_response = client.get(f"/studio/{site_id}")
    shell_response.raise_for_status()
    shell = inline_shell(shell_response.text)
    errors: list[str] = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=["--no-sandbox"])
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.on("console", lambda msg: errors.append(f"console:{msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda exc: errors.append(f"page:{exc}"))
        page.expose_function("__backendFetch", bridge(client))
        page.set_content(shell, wait_until="load")
        page.wait_for_selector('.studio-canvas [data-studio-id]', timeout=15000)
        page.get_by_role("button", name="Elements").click()
        add = page.get_by_role("button", name="Add Rectangle", exact=True)
        started = time.perf_counter()
        for _ in range(count):
            add.click()
        insertion_ms = (time.perf_counter() - started) * 1000
        page.wait_for_timeout(300)
        page.wait_for_function("document.querySelector('.save-status-control')?.title==='Saved'", timeout=30000)
        nodes = page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])')
        rendered = nodes.count()
        # Add Rectangle is a container node with a shape kind. Target the
        # final inserted rectangle rather than a full-page layout container.
        # Use the first inserted primitive so the fixed page navigator cannot
        # intercept the pointer sequence for targets near the canvas bottom.
        target = page.locator('.studio-canvas [data-studio-type="container"]:not(:has([data-studio-id]))').first
        target.evaluate("element => element.click()")
        target.locator('.studio-resize-handle[data-handle="bottom-right"]').wait_for(state="visible", timeout=5000)
        target_id = target.get_attribute("data-studio-id")
        if not target_id:
            raise RuntimeError("benchmark target has no Studio id")
        target = page.locator(f'.studio-canvas [data-studio-id="{target_id}"]')
        page.wait_for_timeout(50)
        install_profile(page)
        install_serialization_probe(page)

        operations = {
            "selection": profile_operation(page, "selection", lambda: target.evaluate("element => element.click()")),
            "drag": profile_operation(page, "drag", lambda: drag_node(page, target)),
            "resize": profile_operation(page, "resize", lambda: resize_node(page, target)),
            "zoom": profile_operation(
                page,
                "zoom",
                lambda: page.locator(".canvas-workspace").dispatch_event(
                    "wheel", {"deltaY": -100, "deltaX": 0, "ctrlKey": True, "clientX": 720, "clientY": 450}
                ),
            ),
            "breakpoint": profile_operation(page, "breakpoint", lambda: page.get_by_role("button", name="Resize").click()),
            "undo": profile_operation(page, "undo", lambda: page.get_by_label("Undo").click()),
        }

        def save_action() -> None:
            page.evaluate(
                """
                () => {
                  window.__captureZyloraSerialization = true;
                  if (window.__zyloraSerializationProbe) window.__zyloraSerializationProbe.length = 0;
                }
                """
            )
            page.locator(".save-status-control").click()
            page.wait_for_function("document.querySelector('.save-status-control')?.title==='Saved'", timeout=30000)

        operations["save"] = profile_operation(page, "save", save_action, settle_ms=120)
        serialization = page.evaluate(
            """
            () => {
              window.__captureZyloraSerialization = false;
              const values = window.__zyloraSerializationProbe || [];
              return {
                count: values.length,
                total_ms: values.reduce((sum, value) => sum + value, 0),
                max_ms: values.length ? Math.max(...values) : 0,
              };
            }
            """
        )
        operations["save"]["serialization"] = serialization
        page.evaluate("if(window.__zyloraProfile) window.__zyloraProfile.active=false")
        dom_elements = page.locator("*").count()
        browser.close()
        result = {
            "requested_nodes": count,
            "rendered_nodes": rendered,
            "dom_elements": dom_elements,
            "fixture_build_ms": round(fixture_ms, 2),
            "sequential_insertion_ms": None,
            "operations": operations,
            "browser_errors": errors,
        }
        result["validation_errors"] = validate_profile_result(result)
        return result


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Profile the real Studio bundle with 500 nodes.")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    results = [run(count) for count in (50, 100, 250, 500)]
    rendered = json.dumps(results, indent=2)
    print(rendered)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(rendered + "\n", encoding="utf-8")
    if any(item.get("validation_errors") for item in results):
        raise SystemExit(1)
