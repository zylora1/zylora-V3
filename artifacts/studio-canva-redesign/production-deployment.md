# Studio Canva redesign production deployment evidence

- Final report-containing deployment: Railway `22f7155d-f3af-4abf-a040-c58a91678863`.
- Final report-containing deployed SHA: `44b693cad9f23dcf3350e1dbb4f425c3e57d4173`.
- Status: `SUCCESS`.
- Production URL: `https://zylora-api-production.up.railway.app`.
- Health: `/api/health` HTTP 200, body `{"status":"ok"}`.
- Public smoke: required public routes returned HTTP 200; no page errors; no failed first-party requests; two expected unauthenticated 401 console probes.

The final report-containing deployment completed successfully; the exact SHA is also the current `origin/main` commit.
