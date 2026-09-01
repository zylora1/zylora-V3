ALTER TABLE users ADD COLUMN email_verified INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN google_sub TEXT;
ALTER TABLE users ADD COLUMN updated_at TEXT;
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_google_sub ON users(google_sub) WHERE google_sub IS NOT NULL;

CREATE TABLE IF NOT EXISTS auth_tokens (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  purpose TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TEXT NOT NULL,
  consumed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_auth_tokens_user_purpose ON auth_tokens(user_id, purpose, consumed);

CREATE TABLE IF NOT EXISTS oauth_states (
  state TEXT PRIMARY KEY,
  code_verifier TEXT NOT NULL,
  redirect_to TEXT NOT NULL DEFAULT '/dashboard',
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS plan_configs (
  plan TEXT PRIMARY KEY,
  public_name TEXT NOT NULL,
  price_inr_minor INTEGER NOT NULL DEFAULT 0,
  price_usd_minor INTEGER NOT NULL DEFAULT 0,
  site_limit INTEGER NOT NULL,
  page_limit INTEGER NOT NULL,
  ai_credits INTEGER NOT NULL,
  contact_only INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);
INSERT OR IGNORE INTO plan_configs(plan,public_name,price_inr_minor,price_usd_minor,site_limit,page_limit,ai_credits,contact_only,updated_at) VALUES
 ('FREE','Free',0,0,2,2,15,0,CURRENT_TIMESTAMP),
 ('STARTER','Starter',99900,900,5,5,100,0,CURRENT_TIMESTAMP),
 ('GROWTH','Growth',199900,1900,8,8,500,0,CURRENT_TIMESTAMP),
 ('PRO','Managed by experts',0,0,10,10,1000,1,CURRENT_TIMESTAMP);

CREATE TABLE IF NOT EXISTS custom_domains (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  hostname TEXT NOT NULL UNIQUE,
  provider TEXT NOT NULL,
  provider_hostname_id TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING',
  ssl_status TEXT NOT NULL DEFAULT 'PENDING',
  cname_target TEXT,
  verification_json TEXT,
  last_error TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_domains_site ON custom_domains(site_id);

CREATE TABLE IF NOT EXISTS ownership_transfers (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  from_user_id TEXT NOT NULL,
  to_email TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'PENDING',
  expires_at TEXT NOT NULL,
  accepted_at TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(from_user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY,
  site_id TEXT,
  author_user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'DRAFT',
  seo_title TEXT,
  seo_description TEXT,
  published_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(author_user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_blog_site_slug ON blog_posts(COALESCE(site_id,'__PLATFORM__'), slug);

CREATE TABLE IF NOT EXISTS pro_leads (
  id TEXT PRIMARY KEY,
  lead_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  website_type TEXT NOT NULL,
  preferred_contact_time TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  referred_at TEXT,
  closed_at TEXT,
  amount_received_minor INTEGER,
  currency TEXT,
  internal_notes TEXT
);

CREATE TABLE IF NOT EXISTS razorpay_orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  target_plan TEXT NOT NULL,
  amount_minor INTEGER NOT NULL,
  currency TEXT NOT NULL,
  provider_order_id TEXT NOT NULL UNIQUE,
  provider_payment_id TEXT,
  provider_signature TEXT,
  status TEXT NOT NULL DEFAULT 'CREATED',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS webhook_events (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  event_type TEXT NOT NULL,
  received_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS system_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('admin_notification_email','admin@example.com',CURRENT_TIMESTAMP),
 ('public_signup_enabled','true',CURRENT_TIMESTAMP);
