from bs4 import BeautifulSoup, Tag, NavigableString
from .studio_document import SiteDocument, Page, Node, NodeContent, NodeStyle
import uuid

def _map_tag_to_type(tag_name: str, classes: list[str]) -> str:
    if tag_name in ['section', 'main', 'header', 'footer']:
        return "section"
    if tag_name in ['div', 'article', 'aside']:
        return "container"
    if tag_name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
        return "heading"
    if tag_name in ['p', 'span', 'strong', 'em', 'b', 'i', 'small', 'blockquote']:
        return "text"
    if tag_name in ['img', 'svg', 'figure']:
        return "image"
    if tag_name == 'a':
        if 'button' in classes or 'cta' in classes:
            return "button"
        return "link"
    if tag_name == 'button':
        return "button"
    return "container"

def _parse_inline_styles(style_str: str) -> dict:
    if not style_str:
        return {}
    styles = {}
    for rule in style_str.split(';'):
        if ':' in rule:
            k, v = rule.split(':', 1)
            styles[k.strip()] = v.strip()
    return styles

def migrate_html_to_v4_page(page_id: str, slug: str, title: str, html: str) -> Page:
    soup = BeautifulSoup(html, 'html.parser')
    
    nodes = {}
    
    def walk(element, parent_id: str | None) -> str | None:
        if isinstance(element, NavigableString):
            text = str(element).strip()
            if not text:
                return None
            
            node_id = f"text_{uuid.uuid4().hex[:8]}"
            nodes[node_id] = Node(
                id=node_id,
                type="text",
                parentId=parent_id,
                content=NodeContent(text=text)
            )
            return node_id
            
        if not isinstance(element, Tag):
            return None
            
        node_id = element.get('data-zylora-id') or f"{element.name}_{uuid.uuid4().hex[:8]}"
        classes = element.get('class', [])
        node_type = _map_tag_to_type(element.name, classes)
        
        node_content = NodeContent()
        
        if node_type == "image":
            node_content.src = element.get('src')
            node_content.alt = element.get('alt')
        elif node_type in ["link", "button"]:
            node_content.href = element.get('href')
            
        inline_css = _parse_inline_styles(element.get('style', ''))
        # We can also capture classes if we want to migrate global tokens
        
        node = Node(
            id=node_id,
            type=node_type,
            parentId=parent_id,
            content=node_content,
            style=NodeStyle(css=inline_css)
        )
        nodes[node_id] = node
        
        for child in element.children:
            child_id = walk(child, node_id)
            if child_id:
                node.children.append(child_id)
                
        return node_id
        
    root_tag = soup.find('body') or soup
    root_id = walk(root_tag, None)
    
    if not root_id:
        # Fallback if empty
        root_id = "root"
        nodes[root_id] = Node(id=root_id, type="container", children=[])

    return Page(
        id=page_id,
        slug=slug,
        name=title,
        rootNodeId=root_id,
        nodes=nodes
    )

def migrate_v3_to_v4(v3_doc: dict, rendered_pages_html: dict[str, str]) -> SiteDocument:
    """
    rendered_pages_html should be a dict of {page_id: full_rendered_html}
    """
    v4 = SiteDocument(
        id=v3_doc.get("id"),
        metadata=v3_doc.get("generationMeta", {}),
        theme=v3_doc.get("brandProfile", {}),
        seo=v3_doc.get("seo", {})
    )
    
    for page_meta in v3_doc.get("pages", []):
        p_id = page_meta.get("id")
        p_slug = page_meta.get("slug")
        p_title = page_meta.get("title")
        html = rendered_pages_html.get(p_id, "")
        
        if html:
            v4.pages[p_id] = migrate_html_to_v4_page(p_id, p_slug, p_title, html)
            
    return v4
