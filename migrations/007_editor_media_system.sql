-- Production-grade editor/media persistence. Forward-only; preserves existing site data.
ALTER TABLE sites ADD COLUMN document_schema_version INTEGER NOT NULL DEFAULT 3;
ALTER TABLE sites ADD COLUMN editor_history_cursor INTEGER NOT NULL DEFAULT -1;
ALTER TABLE sites ADD COLUMN brand_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE sites ADD COLUMN seo_json TEXT NOT NULL DEFAULT '{}';

CREATE TABLE IF NOT EXISTS media_assets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  filename TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  storage_key TEXT NOT NULL UNIQUE,
  storage_provider TEXT NOT NULL,
  alt_text TEXT,
  license_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  deleted_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_media_assets_site ON media_assets(site_id,created_at);
CREATE INDEX IF NOT EXISTS idx_media_assets_owner ON media_assets(user_id,created_at);

CREATE TABLE IF NOT EXISTS editor_history (
  site_id TEXT NOT NULL,
  seq INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  state_json TEXT NOT NULL,
  action TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY(site_id,seq),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_editor_history_site_time ON editor_history(site_id,created_at);

CREATE TABLE IF NOT EXISTS site_revisions (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  version INTEGER NOT NULL,
  kind TEXT NOT NULL,
  label TEXT,
  state_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(site_id,version),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_site_revisions_site ON site_revisions(site_id,version DESC);
