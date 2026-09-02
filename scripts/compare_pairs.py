import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
src = r"C:\Users\joys0\OneDrive\Desktop\temp-1"

print("=== PAIR COMPARISONS ===")
pairs = [(3, 30), (6, 25), (18, 20), (35, 36)]
for f1, f2 in pairs:
    print(f"\n--- Comparing Folder {f1} vs Folder {f2} ---")
    p1 = os.path.join(src, str(f1))
    p2 = os.path.join(src, str(f2))
    
    t1 = open(os.path.join(p1, "app/page.tsx"), encoding="utf-8", errors="ignore").read()
    t2 = open(os.path.join(p2, "app/page.tsx"), encoding="utf-8", errors="ignore").read()
    
    h1_1 = re.findall(r'<h1[^>]*>(.*?)</h1>', t1, re.DOTALL | re.I)
    h1_2 = re.findall(r'<h1[^>]*>(.*?)</h1>', t2, re.DOTALL | re.I)
    
    c1 = os.listdir(os.path.join(p1, "components")) if os.path.exists(os.path.join(p1, "components")) else []
    c2 = os.listdir(os.path.join(p2, "components")) if os.path.exists(os.path.join(p2, "components")) else []
    
    pub1 = [f for _, _, files in os.walk(os.path.join(p1, "public")) for f in files] if os.path.exists(os.path.join(p1, "public")) else []
    pub2 = [f for _, _, files in os.walk(os.path.join(p2, "public")) for f in files] if os.path.exists(os.path.join(p2, "public")) else []
    
    print(f"F{f1}: len={len(t1)}, comps={len(c1)}, imgs={len(pub1)}, h1={h1_1[:1]}")
    print(f"F{f2}: len={len(t2)}, comps={len(c2)}, imgs={len(pub2)}, h1={h1_2[:1]}")
    
    s1 = " ".join(t1[:300].split())
    s2 = " ".join(t2[:300].split())
    print(f"F{f1} start: {s1}")
    print(f"F{f2} start: {s2}")
