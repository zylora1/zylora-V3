CREATE TABLE IF NOT EXISTS platform_campaigns (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  audience TEXT NOT NULL DEFAULT 'ALL',
  body_html TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'DRAFT',
  sent_count INTEGER NOT NULL DEFAULT 0,
  delivered_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  sent_at TEXT
);
