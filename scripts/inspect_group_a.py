import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"

for i in range(2, 31):
    fid = str(i)
    if fid in ("25", "30"): continue # duplicate folders
    fpath = os.path.join(src_dir, fid)
    
    # Check CSS file
    css_file = os.path.join(fpath, "app", "globals.css")
    if not os.path.exists(css_file):
        css_file = os.path.join(fpath, "style.css")
    css_len = len(open(css_file, encoding="utf-8", errors="ignore").read()) if os.path.exists(css_file) else 0
    
    # Check page file
    page_file = os.path.join(fpath, "app", "page.tsx")
    if not os.path.exists(page_file):
        page_file = os.path.join(fpath, "index.html")
    page_len = len(open(page_file, encoding="utf-8", errors="ignore").read()) if os.path.exists(page_file) else 0
    
    print(f"Folder {fid:>2}: page={os.path.basename(page_file):12s} ({page_len:6d} B) | css={os.path.basename(css_file):12s} ({css_len:6d} B)")
