# Performance evidence

## CRM benchmark (existing repository benchmark, SQLite runtime)

`crm_benchmark_results.json` contains seeded list/search/filter/overview/funnel measurements for 100, 1,000, and 10,000 records. Representative p95 values:

| Records | List page 1 | Deep page | Search prefix | Hot filter | Overview | Funnel |
|---:|---:|---:|---:|---:|---:|---:|
| 100 | 148.06 ms | 27.67 ms | 25.53 ms | 24.53 ms | 40.38 ms | 28.77 ms |
| 1,000 | 36.48 ms | 28.08 ms | 31.22 ms | 29.44 ms | 26.87 ms | 26.46 ms |
| 10,000 | 61.01 ms | 50.25 ms | 131.56 ms | 48.03 ms | 32.18 ms | 33.19 ms |

These are useful regression evidence but are not PostgreSQL production latency claims.

## Studio/browser

The real-browser Studio journey completed in Chromium, Firefox, and WebKit with 28 interaction checks per engine and 0 uncaught browser errors.

The final rebuilt-bundle Chromium profile in `performance-profile-drag-raf-built.json` exercised selection, drag, resize, zoom, breakpoint switching, undo, and save for 50, 100, 250, and 500 requested nodes. It rendered 101, 201, 501, and 1,001 DOM nodes respectively, with zero browser errors. The current pass coalesces drag updates per animation frame, removes per-sibling DOM layout reads during snapping, bounds spacing-guide work, filters snapping candidates by proximity, memoizes unchanged canvas nodes, and preserves valid selection across undo/redo.

| Requested nodes | Selection p95 frame | Drag p95 frame / long task max | Resize p95 frame / long task max | Undo p95 frame / long task max | Zoom p95 frame |
|---:|---:|---:|---:|---:|---:|
| 50 | 16.7 ms | 16.8 ms / 0 | 16.7 ms / 0 | 16.7 ms / 0 | 16.8 ms |
| 100 | 16.7 ms | 16.8 ms / 0 | 16.8 ms / 0 | 16.7 ms / 0 | 16.7 ms |
| 250 | 16.7 ms | 16.7 ms / 0 | 16.8 ms / 0 | 16.7 ms / 0 | 16.7 ms |
| 500 | 16.7 ms | 16.8 ms / 0 | 16.7 ms / 0 | 33.4 ms / 0 | 16.7 ms |

Input-event timing entries were unavailable in this headless Chromium profile, so frame timing and long-task measurements are reported instead. The final rebuilt-bundle sample records zero long tasks for every requested document size and tested operation. The 500-node undo p95 is 33.4 ms, while drag/resize/zoom remain at or below 16.8 ms p95. This profile meets the local interaction target; representative production hardware and PostgreSQL remain separate environment gates.

## Remaining gate

Production-scale performance should still be rerun against PostgreSQL with representative hardware and a persistent media backend before a full production certification decision.
