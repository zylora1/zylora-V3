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
    source_present: bool = False
    source_mode: str = ""
    source_path: str = ""
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
        configured_version = str(settings.penpot_upstream_version or '').strip()
        configured_commit = str(settings.penpot_upstream_commit or '').strip()
        version = configured_version or str(lock.get("version") or '').strip()
        commit = configured_commit or str(lock.get("upstream_commit") or '').strip()
        from_lock = not configured_version and not configured_commit and bool(lock)
        distribution_acquired = bool(version and commit and lock)
        runtime_started = str(lock.get("runtime_status") or '').upper() in {"RUNNING", "HEALTHY", "READY"}
        source_copied = bool(lock.get("source_copied"))
        source_mode = str(lock.get("source_mode") or '')
        source_path = str(lock.get("source_path") or '')
        source_present = bool(lock.get("source_present"))
        source_bridge_ready = bool(lock.get("source_bridge_ready"))
        if source_path:
            source_root = Path(__file__).resolve().parents[1] / source_path
            source_present = source_present and source_root.exists() and (source_root / '.git').exists()
        install_method = str(lock.get("install_method") or '')
        artifact_path = str(lock.get("distribution_artifact") or '')
        if not version or not commit:
            return PenpotManifestRecord(
                repository=str(settings.penpot_upstream_repo),
                version=version,
                commit=commit,
                status=PenpotManifestStatus.BLOCKED_BY_EXTERNAL_ENVIRONMENT,
                source_copied=False,
                source_present=False,
                source_mode=source_mode,
                source_path=source_path,
                source_bridge_ready=False,
                reason="A verified upstream Penpot checkout/version/commit is not available in this environment.",
                distribution_acquired=False,
                runtime_started=False,
                install_method=install_method,
                artifact_path=artifact_path,
            )
        if from_lock and not runtime_started:
            return PenpotManifestRecord(
                repository=str(lock.get("repository") or settings.penpot_upstream_repo),
                version=version,
                commit=commit,
                status=PenpotManifestStatus.BLOCKED_BY_EXTERNAL_ENVIRONMENT,
                source_copied=source_copied,
                source_present=source_present,
                source_mode=source_mode,
                source_path=source_path,
                source_bridge_ready=source_bridge_ready,
                reason=str(lock.get("blocker") or "The pinned Penpot distribution has not been started and verified."),
                distribution_acquired=distribution_acquired,
                runtime_started=False,
                install_method=install_method,
                artifact_path=artifact_path,
            )
        return PenpotManifestRecord(
            repository=str(settings.penpot_upstream_repo),
            version=version,
            commit=commit,
            status=PenpotManifestStatus.VERIFIED,
            source_copied=source_copied,
            source_present=source_present,
            source_mode=source_mode,
            source_path=source_path,
            source_bridge_ready=source_bridge_ready,
            reason="Upstream metadata is configured; source-copy evidence must still be recorded by the migration job.",
            distribution_acquired=distribution_acquired,
            runtime_started=runtime_started,
            install_method=install_method,
            artifact_path=artifact_path,
        )

    @classmethod
    def engine_enabled(cls) -> bool:
        engine = str(settings.studio_engine or 'legacy').strip().lower()
        if engine not in {'legacy', 'native', 'penpot'}:
            raise ValueError('STUDIO_ENGINE must be legacy, native, or penpot')
        # A commit string alone is not a runnable integration. The upstream
        # source, Zylora OIDC SSO settings, and a started runtime are required
        # before the public /studio route can hand a user to Penpot.
        return engine == 'penpot' and cls.load().status is PenpotManifestStatus.VERIFIED and bool(
            str(settings.penpot_base_url or '').strip()
            and str(settings.oidc_issuer or '').strip()
            and str(settings.oidc_signing_key or '').strip()
            and cls.load().source_present
            and cls.load().source_bridge_ready
            and cls.load().runtime_started
        )

    @classmethod
    def gate(cls) -> dict[str, object]:
        record = cls.load()
        sso_configured = bool(str(settings.oidc_issuer or '').strip() and str(settings.oidc_signing_key or '').strip())
        enabled = cls.engine_enabled()
        return {
            'engine': str(settings.studio_engine or 'legacy').strip().lower(),
            'enabled': enabled,
            'status': record.status.value,
            'repository': record.repository,
            'version': record.version,
            'commit': record.commit,
            'source_copied': record.source_copied,
            'source_present': record.source_present,
            'source_mode': record.source_mode,
            'source_path': record.source_path,
            'source_bridge_ready': record.source_bridge_ready,
            'distribution_acquired': record.distribution_acquired,
            'runtime_started': record.runtime_started,
            'install_method': record.install_method,
            'artifact_path': record.artifact_path,
            'sso_configured': sso_configured,
            'reason': record.reason,
        }
