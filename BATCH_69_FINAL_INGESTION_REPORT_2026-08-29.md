# Zylora — Batch 69 Continuation Final Ingestion Report

**Date:** 2026-08-29

## Final catalogue result

- Supplied template ZIPs: **69**
- Neutral processed ZIPs: **69**
- Batch templates accepted into the public Zylora catalogue: **69 / 69**
- Original complete page documents available: **32**
- Original >10-route projects consolidated to the managed ceiling: **8**
- Missing-DOM packages independently rebuilt from recoverable functional signals: **37**
- Remaining manual-review/quarantine templates: **0**
- Templates currently above Free's 2-page cap: **64** (flagged in metadata; not truncated for Free)
- Templates above the 10-page managed ceiling after consolidation: **0**

## Reconstruction policy

- No supplied HTML/CSS/JS/framework source is shipped in the neutral reconstructions.
- No supplied binary logo, favicon, screenshot, photograph, illustration, or other source asset is shipped in the reconstructions.
- Complete source projects were translated into independently authored Zylora page structures and supported interaction semantics.
- For the eight projects originally above 10 routes, lower-priority overflow routes were consolidated into related pages as sections. Their detected functional categories were preserved; routes were not silently dropped.
- For 37 packages whose original DOM/page document was absent, Zylora uses only recoverable functional signals from the saved resource set (for example forms, galleries, pricing, FAQ, resource, catalogue, team or media signals) to author a new neutral template. **Pixel parity and original page-graph parity are not asserted for these 37 packages.**
- Missing-DOM reconstructions use a separate fail-closed publication verification path (`reconstructed_from_functional_signals` + `recovered_signal_inventory_verified`) instead of falsely setting `page_inventory_verified=true`.

## Source isolation / branding validation

- Source files hashed for direct-reuse detection: **2967**
- Direct source-file hash reuse collisions: **0**
- Original source identity leakage scan: **PASS**
- Logo/favicon/.git residual scan: **PASS**
- Production media hotlink scan: **PASS**
- ZIP integrity: **69/69 PASS**

## Quality and regression validation

- Template ingestion QA: **69 projects / PASS** — page inventory, SiteDocument editability, local assets, internal routes, unsupported-UI policy and normalized structural uniqueness (<0.98).
- Premium template quality QA: **69 public templates / 0 errors**.
- Asset uniqueness QA: **404 local binaries unique / 0 source URLs**.
- Non-browser repository suite: **122/122 tests passed across split module runs**. The single monolithic invocation exceeds the execution window; no module was left unexecuted.
- Browser E2E wrapper: **PASS**.
- Browser workflow: **91 checks / 0 errors**.
- SEO audit: **17 checks / 0 errors**.

## Neutral template inventory

| ID | Library name | Pages | Originally detected | Consolidated | Source DOM | Rebuilt from signals | Free >2 | Status |
|---|---|---:|---:|---|---|---|---|---|
| ZT-001 | Vela Practice | 8 | 8 | No | Yes | No | Yes | Accepted |
| ZT-002 | Cinder Cloud | 10 | 13 | Yes | Yes | No | Yes | Accepted |
| ZT-003 | Pine Creative | 10 | 12 | Yes | Yes | No | Yes | Accepted |
| ZT-004 | Arbor Labs | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-005 | Brightfield Collective | 10 | 12 | Yes | Yes | No | Yes | Accepted |
| ZT-006 | Modo Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-007 | Civic Consulting | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-008 | Cedar Advisory | 1 | 1 | No | No | Yes | No | Accepted |
| ZT-009 | Woven Goods | 1 | 1 | No | Yes | No | No | Accepted |
| ZT-010 | Aster Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-011 | Harbor Creative | 8 | 8 | No | Yes | No | Yes | Accepted |
| ZT-012 | Motive Market | 6 | 6 | No | Yes | No | Yes | Accepted |
| ZT-013 | Arden Goods | 5 | 5 | No | Yes | No | Yes | Accepted |
| ZT-014 | Hearth Works | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-015 | Highland Company | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-016 | Clearwater Finance | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-017 | Meridian Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-018 | Aster Partners | 10 | 10 | No | Yes | No | Yes | Accepted |
| ZT-019 | Harbor Supply | 10 | 14 | Yes | Yes | No | Yes | Accepted |
| ZT-020 | Juniper Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-021 | Tide Journeys | 1 | 1 | No | No | Yes | No | Accepted |
| ZT-022 | Kite Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-023 | Sable Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-024 | Clearwater Spaces | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-025 | Forma Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-026 | Orbit Ledger | 10 | 10 | No | Yes | No | Yes | Accepted |
| ZT-027 | Frame Practice | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-028 | Trellis Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-029 | Lumen Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-030 | Mica Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-031 | Vale Creative | 10 | 14 | Yes | Yes | No | Yes | Accepted |
| ZT-032 | Northline Practice | 1 | 1 | No | Yes | No | No | Accepted |
| ZT-033 | Drift Systems | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-034 | Fieldnote Works | 8 | 8 | No | Yes | No | Yes | Accepted |
| ZT-035 | Vantage Practice | 10 | 12 | Yes | Yes | No | Yes | Accepted |
| ZT-036 | Bloom Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-037 | Calder Form | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-038 | Beacon Studio | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-039 | Ember Growth | 8 | 8 | No | Yes | No | Yes | Accepted |
| ZT-040 | Fable Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-041 | Lucent Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-042 | Loft Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-043 | Signal Company | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-044 | Arc Studio | 1 | 1 | No | Yes | No | No | Accepted |
| ZT-045 | Stone Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-046 | Beacon Academy | 10 | 10 | No | Yes | No | Yes | Accepted |
| ZT-047 | Relay Flow | 10 | 13 | Yes | Yes | No | Yes | Accepted |
| ZT-048 | Morrow Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-049 | Oriel Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-050 | Sage Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-051 | Verge Works | 5 | 5 | No | Yes | No | Yes | Accepted |
| ZT-052 | Quarry Labs | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-053 | Stillwater Academy | 10 | 10 | No | Yes | No | Yes | Accepted |
| ZT-054 | Folio Works | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-055 | Peak Works | 10 | 13 | Yes | Yes | No | Yes | Accepted |
| ZT-056 | Prism Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-057 | Oriel Works | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-058 | Slate Energy | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-059 | Ridge Growth | 9 | 9 | No | Yes | No | Yes | Accepted |
| ZT-060 | Quarry Spaces | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-061 | Marrow Systems | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-062 | Mosaic Routes | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-063 | Kindred Company | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-064 | Roam Studio | 10 | 10 | No | Yes | No | Yes | Accepted |
| ZT-065 | Ground Collective | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-066 | Civic Works | 8 | 8 | No | Yes | No | Yes | Accepted |
| ZT-067 | Cedar Company | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-068 | Vela Studio | 4 | 4 | No | No | Yes | Yes | Accepted |
| ZT-069 | Cinder Studio | 10 | 10 | No | Yes | No | Yes | Accepted |

## Important interpretation

All 69 supplied packages now have public Zylora-native catalogue entries. For the 37 source packages that did not contain the original page document, the result is an independently authored functional reconstruction based on recoverable signals—not a claim that an absent original DOM was reproduced exactly.
