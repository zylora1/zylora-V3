CREATE TABLE IF NOT EXISTS site_penpot_mapping (
  site_id TEXT PRIMARY KEY,
  penpot_team_id TEXT,
  penpot_project_id TEXT,
  penpot_file_id TEXT,
  penpot_revision TEXT,
  compiled_site_document_revision INTEGER,
  migration_version TEXT NOT NULL DEFAULT '1',
  migration_status TEXT NOT NULL DEFAULT 'UNMIGRATED',
  rollback_snapshot_json TEXT,
  last_compiled_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_site_penpot_mapping_file ON site_penpot_mapping(penpot_file_id);
