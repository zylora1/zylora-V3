from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
IMAGE_RE = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']|url\(["\']?([^"\')]+\.(?:png|jpe?g|webp|avif|gif|svg))["\']?\)', re.I)
FORBIDDEN_UI = re.compile(r'\b(log\s?in|sign\s?up|create account|forgot password|checkout|add to cart|my account|wishlist|favorites?)\b', re.I)


def main(batch: int) -> int:
    errors=[]; audited=[]; hashes={}
    for mp in sorted((ROOT/'template_projects').glob('*/metadata.json')):
        meta=json.loads(mp.read_text(encoding='utf-8'))
        if meta.get('hidden') or int(meta.get('batch') or 0)!=batch: continue
        p=mp.parent; ref=int(meta.get('reference') or 0); audited.append(ref)
        routes=[f for f in sorted((p/'render').glob('*.html')) if not f.name.startswith('_')]
        seen={}
        for f in routes:
            text=f.read_text(encoding='utf-8')
            if text.count('<h1')!=1: errors.append(f'{p.name}/{f.name}: expected one h1')
            if re.search(r'<img[^>]+src=["\']https?://', text, re.I): errors.append(f'{p.name}/{f.name}: hotlinked img')
            if FORBIDDEN_UI.search(re.sub(r'<script.*?</script>','',text,flags=re.I|re.S)): errors.append(f'{p.name}/{f.name}: unsupported auth/cart UI copy')
            for a,b in IMAGE_RE.findall(text):
                asset=(a or b).split('?')[0].split('#')[0]
                if not asset or asset.startswith('data:'): continue
                seen.setdefault(asset,[]).append(f.name)
        repeats={a:where for a,where in seen.items() if len(where)>1}
        if repeats: errors.append(f'{p.name}: repeated displayed image assets {repeats}')
        for src in [p/'components', p/'app']:
            for f in src.glob('*'):
                if not f.is_file() or f.suffix.lower() not in {'.jsx','.tsx','.js','.ts','.css'}: continue
                t=f.read_text(encoding='utf-8',errors='ignore')
                if 'template_projects/' in t or '../'+p.name not in t and re.search(r'\.\./\.\./[^/]+/(?:components|app)/',t):
                    errors.append(f'{p.name}/{f.name}: possible cross-template import')
                if f.name in {'globals.css','Site.jsx','CinderFrameExperience.jsx','MeridianWellness.jsx','MaisonAtelier.jsx','SignalAssembly.jsx','TonicHouse.jsx','SonderSociety.jsx'}:
                    h=hashlib.sha256(t.encode()).hexdigest(); hashes.setdefault(h,[]).append(f'{p.name}/{f.name}')
        manifest=p/'assets-manifest.json'
        if not manifest.exists(): errors.append(f'{p.name}: missing asset manifest')
        else:
            data=json.loads(manifest.read_text(encoding='utf-8'))
            if ref>=2 and 'photo' in str(data.get('reference_medium','')).lower():
                if data.get('ai_generated_photography_allowed') is not False: errors.append(f'{p.name}: AI photography not explicitly prohibited')
    collisions={h:v for h,v in hashes.items() if len(v)>1}
    if collisions: errors.append(f'identical visual source hashes across templates: {collisions}')
    expected=list(range((batch-1)*10+1, batch*10+1))
    if sorted(audited)!=expected: errors.append(f'batch references {sorted(audited)} != expected {expected}')
    print(f'reference_batch_integrity_qa: batch={batch} templates={len(audited)} errors={len(errors)}')
    for e in errors: print('ERROR',e)
    return 1 if errors else 0

if __name__=='__main__':
    ap=argparse.ArgumentParser(); ap.add_argument('--batch',type=int,default=1); a=ap.parse_args(); raise SystemExit(main(a.batch))
