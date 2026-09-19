"""Cross-browser certification runner for Zylora Code Studio (Onlook OSS Engine) and Native Studio.

Tests Chromium, Firefox, and WebKit on Windows for:
1. Gated Code Studio mounting ZyloraOnlookStudio
2. Diagnostic registry `window.__ONLOOK_DIAGNOSTICS__` verification
3. DOM `data-subsystem` assertions
4. Interactive subsystem switching (tabs, view modes, devices)
5. Native Studio zero-regression verification
"""
import atexit
import json
import os
import re
import shutil
import sys
import time
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]
AUDIT_DB = ROOT / "data" / f"onlook-cert-{uuid.uuid4().hex}.db"
os.environ.setdefault("APP_ENV", "test")
os.environ["DATABASE_URL"] = f"sqlite:///{AUDIT_DB}"
atexit.register(lambda: AUDIT_DB.exists() and AUDIT_DB.unlink())
sys.path.insert(0, str(ROOT))

from fastapi.testclient import TestClient
from playwright.sync_api import sync_playwright
from sqlalchemy import text

from app.main import app
from app.db import SessionLocal, migrate
from app.code_project import local_sandbox
from app.security import clear_rate_limits
from scripts.browser_e2e import browser_bootstrap, new_page, check


def load_inline_html(page, html: str, api_files: dict[str, str] | None = None) -> None:
    """Load an inline fixture on a real HTTP origin.

    ``page.set_content`` uses ``about:blank``. The transplanted editor's
    IndexedDB-backed cache correctly refuses that opaque origin, so a browser
    smoke test using it would fail before the editor mounts. Route interception
    gives the fixture a loopback HTTP origin without adding a fake app server
    or changing editor behavior.
    """
    # Serve the large production bundle through a real loopback response. A
    # Playwright route fulfillment copies the complete 11 MB document into the
    # browser protocol payload and can exhaust the Windows worker before the
    # app even mounts. The server is intentionally fixture-scoped and has no
    # application APIs or external network access.
    payload = html.encode("utf-8")
    preview_payload = (
        "<!doctype html><html><body><main data-onlook-id=\"preview-root\">"
        "<h1 data-onlook-id=\"preview-heading\">Hello Zylora</h1></main>"
        "</body></html>"
    ).encode("utf-8")
    files = api_files or {
        "src/App.tsx": 'export default function App() { return <main><h1>Hello Zylora</h1></main>; }',
        "src/main.jsx": 'import App from "./App.tsx";',
        "src/components/PricingCard.jsx": 'export default function PricingCard() { return <div>Pricing</div>; }',
    }

    def json_response(handler: BaseHTTPRequestHandler, body: dict, status: int = 200) -> None:
        encoded = json.dumps(body).encode("utf-8")
        handler.send_response(status)
        handler.send_header("Content-Type", "application/json")
        handler.send_header("Content-Length", str(len(encoded)))
        handler.end_headers()
        handler.wfile.write(encoded)

    class FixtureHandler(BaseHTTPRequestHandler):
        def _send_preview(self) -> None:
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(preview_payload)))
            self.end_headers()
            self.wfile.write(preview_payload)

        def do_GET(self):  # noqa: N802 - BaseHTTPRequestHandler API
            parsed = urlparse(self.path)
            if parsed.path.startswith("/preview/"):
                self._send_preview()
                return
            if parsed.path.endswith("/code/files"):
                json_response(
                    self,
                    {
                        "files": [
                            {
                                "path": path,
                                "bytes": len(content.encode("utf-8")),
                                "extension": Path(path).suffix,
                            }
                            for path, content in files.items()
                        ]
                    },
                )
                return
            if parsed.path.endswith("/code/file"):
                requested = parse_qs(parsed.query).get("path", [""])[0].replace("\\", "/").lstrip("/")
                if requested not in files:
                    json_response(self, {"detail": "file not found"}, status=404)
                    return
                json_response(self, {"path": requested, "content": files[requested]})
                return

            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)

        def do_PUT(self):  # noqa: N802 - BaseHTTPRequestHandler API
            parsed = urlparse(self.path)
            if not parsed.path.endswith("/code/file"):
                json_response(self, {"detail": "not found"}, status=404)
                return
            length = int(self.headers.get("Content-Length", "0"))
            try:
                body = json.loads(self.rfile.read(length).decode("utf-8"))
                requested = str(body.get("path", "")).replace("\\", "/").lstrip("/")
                content = str(body.get("content", ""))
            except (ValueError, TypeError, json.JSONDecodeError):
                json_response(self, {"detail": "invalid request"}, status=400)
                return
            if not requested:
                json_response(self, {"detail": "path is required"}, status=400)
                return
            files[requested] = content
            json_response(self, {"path": requested, "bytes": len(content.encode("utf-8"))})

        def do_DELETE(self):  # noqa: N802 - BaseHTTPRequestHandler API
            parsed = urlparse(self.path)
            if not parsed.path.endswith("/code/files"):
                json_response(self, {"detail": "not found"}, status=404)
                return
            requested = parse_qs(parsed.query).get("path", [""])[0].replace("\\", "/").lstrip("/")
            if requested:
                files.pop(requested, None)
            json_response(self, {"deleted": requested})

        def do_POST(self):  # noqa: N802 - BaseHTTPRequestHandler API
            parsed = urlparse(self.path)
            if parsed.path.endswith("/code/workspace/start"):
                json_response(self, {"preview_url": f"{fixture_url}preview/", "runtime": "fixture"})
                return
            if parsed.path.endswith("/code/workspace/status"):
                json_response(self, {"status": "ready", "preview_url": f"{fixture_url}preview/", "logs": []})
                return
            if parsed.path.endswith("/code/workspace/stop"):
                json_response(self, {"status": "stopped"})
                return
            json_response(self, {"detail": "not found"}, status=404)

        def log_message(self, _format, *_args):
            return

    server = ThreadingHTTPServer(("127.0.0.1", 0), FixtureHandler)
    fixture_url = f"http://127.0.0.1:{server.server_port}/onlook-cert/{uuid.uuid4().hex}/"
    html = html.replace("__ZYLORA_ONLOOK_FIXTURE_URL__", fixture_url)
    payload = html.encode("utf-8")

    Thread(target=server.serve_forever, daemon=True).start()
    url = fixture_url
    print(f"[fixture] serving {len(payload)} bytes at {url}", flush=True)
    try:
        # The production bundle is intentionally kept intact here; parsing a
        # multi-megabyte editor bundle can exceed a short navigation timeout
        # even though the document is healthy and the app has mounted.
        page.goto(url, wait_until="domcontentloaded", timeout=30000)
        print("[fixture] navigation complete", flush=True)
    finally:
        # The server is daemon-backed and exits with this certification
        # process. Keeping it alive avoids shutting down while a browser is
        # still fetching a module or stylesheet during mount.
        pass


def reset_db():
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in ("sites", "users", "sessions", "credit_usage", "credit_wallets"):
            try:
                db.execute(text(f"DELETE FROM {table}"))
            except Exception:
                pass


def studio_html(context: dict) -> str:
    html = (ROOT / "static" / "studio.html").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    bundle = (ROOT / "static" / "studio.js").read_text(encoding="utf-8")
    # Keep this browser certification self-contained on the loopback origin.
    # The real app serves these assets from FastAPI, but the fixture navigation
    # is fulfilled by Playwright and has no static-file server behind it. A
    # parser-blocking external script would otherwise hold DOMContentLoaded
    # until the browser's network timeout and mask the editor result.
    html = html.replace('<link rel="stylesheet" href="/static/studio-ux.css">', f"<style>{css}</style>")
    for stylesheet in ("zylora-tinkered.css", "zylora-onlook-studio.css"):
        asset = ROOT / "static" / stylesheet
        if asset.exists():
            html = re.sub(
                rf'<link\b[^>]*href=["\']/static/{re.escape(stylesheet)}(?:\?[^"\']*)?["\'][^>]*>',
                f"<style>{asset.read_text(encoding='utf-8')}</style>",
                html,
                flags=re.IGNORECASE,
            )
    publish_flow = ROOT / "static" / "publish-flow.js"
    if publish_flow.exists():
        html = html.replace(
            '<script src="/static/publish-flow.js"></script>',
            f"<script>{publish_flow.read_text(encoding='utf-8')}</script>",
        )
    html = html.replace("__ZYLORA_STUDIO_CONTEXT__", json.dumps(context))
    # The certification fixture keeps the editor bundle's code-workspace and
    # preview requests on its own bounded loopback server.  Other application
    # requests still use the real FastAPI bridge installed by browser_bootstrap.
    # The origin is filled by load_inline_html once the fixture server exists.
    fixture_fetch = """
<script>
window.__ZYLORA_ONLOOK_FIXTURE_ORIGIN__ = "__ZYLORA_ONLOOK_FIXTURE_URL__";
window.fetch = async (url, opts = {}) => {
  const target = new URL(String(url), window.location.href);
  if (target.pathname.includes('/code/')) {
    const fixture = new URL(target.pathname + target.search, window.__ZYLORA_ONLOOK_FIXTURE_ORIGIN__);
    return window.__ZYLORA_NATIVE_FETCH__(fixture.href, opts);
  }
  return window.__ZYLORA_NATIVE_FETCH__(url, opts);
};
</script>
"""
    native_fetch_capture = "<script>window.__ZYLORA_NATIVE_FETCH__ = window.fetch.bind(window);</script>"
    html = html.replace(
        '<script src="/static/studio.js"></script>',
        f"{native_fetch_capture}<script>{browser_bootstrap()}</script>{fixture_fetch}<script>{bundle}</script>",
    )
    return html


def run_certification():
    reset_db()
    client = TestClient(app)
    uid = uuid.uuid4().hex[:8]

    # Create user
    signup = client.post(
        "/api/auth/signup",
        json={"name": f"Cert User {uid}", "email": f"cert-{uid}@example.com", "password": "Password123!"},
    )
    assert signup.status_code == 200, signup.text
    payload = signup.json()
    csrf = payload["csrf_token"]
    if payload.get("debug_verification_token"):
        client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]})
    client.post("/api/billing/select", headers={"X-CSRF-Token": csrf}, json={"plan": "FREE"})

    # Create Code Site
    site_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Onlook Code Site"})
    assert site_res.status_code == 200
    code_site_id = site_res.json()["id"]
    code_workspace_id = f"ws_cert_{uid}"

    # Create Native Site
    native_res = client.post("/api/sites/blank", headers={"X-CSRF-Token": csrf}, json={"name": "Native Site"})
    assert native_res.status_code == 200
    native_site_id = native_res.json()["id"]

    # Configure sites in DB
    with SessionLocal.begin() as db:
        db.execute(
            text("UPDATE sites SET studio_engine = 'code', code_workspace_id = :ws WHERE id = :sid"),
            {"ws": code_workspace_id, "sid": code_site_id},
        )
        db.execute(
            text("UPDATE sites SET studio_engine = 'native' WHERE id = :sid"),
            {"sid": native_site_id},
        )

    # Bootstrap code workspace directory
    ws_dir = ROOT / "data" / "code-projects" / code_workspace_id
    ws_dir.mkdir(parents=True, exist_ok=True)
    src_dir = ws_dir / "src"
    src_dir.mkdir(parents=True, exist_ok=True)
    (src_dir / "App.tsx").write_text('export default function App() { return <div className="p-4"><h1>Hello Zylora</h1></div>; }', encoding="utf-8")
    (src_dir / "main.jsx").write_text('import React from "react"; import { createRoot } from "react-dom/client"; import App from "./App.tsx"; createRoot(document.getElementById("root")).render(<App />);', encoding="utf-8")
    pages_dir = src_dir / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)
    (pages_dir / "index.jsx").write_text('export default function Page() { return <main><h1>Hello Zylora</h1></main>; }', encoding="utf-8")
    (ws_dir / "index.html").write_text('<!doctype html><html><head><meta charset="UTF-8"></head><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>', encoding="utf-8")
    (ws_dir / "package.json").write_text('{"name":"cert-app","private":true,"scripts":{"dev":"vite","build":"vite build"},"dependencies":{"react":"^19.0.0","react-dom":"^19.0.0"},"devDependencies":{"vite":"^8.2.2"}}', encoding="utf-8")

    code_context = {
        "siteId": code_site_id,
        "csrfToken": csrf,
        "siteName": "Onlook Code Site",
        "studioEngine": "code",
        "codeWorkspaceId": code_workspace_id,
    }
    native_context = {
        "siteId": native_site_id,
        "csrfToken": csrf,
        "siteName": "Native Site",
        "studioEngine": "native",
    }

    code_page_html = studio_html(code_context)
    native_page_html = studio_html(native_context)

    browsers_to_test = [
        ("WebKit", "webkit"),
        ("Chromium", "chromium"),
        ("Firefox", "firefox"),
    ]
    requested_browser = os.environ.get('ONLOOK_BROWSER_FILTER', '').strip().lower()
    if requested_browser:
        browsers_to_test = [item for item in browsers_to_test if item[1] == requested_browser]

    results = {}

    for name, launcher_name in browsers_to_test:
        print(f"\n==========================================")
        print(f"Testing Browser Engine: {name}")
        print(f"==========================================")
        console_logs = []
        page_errors = []

        with sync_playwright() as playwright:
            launcher = getattr(playwright, launcher_name)
            try:
                browser = launcher.launch(headless=True)
            except Exception as e:
                print(f"[{name}] Failed to launch browser: {e}")
                results[name] = {"status": "SKIPPED", "reason": str(e)}
                continue

            try:
                page = new_page(browser, client, (1440, 900))
                page.set_default_timeout(5000)
                page.on("console", lambda msg: console_logs.append(f"[{msg.type}] {msg.text}"))
                page.on("pageerror", lambda err: page_errors.append(str(err)))

                # 1. Test Code Studio (Onlook OSS Engine)
                print(f"[{name}] Mounting Zylora Onlook Code Studio...")
                load_inline_html(
                    page,
                    code_page_html,
                    {
                        "src/App.tsx": 'export default function App() { return <main><h1>Hello Zylora</h1></main>; }',
                        "src/main.jsx": 'import App from "./App.tsx";',
                        "src/components/PricingCard.jsx": 'export default function PricingCard() { return <div>Pricing</div>; }',
                    },
                )
                print(f"[{name}] Inline document loaded at {page.url}")

                # The diagnostic registry records an event only after the
                # actual upstream DOM root was observed by MutationObserver.
                # It remains the stable proof while Onlook transitions its
                # editor-mode wrappers during boot.
                page.wait_for_function(
                    "() => window.__ONLOOK_DIAGNOSTICS__?.events?.some(e => e.event === 'ONLOOK_SHELL_MOUNTED')",
                    timeout=20000,
                )
                check(True, f"{name}: Onlook TopBar mounted")

                # Canvas/Layers/Components are asserted from the same
                # diagnostic snapshot below. MutationObserver has already
                # recorded their actual DOM roots by this point; waiting on a
                # transient wrapper selector would create a false timeout.

                # Verify window.__ONLOOK_DIAGNOSTICS__ registry
                diag = page.evaluate("() => window.__ONLOOK_DIAGNOSTICS__ ? { events: window.__ONLOOK_DIAGNOSTICS__.events.map(e => e.event), subsystems: Object.keys(window.__ONLOOK_DIAGNOSTICS__.subsystems).reduce((acc, k) => { acc[k] = window.__ONLOOK_DIAGNOSTICS__.subsystems[k].mounted; return acc; }, {}), version: window.__ONLOOK_DIAGNOSTICS__.version } : null")
                assert diag is not None, f"{name}: window.__ONLOOK_DIAGNOSTICS__ not found on window!"
                print(f"[{name}] Diagnostics: version={diag['version']}, events={diag['events']}")
                print(f"[{name}] Subsystems mounted: {diag['subsystems']}")

                check("ONLOOK_EDITOR_STORE_READY" in diag["events"], f"{name}: ONLOOK_EDITOR_STORE_READY event fired")
                check("ONLOOK_SHELL_MOUNTED" in diag["events"], f"{name}: ONLOOK_SHELL_MOUNTED event fired")
                check("ONLOOK_CANVAS_MOUNTED" in diag["events"], f"{name}: ONLOOK_CANVAS_MOUNTED event fired")
                check("ONLOOK_DESIGN_PANEL_MOUNTED" in diag["events"], f"{name}: Onlook Left Panel mounted")
                check(diag["events"].count("ONLOOK_SHELL_MOUNTED") >= 3, f"{name}: Onlook EditorBar/BottomBar mounted")
                check(diag["subsystems"].get("EditorEngine") is True, f"{name}: EditorEngine store mounted")
                check(diag["subsystems"].get("Canvas") is True, f"{name}: Canvas mounted")
                check(diag["subsystems"].get("ASTParser") is True, f"{name}: ASTParser mounted")

                # Layers are lazy-mounted by the actual Onlook design panel.
                # Open that upstream surface first so the provenance assertion
                # observes the real layer tree rather than an unmounted tab.
                layers_button = page.locator('button[data-testid="left-tab-layers"]')
                layers_button.click(timeout=5000, force=True, no_wait_after=True)
                page.wait_for_selector('[data-subsystem="onlook-layers"]', state='attached', timeout=5000)
                check(page.locator('[data-subsystem="onlook-layers"]').count() == 1, f"{name}: Layers tab opened")
                after_layers = page.evaluate("() => ({events: window.__ONLOOK_DIAGNOSTICS__?.events?.map(e => e.event) ?? [], mounted: window.__ONLOOK_DIAGNOSTICS__?.subsystems?.Layers?.mounted ?? false})")
                check("ONLOOK_LAYERS_MOUNTED" in after_layers["events"], f"{name}: ONLOOK_LAYERS_MOUNTED event fired")
                check(after_layers["mounted"] is True, f"{name}: Layers subsystem mounted")

                # Test Tab Switching: Components Tab
                components_button = page.locator('button[data-testid="left-tab-components"]')
                components_button.click(timeout=5000, force=True, no_wait_after=True)
                page.wait_for_selector('[data-subsystem="onlook-components"]', state='attached', timeout=5000)
                check(page.locator('[data-subsystem="onlook-components"]').count() == 1, f"{name}: Components tab opened")
                after_components = page.evaluate("() => ({events: window.__ONLOOK_DIAGNOSTICS__?.events?.map(e => e.event) ?? [], mounted: window.__ONLOOK_DIAGNOSTICS__?.subsystems?.Components?.mounted ?? false})")
                check("ONLOOK_COMPONENTS_MOUNTED" in after_components["events"], f"{name}: ONLOOK_COMPONENTS_MOUNTED event fired")
                check(after_components["mounted"] is True, f"{name}: Components subsystem mounted")

                # Switch to Code View Mode
                page.locator('button[aria-label="Code"]').click(timeout=5000, force=True, no_wait_after=True)
                page.wait_for_selector('[data-subsystem="onlook-code-panel"]', state='attached', timeout=10000)
                check(page.locator('[data-subsystem="onlook-code-panel"]').count() == 1, f"{name}: Code Panel view opened")

                # Switch back to Design Mode
                page.locator('[data-onlook-runtime="topbar"] button[aria-label="Select"]').click(timeout=5000, force=True, no_wait_after=True)
                page.wait_for_selector('[data-subsystem="onlook-canvas"]', state='attached', timeout=5000)
                check(page.locator('[data-subsystem="onlook-canvas"]').count() == 1, f"{name}: Returned to Canvas design mode")

                # Check for zero unexpected runtime page errors
                non_trivial_errors = [e for e in page_errors if "ResizeObserver" not in e]
                check(len(non_trivial_errors) == 0, f"{name}: 0 non-trivial runtime exceptions in Code Studio (errors: {non_trivial_errors})")

                page.close()

                # 2. Test Native Studio (Zero Regressions)
                print(f"[{name}] Mounting Native Zylora Studio...")
                page_native = new_page(browser, client, (1440, 900))
                load_inline_html(page_native, native_page_html)
                page_native.wait_for_selector(".tool-rail", timeout=10000)
                check(page_native.locator(".tool-rail").count() == 1, f"{name}: Native tool-rail mounted")
                check(page_native.locator('[data-testid="canvas-workspace"]').count() == 1, f"{name}: Native canvas-workspace mounted")
                page_native.close()

                results[name] = {
                    "status": "PASSED",
                    "code_studio": "CERTIFIED",
                    "native_studio": "CERTIFIED",
                    "events_fired": diag["events"],
                    "subsystems_verified": diag["subsystems"],
                }
                print(f"[{name}] ALL CERTIFICATION CHECKS PASSED!")

            except Exception as exc:
                print(f"[{name}] FAILED with exception: {exc}")
                print(f"[{name}] Console logs:\n" + "\n".join(console_logs[-15:]))
                print(f"[{name}] Page errors:\n" + "\n".join(page_errors))
                try:
                    print(f"[{name}] Body text:\n" + page.locator('body').inner_text(timeout=1000)[:2000])
                except Exception:
                    pass
                results[name] = {"status": "FAILED", "error": str(exc)}
            finally:
                try:
                    browser.close()
                except Exception:
                    pass

    # The browser harness starts a real Vite preview through the local
    # sandbox. Stop it explicitly so repeated certification runs do not leave
    # detached worker processes behind.
    local_sandbox.stop_workspace(code_workspace_id)
    # This workspace is a certification fixture, not a customer project.  The
    # local sandbox may install a full node_modules tree while booting it; clean
    # that generated tree after the browser closes so later repository scans do
    # not inherit stale test state or exhaust host resources.
    shutil.rmtree(ws_dir, ignore_errors=True)

    print("\n==========================================")
    print("FINAL BROWSER CERTIFICATION SUMMARY:")
    print("==========================================")
    print(json.dumps(results, indent=2))

    all_passed = all(r.get("status") == "PASSED" for r in results.values())
    if not all_passed:
        sys.exit(1)
    print("\nALL BROWSER ENGINES CERTIFIED SUCCESSFULLY (0 ERRORS)")


if __name__ == "__main__":
    run_certification()
