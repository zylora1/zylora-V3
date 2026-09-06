-- Meter provider-backed Sales Assistant usage against the owning account.
-- The application resolves this value from system_settings and uses it as the
-- single USD-microcost-to-credit conversion unit.
INSERT OR IGNORE INTO system_settings(key,value,updated_at)
VALUES ('ai_credit_usd_micros','10000',CURRENT_TIMESTAMP);
