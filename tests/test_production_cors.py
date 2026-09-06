from app.main import _configured_cors_origins
from app.security import session_cookie_domain
from app.config import settings


def test_production_cors_allows_explicit_dashboard_origin_without_wildcard(monkeypatch):
    monkeypatch.setattr(settings, 'app_env', 'production')
    monkeypatch.setattr(settings, 'app_url', 'https://zylora-api-production.up.railway.app')
    monkeypatch.setattr(settings, 'super_admin_app_url', 'https://zylora-admin-production.up.railway.app/')
    monkeypatch.setenv('CORS_ALLOWED_ORIGINS', '')
    origins = _configured_cors_origins()
    assert 'https://zylora-admin-production.up.railway.app' in origins
    assert 'https://zylora-api-production.up.railway.app' in origins
    assert '*' not in origins


def test_production_cors_does_not_add_development_origins(monkeypatch):
    monkeypatch.setattr(settings, 'app_env', 'production')
    monkeypatch.setattr(settings, 'app_url', 'https://zylora-api-production.up.railway.app')
    monkeypatch.setattr(settings, 'super_admin_app_url', '')
    monkeypatch.setenv('CORS_ALLOWED_ORIGINS', '')
    origins = _configured_cors_origins()
    assert 'http://localhost:5174' not in origins
    assert 'http://127.0.0.1:5174' not in origins


def test_production_session_cookie_domain_covers_configured_sibling_services(monkeypatch):
    monkeypatch.setattr(settings, 'app_env', 'production')
    monkeypatch.setattr(settings, 'app_url', 'https://zylora-api-production.up.railway.app')
    monkeypatch.setattr(settings, 'super_admin_app_url', 'https://zylora-admin-production.up.railway.app')
    assert session_cookie_domain() is None


def test_development_session_cookie_remains_host_only(monkeypatch):
    monkeypatch.setattr(settings, 'app_env', 'development')
    monkeypatch.setattr(settings, 'app_url', 'https://zylora-api-production.up.railway.app')
    monkeypatch.setattr(settings, 'super_admin_app_url', 'https://zylora-admin-production.up.railway.app')
    assert session_cookie_domain() is None
