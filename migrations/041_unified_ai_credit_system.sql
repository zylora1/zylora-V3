-- Unified, server-authoritative AI credit accounting.
-- The existing integer wallet remains as a compatibility projection for older
-- API clients; the NUMERIC columns and immutable ledger below are authoritative
-- for AI usage and preserve fractional credits.

ALTER TABLE plan_configs ADD COLUMN chatbot_reserved_credits NUMERIC(24,6) NOT NULL DEFAULT 0;
UPDATE plan_configs SET chatbot_reserved_credits=CASE WHEN contact_only=1 THEN 0 ELSE ai_credits END,
  updated_at=CURRENT_TIMESTAMP;

ALTER TABLE credit_wallets ADD COLUMN normal_balance NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN normal_reserved NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN chatbot_reserved_balance NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN chatbot_reserved_held NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN normal_allocation NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN chatbot_reserved_allocation NUMERIC(24,6) NOT NULL DEFAULT 0;
ALTER TABLE credit_wallets ADD COLUMN cycle_key TEXT;
ALTER TABLE credit_wallets ADD COLUMN legacy_normal_snapshot NUMERIC(24,6) NOT NULL DEFAULT 0;

UPDATE credit_wallets SET normal_balance=monthly_remaining+signup_remaining+topup_remaining,
  normal_allocation=monthly_remaining+signup_remaining,
  chatbot_reserved_balance=COALESCE((SELECT chatbot_reserved_credits FROM plan_configs p JOIN users u ON u.plan=p.plan WHERE u.id=credit_wallets.user_id),0),
  chatbot_reserved_allocation=COALESCE((SELECT chatbot_reserved_credits FROM plan_configs p JOIN users u ON u.plan=p.plan WHERE u.id=credit_wallets.user_id),0),
  cycle_key=period_key,
  legacy_normal_snapshot=monthly_remaining+signup_remaining+topup_remaining,
  updated_at=CURRENT_TIMESTAMP;

CREATE TABLE IF NOT EXISTS ai_pricing_versions (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  model TEXT NOT NULL,
  pricing_version TEXT NOT NULL,
  input_usd_micros_per_million INTEGER NOT NULL DEFAULT 0,
  cached_input_usd_micros_per_million INTEGER NOT NULL DEFAULT 0,
  output_usd_micros_per_million INTEGER NOT NULL DEFAULT 0,
  image_usd_micros INTEGER,
  audio_usd_micros INTEGER,
  effective_at TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  UNIQUE(provider,model,pricing_version)
);
CREATE INDEX IF NOT EXISTS idx_ai_pricing_active ON ai_pricing_versions(provider,model,active,effective_at DESC);
INSERT OR IGNORE INTO ai_pricing_versions(id,provider,model,pricing_version,input_usd_micros_per_million,cached_input_usd_micros_per_million,output_usd_micros_per_million,effective_at,active,created_at)
VALUES
 ('openai-gpt-4o-mini-2026-01','openai','gpt-4o-mini','2026-01',150000,60000,75000,CURRENT_TIMESTAMP,1,CURRENT_TIMESTAMP),
 ('openai-gpt-5-mini-2026-01','openai','gpt-5-mini','2026-01',250000,200000,25000,CURRENT_TIMESTAMP,1,CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS ai_credit_ledger (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  user_id TEXT,
  site_id TEXT,
  feature TEXT NOT NULL,
  wallet_type TEXT NOT NULL CHECK(wallet_type IN ('NORMAL','CHATBOT_RESERVED')),
  entry_type TEXT NOT NULL,
  amount NUMERIC(24,6) NOT NULL,
  balance_before NUMERIC(24,6) NOT NULL,
  balance_after NUMERIC(24,6) NOT NULL,
  provider TEXT,
  model TEXT,
  pricing_version TEXT,
  input_units INTEGER NOT NULL DEFAULT 0,
  cached_input_units INTEGER NOT NULL DEFAULT 0,
  output_units INTEGER NOT NULL DEFAULT 0,
  provider_cost_usd_micros INTEGER NOT NULL DEFAULT 0,
  customer_usage_value_usd_micros INTEGER NOT NULL DEFAULT 0,
  operation_id TEXT,
  request_id TEXT,
  reservation_id TEXT,
  idempotency_key TEXT,
  metadata_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  FOREIGN KEY(account_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_ai_credit_ledger_account_time ON ai_credit_ledger(account_id,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_credit_ledger_wallet_time ON ai_credit_ledger(wallet_type,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_credit_ledger_feature_time ON ai_credit_ledger(feature,created_at);
CREATE INDEX IF NOT EXISTS idx_ai_credit_ledger_site_time ON ai_credit_ledger(site_id,created_at);
CREATE UNIQUE INDEX IF NOT EXISTS idx_ai_credit_ledger_idempotency ON ai_credit_ledger(account_id,idempotency_key) WHERE idempotency_key IS NOT NULL;

-- Preserve the opening balances in the immutable ledger.  Existing monthly /
-- signup allowance, purchased top-up and chatbot protection are represented
-- separately so the migration does not reset or silently duplicate value.
INSERT OR IGNORE INTO ai_credit_ledger(
  id,account_id,user_id,feature,wallet_type,entry_type,amount,balance_before,
  balance_after,operation_id,metadata_json,created_at)
SELECT 'migration-041-plan-' || user_id,user_id,user_id,'PLAN_ALLOCATION','NORMAL',
  'PLAN_ALLOCATION',normal_allocation,0,normal_allocation,'migration-041',
  '{"source":"migration_041"}',CURRENT_TIMESTAMP
FROM credit_wallets
WHERE normal_allocation > 0;
INSERT OR IGNORE INTO ai_credit_ledger(
  id,account_id,user_id,feature,wallet_type,entry_type,amount,balance_before,
  balance_after,operation_id,metadata_json,created_at)
SELECT 'migration-041-purchase-' || user_id,user_id,user_id,'PURCHASE','NORMAL',
  'PURCHASE',topup_remaining,normal_allocation,normal_balance,'migration-041',
  '{"source":"migration_041","credit_type":"ai"}',CURRENT_TIMESTAMP
FROM credit_wallets
WHERE topup_remaining > 0;
INSERT OR IGNORE INTO ai_credit_ledger(
  id,account_id,user_id,feature,wallet_type,entry_type,amount,balance_before,
  balance_after,operation_id,metadata_json,created_at)
SELECT 'migration-041-reserve-' || user_id,user_id,user_id,
  'CHATBOT_RESERVE_ALLOCATION','CHATBOT_RESERVED','CHATBOT_RESERVE_ALLOCATION',
  chatbot_reserved_balance,0,chatbot_reserved_balance,'migration-041',
  '{"source":"migration_041"}',CURRENT_TIMESTAMP
FROM credit_wallets
WHERE chatbot_reserved_balance > 0;

CREATE TABLE IF NOT EXISTS ai_credit_reservations (
  id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  user_id TEXT,
  site_id TEXT,
  feature TEXT NOT NULL,
  wallet_type TEXT NOT NULL CHECK(wallet_type IN ('NORMAL','CHATBOT_RESERVED')),
  requested_amount NUMERIC(24,6) NOT NULL,
  settled_amount NUMERIC(24,6) NOT NULL DEFAULT 0,
  released_amount NUMERIC(24,6) NOT NULL DEFAULT 0,
  status TEXT NOT NULL CHECK(status IN ('RESERVED','SETTLED','RELEASED','EXPIRED')),
  operation_id TEXT NOT NULL,
  request_id TEXT NOT NULL,
  idempotency_key TEXT,
  provider TEXT,
  model TEXT,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  settled_at TEXT,
  released_at TEXT,
  FOREIGN KEY(account_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL,
  UNIQUE(account_id,idempotency_key)
);
CREATE INDEX IF NOT EXISTS idx_ai_credit_reservations_account_status ON ai_credit_reservations(account_id,status);
CREATE INDEX IF NOT EXISTS idx_ai_credit_reservations_operation ON ai_credit_reservations(operation_id);
CREATE INDEX IF NOT EXISTS idx_ai_credit_reservations_expiry ON ai_credit_reservations(status,expires_at);

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('ai_credits_per_usd','100',CURRENT_TIMESTAMP),
 ('ai_cost_multiplier','1',CURRENT_TIMESTAMP),
 ('ai_credit_precision','6',CURRENT_TIMESTAMP),
 ('ai_reservation_ttl_seconds','900',CURRENT_TIMESTAMP),
 ('ai_chatbot_daily_credit_limit','50',CURRENT_TIMESTAMP),
 ('ai_chatbot_monthly_credit_limit','1000',CURRENT_TIMESTAMP),
 ('ai_chatbot_ip_message_limit','120',CURRENT_TIMESTAMP),
 ('ai_chatbot_session_message_limit','30',CURRENT_TIMESTAMP),
 ('ai_chatbot_site_hourly_limit','180',CURRENT_TIMESTAMP),
 ('ai_chatbot_input_char_limit','2000',CURRENT_TIMESTAMP),
 ('ai_chatbot_output_token_limit','350',CURRENT_TIMESTAMP),
 ('ai_creator_input_token_limit','20000',CURRENT_TIMESTAMP),
 ('ai_editor_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_sitewide_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_assistant_input_token_limit','30000',CURRENT_TIMESTAMP),
 ('ai_provider_input_token_cap','100000',CURRENT_TIMESTAMP),
 ('ai_provider_output_token_cap','20000',CURRENT_TIMESTAMP);
