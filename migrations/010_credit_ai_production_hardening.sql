-- Dual-credit accounting, transactional reservations, top-ups, chatbot cache/metrics,
-- generation observability and immutable publish metadata.
ALTER TABLE users ADD COLUMN lead_credits INTEGER NOT NULL DEFAULT 0;
ALTER TABLE plan_configs ADD COLUMN lead_credits INTEGER NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN lead_monthly_remaining INTEGER NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN lead_signup_remaining INTEGER NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN lead_topup_remaining INTEGER NOT NULL DEFAULT 0;
ALTER TABLE credit_usage ADD COLUMN credit_type TEXT NOT NULL DEFAULT 'ai';
ALTER TABLE sites ADD COLUMN document_version INTEGER NOT NULL DEFAULT 1;
ALTER TABLE sites ADD COLUMN generation_state TEXT NOT NULL DEFAULT 'DRAFT';
ALTER TABLE sites ADD COLUMN generation_meta_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE sites ADD COLUMN business_profile_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE sites ADD COLUMN published_revision INTEGER NOT NULL DEFAULT 0;

UPDATE plan_configs SET lead_credits=20, ai_credits=15 WHERE plan='FREE';
UPDATE plan_configs SET lead_credits=100, ai_credits=100 WHERE plan='STARTER';
UPDATE plan_configs SET lead_credits=300, ai_credits=300 WHERE plan='GROWTH';
UPDATE plan_configs SET lead_credits=0, ai_credits=0 WHERE plan='PRO';

CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  credit_type TEXT NOT NULL CHECK(credit_type IN ('ai','lead')),
  operation TEXT NOT NULL,
  amount INTEGER NOT NULL,
  monthly_used INTEGER NOT NULL DEFAULT 0,
  signup_used INTEGER NOT NULL DEFAULT 0,
  topup_used INTEGER NOT NULL DEFAULT 0,
  reference_id TEXT,
  idempotency_key TEXT,
  status TEXT NOT NULL CHECK(status IN ('RESERVED','FINALIZED','REFUNDED')),
  created_at TEXT NOT NULL,
  finalized_at TEXT,
  refunded_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_credit_transactions_idem ON credit_transactions(user_id,credit_type,operation,idempotency_key) WHERE idempotency_key IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_credit_transactions_user_time ON credit_transactions(user_id,created_at);

CREATE TABLE IF NOT EXISTS credit_topup_orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  credit_type TEXT NOT NULL CHECK(credit_type IN ('ai','lead')),
  pack_code TEXT NOT NULL,
  credits INTEGER NOT NULL,
  amount_minor INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  provider_order_id TEXT NOT NULL UNIQUE,
  provider_payment_id TEXT,
  provider_signature TEXT,
  status TEXT NOT NULL DEFAULT 'CREATED',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_credit_topup_orders_user ON credit_topup_orders(user_id,created_at);

CREATE TABLE IF NOT EXISTS chatbot_answer_cache (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  normalized_query TEXT NOT NULL,
  answer TEXT NOT NULL,
  source_doc_id TEXT,
  query_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_chatbot_cache_site_expiry ON chatbot_answer_cache(site_id,expires_at);
CREATE UNIQUE INDEX IF NOT EXISTS idx_chatbot_cache_exact ON chatbot_answer_cache(site_id,query_hash);

CREATE TABLE IF NOT EXISTS chatbot_usage_metrics (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  route TEXT NOT NULL CHECK(route IN ('RULE','CACHE','LLM','LOCAL_FALLBACK','BOOKING')),
  estimated_input_tokens_saved INTEGER NOT NULL DEFAULT 0,
  estimated_output_tokens_saved INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_chatbot_metrics_site_time ON chatbot_usage_metrics(site_id,created_at);

CREATE TABLE IF NOT EXISTS knowledge_embedding_cache (
  document_id TEXT PRIMARY KEY,
  content_hash TEXT NOT NULL,
  embedding_json TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(document_id) REFERENCES site_knowledge_docs(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notification_deliveries (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  channel TEXT NOT NULL,
  recipient TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  credit_transaction_id TEXT,
  provider TEXT,
  provider_message_id TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING',
  attempt_count INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id,idempotency_key,channel,recipient),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_notification_deliveries_site_time ON notification_deliveries(site_id,created_at);

CREATE TABLE IF NOT EXISTS contacts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  display_name TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_contacts_user_email ON contacts(user_id,lower(email)) WHERE email IS NOT NULL;
ALTER TABLE leads ADD COLUMN contact_id TEXT REFERENCES contacts(id) ON DELETE SET NULL;

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('lead_email_credit_cost','1',CURRENT_TIMESTAMP),
 ('lead_whatsapp_credit_cost','1',CURRENT_TIMESTAMP),
 ('ai_generation_max_pages','20',CURRENT_TIMESTAMP),
 ('ai_generation_prompt_max_chars','6000',CURRENT_TIMESTAMP),
 ('ai_edit_prompt_max_chars','2000',CURRENT_TIMESTAMP),
 ('chatbot_output_token_cap','200',CURRENT_TIMESTAMP),
 ('chatbot_history_turns','4',CURRENT_TIMESTAMP),
 ('chatbot_cache_ttl_days','30',CURRENT_TIMESTAMP),
 ('chatbot_cache_similarity','0.92',CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS generation_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  site_id TEXT,
  status TEXT NOT NULL DEFAULT 'PLANNING',
  progress_stage TEXT NOT NULL DEFAULT 'Planning site',
  error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id,idempotency_key),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_generation_jobs_state ON generation_jobs(status,updated_at);

CREATE TABLE IF NOT EXISTS published_versions (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  revision INTEGER NOT NULL,
  snapshot_json TEXT NOT NULL,
  structure_json TEXT NOT NULL,
  created_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(site_id,revision),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(created_by) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_published_versions_site ON published_versions(site_id,revision DESC);
