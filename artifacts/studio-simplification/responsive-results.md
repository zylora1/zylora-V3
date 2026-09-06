# Responsive Studio evidence

The mobile harness ran at 390×844 with Chromium, Firefox and WebKit. It verified the mobile-specific bottom navigation, sheet-style left workspace, contextual selection toolbar, zoom control and `document.documentElement.scrollWidth <= document.documentElement.clientWidth`.

Desktop Studio regression ran at 1440×900 in all three engines. Existing renderer tests continue to cover published responsive CSS and motion/reduced-motion behavior. The remaining viewport widths (1440, 1366, 1280, 1024, 768, 430, 412, 390, 375 and 360) remain a manual visual-QA follow-up rather than an automated PASS in this pass.
