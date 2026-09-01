-- Restore the public Free/Starter/Growth/Pro catalogue while retaining legacy ZYLORA rows.
-- Regional prices are independent policy values, not FX conversions.
UPDATE plan_configs SET public_name='Free',price_inr_minor=0,price_usd_minor=0,page_limit=2,ai_credits=15,lead_credits=20,contact_only=0,updated_at=CURRENT_TIMESTAMP WHERE plan='FREE';
UPDATE plan_configs SET public_name='Starter',price_inr_minor=79900,price_usd_minor=900,page_limit=5,ai_credits=100,lead_credits=100,contact_only=0,updated_at=CURRENT_TIMESTAMP WHERE plan='STARTER';
UPDATE plan_configs SET public_name='Growth',price_inr_minor=179900,price_usd_minor=1900,page_limit=8,ai_credits=300,lead_credits=300,contact_only=0,updated_at=CURRENT_TIMESTAMP WHERE plan='GROWTH';
UPDATE plan_configs SET public_name='Managed by experts',price_inr_minor=0,price_usd_minor=0,page_limit=10,ai_credits=0,lead_credits=0,signup_bonus_credits=0,ai_site_cost=0,ai_edit_cost=0,contact_only=1,updated_at=CURRENT_TIMESTAMP WHERE plan='PRO';
UPDATE plan_configs SET public_name='Legacy Zylora',updated_at=CURRENT_TIMESTAMP WHERE plan='ZYLORA';

INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
 ('starter_india_provider_plan_id','',CURRENT_TIMESTAMP),
 ('starter_international_provider_plan_id','',CURRENT_TIMESTAMP),
 ('growth_india_provider_plan_id','',CURRENT_TIMESTAMP),
 ('growth_international_provider_plan_id','',CURRENT_TIMESTAMP);

-- Commercially unlimited means no monthly Assistant entitlement quota. Session/hourly
-- guardrails remain active as abuse/service-protection controls and do not consume credits.
UPDATE system_settings SET value='0',updated_at=CURRENT_TIMESTAMP WHERE key='assistant_included_messages_monthly';
