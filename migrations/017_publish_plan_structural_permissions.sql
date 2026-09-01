-- Publish-time plan selection and immutable structural baseline for Free reversion.
ALTER TABLE sites ADD COLUMN template_default_structural_snapshot_json TEXT NOT NULL DEFAULT '{}';
ALTER TABLE sites ADD COLUMN template_default_snapshot_created_at TEXT;
