from pathlib import Path

from scripts.release_context_report import classify_path, summarize_tree


ROOT = Path(__file__).resolve().parents[1]


def test_ignore_rules_cover_all_generated_release_contexts():
    railwayignore = (ROOT / ".railwayignore").read_text(encoding="utf-8")
    dockerignore = (ROOT / ".dockerignore").read_text(encoding="utf-8")

    assert "release_context*/" in railwayignore
    assert "release_context*/" in dockerignore


def test_classify_path_distinguishes_runtime_source_and_development_files():
    reachable = {"template_projects/demo/assets/source/src/hero.jpg"}

    assert classify_path("app/main.py") == "RUNTIME_REQUIRED"
    assert classify_path("requirements-prod.txt") == "BUILD_REQUIRED"
    assert classify_path("tests/test_api.py") == "TEST_ONLY"
    assert classify_path("template_projects/demo/assets/source/src/hero.jpg", reachable) == "RUNTIME_REQUIRED"
    assert classify_path("template_projects/demo/assets/source/src/unused.jpg", reachable) == "SOURCE_REQUIRED"
    assert classify_path(".pytest_cache/v/cache/lastfailed") == "DEVELOPMENT_ONLY"


def test_summarize_tree_reports_bytes_by_classification(tmp_path):
    (tmp_path / "app").mkdir()
    (tmp_path / "tests").mkdir()
    (tmp_path / "app" / "main.py").write_bytes(b"runtime")
    (tmp_path / "tests" / "test_api.py").write_bytes(b"tests")

    summary = summarize_tree(tmp_path)

    assert summary["total_bytes"] == len(b"runtime") + len(b"tests")
    assert summary["by_classification"]["RUNTIME_REQUIRED"] == len(b"runtime")
    assert summary["by_classification"]["TEST_ONLY"] == len(b"tests")
