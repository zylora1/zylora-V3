-- Reliability, recoverability, pre-publish QA, operations monitoring, and growth intelligence.

CREATE TABLE IF NOT EXISTS site_backups (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  label TEXT,
  state_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_site_backups_site_time ON site_backups(site_id,created_at DESC);

CREATE TABLE IF NOT EXISTS publish_qa_runs (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  score INTEGER NOT NULL,
  blocking_count INTEGER NOT NULL DEFAULT 0,
  warning_count INTEGER NOT NULL DEFAULT 0,
  result_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_publish_qa_site_time ON publish_qa_runs(site_id,created_at DESC);

CREATE TABLE IF NOT EXISTS operational_events (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  site_id TEXT,
  component TEXT NOT NULL,
  severity TEXT NOT NULL,
  event_code TEXT NOT NULL,
  message TEXT NOT NULL,
  metadata TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'OPEN',
  created_at TEXT NOT NULL,
  resolved_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_operational_events_status_time ON operational_events(status,severity,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_operational_events_site_time ON operational_events(site_id,created_at DESC);

CREATE TABLE IF NOT EXISTS payment_recovery_cases (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  order_kind TEXT NOT NULL,
  local_order_id TEXT NOT NULL,
  provider_order_id TEXT,
  status TEXT NOT NULL DEFAULT 'OPEN',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  next_attempt_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(order_kind,local_order_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_payment_recovery_status ON payment_recovery_cases(status,updated_at DESC);

ALTER TABLE notification_deliveries ADD COLUMN subject TEXT;
ALTER TABLE notification_deliveries ADD COLUMN body TEXT;
ALTER TABLE notification_deliveries ADD COLUMN next_attempt_at TEXT;
ALTER TABLE notification_deliveries ADD COLUMN max_attempts INTEGER NOT NULL DEFAULT 4;
ALTER TABLE notification_deliveries ADD COLUMN dead_lettered_at TEXT;
CREATE INDEX IF NOT EXISTS idx_notification_retry ON notification_deliveries(status,next_attempt_at);

ALTER TABLE analytics_events ADD COLUMN metadata_json TEXT NOT NULL DEFAULT '{}';
CREATE INDEX IF NOT EXISTS idx_analytics_type_path_time ON analytics_events(site_id,event_type,path,created_at DESC);

ALTER TABLE razorpay_orders ADD COLUMN recovery_attempt_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE razorpay_orders ADD COLUMN last_reconciled_at TEXT;
ALTER TABLE razorpay_orders ADD COLUMN last_error TEXT;

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('site_auto_backup_interval_minutes','60',CURRENT_TIMESTAMP),
 ('site_backup_retention_count','60',CURRENT_TIMESTAMP),
 ('notification_retry_max_attempts','4',CURRENT_TIMESTAMP),
 ('notification_retry_base_seconds','60',CURRENT_TIMESTAMP),
 ('ai_sitewide_edit_cost','5',CURRENT_TIMESTAMP),
 ('publish_qa_blocking','true',CURRENT_TIMESTAMP),
 ('analytics_retention_days','365',CURRENT_TIMESTAMP);
