from __future__ import annotations

import pytest

from app.config import settings, validate_production_settings
from app import providers


def _valid_production(monkeypatch):
    values={
        'app_env':'production',
        'app_url':'https://app.zylora.test',
        'database_url':'postgresql+psycopg://zylora:strong-production-db-password@db:5432/zylora',
        'openai_api_key':'test-openai-key',
        'sales_assistant_model':'gpt-4o-mini',
        'resend_api_key':'test-resend-key',
        'resend_from':'Zylora <notifications@zylora.test>',
        'twilio_account_sid':'ACtest',
        'twilio_auth_token':'test-twilio-token',
        'twilio_whatsapp_from':'+15551234567',
        'whatsapp_phone_number_id':'',
        'whatsapp_access_token':'',
        'turnstile_site_key':'test-site-key',
        'turnstile_secret_key':'test-secret-key',
        'payment_provider':'razorpay',
        'razorpay_key_id':'rzp_live_test',
        'razorpay_key_secret':'test-razorpay-secret',
        'razorpay_webhook_secret':'test-webhook-secret',
        'google_client_id':'test-google-client',
        'google_client_secret':'test-google-secret',
        'cloudflare_api_token':'test-cloudflare-token',
        'cloudflare_zone_id':'test-zone',
        'cloudflare_saas_target':'sites.zylora.test',
        'public_base_domain':'zylora.test',
        'media_storage_provider':'local',
        'media_storage_durable':True,
        'super_admin_email':'',
        'super_admin_password':'',
    }
    for key,value in values.items():
        monkeypatch.setattr(settings,key,value)


# ---- TEST 1: Resend selected — complete production stack is accepted ----

def test_production_configuration_accepts_complete_delivery_stack(monkeypatch):
    _valid_production(monkeypatch)
    validate_production_settings()


# ---- TEST 2: Missing RESEND_API_KEY fails closed in production ----

def test_production_configuration_fails_closed_without_resend_api_key(monkeypatch):
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'resend_api_key','')
    with pytest.raises(RuntimeError) as exc:
        validate_production_settings()
    assert 'RESEND_API_KEY' in str(exc.value)


# ---- TEST 3: SMTP credentials cannot rescue missing RESEND_API_KEY ----

def test_smtp_credentials_do_not_satisfy_production_email_requirement(monkeypatch):
    """Absence of RESEND_API_KEY must fail production validation regardless of any
    legacy SMTP-like environment state. SMTP is not a valid email path.
    """
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'resend_api_key','')
    with pytest.raises(RuntimeError) as exc:
        validate_production_settings()
    # Error must reference RESEND_API_KEY, not offer SMTP as a substitute.
    assert 'RESEND_API_KEY' in str(exc.value)
    assert 'SMTP_HOST' not in str(exc.value)


# ---- TEST 4: send_email uses Resend HTTPS, never SMTP ----

def test_send_email_uses_resend_https_never_smtp(monkeypatch):
    import httpx, smtplib as _smtplib
    monkeypatch.setattr(settings,'resend_api_key','test-resend-key')
    monkeypatch.setattr(settings,'resend_from','Zylora <test@zylora.test>')
    monkeypatch.setattr(settings,'app_env','development')

    posted_to=[]; smtp_called=[]

    class MockResponse:
        status_code=200
        def raise_for_status(self): pass
        def json(self): return {'id':'msg_abc'}

    class MockClient:
        def __enter__(self): return self
        def __exit__(self,*a): pass
        def post(self,url,**kw): posted_to.append(url); return MockResponse()

    monkeypatch.setattr(httpx,'Client',lambda **kw: MockClient())
    monkeypatch.setattr(_smtplib,'SMTP',lambda *a,**kw: (_ for _ in ()).throw(AssertionError('SMTP must not be invoked')))

    result=providers.send_email('user@example.com','Test','Body')
    assert result['provider']=='resend'
    assert result['status']=='SENT'
    assert any('api.resend.com' in u for u in posted_to)
    assert not smtp_called


# ---- TEST 5: Resend failure raises, no SMTP fallback ----

def test_resend_failure_raises_no_smtp_fallback(monkeypatch):
    import httpx, smtplib as _smtplib
    monkeypatch.setattr(settings,'resend_api_key','test-key')
    monkeypatch.setattr(settings,'resend_from','Zylora <test@zylora.test>')
    monkeypatch.setattr(settings,'app_env','development')

    smtp_called=[]

    class FailResponse:
        status_code=500
        def raise_for_status(self):
            raise httpx.HTTPStatusError('500',request=None,response=self)

    class MockClient:
        def __enter__(self): return self
        def __exit__(self,*a): pass
        def post(self,*a,**kw): return FailResponse()

    monkeypatch.setattr(httpx,'Client',lambda **kw: MockClient())
    monkeypatch.setattr(_smtplib,'SMTP',lambda *a,**kw: smtp_called.append(True) or (_ for _ in ()).throw(AssertionError()))

    with pytest.raises(Exception):
        providers.send_email('user@example.com','Test','Body')
    assert not smtp_called, 'SMTP must not be called on Resend failure'


# ---- TEST 6: Resend timeout — no SMTP attempt ----

def test_resend_timeout_no_smtp_attempt(monkeypatch):
    import httpx, smtplib as _smtplib
    monkeypatch.setattr(settings,'resend_api_key','test-key')
    monkeypatch.setattr(settings,'resend_from','Zylora <test@zylora.test>')
    monkeypatch.setattr(settings,'app_env','development')

    smtp_called=[]

    class MockClient:
        def __enter__(self): return self
        def __exit__(self,*a): pass
        def post(self,*a,**kw): raise httpx.TimeoutException('Timeout')

    monkeypatch.setattr(httpx,'Client',lambda **kw: MockClient())
    monkeypatch.setattr(_smtplib,'SMTP',lambda *a,**kw: smtp_called.append(True) or (_ for _ in ()).throw(AssertionError()))

    with pytest.raises(httpx.TimeoutException):
        providers.send_email('user@example.com','Test','Body')
    assert not smtp_called


# ---- TEST 7: No RESEND_API_KEY in production fails closed ----

def test_send_email_fails_closed_in_production_without_resend(monkeypatch):
    monkeypatch.setattr(settings,'resend_api_key','')
    monkeypatch.setattr(settings,'app_env','production')
    with pytest.raises(RuntimeError) as exc:
        providers.send_email('user@example.com','Subject','Body')
    assert 'RESEND_API_KEY' in str(exc.value)


# ---- TEST 8: Settings has no SMTP fields ----

def test_settings_has_no_smtp_fields():
    for field in ('smtp_host','smtp_port','smtp_username','smtp_password','smtp_from','smtp_use_tls'):
        assert not hasattr(settings,field), f'Settings still has removed SMTP field: {field}'


# ---- TEST 9: Provider readiness reflects Resend only ----

def test_provider_readiness_email_reflects_resend_only(monkeypatch):
    from app.operations import provider_readiness
    monkeypatch.setattr(settings,'resend_api_key','test-key')
    assert provider_readiness()['email'] is True
    monkeypatch.setattr(settings,'resend_api_key','')
    assert provider_readiness()['email'] is False


# ---- TEST 10: Existing tests preserved ----

def test_production_configuration_rejects_placeholder_sender_and_missing_whatsapp(monkeypatch):
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'resend_from','Zylora <notifications@zylora.local>')
    with pytest.raises(RuntimeError) as sender:
        validate_production_settings()
    assert 'RESEND_FROM' in str(sender.value)

    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'twilio_account_sid','')
    monkeypatch.setattr(settings,'twilio_auth_token','')
    monkeypatch.setattr(settings,'twilio_whatsapp_from','')
    with pytest.raises(RuntimeError) as whatsapp:
        validate_production_settings()
    assert 'TWILIO_ACCOUNT_SID' in str(whatsapp.value)


def test_production_configuration_requires_durable_media_storage(monkeypatch):
    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'media_storage_durable',False)
    with pytest.raises(RuntimeError) as local_storage:
        validate_production_settings()
    assert 'MEDIA_STORAGE_DURABLE' in str(local_storage.value)

    _valid_production(monkeypatch)
    monkeypatch.setattr(settings,'media_storage_provider','s3')
    monkeypatch.setattr(settings,'media_s3_bucket','')
    monkeypatch.setattr(settings,'media_s3_access_key_id','')
    monkeypatch.setattr(settings,'media_s3_secret_access_key','')
    with pytest.raises(RuntimeError) as s3_storage:
        validate_production_settings()
    assert 'MEDIA_S3_BUCKET' in str(s3_storage.value)
