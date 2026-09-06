ALTER TABLE sites ADD COLUMN renderer_state TEXT NOT NULL DEFAULT 'LEGACY';
ALTER TABLE sites ADD COLUMN published_studio_document_json TEXT;
ALTER TABLE sites ADD COLUMN legacy_snapshot_backup_json TEXT;
ALTER TABLE sites ADD COLUMN legacy_structure_backup_json TEXT;
ALTER TABLE sites ADD COLUMN renderer_updated_at TEXT;
ALTER TABLE sites ADD COLUMN renderer_last_error TEXT;
CREATE INDEX IF NOT EXISTS idx_sites_renderer_state ON sites(renderer_state,status);

