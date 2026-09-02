import sys, io, os, json, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

f33_path = r"C:\Users\joys0\OneDrive\Desktop\temp-1\33\app\page.tsx"
pd_path = r"c:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4\template_projects\prime-dental\render\home.html"

print("F33 snippet:")
if os.path.exists(f33_path):
    print(open(f33_path, encoding="utf-8", errors="ignore").read()[:500])

print("\nPrime Dental snippet:")
if os.path.exists(pd_path):
    print(open(pd_path, encoding="utf-8", errors="ignore").read()[:500])
