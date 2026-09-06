ALTER TABLE cms_dynamic_pages ADD COLUMN published_document_json TEXT;
ALTER TABLE cms_dynamic_pages ADD COLUMN revision INTEGER NOT NULL DEFAULT 1;
