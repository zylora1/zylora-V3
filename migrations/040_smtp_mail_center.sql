-- SMTP Mail Center: persistent campaign queues, attachments, suppression and auditable recipient state.

ALTER TABLE platform_campaigns ADD COLUMN created_by_user_id TEXT;
ALTER TABLE platform_campaigns ADD COLUMN preheader TEXT;
ALTER TABLE platform_campaigns ADD COLUMN body_text TEXT;
ALTER TABLE platform_campaigns ADD COLUMN content_format TEXT NOT NULL DEFAULT 'HTML';
ALTER TABLE platform_campaigns ADD COLUMN scheduled_at TEXT;
ALTER TABLE platform_campaigns ADD COLUMN started_at TEXT;
ALTER TABLE platform_campaigns ADD COLUMN completed_at TEXT;
ALTER TABLE platform_campaigns ADD COLUMN total_recipients INTEGER NOT NULL DEFAULT 0;
ALTER TABLE platform_campaigns ADD COLUMN eligible_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE platform_campaigns ADD COLUMN suppressed_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE platform_campaigns ADD COLUMN idempotency_key TEXT;
ALTER TABLE platform_campaigns ADD COLUMN updated_at TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_platform_campaigns_idempotency ON platform_campaigns(created_by_user_id,idempotency_key);
CREATE INDEX IF NOT EXISTS idx_platform_campaigns_status_schedule ON platform_campaigns(status,scheduled_at,created_at);

CREATE TABLE IF NOT EXISTS email_campaign_recipients (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  last_attempt_at TEXT,
  sent_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(campaign_id,email),
  FOREIGN KEY(campaign_id) REFERENCES platform_campaigns(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_campaign_recipients_campaign_status ON email_campaign_recipients(campaign_id,status,created_at);
CREATE INDEX IF NOT EXISTS idx_email_campaign_recipients_email ON email_campaign_recipients(email);

CREATE TABLE IF NOT EXISTS email_campaign_jobs (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'QUEUED',
  run_after TEXT NOT NULL,
  attempt_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  claimed_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(campaign_id) REFERENCES platform_campaigns(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_campaign_jobs_due ON email_campaign_jobs(status,run_after,created_at);

CREATE TABLE IF NOT EXISTS email_campaign_attachments (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  storage_key TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(campaign_id) REFERENCES platform_campaigns(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_campaign_attachments_campaign ON email_campaign_attachments(campaign_id,created_at);

CREATE TABLE IF NOT EXISTS email_suppressions (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  reason TEXT NOT NULL,
  source TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_email_suppressions_email ON email_suppressions(email);

CREATE TABLE IF NOT EXISTS email_campaign_unsubscribe_tokens (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  email TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  used_at TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(campaign_id) REFERENCES platform_campaigns(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_campaign_unsubscribe_token ON email_campaign_unsubscribe_tokens(token_hash,used_at);

CREATE TABLE IF NOT EXISTS email_campaign_events (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL,
  recipient_id TEXT,
  event_type TEXT NOT NULL,
  metadata TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  FOREIGN KEY(campaign_id) REFERENCES platform_campaigns(id) ON DELETE CASCADE,
  FOREIGN KEY(recipient_id) REFERENCES email_campaign_recipients(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_email_campaign_events_campaign_time ON email_campaign_events(campaign_id,created_at);
