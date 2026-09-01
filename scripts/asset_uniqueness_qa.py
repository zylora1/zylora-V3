from __future__ import annotations
import argparse, hashlib, json
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

ROOT=Path(__file__).resolve().parents[1]


def canon(url:str)->str:
    if not url: return ''
    s=urlsplit(url)
    return urlunsplit((s.scheme.lower(),s.netloc.lower(),s.path,'',s.fragment))


def sha(path:Path)->str:
    h=hashlib.sha256()
    with path.open('rb') as f:
        for chunk in iter(lambda:f.read(1024*1024),b''): h.update(chunk)
    return h.hexdigest()


def main()->int:
    ap=argparse.ArgumentParser(); ap.add_argument('--batch-dir',required=True)
    args=ap.parse_args(); batch=ROOT/args.batch_dir
    errors=[]; used_urls={}; used_hashes={}
    for manifest in sorted(batch.glob('*/assets-manifest.json')):
        slug=manifest.parent.name
        try: data=json.loads(manifest.read_text(encoding='utf-8'))
        except Exception as e: errors.append(f'{slug}: invalid asset manifest: {e}'); continue
        local_urls=set(); local_hashes=set()
        for i,a in enumerate(data.get('assets') or []):
            source=canon(str(a.get('source_url') or a.get('original_url') or ''))
            rel=str(a.get('local_path') or a.get('path') or '')
            if source:
                if source in local_urls: errors.append(f'{slug}: source image reused inside template: {source}')
                local_urls.add(source)
                if source in used_urls: errors.append(f'{slug}: source image reused from {used_urls[source]}: {source}')
                else: used_urls[source]=slug
            if rel:
                p=manifest.parent/rel
                if not p.exists(): errors.append(f'{slug}: missing local asset {rel}'); continue
                digest=sha(p)
                if digest in local_hashes: errors.append(f'{slug}: duplicate image bytes reused inside template: {rel}')
                local_hashes.add(digest)
                if digest in used_hashes: errors.append(f'{slug}: duplicate image bytes reused from {used_hashes[digest]}: {rel}')
                else: used_hashes[digest]=slug
            if not a.get('license') and not a.get('license_name'):
                errors.append(f'{slug}: asset {i+1} missing license record')
    if errors:
        print('asset_uniqueness_qa: FAIL')
        for e in errors: print(' -',e)
        return 1
    print(f'asset_uniqueness_qa: PASS ({len(used_urls)} source URLs, {len(used_hashes)} local binaries unique)')
    return 0
if __name__=='__main__': raise SystemExit(main())
