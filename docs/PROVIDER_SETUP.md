# Production provider setup

The code contains production adapters, but live hosting requires your own provider credentials and dashboard configuration.

## Razorpay
Create Starter/Growth plans in Razorpay, provide live `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and a separate webhook secret. Configure the public HTTPS endpoint `/webhooks/razorpay` and subscribe to subscription lifecycle/payment events. Managed by experts is intentionally rejected by the checkout endpoint.

## Google Sign-In
Create a Web OAuth client, add the deployed Zylora origin/redirect configuration, and set `GOOGLE_CLIENT_ID` plus `NEXT_PUBLIC_GOOGLE_CLIENT_ID`.

## Resend
Verify the sending domain and set `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.

## Twilio WhatsApp
Configure a production WhatsApp sender and set `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_WHATSAPP_FROM`. Sandbox credentials are for testing only. Account owners configure their private E.164 destination in the editor under **Leads → WhatsApp lead notifications**; public lead requests cannot choose or override that destination.

Production delivery uses the Celery/Redis worker. Transient connection, rate-limit, and 5xx failures are retried up to three total attempts. Ambiguous response timeouts are not automatically retried because Twilio may already have accepted the message. Delivery state remains visible on the lead dashboard as pending, sent, failed, or not configured.

## Cloudflare
Configure the Zylora SaaS zone/fallback origin and an API token permitted to manage Custom Hostnames. Set `CLOUDFLARE_ZONE_ID` and `CLOUDFLARE_API_TOKEN`. Customer custom domains are created through Cloudflare for SaaS.

## Turnstile
Create a production Turnstile widget and set both site and secret keys. The backend validates tokens with Siteverify; never disable this in production.

## Required secrets
Never commit `.env` or live provider credentials. Rotate any credential that has ever been committed or shared publicly.
