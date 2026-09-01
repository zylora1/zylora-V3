from __future__ import annotations
import json,re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
GENERIC={'sans-serif','serif','monospace','system-ui','ui-sans-serif','ui-serif','ui-monospace'}

def font_tokens(css:str)->set[str]:
    out=set()
    # Quoted families and common bare family names used in shorthand declarations.
    for x in re.findall(r'["\']([^"\']+)["\']',css):
        if len(x)<48 and ' ' in x or x.isalpha(): out.add(x.strip())
    for x in ['Georgia','Impact','Arial','Inter','Cantarell','Cabin','Arimo','Clear Sans','GFS Didot','Go Mono','Gillius ADF','Gentium Book Plus','Liberation Sans Narrow']:
        if re.search(rf'(?<![\w-]){re.escape(x)}(?![\w-])',css): out.add(x)
    return {x for x in out if x.lower() not in GENERIC and not x.startswith('#')}

def audit_project(project:Path)->list[str]:
    errs=[]
    meta_path=project/'metadata.json'; css_path=project/'app/globals.css'; home_path=project/'render/home.html'; manifest=project/'assets-manifest.json'
    if not all(p.exists() for p in [meta_path,css_path,home_path,manifest]):
        return ['missing metadata/css/home/asset manifest']
    meta=json.loads(meta_path.read_text(encoding='utf-8'))
    css=css_path.read_text(encoding='utf-8'); home=home_path.read_text(encoding='utf-8')
    fonts=font_tokens(css)
    if len(fonts)<2: errs.append(f'needs at least two intentional font families; found {sorted(fonts)}')
    if '<footer' not in home or not re.search(r'<footer\s+class=',home): errs.append('footer must be explicitly designed/classed')
    if home.count('<a ')<4: errs.append('footer/navigation/link structure looks under-designed')
    if re.search(r'<img[^>]+src=["\']https?://',home,re.I) or re.search(r'url\(["\']?https?://',css,re.I): errs.append('hotlinked production image detected')
    if home.count('<h1')!=1: errs.append(f'home must contain exactly one H1; found {home.count("<h1")}')
    if len(str(meta.get('art_direction') or ''))<60: errs.append('metadata art_direction is too weak to encode a distinct visual concept')
    preview=ROOT/'static/template-previews'/f"{meta.get('slug')}.png"
    if not preview.exists(): errs.append('current catalogue preview missing')
    return errs

def main()->int:
    projects=[]
    for meta_path in sorted((ROOT/'template_projects').glob('*/metadata.json')):
        meta=json.loads(meta_path.read_text(encoding='utf-8'))
        if meta.get('hidden'): continue
        projects.append(meta_path.parent)
    failures=[]
    for p in projects:
        errs=audit_project(p)
        if errs: failures.append((p.name,errs))
        else: print(f'PASS {p.name}: multi-font + designed footer + local assets + art-direction metadata')
    if failures:
        for slug,errs in failures:
            for e in errs: print(f'FAIL {slug}: {e}')
        return 1
    print(f'premium_template_quality_qa: {len(projects)} public templates / 0 errors')
    return 0
if __name__=='__main__': raise SystemExit(main())
