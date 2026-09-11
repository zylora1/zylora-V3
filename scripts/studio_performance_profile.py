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
os.environ["APP_ENV"] = "test"
os.environ["DATABASE_URL"] = f"sqlite:///{(TMP / 'profile.sqlite').as_posix()}"
os.environ["MEDIA_STORAGE_DIR"] = str(TMP / "media")
sys.path.insert(0, str(ROOT))

from scripts.editor_media_e2e import bootstrap, bridge
from tests.test_ai_first_rebuild import auth, reset_db


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


def run() -> dict:
    reset_db()
    client, headers = auth()
    shell = make_document(client, headers)
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
        for _ in range(500):
            add.click()
        insertion_ms = (time.perf_counter() - started) * 1000
        page.wait_for_timeout(300)
        page.wait_for_function("document.querySelector('.save-status-control')?.title==='Saved'", timeout=30000)
        nodes = page.locator('.studio-canvas [data-studio-id]:not([data-studio-type="page"])')
        rendered = nodes.count()
        # Add Rectangle is a container node with a shape kind. Target the
        # final inserted rectangle rather than a full-page layout container.
        target = page.locator('.studio-canvas [data-studio-type="container"]').last
        install_profile(page)
        target.evaluate("element => element.click()")
        page.wait_for_timeout(50)
        install_serialization_probe(page)
        samples: list[dict] = []
        for _ in range(5):
            handle = target.locator('.studio-resize-handle[data-handle="bottom-right"]').bounding_box()
            if not handle:
                raise RuntimeError("resize handle is not visible")
            x = handle["x"] + handle["width"] / 2
            y = handle["y"] + handle["height"] / 2
            page.evaluate(
                """() => {
                  const p=window.__zyloraProfile;
                  p.frames=[]; p.longTasks=[]; p.eventTimings=[]; p.layoutReads=0;
                  p.layoutReadMs=0; p.active=true; p.previousFrame=0;
                }"""
            )
            page.evaluate("if(window.__zyloraSerializationProbe) window.__zyloraSerializationProbe.length=0")
            started = time.perf_counter()
            page.dispatch_event('.studio-resize-handle[data-handle="bottom-right"]', 'pointerdown', {"clientX": x, "clientY": y, "pointerId": 811, "button": 0, "pointerType": "mouse"})
            for i in range(1, 25):
                page.evaluate(
                    "([x,y,i]) => document.body.dispatchEvent(new PointerEvent('pointermove', {bubbles:true, clientX:x+i*.75, clientY:y+i*.5, pointerId:811, pointerType:'mouse'}))",
                    [x, y, i],
                )
            page.evaluate(
                "([x,y]) => document.body.dispatchEvent(new PointerEvent('pointerup', {bubbles:true, clientX:x+18, clientY:y+12, pointerId:811, pointerType:'mouse'}))",
                [x, y],
            )
            interaction_ms = (time.perf_counter() - started) * 1000
            page.evaluate("window.__captureZyloraSerialization=true")
            page.wait_for_function("document.querySelector('.save-status-control')?.title==='Saved'", timeout=30000)
            serialization = page.evaluate(
                """() => { window.__captureZyloraSerialization=false; const values=window.__zyloraSerializationProbe||[]; return {count:values.length, total_ms:values.reduce((sum,value)=>sum+value,0), max_ms:values.length?Math.max(...values):0}; }"""
            )
            page.wait_for_timeout(350)
            metric = read_profile(page)
            metric.update({"interaction_ms": round(interaction_ms, 2), "serialization": serialization})
            samples.append(metric)
        page.evaluate("if(window.__zyloraProfile) window.__zyloraProfile.active=false")
        dom_elements = page.locator("*").count()
        browser.close()
        return {
            "requested_nodes": 500,
            "rendered_nodes": rendered,
            "dom_elements": dom_elements,
            "sequential_insertion_ms": round(insertion_ms, 2),
            "resize_samples": samples,
            "browser_errors": errors,
        }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Profile the real Studio bundle with 500 nodes.")
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    result = run()
    rendered = json.dumps(result, indent=2)
    print(rendered)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(rendered + "\n", encoding="utf-8")
