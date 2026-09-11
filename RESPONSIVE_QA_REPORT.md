# Responsive QA report

## Current release delta

Executed with the bundled Playwright helper and local Uvicorn server on 2026-09-11.

| Browser | 1440×900 | 390×844 | Result |
| --- | ---: | ---: | --- |
| Chromium | 15/15 routes | 15/15 routes | 30/30 passed |
| Firefox | 15/15 routes | 15/15 routes | 30/30 passed |
| WebKit | 15/15 routes | 15/15 routes | 30/30 passed |

Each successful route had HTTP 200, exactly one H1, no detected document horizontal overflow and zero console errors. Six Chromium viewport screenshots (home, features and help at both sizes) were captured and visually inspected.

## Studio evidence

The authenticated blank-site Studio golden-path harness was rerun elevated on 2026-09-11: Chromium, Firefox and WebKit each passed 9 assertions, ending with `0 errors`, at 1440×900. The existing Studio browser QA from the preceding implementation gate covered Chromium/Firefox/WebKit and 11 viewport sizes with 33 recorded passes; it is historical executed evidence, not silently relabeled as a new full matrix run.

## Remaining matrix

The release brief calls for 1280×800, 1024×768, 768×1024, 430×932, 375×812 and 360×800, plus authenticated Studio golden-path coverage at those sizes. Those exact checks are not included in the current public-route script result and remain unverified.
