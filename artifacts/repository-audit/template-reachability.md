# Template Runtime Reachability Audit

Templates inspected: **81**
Source bytes: **334,772,587** (319.264 MiB)
Asset bytes: **330,138,287** (314.844 MiB)
Reachable asset bytes: **190,997,383** (182.149 MiB)
Candidate orphan asset bytes: **139,140,904** (132.695 MiB)

The compact runtime retains each template's metadata, render pages, CSS, verification manifests, and every asset referenced by render HTML/CSS. Ambiguous basename references retain all matching candidates; unresolved references are not deleted automatically.

| Template | Source MiB | Assets MiB | Reachable MiB | Candidate orphan MiB | Unresolved refs |
|---|---:|---:|---:|---:|---:|
| `ai-starter-kit` | 33.445 | 33.300 | 13.629 | 19.671 | 0 |
| `fauna-flora` | 19.876 | 19.733 | 2.503 | 17.230 | 0 |
| `saas-candy` | 15.241 | 15.208 | 4.855 | 10.353 | 0 |
| `nexusai` | 10.696 | 10.616 | 1.161 | 9.455 | 0 |
| `picto` | 18.010 | 17.911 | 9.073 | 8.838 | 0 |
| `sarab` | 10.626 | 10.573 | 3.518 | 7.055 | 0 |
| `desgy` | 12.054 | 11.986 | 5.074 | 6.912 | 0 |
| `tailone` | 7.572 | 7.516 | 0.945 | 6.571 | 0 |
| `eduleb` | 14.534 | 14.379 | 8.759 | 5.620 | 0 |
| `studiova` | 10.744 | 10.574 | 5.953 | 4.621 | 0 |
| `minimal` | 5.411 | 5.359 | 1.691 | 3.668 | 0 |
| `si-education` | 4.239 | 4.182 | 1.018 | 3.164 | 0 |
| `arcade` | 4.616 | 4.568 | 2.255 | 2.312 | 0 |
| `radiante-salon` | 4.399 | 4.352 | 2.168 | 2.185 | 0 |
| `foodmart` | 4.965 | 4.855 | 2.757 | 2.098 | 0 |
| `furnish` | 12.507 | 12.450 | 10.478 | 1.971 | 0 |
| `kaira` | 3.559 | 3.493 | 1.647 | 1.845 | 0 |
| `astrodeck` | 2.023 | 1.885 | 0.119 | 1.766 | 0 |
| `green-infrastructure` | 5.439 | 5.417 | 3.906 | 1.511 | 0 |
| `bounties-work` | 1.245 | 1.223 | 0.000 | 1.223 | 0 |
| `coretex-studio` | 1.502 | 1.470 | 0.270 | 1.200 | 0 |
| `meyawo` | 2.347 | 2.328 | 1.155 | 1.173 | 0 |
| `klar` | 2.375 | 2.346 | 1.287 | 1.059 | 0 |
| `dsign` | 3.458 | 3.418 | 2.534 | 0.884 | 0 |
| `jessica` | 5.963 | 5.917 | 5.110 | 0.808 | 0 |
| `master-handyman` | 1.620 | 1.589 | 0.795 | 0.795 | 0 |
| `luxe-salon` | 1.555 | 1.523 | 0.762 | 0.762 | 0 |
| `typefolio` | 1.188 | 1.158 | 0.476 | 0.682 | 0 |
| `monica` | 2.875 | 2.728 | 2.237 | 0.490 | 0 |
| `astroship` | 0.594 | 0.529 | 0.039 | 0.490 | 0 |
| `lounge` | 5.441 | 5.407 | 4.930 | 0.478 | 0 |
| `mariana-design` | 0.562 | 0.541 | 0.071 | 0.470 | 0 |
| `belonging-collective` | 0.798 | 0.752 | 0.283 | 0.470 | 0 |
| `learnhub` | 17.053 | 16.965 | 16.515 | 0.450 | 0 |
| `luther` | 3.569 | 3.538 | 3.095 | 0.443 | 0 |
| `forma-studio` | 1.099 | 1.075 | 0.699 | 0.375 | 0 |
| `godesign-studio` | 0.542 | 0.471 | 0.099 | 0.372 | 0 |
| `archi` | 2.903 | 2.872 | 2.508 | 0.364 | 0 |
| `salone` | 2.053 | 1.942 | 1.611 | 0.331 | 0 |
| `crypgo` | 2.309 | 2.264 | 1.976 | 0.288 | 0 |
| `editorial-red-portfolio` | 2.097 | 2.074 | 1.801 | 0.273 | 0 |
| `restaurant` | 7.795 | 7.731 | 7.466 | 0.265 | 0 |
| `booksaw` | 2.997 | 2.962 | 2.754 | 0.208 | 0 |
| `experience-studio` | 0.226 | 0.207 | 0.000 | 0.207 | 0 |
| `astrolus` | 0.604 | 0.519 | 0.314 | 0.206 | 0 |
| `isomeet-marketplace` | 0.198 | 0.163 | 0.000 | 0.163 | 0 |
| `iso-studio` | 0.188 | 0.163 | 0.000 | 0.163 | 0 |
| `craft-minimal` | 0.173 | 0.154 | 0.000 | 0.154 | 0 |
| `landwind` | 0.791 | 0.698 | 0.561 | 0.137 | 0 |
| `metta-community` | 0.146 | 0.128 | 0.000 | 0.128 | 0 |
| `skilline` | 5.080 | 5.007 | 4.894 | 0.113 | 0 |
| `atacama-action` | 0.103 | 0.085 | 0.000 | 0.085 | 0 |
| `gentle-systems` | 0.077 | 0.062 | 0.000 | 0.062 | 0 |
| `mountain-saas` | 0.055 | 0.023 | 0.000 | 0.023 | 0 |
| `incention-story` | 0.040 | 0.023 | 0.000 | 0.023 | 0 |
| `neo-brutal-saas` | 0.091 | 0.059 | 0.037 | 0.022 | 0 |
| `nextjs-tailwind-portfolio` | 1.701 | 1.645 | 1.643 | 0.003 | 0 |
| `luma-portfolio` | 3.473 | 3.440 | 3.438 | 0.002 | 0 |
| `apex-digital` | 0.018 | 0.001 | 0.000 | 0.001 | 0 |
| `hofin-real-estate` | 2.722 | 2.687 | 2.686 | 0.001 | 0 |
| `rendr-fintech` | 0.018 | 0.001 | 0.000 | 0.001 | 0 |
| `solaria-energy` | 3.054 | 3.032 | 3.031 | 0.001 | 0 |
| `versatile-flow` | 0.033 | 0.001 | 0.000 | 0.001 | 0 |
| `moss-retreat` | 0.101 | 0.081 | 0.081 | 0.001 | 0 |
| `square-card` | 0.031 | 0.001 | 0.000 | 0.001 | 0 |
| `creacy-portfolio` | 2.208 | 2.187 | 2.186 | 0.000 | 0 |
| `commerce-ventures` | 0.278 | 0.000 | 0.000 | 0.000 | 0 |
| `uniqum-services` | 0.967 | 0.939 | 0.939 | 0.000 | 0 |
| `cono-photography` | 3.227 | 3.210 | 3.210 | 0.000 | 0 |
| `lauritz-magazine` | 0.144 | 0.120 | 0.120 | 0.000 | 0 |
| `brivon` | 8.352 | 8.261 | 8.261 | 0.000 | 0 |
| `editorial-neon-yellow` | 2.025 | 2.001 | 2.001 | 0.000 | 0 |
| `hollhii-agency` | 0.023 | 0.000 | 0.000 | 0.000 | 0 |
| `lavender-coach` | 0.024 | 0.000 | 0.000 | 0.000 | 0 |
| `nature-initiatives` | 0.746 | 0.709 | 0.709 | 0.000 | 0 |
| `nexora` | 1.149 | 1.018 | 1.018 | 0.000 | 0 |
| `olivia` | 1.259 | 1.235 | 1.235 | 0.000 | 0 |
| `prime-dental` | 2.413 | 2.345 | 2.345 | 0.000 | 0 |
| `smile-studio` | 2.454 | 2.350 | 2.350 | 0.000 | 0 |
| `trofo-roofing` | 1.082 | 1.028 | 1.028 | 0.000 | 0 |
| `zita-portfolio` | 0.095 | 0.079 | 0.079 | 0.000 | 0 |

## Dependency map

- Catalogue metadata → `template_projects/<slug>/metadata.json`
- Readiness and rights validation → `verification/render-gate.json`, `assets-manifest.json`
- Published template body → `render/<page>.html`
- Published template styles → `app/globals.css`
- Hosted images/fonts/media → reachable files under `assets/`, rewritten and served by `/template-assets/<slug>/...`
- Admin catalogue edits → `metadata.json` (existing file-backed behavior)
