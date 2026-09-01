-- Explicit plan onboarding. Existing accounts remain selected; new account creation sets this to 0.
ALTER TABLE users ADD COLUMN plan_selected INTEGER NOT NULL DEFAULT 1;
