# ZYLORA — PRODUCTION ENVIRONMENT STATUS & VARIABLE AUDIT
**Version:** 1.0.0-PROD  
**Classification:** Operational Security & Environment Configuration Specification  
**Rule:** Secrets must NEVER be displayed or logged.  

---

## 1. ENVIRONMENT CONFIGURATION CONTRACT

When running in production mode (`APP_ENV=production` or `ENVIRONMENT=production` or `RAILWAY_ENVIRONMENT=production`), Zylora executes `validate_production_settings()` at startup. The platform **fails closed** if any release-critical configuration is missing or insecure.

---

## 2. DETAILED VARIABLE-BY-VARIABLE AUDIT

| Variable Name | Required in Prod? | Semantic Purpose | Validation Rule | Failure Mode / Behavior if Missing |
| :--- | :--- | :--- | :--- | :--- |
| `APP_ENV` | **YES** | Platform environment (`production`, `test`, `development`) | Must normalize to `production`. Alias `ENVIRONMENT` or `RAILWAY_ENVIRONMENT` recognized. | Defaults to `development`. |
| `APP_URL` | **YES** | Canonical public URL of the application | Must start with `https://`; must not contain `localhost`, `127.0.0.1`, or `.example`. | Startup halts with `RuntimeError`. |
| `DATABASE_URL` | **YES** | Primary relational database connection string | Must be PostgreSQL (`postgresql://...`); cannot be SQLite or contain `zylora-dev-only` password. | Startup halts with `RuntimeError: Production environment requires PostgreSQL`. |
| `REDIS_URL` | OPTIONAL | Redis instance URL for distributed cache & limiter | Valid URI schema (`redis://...` or `rediss://...`). | Graceful fallback to database-backed rate limiting and session storage. |
| `SESSION_TTL_HOURS` | OPTIONAL | User session duration in hours | Integer >= 1. Default: `168` (7 days). | Uses default of 168 hours. |
| `ADMIN_NOTIFICATION_EMAIL` | OPTIONAL | Primary notification email for platform alerts | Valid email format. Default: `admin@example.com`. | System alerts fall back to platform log output. |
| `SUPER_ADMIN_EMAIL` | OPTIONAL | Initial Super Admin account bootstrap email | Valid email format. Can also use `SUPER_ADMIN_MAIL_ID`. | Bootstrap is skipped if absent (allowed if admin already exists). |
| `SUPER_ADMIN_PASSWORD` | OPTIONAL | Initial Super Admin account bootstrap password | Minimum 8 characters; required if `SUPER_ADMIN_EMAIL` is set. | Startup halts if email is set without password. |
| `OPENAI_API_KEY` | **YES** | Authentication key for OpenAI API | Non-empty string (`sk-...`). | Startup halts with `RuntimeError`. |
| `OPENAI_MODEL` | OPTIONAL | Primary LLM model for website generation | Non-empty string. Default: `gpt-5-mini`. | Uses default model string. |
| `SALES_ASSISTANT_MODEL` | **YES** | Model used for grounded customer sales assistant | Non-empty string. Default: `gpt-4o-mini`. | Startup halts with `RuntimeError`. |
| `RESEND_API_KEY` | **YES** | Transactional email provider API key (HTTPS TCP 443) | Non-empty string (`re_...`). | Startup halts with `RuntimeError`. No SMTP fallback. |
| `RESEND_FROM` | **YES** | Verified sender email address for outgoing emails | Must contain `@`; must not contain `.local` or `.example`. | Startup halts with `RuntimeError`. |
| `TWILIO_ACCOUNT_SID` | OPTIONAL | Twilio Account SID for WhatsApp messaging | Required if Meta WhatsApp credentials are not provided. | WhatsApp messaging disabled if both Twilio and Meta are absent. |
| `TWILIO_AUTH_TOKEN` | OPTIONAL | Twilio Auth Token for WhatsApp API | Required if `TWILIO_ACCOUNT_SID` is provided. | Twilio WhatsApp API calls fail with authentication error. |
| `TWILIO_WHATSAPP_FROM` | OPTIONAL | Sender WhatsApp number registered on Twilio | Required if `TWILIO_ACCOUNT_SID` is provided. | Outbound messages reject with missing sender error. |
| `WHATSAPP_PHONE_NUMBER_ID` | OPTIONAL | Meta Cloud WhatsApp Business Phone Number ID | Required if Twilio is not used. | Meta WhatsApp channel disabled if absent. |
| `WHATSAPP_ACCESS_TOKEN` | OPTIONAL | System user access token for Meta Graph API | Required if `WHATSAPP_PHONE_NUMBER_ID` is set. | Meta WhatsApp API calls fail authentication. |
| `WHATSAPP_GRAPH_VERSION` | OPTIONAL | Meta Graph API version | Default: `v23.0`. | Uses `v23.0`. |
| `GOOGLE_CLIENT_ID` | **YES** | Google OAuth Client ID for Social Sign-In | Non-empty string ending with `.apps.googleusercontent.com`. | Startup halts with `RuntimeError`. |
| `GOOGLE_CLIENT_SECRET` | **YES** | Google OAuth Client Secret | Non-empty secret string. | Startup halts with `RuntimeError`. |
| `GOOGLE_REDIRECT_URI` | OPTIONAL | Callback URL for Google OAuth | URL path or full HTTPS URL. Defaults to `/api/auth/google/callback`. | Defaults to `/api/auth/google/callback`. |
| `GOOGLE_SERVICE_ACCOUNT_JSON`| OPTIONAL | JSON credentials for Google Sheets CRM sync | Valid JSON string with service account credentials. | Google Sheets CRM integration disabled. |
| `GOOGLE_SERVICE_ACCOUNT_FILE`| OPTIONAL | File path to Google Service Account JSON | Valid file path. Alternative to JSON string. | Google Sheets CRM integration disabled. |
| `TURNSTILE_SITE_KEY` | **YES** | Cloudflare Turnstile CAPTCHA public site key | Non-empty string (`0x4AAAAAA...`). | Startup halts with `RuntimeError`. |
| `TURNSTILE_SECRET_KEY` | **YES** | Cloudflare Turnstile verification secret key | Non-empty secret string. | Startup halts with `RuntimeError`. |
| `TURNSTILE_ENABLED` | OPTIONAL | Master toggle for Turnstile bot verification | Boolean. Default: `True`. | Enabled by default. |
| `TURNSTILE_ALLOWED_HOSTNAMES`| OPTIONAL | Comma-separated list of allowed Turnstile hostnames | String. Defaults to application domains. | Validates against request host. |
| `PAYMENT_PROVIDER` | **YES** | Active payment provider gateway | Must be `razorpay` or `mock`. | Startup halts if invalid provider specified. |
| `RAZORPAY_KEY_ID` | CONDITIONAL | Razorpay Key ID | Required if `PAYMENT_PROVIDER=razorpay`. | Payment checkout disabled; startup halts in prod. |
| `RAZORPAY_KEY_SECRET` | CONDITIONAL | Razorpay Key Secret | Required if `PAYMENT_PROVIDER=razorpay`. | Payment signature validation fails; startup halts. |
| `RAZORPAY_WEBHOOK_SECRET` | CONDITIONAL | Secret used to verify Razorpay webhook signatures | Required if `PAYMENT_PROVIDER=razorpay`. | Webhook ingestion disabled; startup halts. |
| `CLOUDFLARE_API_TOKEN` | OPTIONAL | Cloudflare API token for custom domain provisioning | Must have SSL for SaaS edit permissions. | Custom domain automation falls back to manual verification. |
| `CLOUDFLARE_ACCOUNT_ID` | OPTIONAL | Cloudflare Account ID | Required if `CLOUDFLARE_API_TOKEN` is set. | Cloudflare API calls fail if absent. |
| `CLOUDFLARE_ZONE_ID` | OPTIONAL | Cloudflare Zone ID for root domain | Required if `CLOUDFLARE_API_TOKEN` is set. | Custom domain CNAME creation disabled. |
| `CLOUDFLARE_SAAS_TARGET` | **YES** | CNAME fallback target for custom customer domains | Non-empty string; must not contain `.example`. | Startup halts with `RuntimeError`. |
| `PUBLIC_BASE_DOMAIN` | **YES** | Platform apex domain (e.g., `zylora.com`) | Non-empty string; must not contain `.example`. | Startup halts with `RuntimeError`. |
| `INDEXNOW_ENDPOINT` | OPTIONAL | Search engine instant indexing API endpoint | Default: `https://api.indexnow.org/indexnow`. | Instant search indexing disabled if unavailable. |
| `MEDIA_STORAGE_PROVIDER` | **YES** | Media upload storage driver (`local` or `s3`) | Must be `local` or `s3`. | Startup halts if invalid provider specified. |
| `MEDIA_STORAGE_DIR` | OPTIONAL | Local disk path for uploaded media files | Valid directory path. Default: `data/media`. | Creates directory automatically. |
| `MEDIA_STORAGE_DURABLE` | CONDITIONAL | Attestation that local disk is a persistent volume | Must be `True` if `MEDIA_STORAGE_PROVIDER=local` in production. | Startup halts to prevent data loss on ephemeral containers. |
| `MEDIA_MAX_UPLOAD_MB` | OPTIONAL | Maximum allowed asset upload size in megabytes | Integer. Default: `12`. Enforced before reading full body. | Defaults to 12 MB. |
| `MEDIA_MAX_PIXELS` | OPTIONAL | Maximum image resolution to prevent decompression bombs | Integer. Default: `40,000,000` (40 MP). | Defaults to 40 MP. |
| `MEDIA_S3_BUCKET` | CONDITIONAL | AWS S3 or compatible bucket name | Required if `MEDIA_STORAGE_PROVIDER=s3`. | Startup halts if missing when provider is S3. |
| `MEDIA_S3_REGION` | OPTIONAL | S3 region identifier | Default: `us-east-1`. | Defaults to `us-east-1`. |
| `MEDIA_S3_ACCESS_KEY_ID` | CONDITIONAL | S3 access key | Required if `MEDIA_STORAGE_PROVIDER=s3`. | S3 uploads fail authentication. |
| `MEDIA_S3_SECRET_ACCESS_KEY` | CONDITIONAL | S3 secret access key | Required if `MEDIA_STORAGE_PROVIDER=s3`. | S3 uploads fail authentication. |
| `MEDIA_S3_PREFIX` | OPTIONAL | Object key prefix in S3 bucket | Default: `zylora-media`. | Defaults to `zylora-media`. |
| `PEXELS_API_KEY` | OPTIONAL | Pexels API key for curated stock photography | Non-empty string. | Stock photo search returns empty results. |

---

## 3. SECURITY & CREDENTIAL HANDLING VERDICT

* **Zero Leakage:** No environment variables or secrets are exposed via public APIs, error payloads, stack traces, or client-side bundles.
* **Fail-Closed Gate:** Missing production credentials immediately halt startup with an actionable error list before traffic is accepted.
* **Environment Status:** **VALIDATED & PRODUCTION COMPLIANT**.
