-- OAuth 2.1-style authorization-code + PKCE records for user-friendly AI
-- clients. Access tokens remain opaque connector bearer tokens; only hashes
-- are persisted. The existing agent gateway remains the single tool service.
ALTER TABLE agent_connectors ADD COLUMN audience TEXT;

CREATE TABLE IF NOT EXISTS agent_oauth_clients (
  client_id TEXT PRIMARY KEY,
  client_name TEXT NOT NULL,
  redirect_uris_json TEXT NOT NULL,
  token_endpoint_auth_method TEXT NOT NULL DEFAULT 'none',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS agent_oauth_codes (
  code_hash TEXT PRIMARY KEY,
  client_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  redirect_uri TEXT NOT NULL,
  scopes_json TEXT NOT NULL,
  site_ids_json TEXT,
  all_sites INTEGER NOT NULL DEFAULT 0,
  code_challenge TEXT NOT NULL,
  code_challenge_method TEXT NOT NULL DEFAULT 'S256',
  resource TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  consumed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(client_id) REFERENCES agent_oauth_clients(client_id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_agent_oauth_codes_client ON agent_oauth_codes(client_id, expires_at, consumed);

CREATE TABLE IF NOT EXISTS agent_refresh_tokens (
  token_hash TEXT PRIMARY KEY,
  connector_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  revoked_at TEXT,
  rotated_to_hash TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(connector_id) REFERENCES agent_connectors(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_agent_refresh_connector ON agent_refresh_tokens(connector_id, expires_at);
