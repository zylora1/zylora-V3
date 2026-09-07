from __future__ import annotations

import json
from typing import Any

from sqlalchemy import text

from .db import now_iso
from .seo_engine import published_site_view
from .studio_document import SiteDocument, validate_studio_document
from .studio_migration import migrate_html_to_v4_page
from .structured_editor import parse_document


def _page_metadata(site: dict[str, Any], page_key: str) -> tuple[str, str]:
    document=parse_document(site.get('draft_structure_json'))
    item=next((value for value in document.get('pages',[]) if isinstance(value,dict) and str(value.get('id') or value.get('slug') or '').strip().lower()==page_key),{})
    slug=str(item.get('slug') or page_key or 'home').strip('/') or 'home'
    title=str(item.get('title') or item.get('name') or ('Home' if slug=='home' else slug.replace('-',' ').title()))
    return slug,title


def materialize_document(site: dict[str, Any], *, published: bool=False) -> SiteDocument:
    # Imports remain local so the service is callable from deployment tooling
    # without changing application-router initialization order.
    from .api_editor import _page_keys, render_draft

    source=published_site_view(site) if published else dict(site)
    pages={}
    for page_key in _page_keys(source):
        slug,title=_page_metadata(source,page_key)
        rendered=render_draft(source,page_key)
        pages[page_key]=migrate_html_to_v4_page(page_key,slug,title,rendered)
    if not pages:
        raise ValueError('No renderable pages were found for this site')
    document=SiteDocument(
        id=str(site.get('id') or ''),
        pages=pages,
        revision=max(1,int(site.get('studio_revision') or 0)),
        metadata={
            'materializedFromLegacy': True,
            'legacyOrigin': str(site.get('origin') or ''),
            'legacyTemplateSlug': str(site.get('template_slug') or ''),
            'publishedSnapshot': published,
        },
    )
    return validate_studio_document(document.model_dump(exclude_none=True))


def dependency_counts(db) -> dict[str,int]:
    row=db.execute(text("""SELECT
      count(*) AS total,
      sum(CASE WHEN studio_document_json IS NULL OR studio_document_json='' THEN 1 ELSE 0 END) AS draft_dependencies,
      sum(CASE WHEN status='LIVE' AND (published_studio_document_json IS NULL OR published_studio_document_json='') THEN 1 ELSE 0 END) AS public_dependencies
      FROM sites""")).mappings().one()
    return {key:int(row.get(key) or 0) for key in ('total','draft_dependencies','public_dependencies')}


def materialize_all(db, *, apply: bool=False) -> dict[str,Any]:
    before=dependency_counts(db)
    rows=[dict(row) for row in db.execute(text('SELECT * FROM sites ORDER BY created_at,id')).mappings().all()]
    converted=0; failures=[]
    for site in rows:
        needs_draft=not site.get('studio_document_json')
        needs_public=str(site.get('status') or '').upper()=='LIVE' and not site.get('published_studio_document_json')
        if not (needs_draft or needs_public):
            continue
        try:
            draft=materialize_document(site,published=False) if needs_draft else validate_studio_document(json.loads(site['studio_document_json']))
            public=materialize_document(site,published=True) if needs_public else None
            if apply:
                db.execute(text("""UPDATE sites SET
                  studio_document_json=COALESCE(studio_document_json,:draft),
                  studio_revision=CASE WHEN studio_document_json IS NULL OR studio_document_json='' THEN :revision ELSE studio_revision END,
                  published_studio_document_json=CASE WHEN :has_public=1 THEN :public ELSE published_studio_document_json END,
                  legacy_snapshot_backup_json=CASE WHEN :has_public=1 THEN COALESCE(legacy_snapshot_backup_json,published_snapshot_json) ELSE legacy_snapshot_backup_json END,
                  legacy_structure_backup_json=CASE WHEN :has_public=1 THEN COALESCE(legacy_structure_backup_json,published_structure_json) ELSE legacy_structure_backup_json END,
                  renderer_state=CASE WHEN :has_public=1 THEN 'V4' ELSE renderer_state END,
                  renderer_updated_at=CASE WHEN :has_public=1 THEN :now ELSE renderer_updated_at END,
                  updated_at=:now WHERE id=:site"""),{
                    'draft':draft.model_dump_json(exclude_none=True),'revision':draft.revision,
                    'has_public':1 if public else 0,'public':public.model_dump_json(exclude_none=True) if public else None,
                    'now':now_iso(),'site':site['id'],
                })
            converted+=1
        except Exception as exc:
            failures.append({'site':str(site.get('id') or '')[:8],'reason':type(exc).__name__})
    after=dependency_counts(db) if apply else before
    return {'mode':'apply' if apply else 'dry-run','before':before,'after':after,'candidate_sites':converted,'failures':failures}
