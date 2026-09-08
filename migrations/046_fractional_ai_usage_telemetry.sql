-- Assistant usage telemetry must preserve the same fractional customer charge
-- as the authoritative AI-credit ledger.  The startup migration runner
-- upgrades PostgreSQL's legacy INTEGER column to NUMERIC(24,6); SQLite's
-- dynamic typing stores the Decimal string safely without a table rebuild.
CREATE INDEX IF NOT EXISTS idx_ai_usage_events_billable_credits
  ON ai_usage_events(billable_credits);
