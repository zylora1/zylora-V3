from __future__ import annotations

import argparse
import asyncio
import json
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
import sys
sys.path.insert(0, str(ROOT))

from app.templates import render_template_page

VIEWPORTS = [(1440, 1000), (1280, 900), (1024, 820), (768, 900), (430, 900), (390, 850), (375, 820), (360, 800)]


def batch_projects(batch: int):
    rows = []
    for meta_path in sorted((ROOT / "template_projects").glob("*/metadata.json")):
        meta = json.loads(meta_path.read_text(encoding="utf-8"))
        if meta.get("hidden") or int(meta.get("batch") or 0) != batch:
            continue
        routes = ["home", *list(meta.get("page_slugs") or [])]
        rows.append((int(meta.get("reference") or 0), meta_path.parent.name, routes))
    return sorted(rows)


async def main(batch: int, out_json: Path) -> int:
    projects = batch_projects(batch)
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, executable_path="/usr/bin/chromium", args=["--no-sandbox"])
        page = await browser.new_page()
        for ref, slug, routes in projects:
            for route in routes:
                html = render_template_page(slug, {}, route)
                for width, height in VIEWPORTS:
                    await page.set_viewport_size({"width": width, "height": height})
                    await page.set_content(html, wait_until="load")
                    await page.wait_for_timeout(30)
                    metrics = await page.evaluate("""() => ({
                        scrollWidth: document.documentElement.scrollWidth,
                        clientWidth: document.documentElement.clientWidth,
                        h1: document.querySelectorAll('h1').length,
                        imgs: document.querySelectorAll('img').length,
                        missingAlt: [...document.querySelectorAll('img')].filter(i => !i.hasAttribute('alt')).length,
                        duplicateIds: (() => { const ids=[...document.querySelectorAll('[id]')].map(x=>x.id); return ids.length-new Set(ids).size; })()
                    })""")
                    results.append({
                        "reference": ref,
                        "slug": slug,
                        "route": route,
                        "width": width,
                        "height": height,
                        "scroll_width": metrics["scrollWidth"],
                        "client_width": metrics["clientWidth"],
                        "overflow": metrics["scrollWidth"] > metrics["clientWidth"],
                        "h1_count": metrics["h1"],
                        "image_count": metrics["imgs"],
                        "missing_alt": metrics["missingAlt"],
                        "duplicate_ids": metrics["duplicateIds"],
                    })
        await browser.close()
    failures = [r for r in results if r["overflow"] or r["h1_count"] != 1 or r["missing_alt"] or r["duplicate_ids"]]
    payload = {
        "batch": batch,
        "projects": len(projects),
        "routes": sum(len(x[2]) for x in projects),
        "viewports": [w for w, _ in VIEWPORTS],
        "checks": len(results),
        "failures": failures,
        "results": results,
    }
    out_json.parent.mkdir(parents=True, exist_ok=True)
    out_json.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"reference_batch_responsive_qa: batch={batch} projects={payload['projects']} routes={payload['routes']} checks={payload['checks']} failures={len(failures)}")
    return 1 if failures else 0


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--batch", type=int, default=1)
    ap.add_argument("--out", default=str(ROOT / "data" / "reference-batch-responsive-qa.json"))
    args = ap.parse_args()
    raise SystemExit(asyncio.run(main(args.batch, Path(args.out))))
