-- Phase 3: explicit per-project engine selection. Native remains the safe default.
ALTER TABLE sites ADD COLUMN studio_engine TEXT NOT NULL DEFAULT 'native';
ALTER TABLE sites ADD COLUMN code_workspace_id TEXT;
ALTER TABLE sites ADD COLUMN code_framework TEXT;
CREATE INDEX IF NOT EXISTS idx_sites_studio_engine ON sites(studio_engine);
