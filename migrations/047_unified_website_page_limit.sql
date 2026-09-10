-- V1 page capacity is shared by every plan and is not a pricing differentiator.
-- This is intentionally idempotent so upgraded databases converge safely.
UPDATE plan_configs SET page_limit=298,updated_at=CURRENT_TIMESTAMP
WHERE plan IN ('FREE','STARTER','GROWTH','PRO','ZYLORA');
