import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src_dir = r'C:\Users\joys0\OneDrive\Desktop\temp-1'

for i in range(1, 42):
    fid = str(i)
    fpath = os.path.join(src_dir, fid)
    if not os.path.exists(fpath): continue
    
    # Read README, REFERENCE_SPEC, package.json
    spec = ''
    for s in ['REFERENCE_SPEC.md', 'README.md', 'inspection/SPEC.md']:
        sp = os.path.join(fpath, s)
        if os.path.exists(sp):
            spec = open(sp, encoding='utf-8', errors='ignore').read()[:300].replace('\n', ' ')
            break
            
    # Read page title / h1 / brand
    page_text = ''
    for p in ['app/page.tsx', 'index.html', 'src/App.tsx']:
        pp = os.path.join(fpath, p)
        if os.path.exists(pp):
            page_text = open(pp, encoding='utf-8', errors='ignore').read()
            break
            
    h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', page_text, re.DOTALL | re.I)
    h1_clean = ' / '.join([re.sub(r'<[^>]+>', '', x).strip() for x in h1])[:80]
    
    # Check components
    comp_dir = os.path.join(fpath, 'components')
    comps = os.listdir(comp_dir) if os.path.exists(comp_dir) else []
    
    # Check public
    pub_dir = os.path.join(fpath, 'public')
    images = []
    if os.path.exists(pub_dir):
        for root, _, files in os.walk(pub_dir):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg')):
                    images.append(file)
                    
    print(f'=== FOLDER {fid:>2} ===')
    print(f'  H1 / Title: {h1_clean}')
    print(f'  Spec / Readme: {spec[:120]}')
    print(f'  Components ({len(comps)}): {comps[:6]}')
    print(f'  Images ({len(images)}): {images[:6]}')
