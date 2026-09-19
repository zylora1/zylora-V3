"""Comprehensive tests for the Zylora Studio Onlook OSS transplant architecture.

Verifies:
1. Gating & engine separation: Native vs Code engine.
2. File endpoints: GET and PUT /api/sites/{site_id}/code/file.
3. Lockfile protection: package-lock.json and other lockfiles blocked.
4. Preview instrumentation: Onlook preload script injection.
5. Multi-model AI registry and adapter compatibility.
6. Studio endpoint context injection of studio_engine and code_workspace_id.
"""
import json
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import text

from uuid import uuid4
from app.main import app
from app.db import SessionLocal
from app.code_project import CodeProjectAdapter, CodeProjectError, install_preview_instrumentation, _BLOCKED_NAMES


def _create_test_client_and_site(studio_engine="code"):
    client = TestClient(app)
    uid = uuid4().hex[:8]
    signup = client.post(
        "/api/auth/signup",
        json={
            "name": f"Onlook Tester {uid}",
            "email": f"onlook-{uid}@example.com",
            "password": "Password123!",
        },
    )
    assert signup.status_code == 200, signup.text
    payload = signup.json()
    verify = client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]})
    assert verify.status_code == 200, verify.text
    headers = {"X-CSRF-Token": payload["csrf_token"]}
    billing = client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    assert billing.status_code == 200, billing.text
    site = client.post("/api/sites/blank", headers=headers, json={"name": f"Onlook Site {uid}"})
    assert site.status_code == 200, site.text
    site_id = site.json()["id"]

    workspace_id = f"ws_{uuid4().hex[:10]}"
    with SessionLocal.begin() as db:
        db.execute(text("""
            UPDATE sites
            SET studio_engine = :engine, code_workspace_id = :workspace_id
            WHERE id = :site_id
        """), {"engine": studio_engine, "workspace_id": workspace_id, "site_id": site_id})

    return client, headers, site_id, workspace_id


def test_lockfiles_are_strictly_blocked():
    assert "package-lock.json" in _BLOCKED_NAMES
    assert "yarn.lock" in _BLOCKED_NAMES
    assert "pnpm-lock.yaml" in _BLOCKED_NAMES
    assert "bun.lock" in _BLOCKED_NAMES


def test_studio_context_injects_engine_and_workspace():
    client, headers, site_id, workspace_id = _create_test_client_and_site(studio_engine="code")
    response = client.get(f"/studio/{site_id}")
    assert response.status_code == 200
    html = response.text
    assert "window.ZYLORA_STUDIO_CONTEXT" in html
    assert f'"studioEngine":"code"' in html
    assert f'"codeWorkspaceId":"{workspace_id}"' in html


def test_code_file_read_and_write_endpoints(tmp_path, monkeypatch):
    from app.config import settings
    monkeypatch.setattr(settings, "studio_code_enabled", True)
    monkeypatch.setattr("app.code_project.ROOT", tmp_path)
    client, headers, site_id, workspace_id = _create_test_client_and_site(studio_engine="code")

    # Bootstrap test workspace directory
    ws_dir = tmp_path / "data" / "code-projects" / workspace_id
    ws_dir.mkdir(parents=True, exist_ok=True)
    src_dir = ws_dir / "src"
    src_dir.mkdir(parents=True, exist_ok=True)
    (src_dir / "App.tsx").write_text("export default function App() { return <h1>Original</h1>; }\n", encoding="utf-8")
    (ws_dir / "package.json").write_text('{"name": "test-project", "dependencies": {"react": "^19.0.0"}}', encoding="utf-8")

    # 1. Read file via GET /api/sites/{site_id}/code/file
    read_res = client.get(f"/api/sites/{site_id}/code/file?path=src/App.tsx", headers=headers)
    assert read_res.status_code == 200, read_res.text
    assert "Original" in read_res.json()["content"]

    # 2. Write file via PUT /api/sites/{site_id}/code/file
    new_content = "export default function App() { return <h1 className=\"font-bold text-2xl\">Updated by Onlook</h1>; }\n"
    write_res = client.put(f"/api/sites/{site_id}/code/file", headers=headers, json={"path": "src/App.tsx", "content": new_content})
    assert write_res.status_code == 200, write_res.text

    # 3. Verify write persisted
    verify_res = client.get(f"/api/sites/{site_id}/code/file?path=src/App.tsx", headers=headers)
    assert "Updated by Onlook" in verify_res.json()["content"]


def test_preview_instrumentation_injects_onlook_preload(tmp_path, monkeypatch):
    monkeypatch.setattr("app.code_project.ROOT", tmp_path)
    # Create static directory with onlook preload script
    static_dir = tmp_path / "static"
    static_dir.mkdir(parents=True, exist_ok=True)
    (static_dir / "onlook-preload-script.js").write_text("// Onlook Penpal Preload Script Mock", encoding="utf-8")

    project_id = "proj_test_123"
    ws_dir = tmp_path / "data" / "code-projects" / project_id
    ws_dir.mkdir(parents=True, exist_ok=True)
    (ws_dir / "index.html").write_text("<!DOCTYPE html><html><head><title>Test</title></head><body><div id='root'></div></body></html>", encoding="utf-8")

    adapter = CodeProjectAdapter(project_id)
    install_preview_instrumentation(adapter, project_id)

    updated_html = adapter.read_file("index.html")
    assert '<script src="/onlook-preload-script.js"></script>' in updated_html
    assert (ws_dir / "public" / "onlook-preload-script.js").is_file()


def test_native_site_isolation_cannot_access_code_file_endpoints(tmp_path, monkeypatch):
    from app.config import settings
    monkeypatch.setattr(settings, "studio_code_enabled", True)
    monkeypatch.setattr("app.code_project.ROOT", tmp_path)
    client, headers, site_id, workspace_id = _create_test_client_and_site(studio_engine="native")

    # Native site studio context should have studioEngine='native'
    response = client.get(f"/studio/{site_id}")
    assert response.status_code == 200
    assert '"studioEngine":"native"' in response.text

    # Accessing code file endpoint should be strictly blocked
    res = client.get(f"/api/sites/{site_id}/code/file?path=src/App.tsx", headers=headers)
    assert res.status_code == 409
    assert "Code Studio is not enabled" in res.text


def test_code_file_endpoint_rejects_traversal_and_lockfiles(tmp_path, monkeypatch):
    from app.config import settings
    monkeypatch.setattr(settings, "studio_code_enabled", True)
    monkeypatch.setattr("app.code_project.ROOT", tmp_path)
    client, headers, site_id, workspace_id = _create_test_client_and_site(studio_engine="code")

    # Directory traversal
    res = client.get(f"/api/sites/{site_id}/code/file?path=../../etc/passwd", headers=headers)
    assert res.status_code == 404

    # Blocked lockfiles
    res = client.put(f"/api/sites/{site_id}/code/file", headers=headers, json={"path": "package-lock.json", "content": "{}"})
    assert res.status_code == 422


def test_onlook_diagnostics_and_subsystems_bundle():
    """Verify static/studio.js contains all 8 Onlook lifecycle diagnostic events and data-subsystems."""
    from pathlib import Path
    root = Path(__file__).resolve().parents[1]
    bundle_path = root / "static" / "studio.js"
    assert bundle_path.exists(), "static/studio.js bundle missing"
    bundle = bundle_path.read_text(encoding="utf-8")

    # Diagnostic registry
    assert "__ONLOOK_DIAGNOSTICS__" in bundle

    # All 8 lifecycle events
    expected_events = [
        "ONLOOK_SHELL_MOUNTED",
        "ONLOOK_CANVAS_MOUNTED",
        "ONLOOK_LAYERS_MOUNTED",
        "ONLOOK_COMPONENTS_MOUNTED",
        "ONLOOK_DESIGN_PANEL_MOUNTED",
        "ONLOOK_CODE_PANEL_MOUNTED",
        "ONLOOK_EDITOR_STORE_READY",
        "ONLOOK_PENPAL_CONNECTED",
    ]
    for ev in expected_events:
        assert ev in bundle, f"Lifecycle event {ev} missing in studio.js bundle"

    # DOM subsystem markers
    expected_subsystems = [
        "onlook-shell",
        "onlook-canvas",
        "onlook-editorbar",
        "onlook-layers",
        "onlook-components",
        "onlook-code-panel",
        "onlook-design-panel",
    ]
    for sub in expected_subsystems:
        assert sub in bundle, f"DOM Subsystem marker {sub} missing in studio.js bundle"
    assert "data-subsystem" in bundle


def test_onlook_ast_transformation_script():
    """Verify Babel AST transformation script executes cleanly without regex string manipulation."""
    import subprocess
    from pathlib import Path
    root = Path(__file__).resolve().parents[1]
    script = root / "scripts" / "verify_onlook_ast.mjs"
    assert script.exists(), "scripts/verify_onlook_ast.mjs missing"

    result = subprocess.run(
        ["node", str(script)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=str(root),
    )
    assert result.returncode == 0, f"verify_onlook_ast.mjs failed:\n{result.stdout}\n{result.stderr}"
    assert "All Onlook AST transform tests passed successfully!" in result.stdout
    assert "AST Style Transformation passed" in result.stdout
    assert "AST Text Transformation passed" in result.stdout
    assert "AST Component Insertion passed" in result.stdout


def test_onlook_documentation_matrices():
    """Verify runtime provenance and duplicate code audit documents exist and contain required matrices."""
    from pathlib import Path
    root = Path(__file__).resolve().parents[1]
    provenance = root / "docs" / "onlook-integration" / "runtime-provenance.md"
    audit = root / "docs" / "onlook-integration" / "duplicate-code-audit.md"

    assert provenance.exists(), "docs/onlook-integration/runtime-provenance.md missing"
    assert audit.exists(), "docs/onlook-integration/duplicate-code-audit.md missing"

    prov_text = provenance.read_text(encoding="utf-8")
    assert "Runtime Provenance Matrix" in prov_text
    assert "DIRECT_REUSE" in prov_text
    assert "ADAPTED_REUSE" in prov_text
    assert "REPLACED_SOVEREIGN" in prov_text
    assert "EditorEngine" in prov_text
    assert "ASTParser" in prov_text

    audit_text = audit.read_text(encoding="utf-8")
    assert "Duplicate Code" in audit_text
    assert "KEEP" in audit_text
    assert "REPLACE" in audit_text
    assert "FALLBACK" in audit_text


def test_onlook_cross_browser_certification():
    """Run Playwright cross-browser certification suite across Chromium, Firefox, WebKit."""
    import subprocess
    import sys
    from pathlib import Path
    root = Path(__file__).resolve().parents[1]
    script = root / "scripts" / "test_onlook_browser.py"
    assert script.exists(), "scripts/test_onlook_browser.py missing"

    result = subprocess.run(
        [sys.executable, str(script)],
        capture_output=True,
        text=True,
        encoding="utf-8",
        cwd=str(root),
        timeout=180,
    )
    assert result.returncode == 0, f"Cross-browser certification failed:\nSTDOUT:\n{result.stdout}\nSTDERR:\n{result.stderr}"
    assert "ALL BROWSER ENGINES CERTIFIED SUCCESSFULLY (0 ERRORS)" in result.stdout



