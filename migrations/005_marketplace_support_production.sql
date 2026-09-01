-- Production hardening, configurable AI economics, freelancer marketplace and support messaging.
ALTER TABLE plan_configs ADD COLUMN signup_bonus_credits INTEGER NOT NULL DEFAULT 5;
ALTER TABLE plan_configs ADD COLUMN ai_site_cost INTEGER NOT NULL DEFAULT 5;
ALTER TABLE plan_configs ADD COLUMN ai_edit_cost INTEGER NOT NULL DEFAULT 2;

ALTER TABLE sites ADD COLUMN draft_structure_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE sites ADD COLUMN published_snapshot_json TEXT;
ALTER TABLE sites ADD COLUMN published_structure_json TEXT;

ALTER TABLE freelancer_profiles ADD COLUMN full_name TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN slug TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN profile_photo_url TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN description TEXT NOT NULL DEFAULT '';
ALTER TABLE freelancer_profiles ADD COLUMN skills_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE freelancer_profiles ADD COLUMN services_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE freelancer_profiles ADD COLUMN years_experience INTEGER NOT NULL DEFAULT 0;
ALTER TABLE freelancer_profiles ADD COLUMN starting_price_minor INTEGER NOT NULL DEFAULT 0;
ALTER TABLE freelancer_profiles ADD COLUMN currency TEXT NOT NULL DEFAULT 'USD';
ALTER TABLE freelancer_profiles ADD COLUMN location TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN timezone TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN submitted_at TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN approved_at TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN moderated_by TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN rejection_reason TEXT;
ALTER TABLE freelancer_profiles ADD COLUMN outbound_click_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE freelancer_profiles ADD COLUMN enquiry_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE freelancer_profiles ADD COLUMN spam_count INTEGER NOT NULL DEFAULT 0;

UPDATE freelancer_profiles SET status='APPROVED', submitted_at=COALESCE(submitted_at,created_at), approved_at=COALESCE(approved_at,created_at), slug=COALESCE(slug, lower(replace(display_name,' ','-'))) WHERE status='ACTIVE';

CREATE UNIQUE INDEX IF NOT EXISTS idx_freelancer_slug ON freelancer_profiles(slug) WHERE slug IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_freelancer_status ON freelancer_profiles(status,created_at);

CREATE TABLE IF NOT EXISTS freelancer_external_links (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  platform TEXT NOT NULL,
  url TEXT NOT NULL,
  hostname TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(freelancer_id,platform,url),
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_freelancer_links_owner ON freelancer_external_links(freelancer_id);

CREATE TABLE IF NOT EXISTS freelancer_outbound_clicks (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  platform TEXT NOT NULL,
  link_id TEXT,
  request_hash TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(link_id) REFERENCES freelancer_external_links(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_freelancer_clicks_owner ON freelancer_outbound_clicks(freelancer_id,created_at);

CREATE TABLE IF NOT EXISTS freelancer_leads (
  id TEXT PRIMARY KEY,
  freelancer_id TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  company TEXT,
  website_type TEXT NOT NULL,
  enquiry_summary TEXT NOT NULL,
  budget TEXT,
  preferred_contact_method TEXT,
  status TEXT NOT NULL DEFAULT 'SENT',
  idempotency_key TEXT,
  request_hash TEXT,
  notification_sent_at TEXT,
  created_at TEXT NOT NULL,
  UNIQUE(freelancer_id,idempotency_key),
  FOREIGN KEY(freelancer_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_freelancer_leads_owner ON freelancer_leads(freelancer_id,created_at);
CREATE INDEX IF NOT EXISTS idx_freelancer_leads_email ON freelancer_leads(customer_email,created_at);

CREATE TABLE IF NOT EXISTS rate_limit_buckets (
  bucket_key TEXT PRIMARY KEY,
  window_started INTEGER NOT NULL,
  request_count INTEGER NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS support_conversations (
  id TEXT PRIMARY KEY,
  reference_code TEXT NOT NULL UNIQUE,
  user_id TEXT NOT NULL,
  website_id TEXT,
  subject TEXT NOT NULL,
  category TEXT,
  status TEXT NOT NULL DEFAULT 'WAITING_ON_SUPPORT',
  priority TEXT NOT NULL DEFAULT 'NORMAL',
  assigned_admin_id TEXT,
  user_last_read_at TEXT,
  admin_last_read_at TEXT,
  last_user_email_notified_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  resolved_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(website_id) REFERENCES sites(id) ON DELETE SET NULL,
  FOREIGN KEY(assigned_admin_id) REFERENCES users(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_support_user ON support_conversations(user_id,updated_at);
CREATE INDEX IF NOT EXISTS idx_support_status ON support_conversations(status,updated_at);
CREATE INDEX IF NOT EXISTS idx_support_assignee ON support_conversations(assigned_admin_id,status);

CREATE TABLE IF NOT EXISTS support_messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL,
  sender_user_id TEXT,
  sender_admin_id TEXT,
  body TEXT NOT NULL,
  is_internal INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  edited_at TEXT,
  FOREIGN KEY(conversation_id) REFERENCES support_conversations(id) ON DELETE CASCADE,
  FOREIGN KEY(sender_user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY(sender_admin_id) REFERENCES users(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_support_messages_thread ON support_messages(conversation_id,created_at);

CREATE TABLE IF NOT EXISTS source_export_orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  amount_minor INTEGER NOT NULL,
  currency TEXT NOT NULL,
  provider_order_id TEXT NOT NULL UNIQUE,
  provider_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'CREATED',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS source_export_entitlements (
  user_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  order_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY(user_id,site_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(order_id) REFERENCES source_export_orders(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS appointment_settings (
  site_id TEXT PRIMARY KEY,
  timezone TEXT NOT NULL DEFAULT 'UTC',
  weekdays_json TEXT NOT NULL DEFAULT '[1,2,3,4,5]',
  start_hour INTEGER NOT NULL DEFAULT 9,
  end_hour INTEGER NOT NULL DEFAULT 17,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  buffer_minutes INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS analytics_events (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  session_hash TEXT,
  path TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_analytics_site_time ON analytics_events(site_id,created_at);

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('source_export_usd_minor','9900',CURRENT_TIMESTAMP),
 ('source_export_inr_minor','829900',CURRENT_TIMESTAMP);
