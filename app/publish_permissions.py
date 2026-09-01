from __future__ import annotations

import hashlib
import json
from copy import deepcopy
from typing import Iterable

from bs4 import BeautifulSoup, Tag

from .structured_editor import parse_document

# These are the only draft properties this feature treats as paid structural edits.
# Content and non-structural presentation operations remain publishable on Free.
STRUCTURAL_STYLE_PROPERTIES = {
    'display','grid-template-columns','grid-template-rows','gap','column-gap','row-gap',
    'align-items','align-content','justify-content','justify-items','flex-direction','flex-wrap','order',
    'padding','padding-top','padding-right','padding-bottom','padding-left',
    'margin','margin-top','margin-right','margin-bottom','margin-left',
    'max-width','min-width','min-height','max-height','height','width','aspect-ratio',
    'font-size','line-height',
    'position','top','right','bottom','left','transform','overflow','z-index',
}
STRUCTURAL_OPERATION_TYPES = {
    'move_before','move_after','remove','duplicate','set_visibility','add_section',
}
STRUCTURAL_ATTRIBUTE_NAMES = {'width','height'}


def plan_is_paid(plan: str | None) -> bool:
    """Single entitlement gate for publish-time structural preservation."""
    return str(plan or '').upper() in {'STARTER','GROWTH','ZYLORA'}


def _split_style_operation(op: dict) -> tuple[dict | None, dict | None]:
    styles = op.get('styles') if isinstance(op.get('styles'), dict) else {}
    structural = {k: v for k, v in styles.items() if str(k).lower() in STRUCTURAL_STYLE_PROPERTIES}
    retained = {k: v for k, v in styles.items() if str(k).lower() not in STRUCTURAL_STYLE_PROPERTIES}
    structural_op = {**op, 'styles': structural} if structural else None
    retained_op = {**op, 'styles': retained} if retained else None
    return structural_op, retained_op


def structural_part(op: dict) -> dict | None:
    typ = str(op.get('type') or '')
    if typ in STRUCTURAL_OPERATION_TYPES:
        return deepcopy(op)
    if typ in {'set_style','set_responsive_style'}:
        return _split_style_operation(op)[0]
    if typ == 'set_attribute' and str(op.get('attribute') or '').lower() in STRUCTURAL_ATTRIBUTE_NAMES:
        return deepcopy(op)
    return None


def content_safe_part(op: dict) -> dict | None:
    """Return the portion of an edit that may remain on a Free live publish.

    The draft is never modified. For mixed style operations, only structural style
    properties are omitted from the published projection.
    """
    typ = str(op.get('type') or '')
    if typ in STRUCTURAL_OPERATION_TYPES:
        return None
    if typ in {'set_style','set_responsive_style'}:
        return _split_style_operation(op)[1]
    if typ == 'set_attribute' and str(op.get('attribute') or '').lower() in STRUCTURAL_ATTRIBUTE_NAMES:
        return None
    return deepcopy(op)


def structural_changes(document: dict | str | None) -> list[dict]:
    doc = parse_document(document)
    out = []
    for op in doc.get('operations', []):
        if not isinstance(op, dict):
            continue
        part = structural_part(op)
        if part:
            out.append(part)
    return out


def project_document_for_publish(document: dict | str | None, *, is_paid: bool, baseline_snapshot: dict | str | None) -> tuple[dict, dict]:
    """Create the live SiteDocument without mutating the editable draft.

    Paid sites publish the draft exactly. Free sites publish a projection with only
    structural edits removed, revealing the immutable template/import baseline.
    """
    doc = parse_document(document)
    changes = structural_changes(doc)
    if is_paid or not changes:
        return deepcopy(doc), {'structural_reset_applied': False, 'structural_change_count': len(changes)}

    if isinstance(baseline_snapshot, str):
        try:
            baseline_snapshot = json.loads(baseline_snapshot or '{}')
        except Exception:
            baseline_snapshot = {}
    if not isinstance(baseline_snapshot, dict) or not baseline_snapshot.get('pages'):
        raise ValueError('Template structural baseline is missing')

    published = deepcopy(doc)
    projected_ops = []
    removed = 0
    for op in doc.get('operations', []):
        if not isinstance(op, dict):
            continue
        keep = content_safe_part(op)
        if keep is None:
            removed += 1
            continue
        if keep != op:
            removed += 1
        projected_ops.append(keep)
    published['operations'] = projected_ops
    published['publishProjection'] = {
        'version': 1,
        'is_paid': False,
        'structural_baseline_sha256': str(baseline_snapshot.get('sha256') or ''),
        'structural_reset_applied': True,
    }
    return published, {'structural_reset_applied': True, 'structural_change_count': len(changes), 'structural_operations_removed': removed}


def _parse_inline_style(value: str | None) -> dict[str, str]:
    out: dict[str, str] = {}
    for item in str(value or '').split(';'):
        if ':' not in item:
            continue
        key, val = item.split(':', 1)
        key = key.strip().lower(); val = val.strip()
        if key in STRUCTURAL_STYLE_PROPERTIES and val:
            out[key] = val
    return out


def capture_structural_snapshot(page_html: dict[str, str], *, template_slug: str, template_version: str = '') -> dict:
    """Capture the immutable default position/size/order facts for each editable node."""
    pages: dict[str, list[dict]] = {}
    for page, html in page_html.items():
        soup = BeautifulSoup(str(html or ''), 'html.parser')
        nodes: list[dict] = []
        for tag in soup.select('[data-zylora-id]'):
            if not isinstance(tag, Tag):
                continue
            parent = tag.parent if isinstance(tag.parent, Tag) else None
            siblings = [x for x in parent.children if isinstance(x, Tag)] if parent else []
            entry = {
                'id': str(tag.get('data-zylora-id') or ''),
                'tag': tag.name,
                'parent_id': str(parent.get('data-zylora-id') or '') if parent else '',
                'sibling_index': siblings.index(tag) if tag in siblings else 0,
            }
            styles = _parse_inline_style(tag.get('style'))
            if styles:
                entry['styles'] = styles
            attrs = {k: str(tag.get(k)) for k in STRUCTURAL_ATTRIBUTE_NAMES if tag.get(k) is not None}
            if attrs:
                entry['attributes'] = attrs
            nodes.append(entry)
        pages[str(page)] = nodes
    canonical = json.dumps({'template_slug': template_slug, 'template_version': template_version, 'pages': pages}, sort_keys=True, separators=(',', ':'))
    return {
        'version': 1,
        'template_slug': template_slug,
        'template_version': template_version,
        'pages': pages,
        'sha256': hashlib.sha256(canonical.encode('utf-8')).hexdigest(),
    }
