from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_studio_mounts_native_canvas_tree_and_not_the_retired_workspace_bridge():
    source = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    assert '<CanvasNode nodeId={page.rootNodeId} />' in source
    assert '<SelectionOverlay />' in source
    assert 'data-editor-engine="zylora-native"' in source
    assert "import('./zylora/penpot-interop')" not in source
    assert "PENPOT_WORKSPACE" not in source
    assert "penpot-mount" not in source
    assert "Starting Penpot engine" not in source


def test_native_studio_shell_has_no_runtime_plugin_or_external_workspace_script():
    shell = (ROOT / "static" / "studio.html").read_text(encoding="utf-8")
    assert "penpot-workspace" not in shell.lower()
    assert "iframe" not in shell.lower()
    assert "PENPOT_WORKSPACE" not in shell


def test_public_capability_copy_does_not_advertise_a_penpot_bridge():
    landing = (ROOT / "static" / "index.html").read_text(encoding="utf-8").lower()
    assert "penpot bridge" not in landing
    assert "two-way penpot" not in landing


def test_penpot_source_lock_records_upstream_and_checked_out_revisions():
    lock = json.loads((ROOT / "integrations" / "penpot" / "penpot.lock.json").read_text(encoding="utf-8"))
    assert lock["repository"] == "https://github.com/penpot/penpot"
    assert lock["version"] == "2.17.0"
    assert lock["upstream_commit"] == "bdce5817ea86d028db29113d9ecdadcf07097b36"
    assert lock["source_commit"] == "246c6a09eaf7c9806fda64ccd836be68c47eaeec"
    assert lock["source_parent"] == lock["upstream_commit"]
    assert lock["runtime_status"] == "BLOCKED_BY_EXTERNAL_ENVIRONMENT"


def test_command_registry_is_an_adapter_to_the_canonical_command_envelope():
    source = (ROOT / "studio" / "zylora" / "commands" / "commandRegistry.ts").read_text(encoding="utf-8")
    assert "createStudioCommand" in source
    assert "studioReducer" in source
    assert "PENPOT_WORKSPACE" not in source
