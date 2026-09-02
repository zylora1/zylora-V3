import sys, io, os, json, re, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"

for i in range(1, 42):
    fid = str(i)
    if fid in ("25", "30", "35"): continue
    fpath = os.path.join(src_dir, fid)
    
    css_candidates = []
    for root, _, files in os.walk(fpath):
        for f in files:
            if f.endswith(".css"):
                p = os.path.join(root, f)
                rel = os.path.relpath(p, fpath)
                css_candidates.append((rel, os.path.getsize(p)))
                
    print(f"Folder {fid:>2}: CSS files found ({len(css_candidates)}): {css_candidates[:3]}")
