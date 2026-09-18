from scripts.studio_performance_profile import REQUIRED_OPERATIONS, build_stress_document, validate_profile_result
from pathlib import Path


def test_profile_schema_covers_required_operations_and_metrics():
    result = {
        "requested_nodes": 500,
        "operations": {name: {"long_tasks": [], "p95_frame_ms": 16.7} for name in REQUIRED_OPERATIONS},
    }

    assert validate_profile_result(result) == []


def test_profile_schema_reports_missing_operation_metrics():
    result = {"requested_nodes": 50, "operations": {"drag": {"long_tasks": []}}}

    errors = validate_profile_result(result)

    assert "missing operation: resize" in errors
    assert "resize missing metric: p95_frame_ms" in errors


def test_stress_fixture_creates_requested_leaf_siblings():
    document = build_stress_document("profile-site", 500)
    section = document["pages"]["home"]["nodes"]["section_1"]

    assert len(section["children"]) == 500
    assert all(document["pages"]["home"]["nodes"][node_id]["parentId"] == "section_1" for node_id in section["children"])


def test_drag_snap_targets_are_cached_for_the_gesture():
    source = (Path(__file__).parents[1] / "studio" / "interactions" / "useDrag.ts").read_text(encoding="utf-8")

    assert "targets=latest.current.getTargets()" in source
    assert source.count("getTargets()") == 1


def test_profile_accepts_large_preloaded_tiers_without_double_counting_nodes():
    source = (Path(__file__).parents[1] / "scripts" / "studio_performance_profile.py").read_text(encoding="utf-8")

    assert '"--counts"' in source
    assert "The stress document already contains the requested number of nodes" in source
    assert 'page.get_by_test_id("canvas-workspace")' in source
