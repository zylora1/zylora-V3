from dataclasses import dataclass, field
import os

def _resolve_env() -> str:
    # ZYLORA_ENV is canonical; ENV is accepted for deployment-platform compatibility.
    return (os.getenv('ZYLORA_ENV') or os.getenv('ENV') or 'development').strip().lower()

@dataclass(frozen=True)
class Settings:
    env: str = field(default_factory=_resolve_env)
    secret_key: str = os.getenv('ZYLORA_SECRET_KEY','dev-secret')
    database_url: str = os.getenv('DATABASE_URL','sqlite+pysqlite:///./zylora.db')
    redis_url: str = os.getenv('REDIS_URL','redis://localhost:6379/0')
    default_timezone: str = os.getenv('DEFAULT_TIMEZONE','Asia/Kolkata')
    public_base_url: str = os.getenv('PUBLIC_BASE_URL','http://localhost:3000')
    api_base_url: str = field(default_factory=lambda: os.getenv('API_BASE_URL','http://localhost:8000'))
    public_site_base_url: str = field(default_factory=lambda: os.getenv('PUBLIC_SITE_BASE_URL') or os.getenv('PUBLIC_BASE_URL','http://localhost:3000'))
    google_client_id: str = os.getenv('GOOGLE_CLIENT_ID','')
    razorpay_key_id: str = os.getenv('RAZORPAY_KEY_ID','')
    razorpay_key_secret: str = os.getenv('RAZORPAY_KEY_SECRET','')
    razorpay_webhook_secret: str = os.getenv('RAZORPAY_WEBHOOK_SECRET','')
    razorpay_plan_starter_id: str = os.getenv('RAZORPAY_PLAN_STARTER_ID','')
    razorpay_plan_growth_id: str = os.getenv('RAZORPAY_PLAN_GROWTH_ID','')
    resend_api_key: str = os.getenv('RESEND_API_KEY','')
    resend_from_email: str = os.getenv('RESEND_FROM_EMAIL','Zylora <hello@example.com>')
    twilio_account_sid: str = os.getenv('TWILIO_ACCOUNT_SID','')
    twilio_auth_token: str = os.getenv('TWILIO_AUTH_TOKEN','')
    twilio_whatsapp_from: str = os.getenv('TWILIO_WHATSAPP_FROM','')
    cloudflare_api_token: str = os.getenv('CLOUDFLARE_API_TOKEN','')
    cloudflare_zone_id: str = os.getenv('CLOUDFLARE_ZONE_ID','')
    turnstile_secret_key: str = os.getenv('TURNSTILE_SECRET_KEY','')
    anthropic_api_key: str = os.getenv('ANTHROPIC_API_KEY','')
    anthropic_model: str = os.getenv('ANTHROPIC_MODEL','claude-sonnet-4-20250514')
    chatbot_knowledge_max_chars: int = int(os.getenv('CHATBOT_KNOWLEDGE_MAX_CHARS','24000'))
    chatbot_max_messages_per_session: int = int(os.getenv('CHATBOT_MAX_MESSAGES_PER_SESSION','40'))
    notification_delivery_mode: str = field(default_factory=lambda: os.getenv('NOTIFICATION_DELIVERY_MODE') or ('celery' if _resolve_env() in ('production','prod') else 'inline'))
    notification_max_attempts: int = int(os.getenv('NOTIFICATION_MAX_ATTEMPTS','3'))
    cors_origins: str = os.getenv('CORS_ORIGINS','http://localhost:3000')
    session_cookie_secure: bool = os.getenv('SESSION_COOKIE_SECURE','0') == '1'
settings=Settings()


def validate_production_settings() -> None:
    if settings.env.lower() in {"production", "prod"}:
        if not settings.secret_key or settings.secret_key == "dev-secret" or len(settings.secret_key) < 32:
            raise RuntimeError("unsafe_production_secret_key")
        if settings.database_url.startswith("sqlite"):
            raise RuntimeError("production_requires_postgresql")
        if not settings.anthropic_api_key:
            raise RuntimeError("anthropic_api_key_required")
