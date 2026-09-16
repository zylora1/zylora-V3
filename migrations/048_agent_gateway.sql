-- Authenticated REST/MCP connector registry. Tokens are write-only credentials:
-- only their SHA-256 digest is persisted, and connector scope/site allowlists
-- are evaluated on every request.
CREATE TABLE IF NOT EXISTS agent_connectors (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  scopes_json TEXT NOT NULL DEFAULT '[]',
  site_ids_json TEXT,
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  expires_at TEXT,
  created_at TEXT NOT NULL,
  revoked_at TEXT,
  last_used_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_agent_connectors_user ON agent_connectors(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_agent_connectors_status ON agent_connectors(status, expires_at);

CREATE TABLE IF NOT EXISTS agent_idempotency (
  connector_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  request_hash TEXT NOT NULL,
  response_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY(connector_id, idempotency_key),
  FOREIGN KEY(connector_id) REFERENCES agent_connectors(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_agent_idempotency_created ON agent_idempotency(created_at);
