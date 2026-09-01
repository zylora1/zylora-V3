-- Durable webhook lifecycle and provider ordering metadata.
ALTER TABLE webhook_events ADD COLUMN status TEXT NOT NULL DEFAULT 'SUCCEEDED';
ALTER TABLE webhook_events ADD COLUMN attempt_count INTEGER NOT NULL DEFAULT 1;
ALTER TABLE webhook_events ADD COLUMN processing_started_at TEXT;
ALTER TABLE webhook_events ADD COLUMN processed_at TEXT;
ALTER TABLE webhook_events ADD COLUMN last_error TEXT;
ALTER TABLE webhook_events ADD COLUMN provider_created_at INTEGER;

UPDATE webhook_events
SET processed_at=COALESCE(processed_at,received_at), status='SUCCEEDED'
WHERE status='SUCCEEDED';

CREATE INDEX IF NOT EXISTS idx_webhook_events_status_received
  ON webhook_events(provider,status,received_at);

ALTER TABLE subscriptions ADD COLUMN last_provider_event_at INTEGER;
CREATE INDEX IF NOT EXISTS idx_subscriptions_provider_event
  ON subscriptions(provider_subscription_id,last_provider_event_at);
