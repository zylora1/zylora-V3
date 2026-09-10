from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import subprocess
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MB = 1024 * 1024


def copy_file(source: Path, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source, target)


def copy_filtered(source: Path, target: Path) -> None:
    for path in source.rglob("*"):
        relative = path.relative_to(source)
        if any(part in {"__pycache__", ".pytest_cache", ".ruff_cache", ".mypy_cache", "node_modules", ".vite"} for part in relative.parts):
            continue
        if path.is_dir():
            continue
        if path.name.endswith(".dark-bak") or path.suffix.lower() in {".map", ".pyc", ".pyo", ".tsbuildinfo"}:
            continue
        if "audit_screenshots" in relative.parts:
            continue
        copy_file(path, target / relative)


def build_templates(source_root: Path, target_root: Path, reachability: dict) -> dict:
    rows = []
    for row in reachability["projects"]:
        slug = row["slug"]
        source = source_root / slug
        target = target_root / slug
        for relative in ("metadata.json", "assets-manifest.json", "verification/render-gate.json", "app/globals.css"):
            path = source / relative
            if path.is_file():
                copy_file(path, target / relative)
        for relative in row["render_files"]:
            copy_file(source / relative, target / relative)
        copied_assets = []
        for relative in row["required_assets"]:
            path = source / relative
            if not path.is_file():
                raise RuntimeError(f"Reachability audit selected a missing asset: {source / relative}")
            copy_file(path, target / relative)
            copied_assets.append(relative)
        rows.append({"slug": slug, "files": len(copied_assets) + len(row["render_files"]) + 4, "asset_files": len(copied_assets), "asset_bytes": row["referenced_asset_bytes"]})
    return {"template_count": len(rows), "templates": rows}


def sha256_tree(root: Path) -> str:
    digest = hashlib.sha256()
    for path in sorted(path for path in root.rglob("*") if path.is_file()):
        relative = path.relative_to(root).as_posix().encode("utf-8")
        digest.update(relative)
        digest.update(str(path.stat().st_size).encode("ascii"))
        with path.open("rb") as handle:
            for block in iter(lambda: handle.read(1024 * 1024), b""):
                digest.update(block)
    return digest.hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser(description="Build a compact Zylora Railway production context.")
    parser.add_argument("--output", type=Path, default=ROOT / "release_context")
    args = parser.parse_args()
    output = args.output.resolve()
    if output.exists():
        raise SystemExit(f"Refusing to overwrite existing release context: {output}")
    reachability_path = ROOT / "artifacts" / "repository-audit" / "template-reachability.json"
    if not reachability_path.is_file():
        raise SystemExit("Run scripts/template_reachability_audit.py before building the release context.")
    reachability = json.loads(reachability_path.read_text(encoding="utf-8"))
    unresolved = [(row["slug"], ref) for row in reachability["projects"] for ref in row["unresolved_references"]]
    if unresolved:
        raise SystemExit(f"Unresolved template references remain: {unresolved}")

    output.mkdir(parents=True)
    for relative in ("requirements-prod.txt", "Dockerfile", "run.sh", ".dockerignore"):
        copy_file(ROOT / relative, output / relative)
    copy_file(ROOT / "app" / "__init__.py", output / "app" / "__init__.py") if (ROOT / "app" / "__init__.py").is_file() else None
    copy_filtered(ROOT / "app", output / "app")
    copy_filtered(ROOT / "migrations", output / "migrations")
    copy_filtered(ROOT / "static", output / "static")
    copy_file(ROOT / "scripts" / "run_migrations.py", output / "scripts" / "run_migrations.py")
    template_data = build_templates(ROOT / "template_projects", output / "template_projects", reachability)
    (output / "data").mkdir(exist_ok=True)

    try:
        commit = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip()
        dirty = bool(subprocess.check_output(["git", "status", "--porcelain"], cwd=ROOT, text=True).strip())
    except (OSError, subprocess.CalledProcessError):
        commit, dirty = "unknown", True
    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source_commit": commit,
        "source_worktree_dirty": dirty,
        "template_source_path": "development-only/template_projects",
        "template_runtime_path": "template_projects",
        "template_strategy": "compact-runtime-from-reachable-render-assets",
        "reachability_sha256": hashlib.sha256(reachability_path.read_bytes()).hexdigest(),
        "template_data": template_data,
        "context_sha256": sha256_tree(output),
    }
    (output / "release-manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    files = [path for path in output.rglob("*") if path.is_file()]
    total = sum(path.stat().st_size for path in files)
    summary = {"output": str(output), "files": len(files), "bytes": total, "mib": round(total / MB, 3), "manifest": manifest}
    (output / "release-size.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(json.dumps(summary, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
