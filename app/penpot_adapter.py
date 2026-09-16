"""Penpot-derived interaction adapter for the canonical Zylora SiteDocument.

Penpot's frontend is organized around a projection of a design file and
event/change objects.  Zylora keeps the same separation without persisting a
second scene graph: :func:`project_site_document` creates a short-lived
Penpot-shaped view, while :func:`translate_penpot_interaction` emits the
typed operations consumed by the existing Zylora command/mutation engine.

The adapter deliberately preserves ``zyloraType`` and business metadata.  A
lead form, appointment widget, or AI Sales Assistant therefore remains a
typed Zylora component even when a canvas client renders it as a visual
object.
"""

from __future__ import annotations

import re
from typing import Any
from uuid import uuid4

from .penpot_semantics import (
    SemanticValidationError,
    canonical_component_type,
    canonicalize_component_metadata,
    node_type_for_component,
)
from .studio_document import Node, NodeGeometry, SiteDocument, _geometry_from_css, validate_studio_document


PENPOT_ADAPTER_VERSION = "2026-09-15.1"
PENPOT_SOURCE_RECORD = {
    "repository": "https://github.com/penpot/penpot",
    "version": "2.17.0",
    "commit": "bdce5817ea86d028db29113d9ecdadcf07097b36",
    "source_mode": "git_submodule",
    "source_path": "vendor/penpot",
    "frontend_path": "frontend/src/app",
    "architecture_docs": "https://help.penpot.app/technical-guide/developer/architecture/frontend/",
    "data_docs": "https://help.penpot.app/technical-guide/developer/data-guide/",
    "license": "MPL-2.0",
    "source_copied": False,
    "source_bridge_ready": False,
}

_BUSINESS_TYPES = {
    "lead_form", "appointment_booking", "ai_sales_assistant", "form", "form_field",
    "navigation", "button", "link", "image", "video", "map", "embed", "repeater",
    "carousel", "gallery", "table", "component_instance",
}
_TEXT_TYPES = {"text", "heading", "paragraph", "button", "link"}
_SAFE_CSS_VALUE = re.compile(r"(?i)(<\s*script|javascript:|vbscript:|expression\(|url\s*\(\s*data:text/html)")


class PenpotAdapterError(ValueError):
    """Raised when a Penpot interaction cannot be represented safely."""


def _document(value: SiteDocument | dict[str, Any]) -> SiteDocument:
    try:
        return value if isinstance(value, SiteDocument) else validate_studio_document(value)
    except Exception as exc:  # pydantic's error is an implementation detail at this boundary
        raise PenpotAdapterError(f"Invalid SiteDocument: {exc}") from exc


def _geometry(node: Node) -> dict[str, Any]:
    if node.geometry is not None:
        return node.geometry.model_dump(exclude_none=True)
    return NodeGeometry(**_geometry_from_css(node.model_dump())).model_dump(exclude_none=True)


def _penpot_kind(node: Node) -> str:
    if node.type in _TEXT_TYPES:
        return "text"
    if node.type == "image":
        return "image"
    if node.type in {"page", "section", "frame", "container", "stack", "flex", "grid"}:
        return "frame"
    return "shape"


def _project_node(node: Node) -> dict[str, Any]:
    """Create an ephemeral Penpot-shaped object while retaining Zylora meaning."""
    return {
        "id": node.id,
        "parentId": node.parentId,
        "children": list(node.children),
        "kind": _penpot_kind(node),
        "zyloraType": node.type,
        "geometry": _geometry(node),
        "style": node.style.model_dump(exclude_none=True),
        "content": node.content.model_dump(exclude_none=True),
        "layout": dict(node.layout),
        "visibility": node.visibility,
        "locked": bool(node.locked or node.metadata.get("locked")),
        "metadata": {
            **dict(node.metadata),
            "zyloraType": node.type,
            "businessComponent": node.type in _BUSINESS_TYPES,
        },
    }


def project_site_document(value: SiteDocument | dict[str, Any], page_id: str | None = None) -> dict[str, Any]:
    """Project the canonical document for a Penpot-style canvas.

    The returned value is a transport projection only.  It is never saved as
    an alternate document and must be translated back into typed operations
    before a mutation is accepted.
    """
    document = _document(value)
    if page_id is None:
        page_id = next(iter(document.pages), None)
    page = document.pages.get(page_id or "")
    if page is None:
        raise PenpotAdapterError(f"Unknown page: {page_id}")
    objects = [_project_node(page.nodes[node_id]) for node_id in page.nodes]
    return {
        "adapter": "zylora-penpot",
        "adapterVersion": PENPOT_ADAPTER_VERSION,
        "source": "zylora-site-document",
        "schemaVersion": document.schemaVersion,
        "zyloraWebsiteSchemaVersion": int(document.metadata.get("zyloraWebsiteSchemaVersion") or 1),
        "metadata": {**dict(document.metadata), "zyloraWebsiteSchemaVersion": int(document.metadata.get("zyloraWebsiteSchemaVersion") or 1)},
        "revision": document.revision,
        "page": {
            "id": page.id,
            "slug": page.slug,
            "name": page.name,
            "rootNodeId": page.rootNodeId,
            "objects": objects,
        },
        "tokens": dict(document.tokens),
        "components": {
            component_id: {
                "id": component.id,
                "name": component.name,
                "rootNodeId": component.rootNodeId,
            }
            for component_id, component in document.components.items()
        },
        "capabilities": {
            "selection": True,
            "multiSelection": True,
            "marquee": True,
            "drag": True,
            "resize": True,
            "rotate": True,
            "panZoom": True,
            "snapGuides": True,
            "grouping": True,
            "reparent": True,
            "textEditing": True,
            "typedBusinessComponents": True,
        },
    }


def _page_and_node(document: SiteDocument, interaction: dict[str, Any]) -> tuple[str, Node]:
    page_id = str(interaction.get("pageId") or "")
    page = document.pages.get(page_id)
    if page is None:
        raise PenpotAdapterError("pageId is required and must reference an existing page")
    node_id = str(interaction.get("nodeId") or "")
    node = page.nodes.get(node_id)
    if node is None:
        raise PenpotAdapterError("nodeId must reference an existing node")
    return page_id, node


def _clean_style(css: Any) -> dict[str, str]:
    if not isinstance(css, dict) or not css:
        raise PenpotAdapterError("style interaction requires a non-empty css object")
    clean: dict[str, str] = {}
    for key, value in css.items():
        key = str(key).strip()
        if not re.fullmatch(r"[A-Za-z][A-Za-z0-9_-]{0,80}", key):
            raise PenpotAdapterError("style contains an invalid CSS property")
        rendered = str(value)
        if _SAFE_CSS_VALUE.search(rendered):
            raise PenpotAdapterError("executable style values are not accepted")
        clean[key] = rendered[:2000]
    return clean


def translate_penpot_interaction(value: SiteDocument | dict[str, Any], interaction: dict[str, Any]) -> list[dict[str, Any]]:
    """Translate one canvas interaction into existing Zylora operations."""
    document = _document(value)
    if not isinstance(interaction, dict):
        raise PenpotAdapterError("interaction must be an object")
    kind = str(interaction.get("type") or interaction.get("action") or "").strip().lower()
    page_id = str(interaction.get("pageId") or "")
    if kind in {"add_component", "create_component"}:
        page = document.pages.get(page_id)
        if page is None:
            raise PenpotAdapterError("pageId is required and must reference an existing page")
        try:
            component_type = canonical_component_type(interaction.get("componentType"))
        except SemanticValidationError as exc:
            raise PenpotAdapterError(str(exc)) from exc
        parent_id = str(interaction.get("parentId") or page.rootNodeId)
        if parent_id not in page.nodes:
            raise PenpotAdapterError("parentId must reference an existing node")
        node_id = str(interaction.get("nodeId") or f"node_{uuid4().hex[:16]}")
        if not re.fullmatch(r"[A-Za-z0-9_-]{1,128}", node_id) or node_id in page.nodes:
            raise PenpotAdapterError("nodeId is invalid or already exists")
        config = interaction.get("config") or {}
        if not isinstance(config, dict):
            raise PenpotAdapterError("component config must be an object")
        try:
            semantic, _warnings = canonicalize_component_metadata(
                {"componentType": component_type, **config}, node_id=node_id,
                used_instance_ids={
                    str(node.metadata.get("zylora", {}).get("instanceId"))
                    for node in page.nodes.values()
                    if isinstance(node.metadata.get("zylora"), dict)
                },
            )
        except SemanticValidationError as exc:
            raise PenpotAdapterError(str(exc)) from exc
        content = dict(config.get("content") or {})
        if "text" in config and "text" not in content:
            content["text"] = str(config["text"])
        style = dict(config.get("style") or {"css": {"position": "relative"}, "tokens": {}})
        geometry = dict(interaction.get("geometry") or config.get("geometry") or {})
        return [{
            "type": "INSERT_NODE",
            "pageId": page_id,
            "parentId": parent_id,
            "node": {
                "id": node_id,
                "type": node_type_for_component(component_type),
                "content": content,
                "style": style,
                "metadata": {"zylora": semantic, "displayName": str(config.get("displayName") or component_type)},
                "geometry": geometry or None,
            },
        }]
    if kind in {"token", "update_token", "update_site_token"}:
        name = str(interaction.get("name") or interaction.get("token") or "").strip()
        if not re.fullmatch(r"[A-Za-z][A-Za-z0-9_.-]{0,120}", name):
            raise PenpotAdapterError("token name is invalid")
        if "value" not in interaction:
            raise PenpotAdapterError("token interaction requires value")
        return [{"type": "UPDATE_SITE_TOKEN", "pageId": page_id or next(iter(document.pages)), "name": name, "value": interaction["value"]}]

    page_id, node = _page_and_node(document, interaction)
    if kind in {"set_component_config", "update_component_config"}:
        current = node.metadata.get("zylora") if isinstance(node.metadata, dict) else None
        if not isinstance(current, dict):
            raise PenpotAdapterError("node does not have Zylora semantic metadata")
        config = interaction.get("config")
        if not isinstance(config, dict):
            raise PenpotAdapterError("component config must be an object")
        merged = {**current, **config, "componentType": current.get("componentType")}
        try:
            semantic, _warnings = canonicalize_component_metadata(merged, node_id=node.id, used_instance_ids=set())
        except SemanticValidationError as exc:
            raise PenpotAdapterError(str(exc)) from exc
        return [{"type": "UPDATE_SEMANTIC_METADATA", "pageId": page_id, "nodeId": node.id, "metadata": semantic}]
    current = _geometry(node)
    if kind in {"drag", "move"}:
        delta = interaction.get("delta") or {}
        geometry = {
            "x": interaction.get("x", float(current.get("x", 0)) + float(delta.get("x", 0))),
            "y": interaction.get("y", float(current.get("y", 0)) + float(delta.get("y", 0))),
        }
        return [{"type": "UPDATE_GEOMETRY", "pageId": page_id, "nodeId": node.id, "geometry": geometry}]
    if kind in {"resize", "scale"}:
        geometry = {key: interaction[key] for key in ("width", "height") if key in interaction}
        if not geometry:
            raise PenpotAdapterError("resize interaction requires width and/or height")
        return [{"type": "UPDATE_GEOMETRY", "pageId": page_id, "nodeId": node.id, "geometry": geometry}]
    if kind in {"rotate", "rotation"}:
        if "rotation" not in interaction:
            raise PenpotAdapterError("rotate interaction requires rotation")
        return [{"type": "UPDATE_GEOMETRY", "pageId": page_id, "nodeId": node.id, "geometry": {"rotation": interaction["rotation"]}}]
    if kind in {"text", "text_edit", "update_text"}:
        if node.type not in _TEXT_TYPES:
            raise PenpotAdapterError("text interaction requires a text-capable node")
        return [{"type": "UPDATE_TEXT", "pageId": page_id, "nodeId": node.id, "text": str(interaction.get("text") or "")}]
    if kind in {"style", "color", "update_style"}:
        return [{"type": "UPDATE_STYLE", "pageId": page_id, "nodeId": node.id, "css": _clean_style(interaction.get("css"))}]
    if kind in {"reparent", "move_to_parent"}:
        parent_id = str(interaction.get("newParentId") or interaction.get("parentId") or "")
        if parent_id not in document.pages[page_id].nodes:
            raise PenpotAdapterError("newParentId must reference an existing node")
        return [{"type": "REPARENT_NODE", "pageId": page_id, "nodeId": node.id, "newParentId": parent_id}]
    if kind in {"group", "group_nodes"}:
        node_ids = [str(item) for item in (interaction.get("nodeIds") or [])]
        group_id = str(interaction.get("groupId") or "")
        if len(node_ids) < 2 or not re.fullmatch(r"[A-Za-z0-9_-]{1,128}", group_id):
            raise PenpotAdapterError("group requires at least two nodeIds and a valid groupId")
        return [{"type": "GROUP_NODES", "pageId": page_id, "nodeIds": node_ids, "groupId": group_id}]
    if kind in {"ungroup", "ungroup_nodes"}:
        return [{"type": "UNGROUP_NODES", "pageId": page_id, "nodeId": node.id}]
    if kind in {"lock", "toggle_lock"}:
        return [{"type": "TOGGLE_LOCK", "pageId": page_id, "nodeId": node.id}]
    raise PenpotAdapterError(f"Unsupported Penpot interaction: {kind or 'unknown'}")
