-- Centralized production SEO/GEO, redirect, IndexNow and replay-protection state.
ALTER TABLE sites ADD COLUMN seo_schema_version INTEGER NOT NULL DEFAULT 2;
ALTER TABLE sites ADD COLUMN seo_updated_at TEXT;

ALTER TABLE blog_posts ADD COLUMN featured_image_asset_id TEXT;
ALTER TABLE blog_posts ADD COLUMN featured_image_alt TEXT;
ALTER TABLE blog_posts ADD COLUMN author_name TEXT;
ALTER TABLE blog_posts ADD COLUMN author_bio TEXT;
ALTER TABLE blog_posts ADD COLUMN canonical_url TEXT;
ALTER TABLE blog_posts ADD COLUMN og_image_asset_id TEXT;
ALTER TABLE blog_posts ADD COLUMN indexable INTEGER NOT NULL DEFAULT 1;

CREATE TABLE IF NOT EXISTS site_redirects (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  from_path TEXT NOT NULL,
  to_path TEXT NOT NULL,
  status_code INTEGER NOT NULL DEFAULT 308,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(site_id, from_path),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_site_redirects_site ON site_redirects(site_id,from_path);

CREATE TABLE IF NOT EXISTS indexnow_queue (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  url TEXT NOT NULL,
  event_kind TEXT NOT NULL,
  dedupe_key TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'PENDING',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  next_attempt_at TEXT,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_indexnow_pending ON indexnow_queue(status,next_attempt_at,created_at);
CREATE INDEX IF NOT EXISTS idx_indexnow_site ON indexnow_queue(site_id,created_at);

CREATE TABLE IF NOT EXISTS turnstile_token_uses (
  token_hash TEXT PRIMARY KEY,
  used_at TEXT NOT NULL
);
