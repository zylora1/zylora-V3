from __future__ import annotations
from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import field_validator, model_validator
from sqlalchemy.engine import make_url

ROOT = Path(__file__).resolve().parents[1]

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=ROOT / '.env', extra='ignore')
    app_env: str = 'development'

    @field_validator('app_env', mode='before')
    @classmethod
    def normalize_app_env(cls, value):
        import os
        # Deployment platforms should set APP_ENV/ENVIRONMENT explicitly.
        # Do not infer runtime mode from a provider-specific variable.
        env_override = os.getenv('APP_ENV') or os.getenv('ENVIRONMENT')
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

    # Target hosted-AI boundary. Legacy OpenAI fields remain read-only
    # compatibility inputs until every call site has moved to AIService.
    ai_gateway_provider: str = 'vercel'
    ai_gateway_api_key: str = ''
    ai_gateway_base_url: str = 'https://ai-gateway.vercel.sh/v1'
    ai_default_model: str = 'openai/gpt-5-mini'
    ai_sales_assistant_model: str = 'openai/gpt-4o-mini'
    ai_editor_model: str = 'openai/gpt-5-mini'

    # Resend remains a compatibility transport only while Telnyx is rolled out.
    # Credentials remain server-side and are never exposed by API responses.
    resend_api_key: str = ''
    email_from: str = 'Zylora <notifications@zylora.dev>'
    email_reply_to: str = ''
    email_send_timeout: int = 20
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

    # Target communications boundary. Legacy Resend/Twilio/Meta fields remain
    # available only during the compatibility migration.
    telnyx_api_key: str = ''
    telnyx_base_url: str = 'https://api.telnyx.com/v2'
    telnyx_email_from: str = ''
    telnyx_email_domain_id: str = ''
    telnyx_whatsapp_from: str = ''
    telnyx_messaging_profile_id: str = ''
    telnyx_sms_from: str = ''
    telnyx_public_key: str = ''
    telnyx_webhook_public_key: str = ''
    # Optional server-side operational alert thresholds.  Zero disables a
    # threshold; alerts are surfaced in the Super Admin provider-usage view.
    ai_cost_alert_usd: float = 0.0
    telnyx_message_alert_count: int = 0
    communication_failure_alert_pct: float = 0.0

    whatsapp_phone_number_id: str = ''
    whatsapp_access_token: str = ''
    whatsapp_graph_version: str = 'v23.0'

    google_client_id: str = ''
    google_client_secret: str = ''
    google_oauth_enabled: bool = False
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
    r2_access_key_id: str = ''
    r2_secret_access_key: str = ''
    r2_endpoint: str = ''
    r2_bucket: str = ''
    pexels_api_key: str = ''

    # onlook is feature-gated until a verified upstream distribution/runtime is
    # available. Empty upstream metadata is intentional and is not evidence.
    studio_engine: str = 'legacy'
    onlook_oidc_client_secret: str = ''
    ONLOOK_BASE_URL: str = ''
    onlook_internal_url: str = ''
    onlook_upstream_repo: str = 'https://github.com/onlook/onlook'
    onlook_upstream_version: str = ''
    onlook_upstream_commit: str = ''
    penpot_upstream_version: str = ''
    penpot_upstream_commit: str = ''
    oidc_issuer: str = ''
    oidc_signing_key: str = ''
    oidc_signing_key_id: str = ''
    oidc_audience: str = ''
    studio_code_enabled: bool = True

    @field_validator('ai_gateway_provider', mode='before')
    @classmethod
    def normalize_ai_gateway_provider(cls, value):
        return str(value or 'vercel').strip().lower()

    @field_validator('studio_engine', mode='before')
    @classmethod
    def normalize_studio_engine(cls, value):
        engine = str(value or 'legacy').strip().lower()
        if engine not in {'legacy', 'native', 'onlook'}:
            raise ValueError('STUDIO_ENGINE must be legacy, native, or onlook')
        return engine

    @model_validator(mode='after')
    def resolve_r2_media_aliases(self):
        """Use the target Cloudflare R2 names without duplicating credentials.

        The media service intentionally remains S3-compatible, so R2 does not
        need a second storage implementation.  During the staged migration,
        deployments may provide the target ``R2_*`` variables while older
        installations still use ``MEDIA_S3_*``.  Prefer explicitly supplied
        MEDIA_S3 values and fill only missing fields from the R2 aliases.
        """
        if not self.media_s3_access_key_id:
            self.media_s3_access_key_id = self.r2_access_key_id
        if not self.media_s3_secret_access_key:
            self.media_s3_secret_access_key = self.r2_secret_access_key
        if not self.media_s3_endpoint_url:
            self.media_s3_endpoint_url = self.r2_endpoint
        if not self.media_s3_bucket:
            self.media_s3_bucket = self.r2_bucket
        return self

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
    # Production hosted inference is gateway-only. Legacy OpenAI credentials
    # remain a local/test compatibility surface and cannot make production
    # appear AI-ready on their own.
    ai_ready = bool(settings.ai_gateway_api_key and settings.ai_gateway_base_url)
    need(ai_ready, 'AI_GATEWAY_API_KEY/AI_GATEWAY_BASE_URL')
    need(bool(settings.ai_sales_assistant_model or settings.sales_assistant_model), 'AI_SALES_ASSISTANT_MODEL')
    telnyx_email_ready = bool(settings.telnyx_api_key and settings.telnyx_email_from)
    need(telnyx_email_ready or bool(settings.resend_api_key), 'TELNYX_API_KEY/TELNYX_EMAIL_FROM (or RESEND_API_KEY compatibility)')
    need(bool(settings.email_from and '@' in settings.email_from and '.local' not in settings.email_from and '.example' not in settings.email_from), 'EMAIL_FROM')
    need(bool(settings.email_unsubscribe_secret) and len(settings.email_unsubscribe_secret) >= 32, 'EMAIL_UNSUBSCRIBE_SECRET (32+ characters)')
    twilio_ready=bool(settings.twilio_account_sid and settings.twilio_auth_token and settings.twilio_whatsapp_from)
    meta_whatsapp_ready=bool(settings.whatsapp_phone_number_id and settings.whatsapp_access_token)
    telnyx_whatsapp_ready = bool(settings.telnyx_api_key and settings.telnyx_whatsapp_from)
    need(telnyx_whatsapp_ready or twilio_ready or meta_whatsapp_ready, 'TELNYX_API_KEY/TELNYX_WHATSAPP_FROM (or TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN/TWILIO_WHATSAPP_FROM or legacy WhatsApp compatibility)')
    if settings.turnstile_enabled:
        need(bool(settings.turnstile_site_key and settings.turnstile_secret_key), 'TURNSTILE_SITE_KEY/TURNSTILE_SECRET_KEY')
    need(settings.payment_provider in {'razorpay', 'mock'}, 'PAYMENT_PROVIDER=razorpay or mock')
    if settings.payment_provider == 'razorpay' and (settings.razorpay_key_id or settings.razorpay_key_secret or settings.razorpay_webhook_secret):
        need(bool(settings.razorpay_key_id and settings.razorpay_key_secret and settings.razorpay_webhook_secret), 'RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET/RAZORPAY_WEBHOOK_SECRET')
    if settings.google_oauth_enabled:
        need(bool(settings.google_client_id and settings.google_client_secret), 'GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET')
    if settings.cloudflare_api_token or settings.cloudflare_zone_id:
        need(bool(settings.cloudflare_api_token and settings.cloudflare_zone_id), 'CLOUDFLARE_API_TOKEN/CLOUDFLARE_ZONE_ID')
    need(bool(settings.cloudflare_saas_target and '.example' not in settings.cloudflare_saas_target), 'CLOUDFLARE_SAAS_TARGET')
    need(settings.studio_engine in {'legacy', 'native', 'onlook'}, 'STUDIO_ENGINE=legacy, native, or onlook')
    if settings.ai_gateway_api_key:
        need(settings.ai_gateway_provider == 'vercel', 'AI_GATEWAY_PROVIDER=vercel')
        need(bool(settings.ai_gateway_base_url), 'AI_GATEWAY_BASE_URL')
    if settings.telnyx_api_key:
        need(bool(settings.telnyx_email_from or settings.telnyx_whatsapp_from or settings.telnyx_sms_from), 'TELNYX_*_FROM')
    need(settings.ai_cost_alert_usd >= 0, 'AI_COST_ALERT_USD must be non-negative')
    need(settings.telnyx_message_alert_count >= 0, 'TELNYX_MESSAGE_ALERT_COUNT must be non-negative')
    need(0 <= settings.communication_failure_alert_pct <= 100, 'COMMUNICATION_FAILURE_ALERT_PCT must be 0..100')
    if settings.studio_engine == 'onlook':
        need(bool(settings.ONLOOK_BASE_URL), 'ONLOOK_BASE_URL')
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
