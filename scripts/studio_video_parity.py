from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps, ImageStat


ROOT = Path(__file__).resolve().parents[1]
REFERENCE = Path(r"C:\Users\joys0\AppData\Local\Temp\codex-clipboard-b443c364-97c1-411d-9002-79c6e14e7a2a.png")
IMPLEMENTATION = ROOT / "artifacts" / "studio-canva-grade-rebuild" / "reference-elements-1535.png"
OUTPUT = ROOT / "artifacts" / "studio-canva-grade-rebuild" / "video-parity"


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    reference_full = Image.open(REFERENCE).convert("RGB")
    implementation_full = Image.open(IMPLEMENTATION).convert("RGB")

    # The supplied still is already the native application viewport.
    reference = reference_full
    if implementation_full.size != reference.size:
        raise SystemExit(f"viewport mismatch: reference={reference.size}, implementation={implementation_full.size}")
    implementation = implementation_full
    reference.save(OUTPUT / "reference-app.png")
    implementation.save(OUTPUT / "implementation-app.png")
    Image.blend(reference, implementation, 0.5).save(OUTPUT / "overlay-50.png")

    ref_edges = ImageOps.grayscale(reference).filter(ImageFilter.FIND_EDGES)
    impl_edges = ImageOps.grayscale(implementation).filter(ImageFilter.FIND_EDGES)
    ref_edges.save(OUTPUT / "reference-edges.png")
    impl_edges.save(OUTPUT / "implementation-edges.png")

    difference = ImageChops.difference(reference, implementation)
    ImageEnhance.Contrast(difference).enhance(2.0).save(OUTPUT / "difference-2x.png")
    channels = ImageStat.Stat(difference).mean
    normalized_mae = sum(channels) / (3 * 255)

    landmarks = {
        "reference": {
            "topbar": [0, 0, 1535, 58],
            "rail": [0, 58, 70, 777],
            "drawer": [70, 58, 432, 777],
            "canvas": [605, 123, 1392, 567],
            "add_section": [605, 591, 1392, 630],
        },
        "implementation": {
            "topbar": [0, 0, 1535, 58],
            "rail": [0, 58, 70, 777],
            "drawer": [70, 58, 432, 777],
            "canvas": [605, 123, 1392, 567],
            "add_section": [605, 591, 1392, 630],
        },
    }
    payload = {
        "comparison_size": list(reference.size),
        "normalized_mean_absolute_pixel_difference": round(normalized_mae, 6),
        "note": "Whole-frame difference includes different project data and locally implemented, non-proprietary icons; measured shell landmarks are compared exactly.",
        "landmarks": landmarks,
    }
    (OUTPUT / "metrics.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(json.dumps(payload, indent=2))


if __name__ == "__main__":
    main()
