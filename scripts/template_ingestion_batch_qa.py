from __future__ import annotations
import argparse, hashlib, json, re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT=Path(__file__).resolve().parents[1]
import sys
if str(ROOT) not in sys.path:
    sys.path.insert(0,str(ROOT))

def audit(batch:Path)->list[str]:
    errors=[]; projects=[]; names=set(); slugs=set(); digests=set()
    try:
        from app.structured_editor import instrument_editable_html
        from app.templates import _catalogue_project_ready
    except Exception as exc:
        return [f'Zylora runtime unavailable: {type(exc).__name__}: {exc}']
    for mp in sorted(batch.glob('*/metadata.json')):
        project=mp.parent
        try: meta=json.loads(mp.read_text('utf-8'))
        except Exception: errors.append(f'{project.name}: invalid metadata'); continue
        slug=str(meta.get('slug') or ''); name=str(meta.get('name') or ''); tid=str((meta.get('ingestion') or {}).get('template_id') or slug)
        if project.name!=slug: errors.append(f'{tid}: directory/slug mismatch')
        if slug in slugs: errors.append(f'{tid}: duplicate slug')
        if name in names: errors.append(f'{tid}: duplicate name')
        slugs.add(slug); names.add(name); projects.append(project)
        if meta.get('source',{}).get('fidelity')!='licensed_archive': errors.append(f'{tid}: wrong fidelity mode')
        if meta.get('rights',{}).get('mode')!='user_supplied_licensed_archive' or meta.get('rights',{}).get('user_attested_commercial_builder_rights') is not True: errors.append(f'{tid}: missing licensed archive rights attestation')
        if not _catalogue_project_ready(project,meta): errors.append(f'{tid}: fail-closed publication gate rejected project')
        preview=ROOT/'static'/'template-previews'/f'{slug}.png'
        if not preview.is_file() or preview.stat().st_size<1000: errors.append(f'{tid}: preview missing/empty')
        pages=sorted((project/'render').glob('*.html'))
        expected={'home',*[str(x) for x in (meta.get('page_slugs') or [])]}
        if len(pages)!=int(meta.get('pages') or 0) or {p.stem for p in pages}!=expected: errors.append(f'{tid}: page inventory mismatch')
        for page in pages:
            txt=page.read_text('utf-8',errors='ignore'); soup=BeautifulSoup(txt,'html.parser')
            if len(soup.find_all('h1'))!=1: errors.append(f'{tid}:{page.stem}: expected exactly one H1')
            for form in soup.find_all('form'):
                if str(form.get('action') or '')!='#zylora-enquiry': errors.append(f'{tid}:{page.stem}: form bypasses Zylora lead action')
            for tag in soup.find_all(attrs={'data-zylora-page-link':True}):
                if str(tag.get('data-zylora-page-link') or '') not in expected: errors.append(f'{tid}:{page.stem}: invalid page link target')
            for tag in soup.find_all(True):
                for attr in ('src','href','poster'):
                    raw=str(tag.get(attr) or '')
                    if raw.startswith('../assets/'):
                        target=(project/'render'/raw).resolve(); base=(project/'assets').resolve()
                        if not target.is_file() or base not in target.parents: errors.append(f'{tid}:{page.stem}: broken local asset {raw}')
            try:
                edited=instrument_editable_html(txt,page.stem,slug)
                if 'data-zylora-id=' not in edited: errors.append(f'{tid}:{page.stem}: editor instrumentation missing')
            except Exception as exc: errors.append(f'{tid}:{page.stem}: instrumentation failed ({type(exc).__name__})')
        home=(project/'render/home.html').read_text('utf-8',errors='ignore')
        digest=hashlib.sha256(re.sub(r'\s+',' ',home).encode()).hexdigest()
        if digest in digests: errors.append(f'{tid}: exact home duplicate')
        digests.add(digest)
    if len(projects)!=40: errors.append(f'batch: expected 40 public projects, found {len(projects)}')
    return errors

def main()->int:
    ap=argparse.ArgumentParser(); ap.add_argument('--batch-dir',default='template_projects'); a=ap.parse_args()
    batch=(ROOT/a.batch_dir).resolve() if not Path(a.batch_dir).is_absolute() else Path(a.batch_dir).resolve()
    errs=audit(batch)
    if errs:
        for e in errs: print('FAIL',e)
        return 1
    print('template_ingestion_batch_qa: PASS (40 licensed projects; gates/pages/assets/editor/forms/previews)')
    return 0
if __name__=='__main__': raise SystemExit(main())
