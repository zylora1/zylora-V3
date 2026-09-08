-- Correct the USD-microdollar-per-million-token seed values.  Historical
-- pricing rows are versioned; this only repairs the initial catalogue before
-- it is used for customer accounting.
UPDATE ai_pricing_versions SET cached_input_usd_micros_per_million=75000,
  output_usd_micros_per_million=600000 WHERE provider='openai' AND model='gpt-4o-mini' AND pricing_version='2026-01';
UPDATE ai_pricing_versions SET cached_input_usd_micros_per_million=25000,
  output_usd_micros_per_million=2000000 WHERE provider='openai' AND model='gpt-5-mini' AND pricing_version='2026-01';
