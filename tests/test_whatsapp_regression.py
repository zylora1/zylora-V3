import pytest
from app.api import router

def test_whatsapp_endpoints_removed():
    routes = getattr(router, 'routes', [])
    paths = [getattr(r, 'path', '') for r in routes]
    assert '/notifications/whatsapp/request-otp' not in paths
    assert '/notifications/whatsapp/verify' not in paths

def test_login_signup_uses_email_otp(monkeypatch):
    import app.api as api_module
    called = []
    
    def mock_issue_auth_token(uid, purpose, email):
        called.append((purpose, email))
        return "mock_token"
        
    monkeypatch.setattr(api_module, "issue_auth_token", mock_issue_auth_token)
    
    token = api_module.issue_auth_token("test_uid", "VERIFY_EMAIL", "test@example.com")
    assert token == "mock_token"
    assert len(called) == 1
