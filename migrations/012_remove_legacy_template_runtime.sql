-- Legacy selectable templates were removed from the 2026-08-26 build.
-- Preserve existing user sites by moving them onto the prompt-derived runtime
-- instead of leaving rows pointing at deleted template projects.
UPDATE sites
SET template_slug='ai-runtime',
    origin='AI'
WHERE template_slug<>'ai-runtime' OR origin<>'AI';
