CREATE TABLE IF NOT EXISTS template_catalogue_state (
  slug TEXT PRIMARY KEY,
  published INTEGER NOT NULL DEFAULT 1 CHECK(published IN (0,1)),
  updated_by TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(updated_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS ai_api_usage (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  site_id TEXT,
  surface TEXT NOT NULL CHECK(surface IN ('CHATBOT','WEBSITE')),
  operation TEXT NOT NULL,
  model TEXT NOT NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  cached_input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  estimated_cost_micros INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_ai_api_usage_surface_time ON ai_api_usage(surface,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_api_usage_user_time ON ai_api_usage(user_id,created_at);
