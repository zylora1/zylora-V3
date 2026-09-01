-- 2026-08-26: the public template catalogue is intentionally empty.
-- Remove any previous freelancer template-submission records so no historical
-- template can reappear while the catalogue is being rebuilt from zero.
DELETE FROM freelancer_template_submissions;
