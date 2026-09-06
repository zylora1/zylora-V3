-- Zylora CRM Core Domain Migration (034_crm_core.sql)
-- Complete Normalized, Tenant-Safe CRM Schema

-- 1. Contacts
CREATE TABLE IF NOT EXISTS crm_contacts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  display_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  whatsapp_number TEXT,
  company_name TEXT,
  job_title TEXT,
  location TEXT,
  website TEXT,
  lifecycle_stage TEXT NOT NULL DEFAULT 'LEAD',
  lead_status TEXT NOT NULL DEFAULT 'NEW',
  lead_score INTEGER NOT NULL DEFAULT 0,
  source TEXT NOT NULL DEFAULT 'MANUAL',
  source_detail TEXT,
  assigned_owner_id TEXT,
  preferred_channel TEXT DEFAULT 'EMAIL',
  consent_metadata_json TEXT NOT NULL DEFAULT '{}',
  custom_fields_json TEXT NOT NULL DEFAULT '{}',
  notes TEXT,
  last_activity_at TEXT NOT NULL,
  last_contacted_at TEXT,
  next_follow_up_at TEXT,
  is_archived INTEGER NOT NULL DEFAULT 0,
  revision INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_archived ON crm_contacts(user_id, is_archived, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_email ON crm_contacts(user_id, lower(email));
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_phone ON crm_contacts(user_id, phone);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_lifecycle ON crm_contacts(user_id, lifecycle_stage);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_score ON crm_contacts(user_id, lead_score DESC);

-- 2. Companies
CREATE TABLE IF NOT EXISTS crm_companies (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  domain TEXT,
  industry TEXT,
  location TEXT,
  employee_size TEXT,
  website TEXT,
  assigned_owner_id TEXT,
  lifecycle_stage TEXT NOT NULL DEFAULT 'PROSPECT',
  total_deal_value REAL NOT NULL DEFAULT 0.0,
  custom_fields_json TEXT NOT NULL DEFAULT '{}',
  notes TEXT,
  is_archived INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_companies_user ON crm_companies(user_id, is_archived, name);

-- 3. Contact <-> Company Many-to-Many
CREATE TABLE IF NOT EXISTS crm_contact_companies (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT NOT NULL,
  company_id TEXT NOT NULL,
  role TEXT DEFAULT 'MEMBER',
  is_primary INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  UNIQUE(user_id, contact_id, company_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE,
  FOREIGN KEY(company_id) REFERENCES crm_companies(id) ON DELETE CASCADE
);

-- 4. Leads (Operational Lead Inbox)
CREATE TABLE IF NOT EXISTS crm_leads (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  site_id TEXT,
  contact_id TEXT NOT NULL,
  source TEXT NOT NULL,
  source_detail TEXT,
  status TEXT NOT NULL DEFAULT 'NEW',
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  summary TEXT,
  qualification_json TEXT NOT NULL DEFAULT '{}',
  lead_score INTEGER NOT NULL DEFAULT 0,
  lead_temperature TEXT DEFAULT 'WARM',
  score_reasons_json TEXT NOT NULL DEFAULT '[]',
  assigned_owner_id TEXT,
  session_id TEXT,
  conversation_id TEXT,
  appointment_id TEXT,
  deal_id TEXT,
  page_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  referrer TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE SET NULL,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_leads_user_status ON crm_leads(user_id, status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_leads_contact ON crm_leads(contact_id);

-- 5. Pipelines
CREATE TABLE IF NOT EXISTS crm_pipelines (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  is_default INTEGER NOT NULL DEFAULT 0,
  is_active INTEGER NOT NULL DEFAULT 1,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_pipelines_user ON crm_pipelines(user_id, is_active, position);

-- 6. Pipeline Stages
CREATE TABLE IF NOT EXISTS crm_pipeline_stages (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  pipeline_id TEXT NOT NULL,
  name TEXT NOT NULL,
  stage_order INTEGER NOT NULL DEFAULT 0,
  probability REAL NOT NULL DEFAULT 0.2,
  color TEXT NOT NULL DEFAULT '#5B5CF0',
  stage_type TEXT NOT NULL DEFAULT 'OPEN',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(pipeline_id) REFERENCES crm_pipelines(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_stages_pipeline ON crm_pipeline_stages(pipeline_id, stage_order);

-- 7. Deals
CREATE TABLE IF NOT EXISTS crm_deals (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT,
  company_id TEXT,
  pipeline_id TEXT NOT NULL,
  stage_id TEXT NOT NULL,
  name TEXT NOT NULL,
  amount REAL NOT NULL DEFAULT 0.0,
  currency TEXT NOT NULL DEFAULT 'INR',
  probability REAL NOT NULL DEFAULT 0.2,
  expected_close_date TEXT,
  assigned_owner_id TEXT,
  source TEXT NOT NULL DEFAULT 'WEBSITE',
  source_detail TEXT,
  status TEXT NOT NULL DEFAULT 'OPEN',
  lost_reason TEXT,
  notes TEXT,
  custom_fields_json TEXT NOT NULL DEFAULT '{}',
  is_archived INTEGER NOT NULL DEFAULT 0,
  revision INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE SET NULL,
  FOREIGN KEY(company_id) REFERENCES crm_companies(id) ON DELETE SET NULL,
  FOREIGN KEY(pipeline_id) REFERENCES crm_pipelines(id) ON DELETE RESTRICT,
  FOREIGN KEY(stage_id) REFERENCES crm_pipeline_stages(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_crm_deals_user_stage ON crm_deals(user_id, pipeline_id, stage_id, is_archived);
CREATE INDEX IF NOT EXISTS idx_crm_deals_contact ON crm_deals(contact_id);

-- 8. Deal <-> Contact Many-to-Many
CREATE TABLE IF NOT EXISTS crm_deal_contacts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  deal_id TEXT NOT NULL,
  contact_id TEXT NOT NULL,
  role TEXT DEFAULT 'DECISION_MAKER',
  is_primary INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  UNIQUE(user_id, deal_id, contact_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(deal_id) REFERENCES crm_deals(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE
);

-- 9. Deal Stage History
CREATE TABLE IF NOT EXISTS crm_deal_stage_history (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  deal_id TEXT NOT NULL,
  from_stage_id TEXT,
  to_stage_id TEXT NOT NULL,
  actor_id TEXT,
  actor_name TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(deal_id) REFERENCES crm_deals(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_deal_history_deal ON crm_deal_stage_history(deal_id, created_at DESC);

-- 10. Unified Activities Timeline
CREATE TABLE IF NOT EXISTS crm_activities (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT,
  company_id TEXT,
  deal_id TEXT,
  lead_id TEXT,
  activity_type TEXT NOT NULL,
  actor_id TEXT,
  actor_name TEXT,
  source TEXT,
  summary TEXT NOT NULL,
  metadata_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_activities_contact ON crm_activities(contact_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_activities_deal ON crm_activities(deal_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_activities_user_type ON crm_activities(user_id, activity_type, created_at DESC);

-- 11. Notes
CREATE TABLE IF NOT EXISTS crm_notes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT,
  company_id TEXT,
  deal_id TEXT,
  lead_id TEXT,
  author_id TEXT NOT NULL,
  author_name TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_notes_contact ON crm_notes(contact_id, created_at DESC);

-- 12. Tasks
CREATE TABLE IF NOT EXISTS crm_tasks (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT,
  deal_id TEXT,
  assigned_owner_id TEXT,
  title TEXT NOT NULL,
  description TEXT,
  task_type TEXT NOT NULL DEFAULT 'FOLLOW_UP',
  priority TEXT NOT NULL DEFAULT 'MEDIUM',
  due_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'TODO',
  completed_at TEXT,
  completed_by TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE SET NULL,
  FOREIGN KEY(deal_id) REFERENCES crm_deals(id) ON DELETE SET NULL
);
CREATE INDEX IF NOT EXISTS idx_crm_tasks_user_status ON crm_tasks(user_id, status, due_date ASC);
CREATE INDEX IF NOT EXISTS idx_crm_tasks_contact ON crm_tasks(contact_id);

-- 13. Tags & Contact Tags
CREATE TABLE IF NOT EXISTS crm_tags (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#5B5CF0',
  created_at TEXT NOT NULL,
  UNIQUE(user_id, name),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_contact_tags (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  contact_id TEXT NOT NULL,
  tag_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(user_id, contact_id, tag_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE,
  FOREIGN KEY(tag_id) REFERENCES crm_tags(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_contact_tags_contact ON crm_contact_tags(contact_id);

-- 14. Custom Fields
CREATE TABLE IF NOT EXISTS crm_custom_fields (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'CONTACT',
  field_key TEXT NOT NULL,
  name TEXT NOT NULL,
  field_type TEXT NOT NULL DEFAULT 'TEXT',
  options_json TEXT NOT NULL DEFAULT '[]',
  is_required INTEGER NOT NULL DEFAULT 0,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id, entity_type, field_key),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_custom_field_values (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'CONTACT',
  entity_id TEXT NOT NULL,
  field_id TEXT NOT NULL,
  value_text TEXT,
  value_num REAL,
  value_bool INTEGER,
  value_date TEXT,
  value_json TEXT,
  updated_at TEXT NOT NULL,
  UNIQUE(user_id, entity_type, entity_id, field_id),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(field_id) REFERENCES crm_custom_fields(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_cf_values_entity ON crm_custom_field_values(entity_id);

-- 15. Segments
CREATE TABLE IF NOT EXISTS crm_segments (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  filters_json TEXT NOT NULL DEFAULT '[]',
  sort_json TEXT NOT NULL DEFAULT '{}',
  is_system INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_segments_user ON crm_segments(user_id, is_system);

-- 16. Saved Views
CREATE TABLE IF NOT EXISTS crm_saved_views (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'CONTACT',
  name TEXT NOT NULL,
  filters_json TEXT NOT NULL DEFAULT '[]',
  sort_json TEXT NOT NULL DEFAULT '{}',
  columns_json TEXT NOT NULL DEFAULT '[]',
  is_default INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_saved_views_user ON crm_saved_views(user_id, entity_type);

-- 17. Automations & Runs
CREATE TABLE IF NOT EXISTS crm_automations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  trigger_type TEXT NOT NULL,
  trigger_config_json TEXT NOT NULL DEFAULT '{}',
  conditions_json TEXT NOT NULL DEFAULT '[]',
  actions_json TEXT NOT NULL DEFAULT '[]',
  is_active INTEGER NOT NULL DEFAULT 1,
  execution_count INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_automations_user ON crm_automations(user_id, is_active, trigger_type);

CREATE TABLE IF NOT EXISTS crm_automation_runs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  automation_id TEXT NOT NULL,
  trigger_event TEXT NOT NULL,
  record_id TEXT NOT NULL,
  record_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'SUCCESS',
  steps_completed_json TEXT NOT NULL DEFAULT '[]',
  error_message TEXT,
  started_at TEXT NOT NULL,
  completed_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(automation_id) REFERENCES crm_automations(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_runs_automation ON crm_automation_runs(automation_id, started_at DESC);

-- 18. Sources
CREATE TABLE IF NOT EXISTS crm_sources (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  code TEXT NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'INBOUND',
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  UNIQUE(user_id, code),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 19. Owners / Sales Representatives
CREATE TABLE IF NOT EXISTS crm_owners (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'REP',
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  UNIQUE(user_id, email),
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 20. Import / Export Jobs
CREATE TABLE IF NOT EXISTS crm_import_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'CONTACT',
  status TEXT NOT NULL DEFAULT 'PENDING',
  total_rows INTEGER NOT NULL DEFAULT 0,
  imported_rows INTEGER NOT NULL DEFAULT 0,
  duplicate_rows INTEGER NOT NULL DEFAULT 0,
  failed_rows INTEGER NOT NULL DEFAULT 0,
  errors_json TEXT NOT NULL DEFAULT '[]',
  file_name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  completed_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_export_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL DEFAULT 'CONTACT',
  status TEXT NOT NULL DEFAULT 'COMPLETED',
  row_count INTEGER NOT NULL DEFAULT 0,
  file_path TEXT,
  created_at TEXT NOT NULL,
  completed_at TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 21. Merge & Audit Events
CREATE TABLE IF NOT EXISTS crm_merge_events (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  primary_contact_id TEXT NOT NULL,
  secondary_contact_id TEXT NOT NULL,
  merge_strategy_json TEXT NOT NULL DEFAULT '{}',
  actor_id TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS crm_audit_events (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  action TEXT NOT NULL,
  before_json TEXT,
  after_json TEXT,
  actor_id TEXT,
  actor_name TEXT,
  ip_address TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_crm_audit_entity ON crm_audit_events(entity_type, entity_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_crm_audit_user ON crm_audit_events(user_id, created_at DESC);
