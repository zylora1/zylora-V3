from fastapi.testclient import TestClient
from sqlalchemy import text

from app import auth_flows
from app.db import SessionLocal
from app.main import app
from tests.test_platform_features import reset_db


def test_password_reset_provider_failure_is_nonfatal_and_recorded(monkeypatch):
    reset_db()
    client = TestClient(app)
    signup = client.post('/api/auth/signup', json={
        'name': 'Email Failure Audit',
        'email': 'email-failure-audit@example.com',
        'password': 'SecurePass123!',
    })
    assert signup.status_code == 200

    def fail_send(*args, **kwargs):
        raise RuntimeError('provider unavailable')

    monkeypatch.setattr(auth_flows, 'send_email', fail_send)
    response = client.post('/api/auth/password/request', json={'email': 'email-failure-audit@example.com'})
    assert response.status_code == 200
    assert response.json().get('debug_token')

    with SessionLocal() as db:
        event = db.execute(text("SELECT event_code,message FROM operational_events WHERE event_code='AUTH_EMAIL_DELIVERY_FAILED' ORDER BY created_at DESC LIMIT 1")).first()
    assert event is not None
    assert 'RuntimeError' in event[1]
