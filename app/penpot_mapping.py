"""Tenant-scoped Zylora site to Penpot file mapping."""

from __future__ import annotations

from typing import Any

from sqlalchemy import text

from .db import SessionLocal, now_iso


class PenpotMappingError(PermissionError):
    """Raised when a mapping is missing or does not belong to the requesting user."""


class PenpotMappingService:
    def get_for_site(self, site_id: str, user_id: str) -> dict[str, Any]:
        with SessionLocal() as db:
            row = db.execute(text('''SELECT m.* FROM site_penpot_mapping m
                JOIN sites s ON s.id=m.site_id
                WHERE m.site_id=:site AND s.user_id=:user'''), {'site': site_id, 'user': user_id}).mappings().first()
        if not row or str(row.get('site_id') or '') != str(site_id):
            raise PenpotMappingError('Penpot mapping is not available for this site')
        return dict(row)

    def authorize(self, site_id: str, user_id: str) -> dict[str, Any]:
        mapping = self.get_for_site(site_id, user_id)
        if not str(mapping.get('penpot_file_id') or '').strip():
            raise PenpotMappingError('Penpot file is not configured for this site')
        return mapping

    def upsert(self, site_id: str, *, penpot_file_id: str, penpot_project_id: str | None = None,
               penpot_team_id: str | None = None, penpot_revision: str | None = None,
               compiled_site_document_revision: int | None = None, last_compiled_at: str | None = None,
               migration_status: str = 'UNMIGRATED', migration_version: str = '1',
               rollback_snapshot_json: str | None = None) -> dict[str, Any]:
        now = now_iso()
        with SessionLocal.begin() as db:
            db.execute(text('''INSERT INTO site_penpot_mapping(
                site_id,penpot_team_id,penpot_project_id,penpot_file_id,penpot_revision,
                compiled_site_document_revision,last_compiled_at,migration_version,migration_status,
                rollback_snapshot_json,created_at,updated_at)
                VALUES (:site,:team,:project,:file,:penpot_revision,:compiled_revision,:compiled_at,
                        :version,:status,:rollback,:created,:updated)
                ON CONFLICT(site_id) DO UPDATE SET
                penpot_team_id=excluded.penpot_team_id,penpot_project_id=excluded.penpot_project_id,
                penpot_file_id=excluded.penpot_file_id,migration_version=excluded.migration_version,
                penpot_revision=excluded.penpot_revision,
                compiled_site_document_revision=excluded.compiled_site_document_revision,
                last_compiled_at=excluded.last_compiled_at,migration_status=excluded.migration_status,
                rollback_snapshot_json=excluded.rollback_snapshot_json,
                updated_at=excluded.updated_at'''), {
                'site': site_id, 'team': penpot_team_id, 'project': penpot_project_id, 'file': penpot_file_id,
                'penpot_revision': penpot_revision, 'compiled_revision': compiled_site_document_revision,
                'compiled_at': last_compiled_at,
                'version': migration_version, 'status': migration_status, 'rollback': rollback_snapshot_json,
                'created': now, 'updated': now,
            })
        return self.get_for_site(site_id, self._owner(site_id))

    @staticmethod
    def _owner(site_id: str) -> str:
        with SessionLocal() as db:
            row = db.execute(text('SELECT user_id FROM sites WHERE id=:site'), {'site': site_id}).mappings().first()
        if not row:
            raise PenpotMappingError('Site does not exist')
        return str(row['user_id'])


penpot_mapping_service = PenpotMappingService()
