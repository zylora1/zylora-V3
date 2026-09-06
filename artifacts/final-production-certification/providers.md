# Provider evidence

## OpenAI

Railway-injected key was used only for a non-billable `GET https://api.openai.com/v1/models`; response was HTTP 200. This proves credential/API reachability, not the full authenticated AI Creator or Sales Assistant workflow.

## Resend

Railway-injected key was used only for a non-sending `GET https://api.resend.com/domains`; response was HTTP 401. Do not certify transactional email. Human action: replace/authorize the key and verify `RESEND_FROM`.

## Google OAuth, WhatsApp, Google Sheets, Cloudflare

Variables are present for some of these integrations, but no safe controlled production account/domain/recipient was available in this run. They remain UNVERIFIED or OPTIONAL as shown in the dependency matrix.

## Razorpay

No payment credentials were contacted. Final status is exactly: `Razorpay: NOT CONFIGURED`.
