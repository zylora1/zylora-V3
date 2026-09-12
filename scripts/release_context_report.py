"""Classify and measure files that may enter a Zylora production context."""
from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path
from typing import Iterable


RUNTIME_ROOTS = {"app", "migrations", "static"}
BUILD_FILES = {"Dockerfile", ".dockerignore", "requirements-prod.txt", "run.sh"}
BUILD_ROOTS = {"studio"}
BUILD_SUFFIXES = {".json", ".lock"}
TEST_ROOTS = {"tests"}
DEVELOPMENT_PARTS = {
    ".git",
    ".codex-tmp",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    ".temp_extract",
    ".replacement-backup",
    "__pycache__",
    "artifacts",
    "browser-results",
    "coverage",
    "htmlcov",
    "node_modules",
    "release_context",
    "scratch",
    "test-results",
    "template_workbench",
}


def _normalize(relative: str | Path) -> str:
    normalized = Path(str(relative).replace("\\", "/")).as_posix()
    while normalized.startswith("./"):
        normalized = normalized[2:]
    return normalized


def classify_path(relative: str | Path, reachable_paths: Iterable[str] | None = None) -> str:
    """Return the safest deployment classification for a repository-relative path.

    Template source is conservative by default: only paths explicitly listed by
    the reachability audit are considered runtime-required.
    """

    normalized = _normalize(relative)
    parts = normalized.split("/")
    name = parts[-1]

    if any(part in DEVELOPMENT_PARTS or part.startswith("release_context-") for part in parts):
        return "DEVELOPMENT_ONLY"
    if name in {".env", ".coverage"} or name.endswith((".pyc", ".pyo", ".log", ".map")):
        return "DEVELOPMENT_ONLY"
    if normalized.startswith("data/media/") or (normalized.startswith("data/") and name.endswith((".db", ".sqlite", ".sqlite3"))):
        return "DEVELOPMENT_ONLY"
    if normalized.startswith("tests/"):
        return "TEST_ONLY"
    if normalized.startswith("template_projects/"):
        reachable = {_normalize(path) for path in (reachable_paths or ())}
        return "RUNTIME_REQUIRED" if normalized in reachable else "SOURCE_REQUIRED"
    if parts[0] in RUNTIME_ROOTS:
        return "RUNTIME_REQUIRED"
    if name in BUILD_FILES or parts[0] in BUILD_ROOTS or name in {"package.json", "package-lock.json", "vite.studio.config.mjs"}:
        return "BUILD_REQUIRED"
    if normalized.startswith("scripts/run_migrations.py"):
        return "RUNTIME_REQUIRED"
    if parts[0] == "scripts":
        return "TEST_ONLY"
    if name.endswith(tuple(BUILD_SUFFIXES)) and parts[0] in {"package", "config"}:
        return "BUILD_REQUIRED"
    return "SOURCE_REQUIRED"


def _iter_files(root: Path) -> list[Path]:
    return [path for path in root.rglob("*") if path.is_file() and not path.is_symlink()]


def summarize_tree(root: Path, reachable_paths: Iterable[str] | None = None) -> dict[str, object]:
    root = root.resolve()
    by_classification: dict[str, int] = defaultdict(int)
    by_directory: dict[str, int] = defaultdict(int)
    files: list[dict[str, object]] = []
    reachable = {_normalize(path) for path in (reachable_paths or ())}

    for path in _iter_files(root):
        relative = path.relative_to(root).as_posix()
        size = path.stat().st_size
        classification = classify_path(relative, reachable)
        by_classification[classification] += size
        by_directory[relative.split("/", 1)[0]] += size
        files.append({"path": relative, "bytes": size, "classification": classification})

    files.sort(key=lambda item: int(item["bytes"]), reverse=True)
    return {
        "root": str(root),
        "file_count": len(files),
        "total_bytes": sum(int(item["bytes"]) for item in files),
        "by_classification": dict(sorted(by_classification.items())),
        "top_directories": [
            {"path": path, "bytes": size}
            for path, size in sorted(by_directory.items(), key=lambda item: item[1], reverse=True)[:25]
        ],
        "top_files": files[:50],
        "reachable_path_count": len(reachable),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Measure and classify a Zylora deployment context.")
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--reachability", type=Path)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()

    reachable: set[str] = set()
    if args.reachability:
        payload = json.loads(args.reachability.read_text(encoding="utf-8"))
        for project in payload.get("projects", []):
            slug = project["slug"]
            for relative in [*project.get("render_files", []), *project.get("required_assets", [])]:
                reachable.add(f"template_projects/{slug}/{relative}")
            for relative in ("metadata.json", "assets-manifest.json", "verification/render-gate.json", "app/globals.css"):
                reachable.add(f"template_projects/{slug}/{relative}")

    report = summarize_tree(args.root, reachable)
    encoded = json.dumps(report, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
    print(encoded, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
