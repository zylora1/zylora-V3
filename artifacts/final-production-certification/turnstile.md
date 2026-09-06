# Turnstile evidence

- Public `/signup` renders a Turnstile slot.
- Railway variables show `TURNSTILE_ENABLED=true` and allowed hostname `zylora-api-production.up.railway.app`.
- Tokenless live signup probe: HTTP 400, code `TURNSTILE_REQUIRED`, message `Complete the bot-protection challenge.`
- Forged-token live signup probe: HTTP 400, code `TURNSTILE_FAILED`, provider error `invalid-input-response`.
- Invalid login probe: HTTP 401, `Invalid email or password`.

Result: server-side enforcement is empirically verified. A valid interactive challenge was not completed because the available browser surface could not attach to a production tab; no bypass was used. Status: **HUMAN ACTION REQUIRED** for the final normal-user signup.
