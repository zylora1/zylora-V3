# Zylora V4 canary and rollback report

The regression `test_v4_canary_snapshot_is_immutable_and_legacy_rollback_is_proven` passes. It proves legacy publication, V4 canary selection, immutable V4 snapshot serving, draft non-leakage, and rollback to the preserved legacy snapshot. Global V4 activation remains gated by the final audit's blocked infrastructure/provider checks.
