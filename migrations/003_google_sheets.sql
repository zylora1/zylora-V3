CREATE TABLE IF NOT EXISTS google_sheets_integrations (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL UNIQUE,
  spreadsheet_url TEXT NOT NULL,
  spreadsheet_id TEXT NOT NULL,
  sheet_name TEXT NOT NULL DEFAULT 'Leads',
  enabled INTEGER NOT NULL DEFAULT 1,
  sync_leads INTEGER NOT NULL DEFAULT 1,
  sync_appointments INTEGER NOT NULL DEFAULT 1,
  last_synced_at TEXT,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_google_sheets_site ON google_sheets_integrations(site_id);
