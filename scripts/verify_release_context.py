from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote


def main() -> int:
    context = Path(sys.argv[1] if len(sys.argv) > 1 else "release_context").resolve()
    sys.path.insert(0, str(context))
    from app.templates import TEMPLATES, render_template_page

    missing: list[str] = []
    pages = 0
    asset_refs = 0
    for template in TEMPLATES:
        for page in ["home", *list(template.get("page_slugs") or [])]:
            html = render_template_page(template["slug"], {"business_name": "Smoke", "tagline": "Smoke", "description": "Smoke"}, page)
            pages += 1
            refs: list[tuple[str, str]] = []
            for match in re.finditer(r"(?:src|srcset|href|poster|data-src)=[\"']([^\"']*?)[\"']", html, re.I):
                for part in match.group(1).split(","):
                    part = re.sub(r"\s+\d+[wx]\s*$", "", part.strip())
                    found = re.search(r"/template-assets/([^/]+)/(.+)$", part)
                    if found:
                        refs.append((found.group(1), found.group(2)))
            for match in re.finditer(r"url\(\s*[\"']?(/template-assets/([^/]+)/[^\"')?#]+)", html, re.I):
                refs.append((match.group(2), match.group(1).split(f"/{match.group(2)}/", 1)[1]))
            for slug, raw_asset in refs:
                asset = unquote(raw_asset.rstrip(")"))
                asset_refs += 1
                if not (context / "template_projects" / slug / "assets" / asset).is_file():
                    missing.append(f"{slug}/{asset}")
    print({"templates": len(TEMPLATES), "rendered_pages": pages, "asset_references": asset_refs, "missing_assets": missing[:20], "missing_count": len(missing)})
    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())
