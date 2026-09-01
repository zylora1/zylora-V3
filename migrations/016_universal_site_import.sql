CREATE TABLE IF NOT EXISTS site_imports (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  original_filename TEXT NOT NULL,
  detected_framework TEXT NOT NULL,
  conversion_mode TEXT NOT NULL,
  warnings_json TEXT NOT NULL DEFAULT '[]',
  manifest_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_site_imports_site ON site_imports(site_id,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_site_imports_user ON site_imports(user_id,created_at DESC);

CREATE TABLE IF NOT EXISTS imported_site_pages (
  site_id TEXT NOT NULL,
  page_key TEXT NOT NULL,
  source_path TEXT NOT NULL,
  html TEXT NOT NULL,
  framework TEXT NOT NULL,
  asset_manifest_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY(site_id,page_key),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_imported_site_pages_site ON imported_site_pages(site_id,page_key);
