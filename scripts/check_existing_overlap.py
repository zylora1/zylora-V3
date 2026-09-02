import sys, io, os, json, re
from difflib import SequenceMatcher
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"
repo_tpl_dir = r"c:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4\template_projects"

existing_tpls = {}
for slug in os.listdir(repo_tpl_dir):
    home_path = os.path.join(repo_tpl_dir, slug, "render", "home.html")
    if os.path.exists(home_path):
        html = open(home_path, encoding="utf-8", errors="ignore").read()
        clean = " ".join(re.sub(r"<[^>]+>", " ", html).split())
        existing_tpls[slug] = {"clean": clean, "raw": html}

print(f"Existing Zylora Templates loaded: {len(existing_tpls)}")

# Compare each folder against existing templates
for i in range(1, 42):
    fid = str(i)
    fpath = os.path.join(src_dir, fid)
    if not os.path.exists(fpath): continue
    
    page_text = ""
    for p in ["app/page.tsx", "index.html", "src/App.tsx"]:
        pp = os.path.join(fpath, p)
        if os.path.exists(pp):
            page_text = open(pp, encoding="utf-8", errors="ignore").read()
            break
            
    clean_src = " ".join(re.sub(r"<[^>]+>", " ", page_text).split())
    
    for slug, data in existing_tpls.items():
        sim = SequenceMatcher(None, clean_src[:1000], data["clean"][:1000]).ratio()
        if sim > 0.6:
            print(f"OVERLAP DETECTED: Folder {fid:>2} matches existing template '{slug}' (sim: {sim:.2f})")
