import sys
import atexit
import os
import shutil
import tempfile
from pathlib import Path
import pytest

ROOT=Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0,str(ROOT))


def pytest_ignore_collect(collection_path, config):
    if "test_penpot_" in collection_path.name:
        return True
    return False

# Keep the default local test run isolated from repository runtime data.  The
# media tests intentionally create many files; writing them under ``data/``
# makes root-level pytest discovery and SQLite prone to exhausting constrained
# Windows runners.  An explicitly supplied DATABASE_URL remains authoritative
# for PostgreSQL or other integration runs.
if not os.environ.get("DATABASE_URL"):
    _TEST_RUNTIME_DIR = Path(tempfile.mkdtemp(prefix="zylora-pytest-"))
    os.environ["DATABASE_URL"] = f"sqlite:///{_TEST_RUNTIME_DIR / 'zylora.db'}"
    os.environ.setdefault("MEDIA_STORAGE_DIR", str(_TEST_RUNTIME_DIR / "media"))

    @atexit.register
    def _cleanup_test_runtime() -> None:
        shutil.rmtree(_TEST_RUNTIME_DIR, ignore_errors=True)


def _reset_plan_configs():
    from sqlalchemy import text
    from app.db import SessionLocal, migrate, now_iso
    from app.plans import DEFAULTS
    migrate()
    with SessionLocal.begin() as db:
        for plan,cfg in DEFAULTS.items():
            vals={**cfg,'updated_at':now_iso()}
            db.execute(text('''UPDATE plan_configs SET public_name=:public_name,price_inr_minor=:price_inr_minor,price_usd_minor=:price_usd_minor,
                site_limit=:site_limit,page_limit=:page_limit,ai_credits=:ai_credits,lead_credits=:lead_credits,signup_bonus_credits=:signup_bonus_credits,
                ai_site_cost=:ai_site_cost,ai_edit_cost=:ai_edit_cost,chatbot_reserved_credits=:chatbot_reserved_credits,contact_only=:contact_only,updated_at=:updated_at WHERE plan=:plan'''),vals)


@pytest.fixture(autouse=True)
def isolate_live_plan_configuration():
    """Prevent one test's Super Admin plan mutation from contaminating another."""
    _reset_plan_configs()
    yield
    _reset_plan_configs()
