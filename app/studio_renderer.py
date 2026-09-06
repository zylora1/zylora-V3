import html
import json
import re
from urllib.parse import unquote
from typing import Any
from bs4 import BeautifulSoup
from .studio_document import SiteDocument, Page, Node, NodeStyle

_VOID_TAGS={"img","input","br","hr"}
_ALLOWED_CSS_PROPERTIES={
    'align-content','align-items','align-self','aspect-ratio','background','background-color','border','border-color',
    'border-radius','border-style','border-width','bottom','box-shadow','color','column-gap','display','flex','flex-basis',
    'flex-direction','flex-grow','flex-shrink','flex-wrap','font-family','font-size','font-style','font-weight','gap',
    'grid-auto-flow','grid-column','grid-row','grid-template-columns','grid-template-rows','height','justify-content',
    'justify-items','left','letter-spacing','line-height','margin','margin-bottom','margin-left','margin-right','margin-top',
    'max-height','max-width','min-height','min-width','object-fit','object-position','opacity','overflow','padding',
    'padding-bottom','padding-left','padding-right','padding-top','position','right','text-align','text-decoration',
    'text-transform','top','transform','transform-origin','visibility','white-space','width','z-index'
}

def _css_name(prop: str) -> str:
    return re.sub(r'([A-Z])',lambda match:'-'+match.group(1).lower(),str(prop).strip())

def _safe_css_value(value: Any) -> str|None:
    rendered=str(value).strip()
    lowered=re.sub(r'[\x00-\x20]+','',unquote(rendered)).lower()
    if not rendered or any(token in rendered for token in ('{','}','/*','*/',';','<','>')):
        return None
    if any(token in lowered for token in ('javascript:','vbscript:','@import','expression(')):
        return None
    return rendered

def _safe_url(value: str|None, *, image: bool=False) -> str|None:
    if not value:
        return None
    raw=str(value).strip()
    normalized=re.sub(r'[\x00-\x20]+','',unquote(raw)).lower()
    if normalized.startswith('//'):
        return None
    allowed=('https://','http://','/') if image else ('https://','http://','/','mailto:','tel:','#')
    return raw if normalized.startswith(allowed) else None

def _render_node_style(node_id: str, style: NodeStyle) -> str:
    if not style or not style.css:
        return ""
    
    rules = []
    for prop, val in style.css.items():
        css_prop=_css_name(prop)
        css_value=_safe_css_value(val)
        if css_prop in _ALLOWED_CSS_PROPERTIES and css_value is not None:
            rules.append(f"{css_prop}: {css_value};")
        
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
                    
    if node.visibility == 'hidden':
        css += f".z-node-{node.id} {{ display: none !important; }}\n"
    for bp, override in node.responsiveOverrides.items():
        if not override or not override.visibility or bp == 'desktop':
            continue
        width=doc.breakpoints.get(bp)
        if width:
            restored=_safe_css_value((override.style.css.get('display') if override.style else None) or node.style.css.get('display') or 'revert') or 'revert'
            display='none' if override.visibility == 'hidden' else restored
            css += f"@media (max-width: {width}px) {{ .z-node-{node.id} {{ display: {display} !important; }} }}\n"
    
    return css

def _bound_content(node:Node,data_context:dict|None,asset_resolver=None):
    content=node.content.model_copy(deep=True)
    if not data_context:
        return content
    values=data_context.get('values') if isinstance(data_context.get('values'),dict) else {}
    for target,binding in node.bindings.items():
        if target not in {'text','html','src','href','alt'} or not isinstance(binding,dict) or binding.get('kind')!='FIELD':
            continue
        field_id=binding.get('fieldId') or binding.get('field_id')
        if not field_id or field_id not in values:
            continue
        value=values[field_id]
        if target=='src' and asset_resolver and value:
            value=asset_resolver(str(value)) or ''
        if target in {'text','html','src','href','alt'}:
            setattr(content,target,'' if value is None else str(value))
    return content


def _render_node_html(node: Node, doc: SiteDocument, page: Page, data_context:dict|None=None, collection_items:list[dict]|None=None, asset_resolver=None, instance_suffix:str='') -> str:
    tag = "div" # default
    if node.type == "section": tag = "section"
    elif node.type in {"text","paragraph"}: tag = "p"
    elif node.type == "heading": tag = "h2"
    elif node.type == "image": tag = "img"
    elif node.type == "button": tag = "button"
    elif node.type == "link": tag = "a"
    elif node.type == "form" or node.type == "lead_form": tag = "form"
    elif node.type == "form_field": tag = "input"
    elif node.type == "navigation": tag = "nav"
    elif node.type == "divider": tag = "hr"
    elif node.type == "video": tag = "video"
    elif node.type == "appointment_booking": tag = "div"
    elif node.type == "ai_sales_assistant": tag = "div"
    
    content=_bound_content(node,data_context,asset_resolver)
    classes = f"z-node z-node-{node.id}"
    
    # Add business component markers for frontend hydration scripts
    if node.type == "appointment_booking":
        classes += " zylora-appointment-widget"
    elif node.type == "lead_form":
        classes += " zylora-lead-form"
    elif node.type == "ai_sales_assistant":
        classes += " zylora-chatbot-container"

    rendered_id=node.id+instance_suffix
    attrs = f'class="{classes}" id="{html.escape(rendered_id,quote=True)}" data-studio-type="{html.escape(node.type,quote=True)}"'
    
    if tag == "img" and content.src:
        # Sanitize src to prevent javascript: or data:xss URIs
        src=_safe_url(content.src,image=True)
        if src:
            attrs += f' src="{html.escape(src,quote=True)}" alt="{html.escape(content.alt or "",quote=True)}"'
    elif tag == "a" and content.href:
        href=_safe_url(content.href)
        if href:
            attrs += f' href="{html.escape(href,quote=True)}"'
    elif tag == 'input':
        if content.placeholder:
            attrs += f' placeholder="{html.escape(content.placeholder,quote=True)}"'
        if content.required:
            attrs += ' required'
        
    if content.html:
        soup = BeautifulSoup(content.html, 'html.parser')
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
                    tag['href'] = _safe_url(tag['href']) or '#'
        inner_html = str(soup)
    elif content.text:
        inner_html = html.escape(content.text)
    else:
        inner_html = ""
    
    repeater=node.bindings.get('items') if isinstance(node.bindings,dict) else None
    rows=collection_items if node.type in {'repeater','list','carousel','gallery','table','container','section','grid','stack','flex'} and isinstance(repeater,dict) and repeater.get('kind')=='REPEATER' else None
    if rows is not None:
        wanted=str(repeater.get('collectionId') or repeater.get('collection_id') or '')
        try: limit=max(1,min(int(repeater.get('limit') or 20),100))
        except (TypeError,ValueError): limit=20
        rows=[row for row in rows if not wanted or row.get('collection_id')==wanted]
        configured_filter=repeater.get('filter')
        if isinstance(configured_filter,dict) and configured_filter.get('fieldId'):
            field_id=str(configured_filter['fieldId']); expected=configured_filter.get('value'); op=str(configured_filter.get('op') or 'eq')
            if op=='contains': rows=[row for row in rows if str(expected).lower() in str((row.get('values') or {}).get(field_id,'')).lower()]
            else: rows=[row for row in rows if (row.get('values') or {}).get(field_id)==expected]
        sort_key=str(repeater.get('sort') or 'published_at'); reverse=str(repeater.get('direction') or 'desc').lower()!='asc'
        rows=sorted(rows,key=lambda row:str(row.get(sort_key) if sort_key in {'published_at','updated_at','slug'} else (row.get('values') or {}).get(sort_key,'')),reverse=reverse)[:limit]
        for index,row in enumerate(rows):
            for child_id in node.children:
                child_node=page.nodes.get(child_id)
                if child_node:
                    inner_html += _render_node_html(child_node,doc,page,row,collection_items,asset_resolver,f'{instance_suffix}-{index}')
    else:
        for child_id in node.children:
            child_node = page.nodes.get(child_id)
            if child_node:
                inner_html += _render_node_html(child_node,doc,page,data_context,collection_items,asset_resolver,instance_suffix)
            
    if tag in _VOID_TAGS:
        return f"<{tag} {attrs} />"
    return f"<{tag} {attrs}>{inner_html}</{tag}>"

def render_page(doc: SiteDocument, page_id: str, *, data_context:dict|None=None, collection_items:list[dict]|None=None, asset_resolver=None, seo_override:dict|None=None) -> str:
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
    body_html = _render_node_html(root,doc,page,data_context,collection_items,asset_resolver)
    
    seo_override=seo_override or {}
    title=html.escape(str(seo_override.get('title') or page.seo.get('title') or doc.seo.get('title') or page.name))
    description=seo_override.get('description') or page.seo.get('description') or doc.seo.get('description')
    description_meta=f'<meta name="description" content="{html.escape(str(description),quote=True)}">' if description else ''
    robots='noindex,nofollow' if seo_override.get('noindex') else 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
    robots_meta=f'<meta name="robots" content="{robots}">'
    canonical=seo_override.get('canonical')
    canonical_meta=f'<link rel="canonical" href="{html.escape(str(canonical),quote=True)}">' if _safe_url(str(canonical or '')) else ''
    og_title=seo_override.get('og_title') or seo_override.get('title')
    og_description=seo_override.get('og_description') or description
    og_image=_safe_url(str(seo_override.get('og_image') or ''),image=True)
    social_meta=''.join([
        f'<meta property="og:title" content="{html.escape(str(og_title),quote=True)}">' if og_title else '',
        f'<meta property="og:description" content="{html.escape(str(og_description),quote=True)}">' if og_description else '',
        f'<meta property="og:url" content="{html.escape(str(canonical),quote=True)}">' if canonical else '',
        f'<meta property="og:image" content="{html.escape(og_image,quote=True)}"><meta name="twitter:card" content="summary_large_image">' if og_image else '',
    ])
    structured=seo_override.get('structured_data')
    structured_json=json.dumps(structured,ensure_ascii=False,separators=(',',':')).replace('</','<\\/') if isinstance(structured,dict) else ''
    structured_meta=f'<script type="application/ld+json">{structured_json}</script>' if structured_json else ''
    final_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    {description_meta}{robots_meta}
    {canonical_meta}{social_meta}{structured_meta}
    <style id="studio-styles">
{all_css}
    </style>
</head>
<body>
    {body_html}
</body>
</html>"""

    return final_html
