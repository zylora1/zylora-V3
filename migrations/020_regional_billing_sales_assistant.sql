-- Single regional Zylora paid entitlement + unified AI Sales Assistant conversion system.
-- Additive/backward-compatible: legacy STARTER/GROWTH rows and orders remain intact.

INSERT OR IGNORE INTO plan_configs(plan,public_name,price_inr_minor,price_usd_minor,site_limit,page_limit,ai_credits,lead_credits,signup_bonus_credits,ai_site_cost,ai_edit_cost,contact_only,updated_at)
VALUES ('ZYLORA','Zylora',79900,900,10,10,300,300,5,5,2,0,CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS billing_profiles (
  user_id TEXT PRIMARY KEY,
  country_code TEXT,
  country_source TEXT,
  country_verified INTEGER NOT NULL DEFAULT 0,
  previous_verified_country_code TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  product TEXT NOT NULL DEFAULT 'ZYLORA',
  billing_region TEXT NOT NULL,
  billing_currency TEXT NOT NULL,
  billing_amount_minor INTEGER NOT NULL,
  billing_country_code TEXT,
  country_verified INTEGER NOT NULL DEFAULT 0,
  provider TEXT NOT NULL,
  provider_plan_id TEXT,
  provider_subscription_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'CREATED',
  current_period_start TEXT,
  current_period_end TEXT,
  cancel_at_period_end INTEGER NOT NULL DEFAULT 0,
  legacy_plan TEXT,
  idempotency_key TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_subscriptions_user_idem ON subscriptions(user_id,idempotency_key) WHERE idempotency_key IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_status ON subscriptions(user_id,status,updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_subscriptions_provider ON subscriptions(provider,provider_subscription_id);

CREATE TABLE IF NOT EXISTS sales_assistant_configs (
  site_id TEXT PRIMARY KEY,
  enabled INTEGER NOT NULL DEFAULT 1,
  tone TEXT NOT NULL DEFAULT 'FRIENDLY',
  primary_goal TEXT NOT NULL DEFAULT 'GET_ENQUIRIES',
  proactive_prompts INTEGER NOT NULL DEFAULT 1,
  qualification_fields_json TEXT NOT NULL DEFAULT '[]',
  contact_collection TEXT NOT NULL DEFAULT 'BOTH',
  human_handoff INTEGER NOT NULL DEFAULT 1,
  whatsapp_handoff INTEGER NOT NULL DEFAULT 1,
  appointment_booking INTEGER NOT NULL DEFAULT 1,
  use_business_profile INTEGER NOT NULL DEFAULT 1,
  use_published_site INTEGER NOT NULL DEFAULT 1,
  use_approved_knowledge INTEGER NOT NULL DEFAULT 1,
  restricted_topics_json TEXT NOT NULL DEFAULT '[]',
  custom_instructions TEXT NOT NULL DEFAULT '',
  config_revision INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS assistant_conversations (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  visitor_id TEXT,
  test_mode INTEGER NOT NULL DEFAULT 0,
  stage TEXT NOT NULL DEFAULT 'DISCOVER',
  intents_json TEXT NOT NULL DEFAULT '[]',
  qualification_json TEXT NOT NULL DEFAULT '{}',
  summary TEXT,
  lead_id TEXT,
  appointment_id TEXT,
  page_url TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  model_version TEXT,
  prompt_version TEXT NOT NULL DEFAULT 'sales-assistant-v1',
  tool_schema_version TEXT NOT NULL DEFAULT '1',
  business_profile_revision TEXT,
  published_site_revision TEXT,
  assistant_config_revision INTEGER NOT NULL DEFAULT 1,
  last_activity_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(site_id,session_id,test_mode),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_assistant_conversations_site_time ON assistant_conversations(site_id,last_activity_at DESC);

CREATE TABLE IF NOT EXISTS assistant_messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  intent_json TEXT NOT NULL DEFAULT '[]',
  tool_calls_json TEXT NOT NULL DEFAULT '[]',
  token_input INTEGER NOT NULL DEFAULT 0,
  token_output INTEGER NOT NULL DEFAULT 0,
  estimated_cost_micros INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(conversation_id) REFERENCES assistant_conversations(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_assistant_messages_conversation ON assistant_messages(conversation_id,created_at);

CREATE TABLE IF NOT EXISTS assistant_usage (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  conversation_id TEXT,
  usage_unit TEXT NOT NULL DEFAULT 'MESSAGE',
  units INTEGER NOT NULL DEFAULT 1,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  estimated_cost_micros INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(conversation_id) REFERENCES assistant_conversations(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_assistant_usage_site_time ON assistant_usage(site_id,created_at DESC);

ALTER TABLE leads ADD COLUMN status TEXT NOT NULL DEFAULT 'NEW';
ALTER TABLE leads ADD COLUMN session_id TEXT;
ALTER TABLE leads ADD COLUMN visitor_id TEXT;
ALTER TABLE leads ADD COLUMN company TEXT;
ALTER TABLE leads ADD COLUMN intent TEXT;
ALTER TABLE leads ADD COLUMN service_interest TEXT;
ALTER TABLE leads ADD COLUMN budget TEXT;
ALTER TABLE leads ADD COLUMN location TEXT;
ALTER TABLE leads ADD COLUMN preferred_date TEXT;
ALTER TABLE leads ADD COLUMN preferred_time TEXT;
ALTER TABLE leads ADD COLUMN qualification_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE leads ADD COLUMN lead_score INTEGER NOT NULL DEFAULT 0;
ALTER TABLE leads ADD COLUMN lead_temperature TEXT;
ALTER TABLE leads ADD COLUMN score_reasons_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE leads ADD COLUMN conversation_id TEXT;
ALTER TABLE leads ADD COLUMN appointment_id TEXT;
ALTER TABLE leads ADD COLUMN summary TEXT;
ALTER TABLE leads ADD COLUMN page_url TEXT;
ALTER TABLE leads ADD COLUMN utm_source TEXT;
ALTER TABLE leads ADD COLUMN utm_medium TEXT;
ALTER TABLE leads ADD COLUMN utm_campaign TEXT;
ALTER TABLE leads ADD COLUMN referrer TEXT;
ALTER TABLE leads ADD COLUMN updated_at TEXT;
CREATE INDEX IF NOT EXISTS idx_leads_site_status_time ON leads(site_id,status,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_site_source_time ON leads(site_id,source,created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_conversation ON leads(conversation_id);
CREATE INDEX IF NOT EXISTS idx_leads_session ON leads(site_id,session_id);

ALTER TABLE appointments ADD COLUMN lead_id TEXT;
ALTER TABLE appointments ADD COLUMN conversation_id TEXT;
CREATE INDEX IF NOT EXISTS idx_appointments_lead ON appointments(lead_id);
CREATE INDEX IF NOT EXISTS idx_appointments_conversation ON appointments(conversation_id);

ALTER TABLE sites ADD COLUMN primary_conversion_goal TEXT NOT NULL DEFAULT 'GET_ENQUIRIES';

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('zylora_india_price_minor','79900',CURRENT_TIMESTAMP),
 ('zylora_international_price_minor','900',CURRENT_TIMESTAMP),
 ('zylora_india_currency','INR',CURRENT_TIMESTAMP),
 ('zylora_international_currency','USD',CURRENT_TIMESTAMP),
 ('zylora_india_provider_plan_id','',CURRENT_TIMESTAMP),
 ('zylora_international_provider_plan_id','',CURRENT_TIMESTAMP),
 ('assistant_included_messages_monthly','500',CURRENT_TIMESTAMP),
 ('assistant_session_message_limit','30',CURRENT_TIMESTAMP),
 ('assistant_site_hourly_limit','180',CURRENT_TIMESTAMP),
 ('assistant_input_char_limit','2000',CURRENT_TIMESTAMP),
 ('assistant_output_token_limit','350',CURRENT_TIMESTAMP),
 ('assistant_retention_days','180',CURRENT_TIMESTAMP);
