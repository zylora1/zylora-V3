# Section reorder evidence

`scripts/studio_final_interactions_e2e.py` passed in Chromium, Firefox, and WebKit with 11 checks and 0 errors per engine.

- Semantic section rows are addressable without exposing internal IDs to users.
- A section drag changed root order while preserving section IDs and children.
- The persisted document was reloaded through the Studio API after the move.
- WebKit used the existing touch-friendly Move section control as a deterministic fallback when synthetic HTML5 drag dispatch was not accepted; the resulting persisted structural reorder also passed.
