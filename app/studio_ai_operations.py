from __future__ import annotations

from math import isfinite

from .studio_document import (
    BreakpointOverride,
    GeometryOverride,
    Node,
    NodeGeometry,
    NodeStyle,
    SiteDocument,
    _geometry_from_css,
    validate_studio_document,
)


class SemanticValidationError(ValueError): pass
def canonicalize_component_metadata(metadata, **kwargs): return metadata, []

GEOMETRY_FIELDS = {
    "x", "y", "width", "height", "rotation", "mode",
    "minWidth", "maxWidth", "minHeight", "maxHeight", "lockAspectRatio",
}


def _locked(node: Node) -> bool:
    return node.locked is True or bool(node.metadata.get("locked"))


def _node(nodes: dict[str, Node], node_id: object) -> Node:
    key = str(node_id or "")
    if key not in nodes:
        raise ValueError(f"Node {key} not found")
    return nodes[key]


def _editable(nodes: dict[str, Node], node_id: object) -> Node:
    node = _node(nodes, node_id)
    if _locked(node):
        raise ValueError(f"Node {node.id} is locked")
    return node


def _geometry_values(raw: object) -> dict:
    if not isinstance(raw, dict) or not raw:
        raise ValueError("Geometry operation requires a non-empty geometry object")
    unknown = set(raw) - GEOMETRY_FIELDS
    if unknown:
        raise ValueError(f"Unsupported geometry fields: {', '.join(sorted(unknown))}")
    values = {}
    for key, value in raw.items():
        if key == "mode":
            if value not in {"freeform", "flow"}:
                raise ValueError("Geometry mode must be freeform or flow")
            values[key] = value
        elif key == "lockAspectRatio":
            if not isinstance(value, bool):
                raise ValueError("lockAspectRatio must be a boolean")
            values[key] = value
        else:
            try:
                number = float(value)
            except (TypeError, ValueError) as exc:
                raise ValueError(f"Geometry field {key} must be numeric") from exc
            if not isfinite(number):
                raise ValueError(f"Geometry field {key} must be finite")
            if key in {"width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight"} and number < 1:
                raise ValueError(f"Geometry field {key} must be at least 1")
            values[key] = number
    return values


def _geometry_css(values: dict) -> dict[str, str]:
    mapping = {"x": "left", "y": "top", "width": "width", "height": "height", "rotation": "rotate"}
    css = {mapping[key]: f"{value:g}px" for key, value in values.items() if key in mapping}
    if "rotation" in values:
        css["rotate"] = f"{values['rotation']:g}deg"
    if "mode" in values:
        css["position"] = "relative" if values["mode"] == "flow" else "absolute"
    return css


def _apply_geometry(node: Node, raw: object, breakpoint: str = "desktop") -> None:
    values = _geometry_values(raw)
    if breakpoint == "desktop":
        current = node.geometry or NodeGeometry(**_geometry_from_css(node.model_dump()))
        next_values = current.model_dump()
        next_values.update(values)
        node.geometry = NodeGeometry(**next_values)
        node.style.css.update(_geometry_css(values))
        return
    if breakpoint not in {"tablet", "mobile"}:
        raise ValueError(f"Invalid breakpoint: {breakpoint}")
    override = node.responsiveOverrides.get(breakpoint) or BreakpointOverride()
    current = override.geometry.model_dump(exclude_none=True) if override.geometry else {}
    current.update(values)
    override.geometry = GeometryOverride(**current)
    style = override.style or NodeStyle()
    style.css.update(_geometry_css(values))
    override.style = style
    node.responsiveOverrides[breakpoint] = override

def apply_v4_operations(doc: SiteDocument, operations: list[dict]) -> SiteDocument:
    new_doc = doc.model_copy(deep=True)
    # Every canonical mutation keeps the website semantic envelope explicit;
    # this is metadata, not a second document model.
    new_doc.metadata.setdefault('zyloraWebsiteSchemaVersion', 1)

    for op in operations:
        op_type = op.get('type')
        page_id = op.get('pageId')
        if not page_id or page_id not in new_doc.pages:
            raise ValueError(f"Invalid pageId: {page_id}")
            
        page = new_doc.pages[page_id]
        nodes = page.nodes

        if op_type == 'UPDATE_SITE_TOKEN':
            name = str(op.get('name') or '').strip()
            if not name or len(name) > 120 or not all(char.isalnum() or char in '._-' for char in name) or not name[0].isalpha():
                raise ValueError('Invalid site token name')
            value = op.get('value')
            if isinstance(value, (dict, list)):
                raise ValueError('Site token values must be scalar')
            new_doc.tokens[name] = str(value) if value is not None else ''

        elif op_type == 'UPDATE_TEXT':
            node = _editable(nodes, op.get('nodeId'))
            if node.type not in ['text', 'heading', 'button', 'link']:
                raise ValueError(f"Node {node.id} does not support text content")
            node.content.text = str(op.get('text', ''))
            
        elif op_type == 'UPDATE_STYLE':
            node = _editable(nodes, op.get('nodeId'))
            for k, v in op.get('css', {}).items():
                node.style.css[k] = str(v)

        elif op_type == 'UPDATE_SEMANTIC_METADATA':
            node = _editable(nodes, op.get('nodeId'))
            raw_metadata = op.get('metadata')
            if not isinstance(raw_metadata, dict):
                raise ValueError('Semantic metadata must be an object')
            try:
                semantic, _warnings = canonicalize_component_metadata(
                    raw_metadata,
                    node_id=node.id,
                    used_instance_ids={
                        str(other.metadata.get('zylora', {}).get('instanceId'))
                        for other in nodes.values()
                        if other.id != node.id and isinstance(other.metadata.get('zylora'), dict)
                    },
                )
            except SemanticValidationError as exc:
                raise ValueError(str(exc)) from exc
            node.metadata['zylora'] = semantic
                
        elif op_type == 'UPDATE_RESPONSIVE_STYLE':
            bp = op.get('breakpoint')
            if bp not in ['desktop', 'tablet', 'mobile']: raise ValueError(f"Invalid breakpoint: {bp}")
            node = _editable(nodes, op.get('nodeId'))
            if bp not in node.responsiveOverrides:
                node.responsiveOverrides[bp] = BreakpointOverride(style=NodeStyle(css={}))
            for k, v in op.get('css', {}).items():
                node.responsiveOverrides[bp].style.css[k] = str(v)

        elif op_type == 'UPDATE_GEOMETRY':
            node = _editable(nodes, op.get('nodeId'))
            _apply_geometry(node, op.get('geometry'))

        elif op_type == 'UPDATE_RESPONSIVE_GEOMETRY':
            bp = op.get('breakpoint')
            node = _editable(nodes, op.get('nodeId'))
            _apply_geometry(node, op.get('geometry'), str(bp))

        elif op_type == 'TOGGLE_LOCK':
            node = _node(nodes, op.get('nodeId'))
            locked = not _locked(node)
            node.locked = locked
            node.metadata['locked'] = locked
                
        elif op_type == 'REPARENT_NODE':
            node = _editable(nodes, op.get('nodeId'))
            node_id = node.id
            parent = _editable(nodes, op.get('newParentId'))
            new_parent_id = parent.id
            if node_id == new_parent_id:
                raise ValueError("A node cannot be its own parent")
            if new_parent_id in {node_id, *node.children}:
                raise ValueError("A node cannot be reparented into its own subtree")
            
            # Remove from old parent
            for p_id, p_node in nodes.items():
                if node_id in p_node.children:
                    p_node.children.remove(node_id)
                    break
                    
            # Add to new parent
            parent.children.append(node_id)
            node.parentId = new_parent_id

        elif op_type == 'GROUP_NODES':
            node_ids = [str(value) for value in (op.get('nodeIds') or [])]
            group_id = str(op.get('groupId') or '')
            if len(node_ids) < 2 or len(set(node_ids)) != len(node_ids):
                raise ValueError('A group requires at least two distinct nodes')
            if not group_id or group_id in nodes:
                raise ValueError('Group id is missing or already exists')
            grouped = [_editable(nodes, node_id) for node_id in node_ids]
            if any(node.id == page.rootNodeId for node in grouped):
                raise ValueError('The page root cannot be grouped')
            parent_ids = {node.parentId for node in grouped}
            if len(parent_ids) != 1 or None in parent_ids:
                raise ValueError('Grouped nodes must share one parent')
            parent_id = next(iter(parent_ids))
            parent = nodes.get(parent_id)
            if not parent:
                raise ValueError('Group parent is missing')
            ordered = [child_id for child_id in parent.children if child_id in node_ids]
            if len(ordered) != len(node_ids):
                raise ValueError('Grouped nodes are not children of their declared parent')
            boxes = []
            for node in grouped:
                geom = node.geometry or NodeGeometry(**_geometry_from_css(node.model_dump()))
                boxes.append((node, geom))
            left = min(geom.x for _, geom in boxes)
            top = min(geom.y for _, geom in boxes)
            right = max(geom.x + geom.width for _, geom in boxes)
            bottom = max(geom.y + geom.height for _, geom in boxes)
            wrapper = Node(
                id=group_id,
                type='container',
                parentId=parent.id,
                children=ordered,
                metadata={'displayName': 'Group', 'kind': 'group', 'penpotAdapter': True},
                geometry=NodeGeometry(x=left, y=top, width=max(1, right-left), height=max(1, bottom-top)),
            )
            for node, geom in boxes:
                node.parentId = group_id
                node.geometry = NodeGeometry(
                    x=geom.x-left, y=geom.y-top, width=geom.width, height=geom.height,
                    rotation=geom.rotation, mode=geom.mode, minWidth=geom.minWidth,
                    maxWidth=geom.maxWidth, minHeight=geom.minHeight, maxHeight=geom.maxHeight,
                    lockAspectRatio=geom.lockAspectRatio,
                )
            at = min(parent.children.index(node_id) for node_id in ordered)
            parent.children = [child_id for child_id in parent.children if child_id not in node_ids]
            parent.children.insert(at, group_id)
            nodes[group_id] = wrapper

        elif op_type == 'UNGROUP_NODES':
            group = _editable(nodes, op.get('nodeId'))
            if group.type != 'container' or group.metadata.get('kind') != 'group' or not group.parentId:
                raise ValueError('Only adapter-created groups can be ungrouped')
            parent = nodes.get(group.parentId)
            if not parent:
                raise ValueError('Group parent is missing')
            group_geom = group.geometry or NodeGeometry(**_geometry_from_css(group.model_dump()))
            at = parent.children.index(group.id) if group.id in parent.children else len(parent.children)
            for child_id in group.children:
                child = nodes.get(child_id)
                if not child:
                    raise ValueError(f'Grouped child {child_id} is missing')
                child_geom = child.geometry or NodeGeometry(**_geometry_from_css(child.model_dump()))
                child.parentId = parent.id
                child.geometry = NodeGeometry(
                    x=child_geom.x+group_geom.x, y=child_geom.y+group_geom.y,
                    width=child_geom.width, height=child_geom.height,
                    rotation=child_geom.rotation, mode=child_geom.mode, minWidth=child_geom.minWidth,
                    maxWidth=child_geom.maxWidth, minHeight=child_geom.minHeight,
                    maxHeight=child_geom.maxHeight, lockAspectRatio=child_geom.lockAspectRatio,
                )
            parent.children = [child_id for child_id in parent.children if child_id != group.id]
            parent.children[at:at] = list(group.children)
            del nodes[group.id]
            
        elif op_type == 'DELETE_NODE':
            node_id = str(op.get('nodeId') or '')
            if node_id == page.rootNodeId: raise ValueError("Cannot delete root node")
            _editable(nodes, node_id)
            
            # Remove from parent
            for p_id, p_node in nodes.items():
                if node_id in p_node.children:
                    p_node.children.remove(node_id)
                    break
            
            def delete_subtree(nid):
                for child_id in nodes[nid].children:
                    delete_subtree(child_id)
                del nodes[nid]
            delete_subtree(node_id)
            
        elif op_type == 'INSERT_NODE':
            parent_id = op.get('parentId')
            if parent_id not in nodes: raise ValueError(f"Parent {parent_id} not found")
            new_node_data = op.get('node', {})
            new_node = Node(**new_node_data)
            if new_node.id in nodes: raise ValueError(f"Node {new_node.id} already exists")
            if new_node.children:
                raise ValueError("Inserted nodes cannot reference children that are not part of the operation")
            if new_node.geometry is None:
                new_node.geometry = NodeGeometry(**_geometry_from_css(new_node.model_dump()))
            new_node.parentId = parent_id
            nodes[new_node.id] = new_node
            nodes[parent_id].children.append(new_node.id)
            
        else:
            raise ValueError(f"Unsupported AI operation: {op_type}")

    from .studio_document import validate_studio_document
    return validate_studio_document(new_doc.model_dump(exclude_none=True))
