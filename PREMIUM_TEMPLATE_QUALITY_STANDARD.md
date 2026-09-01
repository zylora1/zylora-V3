# Zylora Premium Template Quality Standard

This is the implementation gate for every public catalogue template added after the premium-redesign pass.

## Quality equivalence, not visual sameness
Cinder Frame is a craftsmanship benchmark only. No new template may inherit its palette, typography, hero formula, photography language, section rhythm or footer design merely because Cinder performs well. Each template must encode its own art direction in `metadata.json` and retain a template-local visible implementation.

## Typography
Every public template must use at least two intentional type roles: a display/headline family and a body/UI family. A third accent/mono/editorial family is encouraged only when it strengthens the concept. Reusing the same pairing across unrelated references is a visual QA failure even when technically valid.

## Composition
A new template must not default to `hero → feature cards → benefits grid → CTA → generic footer`. Section sequence, density, image scale, card usage, whitespace and transitions must be derived from the reference or the template's own art-direction specification.

## Footer
Every template ships with a designed footer that continues its brand language. The footer is part of the composition and must have its own structure, scale and closing idea rather than acting as a small utility strip.

## Assets
Major images/illustrations must match the reference medium. Production images are local; no image hotlinks. Asset provenance is recorded in the template manifest. Photography is preferred when the reference is photographic; custom illustration/rendering is appropriate when the reference is illustrated, abstract or 3D.

## Required browser evidence
Before a template is unhidden in the public catalogue it must be rendered at 1440, 1280, 1024, 768, 430, 390, 375 and 360 px with no horizontal overflow, broken images or console errors. Desktop and mobile full-page screenshots are required. Editor/image replacement, publishing, lead generation and export regressions remain mandatory.

## Automated guard
Run:

`PYTHONPATH=. python scripts/premium_template_quality_qa.py`

This guard does not decide whether a design is beautiful. It blocks several common regressions: single-font visual systems, bare/unclassed footers, image hotlinks, missing art-direction metadata, missing previews and malformed H1 structure. Visual screenshot review remains the final design gate.
