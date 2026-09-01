from __future__ import annotations
import json,re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
import sys; sys.path.insert(0,str(ROOT))
from app.templates import TEMPLATES
OUT=ROOT/'data'/'template-assets-qa.json'
IMG_EXT=r'(?:avif|gif|jpe?g|png|svg|webp)'
attr_re=re.compile(r'''(?:src|srcset)\s*=\s*["']([^"']+)["']''',re.I)
css_re=re.compile(r'''url\(\s*["']?([^"')]+)["']?\s*\)''',re.I)
errors=[]; refs=0; remote=[]
for t in TEMPLATES:
    slug=t['slug']; project=ROOT/'template_projects'/slug
    if not project.exists(): errors.append(f'{slug}: missing project'); continue
    preview=(ROOT/str(t.get('preview','')).lstrip('/'))
    if not preview.exists(): errors.append(f'{slug}: missing preview {t.get("preview")}')
    for f in list((project/'render').glob('*.html'))+list((project/'app').rglob('*.css')):
        text=f.read_text(encoding='utf-8',errors='ignore')
        vals=attr_re.findall(text) if f.suffix=='.html' else []
        vals+=css_re.findall(text)
        for raw in vals:
            for v in ([x.strip().split()[0] for x in raw.split(',')] if ',' in raw and 'srcset' in text else [raw.strip()]):
                if not v or v.startswith(('data:','#','javascript:')): continue
                if not re.search(rf'\.{IMG_EXT}(?:[?#].*)?$',v,re.I): continue
                refs+=1
                if v.startswith(('http://','https://','//')):
                    remote.append({'template':slug,'file':str(f.relative_to(ROOT)),'url':v}); continue
                clean=v.split('?',1)[0].split('#',1)[0]
                target=(f.parent/clean).resolve()
                try: target.relative_to(project.resolve())
                except ValueError: errors.append(f'{slug}: asset escapes project: {v}'); continue
                if not target.exists(): errors.append(f'{slug}: missing local asset {clean} in {f.relative_to(project)}')
if remote: errors.extend(f"{x['template']}: remote image {x['url']}" for x in remote)
report={'templates':len(TEMPLATES),'asset_references_checked':refs,'remote_images':remote,'errors':errors}
OUT.parent.mkdir(exist_ok=True);OUT.write_text(json.dumps(report,indent=2))
print(f"validate_template_assets: {len(TEMPLATES)} templates; {refs} image refs; remote {len(remote)}; errors {len(errors)}")
for e in errors[:50]: print('ERROR',e)
sys.exit(1 if errors else 0)
