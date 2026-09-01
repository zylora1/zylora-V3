-- Historical migration cleanup only: remove the superseded pre-Google-Sheets integration table if it exists.
DROP TABLE IF EXISTS google_forms_integrations;

ALTER TABLE users ADD COLUMN account_type TEXT NOT NULL DEFAULT 'CLIENT';
ALTER TABLE sites ADD COLUMN page_count INTEGER NOT NULL DEFAULT 1;
ALTER TABLE appointments ADD COLUMN source TEXT NOT NULL DEFAULT 'PUBLIC';

CREATE TABLE IF NOT EXISTS credit_wallets (
  user_id TEXT PRIMARY KEY,
  monthly_remaining INTEGER NOT NULL DEFAULT 0,
  signup_remaining INTEGER NOT NULL DEFAULT 5,
  topup_remaining INTEGER NOT NULL DEFAULT 0,
  period_key TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS credit_usage (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  operation TEXT NOT NULL,
  cost INTEGER NOT NULL,
  monthly_used INTEGER NOT NULL DEFAULT 0,
  signup_used INTEGER NOT NULL DEFAULT 0,
  topup_used INTEGER NOT NULL DEFAULT 0,
  idempotency_key TEXT,
  status TEXT NOT NULL DEFAULT 'DEBITED',
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_credit_usage_idem ON credit_usage(user_id,idempotency_key) WHERE idempotency_key IS NOT NULL;

CREATE TABLE IF NOT EXISTS site_knowledge_docs (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  title TEXT NOT NULL,
  filename TEXT,
  content TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_knowledge_site ON site_knowledge_docs(site_id);

CREATE TABLE IF NOT EXISTS chatbot_messages (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  grounded_doc_id TEXT,
  action TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_chat_messages_session ON chatbot_messages(site_id,session_id,created_at);

CREATE TABLE IF NOT EXISTS freelancer_profiles (
  user_id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  bio TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  closed_count INTEGER NOT NULL DEFAULT 0,
  rating_sum INTEGER NOT NULL DEFAULT 0,
  rating_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS freelancer_fee_transactions (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  fee_type TEXT NOT NULL,
  amount_usd_minor INTEGER NOT NULL,
  provider TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(freelancer_id,site_id,fee_type,status),
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS freelancer_template_submissions (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  source_site_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PUBLISHED',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(freelancer_id,source_site_id),
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(source_site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS freelancer_ratings (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  client_user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  stars INTEGER NOT NULL CHECK(stars BETWEEN 1 AND 5),
  created_at TEXT NOT NULL,
  UNIQUE(client_user_id,site_id),
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(client_user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
UPDATE plan_configs SET site_limit=10 WHERE plan IN ('FREE','STARTER','GROWTH','PRO');
