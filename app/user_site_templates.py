"""Private, visual-only Studio template snapshots.

The snapshot contains a validated SiteDocument and never copies CRM, lead,
appointment, analytics, domain, authentication, or integration records.
"""

from __future__ import annotations

import copy
from uuid import uuid4

from .studio_document import SiteDocument, validate_studio_document


_SENSITIVE_SETTING_KEYS = {
    "apiKey", "api_key", "secret", "token", "credentials", "domainCredentials",
    "integrations", "analytics", "crm", "leads", "appointments", "submissions",
}


def sanitize_template_document(raw: dict) -> dict:
    document = validate_studio_document(raw).model_dump(exclude_none=True)
    document.pop("id", None)
    document["revision"] = 1
    document["dataSources"] = {}
    document["metadata"] = {
        key: value for key, value in document.get("metadata", {}).items()
        if key not in _SENSITIVE_SETTING_KEYS
    }
    document["settings"] = {
        key: value for key, value in document.get("settings", {}).items()
        if key not in _SENSITIVE_SETTING_KEYS
    }
    # Asset ownership is enforced by the template owner. Store only the
    # document's safe asset references, never provider credentials or uploads.
    document["assets"] = {
        key: {
            field: value for field, value in asset.items()
            if field in {"id", "url", "mimeType", "width", "height", "alt"}
        }
        for key, asset in document.get("assets", {}).items()
        if isinstance(asset, dict)
    }
    return validate_studio_document(document).model_dump(exclude_none=True)


def clone_template_document(raw: dict, *, site_id: str | None = None) -> dict:
    """Clone a template while regenerating all page, node and component IDs."""
    source = sanitize_template_document(raw)
    cloned = copy.deepcopy(source)
    page_id_map = {old: f"page_{uuid4().hex[:12]}" for old in cloned["pages"]}
    component_id_map = {old: f"component_{uuid4().hex[:12]}" for old in cloned.get("components", {})}
    global_node_map: dict[str, str] = {}

    for page in cloned["pages"].values():
        for old in page.get("nodes", {}):
            global_node_map[old] = f"node_{uuid4().hex[:16]}"
    for component in cloned.get("components", {}).values():
        for old in component.get("nodes", {}):
            global_node_map[old] = f"node_{uuid4().hex[:16]}"
    for old in cloned.get("globalSections", {}):
        global_node_map[old] = f"node_{uuid4().hex[:16]}"

    def rewrite_tree(tree: dict) -> dict:
        rewritten = {}
        for old_id, node in tree.items():
            next_node = copy.deepcopy(node)
            next_node["id"] = global_node_map[old_id]
            next_node["parentId"] = global_node_map.get(next_node.get("parentId"))
            next_node["children"] = [global_node_map.get(child, child) for child in next_node.get("children", [])]
            content = next_node.get("content") or {}
            component_id = content.get("component_id")
            if component_id in component_id_map:
                content["component_id"] = component_id_map[component_id]
            rewritten[next_node["id"]] = next_node
        return rewritten

    next_pages = {}
    for old_id, page in cloned["pages"].items():
        page["id"] = page_id_map[old_id]
        page["rootNodeId"] = global_node_map[page["rootNodeId"]]
        page["nodes"] = rewrite_tree(page["nodes"])
        next_pages[page["id"]] = page
    cloned["pages"] = next_pages

    next_components = {}
    for old_id, component in cloned.get("components", {}).items():
        component["id"] = component_id_map[old_id]
        component["rootNodeId"] = global_node_map[component["rootNodeId"]]
        component["nodes"] = rewrite_tree(component["nodes"])
        next_components[component["id"]] = component
    cloned["components"] = next_components
    if cloned.get("globalSections"):
        cloned["globalSections"] = rewrite_tree(cloned["globalSections"])
    cloned["id"] = site_id or str(uuid4())
    cloned["revision"] = 1
    return validate_studio_document(cloned).model_dump(exclude_none=True)
