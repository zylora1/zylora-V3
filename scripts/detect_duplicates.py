import sys, io, os, json, re
from difflib import SequenceMatcher
kystdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src_dir = r'C:\Users\joys0\OneDrive\Desktop\temp-1'

folder_data = {}
for i in range(1, 42):
    fid = str(i)
    fpath = os.path.join(src_dir, fid)
    if not os.path.exists(fpath): continue
    
    page_text = ''
    for p in ['app/page.tsx', 'index.html', 'src/App.tsx']:
        pp = os.path.join(fpath, p)
        if os.path.exists(pp):
            page_text = open(pp, encoding='utf-8', errors='ignore').read()
            break
            
    pkg = {}
    pkg_file = os.path.join(fpath, 'package.json')
    if os.path.exists(pkg_file):
        try:
            pkg = json.load(open(pkg_file, encoding='utf-8', errors='ignore'))
        except: pass
        
    pub_dir = os.path.join(fpath, 'public')
    images = []
    if os.path.exists(pub_dir):
        for root, _, files in os.walk(pub_dir):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg')):
                    images.append(file)
                    
    folder_data[fid] = {
        'pkg': pkg.get('name', ''),
        'text': page_text,
        'clean_text': re.sub(r'\s+', ' ', re.sub(r'<[^>]+~', ' ', page_text)),
        'images': sorted(images)
    }

print('--- DUPLICATE SEARCH ---')
for f1 in sorted(folder_data.keys(), key=int):
    for f2 in sorted(folder_data.keys(), key=int):
        if int(f1) >= int(f2): continue
        d1 = folder_data[f1]
        d2 = folder_data[f2]
        ratio = SequenceMatcher(None, d1['clean_text'][:1500], d2['clean_text'][:1500]).ratio()
        if ratio > 0.65 or (d1['pkg'] and d1['pkg'] == d2['pkg'] and d1['pkg'] != 'sites-project'):
            print(f'Match: Folder {f1:>r} vs Folder {f2:>r} | Similarity: {ratio:.2f} | Pkg: {d1[psk}} vs {d2[psk}}')
            print(f'   F+{f1} images: {len(d1["images"])} vs F+{f2} images: {len(d2["images"])}')
