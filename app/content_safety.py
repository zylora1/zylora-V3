from __future__ import annotations

import html
import re
from html.parser import HTMLParser
from urllib.parse import urlparse


# This is intentionally small and explicit. Blog and email content is authored by
# trusted operators, but it is still untrusted HTML at the rendering boundary.
_ALLOWED_TAGS = {
    'a', 'b', 'blockquote', 'br', 'code', 'div', 'em', 'h1', 'h2', 'h3',
    'h4', 'h5', 'h6', 'hr', 'i', 'img', 'li', 'ol', 'p', 'pre', 'span',
    'strong', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u',
    'ul',
}
_VOID_TAGS = {'br', 'hr', 'img'}
_DROP_TAGS = {'base', 'embed', 'form', 'iframe', 'link', 'meta', 'object', 'script', 'style', 'svg', 'template'}
_GLOBAL_ATTRS = {'class', 'dir', 'lang', 'title'}
_TAG_ATTRS = {
    'a': {'href', 'target', 'rel'},
    'img': {'src', 'alt', 'width', 'height', 'loading'},
    'td': {'colspan', 'rowspan'},
    'th': {'colspan', 'rowspan', 'scope'},
}
_SAFE_STYLE = re.compile(
    r'(?i)\b(?:color|background(?:-color)?|font-size|font-family|font-weight|'
    r'font-style|line-height|letter-spacing|text-align|text-decoration|'
    r'margin(?:-(?:top|right|bottom|left))?|padding(?:-(?:top|right|bottom|left))?)\s*:\s*'
    r'(?![^;]*(?:url\s*\(|expression\s*\(|javascript:))[^;{}]+(?=;|$)'
)


def _safe_url(value: str, *, image: bool = False) -> str | None:
    raw = (value or '').strip()
    parsed = urlparse(raw)
    if raw.startswith('/') and not raw.startswith('//'):
        return raw
    if parsed.scheme.lower() in {'https', 'http'} and parsed.hostname and not parsed.username and not parsed.password:
        return raw
    if not parsed.scheme and not raw.startswith('//') and not image:
        return raw if raw.startswith(('#', '?')) else None
    if parsed.scheme.lower() == 'mailto' and parsed.path and not image:
        return raw
    if parsed.scheme.lower() == 'tel' and parsed.path and not image:
        return raw
    return None


def _safe_style(value: str) -> str | None:
    kept = []
    for part in str(value or '').split(';'):
        candidate = part.strip()
        if not candidate or not _SAFE_STYLE.fullmatch(candidate):
            continue
        kept.append(candidate)
    return '; '.join(kept) or None


class _SafeHTML(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self._drop_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        if tag in _DROP_TAGS:
            self._drop_depth += 1
            return
        if self._drop_depth or tag not in _ALLOWED_TAGS:
            return
        allowed = _GLOBAL_ATTRS | _TAG_ATTRS.get(tag, set())
        cleaned: list[str] = []
        for key, value in attrs:
            key = key.lower()
            if key == 'style':
                safe = _safe_style(value or '')
                if safe:
                    cleaned.append(f' style="{html.escape(safe, quote=True)}"')
                continue
            if key.startswith('on') or key not in allowed or value is None:
                continue
            if key in {'href', 'src'}:
                value = _safe_url(value, image=tag == 'img')
                if value is None:
                    continue
                if key == 'href' and value.startswith(('http://', 'https://')):
                    cleaned.append(' rel="noopener noreferrer"')
            if key in {'width', 'height', 'colspan', 'rowspan'} and not re.fullmatch(r'\d{1,4}', value):
                continue
            cleaned.append(f' {key}="{html.escape(str(value)[:2000], quote=True)}"')
        self.parts.append('<' + tag + ''.join(cleaned) + (' />' if tag in _VOID_TAGS else '>'))

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in _DROP_TAGS:
            self._drop_depth = max(0, self._drop_depth - 1)
            return
        if not self._drop_depth and tag in _ALLOWED_TAGS and tag not in _VOID_TAGS:
            self.parts.append(f'</{tag}>')

    def handle_data(self, data: str) -> None:
        if not self._drop_depth:
            self.parts.append(html.escape(data, quote=False))

    def handle_entityref(self, name: str) -> None:
        if not self._drop_depth:
            self.parts.append(f'&amp;{html.escape(name)};')

    def handle_charref(self, name: str) -> None:
        if not self._drop_depth:
            self.parts.append(f'&amp;#{html.escape(name)};')


def sanitize_html(value: str, *, max_chars: int = 100_000) -> str:
    parser = _SafeHTML()
    parser.feed(str(value or '')[:max_chars])
    parser.close()
    return ''.join(parser.parts).strip()


def sanitize_rich_html(value: str, *, max_chars: int = 100_000) -> str:
    """Normalize plain paragraphs and sanitize authored rich HTML."""
    raw = str(value or '').strip()[:max_chars]
    if '<' not in raw:
        paragraphs = [p.strip() for p in re.split(r'\n\s*\n', raw) if p.strip()]
        return ''.join(f'<p>{html.escape(p).replace(chr(10), "<br />")}</p>' for p in paragraphs)
    return sanitize_html(raw, max_chars=max_chars)


def sanitize_email_html(value: str, *, max_chars: int = 100_000) -> str:
    return sanitize_html(value, max_chars=max_chars)


def html_to_text(value: str, *, max_chars: int = 100_000) -> str:
    safe = sanitize_html(value, max_chars=max_chars)
    text = re.sub(r'(?i)<br\s*/?>', '\n', safe)
    text = re.sub(r'(?i)</(?:p|div|h[1-6]|li|tr|blockquote)>', '\n', text)
    text = re.sub(r'<[^>]+>', '', text)
    return re.sub(r'\n{3,}', '\n\n', html.unescape(text)).strip()


def looks_like_html(value: str) -> bool:
    return bool(re.search(r'<\s*/?\s*[a-z][^>]*>', str(value or ''), re.I))
