"""Capture the supplied TailAdmin dashboard and compute objective image diffs.

The reference and candidate are intentionally compared as rendered pixels at
the same viewport.  The report records the mismatch metrics instead of
turning a large visual difference into a subjective pass.
"""

from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path

from PIL import Image, ImageChops
from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
REPORT_DIR = ROOT / "artifacts" / "redesign_qa"
REFERENCE_DIR = REPORT_DIR / "reference"
REFERENCE_DIR.mkdir(parents=True, exist_ok=True)
REFERENCE_URL = os.environ.get("TAILADMIN_REFERENCE_URL", "http://127.0.0.1:4174/")
ARCHIVE = Path(r"C:\Users\joys0\Downloads\free-react-tailwind-admin-dashboard-main.zip")
VIEWPORTS = [
    (1440, 900, "1440px_desktop"),
    (1280, 800, "1280px_laptop"),
    (1024, 768, "1024px_tablet_landscape"),
    (768, 1024, "768px_tablet_portrait"),
    (430, 932, "430px_mobile_large"),
    (390, 844, "390px_mobile_standard"),
    (375, 812, "375px_mobile_se"),
    (360, 640, "360px_mobile_small"),
]


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def _diff(reference_path: Path, candidate_path: Path) -> dict[str, object]:
    reference = Image.open(reference_path).convert("RGB")
    candidate = Image.open(candidate_path).convert("RGB")
    if candidate.size != reference.size:
        candidate = candidate.resize(reference.size)
    diff = ImageChops.difference(reference, candidate)
    histogram = diff.histogram()
    total_channels = reference.width * reference.height * 3
    absolute_sum = sum(
        index * count
        for channel in range(3)
        for index, count in enumerate(histogram[channel * 256 : (channel + 1) * 256])
    )
    changed = diff.point(lambda value: 255 if value > 16 else 0).convert("L")
    changed_pixels = sum(1 for value in changed.getdata() if value)
    return {
        "reference_size": list(reference.size),
        "candidate_size": list(Image.open(candidate_path).size),
        "mean_absolute_channel_delta": round(absolute_sum / total_channels, 3),
        "changed_pixel_fraction_threshold_16": round(changed_pixels / (reference.width * reference.height), 4),
        "changed_pixel_count_threshold_16": changed_pixels,
        "diff_bbox": list(diff.getbbox()) if diff.getbbox() else None,
    }


def main() -> None:
    results: list[dict[str, object]] = []
    browser_errors: list[str] = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        for width, height, label in VIEWPORTS:
            reference_path = REFERENCE_DIR / f"dashboard_overview_{label}.png"
            candidate_path = REPORT_DIR / f"dashboard_overview_{label}.png"
            page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
            page.on("console", lambda message, current=label: browser_errors.append(f"[{current}] {message.text}") if message.type == "error" else None)
            page.on("pageerror", lambda error, current=label: browser_errors.append(f"[{current}] {error}"))
            page.goto(REFERENCE_URL, wait_until="networkidle")
            page.wait_for_timeout(800)
            page.screenshot(path=str(reference_path), full_page=False)
            page.close()
            results.append({"viewport": label, "width": width, "height": height, "diff": _diff(reference_path, candidate_path)})
        browser.close()

    report = {
        "date": "2026-09-15",
        "reference": {
            "archive": str(ARCHIVE),
            "sha256": _sha256(ARCHIVE) if ARCHIVE.exists() else None,
            "inspected": ARCHIVE.exists(),
            "license": "MIT",
            "runnable_reference_available": True,
            "runtime": REFERENCE_URL,
            "build": "npm.cmd ci --ignore-scripts; npm.cmd run build (passed outside the sandbox; Vite warnings recorded in command output)",
        },
        "method": {
            "candidate": "Playwright Chromium screenshots already captured by scripts/verify_dashboard_redesign.py",
            "reference": "Playwright Chromium screenshots from the built TailAdmin Vite preview",
            "perceptual_diff": "RGB absolute pixel delta; changed-pixel threshold 16",
            "overlay": "not generated",
            "bounding_box_metrics": "diff bounding box recorded per viewport",
        },
        "viewports": results,
        "browser_errors": browser_errors,
        "certification": {
            "status": "NOT_CERTIFIED",
            "mismatches": [
                "The supplied reference is a generic ecommerce dashboard and the candidate is the Zylora data-driven dashboard; the measured pixel deltas are evidence for targeted review, not proof of semantic equivalence.",
            ],
            "open_gate": "Review the recorded per-viewport deltas and align any remaining structural mismatches before claiming reference fidelity.",
        },
    }
    (REPORT_DIR / "dashboard-visual-diff-report.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report, indent=2))


if __name__ == "__main__":
    main()
