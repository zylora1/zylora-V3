-- Migration 038: Dual-currency billing audit log and payment history improvements.
-- Additive only: no existing columns, rows, or constraints are removed.
-- Compatible with both SQLite (local/test) and PostgreSQL (production).

-- 1. Plan price audit log: records every admin change to plan pricing.
--    Allows auditing of pricing changes and verification of grandfathering.
CREATE TABLE IF NOT EXISTS plan_price_audit_log (
  id TEXT PRIMARY KEY,
  plan TEXT NOT NULL,
  changed_by_user_id TEXT,
  field TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  billing_currency TEXT,
  note TEXT,
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_plan_price_audit_plan_time ON plan_price_audit_log(plan, created_at DESC);

-- 2. Add payment_currency and payment_amount_minor to billing_events so that
--    payment history can be displayed in the original transaction currency,
--    not just in the plan's current configured price.
ALTER TABLE billing_events ADD COLUMN payment_currency TEXT;
ALTER TABLE billing_events ADD COLUMN payment_amount_minor INTEGER;

-- 3. Add display_billing_currency to subscriptions for dashboard display.
--    This is always set from billing_currency at creation and is never updated,
--    making it safe to use for rendering the customer's billing display.
ALTER TABLE subscriptions ADD COLUMN display_billing_currency TEXT;
UPDATE subscriptions SET display_billing_currency = billing_currency WHERE display_billing_currency IS NULL;

-- 4. Backfill billing_events payment currency from subscriptions where joinable.
--    This links existing billing events to their subscription's locked currency
--    so historical billing history displays correctly.
UPDATE billing_events
SET
  payment_currency = (
    SELECT s.billing_currency
    FROM subscriptions s
    WHERE s.user_id = billing_events.user_id
      AND s.status IN ('ACTIVE', 'CANCELLED', 'COMPLETED', 'REPLACED')
      AND s.created_at <= billing_events.created_at
    ORDER BY s.created_at DESC
    LIMIT 1
  ),
  payment_amount_minor = (
    SELECT s.billing_amount_minor
    FROM subscriptions s
    WHERE s.user_id = billing_events.user_id
      AND s.status IN ('ACTIVE', 'CANCELLED', 'COMPLETED', 'REPLACED')
      AND s.created_at <= billing_events.created_at
    ORDER BY s.created_at DESC
    LIMIT 1
  )
WHERE payment_currency IS NULL
  AND to_plan IN ('STARTER', 'GROWTH', 'ZYLORA');

-- 5. Index for fast billing history queries by user and date.
CREATE INDEX IF NOT EXISTS idx_billing_events_user_time ON billing_events(user_id, created_at DESC);

-- 6. System settings for price display policy note (informational).
INSERT OR IGNORE INTO system_settings(key,value,updated_at) VALUES
  ('billing_inr_display_note','India regional price · INR billing',CURRENT_TIMESTAMP),
  ('billing_usd_display_note','International regional price · USD billing',CURRENT_TIMESTAMP),
  ('billing_price_lock_policy','Existing subscriptions are never automatically repriced due to exchange rate changes or plan price updates. Price changes apply to new subscriptions only.',CURRENT_TIMESTAMP);
