-- Ledger policy marker for the unified AI-credit release.
--
-- The migration runner installs the dialect-specific database guard after all
-- migrations have been applied (see app/db.py::_ensure_ai_ledger_immutability).
-- Keeping the trigger installation in the runner avoids executing PostgreSQL
-- PL/pgSQL in SQLite certification fixtures while ensuring every PostgreSQL
-- startup converges on the append-only trigger.
CREATE TABLE IF NOT EXISTS ai_credit_ledger_policy (
  id INTEGER PRIMARY KEY,
  policy TEXT NOT NULL,
  created_at TEXT NOT NULL
);
INSERT OR IGNORE INTO ai_credit_ledger_policy(id,policy,created_at)
VALUES (1,'append_only_compensating_entries',CURRENT_TIMESTAMP);
