CREATE TABLE IF NOT EXISTS ai_edit_previews (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  document_version INTEGER NOT NULL,
  instruction_hash TEXT NOT NULL,
  operations_json TEXT NOT NULL,
  providers_json TEXT NOT NULL DEFAULT '[]',
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_ai_edit_previews_lookup ON ai_edit_previews(user_id,site_id,expires_at);
