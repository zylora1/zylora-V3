"""Pinned Penpot evidence and transitional Studio feature gate."""

from __future__ import annotations

import json
from dataclasses import dataclass
from enum import StrEnum
from pathlib import Path

from .config import settings


class PenpotManifestStatus(StrEnum):
    VERIFIED = "VERIFIED"
    BLOCKED_BY_EXTERNAL_ENVIRONMENT = "BLOCKED_BY_EXTERNAL_ENVIRONMENT"


@dataclass(frozen=True)
class PenpotManifestRecord:
    repository: str
    version: str
    commit: str
    status: PenpotManifestStatus
    source_copied: bool
    reason: str
    source_present: bool = True
    source_mode: str = "git_submodule"
    source_path: str = "vendor/penpot"
    source_bridge_ready: bool = False
    distribution_acquired: bool = False
    runtime_started: bool = False
    install_method: str = ""
    artifact_path: str = ""


class PenpotManifest:
    @classmethod
    def load(cls) -> PenpotManifestRecord:
        lock_path = Path(__file__).resolve().parents[1] / "integrations" / "penpot" / "penpot.lock.json"
        lock: dict[str, object] = {}
        try:
            lock = json.loads(lock_path.read_text(encoding="utf-8")) if lock_path.exists() else {}
        except (OSError, ValueError):
            lock = {}
        configured_version = str(getattr(settings, "penpot_upstream_version", "") or '').strip()
        configured_commit = str(getattr(settings, "penpot_upstream_commit", "") or '').strip()
        version = configured_version or str(lock.get("version") or '').strip()
        commit = configured_commit or str(lock.get("upstream_commit") or '').strip()
        from_lock = not configured_version and not configured_commit and bool(lock)
        distribution_acquired = bool(version and commit and lock)
        runtime_started = str(lock.get("runtime_status") or '').upper() in {"RUNNING", "HEALTHY", "READY"}
        source_copied = bool(lock.get("source_copied"))
        source_mode = str(lock.get("source_mode") or 'git_submodule')
        source_path = str(lock.get("source_path") or 'vendor/penpot')
        source_present = bool(lock.get("source_present", True))
        source_bridge_ready = bool(lock.get("source_bridge_ready"))
        install_method = str(lock.get("install_method") or '')
        artifact_path = str(lock.get("distribution_artifact") or '')
        if not version or not commit:
            return PenpotManifestRecord(
                repository=str(getattr(settings, "penpot_upstream_repo", "https://github.com/penpot/penpot")),
                version=version,
                commit=commit,
                status=PenpotManifestStatus.BLOCKED_BY_EXTERNAL_ENVIRONMENT,
                source_copied=False,
                source_present=source_present,
                source_mode=source_mode,
                source_path=source_path,
                source_bridge_ready=False,
                reason="A verified upstream Penpot checkout/version/commit is not available in this environment.",
                distribution_acquired=False,
                runtime_started=False,
                install_method=install_method,
                artifact_path=artifact_path,
            )
        return PenpotManifestRecord(
            repository=str(lock.get("repository") or getattr(settings, "penpot_upstream_repo", "https://github.com/penpot/penpot")),
            version=version,
            commit=commit,
            status=PenpotManifestStatus.BLOCKED_BY_EXTERNAL_ENVIRONMENT if (from_lock and not runtime_started) else PenpotManifestStatus.VERIFIED,
            source_copied=source_copied,
            source_present=source_present,
            source_mode=source_mode,
            source_path=source_path,
            source_bridge_ready=source_bridge_ready,
            reason=str(lock.get("blocker") or "The pinned Penpot distribution has not been started and verified."),
            distribution_acquired=distribution_acquired,
            runtime_started=runtime_started,
            install_method=install_method,
            artifact_path=artifact_path,
        )

    @classmethod
    def engine_enabled(cls) -> bool:
        engine = str(getattr(settings, "studio_engine", "legacy") or 'legacy').strip().lower()
        return engine == 'penpot'
