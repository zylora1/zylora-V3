# Zylora Studio migration report

The editor frontend now builds through Vite from `studio/index.tsx`; the retired custom build script is removed. Backend SiteDocument, save, publish, CMS and tenant contracts remain unchanged.

Existing sites continue to open through the existing Studio migration endpoint. The optional `app/studio_legacy_materializer.py` creates validated V4 draft/public SiteDocuments while preserving site IDs and legacy backups. Its command is dry-run by default; applying it is explicit and transactional.

No automatic destructive migration is introduced. New crop fields remain optional and default to `{x: 0, y: 0, scale: 1}`. Existing heading/paragraph nodes present as Text; compatible image nodes present as Image frames; internal containers are flattened or semantically named in Layers without rewriting valid hierarchy.

The materializer regression verifies stable site identity, independent draft/public snapshots, validated documents and retained legacy backup data.
