import sys, io, os, json, hashlib, re, zipfile, tarfile
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src_dir = r'C:\Users\joys0\OneDrive\Desktop\temp-1'

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

print('=== Detailed Inspection of Folders 1-41 and Archives ===\n')

details = {}

for i in range(1, 42):
    fid = str(i)
    fpath = os.path.join(src_dir, fid)
    if not os.path.exists(fpath):
        continue
        
    pkg = {}
    pkg_file = os.path.join(fpath, 'package.json')
    if os.path.exists(pkg_file):
        try:
            with open(pkg_file, 'r', encoding='utf-8', errors='ignore') as f:
                pkg = json.load(f)
        except Exception:
            pass
            
    page_text = ''
    page_file = ''
    for c in ['app/page.tsx', 'index.html', 'src/App.tsx']:
        cp = os.path.join(fpath, c)
        if os.path.exists(cp):
            page_file = c
            page_text = open(cp, 'r', encoding='utf-8', errors='ignore').read()
            break
            
    page_sha = hashlib.sha256(page_text.encode('utf-8')).hexdigest() if page_text else ''
    
    readme_text = ''
    for r in ['README.md', 'REFERENCE_SPEC.md', 'ASSET-LICENSES.md']:
        rp = os.path.join(fpath, r)
        if os.path.exists(rp):
            readme_text += f'\n[{r}]: ' + open(rp, 'r', encoding='utf-8', errors='ignore').read()[:500]
            
    comp_dir = os.path.join(fpath, 'components')
    comps = []
    if os.path.exists(comp_dir):
        comps = [f for f in os.listdir(comp_dir) if f.endswith(('.tsx', '.jsx', '.html', '.ts'))]
        
    pub_dir = os.path.join(fpath, 'public')
    assets = []
    if os.path.exists(pub_dir):
        for root, _, files in os.walk(pub_dir):
            for f in files:
                assets.append(os.path.relpath(os.path.join(root, f), pub_dir))
                
    details[fid] = {
        'folder': fid,
        'pkg_name': pkg.get('name', ''),
        'page_file': page_file,
        'page_sha': page_sha,
        'page_len': len(page_text),
        'components': comps,
        'assets_count': len(assets),
        'assets_sample': assets[:5],
        'readme_snippet': readme_text[:200].replace('\n', ' '),
        'page_snippet': page_text[:300].replace('\n', ' ')
    }
    
    pname = pkg.get('name', '-')
    print(f'Folder {fid:>2}: pkg={pname:30} | page_len={len(page_text):6d} | comps={len(comps):2d} | assets={len(assets):2d} | page_sha={page_sha[:10]}...')

print('\n=== Duplicate page sha256 check ===')
sha_map = {}
for fid, d in details.items():
    s = d['page_sha']
    if s:
        sha_map.setdefault(s, []).append(fid)
for s, fids in sha_map.items():
    if len(fids) > 1:
        print(f'Exact identical page SHA {s[:12]}: folders {fids}')

print('\n=== Standalone Archives ===')
for a in ['bounties-site.tar.gz', 'editorial-neon-yellow-v1.1.zip', 'editorial-red-portfolio-v1.1.zip', 'neo-brutal-saas-template(1).zip']:
    ap = os.path.join(src_dir, a)
    if os.path.exists(ap):
        size = os.path.getsize(ap)
        asha = sha256_file(ap)
        print(f'Archive: {a:35} | size: {size:8d} | sha256: {asha}')

with open(r'docs/template-import/inventory_raw.json', 'w', encoding='utf-8') as f:
    json.dump(details, f, indent=2)
print('\nWrote docs/template-import/inventory_raw.json successfully')
