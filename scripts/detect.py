import sys, io, os, json, re
from difflib import SequenceMatcher
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
src = r"C:\Users\joys0\OneDrive\Desktop\temp-1"
data = {}
for i in range(1, 42):
    fid = str(i)
    fpath = os.path.join(src, fid)
    if not os.path.exists(fpath): continue
    pkg_name = ""
    pkg_path = os.path.join(fpath, "package.json")
    if os.path.exists(pkg_path):
        try:
            pkg_name = json.load(open(pkg_path, encoding="utf-8", errors="ignore")).get("name", "")
        except: pass
    page_text = ""
    for p in ["app/page.tsx", "index.html", "src/App.tsx"]:
        pp = os.path.join(fpath, p)
        if os.path.exists(pp):
            page_text = open(pp, encoding="utf-8", errors="ignore").read()
            break
    pub_dir = os.path.join(fpath, "public")
    imgs = []
    if os.path.exists(pub_dir):
        for root, _, files in os.walk(pub_dir):
            for f in files:
                if f.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".svg")):
                    imgs.append(f)
    clean = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", page_text))
    data[fid] = {"pkg": pkg_name, "text": page_text, "clean": clean, "imgs": sorted(imgs)}

print("=== DETECTED DUPLICATES ===")
for f1 in sorted(data.keys(), key=int):
    for f2 in sorted(data.keys(), key=int):
        if int(f1) >= int(f2): continue
        d1 = data[f1]
        d2 = data[f2]
        sim = SequenceMatcher(None, d1["clean"][:1500], d2["clean"][:1500]).ratio()
        if sim > 0.65 or (d1["pkg"] and d1["pkg"] == d2["pkg"] and d1["pkg"] != "sites-project"):
            print(f"Match: Folder {f1} vs Folder {f2} => Sim: {sim:.2f}, Pkg: {d1['pkg']} vs {d2['pkg']}")
            print(f"  F{f1} clean: {d1['clean'][:70]}")
            print(f"  F{f2} clean: {d2['clean'][:70]}")
            print(f"  F{f1} imgs: {len(d1['imgs'])} vs F{f2} imgs: {len(d2['imgs'])}")
