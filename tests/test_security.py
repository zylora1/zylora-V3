import pytest
from apps.api.app.security import hash_password,verify_password,issue_token,parse_token,SecurityError

def test_password_roundtrip_and_rejections():
    h=hash_password('password123',b'0123456789abcdef')
    assert verify_password('password123',h)
    assert not verify_password('wrong',h)
    assert not verify_password('x','bad')
    with pytest.raises(SecurityError): hash_password('short')

def test_token_roundtrip_tamper_and_expiry():
    t=issue_token(7,'USER','secret',ttl_seconds=10,now=100)
    assert parse_token(t,'secret',now=105)['sub']==7
    with pytest.raises(SecurityError): parse_token(t+'x','secret',now=105)
    with pytest.raises(SecurityError): parse_token(t,'secret',now=110)
    with pytest.raises(SecurityError): parse_token('bad','secret',now=105)

def test_production_settings_reject_dev_secret_and_sqlite():
    from apps.api.app.config import settings, validate_production_settings
    original=(settings.env,settings.secret_key,settings.database_url)
    try:
        object.__setattr__(settings,'env','production')
        object.__setattr__(settings,'secret_key','dev-secret')
        object.__setattr__(settings,'database_url','sqlite+pysqlite:///bad.db')
        with pytest.raises(RuntimeError,match='unsafe_production_secret_key'):
            validate_production_settings()
        object.__setattr__(settings,'secret_key','x'*40)
        with pytest.raises(RuntimeError,match='production_requires_postgresql'):
            validate_production_settings()
    finally:
        object.__setattr__(settings,'env',original[0])
        object.__setattr__(settings,'secret_key',original[1])
        object.__setattr__(settings,'database_url',original[2])
