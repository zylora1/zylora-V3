from __future__ import annotations
from typing import Any, Dict, List, Literal, Optional
from pydantic import BaseModel, Field, model_validator, field_validator

SCHEMA_VERSION_STUDIO = 4

NODE_TYPES = {
    "page", "section", "frame", "container", "stack", "flex", "grid",
    "heading", "paragraph", "text", "image", "button", "link", "icon",
    "video", "divider", "navigation", "form", "form_field", "lead_form",
    "appointment_booking", "ai_sales_assistant", "business_hours", "map", "embed", "component_instance"
}

class NodeContent(BaseModel):
    text: Optional[str] = None
    html: Optional[str] = None
    src: Optional[str] = None
    alt: Optional[str] = None
    href: Optional[str] = None
    value: Optional[str] = None
    placeholder: Optional[str] = None
    required: Optional[bool] = None
    asset_id: Optional[str] = None
    component_id: Optional[str] = None # For component instances

class NodeStyle(BaseModel):
    css: Dict[str, Any] = Field(default_factory=dict)
    tokens: Dict[str, str] = Field(default_factory=dict)
    
class BreakpointOverride(BaseModel):
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

    @field_validator('type')
    @classmethod
    def validate_type(cls, v: str) -> str:
        if v not in NODE_TYPES:
            raise ValueError(f"Invalid node type: {v}")
        return v

class Page(BaseModel):
    id: str
    slug: str
    name: str
    rootNodeId: str
    seo: Dict[str, Any] = Field(default_factory=dict)
    breakpointConfiguration: Dict[str, Any] = Field(default_factory=dict)
    nodes: Dict[str, Node] = Field(default_factory=dict)

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
    seo: Dict[str, Any] = Field(default_factory=dict)
    settings: Dict[str, Any] = Field(default_factory=dict)
    
    # Task 7 & 12 extensions
    revision: int = 1
    migrationDiagnostics: Dict[str, Any] = Field(default_factory=dict)

    @model_validator(mode='after')
    def validate_document(self) -> SiteDocument:
        all_node_ids = set()
        
        # Helper to validate a node tree (cyclic, refs)
        def validate_tree(nodes: Dict[str, Node], root_id: str, context_name: str):
            if root_id not in nodes:
                raise ValueError(f"Root node {root_id} missing in {context_name}")
                
            visited = set()
            def walk(node_id: str):
                if node_id in visited:
                    raise ValueError(f"Cyclic tree detected in {context_name} at node {node_id}")
                if node_id in all_node_ids:
                    raise ValueError(f"Duplicate node ID detected globally: {node_id}")
                visited.add(node_id)
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

def create_empty_document() -> SiteDocument:
    root_node = Node(id="root", type="page", children=[])
    return SiteDocument(
        pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root_node})}
    )

def validate_studio_document(doc_json: dict) -> SiteDocument:
    return SiteDocument(**doc_json)
