"""Deterministic compiler from Penpot bridge payloads to SiteDocument."""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass
from typing import Any
from urllib.parse import unquote

from .plans import MAX_PAGES_PER_SITE
from .penpot_semantics import (
    SemanticValidationError,
    canonicalize_component_metadata,
    document_semantic_metadata,
    node_type_for_component,
)
from .studio_document import NODE_TYPES, Node, NodeGeometry, Page, SiteDocument, validate_studio_document


class PenpotCompileError(ValueError):
    """Raised when a Penpot payload cannot be represented safely."""


@dataclass(frozen=True)
class CompileResult:
    document: SiteDocument
    warnings: tuple[str, ...]
    document_hash: str


_SAFE_ID = re.compile(r"^[A-Za-z0-9_-]{1,128}$")
_UNSAFE = re.compile(r"(?is)<\s*script|javascript\s*:|vbscript\s*:|data\s*:\s*text/html|on[a-z]+\s*=")


def _assert_safe(value: Any, path: str = "payload") -> None:
    if isinstance(value, str):
        if _UNSAFE.search(unquote(value)):
            raise PenpotCompileError(f"unsafe executable value at {path}")
        return
    if isinstance(value, dict):
        for key, item in value.items():
            _assert_safe(item, f"{path}.{key}")
    elif isinstance(value, list):
        for index, item in enumerate(value):
            _assert_safe(item, f"{path}[{index}]")


def _geometry(raw: Any) -> dict[str, Any] | None:
    if not isinstance(raw, dict):
        return None
    allowed = {"x", "y", "width", "height", "rotation", "mode", "minWidth", "maxWidth", "minHeight", "maxHeight", "lockAspectRatio"}
    return {key: raw[key] for key in allowed if key in raw}


def _object_field(raw: dict[str, Any], key: str, *, default: dict[str, Any] | None = None) -> dict[str, Any]:
    """Read a typed object field without silently discarding malformed data."""

    value = raw.get(key)
    if value is None:
        return dict(default or {})
    if not isinstance(value, dict):
        raise PenpotCompileError(f"{key} must be an object")
    return dict(value)


def _list_field(raw: dict[str, Any], key: str, *, default: list[Any] | None = None) -> list[Any]:
    """Read a typed list field without turning strings into character arrays."""

    value = raw.get(key)
    if value is None:
        return list(default or [])
    if not isinstance(value, list):
        raise PenpotCompileError(f"{key} must be an array")
    return list(value)


def _runtime_action(action: dict[str, Any]) -> dict[str, Any] | None:
    """Translate a semantic action into the runtime SiteDocument action model.

    The semantic contract is intentionally richer than ``NodeAction``.  The
    compiler keeps the original typed action in pluginData and projects the
    subset understood by the hosted renderer into ``NodeContent.action``.
    Unsupported action kinds stay visible to the validator instead of being
    guessed from button text.
    """

    action_type = str(action.get("type") or "").strip().lower()
    if action_type == "internal_page":
        return {"type": "page", "pageId": str(action.get("targetPageId") or "")}
    if action_type == "section_anchor":
        return {"type": "section", "sectionId": str(action.get("targetSectionId") or action.get("sectionId") or "")}
    if action_type == "external_url":
        return {"type": "external", "url": str(action.get("url") or "")}
    if action_type in {"email", "phone"}:
        return {"type": action_type, "value": str(action.get("value") or "")}
    if action_type == "appointment":
        return {"type": "booking", "url": str(action.get("url") or action.get("value") or "") or None, "value": str(action.get("value") or "") or None}
    if action_type == "form":
        return {"type": "form", "url": str(action.get("url") or action.get("value") or "") or None, "value": str(action.get("value") or "") or None}
    if action_type == "none":
        return {"type": "none"}
    # ``modal`` and ``download`` require runtime behavior that is not part of
    # the legacy NodeAction enum.  Preserve them in semantic metadata and let
    # publish validation/reporting surface the unsupported runtime projection.
    return None


def _semantic_node_fields(
    metadata: dict[str, Any],
    *,
    content: dict[str, Any],
    bindings: dict[str, Any],
    accessibility: dict[str, Any],
    responsive: dict[str, Any],
    warnings: list[str],
) -> tuple[dict[str, Any], dict[str, Any], dict[str, Any], dict[str, Any]]:
    """Project validated semantic metadata into existing SiteDocument fields."""

    semantic = metadata.get("zylora") if isinstance(metadata, dict) else None
    if not isinstance(semantic, dict):
        return content, bindings, accessibility, responsive

    component_type = str(semantic.get("componentType") or "")
    merged_bindings = {**bindings, **dict(semantic.get("bindings") or {})}
    merged_accessibility = {**accessibility, **dict(semantic.get("accessibility") or {})}
    merged_responsive = {**responsive, **dict(semantic.get("responsive") or {})}
    merged_content = dict(content)

    for target, binding in merged_bindings.items():
        if not isinstance(binding, dict):
            raise PenpotCompileError(f"CMS binding for {target} must be an object")
        kind = str(binding.get("kind") or "").upper()
        if not kind:
            continue
        if kind not in {"FIELD", "REPEATER"}:
            raise PenpotCompileError(f"Unsupported CMS binding kind: {kind}")
        collection_id = str(binding.get("collectionId") or binding.get("collection_id") or "")
        if not _SAFE_ID.fullmatch(collection_id):
            raise PenpotCompileError(f"CMS binding for {target} requires a valid collectionId")
        if kind == "FIELD" and not _SAFE_ID.fullmatch(str(binding.get("fieldId") or binding.get("field_id") or "")):
            raise PenpotCompileError(f"FIELD binding for {target} requires a valid fieldId")
        if kind == "REPEATER" and str(target) != "items":
            raise PenpotCompileError("REPEATER CMS bindings must target items")

    actions = semantic.get("actions") or []
    if isinstance(actions, list) and actions:
        projected = _runtime_action(actions[0]) if isinstance(actions[0], dict) else None
        if projected is not None and "action" not in merged_content:
            merged_content["action"] = projected
        elif projected is None:
            warnings.append(
                f"Semantic action on node is preserved but has no SiteDocument runtime projection: {component_type}"
            )
    elif isinstance(merged_content.get("action"), dict):
        # Accept bridge payloads that put the semantic action directly in
        # content, while still normalizing it to the existing NodeAction enum.
        projected = _runtime_action(merged_content["action"])
        if projected is not None:
            merged_content["action"] = projected

    if component_type.startswith("heading") and component_type[-1:].isdigit():
        metadata.setdefault("headingLevel", int(component_type[-1]))
    elif component_type == "heading":
        role = str((semantic.get("metadata") or {}).get("semanticRole") or "").lower()
        if role.startswith("heading") and role[-1:].isdigit():
            metadata.setdefault("headingLevel", int(role[-1]))

    # Accessibility metadata is semantic, but the renderer already has a
    # hardened field for it.  Keep both representations so round-trips do not
    # lose meaning and existing runtime code continues to work.
    if "alt" not in merged_content:
        alt = merged_accessibility.get("alt") or merged_accessibility.get("altText")
        if alt:
            merged_content["alt"] = str(alt)
    return merged_content, merged_bindings, merged_accessibility, merged_responsive


def _validate_semantic_references(pages: dict[str, Page]) -> None:
    """Reject references that could not resolve in the compiled website."""

    page_ids = set(pages)
    slugs: dict[str, str] = {}
    for page_id, page in pages.items():
        existing = slugs.get(page.slug)
        if existing is not None:
            raise PenpotCompileError(f"Duplicate page slug: {page.slug}")
        slugs[page.slug] = page_id

    for page_id, page in pages.items():
        node_ids = set(page.nodes)
        for node in page.nodes.values():
            semantic = node.metadata.get("zylora") if isinstance(node.metadata, dict) else None
            if not isinstance(semantic, dict):
                continue
            for action in semantic.get("actions") or []:
                if not isinstance(action, dict):
                    continue
                action_type = str(action.get("type") or "")
                if action_type == "internal_page" and str(action.get("targetPageId") or "") not in page_ids:
                    raise PenpotCompileError(
                        f"Node {node.id} on page {page_id} references an unknown page"
                    )
                if action_type == "section_anchor":
                    target = str(action.get("targetSectionId") or action.get("sectionId") or "")
                    if target not in node_ids:
                        raise PenpotCompileError(
                            f"Node {node.id} on page {page_id} references an unknown section"
                        )


def _node_type(raw: dict[str, Any], semantic_type: str | None = None) -> str:
    if semantic_type:
        return node_type_for_component(semantic_type)
    candidate = str(raw.get("zyloraType") or raw.get("type") or "frame").strip()
    if candidate in NODE_TYPES:
        return candidate
    kind = str(raw.get("kind") or "").lower()
    return {"text": "text", "image": "image", "frame": "frame", "shape": "frame"}.get(kind, "frame")


def _page_payloads(payload: dict[str, Any]) -> list[dict[str, Any]]:
    pages = payload.get("pages")
    if isinstance(pages, dict):
        values = list(pages.values())
    elif isinstance(pages, list):
        values = pages
    elif isinstance(payload.get("page"), dict):
        values = [payload["page"]]
    else:
        values = []
    if not values:
        raise PenpotCompileError("Penpot payload must contain at least one page")
    if len(values) > MAX_PAGES_PER_SITE:
        raise PenpotCompileError(f"Penpot payload exceeds the {MAX_PAGES_PER_SITE}-page limit")
    if any(not isinstance(value, dict) for value in values):
        raise PenpotCompileError("Every Penpot page must be an object")
    return [dict(value) for value in values]


def _compile_page(raw_page: dict[str, Any]) -> tuple[Page, tuple[str, ...]]:
    page_id = str(raw_page.get("id") or "").strip()
    if not _SAFE_ID.fullmatch(page_id):
        raise PenpotCompileError("page id is invalid")
    slug = str(raw_page.get("slug") or page_id).strip("/").lower() or "home"
    name = str(raw_page.get("name") or slug.replace("-", " ").title())[:120]
    raw_objects = raw_page.get("objects") or raw_page.get("nodes") or []
    if isinstance(raw_objects, dict):
        raw_objects = list(raw_objects.values())
    if not isinstance(raw_objects, list):
        raise PenpotCompileError("page objects must be a list")
    nodes: dict[str, Node] = {}
    warnings: list[str] = []
    used_instance_ids: set[str] = set()
    for raw in raw_objects:
        if not isinstance(raw, dict):
            raise PenpotCompileError("page object must be an object")
        node_id = str(raw.get("id") or "").strip()
        if not _SAFE_ID.fullmatch(node_id) or node_id in nodes:
            raise PenpotCompileError("node id is invalid or duplicated")
        metadata = _object_field(raw, "metadata")
        plugin_data = raw.get("pluginData") or raw.get("plugin_data")
        if plugin_data is not None:
            if not isinstance(plugin_data, dict):
                raise PenpotCompileError("pluginData must be an object")
            raw_semantic = plugin_data.get("zylora") if "zylora" in plugin_data else plugin_data
            if not isinstance(raw_semantic, dict):
                raise PenpotCompileError("pluginData.zylora must be an object")
            metadata["zylora"] = dict(raw_semantic)
        semantic_type = None
        if "zylora" in metadata:
            try:
                semantic, semantic_warnings = canonicalize_component_metadata(
                    metadata["zylora"], node_id=node_id, used_instance_ids=used_instance_ids
                )
            except SemanticValidationError as exc:
                raise PenpotCompileError(str(exc)) from exc
            metadata["zylora"] = semantic
            semantic_type = str(semantic["componentType"])
            warnings.extend(semantic_warnings)
        unsupported_effects = raw.get("unsupportedEffects") or raw.get("unsupported_effects")
        if unsupported_effects:
            warnings.append(f"Visual effects on node {node_id} are not represented by SiteDocument and were safely degraded")
        content = _object_field(raw, "content")
        bindings = _object_field(raw, "bindings")
        accessibility = _object_field(raw, "accessibility")
        responsive = _object_field(raw, "responsiveOverrides" if "responsiveOverrides" in raw else "responsive")
        content, bindings, accessibility, responsive = _semantic_node_fields(
            metadata,
            content=content,
            bindings=bindings,
            accessibility=accessibility,
            responsive=responsive,
            warnings=warnings,
        )
        children = _list_field(raw, "children")
        interactions = _list_field(raw, "interactions")
        node = Node(
            id=node_id,
            type=_node_type(raw, semantic_type),
            parentId=str(raw.get("parentId")) if raw.get("parentId") is not None else None,
            children=[str(child) for child in children],
            content=content,
            style=_object_field(raw, "style"),
            layout=_object_field(raw, "layout"),
            responsiveOverrides=responsive,
            interactions=interactions,
            visibility=str(raw.get("visibility") or "visible"),
            accessibility=accessibility,
            bindings=bindings,
            metadata=metadata,
            geometry=_geometry(raw.get("geometry")),
            locked=raw.get("locked"),
        )
        nodes[node_id] = node
    root_id = str(raw_page.get("rootNodeId") or "").strip()
    if root_id not in nodes:
        raise PenpotCompileError("page rootNodeId must reference an object")
    for node in nodes.values():
        if node.parentId is not None and node.parentId not in nodes:
            raise PenpotCompileError(f"node {node.id} references an unknown parent")
        for child in node.children:
            if child not in nodes:
                raise PenpotCompileError(f"node {node.id} references an unknown child")
    return Page(
        id=page_id,
        slug=slug,
        name=name,
        rootNodeId=root_id,
        seo=dict(raw_page.get("seo") or {}),
        breakpointConfiguration=dict(raw_page.get("breakpointConfiguration") or {}),
        nodes=nodes,
    ), tuple(warnings)


def compile_penpot_document(payload: dict[str, Any], *, site_id: str, expected_revision: int | None = None) -> CompileResult:
    if not isinstance(payload, dict):
        raise PenpotCompileError("Penpot payload must be an object")
    payload_site = payload.get("site_id") or payload.get("siteId")
    if payload_site is not None and str(payload_site) != str(site_id):
        raise PenpotCompileError("Penpot payload site does not match the requested site")
    _assert_safe(payload)
    payload_revision = payload.get("revision")
    if expected_revision is not None and payload_revision is not None and int(payload_revision) != int(expected_revision):
        raise PenpotCompileError("STALE_REVISION")
    compiled_pages = [_compile_page(raw) for raw in _page_payloads(payload)]
    pages: dict[str, Page] = {}
    for page, _page_warnings in compiled_pages:
        if page.id in pages:
            raise PenpotCompileError(f"Duplicate page id: {page.id}")
        pages[page.id] = page
    _validate_semantic_references(pages)
    warnings = tuple(warning for _page, page_warnings in compiled_pages for warning in page_warnings)
    try:
        raw_website_metadata = dict(payload.get("metadata") or {})
        if "zyloraWebsiteSchemaVersion" in payload and "zyloraWebsiteSchemaVersion" not in raw_website_metadata:
            raw_website_metadata["zyloraWebsiteSchemaVersion"] = payload["zyloraWebsiteSchemaVersion"]
        website_metadata = document_semantic_metadata(raw_website_metadata)
    except SemanticValidationError as exc:
        raise PenpotCompileError(str(exc)) from exc
    document = validate_studio_document(SiteDocument(
        id=str(site_id),
        schemaVersion=5,
        version=5,
        pages=pages,
        tokens=dict(payload.get("tokens") or {}),
        metadata={**website_metadata, "source": "penpot", "site_id": str(site_id)},
        revision=int(expected_revision if expected_revision is not None else payload_revision or 1),
    ).model_dump(exclude_none=True))
    canonical = document.model_dump(exclude_none=True)
    document_hash = hashlib.sha256(json.dumps(canonical, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")).hexdigest()
    return CompileResult(document=document, warnings=warnings, document_hash=document_hash)
