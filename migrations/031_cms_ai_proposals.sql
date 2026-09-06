CREATE TABLE IF NOT EXISTS cms_ai_proposals (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  action TEXT NOT NULL,
  operations_json TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  provider TEXT NOT NULL,
  created_at TEXT NOT NULL,
  applied_at TEXT,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_cms_ai_proposals_owner ON cms_ai_proposals(site_id,user_id,status,created_at DESC);
