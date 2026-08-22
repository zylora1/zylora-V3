from apps.api.app.config import Settings


def test_env_alias_is_supported(monkeypatch):
    monkeypatch.delenv('ZYLORA_ENV',raising=False)
    monkeypatch.setenv('ENV','test')
    assert Settings().env=='test'


def test_zylora_env_takes_precedence(monkeypatch):
    monkeypatch.setenv('ENV','development')
    monkeypatch.setenv('ZYLORA_ENV','production')
    assert Settings().env=='production'


def test_public_site_base_defaults_to_frontend_base(monkeypatch):
    monkeypatch.delenv('PUBLIC_SITE_BASE_URL',raising=False)
    monkeypatch.setenv('PUBLIC_BASE_URL','https://app.example.test')
    monkeypatch.setenv('API_BASE_URL','https://api.example.test')
    assert Settings().public_site_base_url=='https://app.example.test'
