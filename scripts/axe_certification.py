"""Run a small, real axe-core accessibility pass over representative Zylora surfaces."""

from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright

from app.main import app
from scripts.browser_e2e import browser_bootstrap, inline_document, new_page, patch_dashboard, patch_editor
from scripts.capture_baseline import seed_baseline_data


def run() -> int:
    # seed_baseline_data returns user session/csrf, admin session/csrf, then site id.
    # Keep the site identifier separate from the admin token so the public preview
    # check exercises the real seeded site instead of a malformed URL.
    user_session, user_csrf, admin_session, admin_csrf, site_id = seed_baseline_data()
    axe_path = ROOT / "node_modules" / "axe-core" / "axe.min.js"
    if not axe_path.exists():
        raise SystemExit("axe-core is not installed; run npm install --no-save --ignore-scripts axe-core")

    surfaces: list[tuple[str, str, str, str, str]] = [
        ("landing", "index.html", "public-redesign.css", "landing.js", browser_bootstrap()),
        ("login", "login.html", "auth.css", "auth.js", browser_bootstrap()),
        ("signup", "signup.html", "auth.css", "auth.js", browser_bootstrap()),
        ("dashboard", "dashboard.html", "dashboard.css", "dashboard.js", f'window.__CSRF="{user_csrf}";\n' + browser_bootstrap()),
        ("super_admin", "super-admin.html", "dashboard.css", "super-admin.js", f'window.__CSRF="{admin_csrf}";\n' + browser_bootstrap()),
        ("legacy_studio_shell", "editor.html", "editor.css", "editor.js", f'window.__CSRF="{user_csrf}";\n' + browser_bootstrap()),
    ]
    results: list[dict] = []
    errors: list[str] = []
    with TestClient(app, cookies={"zylora_session": user_session}) as client, sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        for label, html_name, css_name, js_name, bootstrap in surfaces:
            script = bootstrap
            patch = None
            if label == "dashboard":
                patch = patch_dashboard
            elif label == "legacy_studio_shell":
                patch = lambda source: patch_editor(source, site_id)
            html = inline_document(html_name, css_name, js_name, script, patch=patch)
            page = new_page(browser, client, (1440, 1000))
            page.on("pageerror", lambda exc, name=label: errors.append(f"{name}: {exc}"))
            page.set_content(html, wait_until="load")
            page.add_script_tag(path=str(axe_path))
            page.wait_for_timeout(300)
            result = page.evaluate("""async () => {
                const result = await axe.run(document, { resultTypes: ['violations'] });
                return result.violations.map(v => ({
                    id: v.id,
                    impact: v.impact,
                    help: v.help,
                    nodes: v.nodes.length,
                    targets: v.nodes.slice(0, 8).map(n => n.target),
                    html: v.nodes.slice(0, 3).map(n => n.html),
                    checks: v.nodes.slice(0, 3).map(n => ({any: n.any, all: n.all, none: n.none}))
                }));
            }""")
            results.append({"surface": label, "violations": result})
            page.close()

        preview = client.get(f"/preview/{site_id}")
        if preview.status_code == 200:
            page = new_page(browser, client, (1440, 1000))
            page.set_content(preview.text, wait_until="load")
            page.add_script_tag(path=str(axe_path))
            page.wait_for_timeout(300)
            result = page.evaluate("""async () => {
                const result = await axe.run(document, { resultTypes: ['violations'] });
                return result.violations.map(v => ({
                    id: v.id,
                    impact: v.impact,
                    help: v.help,
                    nodes: v.nodes.length,
                    targets: v.nodes.slice(0, 8).map(n => n.target),
                    html: v.nodes.slice(0, 3).map(n => n.html),
                    checks: v.nodes.slice(0, 3).map(n => ({any: n.any, all: n.all, none: n.none}))
                }));
            }""")
            results.append({"surface": "published_preview", "violations": result})
            page.close()
        else:
            errors.append(f"published_preview status={preview.status_code}")
        browser.close()

    counts = {impact: 0 for impact in ("critical", "serious", "moderate", "minor")}
    for surface in results:
        for violation in surface["violations"]:
            if violation["impact"] in counts:
                counts[violation["impact"]] += int(violation["nodes"])
    artifact = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "tool": "axe-core",
        "axe_version": json.loads((ROOT / "node_modules" / "axe-core" / "package.json").read_text())["version"],
        "surfaces": results,
        "counts": counts,
        "browser_errors": errors,
        "status": "PASS" if not errors and counts["critical"] == 0 and counts["serious"] == 0 else "FAIL",
    }
    destination = ROOT / "artifacts" / "final-production-certification" / "accessibility-axe-certification.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(artifact, indent=2), encoding="utf-8")
    print(json.dumps(artifact, indent=2))
    return 0 if artifact["status"] == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(run())
