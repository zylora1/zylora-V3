from __future__ import annotations
from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator
from sqlalchemy.engine import make_url

ROOT = Path(__file__).resolve().parents[1]

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=ROOT / '.env', extra='ignore')
    app_env: str = 'development'

    @field_validator('app_env', mode='before')
    @classmethod
    def normalize_app_env(cls, value):
        import os
        env_override = os.getenv('APP_ENV') or os.getenv('ENVIRONMENT') or os.getenv('RAILWAY_ENVIRONMENT')
        if value and str(value).lower() not in {'', 'development'}:
            raw = str(value).strip().lower()
        elif env_override:
            raw = str(env_override).strip().lower()
        else:
            raw = str(value or 'development').strip().lower()
        aliases = {'dev':'development','local':'development','development':'development',
                   'test':'test','testing':'test','prod':'production','live':'production','production':'production'}
        if raw not in aliases:
            raise ValueError('APP_ENV must be development, test, or production')
        return aliases[raw]

    @field_validator('payment_provider', mode='before', check_fields=False)
    @classmethod
    def normalize_payment_provider(cls, value):
        return str(value or 'mock').strip().lower()
    app_url: str = 'http://127.0.0.1:8000'
    database_url: str = f"sqlite:///{ROOT / 'data' / 'zylora.db'}"
    redis_url: str = ''
    session_ttl_hours: int = 168
    admin_notification_email: str = 'admin@example.com'

    # Optional one-time SUPER_ADMIN bootstrap. Keep these server-side only.
    super_admin_email: str = ''
    super_admin_mail_id: str = ''
    super_admin_password: str = ''
    super_admin_app_url: str = ''

    @field_validator('super_admin_email', mode='before')
    @classmethod
    def normalize_super_admin_email(cls, value):
        import os
        return str(value or os.getenv('SUPER_ADMIN_MAIL_ID', '')).strip()

    openai_api_key: str = ''
    openai_model: str = 'gpt-5-mini'
    sales_assistant_model: str = 'gpt-4o-mini'

    # Email transport. Credentials remain server-side and are never exposed by API responses.
    smtp_host: str = ''
    smtp_port: int = 587
    smtp_username: str = ''
    smtp_password: str = ''
    smtp_from_email: str = 'notifications@zylora.dev'
    smtp_from_name: str = 'Zylora'
    smtp_reply_to: str = ''
    smtp_security: str = 'starttls'
    smtp_connection_timeout: int = 10
    smtp_send_timeout: int = 20
    email_batch_size: int = 25
    email_max_sends_per_minute: int = 60
    email_max_retries: int = 4
    email_retry_base_delay: int = 60
    email_campaign_upload_max_mb: int = 8
    email_attachment_max_mb: int = 10
    email_attachment_total_max_mb: int = 20
    email_unsubscribe_secret: str = ''
    twilio_account_sid: str = ''
    twilio_auth_token: str = ''
    twilio_whatsapp_from: str = ''

    whatsapp_phone_number_id: str = ''
    whatsapp_access_token: str = ''
    whatsapp_graph_version: str = 'v23.0'

    google_client_id: str = ''
    google_client_secret: str = ''
    google_redirect_uri: str = ''
    google_service_account_json: str = ''
    google_service_account_file: str = ''
    google_service_account_email: str = ''
    turnstile_site_key: str = ''
    turnstile_secret_key: str = ''
    turnstile_enabled: bool = True
    turnstile_allowed_hostnames: str = ''

    payment_provider: str = 'mock'
    razorpay_key_id: str = ''
    razorpay_key_secret: str = ''
    razorpay_webhook_secret: str = ''

    cloudflare_api_token: str = ''
    cloudflare_account_id: str = ''
    cloudflare_zone_id: str = ''
    cloudflare_saas_target: str = 'sites.zylora.example'

    public_base_domain: str = 'zylora.example'
    indexnow_endpoint: str = 'https://api.indexnow.org/indexnow'

    # Managed media. Local storage is durable when backed by a persistent volume; S3 is supported for production.
    media_storage_provider: str = 'local'
    media_storage_dir: str = str(ROOT / 'data' / 'media')
    media_storage_durable: bool = False
    media_max_upload_mb: int = 12
    media_max_pixels: int = 40_000_000
    media_s3_bucket: str = ''
    media_s3_region: str = 'us-east-1'
    media_s3_endpoint_url: str = ''
    media_s3_access_key_id: str = ''
    media_s3_secret_access_key: str = ''
    media_s3_prefix: str = 'zylora-media'
    pexels_api_key: str = ''

settings = Settings()


def validate_production_settings() -> None:
    """Fail closed when a production process is missing release-critical providers.

    Only variable names are included in the error so startup logs never echo
    credential values. Optional channels such as WhatsApp are deliberately not
    required to boot the core product.
    """
    if settings.app_env != 'production':
        return
    missing=[]
    def need(ok: bool, name: str):
        if not ok: missing.append(name)
    need(settings.app_url.startswith('https://') and '.example' not in settings.app_url and 'localhost' not in settings.app_url and '127.0.0.1' not in settings.app_url, 'APP_URL')
    db_is_external=not settings.database_url.startswith('sqlite')
    need(db_is_external, 'DATABASE_URL')
    if db_is_external:
        try:
            db_url=make_url(settings.database_url)
            # The Docker Compose development password is intentionally convenient for
            # local use but must never be accepted by a production process.  Checking
            # the parsed password also catches URL-encoded forms without logging it.
            need((db_url.password or '') != 'zylora-dev-only', 'DATABASE_URL credentials')
        except Exception:
            need(False, 'DATABASE_URL')
    need(bool(settings.openai_api_key), 'OPENAI_API_KEY')
    need(bool(settings.sales_assistant_model), 'SALES_ASSISTANT_MODEL')
    need(bool(settings.smtp_host), 'SMTP_HOST')
    need(1 <= int(settings.smtp_port) <= 65535, 'SMTP_PORT')
    need(settings.smtp_security.strip().lower() in {'starttls','tls','none'}, 'SMTP_SECURITY=starttls, tls, or none')
    need(bool(settings.smtp_from_email and '@' in settings.smtp_from_email and '.local' not in settings.smtp_from_email and '.example' not in settings.smtp_from_email), 'SMTP_FROM_EMAIL')
    need(bool(settings.smtp_username) == bool(settings.smtp_password), 'SMTP_USERNAME/SMTP_PASSWORD (set both or neither)')
    need(bool(settings.email_unsubscribe_secret) and len(settings.email_unsubscribe_secret) >= 32, 'EMAIL_UNSUBSCRIBE_SECRET (32+ characters)')
    twilio_ready=bool(settings.twilio_account_sid and settings.twilio_auth_token and settings.twilio_whatsapp_from)
    meta_whatsapp_ready=bool(settings.whatsapp_phone_number_id and settings.whatsapp_access_token)
    need(twilio_ready or meta_whatsapp_ready, 'TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN/TWILIO_WHATSAPP_FROM or WHATSAPP_PHONE_NUMBER_ID/WHATSAPP_ACCESS_TOKEN')
    need(bool(settings.turnstile_site_key and settings.turnstile_secret_key), 'TURNSTILE_SITE_KEY/TURNSTILE_SECRET_KEY')
    need(settings.payment_provider in {'razorpay', 'mock'}, 'PAYMENT_PROVIDER=razorpay or mock')
    if settings.payment_provider == 'razorpay' and (settings.razorpay_key_id or settings.razorpay_key_secret or settings.razorpay_webhook_secret):
        need(bool(settings.razorpay_key_id and settings.razorpay_key_secret and settings.razorpay_webhook_secret), 'RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET/RAZORPAY_WEBHOOK_SECRET')
    need(bool(settings.google_client_id and settings.google_client_secret), 'GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET')
    if settings.cloudflare_api_token or settings.cloudflare_zone_id:
        need(bool(settings.cloudflare_api_token and settings.cloudflare_zone_id), 'CLOUDFLARE_API_TOKEN/CLOUDFLARE_ZONE_ID')
    need(bool(settings.cloudflare_saas_target and '.example' not in settings.cloudflare_saas_target), 'CLOUDFLARE_SAAS_TARGET')
    # Bootstrap credentials are optional after the first admin exists, but must never be partial.
    if bool(settings.super_admin_email) != bool(settings.super_admin_password):
        need(False, 'SUPER_ADMIN_EMAIL/SUPER_ADMIN_PASSWORD (set both or neither)')
    if settings.super_admin_password:
        need(len(settings.super_admin_password) >= 8, 'SUPER_ADMIN_PASSWORD (minimum 8 characters)')
    need(bool(settings.public_base_domain and '.example' not in settings.public_base_domain), 'PUBLIC_BASE_DOMAIN')
    media_provider=settings.media_storage_provider.strip().lower()
    need(media_provider in {'local','s3'}, 'MEDIA_STORAGE_PROVIDER=local or s3')
    if media_provider == 's3':
        need(bool(settings.media_s3_bucket and settings.media_s3_access_key_id and settings.media_s3_secret_access_key), 'MEDIA_S3_BUCKET/MEDIA_S3_ACCESS_KEY_ID/MEDIA_S3_SECRET_ACCESS_KEY')
    elif media_provider == 'local':
        need(settings.media_storage_durable, 'MEDIA_STORAGE_DURABLE=true (only with a persistent volume)')
    if missing:
        raise RuntimeError('Unsafe production configuration; set: '+', '.join(missing))
