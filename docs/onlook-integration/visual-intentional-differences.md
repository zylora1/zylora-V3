# Visual Intentional Differences

This register documents differences that are intentional platform adaptations rather than visual regressions. The active visual reference is pinned Onlook commit `423e2e924366419e418ee049093872d535eea41a`.

| State | Upstream element | Zylora element | Reason | Visual impact | Masked in diff |
|---|---|---|---|---|---|
| All | Onlook product switcher and logo | Zylora product switcher and Zylora brand mark | Customer-facing branding must remain Zylora-owned | Same geometry; different label/mark | No |
| Top bar | Onlook cloud/deploy actions | Zylora publish, sandbox, and platform actions | Zylora uses its own publishing and tenant platform | Same control rhythm; action labels differ | No |
| Project/session | Onlook cloud project persistence | Zylora tenant-scoped workspace adapters | Preserve authorization, ownership, and tenant isolation | Data and status text differ | No |
| AI | Onlook cloud provider controls | Zylora provider-neutral AI registry | Zylora routes AI through its authorized provider boundary | Provider labels and request states differ | No |
| Code runtime | Onlook Freestyle/cloud runtime | Zylora local development sandbox | Zylora must not expose unsupported cloud infrastructure | Runtime status and URL differ | No |
| Native engine | No direct Onlook equivalent | Zylora Native Studio | Native sites use the existing Zylora document engine | Entire engine is intentionally Zylora-specific | No |
| Dashboard | No direct Onlook Dashboard equivalent | Zylora Dashboard | Dashboard is a platform surface, not an upstream editor surface | Page composition differs while shared tokens and controls match | No |

No screenshot mismatch is masked by this register. Differences are disclosed so visual review can distinguish platform intent from accidental drift.
