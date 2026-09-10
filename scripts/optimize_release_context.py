from __future__ import annotations

import argparse
import json
import tempfile
from pathlib import Path

from PIL import Image


def optimize(root: Path) -> dict[str, object]:
    changed: list[dict[str, object]] = []
    for path in root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in {".jpg", ".jpeg", ".png"}:
            continue
        before = path.stat().st_size
        try:
            with Image.open(path) as image:
                image.load()
                suffix = path.suffix.lower()
                image_format = "JPEG" if suffix in {".jpg", ".jpeg"} else "PNG"
                converted = image.convert("RGB") if image_format == "JPEG" and image.mode not in {"RGB", "L"} else image
                with tempfile.NamedTemporaryFile(prefix="zylora-media-", suffix=suffix, dir=path.parent, delete=False) as handle:
                    temporary = Path(handle.name)
                try:
                    if image_format == "JPEG":
                        converted.save(temporary, format=image_format, quality=84, optimize=True, progressive=True)
                    else:
                        converted.save(temporary, format=image_format, optimize=True, compress_level=9)
                    after = temporary.stat().st_size
                    if after < before:
                        temporary.replace(path)
                        changed.append({"path": path.relative_to(root).as_posix(), "before": before, "after": after})
                    else:
                        temporary.unlink(missing_ok=True)
                finally:
                    temporary.unlink(missing_ok=True)
        except (OSError, ValueError):
            continue
    before_total = sum(int(item["before"]) for item in changed)
    after_total = sum(int(item["after"]) for item in changed)
    return {"files_changed": len(changed), "bytes_before": before_total, "bytes_after": after_total, "bytes_saved": before_total - after_total, "files": changed}


def main() -> int:
    parser = argparse.ArgumentParser(description="Losslessly/quality-optimize raster assets in an ignored release_context copy.")
    parser.add_argument("root", nargs="?", type=Path, default=Path("release_context"))
    args = parser.parse_args()
    root = args.root.resolve()
    if not root.is_dir() or root.name != "release_context":
        raise SystemExit(f"Refusing non-release_context path: {root}")
    result = optimize(root)
    (root / "release-media-optimization.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
    print(json.dumps({key: value for key, value in result.items() if key != "files"}, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
