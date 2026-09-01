-- Repair entitlement drift created by the historical /billing/select Free downgrade path.
-- An ACTIVE paid subscription is authoritative until its cancellation/completion event.
UPDATE users
SET plan = (
      SELECT s.product
      FROM subscriptions s
      WHERE s.user_id=users.id
        AND s.status='ACTIVE'
        AND s.product IN ('STARTER','GROWTH','ZYLORA')
      ORDER BY s.updated_at DESC
      LIMIT 1
    ),
    plan_selected = 1,
    updated_at = CURRENT_TIMESTAMP
WHERE EXISTS (
    SELECT 1
    FROM subscriptions s
    WHERE s.user_id=users.id
      AND s.status='ACTIVE'
      AND s.product IN ('STARTER','GROWTH','ZYLORA')
)
AND upper(COALESCE(users.plan,'FREE')) != upper((
      SELECT s2.product
      FROM subscriptions s2
      WHERE s2.user_id=users.id
        AND s2.status='ACTIVE'
        AND s2.product IN ('STARTER','GROWTH','ZYLORA')
      ORDER BY s2.updated_at DESC
      LIMIT 1
));
