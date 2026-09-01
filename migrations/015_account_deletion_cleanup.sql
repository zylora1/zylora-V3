-- Durable queue for external resources that could not be removed synchronously
-- during privacy/account deletion. It intentionally has no user foreign key.
CREATE TABLE IF NOT EXISTS account_deletion_cleanup (
  id TEXT PRIMARY KEY,
  resource_kind TEXT NOT NULL,
  resource_key TEXT NOT NULL,
  last_error TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_account_deletion_cleanup_status ON account_deletion_cleanup(status,created_at);
