from __future__ import annotations
import html
import json
from urllib.parse import urljoin
from ..models import Site


def _obj(raw: str | None) -> dict:
    try:
        value = json.loads(raw or '{}')
        return value if isinstance(value, dict) else {}
    except Exception:
        return {}


def render_site_html(site: Site, public_origin: str | None = None) -> bytes:
    content = _obj(site.content_json)
    seo = _obj(site.seo_json)
    theme = _obj(site.theme_json)

    business_name = str(content.get('businessName') or content.get('business_name') or site.name)
    headline = str(content.get('headline') or business_name)
    description = str(content.get('description') or '')
    email = str(content.get('email') or '')
    phone = str(content.get('phone') or '')
    address = str(content.get('address') or '')
    services = content.get('services') if isinstance(content.get('services'), list) else []
    accent = str(theme.get('accent') or theme.get('accentColor') or '#5b5cf0')

    title = str(seo.get('title') or business_name)
    meta_description = str(seo.get('description') or description or headline)
    canonical = str(seo.get('canonical') or seo.get('canonicalUrl') or '')
    if not canonical and public_origin:
        canonical = urljoin(public_origin.rstrip('/') + '/', site.slug)
    og_image = str(seo.get('ogImage') or content.get('ogImage') or '')
    noindex = bool(seo.get('noindex', False))

    esc = html.escape
    service_html = ''.join(
        f'<li>{esc(str(item.get("name") if isinstance(item, dict) else item))}</li>'
        for item in services
    )
    canonical_tag = f'<link rel="canonical" href="{esc(canonical, quote=True)}">' if canonical else ''
    og_image_tag = f'<meta property="og:image" content="{esc(og_image, quote=True)}">' if og_image else ''
    robots = 'noindex,nofollow' if noindex else 'index,follow'

    schema = {
        '@context': 'https://schema.org',
        '@type': str(content.get('schemaType') or 'LocalBusiness'),
        'name': business_name,
        'description': description or meta_description,
        'url': canonical or None,
        'email': email or None,
        'telephone': phone or None,
        'address': address or None,
    }
    schema = {k: v for k, v in schema.items() if v not in (None, '')}
    schema_json = (json.dumps(schema, ensure_ascii=False)
        .replace('&', '\\u0026')
        .replace('<', '\\u003c')
        .replace('>', '\\u003e'))

    template_key = esc(str(site.template_key or 'zylora-default'), quote=True)
    document = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(meta_description, quote=True)}">
<meta name="robots" content="{robots}">
{canonical_tag}
<meta property="og:type" content="website">
<meta property="og:title" content="{esc(title, quote=True)}">
<meta property="og:description" content="{esc(meta_description, quote=True)}">
{og_image_tag}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{esc(title, quote=True)}">
<meta name="twitter:description" content="{esc(meta_description, quote=True)}">
<script type="application/ld+json">{schema_json}</script>
<style>
:root{{--accent:{esc(accent, quote=True)};font-family:Inter,ui-sans-serif,system-ui,sans-serif;color:#101114;background:#fff}}
*{{box-sizing:border-box}}body{{margin:0}}a{{color:inherit}}.site-shell{{min-height:100vh}}.hero{{padding:clamp(4rem,9vw,9rem) clamp(1.25rem,6vw,7rem);border-bottom:1px solid #e8e8ec}}.eyebrow{{font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;color:#666}}h1{{font-size:clamp(2.6rem,7vw,7rem);line-height:.94;max-width:14ch;margin:.6rem 0 1rem}}.lede{{font-size:clamp(1rem,2vw,1.35rem);max-width:62ch;color:#555;line-height:1.6}}.contact,.services{{padding:clamp(2rem,5vw,5rem) clamp(1.25rem,6vw,7rem)}}.services ul{{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;padding:0;list-style:none}}.services li{{border:1px solid #ddd;border-radius:18px;padding:1.2rem}}.cta{{display:inline-block;margin-top:1.5rem;padding:.85rem 1.15rem;border-radius:999px;background:var(--accent);color:white;text-decoration:none}}@media(max-width:640px){{h1{{font-size:clamp(2.3rem,14vw,4rem)}}.hero,.contact,.services{{padding-left:1rem;padding-right:1rem}}}}
</style>
</head>
<body data-template-key="{template_key}">
<main class="site-shell template-{template_key}">
<section class="hero">
<div class="eyebrow">{esc(business_name)}</div>
<h1>{esc(headline)}</h1>
<p class="lede">{esc(description)}</p>
{f'<a class="cta" href="mailto:{esc(email, quote=True)}">Get in touch</a>' if email else ''}
</section>
{f'<section class="services"><h2>Services</h2><ul>{service_html}</ul></section>' if service_html else ''}
<section class="contact"><h2>Contact</h2>
{f'<p><a href="mailto:{esc(email, quote=True)}">{esc(email)}</a></p>' if email else ''}
{f'<p><a href="tel:{esc(phone, quote=True)}">{esc(phone)}</a></p>' if phone else ''}
{f'<p>{esc(address)}</p>' if address else ''}
</section>
</main>
</body>
</html>'''
    return document.encode('utf-8')
