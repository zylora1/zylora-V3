"""Semantic round-trip evidence helpers for Penpot-backed websites."""

from __future__ import annotations

from typing import Any

from .studio_document import SiteDocument, validate_studio_document


def _document(value: SiteDocument | dict[str, Any]) -> SiteDocument:
    return value if isinstance(value, SiteDocument) else validate_studio_document(value)


def semantic_snapshot(value: SiteDocument | dict[str, Any]) -> dict[str, Any]:
    """Extract runtime meaning while ignoring visual/layout implementation detail."""

    document = _document(value)
    pages: dict[str, Any] = {}
    components: list[dict[str, Any]] = []
    links: list[dict[str, Any]] = []
    for page_id, page in document.pages.items():
        pages[page_id] = {
            "slug": page.slug,
            "name": page.name,
            "seo": dict(page.seo),
            "rootNodeId": page.rootNodeId,
        }
        for node in page.nodes.values():
            metadata = node.metadata.get("zylora") if isinstance(node.metadata, dict) else None
            if isinstance(metadata, dict):
                semantic = {
                    "pageId": page_id,
                    "nodeId": node.id,
                    "componentType": metadata.get("componentType"),
                    "instanceId": metadata.get("instanceId"),
                    "runtimeConfig": dict(metadata.get("runtimeConfig") or {}),
                    "bindings": dict(metadata.get("bindings") or {}),
                    "actions": list(metadata.get("actions") or []),
                    "accessibility": dict(metadata.get("accessibility") or {}),
                    "seo": dict(metadata.get("seo") or {}),
                }
                components.append(semantic)
                links.extend(
                    {"pageId": page_id, "nodeId": node.id, **action}
                    for action in semantic["actions"]
                    if isinstance(action, dict)
                )
    components.sort(key=lambda item: (str(item["pageId"]), str(item["nodeId"])))
    links.sort(key=lambda item: (str(item.get("pageId")), str(item.get("nodeId")), str(item.get("type"))))
    return {
        "websiteSchemaVersion": int(document.metadata.get("zyloraWebsiteSchemaVersion") or 1),
        "pages": pages,
        "components": components,
        "links": links,
        "tokens": dict(document.tokens),
        "seo": dict(document.seo),
    }


def compare_semantics(before: SiteDocument | dict[str, Any], after: SiteDocument | dict[str, Any]) -> dict[str, Any]:
    """Compare semantic contracts without requiring pixel-identical JSON."""

    left = semantic_snapshot(before)
    right = semantic_snapshot(after)
    fields = ("websiteSchemaVersion", "pages", "components", "links", "tokens", "seo")
    mismatches = [field for field in fields if left[field] != right[field]]
    return {
        "status": "PASS" if not mismatches else "FAIL",
        "mismatches": mismatches,
        "before": left,
        "after": right,
    }
