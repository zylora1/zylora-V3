from __future__ import annotations
from typing import Any, Dict, List, Literal, Optional
from copy import deepcopy
import re
from pydantic import BaseModel, Field, model_validator, field_validator
from .plans import MAX_PAGES_PER_SITE

SCHEMA_VERSION_STUDIO = 5

NODE_TYPES = {
    "page", "section", "frame", "container", "stack", "flex", "grid",
    "heading", "paragraph", "text", "image", "button", "link", "icon",
    "video", "divider", "navigation", "form", "form_field", "lead_form",
    "appointment_booking", "ai_sales_assistant", "business_hours", "map", "embed", "component_instance",
    "repeater", "list", "carousel", "gallery", "table"
}

class GradientStop(BaseModel):
    position: float = Field(default=0, ge=0, le=1)
    color: str = Field(default="#ffffff", min_length=1, max_length=64)
    opacity: float = Field(default=1, ge=0, le=1)


class Gradient(BaseModel):
    type: Literal["linear", "radial"] = "linear"
    angle: float = 0
    centerX: float = Field(default=50, ge=0, le=100)
    centerY: float = Field(default=50, ge=0, le=100)
    stops: List[GradientStop] = Field(default_factory=lambda: [
        GradientStop(position=0, color="#ffffff"),
        GradientStop(position=1, color="#000000"),
    ], min_length=2, max_length=16)


class TextRun(BaseModel):
    start: int = Field(ge=0)
    end: int = Field(ge=0)
    marks: Dict[str, Any] = Field(default_factory=dict)

    @model_validator(mode="after")
    def valid_range(self) -> "TextRun":
        if self.end < self.start:
            raise ValueError("Text run end must be greater than or equal to start")
        return self


class NodeCrop(BaseModel):
    x: float = 0
    y: float = 0
    scale: float = 1


class NodeGeometry(BaseModel):
    """Canonical parent-local geometry for Studio engine v2.

    The legacy CSS fields remain mirrored for backwards-compatible readers,
    but all new editing operations resolve and write this value first.
    """

    x: float = 0
    y: float = 0
    width: float = Field(default=100, ge=1)
    height: float = Field(default=40, ge=1)
    rotation: float = 0
    mode: Literal["freeform", "flow"] = "freeform"
    minWidth: Optional[float] = Field(default=None, ge=1)
    maxWidth: Optional[float] = Field(default=None, ge=1)
    minHeight: Optional[float] = Field(default=None, ge=1)
    maxHeight: Optional[float] = Field(default=None, ge=1)
    lockAspectRatio: Optional[bool] = None


class GeometryOverride(BaseModel):
    """Partial breakpoint geometry; unspecified values inherit upstream."""

    x: Optional[float] = None
    y: Optional[float] = None
    width: Optional[float] = Field(default=None, ge=1)
    height: Optional[float] = Field(default=None, ge=1)
    rotation: Optional[float] = None
    mode: Optional[Literal["freeform", "flow"]] = None
    minWidth: Optional[float] = Field(default=None, ge=1)
    maxWidth: Optional[float] = Field(default=None, ge=1)
    minHeight: Optional[float] = Field(default=None, ge=1)
    maxHeight: Optional[float] = Field(default=None, ge=1)
    lockAspectRatio: Optional[bool] = None


class NodeAction(BaseModel):
    """Stable action target for buttons and links.

    ``pageId`` and ``sectionId`` deliberately reference document IDs rather
    than slugs or DOM positions.  The renderer resolves those references at
    publish time, so renaming a page does not strand an existing link.
    """

    type: Literal["none", "page", "section", "external", "email", "phone", "booking", "form"] = "none"
    pageId: Optional[str] = None
    sectionId: Optional[str] = None
    url: Optional[str] = None
    value: Optional[str] = None


class NodeContent(BaseModel):
    text: Optional[str] = None
    html: Optional[str] = None
    src: Optional[str] = None
    alt: Optional[str] = None
    href: Optional[str] = None
    action: Optional[NodeAction] = None
    value: Optional[str] = None
    placeholder: Optional[str] = None
    required: Optional[bool] = None
    asset_id: Optional[str] = None
    component_id: Optional[str] = None # For component instances
    crop: Optional[NodeCrop] = None
    runs: List[TextRun] = Field(default_factory=list)

class NodeStyle(BaseModel):
    css: Dict[str, Any] = Field(default_factory=dict)
    tokens: Dict[str, str] = Field(default_factory=dict)
    gradient: Optional[Gradient] = None
    textGradient: Optional[Gradient] = None
    
class BreakpointOverride(BaseModel):
    geometry: Optional[GeometryOverride] = None
    style: Optional[NodeStyle] = None
    content: Optional[NodeContent] = None
    visibility: Optional[Literal["visible", "hidden"]] = None

class Node(BaseModel):
    id: str
    type: str
    parentId: Optional[str] = None
    children: List[str] = Field(default_factory=list)
    content: NodeContent = Field(default_factory=NodeContent)
    style: NodeStyle = Field(default_factory=NodeStyle)
    layout: Dict[str, Any] = Field(default_factory=dict)
    responsiveOverrides: Dict[str, BreakpointOverride] = Field(default_factory=dict)
    interactions: List[Dict[str, Any]] = Field(default_factory=list)
    visibility: Literal["visible", "hidden"] = "visible"
    accessibility: Dict[str, Any] = Field(default_factory=dict)
    bindings: Dict[str, Any] = Field(default_factory=dict)
    metadata: Dict[str, Any] = Field(default_factory=dict)
    geometry: Optional[NodeGeometry] = None
    locked: Optional[bool] = None

    @field_validator('type')
    @classmethod
    def validate_type(cls, v: str) -> str:
        if v not in NODE_TYPES:
            raise ValueError(f"Invalid node type: {v}")
        return v

    @field_validator('id')
    @classmethod
    def validate_id(cls, value: str) -> str:
        if not re.fullmatch(r'[A-Za-z0-9_-]{1,128}', value):
            raise ValueError('Node IDs may contain only letters, numbers, underscores and hyphens')
        return value

class Page(BaseModel):
    id: str
    slug: str
    name: str
    rootNodeId: str
    seo: Dict[str, Any] = Field(default_factory=dict)
    breakpointConfiguration: Dict[str, Any] = Field(default_factory=dict)
    nodes: Dict[str, Node] = Field(default_factory=dict)

    @field_validator('slug')
    @classmethod
    def validate_slug(cls, value: str) -> str:
        slug=value.strip('/')
        if slug not in {'', 'home'} and not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', slug):
            raise ValueError('Page slug must be a lowercase URL slug')
        return slug or 'home'

class ComponentDefinition(BaseModel):
    id: str
    name: str
    rootNodeId: str
    nodes: Dict[str, Node] = Field(default_factory=dict)
    exposedProperties: List[Dict[str, Any]] = Field(default_factory=list)

class SiteDocument(BaseModel):
    id: Optional[str] = None
    version: int = SCHEMA_VERSION_STUDIO
    schemaVersion: int = SCHEMA_VERSION_STUDIO
    metadata: Dict[str, Any] = Field(default_factory=dict)
    theme: Dict[str, Any] = Field(default_factory=dict)
    tokens: Dict[str, Any] = Field(default_factory=dict)
    pages: Dict[str, Page] = Field(default_factory=dict)
    globalSections: Dict[str, Node] = Field(default_factory=dict)
    components: Dict[str, ComponentDefinition] = Field(default_factory=dict)
    assets: Dict[str, Any] = Field(default_factory=dict)
    breakpoints: Dict[str, int] = Field(
        default_factory=lambda: {"desktop": 0, "tablet": 991, "mobile": 767}
    )
    interactions: Dict[str, Any] = Field(default_factory=dict)
    dataSources: Dict[str, Any] = Field(default_factory=dict)
    seo: Dict[str, Any] = Field(default_factory=dict)
    settings: Dict[str, Any] = Field(default_factory=dict)
    engineVersion: int = 2
    
    # Task 7 & 12 extensions
    revision: int = 1
    migrationDiagnostics: Dict[str, Any] = Field(default_factory=dict)

    @model_validator(mode='after')
    def validate_document(self) -> SiteDocument:
        if len(self.pages) > MAX_PAGES_PER_SITE:
            raise ValueError(f"Each website supports a maximum of {MAX_PAGES_PER_SITE} pages")
        all_node_ids = set()
        
        # Helper to validate a node tree (cyclic, refs)
        def validate_tree(nodes: Dict[str, Node], root_id: str, context_name: str):
            if root_id not in nodes:
                raise ValueError(f"Root node {root_id} missing in {context_name}")
                
            visited = set()
            active = set()
            def walk(node_id: str):
                if node_id in active:
                    raise ValueError(f"Cyclic tree detected in {context_name} at node {node_id}")
                if node_id in visited:
                    raise ValueError(f"Duplicate child reference detected in {context_name} at node {node_id}")
                if node_id in all_node_ids:
                    raise ValueError(f"Duplicate node ID detected globally: {node_id}")
                visited.add(node_id)
                active.add(node_id)
                all_node_ids.add(node_id)
                
                node = nodes.get(node_id)
                if not node:
                    raise ValueError(f"Missing node reference {node_id} in {context_name}")
                
                # Check responsive breakpoints
                for bp in node.responsiveOverrides:
                    if bp not in self.breakpoints:
                        raise ValueError(f"Malformed breakpoint override '{bp}' in node {node_id}")

                # Check component references
                if node.type == "component_instance":
                    cid = node.content.component_id
                    if cid and cid not in self.components:
                        raise ValueError(f"Missing component reference {cid} in node {node_id}")

                for child_id in node.children:
                    child_node = nodes.get(child_id)
                    if not child_node:
                        raise ValueError(f"Child {child_id} of parent {node_id} is missing in {context_name}")
                    if child_node.parentId != node_id:
                        raise ValueError(f"Mismatched parentId for child {child_id}. Expected {node_id}, got {child_node.parentId}")
                    walk(child_id)
                active.remove(node_id)

            if nodes[root_id].parentId is not None:
                raise ValueError(f"Root node {root_id} must not have a parent in {context_name}")
            
            walk(root_id)
            
            # Ensure no orphaned nodes in the dict
            for n_id in nodes:
                if n_id not in visited:
                    raise ValueError(f"Orphaned node {n_id} detected in {context_name}")

        for page_id, page in self.pages.items():
            validate_tree(page.nodes, page.rootNodeId, f"Page {page_id}")
            
        for comp_id, comp in self.components.items():
            validate_tree(comp.nodes, comp.rootNodeId, f"Component {comp_id}")

        return self

def _css_number(css: dict, *keys: str, default: float) -> float:
    for key in keys:
        value = css.get(key)
        if value is None:
            continue
        try:
            parsed = float(str(value).replace("px", "").replace("deg", "").strip())
        except (TypeError, ValueError):
            continue
        if parsed == parsed and abs(parsed) != float("inf"):
            return parsed
    return default


def _geometry_from_css(node: dict) -> dict:
    css = (node.get("style") or {}).get("css") or {}
    node_type = str(node.get("type") or "")
    default_width = 1440 if node_type in {"page", "section"} else 100
    default_height = 810 if node_type in {"page", "section"} else 40
    position = str(css.get("position") or "absolute")
    return {
        "x": _css_number(css, "left", default=0),
        "y": _css_number(css, "top", default=0),
        "width": max(1, _css_number(css, "width", default=default_width)),
        "height": max(1, _css_number(css, "height", "minHeight", default=default_height)),
        "rotation": _css_number(css, "rotate", default=0),
        "mode": "flow" if position not in {"absolute", "fixed"} else "freeform",
    }


def _normalize_node_json(raw: dict) -> dict:
    node = deepcopy(raw)
    metadata = dict(node.get("metadata") or {})
    if node.get("locked") is None and "locked" in metadata:
        node["locked"] = bool(metadata.get("locked"))
    node.setdefault("locked", False)
    # Keep the legacy UI/readers in sync while the top-level field becomes
    # canonical for engine v2.
    metadata["locked"] = bool(node["locked"])

    derived = _geometry_from_css(node)
    existing = node.get("geometry") if isinstance(node.get("geometry"), dict) else {}
    node["geometry"] = {**derived, **existing}

    overrides = {}
    for breakpoint, override_raw in (node.get("responsiveOverrides") or {}).items():
        override = deepcopy(override_raw or {})
        style_css = ((override.get("style") or {}).get("css") or {})
        geometry = dict(override.get("geometry") or {})
        css_keys = {"left": "x", "top": "y", "width": "width", "height": "height", "rotate": "rotation"}
        for css_key, geometry_key in css_keys.items():
            if geometry_key not in geometry and css_key in style_css:
                fallback = 0 if geometry_key in {"x", "y", "rotation"} else (100 if geometry_key == "width" else 40)
                geometry[geometry_key] = _css_number(style_css, css_key, default=fallback)
        if geometry:
            override["geometry"] = geometry
        overrides[breakpoint] = override
    node["responsiveOverrides"] = overrides
    node["metadata"] = metadata
    return node


def normalize_studio_document_json(doc_json: dict) -> dict:
    """Normalize legacy Studio JSON without changing its public schema version."""

    document = deepcopy(doc_json or {})
    document.setdefault("schemaVersion", SCHEMA_VERSION_STUDIO)
    document.setdefault("version", document["schemaVersion"])
    document["engineVersion"] = max(2, int(document.get("engineVersion") or 0))
    metadata = dict(document.get("metadata") or {})
    metadata["studioEngineVersion"] = document["engineVersion"]
    document["metadata"] = metadata

    pages = {}
    for page_id, page_raw in (document.get("pages") or {}).items():
        page = deepcopy(page_raw)
        page["nodes"] = {
            node_id: _normalize_node_json(node_raw)
            for node_id, node_raw in (page.get("nodes") or {}).items()
        }
        pages[page_id] = page
    document["pages"] = pages

    components = {}
    for component_id, component_raw in (document.get("components") or {}).items():
        component = deepcopy(component_raw)
        component["nodes"] = {
            node_id: _normalize_node_json(node_raw)
            for node_id, node_raw in (component.get("nodes") or {}).items()
        }
        components[component_id] = component
    document["components"] = components
    return document


def create_empty_document() -> SiteDocument:
    root_node = Node(id="root", type="page", children=[])
    section = Node(
        id="section_1",
        type="section",
        parentId="root",
        style=NodeStyle(css={
            "position": "relative", "width": "1440px", "height": "810px",
            "minHeight": "810px", "overflow": "hidden", "background": "#ffffff",
        }),
        metadata={"displayName": "Section 1", "kind": "root-section"},
        geometry=NodeGeometry(x=0, y=0, width=1440, height=810, mode="flow"),
    )
    root_node.children = [section.id]
    return SiteDocument(
        pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root_node, section.id: section})}
    )

def validate_studio_document(doc_json: dict) -> SiteDocument:
    return SiteDocument(**normalize_studio_document_json(doc_json))
