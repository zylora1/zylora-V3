from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_ROOT = ROOT / "template_projects"
OUT_DIR = ROOT / "artifacts" / "repository-audit"
MB = 1024 * 1024


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def refs_from(text: str) -> set[str]:
    refs: set[str] = set()
    attribute_pattern = r"(?:src|srcset|href|poster|data-src)=[\"']([^\"']*assets/[^\"']+)[\"']"
    for match in re.finditer(attribute_pattern, text, re.I):
        for raw in match.group(1).split(","):
            value = re.sub(r"\s+\d+[wx]\s*$", "", raw.strip())
            value = value[value.lower().find("assets/") + len("assets/") :]
            if value and not value.startswith("http") and not value.startswith("data:"):
                refs.add(value.replace("\\", "/").lstrip("/"))
    css_pattern = r"url\(\s*[\"']?(?:\.\./|\./|/)?assets/([^\"')?#]+)[\"']?\s*\)"
    for match in re.finditer(css_pattern, text, re.I):
        value = match.group(1).replace("\\", "/").lstrip("/")
        if value and not value.startswith("http") and not value.startswith("data:"):
            refs.add(value)
    return refs


def project_audit(project: Path) -> dict:
    render_files = sorted((project / "render").glob("*.html"))
    css = project / "app" / "globals.css"
    source_text = "\n".join(path.read_text(encoding="utf-8", errors="ignore") for path in render_files)
    if css.is_file():
        source_text += "\n" + css.read_text(encoding="utf-8", errors="ignore")
    refs = refs_from(source_text)
    assets = sorted(path for path in (project / "assets").rglob("*") if path.is_file())
    by_rel = {path.relative_to(project / "assets").as_posix(): path for path in assets}
    by_name: defaultdict[str, list[Path]] = defaultdict(list)
    for path in assets:
        by_name[path.name].append(path)
    required: set[Path] = set()
    unresolved: list[str] = []
    ambiguous: dict[str, list[str]] = {}
    for ref in sorted(refs):
        exact = by_rel.get(ref)
        if exact:
            required.add(exact)
            continue
        matches = by_name.get(Path(ref).name, [])
        if len(matches) == 1:
            required.add(matches[0])
        elif len(matches) > 1:
            # The renderer also falls back to the first matching basename. Keep
            # every candidate so the compact runtime remains deterministic.
            required.update(matches)
            ambiguous[ref] = [path.relative_to(project / "assets").as_posix() for path in matches]
        else:
            unresolved.append(ref)
    orphaned = [path for path in assets if path not in required]
    return {
        "slug": project.name,
        "files": sum(path.is_file() for path in project.rglob("*")),
        "bytes": sum(path.stat().st_size for path in project.rglob("*") if path.is_file()),
        "render_files": [path.relative_to(project).as_posix() for path in render_files],
        "render_bytes": sum(path.stat().st_size for path in render_files),
        "css_bytes": css.stat().st_size if css.is_file() else 0,
        "asset_files": len(assets),
        "asset_bytes": sum(path.stat().st_size for path in assets),
        "referenced_asset_files": len(required),
        "referenced_asset_bytes": sum(path.stat().st_size for path in required),
        "orphan_asset_files": len(orphaned),
        "orphan_asset_bytes": sum(path.stat().st_size for path in orphaned),
        "unresolved_references": unresolved,
        "ambiguous_references": ambiguous,
        "required_assets": sorted(path.relative_to(project).as_posix() for path in required),
        "orphan_assets": sorted(path.relative_to(project).as_posix() for path in orphaned),
    }


def main() -> int:
    projects = [path for path in sorted(TEMPLATE_ROOT.iterdir()) if path.is_dir() and (path / "metadata.json").is_file()]
    rows = [project_audit(project) for project in projects]
    data = {
        "root": str(TEMPLATE_ROOT),
        "template_count": len(rows),
        "totals": {
            "bytes": sum(row["bytes"] for row in rows),
            "asset_bytes": sum(row["asset_bytes"] for row in rows),
            "referenced_asset_bytes": sum(row["referenced_asset_bytes"] for row in rows),
            "orphan_asset_bytes": sum(row["orphan_asset_bytes"] for row in rows),
            "files": sum(row["files"] for row in rows),
            "orphan_asset_files": sum(row["orphan_asset_files"] for row in rows),
        },
        "projects": rows,
    }
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "template-reachability.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
    lines = [
        "# Template Runtime Reachability Audit",
        "",
        f"Templates inspected: **{len(rows)}**",
        f"Source bytes: **{data['totals']['bytes']:,}** ({data['totals']['bytes'] / MB:.3f} MiB)",
        f"Asset bytes: **{data['totals']['asset_bytes']:,}** ({data['totals']['asset_bytes'] / MB:.3f} MiB)",
        f"Reachable asset bytes: **{data['totals']['referenced_asset_bytes']:,}** ({data['totals']['referenced_asset_bytes'] / MB:.3f} MiB)",
        f"Candidate orphan asset bytes: **{data['totals']['orphan_asset_bytes']:,}** ({data['totals']['orphan_asset_bytes'] / MB:.3f} MiB)",
        "",
        "The compact runtime retains each template's metadata, render pages, CSS, verification manifests, and every asset referenced by render HTML/CSS. Ambiguous basename references retain all matching candidates; unresolved references are not deleted automatically.",
        "",
        "| Template | Source MiB | Assets MiB | Reachable MiB | Candidate orphan MiB | Unresolved refs |",
        "|---|---:|---:|---:|---:|---:|",
    ]
    for row in sorted(rows, key=lambda item: -item["orphan_asset_bytes"]):
        lines.append(f"| `{row['slug']}` | {row['bytes'] / MB:.3f} | {row['asset_bytes'] / MB:.3f} | {row['referenced_asset_bytes'] / MB:.3f} | {row['orphan_asset_bytes'] / MB:.3f} | {len(row['unresolved_references'])} |")
    lines += ["", "## Dependency map", "", "- Catalogue metadata → `template_projects/<slug>/metadata.json`", "- Readiness and rights validation → `verification/render-gate.json`, `assets-manifest.json`", "- Published template body → `render/<page>.html`", "- Published template styles → `app/globals.css`", "- Hosted images/fonts/media → reachable files under `assets/`, rewritten and served by `/template-assets/<slug>/...`", "- Admin catalogue edits → `metadata.json` (existing file-backed behavior)", ""]
    (OUT_DIR / "template-reachability.md").write_text("\n".join(lines), encoding="utf-8")
    print(json.dumps({"template_count": len(rows), "totals": data["totals"], "top_orphan_candidates": sorted(rows, key=lambda item: -item["orphan_asset_bytes"])[:10]}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
