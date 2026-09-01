from __future__ import annotations

import re
from urllib.parse import urlparse
from bs4 import BeautifulSoup, Tag

_BACKEND_PATTERNS = {
    'authentication': re.compile(r'\b(sign\s*in|log\s*in|login|sign\s*up(?!\s+credit)|signup(?!\s+credit)|create\s+account|forgot\s+password|password|otp|two[- ]?factor|2fa|my\s+account|account\s+settings)\b', re.I),
    'member_area': re.compile(r'\b(member\s+(?:area|dashboard|portal)|client\s+portal|customer\s+portal|user\s+dashboard|gated\s+content)\b', re.I),
    'commerce_state': re.compile(r'\b(add\s+to\s+cart|shopping\s+cart|checkout|wishlist|save\s+to\s+favorites?|order\s+tracking|order\s+history)\b', re.I),
    'persistent_state': re.compile(r'\b(my\s+bookings|course\s+progress|saved\s+items?|comments?\s+section|review\s+submission)\b', re.I),
}
_EXTERNAL_URL = re.compile(r'https?://[^\s<>()"\']+', re.I)


def backend_dependency_kind(text: str | None) -> str | None:
    value = str(text or '')
    for kind, pattern in _BACKEND_PATTERNS.items():
        if pattern.search(value):
            return kind
    return None


def extract_external_url(text: str | None) -> str | None:
    m = _EXTERNAL_URL.search(str(text or ''))
    if not m:
        return None
    raw = m.group(0).rstrip('.,;)')
    try:
        p = urlparse(raw)
    except Exception:
        return None
    if p.scheme not in {'http', 'https'} or not p.hostname:
        return None
    return raw


def policy_response(instruction: str, external_destinations: dict | None = None) -> str | None:
    kind = backend_dependency_kind(instruction)
    if not kind:
        return None
    supplied = extract_external_url(instruction)
    configured = external_destinations or {}
    available = supplied or next((str(v) for v in configured.values() if v), None)
    if available:
        return (
            'Zylora sites are public marketing and lead-generation websites rather than per-site account applications. '
            'I can connect the relevant CTA to your configured external app or portal URL, but I will not create a fake account, checkout, dashboard, or persistent-state backend inside this website.'
        )
    return (
        "Zylora sites are built as fast public websites rather than full applications with their own account system and database, so I can't add a working sign-in, signup, account, checkout, dashboard, or other database-backed flow directly to this site. "
        'I can instead use a real lead-capture CTA such as Request access, Get started, Contact us, or Join the waitlist; connect an existing app/login/booking/checkout URL; or describe the product experience as marketing content. '
        'If you already have the external destination, add it in Site Settings or include the URL in your edit request.'
    )




_FOOTER_PLATFORM_TERMS = {
    'instagram': ('instagram',),
    'youtube': ('youtube',),
    'x': (' x ', 'twitter'),
    'facebook': ('facebook',),
    'linkedin': ('linkedin',),
    'tiktok': ('tiktok',),
    'whatsapp': ('whatsapp',),
    'telegram': ('telegram',),
    'reddit': ('reddit',),
    'pinterest': ('pinterest',),
    'github': ('github',),
}
_FOOTER_FORBIDDEN_PLACEMENT = re.compile(r'\b(header|hero|nav(?:igation)?|navbar|top\s*bar|beside\s+(?:the\s+)?navigation|next\s+to\s+(?:the\s+)?(?:nav|logo))\b', re.I)
_FOOTER_LINK_INTENT = re.compile(r'\b(social\s+(?:icon|icons|link|links)|contact\s+(?:icon|icons)|instagram|youtube|twitter|facebook|linkedin|tiktok|whatsapp|telegram|reddit|pinterest|github)\b', re.I)


def footer_placement_policy(instruction: str, existing_links: list[dict] | None = None) -> dict | None:
    """Deterministically enforce Zylora's footer-only social/contact-link rule.

    This path does not call an AI provider. If a concrete URL is supplied it may be
    safely configured in the footer by the API; otherwise the user is told exactly
    what destination is still required.
    """
    text = str(instruction or '')
    if not _FOOTER_FORBIDDEN_PLACEMENT.search(text) or not _FOOTER_LINK_INTENT.search(text):
        return None
    low = f' {text.lower()} '
    requested_platform = next((pid for pid, terms in _FOOTER_PLATFORM_TERMS.items() if any(term in low for term in terms)), None)
    supplied = extract_external_url(text)
    existing = existing_links or []
    configured = None
    if requested_platform:
        configured = next((str(x.get('url') or '') for x in existing if str(x.get('platform') or x.get('detected_platform') or '') == requested_platform and x.get('url')), None)
    chosen = supplied or configured
    if chosen:
        return {
            'url': chosen,
            'platform': requested_platform,
            'message': (
                'Social and contact icons are a footer-only element in Zylora so the header and hero stay focused on navigation and the primary call to action. '
                'I kept the destination in the footer instead.'
            ),
        }
    name = requested_platform.title() if requested_platform else 'social/contact'
    return {
        'url': None,
        'platform': requested_platform,
        'message': (
            'Social and contact icons are a footer-only element in Zylora so the header and hero stay focused on navigation and the primary call to action. '
            f'I can add the {name} icon to the footer instead, but I need the real destination URL first; Zylora will not invent a profile or contact URL.'
        ),
    }


def _is_external_href(href: str) -> bool:
    try:
        p = urlparse(href)
    except Exception:
        return False
    return p.scheme in {'http', 'https'} and bool(p.hostname)


def validate_public_fragment(html: str) -> str:
    """Reject fake backend-dependent interactive UI while preserving legitimate marketing copy.

    Descriptive text about accounts, dashboards, carts, or memberships is allowed. The rejection applies
    only when the fragment creates an interactive control that visually promises unsupported behavior.
    """
    soup = BeautifulSoup(html or '', 'html.parser')
    for inp in soup.find_all('input'):
        typ = str(inp.get('type') or 'text').lower()
        name = ' '.join(str(inp.get(k) or '') for k in ('name', 'placeholder', 'aria-label'))
        if typ == 'password' or re.search(r'\b(password|otp|verification\s+code|2fa)\b', name, re.I):
            raise ValueError('Per-site authentication/password/OTP controls are not supported. Connect an external application instead.')
    for tag in soup.find_all(['form', 'button', 'a']):
        if not isinstance(tag, Tag):
            continue
        text = ' '.join(tag.stripped_strings)
        kind = backend_dependency_kind(text)
        if not kind:
            continue
        if tag.name == 'a' and _is_external_href(str(tag.get('href') or '')):
            continue
        raise ValueError('This interactive control requires backend or persistent account behavior that a Zylora public site does not provide. Use lead capture or a real external destination.')
    if soup.select_one('.zylora-footer-links,[data-zylora-footer-links]'):
        raise ValueError('Footer link icons are managed through Site Settings and can only be rendered inside the site footer.')
    return html
