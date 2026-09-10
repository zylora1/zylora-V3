from __future__ import annotations

import argparse
import hashlib
import json
import tempfile
from pathlib import Path

from PIL import Image

METADATA_FILES = {"release-manifest.json", "release-size.json", "release-media-optimization.json"}


def context_hash(root: Path) -> str:
    digest = hashlib.sha256()
    for path in sorted(path for path in root.rglob("*") if path.is_file() and path.name not in METADATA_FILES):
        digest.update(path.relative_to(root).as_posix().encode("utf-8"))
        digest.update(str(path.stat().st_size).encode("ascii"))
        with path.open("rb") as handle:
            for block in iter(lambda: handle.read(1024 * 1024), b""):
                digest.update(block)
    return digest.hexdigest()


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
    manifest_path = root / "release-manifest.json"
    if manifest_path.is_file():
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        manifest["context_sha256"] = context_hash(root)
        manifest["media_optimization"] = {key: value for key, value in result.items() if key != "files"}
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
        size_path = root / "release-size.json"
        size = json.loads(size_path.read_text(encoding="utf-8")) if size_path.is_file() else {}
        files = [path for path in root.rglob("*") if path.is_file()]
        total = sum(path.stat().st_size for path in files)
        size.update({"files": len(files), "bytes": total, "mib": round(total / (1024 * 1024), 3), "manifest": manifest})
        size_path.write_text(json.dumps(size, indent=2), encoding="utf-8")
    print(json.dumps({key: value for key, value in result.items() if key != "files"}, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
