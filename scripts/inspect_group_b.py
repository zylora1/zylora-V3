import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"

for i in range(31, 42):
    fid = str(i)
    if fid == "35": continue # subset of 36
    fpath = os.path.join(src_dir, fid)
    
    # Check components
    comp_dir = os.path.join(fpath, "components")
    comps = os.listdir(comp_dir) if os.path.exists(comp_dir) else []
    
    # Check CSS
    css_file = os.path.join(fpath, "app", "globals.css")
    css_len = len(open(css_file, encoding="utf-8", errors="ignore").read()) if os.path.exists(css_file) else 0
    
    # Check page
    page_file = os.path.join(fpath, "app", "page.tsx")
    page_len = len(open(page_file, encoding="utf-8", errors="ignore").read()) if os.path.exists(page_file) else 0
    
    print(f"Folder {fid:>2}: page={page_len:5d} B | css={css_len:6d} B | comps={len(comps):2d} ({comps[:4]})")
