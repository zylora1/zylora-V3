-- Completion layer for the unified lead-conversion system. Additive only.
ALTER TABLE subscriptions ADD COLUMN provider_payment_id TEXT;
ALTER TABLE subscriptions ADD COLUMN last_error TEXT;
CREATE INDEX IF NOT EXISTS idx_subscriptions_payment ON subscriptions(provider_payment_id);

CREATE TABLE IF NOT EXISTS assistant_action_keys (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  conversation_id TEXT,
  action_type TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  result_id TEXT,
  created_at TEXT NOT NULL,
  UNIQUE(site_id,action_type,idempotency_key),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(conversation_id) REFERENCES assistant_conversations(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS lead_form_configs (
  site_id TEXT PRIMARY KEY,
  fields_json TEXT NOT NULL DEFAULT '[]',
  ai_generated INTEGER NOT NULL DEFAULT 0,
  version INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
