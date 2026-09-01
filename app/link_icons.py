from __future__ import annotations

import html
import json
import re
from urllib.parse import urlparse
from uuid import uuid4
from bs4 import BeautifulSoup, Tag
from fastapi import HTTPException

MAX_FOOTER_LINKS = 8
SHORTENERS = {'bit.ly','tinyurl.com','t.co','shorturl.at','ow.ly','buff.ly','is.gd'}

# Ordered, centralized registry. Host matching is boundary-aware, never substring based.
REGISTRY = [
    {'id':'instagram','name':'Instagram','hosts':('instagram.com',),'category':'social','icon':'instagram'},
    {'id':'youtube','name':'YouTube','hosts':('youtube.com','youtu.be'),'category':'social','icon':'youtube'},
    {'id':'x','name':'X','hosts':('x.com','twitter.com'),'category':'social','icon':'x'},
    {'id':'facebook','name':'Facebook','hosts':('facebook.com','fb.com'),'category':'social','icon':'facebook'},
    {'id':'linkedin','name':'LinkedIn','hosts':('linkedin.com',),'category':'social','icon':'linkedin'},
    {'id':'tiktok','name':'TikTok','hosts':('tiktok.com',),'category':'social','icon':'tiktok'},
    {'id':'reddit','name':'Reddit','hosts':('reddit.com',),'category':'social','icon':'reddit'},
    {'id':'pinterest','name':'Pinterest','hosts':('pinterest.com',),'category':'social','icon':'pinterest'},
    {'id':'whatsapp','name':'WhatsApp','hosts':('whatsapp.com','wa.me'),'category':'contact','icon':'whatsapp'},
    {'id':'telegram','name':'Telegram','hosts':('telegram.org','t.me'),'category':'contact','icon':'telegram'},
    {'id':'discord','name':'Discord','hosts':('discord.com','discord.gg'),'category':'social','icon':'discord'},
    {'id':'google_maps','name':'Google Maps','hosts':('maps.google.com','goo.gl'),'category':'location','icon':'map'},
    {'id':'google_business','name':'Google Business Profile','hosts':('g.page','g.co','business.google.com'),'category':'location','icon':'map'},
    {'id':'spotify','name':'Spotify','hosts':('spotify.com',),'category':'social','icon':'spotify'},
    {'id':'app_store','name':'App Store','hosts':('apps.apple.com',),'category':'app','icon':'appstore'},
    {'id':'google_play','name':'Google Play','hosts':('play.google.com',),'category':'app','icon':'play'},
    {'id':'github','name':'GitHub','hosts':('github.com',),'category':'social','icon':'github'},
    {'id':'medium','name':'Medium','hosts':('medium.com',),'category':'social','icon':'medium'},
    {'id':'behance','name':'Behance','hosts':('behance.net',),'category':'social','icon':'behance'},
    {'id':'dribbble','name':'Dribbble','hosts':('dribbble.com',),'category':'social','icon':'dribbble'},
    {'id':'threads','name':'Threads','hosts':('threads.net',),'category':'social','icon':'threads'},
    {'id':'snapchat','name':'Snapchat','hosts':('snapchat.com',),'category':'social','icon':'snapchat'},
    {'id':'yelp','name':'Yelp','hosts':('yelp.com',),'category':'review','icon':'yelp'},
    {'id':'tripadvisor','name':'Tripadvisor','hosts':('tripadvisor.com',),'category':'review','icon':'tripadvisor'},
]
BY_ID = {x['id']:x for x in REGISTRY}
GENERIC = {'id':'generic','name':'Website','category':'external','icon':'link'}


def _host_matches(host: str, candidate: str) -> bool:
    host = host.lower().strip('.'); candidate = candidate.lower().strip('.')
    return host == candidate or host.endswith('.' + candidate)


def _parse(raw: str):
    value = str(raw or '').strip()
    if not value:
        raise HTTPException(422,'Link URL is required')
    if value.lower().startswith('mailto:'):
        addr=value[7:].strip()
        if not addr or '\r' in addr or '\n' in addr or '@' not in addr:
            raise HTTPException(422,'Enter a valid email link')
        return value,'email',None
    if value.lower().startswith('tel:'):
        if not re.fullmatch(r'tel:\+?[0-9(). -]{5,30}',value,re.I):
            raise HTTPException(422,'Enter a valid telephone link')
        return value,'phone',None
    try: p=urlparse(value)
    except Exception: raise HTTPException(422,'Enter a valid URL')
    if p.scheme not in {'https','http'} or not p.hostname or p.username or p.password:
        raise HTTPException(422,'Links must use HTTPS, HTTP, mailto:, or tel:')
    if any(x in value for x in ('\r','\n','\x00')):
        raise HTTPException(422,'Invalid URL')
    host=p.hostname.encode('idna').decode('ascii').lower().removeprefix('www.')
    return value,'web',host


def detect_link_platform(url: str) -> dict:
    value,kind,host=_parse(url)
    if kind=='email':
        return {'platform':'email','icon':'email','name':'Email','category':'contact','confidence':'scheme','warning':None}
    if kind=='phone':
        return {'platform':'phone','icon':'phone','name':'Phone','category':'contact','confidence':'scheme','warning':None}
    warning=None
    if host in SHORTENERS:
        return {**GENERIC,'platform':'generic','confidence':'generic','warning':'Shortened link detected — verify the destination before publishing.'}
    # Path-aware Google Maps and Google Business short paths.
    parsed=urlparse(value); path=(parsed.path or '').lower()
    if host=='goo.gl' and not path.startswith('/maps'):
        return {**GENERIC,'platform':'generic','confidence':'generic','warning':None}
    if host=='g.co' and not path.startswith('/kgs'):
        return {**GENERIC,'platform':'generic','confidence':'generic','warning':None}
    # Legacy apple.com/app-store compatibility.
    if _host_matches(host,'apple.com') and path.startswith('/app-store'):
        item=BY_ID['app_store']; return {'platform':item['id'],'icon':item['icon'],'name':item['name'],'category':item['category'],'confidence':'host_path','warning':None}
    for item in REGISTRY:
        if any(_host_matches(host,h) for h in item['hosts']):
            rootish=(parsed.path or '/').strip('/')==''
            if rootish and item['category'] in {'social','location','review'}:
                warning=f'This looks like the {item["name"]} homepage. Did you mean to add your profile or location URL?'
            return {'platform':item['id'],'icon':item['icon'],'name':item['name'],'category':item['category'],'confidence':'hostname','warning':warning}
    return {**GENERIC,'platform':'generic','confidence':'generic','warning':None}


def normalize_footer_links(raw_links) -> list[dict]:
    if raw_links is None: return []
    if not isinstance(raw_links,list): raise HTTPException(422,'Footer links must be a list')
    if len(raw_links)>MAX_FOOTER_LINKS: raise HTTPException(422,f'Footer supports at most {MAX_FOOTER_LINKS} link icons')
    out=[]
    for i,raw in enumerate(raw_links):
        if isinstance(raw,str): raw={'url':raw}
        if not isinstance(raw,dict): raise HTTPException(422,'Invalid footer link')
        url=str(raw.get('url') or '').strip(); detected=detect_link_platform(url)
        override=str(raw.get('icon_override') or '').strip().lower() or None
        if override and override not in set(BY_ID)|{'generic','email','phone'}:
            raise HTTPException(422,'Unsupported icon override')
        platform=(override or detected['platform']) if raw.get('manual_override') else detected['platform']
        selected=(BY_ID.get(platform) or ({'id':'email','name':'Email','icon':'email','category':'contact'} if platform=='email' else {'id':'phone','name':'Phone','icon':'phone','category':'contact'} if platform=='phone' else GENERIC))
        label=str(raw.get('label_override') or '').strip()[:120] or None
        out.append({
            'id':str(raw.get('id') or uuid4()),'url':url,'detected_platform':detected['platform'],'platform':selected['id'],
            'icon':selected['icon'],'category':selected['category'],'label_override':label,'icon_override':override,
            'manual_override':bool(raw.get('manual_override') and override),'detection_source':detected['confidence'],'warning':detected.get('warning'),
            'order':i,
        })
    return out


def accessible_label(item: dict) -> str:
    if item.get('label_override'): return str(item['label_override'])[:120]
    p=item.get('platform')
    if p=='email': return 'Email us'
    if p=='phone': return 'Call us'
    if p in {'google_maps','google_business'}: return 'View our location on Google Maps'
    name=(BY_ID.get(str(p)) or GENERIC)['name']
    return f'Visit our {name}' if p!='generic' else 'Visit external link'


def _svg(icon: str) -> str:
    # Small, coherent monochrome glyph set; all use currentColor and a 24px viewBox.
    common='viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'
    paths={
      'instagram':'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.6" r=".7" fill="currentColor" stroke="none"/>',
      'youtube':'<rect x="3" y="6" width="18" height="12" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/>',
      'x':'<path d="M5 4 19 20M19 4 5 20"/>','facebook':'<path d="M14 21v-8h3l.5-3H14V8.3c0-1.3.5-2.3 2.5-2.3H18V3.2c-.5-.1-1.3-.2-2.4-.2C12.5 3 10.5 4.8 10.5 8v2H8v3h2.5v8"/>',
      'linkedin':'<rect x="4" y="9" width="3" height="11"/><circle cx="5.5" cy="5.5" r="1.5"/><path d="M11 20V9h3v1.8c1-1.6 5-2.2 5 3.1V20h-3v-5.4c0-2.1-2-2.2-2 0V20z"/>',
      'tiktok':'<path d="M14 4v11a4 4 0 1 1-3-3.9V8a7 7 0 1 0 6 6.9V8.5c1.1.8 2.3 1.2 4 1.3V7a5.6 5.6 0 0 1-4-2.2V4z"/>',
      'reddit':'<circle cx="12" cy="13" r="6"/><circle cx="9.5" cy="12.5" r=".8" fill="currentColor"/><circle cx="14.5" cy="12.5" r=".8" fill="currentColor"/><path d="M9 15c1.5 1 4.5 1 6 0M15 7l1-3 3 1"/><circle cx="19" cy="5" r="1"/>',
      'pinterest':'<circle cx="12" cy="12" r="8"/><path d="M10 19c1-3 1.3-4.2 1.8-6.3-.7-1.2-.4-3.6 1-4.1 1.5-.6 2.5.7 2.2 2.2-.4 2.2-1.7 3.8-3.4 3.1-1.2-.5-2-2-1.5-3.7"/>',
      'whatsapp':'<path d="M20 11.6a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.6z"/><path d="M9 8.5c.5 3 2 4.5 5 5l1-1.2 2 .8c-.2 1.4-1.3 2.4-2.6 2.4-4.1 0-7.9-3.8-7.9-7.9C6.5 6.3 7.5 5.2 9 5l.8 2z"/>',
      'telegram':'<path d="M3 11 21 4l-4 16-6-5-4 3 1-5z"/><path d="m8 13 8-5"/>','discord':'<path d="M7 7c3-1 7-1 10 0l2 9c-2 2-4 3-7 3s-5-1-7-3z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/>',
      'map':'<path d="M12 21s6-5.4 6-11A6 6 0 1 0 6 10c0 5.6 6 11 6 11z"/><circle cx="12" cy="10" r="2"/>','email':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>','phone':'<path d="M7 3h3l1 5-2 1c1 3 3 5 6 6l1-2 5 1v3c0 2-2 4-4 4C9 21 3 15 3 7c0-2 2-4 4-4z"/>',
      'spotify':'<circle cx="12" cy="12" r="9"/><path d="M7 10c4-1 7-.7 11 .8M8 13c3-.8 6-.6 9 .7M9 16c2.5-.5 4.5-.3 7 .6"/>','appstore':'<path d="m8 18 4-12 4 12M6 15h12M8 6l2 2M16 6l-2 2"/>','play':'<path d="m5 4 14 8-14 8z"/>',
      'github':'<circle cx="12" cy="12" r="8"/><path d="M8 19c0-2 1-3 4-3s4 1 4 3M8.5 8.5 7 6M15.5 8.5 17 6"/><circle cx="9.5" cy="12" r=".7" fill="currentColor"/><circle cx="14.5" cy="12" r=".7" fill="currentColor"/>',
      'medium':'<path d="M4 7h4l4 9 4-9h4M6 7v10M18 7v10"/>','behance':'<path d="M4 7h6c4 0 4 5 0 5H4zM4 12h6c4 0 4 5 0 5H4zM14 7h6M14 13c0-4 7-4 7 1v1h-7c0 3 4 4 6 2"/>',
      'dribbble':'<circle cx="12" cy="12" r="9"/><path d="M5 8c6 2 10 2 14 0M8 4c4 5 6 10 7 16M4 15c5-3 10-4 16-2"/>','threads':'<circle cx="12" cy="12" r="8"/><path d="M8 12c0-4 7-5 8 0 1 5-7 6-7 2 0-3 6-3 8-1"/>','snapchat':'<path d="M8 17c1-1 1-2 1-3-2 0-3-1-3-2 2 0 2-1 2-4a4 4 0 0 1 8 0c0 3 0 4 2 4 0 1-1 2-3 2 0 1 0 2 1 3-2 1-3 0-4 2-1-2-2-1-4-2z"/>',
      'yelp':'<path d="M12 3v6M5 7l5 3M4 15l6-2M10 21l2-6M20 17l-6-4"/>','tripadvisor':'<circle cx="8" cy="13" r="3"/><circle cx="16" cy="13" r="3"/><path d="M5 8c4-2 10-2 14 0M11 13h2M4 10l-2-2M20 10l2-2"/>','link':'<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>'
    }
    return f'<svg {common}>{paths.get(icon,paths["link"])}</svg>'


def footer_links_fragment(links: list[dict]) -> str:
    if not links: return ''
    items=[]
    for item in links[:MAX_FOOTER_LINKS]:
        url=html.escape(str(item.get('url') or ''),quote=True); label=html.escape(accessible_label(item),quote=True); icon=html.escape(str(item.get('icon') or 'link'))
        native=str(item.get('platform')) in {'email','phone'}
        attrs='' if native else ' target="_blank" rel="noopener noreferrer"'
        items.append(f'<a class="zylora-footer-link" href="{url}" aria-label="{label}" data-platform="{icon}"{attrs}>{_svg(icon)}</a>')
    return '<div class="zylora-footer-links" data-zylora-footer-links="true">'+''.join(items)+'</div>'


def apply_footer_links_html(raw_html: str, links: list[dict]) -> str:
    if not links: return raw_html
    soup=BeautifulSoup(raw_html,'html.parser'); footer=soup.find('footer')
    if not isinstance(footer,Tag): return raw_html
    if footer.select_one('[data-zylora-footer-links]'): return str(soup)
    style=soup.new_tag('style'); style['data-zylora-footer-link-style']='true'; style.string=(
      '.zylora-footer-links{display:flex;flex-wrap:wrap;align-items:center;gap:10px;max-width:100%;margin-inline-start:auto}'
      '.zylora-footer-link{display:inline-grid;place-items:center;width:44px;height:44px;min-width:44px;min-height:44px;color:inherit;text-decoration:none;border:1px solid currentColor;border-radius:999px;opacity:.9}'
      '.zylora-footer-link:hover{opacity:1}.zylora-footer-link:focus-visible{outline:3px solid currentColor;outline-offset:3px}'
      '@media(max-width:640px){.zylora-footer-links{width:100%;margin-inline-start:0;justify-content:flex-start}.zylora-footer-link{width:44px;height:44px}}'
    )
    footer.append(style)
    frag=BeautifulSoup(footer_links_fragment(links),'html.parser')
    for node in list(frag.contents): footer.append(node)
    return str(soup)


def links_from_seo_json(raw) -> list[dict]:
    try: data=json.loads(raw or '{}') if not isinstance(raw,dict) else raw
    except Exception: return []
    vals=data.get('footer_links') if isinstance(data,dict) else []
    if not isinstance(vals,list): return []
    try: return normalize_footer_links(vals[:MAX_FOOTER_LINKS])
    except HTTPException: return []
