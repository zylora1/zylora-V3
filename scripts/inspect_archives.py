import sys, io, os, json, re, zipfile, tarfile
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

src_dir = r'C:\Users\joys0\OneDrive\Desktop\temp-1'

print('=== 4 ARCHIVES DEEP DIVE ===')
for a in ['bounties-site.tar.gz', 'editorial-neon-yellow-v1.1.zip', 'editorial-red-portfolio-v1.1.zip', 'neo-brutal-saas-template(1).zip']:
    ap = os.path.join(src_dir, a)
    print(f'\n--- Archive: {a} ---')
    if a.endswith('.zip'):
        with zipfile.ZipFile(ap, 'r') as z:
            for info in z.infolist()[:15]:
                print(f'  {info.filename} ({info.file_size} bytes)')
            for name in z.namelist():
                if name.endswith(('README.md', 'Template.tsx', 'package.json')):
                    content = z.read(name).decode('utf-8', errors='ignore')
                    snippet = content[:200].replace('\n', ' ')
                    print(f'  >> {name}: {snippet}')
    elif a.endswith('.tar.gz'):
        with tarfile.open(ap, 'r:gz') as t:
            for m in t.getmembers()[:15]:
                print(f'  {m.name} ({m.size} bytes)')
            for m in t.getmembers():
                if m.name.endswith(('package.json', 'index.html', 'README.md')) and m.size < 50000:
                    f = t.extractfile(m)
                    if f:
                        content = f.read().decode('utf-8', errors='ignore')
                        snippet = content[:200].replace('\n', ' ')
                        print(f'  >> {m.name}: {snippet}')
