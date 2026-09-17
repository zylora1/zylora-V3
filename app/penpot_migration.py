"""Repeatable visual-source migration records for the editor/compiler boundary."""

from __future__ import annotations

from copy import deepcopy
from dataclasses import dataclass
import json
from uuid import uuid4

from .penpot_adapter import project_site_document
from .penpot_compiler import CompileResult, compile_penpot_document
from .db import now_iso
from .studio_document import SiteDocument, validate_studio_document
from .penpot_mapping import penpot_mapping_service


@dataclass(frozen=True)
class MigrationResult:
    migration_id: str
    site_id: str
    status: str
    document: SiteDocument
    document_hash: str
    warnings: tuple[str, ...]


_MIGRATIONS: dict[str, SiteDocument] = {}


def migrate_site_document(document: SiteDocument | dict, *, site_id: str, mapping: dict) -> MigrationResult:
    source = validate_studio_document(document if isinstance(document, dict) else document.model_dump(exclude_none=True))
    if str(source.id or site_id) != str(site_id):
        raise ValueError("SiteDocument does not belong to the requested site")
    if not str(mapping.get("penpot_file_id") or "").strip():
        raise ValueError("Penpot mapping requires a file id")
    page_id = next(iter(source.pages), None)
    if page_id is None:
        raise ValueError("SiteDocument must contain at least one page")
    # A Zylora website maps one Penpot file to all of its pages.  The
    # projection endpoint remains page-scoped for interactive Studio calls,
    # but a migration must carry the complete multi-page document so compile
    # and semantic round-trip checks cannot silently discard routes.
    projection = project_site_document(source, page_id)
    projection["pages"] = [
        project_site_document(source, current_page_id)["page"]
        for current_page_id in source.pages
    ]
    projection.pop("page", None)
    projection["site_id"] = str(site_id)
    projection["revision"] = int(source.revision)
    compiled: CompileResult = compile_penpot_document(projection, site_id=site_id, expected_revision=source.revision)
    migration_id = f"penpot-migration-{uuid4().hex}"
    _MIGRATIONS[migration_id] = source.model_copy(deep=True)
    return MigrationResult(
        migration_id=migration_id,
        site_id=str(site_id),
        status="READY",
        document=compiled.document,
        document_hash=compiled.document_hash,
        warnings=compiled.warnings,
    )


def rollback_migration(migration_id: str) -> SiteDocument:
    source = _MIGRATIONS.get(str(migration_id))
    if source is None:
        raise KeyError("Unknown Penpot migration")
    return source.model_copy(deep=True)


def persist_migration_result(result: MigrationResult, *, mapping: dict) -> dict:
    """Persist the validated migration checkpoint in the tenant-scoped map.

    Penpot file creation remains an external runtime operation; this helper is
    the durable Zylora side of the cutover and stores the rollback snapshot
    before a mapping can be marked ready.
    """
    snapshot = _MIGRATIONS.get(result.migration_id)
    if snapshot is None:
        raise KeyError("Unknown Penpot migration")
    return penpot_mapping_service.upsert(
        result.site_id,
        penpot_file_id=str(mapping.get("penpot_file_id") or ""),
        penpot_project_id=mapping.get("penpot_project_id"),
        penpot_team_id=mapping.get("penpot_team_id"),
        penpot_revision=str(mapping.get("penpot_revision") or "") or None,
        compiled_site_document_revision=int(result.document.revision),
        last_compiled_at=now_iso(),
        migration_status=result.status,
        migration_version=str(mapping.get("migration_version") or "1"),
        rollback_snapshot_json=json.dumps(snapshot.model_dump(mode="json", exclude_none=True), separators=(",", ":")),
    )
