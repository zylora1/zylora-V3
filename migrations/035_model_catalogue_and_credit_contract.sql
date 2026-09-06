-- Server-authoritative model configuration and the published credit contract.
-- Free includes exactly 20 AI credits; there is no hidden signup bonus.
UPDATE plan_configs SET ai_credits=20, signup_bonus_credits=0, updated_at=CURRENT_TIMESTAMP WHERE plan='FREE';
UPDATE plan_configs SET signup_bonus_credits=0, updated_at=CURRENT_TIMESTAMP WHERE plan IN ('STARTER','GROWTH','ZYLORA');
UPDATE credit_wallets SET monthly_remaining=monthly_remaining+signup_remaining, signup_remaining=0,
  lead_monthly_remaining=lead_monthly_remaining+lead_signup_remaining, lead_signup_remaining=0, updated_at=CURRENT_TIMESTAMP;
UPDATE users SET ai_credits=(SELECT monthly_remaining+signup_remaining+topup_remaining FROM credit_wallets WHERE credit_wallets.user_id=users.id),
  lead_credits=(SELECT lead_monthly_remaining+lead_signup_remaining+lead_topup_remaining FROM credit_wallets WHERE credit_wallets.user_id=users.id), updated_at=CURRENT_TIMESTAMP
  WHERE EXISTS (SELECT 1 FROM credit_wallets WHERE credit_wallets.user_id=users.id);
ALTER TABLE sales_assistant_configs ADD COLUMN model TEXT NOT NULL DEFAULT '';
