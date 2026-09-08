from __future__ import annotations

import re
from pathlib import Path
import pytest
from uuid import uuid4
from fastapi.testclient import TestClient
from sqlalchemy import text

from app.main import app
from app.config import settings, validate_production_settings
from app.bootstrap import bootstrap_super_admin
from app.db import SessionLocal, migrate, now_iso
from app.security import hash_password, verify_password, clear_rate_limits

ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(autouse=True)
def ensure_db():
    clear_rate_limits()
    with SessionLocal.begin() as db:
        db.execute(text('DELETE FROM rate_limit_buckets'))
    migrate()


def _valid_production(monkeypatch):
    values = {
        'app_env': 'production',
        'app_url': 'https://app.zylora.test',
        'database_url': 'postgresql+psycopg://zylora:pass@db:5432/zylora',
        'openai_api_key': 'test-openai-key',
        'sales_assistant_model': 'gpt-4o-mini',
        'smtp_host': 'smtp.example.test',
        'smtp_port': 587,
        'smtp_username': 'smtp-user',
        'smtp_password': 'smtp-password',
        'smtp_from_email': 'notifications@zylora.dev',
        'email_unsubscribe_secret': 'x' * 48,
        'twilio_account_sid': 'ACtest',
        'twilio_auth_token': 'test-twilio-token',
        'twilio_whatsapp_from': '+15551234567',
        'turnstile_site_key': 'test-site-key',
        'turnstile_secret_key': 'test-secret-key',
        'payment_provider': 'razorpay',
        'razorpay_key_id': 'rzp_live_test',
        'razorpay_key_secret': 'test-razorpay-secret',
        'razorpay_webhook_secret': 'test-webhook-secret',
        'google_client_id': 'test-google-client',
        'google_client_secret': 'test-google-secret',
        'cloudflare_api_token': 'test-cloudflare-token',
        'cloudflare_zone_id': 'test-zone',
        'cloudflare_saas_target': 'sites.zylora.test',
        'public_base_domain': 'zylora.test',
        'media_storage_provider': 'local',
        'media_storage_durable': True,
        'super_admin_email': '',
        'super_admin_password': '',
    }
    for k, v in values.items():
        monkeypatch.setattr(settings, k, v)


# ---------------------------------------------------------------------------
# 1. USER SIGNUP: accepts passwords >= 8 chars with no complexity constraints
# ---------------------------------------------------------------------------

@pytest.mark.parametrize('valid_pw', [
    '12345678',      # digits only (no uppercase/lowercase/special char requirement)
    'abcdefgh',      # lowercase only
    'ABCDEFGH',      # uppercase only
    'password',      # common dictionary word (no entropy restriction)
    'simple88',      # alphanumeric
    'my-password',   # mixed with hyphen
    'very-long-password-with-no-restrictions-whatsoever-1234567890!',
])
def test_signup_accepts_passwords_with_min_length_8_no_complexity(valid_pw):
    c = TestClient(app)
    email = f'user_{uuid4().hex[:8]}@example.com'
    r = c.post('/api/auth/signup', json={'name': 'Test User', 'email': email, 'password': valid_pw})
    assert r.status_code == 200, r.text
    j = r.json()
    assert j['ok'] is True
    assert 'csrf_token' in j

    # Verify password was securely hashed and NOT stored in plaintext
    with SessionLocal() as db:
        row = db.execute(text('SELECT password_hash FROM users WHERE email=:e'), {'e': email}).mappings().one()
        assert row['password_hash'] != valid_pw
        assert verify_password(valid_pw, row['password_hash']) is True


@pytest.mark.parametrize('short_pw', [
    'a',
    '1',
    'abc',
    '1234',
    '1234567',
    '',
])
def test_signup_rejects_passwords_under_8_chars(short_pw):
    c = TestClient(app)
    email = f'user_short_{uuid4().hex[:8]}@example.com'
    r = c.post('/api/auth/signup', json={'name': 'Test User', 'email': email, 'password': short_pw})
    assert r.status_code == 422


def test_signup_rejects_missing_password():
    c = TestClient(app)
    email = f'user_missing_{uuid4().hex[:8]}@example.com'
    r = c.post('/api/auth/signup', json={'name': 'Test User', 'email': email})
    assert r.status_code == 422


# ---------------------------------------------------------------------------
# 2. USER LOGIN: authenticates >= 8 char password correctly
# ---------------------------------------------------------------------------

def test_login_with_valid_password():
    c = TestClient(app)
    email = f'user_login_{uuid4().hex[:8]}@example.com'
    pw = 'validpass123'
    r = c.post('/api/auth/signup', json={'name': 'Valid User', 'email': email, 'password': pw})
    assert r.status_code == 200

    # Successful login
    c2 = TestClient(app)
    r_login = c2.post('/api/auth/login', json={'email': email, 'password': pw})
    assert r_login.status_code == 200
    assert r_login.json()['ok'] is True

    # Failed login with wrong password
    c3 = TestClient(app)
    r_wrong = c3.post('/api/auth/login', json={'email': email, 'password': 'wrongpassword123'})
    assert r_wrong.status_code == 401


# ---------------------------------------------------------------------------
# 3. PASSWORD RESET: enforces min length 8
# ---------------------------------------------------------------------------

@pytest.mark.parametrize('new_pw', ['12345678', 'newpassword', 'reset-pass-123'])
def test_password_reset_accepts_min_length_8(new_pw):
    c = TestClient(app)
    email = f'user_reset_{uuid4().hex[:8]}@example.com'
    r = c.post('/api/auth/signup', json={'name': 'Reset User', 'email': email, 'password': 'initial_password'})
    assert r.status_code == 200

    r_req = c.post('/api/auth/password/request', json={'email': email})
    assert r_req.status_code == 200
    token = r_req.json().get('debug_token')
    assert token

    r_conf = c.post('/api/auth/password/confirm', json={'token': token, 'password': new_pw})
    assert r_conf.status_code == 200

    c_old = TestClient(app)
    assert c_old.post('/api/auth/login', json={'email': email, 'password': 'initial_password'}).status_code == 401

    c_new = TestClient(app)
    assert c_new.post('/api/auth/login', json={'email': email, 'password': new_pw}).status_code == 200


@pytest.mark.parametrize('short_pw', ['a', '1', 'abc', '1234567', ''])
def test_password_reset_rejects_under_8_chars(short_pw):
    c = TestClient(app)
    email = f'user_reset_short_{uuid4().hex[:8]}@example.com'
    c.post('/api/auth/signup', json={'name': 'Reset User', 'email': email, 'password': 'initial_password'})
    r_req = c.post('/api/auth/password/request', json={'email': email})
    token = r_req.json().get('debug_token')

    r_conf = c.post('/api/auth/password/confirm', json={'token': token, 'password': short_pw})
    assert r_conf.status_code == 422


# ---------------------------------------------------------------------------
# 4. FRONTEND UI: 'Password too short' element below password box
# ---------------------------------------------------------------------------

def test_frontend_signup_has_password_too_short_element_below_password():
    signup_html = (ROOT / 'static' / 'signup.html').read_text(encoding='utf-8')
    assert 'id="password"' in signup_html
    assert 'minlength="8"' in signup_html
    assert 'id="passwordError"' in signup_html
    assert 'Password too short' in signup_html
    field_match = re.search(r'<div class="field">.*?<input[^>]*id="password"[^>]*>.*?<div[^>]*id="passwordError"[^>]*>(.*?)</div>.*?</div>', signup_html, re.DOTALL)
    assert field_match is not None
    assert 'Password too short' in field_match.group(1)


def test_frontend_reset_password_has_password_too_short_element_below_password():
    reset_html = (ROOT / 'static' / 'reset-password.html').read_text(encoding='utf-8')
    assert 'id="password"' in reset_html
    assert 'minlength="8"' in reset_html
    assert 'id="passwordError"' in reset_html
    assert 'Password too short' in reset_html
    field_match = re.search(r'<div class="field">.*?<input[^>]*id="password"[^>]*>.*?<div[^>]*id="passwordError"[^>]*>(.*?)</div>.*?</div>', reset_html, re.DOTALL)
    assert field_match is not None
    assert 'Password too short' in field_match.group(1)


def test_frontend_auth_js_wires_password_too_short():
    auth_js = (ROOT / 'static' / 'auth.js').read_text(encoding='utf-8')
    assert 'passwordError' in auth_js
    assert 'Password too short' in auth_js
    assert 'length<8' in auth_js or 'length < 8' in auth_js


# ---------------------------------------------------------------------------
# 5. SUPER_ADMIN: bootstrap and production validation require min length 8
# ---------------------------------------------------------------------------

@pytest.mark.parametrize('admin_pw', ['12345678', 'password', 'super-admin-pass'])
def test_super_admin_production_validation_accepts_min_length_8(monkeypatch, admin_pw):
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings, 'super_admin_email', 'admin@zylora.test')
    monkeypatch.setattr(settings, 'super_admin_password', admin_pw)
    validate_production_settings()


@pytest.mark.parametrize('short_admin_pw', ['a', '1', 'abc', '1234567', ''])
def test_super_admin_production_validation_rejects_under_8_chars(monkeypatch, short_admin_pw):
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings, 'super_admin_email', 'admin@zylora.test')
    monkeypatch.setattr(settings, 'super_admin_password', short_admin_pw)
    with pytest.raises(RuntimeError) as exc:
        validate_production_settings()
    assert 'SUPER_ADMIN' in str(exc.value)


# ---------------------------------------------------------------------------
# 6. GOOGLE OAUTH & AUTHORIZATION BOUNDARIES
# ---------------------------------------------------------------------------

def test_google_oauth_still_functional():
    c = TestClient(app)
    email = f'oauth_user_{uuid4().hex[:8]}@example.com'
    r = c.get(f'/api/auth/google/start?mock=1&email={email}', follow_redirects=True)
    assert r.status_code == 200
    me = c.get('/api/auth/me')
    assert me.status_code == 200
    assert me.json()['email'] == email


def test_normal_user_cannot_access_super_admin_endpoints():
    c = TestClient(app)
    email = f'user_authz_{uuid4().hex[:8]}@example.com'
    r = c.post('/api/auth/signup', json={'name': 'Normal User', 'email': email, 'password': 'password123'})
    assert r.status_code == 200

    assert c.get('/api/admin/overview').status_code == 403
    assert c.get('/api/admin/users').status_code == 403
    assert c.get('/api/admin/settings').status_code == 403
