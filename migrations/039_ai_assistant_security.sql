-- Explicit assistant scopes, provider usage metering, and email consent state.
ALTER TABLE assistant_conversations ADD COLUMN assistant_type TEXT NOT NULL DEFAULT 'SALES_ASSISTANT';
UPDATE assistant_conversations SET assistant_type='OWNER_ASSISTANT' WHERE test_mode=1;
CREATE INDEX IF NOT EXISTS idx_assistant_conversations_scope ON assistant_conversations(site_id,assistant_type,last_activity_at DESC);

CREATE TABLE IF NOT EXISTS ai_usage_events (
  id TEXT PRIMARY KEY,
  request_id TEXT NOT NULL UNIQUE,
  user_id TEXT,
  site_id TEXT,
  conversation_id TEXT,
  assistant_type TEXT NOT NULL CHECK(assistant_type IN ('SALES_ASSISTANT','PUBLIC_SITE_ASSISTANT','OWNER_ASSISTANT','SUPER_ADMIN_ASSISTANT')),
  status TEXT NOT NULL,
  model TEXT NOT NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  cached_input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  provider_cost_micros INTEGER NOT NULL DEFAULT 0,
  billable_credits INTEGER NOT NULL DEFAULT 0,
  tool_calls_json TEXT NOT NULL DEFAULT '[]',
  error_code TEXT,
  duration_ms INTEGER,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL,
  FOREIGN KEY(conversation_id) REFERENCES assistant_conversations(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_ai_usage_events_scope_time ON ai_usage_events(assistant_type,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_usage_events_user_time ON ai_usage_events(user_id,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_usage_events_site_time ON ai_usage_events(site_id,created_at);

CREATE TABLE IF NOT EXISTS email_preferences (
  user_id TEXT PRIMARY KEY,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  unsubscribed_at TEXT,
  updated_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS email_unsubscribe_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  used_at TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_unsubscribe_user ON email_unsubscribe_tokens(user_id,created_at);
