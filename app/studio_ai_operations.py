from .studio_document import SiteDocument, Node, NodeStyle, BreakpointStyle

def apply_v4_operations(doc: SiteDocument, operations: list[dict]) -> SiteDocument:
    import copy
    new_doc = doc.model_copy(deep=True)

    for op in operations:
        op_type = op.get('type')
        page_id = op.get('pageId')
        if not page_id or page_id not in new_doc.pages:
            raise ValueError(f"Invalid pageId: {page_id}")
            
        page = new_doc.pages[page_id]
        nodes = page.nodes

        if op_type == 'UPDATE_TEXT':
            node_id = op.get('nodeId')
            if node_id not in nodes: raise ValueError(f"Node {node_id} not found")
            node = nodes[node_id]
            if node.type not in ['text', 'heading', 'button', 'link']:
                raise ValueError(f"Node {node_id} does not support text content")
            node.content.text = str(op.get('text', ''))
            
        elif op_type == 'UPDATE_STYLE':
            node_id = op.get('nodeId')
            if node_id not in nodes: raise ValueError(f"Node {node_id} not found")
            node = nodes[node_id]
            if not node.style: node.style = NodeStyle(css={})
            for k, v in op.get('css', {}).items():
                node.style.css[k] = str(v)
                
        elif op_type == 'UPDATE_RESPONSIVE_STYLE':
            node_id = op.get('nodeId')
            bp = op.get('breakpoint')
            if node_id not in nodes: raise ValueError(f"Node {node_id} not found")
            if bp not in ['desktop', 'tablet', 'mobile']: raise ValueError(f"Invalid breakpoint: {bp}")
            node = nodes[node_id]
            if bp not in node.responsiveOverrides:
                node.responsiveOverrides[bp] = BreakpointStyle(style=NodeStyle(css={}))
            for k, v in op.get('css', {}).items():
                node.responsiveOverrides[bp].style.css[k] = str(v)
                
        elif op_type == 'REPARENT_NODE':
            node_id = op.get('nodeId')
            new_parent_id = op.get('newParentId')
            if node_id not in nodes: raise ValueError(f"Node {node_id} not found")
            if new_parent_id not in nodes: raise ValueError(f"Node {new_parent_id} not found")
            
            # Remove from old parent
            for p_id, p_node in nodes.items():
                if node_id in p_node.children:
                    p_node.children.remove(node_id)
                    break
                    
            # Add to new parent
            nodes[new_parent_id].children.append(node_id)
            
        elif op_type == 'DELETE_NODE':
            node_id = op.get('nodeId')
            if node_id == page.rootNodeId: raise ValueError("Cannot delete root node")
            if node_id not in nodes: raise ValueError(f"Node {node_id} not found")
            
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
            nodes[new_node.id] = new_node
            nodes[parent_id].children.append(new_node.id)
            
        else:
            raise ValueError(f"Unsupported AI operation: {op_type}")

    from .studio_document import validate_studio_document
    return validate_studio_document(new_doc.model_dump(exclude_none=True))
