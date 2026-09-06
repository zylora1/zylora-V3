# Studio Canva redesign production deployment evidence

- First implementation deployment: Railway `4ae875cf-7ef1-440a-b075-a38d1dc28ac6`.
- First implementation deployed SHA: `341252cee1716c1dff85622f601dd8546cbf006f`.
- Status: `SUCCESS`.
- Production URL: `https://zylora-api-production.up.railway.app`.
- Health: `/api/health` HTTP 200, body `{"status":"ok"}`.
- Public smoke: required public routes returned HTTP 200; no page errors; no failed first-party requests; two expected unauthenticated 401 console probes.

The final report update is intentionally released in a follow-up commit and will be redeployed before certification of that final SHA.
