from __future__ import annotations

import hashlib
import json
import os
import sys
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "artifacts" / "repository-audit"
MB = 1024 * 1024


def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix() or "."


def classify(path: Path) -> str:
    parts = path.relative_to(ROOT).parts
    text = "/".join(parts).lower()
    first = parts[0].lower() if parts else ""
    if "node_modules" in {part.lower() for part in parts}:
        return "CACHE"
    if path.name.endswith(".tsbuildinfo") or path.name.endswith(".pyc"):
        return "GENERATED"
    if first == ".git":
        return "CACHE"
    if first in {"node_modules", ".venv", "venv", "__pycache__", ".pytest_cache", ".ruff_cache", ".mypy_cache"}:
        return "CACHE"
    if first == ".codex-tmp" or "tmp" in first or first in {"temp", "temporary"}:
        return "TEMPORARY"
    if first in {"artifacts", "screenshots", "browser-results", "test-results", "playwright-report"}:
        return "GENERATED"
    if first == "data":
        if path.suffix.lower() in {".db", ".db-shm", ".db-wal"} or "media" in parts:
            return "DEVELOPMENT_ONLY"
        if "qa" in text or "e2e" in text or "audit" in text or path.suffix.lower() in {".png", ".json"}:
            return "TEST_ONLY"
        return "RUNTIME_REQUIRED"
    if first == "template_projects":
        return "SOURCE_REQUIRED"
    if first in {"app", "migrations", "static", "studio", "templates", "run.sh", "Dockerfile"}:
        return "RUNTIME_REQUIRED"
    if first == "apps":
        return "DEVELOPMENT_ONLY"
    if first in {"tests", "scripts"}:
        return "TEST_ONLY" if first == "tests" else "DEVELOPMENT_ONLY"
    if first in {"dist", "build", ".vite", "coverage", "htmlcov"}:
        return "GENERATED"
    if path.suffix.lower() in {".zip", ".tar", ".gz", ".7z", ".bak", ".old"}:
        return "BACKUP"
    if first in {"docs", "third_party_licenses"}:
        return "SOURCE_REQUIRED"
    return "UNKNOWN"


def walk_files() -> list[tuple[Path, int]]:
    result: list[tuple[Path, int]] = []
    for base, dirs, files in os.walk(ROOT, followlinks=False):
        dirs[:] = [d for d in dirs if not (Path(base, d).is_symlink())]
        for name in files:
            path = Path(base, name)
            try:
                if path.is_symlink():
                    continue
                result.append((path, path.stat().st_size))
            except OSError:
                continue
    return result


def directory_sizes(files: list[tuple[Path, int]]) -> dict[Path, int]:
    sizes: defaultdict[Path, int] = defaultdict(int)
    for path, size in files:
        current = path.parent
        while True:
            sizes[current] += size
            if current == ROOT:
                break
            current = current.parent
    return dict(sizes)


def file_record(path: Path, size: int) -> dict:
    return {"path": rel(path), "bytes": size, "mb": round(size / MB, 3), "classification": classify(path)}


def hash_large(files: list[tuple[Path, int]], minimum: int = MB) -> list[dict]:
    by_size: defaultdict[int, list[Path]] = defaultdict(list)
    for path, size in files:
        if size >= minimum:
            by_size[size].append(path)
    groups: list[dict] = []
    for size, paths in by_size.items():
        if len(paths) < 2:
            continue
        by_hash: defaultdict[str, list[str]] = defaultdict(list)
        for path in paths:
            digest = hashlib.sha256()
            try:
                with path.open("rb") as handle:
                    for block in iter(lambda: handle.read(1024 * 1024), b""):
                        digest.update(block)
                by_hash[digest.hexdigest()].append(rel(path))
            except OSError:
                continue
        for digest, grouped_paths in by_hash.items():
            if len(grouped_paths) > 1:
                groups.append({"sha256": digest, "bytes_each": size, "paths": sorted(grouped_paths)})
    return sorted(groups, key=lambda item: (-item["bytes_each"], item["paths"]))


def known_inventory(files: list[tuple[Path, int]]) -> dict[str, list[dict]]:
    patterns = {
        "generated_build_outputs": {"dist", "build", ".vite", "static/studio.js", "static/studio.js.map"},
        "caches": {".git", "node_modules", ".pytest_cache", ".ruff_cache", ".mypy_cache", "__pycache__", ".venv", "venv"},
        "temporary_files": {".codex-tmp", ".tmp", ".temp"},
        "browser_artifacts": {"artifacts", "screenshots", "browser-results", "test-results", "playwright-report", "static/audit_screenshots"},
        "local_application_data": {"data/zylora.db", "data/media", "data/studio-rebuild"},
        "archives_backups": {".zip", ".tar", ".gz", ".7z", ".bak", ".old"},
        "source_maps": {".map"},
        "screenshots": {".png", ".jpg", ".jpeg", ".webp"},
        "recordings": {".mp4", ".webm", ".mov", ".gif"},
        "logs": {".log"},
        "python_caches": {".pyc", ".pyo"},
    }
    result: dict[str, list[dict]] = {key: [] for key in patterns}
    for path, size in files:
        p = rel(path).lower()
        suffix = path.suffix.lower()
        for bucket, needles in patterns.items():
            if any((needle.startswith(".") and suffix == needle) or needle in p or p == needle for needle in needles):
                result[bucket].append(file_record(path, size))
    return result


def build_report(data: dict) -> str:
    lines = [
        "# Zylora Repository Size Audit",
        "",
        f"Generated: {data['generated_at']}",
        f"Root: `{data['root']}`",
        "",
        "## Totals",
        "",
        f"- Entire repository including `.git`: **{data['totals']['all_bytes']:,} bytes ({data['totals']['all_mb']:.3f} MiB)**",
        f"- Working tree excluding `.git`: **{data['totals']['source_tree_bytes']:,} bytes ({data['totals']['source_tree_mb']:.3f} MiB)**",
        f"- Files: **{data['totals']['file_count']:,}**",
        f"- Files at least 1 MiB: **{data['thresholds']['1MiB']['count']}**",
        f"- Files at least 5 MiB: **{data['thresholds']['5MiB']['count']}**",
        f"- Files at least 10 MiB: **{data['thresholds']['10MiB']['count']}**",
        f"- Files at least 25 MiB: **{data['thresholds']['25MiB']['count']}**",
        f"- Files at least 50 MiB: **{data['thresholds']['50MiB']['count']}**",
        f"- Files at least 100 MiB: **{data['thresholds']['100MiB']['count']}**",
        "",
        "## Directory classification",
        "",
        "Classification is conservative. `UNKNOWN` items are not deletion candidates.",
        "",
        "| Directory | Bytes | MiB | Classification |",
        "|---|---:|---:|---|",
    ]
    for item in data["top_directories"][:100]:
        lines.append(f"| `{item['path']}` | {item['bytes']:,} | {item['mb']:.3f} | `{item['classification']}` |")
    lines += ["", "## Top 100 files", "", "| File | Bytes | MiB | Classification |", "|---|---:|---:|---|"]
    for item in data["top_files"]:
        lines.append(f"| `{item['path']}` | {item['bytes']:,} | {item['mb']:.3f} | `{item['classification']}` |")
    lines += ["", "## File counts by extension", "", "| Extension | Files | Bytes |", "|---|---:|---:|"]
    for item in data["extensions"]:
        lines.append(f"| `{item['extension']}` | {item['files']:,} | {item['bytes']:,} |")
    lines += ["", "## Duplicate large files", ""]
    if data["duplicate_large_files"]:
        for group in data["duplicate_large_files"]:
            lines.append(f"- SHA-256 `{group['sha256']}` ({group['bytes_each']:,} bytes each):")
            lines.extend(f"  - `{path}`" for path in group["paths"])
    else:
        lines.append("No duplicate files at or above 1 MiB were determinable by SHA-256.")
    lines += ["", "## Known inventories", ""]
    for bucket, items in data["known_inventory"].items():
        total = sum(item["bytes"] for item in items)
        lines.append(f"- `{bucket}`: {len(items):,} files, {total:,} bytes ({total / MB:.3f} MiB)")
    lines += ["", "## Deployment context note", "", "Render image size and build output are deployment concerns separate from this filesystem audit. Measure the Docker build artifact in the deployment environment rather than inferring provider limits here.", ""]
    return "\n".join(lines)


def main() -> int:
    files = walk_files()
    dirs = directory_sizes(files)
    all_bytes = sum(size for _, size in files)
    git_bytes = sum(size for path, size in files if ".git" not in path.relative_to(ROOT).parts)
    thresholds = {}
    for label, limit in [("1MiB", 1 * MB), ("5MiB", 5 * MB), ("10MiB", 10 * MB), ("25MiB", 25 * MB), ("50MiB", 50 * MB), ("100MiB", 100 * MB)]:
        selected = sorted((file_record(path, size) for path, size in files if size >= limit), key=lambda item: -item["bytes"])
        thresholds[label] = {"count": len(selected), "bytes": sum(item["bytes"] for item in selected), "files": selected}
    ext = Counter()
    for path, size in files:
        ext[path.suffix.lower() or "[no extension]"] += size
    ext_counts = Counter(path.suffix.lower() or "[no extension]" for path, _ in files)
    extensions = [{"extension": key, "files": ext_counts[key], "bytes": value} for key, value in ext.most_common()]
    top_files = sorted((file_record(path, size) for path, size in files), key=lambda item: -item["bytes"])[:100]
    top_dirs = []
    for path, size in sorted(dirs.items(), key=lambda item: -item[1]):
        if path == ROOT:
            continue
        top_dirs.append({"path": rel(path), "bytes": size, "mb": round(size / MB, 3), "classification": classify(path)})
    data = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "root": str(ROOT),
        "totals": {"all_bytes": all_bytes, "all_mb": all_bytes / MB, "source_tree_bytes": git_bytes, "source_tree_mb": git_bytes / MB, "file_count": len(files)},
        "thresholds": thresholds,
        "top_files": top_files,
        "top_directories": top_dirs[:100],
        "extensions": extensions,
        "duplicate_large_files": hash_large(files),
        "known_inventory": known_inventory(files),
    }
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "size-audit.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
    (OUT_DIR / "size-audit.md").write_text(build_report(data), encoding="utf-8")
    print(json.dumps({"totals": data["totals"], "thresholds": {key: value["count"] for key, value in thresholds.items()}, "top_files": top_files[:10], "top_directories": top_dirs[:20]}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
