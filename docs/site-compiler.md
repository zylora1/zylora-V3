# Zylora Site Compiler Specification

## 1. Overview
The Zylora Site Compiler transforms a raw editor document (`SiteDocument` + `Zylora Semantic Manifest`) into production-grade, highly optimized, accessible, and secure static website bundles. Raw design output is never served directly to end-users.

---

## 2. Compiler Pipeline & Intermediate Representation (SiteIR)

```
Visual Document (SiteDocument) + Zylora Semantic Manifest
                           │
                           ▼
           [Step 1: Hierarchy Normalization]
      (Tree pruning, z-index sorting, dead node elimination)
                           │
                           ▼
          [Step 2: Semantic Role & Tag Mapping]
      (Maps nodes to <nav>, <main>, <section>, <form>, <button>)
                           │
                           ▼
         [Step 3: Responsive Cascade Resolution]
      (Computes desktop -> tablet -> mobile CSS media queries)
                           │
                           ▼
         [Step 4: Asset & URL Canonicalization]
      (Durable CDN URLs, WebP derivatives, responsive srcset)
                           │
                           ▼
                 [SiteIR Data Structure]
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   [HTML5 Emitter]   [CSS3 Emitter]   [Vanilla Runtime]
         │                 │                 │
         └─────────────────┬─────────────────┘
                           ▼
           [Step 5: Security & XSS Sanitization]
      (Bleach / DOMPurify, script tag neutralization, CSP)
                           │
                           ▼
              [Final Compiled Site Artifact]
```

---

## 3. Production HTML5 Emission Rules
1. **Semantic Tags Over Generic Divs**:
   - `navigation` nodes emit `<header role="banner">` or `<nav aria-label="Main Navigation">`.
   - `section` nodes emit `<section class="zy-section" id="...">`.
   - `heading` nodes emit `<h1>` through `<h6>` respecting semantic hierarchy.
   - `paragraph` and `text` emit `<p>` or `<span>`.
   - `button` nodes emit `<button type="...">` or `<a role="button">` with accessible labels.
   - `footer` nodes emit `<footer role="contentinfo">`.
2. **Accessible Form & Booking Markup**:
   - Every input is paired with a corresponding `<label for="...">`.
   - Error feedback containers feature `aria-live="polite"`.
   - Interactive elements have explicit keyboard `:focus-visible` styling.

---

## 4. Production CSS Emission Rules
1. **Layout Strategy**:
   - Sections authored in **Flex mode** emit native `display: flex; flex-direction: ...; gap: ...;`.
   - Containers authored in **Grid mode** emit native `display: grid; grid-template-columns: ...;`.
   - Nodes authored in **Freeform mode** emit `position: absolute;` within their parent boundary.
2. **Responsive Media Queries**:
   - CSS properties are grouped into clean, cascading `@media (max-width: 991px)` (Tablet) and `@media (max-width: 767px)` (Mobile) blocks.
3. **Class Deduplication**: Identical visual utility declarations are merged into deterministic CSS classes to minimize bundle footprint.

---

## 5. Security & Sanitization Boundaries
- **Embeds**: Raw HTML embeds are parsed through strict HTML sanitization (`bleach` / `nh3`), stripping `<script>`, inline event handlers (`onload`, `onerror`), and `javascript:` URIs.
- **Iframes**: Iframes must include `sandbox="allow-scripts allow-same-origin"` and explicit dimensions.
- **CSP**: All inline scripts are eliminated in favor of external runtime scripts protected by Content-Security-Policy headers.

---

## 6. Runtime Footprint
Published websites load **zero** editor code, zero React libraries, and zero Penpot dependencies. The total client-side JavaScript for forms, appointment booking, and mobile navigation toggling is under **12 KB** uncompressed.
