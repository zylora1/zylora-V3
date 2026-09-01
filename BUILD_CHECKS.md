# Build Checks — 2026-08-26

## PASS

- `python -m compileall -q app scripts tests`
- `node --check` for every shipped `static/*.js` file
- Public template catalogue is empty and no `site_templates/` or `template_projects/` directory is shipped.
- Internal AI renderer remains hidden from `/api/templates` and `/template-preview/*`.
- Customer-site blog routes and dashboard blog CMS are removed.
- Platform blog write/publish APIs remain protected by SUPER_ADMIN authorization.

## Deployment-only gates

Live OpenAI, Razorpay, Cloudflare, Google OAuth/Sheets, Resend/SMTP, WhatsApp and Turnstile behavior requires credentialed staging/production verification. Generated Next.js exports should also be installed and built in network-enabled CI before deployment.
