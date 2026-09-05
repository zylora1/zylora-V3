from typing import Dict, List, Any
from .studio_document import SiteDocument, Page, Node, NodeStyle

def _render_node_style(node_id: str, style: NodeStyle) -> str:
    if not style or not style.css:
        return ""
    
    rules = []
    for prop, val in style.css.items():
        # TODO: Handle token resolution here if value matches a token
        rules.append(f"{prop}: {val};")
        
    if rules:
        return f".z-node-{node_id} {{ {' '.join(rules)} }}\n"
    return ""

def _render_node_css(node: Node, doc: SiteDocument) -> str:
    css = ""
    # Base styles
    css += _render_node_style(node.id, node.style)
    
    # Responsive overrides
    for bp, bp_val in doc.breakpoints.items():
        override = node.responsiveOverrides.get(bp)
        if override and override.style:
            # Simple approach: emit media queries for breakpoints
            if bp == 'tablet':
                mq = "@media (max-width: 991px)"
            elif bp == 'mobile':
                mq = "@media (max-width: 767px)"
            else:
                mq = None # Desktop is base, usually no media query needed unless min-width
                
            if mq:
                inner_css = _render_node_style(node.id, override.style)
                if inner_css:
                    css += f"{mq} {{\n  {inner_css}}}\n"
                    
    # Visibility overrides
    # TODO: Implement display:none based on visibility logic
    
    return css

def _render_node_html(node: Node, doc: SiteDocument, page: Page) -> str:
    tag = "div" # default
    if node.type == "section": tag = "section"
    elif node.type == "text": tag = "p"
    elif node.type == "heading": tag = "h2"
    elif node.type == "image": tag = "img"
    elif node.type == "button": tag = "button"
    elif node.type == "link": tag = "a"
    elif node.type == "form" or node.type == "lead_form": tag = "form"
    elif node.type == "form_field": tag = "input"
    elif node.type == "navigation": tag = "nav"
    elif node.type == "appointment_booking": tag = "div"
    elif node.type == "ai_sales_assistant": tag = "div"
    
    classes = f"z-node z-node-{node.id}"
    
    # Add business component markers for frontend hydration scripts
    if node.type == "appointment_booking":
        classes += " zylora-appointment-widget"
    elif node.type == "lead_form":
        classes += " zylora-lead-form"
    elif node.type == "ai_sales_assistant":
        classes += " zylora-chatbot-container"

    attrs = f'class="{classes}" id="{node.id}" data-studio-type="{node.type}"'
    
    if tag == "img" and node.content.src:
        # Sanitize src to prevent javascript: or data:xss URIs
        if node.content.src.startswith(('http://', 'https://', '/')):
            attrs += f' src="{node.content.src}" alt="{node.content.alt or ""}"'
    elif tag == "a" and node.content.href:
        if node.content.href.startswith(('http://', 'https://', '/', 'mailto:', 'tel:')):
            attrs += f' href="{node.content.href}"'
        
    import html
    from bs4 import BeautifulSoup
    if node.content.html:
        soup = BeautifulSoup(node.content.html, 'html.parser')
        # Allow only simple formatting tags
        allowed_tags = {'b', 'i', 'strong', 'em', 'span', 'br', 'a', 'u', 'mark'}
        for tag in soup.find_all(True):
            if tag.name not in allowed_tags:
                tag.unwrap()
            else:
                # Strip all attributes except href for links
                allowed_attrs = ['href'] if tag.name == 'a' else []
                attrs = dict(tag.attrs)
                for a in attrs:
                    if a not in allowed_attrs:
                        del tag[a]
                if tag.name == 'a' and tag.get('href'):
                    if not tag['href'].startswith(('http://', 'https://', 'mailto:', 'tel:', '/')):
                        tag['href'] = '#'
        inner_html = str(soup)
    elif node.content.text:
        inner_html = html.escape(node.content.text)
    else:
        inner_html = ""
    
    # Render children
    for child_id in node.children:
        child_node = page.nodes.get(child_id)
        if child_node:
            inner_html += _render_node_html(child_node, doc, page)
            
    if tag in ["img", "input", "br", "hr"]:
        return f"<{tag} {attrs} />"
    return f"<{tag} {attrs}>{inner_html}</{tag}>"

def render_page(doc: SiteDocument, page_id: str) -> str:
    page = doc.pages.get(page_id)
    if not page:
        raise ValueError(f"Page {page_id} not found in document")
        
    root = page.nodes.get(page.rootNodeId)
    if not root:
        return "<html><body>Empty Page</body></html>"
        
    # Generate CSS
    all_css = ""
    for node in page.nodes.values():
        all_css += _render_node_css(node, doc)
        
    # Generate HTML
    body_html = _render_node_html(root, doc, page)
    
    final_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style id="studio-styles">
{all_css}
    </style>
</head>
<body>
    {body_html}
</body>
</html>"""

    return final_html
