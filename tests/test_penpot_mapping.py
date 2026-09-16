import pytest

from app.config import settings
from app.penpot_manifest import PenpotManifest, PenpotManifestStatus
from app.penpot_mapping import PenpotMappingError, PenpotMappingService
from app.agent_gateway import _ensure_edit_source
from fastapi import HTTPException


def test_penpot_manifest_is_blocked_without_verified_upstream_commit(monkeypatch):
    monkeypatch.setattr(settings, "penpot_upstream_version", "")
    monkeypatch.setattr(settings, "penpot_upstream_commit", "")
    record = PenpotManifest.load()
    assert record.status is PenpotManifestStatus.BLOCKED_BY_EXTERNAL_ENVIRONMENT
    assert record.source_copied is False
    assert record.source_present is True
    assert record.source_mode == "git_submodule"
    assert record.source_path == "vendor/penpot"
    assert record.source_bridge_ready is False
    assert record.distribution_acquired is True
    assert record.version == "2.17.0"
    assert record.runtime_started is False


def test_penpot_engine_gate_defaults_to_legacy_and_rejects_unknown(monkeypatch):
    monkeypatch.setattr(settings, "studio_engine", "legacy")
    assert PenpotManifest.engine_enabled() is False
    monkeypatch.setattr(settings, "studio_engine", "invalid", raising=False)
    with pytest.raises(ValueError):
        PenpotManifest.engine_enabled()


def test_mapping_authorization_is_tenant_scoped(monkeypatch):
    class DB:
        def __init__(self, row):
            self.row = row

        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return None

        def execute(self, *_args, **_kwargs):
            row = self.row
            return type("Result", (), {"mappings": lambda self: self, "first": lambda self: row})()

    monkeypatch.setattr("app.penpot_mapping.SessionLocal", lambda: DB({"site_id": "site-a", "penpot_file_id": "file-a", "migration_status": "READY"}))
    service = PenpotMappingService()
    assert service.authorize("site-a", "user-a")["penpot_file_id"] == "file-a"
    with pytest.raises(PenpotMappingError):
        service.authorize("site-b", "user-a")


def test_external_gateway_writes_fail_closed_when_penpot_source_bridge_is_not_ready(monkeypatch):
    monkeypatch.setattr(settings, "studio_engine", "penpot")
    monkeypatch.setattr(settings, "penpot_upstream_version", "")
    monkeypatch.setattr(settings, "penpot_upstream_commit", "")
    with pytest.raises(HTTPException) as exc:
        _ensure_edit_source(site_id="site-a", user_id="user-a", operation="zylora.apply_site_patch")
    assert exc.value.status_code == 503
    assert exc.value.detail["code"] == "PENPOT_NOT_READY"
