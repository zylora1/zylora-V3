CREATE TABLE IF NOT EXISTS user_site_templates (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  source_site_id TEXT,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  document_json TEXT NOT NULL,
  thumbnail_url TEXT,
  visibility TEXT NOT NULL DEFAULT 'PRIVATE',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_user_site_templates_owner
  ON user_site_templates(user_id, updated_at);

-- Platform catalogue state is no longer active product data. Existing template
-- renderer files remain available only so historical customer sites still render.
DELETE FROM template_catalogue_state;
