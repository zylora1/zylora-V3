CREATE TABLE IF NOT EXISTS cms_collections (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  ai_assistant_enabled INTEGER NOT NULL DEFAULT 0,
  schema_revision INTEGER NOT NULL DEFAULT 1,
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(site_id,slug),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(created_by) REFERENCES users(id) ON DELETE RESTRICT,
  FOREIGN KEY(updated_by) REFERENCES users(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_cms_collections_site ON cms_collections(site_id,status,updated_at DESC);

CREATE TABLE IF NOT EXISTS cms_fields (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  field_key TEXT NOT NULL,
  name TEXT NOT NULL,
  field_type TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  required INTEGER NOT NULL DEFAULT 0,
  unique_value INTEGER NOT NULL DEFAULT 0,
  default_json TEXT,
  validation_json TEXT NOT NULL DEFAULT '{}',
  help_text TEXT NOT NULL DEFAULT '',
  reference_collection_id TEXT,
  deletion_behavior TEXT NOT NULL DEFAULT 'RESTRICT',
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(collection_id,field_key),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE CASCADE,
  FOREIGN KEY(reference_collection_id) REFERENCES cms_collections(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_cms_fields_collection ON cms_fields(collection_id,position,id);

CREATE TABLE IF NOT EXISTS cms_items (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  slug TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'DRAFT',
  values_json TEXT NOT NULL DEFAULT '{}',
  revision INTEGER NOT NULL DEFAULT 1,
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  published_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(collection_id,slug),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_cms_items_collection_status ON cms_items(collection_id,status,updated_at DESC,id);
CREATE INDEX IF NOT EXISTS idx_cms_items_site_status ON cms_items(site_id,status,updated_at DESC);

CREATE TABLE IF NOT EXISTS cms_item_values (
  item_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  field_id TEXT NOT NULL,
  value_text TEXT,
  value_number REAL,
  value_boolean INTEGER,
  value_datetime TEXT,
  position INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(item_id,field_id,position),
  FOREIGN KEY(item_id) REFERENCES cms_items(id) ON DELETE CASCADE,
  FOREIGN KEY(field_id) REFERENCES cms_fields(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_cms_values_text ON cms_item_values(collection_id,field_id,value_text);
CREATE INDEX IF NOT EXISTS idx_cms_values_number ON cms_item_values(collection_id,field_id,value_number);
CREATE INDEX IF NOT EXISTS idx_cms_values_boolean ON cms_item_values(collection_id,field_id,value_boolean);
CREATE INDEX IF NOT EXISTS idx_cms_values_datetime ON cms_item_values(collection_id,field_id,value_datetime);

CREATE TABLE IF NOT EXISTS cms_item_relations (
  source_item_id TEXT NOT NULL,
  source_field_id TEXT NOT NULL,
  target_item_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  position INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(source_item_id,source_field_id,target_item_id),
  FOREIGN KEY(source_item_id) REFERENCES cms_items(id) ON DELETE CASCADE,
  FOREIGN KEY(source_field_id) REFERENCES cms_fields(id) ON DELETE CASCADE,
  FOREIGN KEY(target_item_id) REFERENCES cms_items(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_cms_relations_target ON cms_item_relations(target_item_id,source_field_id);

CREATE TABLE IF NOT EXISTS cms_item_revisions (
  id TEXT PRIMARY KEY,
  item_id TEXT NOT NULL,
  site_id TEXT NOT NULL,
  revision INTEGER NOT NULL,
  action TEXT NOT NULL,
  snapshot_json TEXT NOT NULL,
  actor_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(item_id,revision),
  FOREIGN KEY(item_id) REFERENCES cms_items(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_cms_revisions_item ON cms_item_revisions(item_id,revision DESC);

CREATE TABLE IF NOT EXISTS cms_views (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  name TEXT NOT NULL,
  config_json TEXT NOT NULL DEFAULT '{}',
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(collection_id,name),
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cms_permissions (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT,
  principal_user_id TEXT NOT NULL,
  role TEXT NOT NULL,
  granted_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(site_id,collection_id,principal_user_id),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE CASCADE,
  FOREIGN KEY(principal_user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_cms_permissions_principal ON cms_permissions(principal_user_id,site_id);

CREATE TABLE IF NOT EXISTS cms_bindings (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  field_id TEXT,
  page_id TEXT NOT NULL,
  node_id TEXT NOT NULL,
  target_property TEXT NOT NULL,
  binding_kind TEXT NOT NULL DEFAULT 'FIELD',
  config_json TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(site_id,page_id,node_id,target_property),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE RESTRICT,
  FOREIGN KEY(field_id) REFERENCES cms_fields(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_cms_bindings_collection ON cms_bindings(site_id,collection_id,field_id);

CREATE TABLE IF NOT EXISTS cms_dynamic_pages (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  collection_id TEXT NOT NULL,
  page_id TEXT NOT NULL,
  page_kind TEXT NOT NULL DEFAULT 'ITEM',
  route_prefix TEXT NOT NULL,
  seo_json TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'DRAFT',
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(site_id,route_prefix,page_kind),
  FOREIGN KEY(site_id) REFERENCES sites(id) ON DELETE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES cms_collections(id) ON DELETE RESTRICT
);
CREATE INDEX IF NOT EXISTS idx_cms_dynamic_route ON cms_dynamic_pages(site_id,status,route_prefix);
