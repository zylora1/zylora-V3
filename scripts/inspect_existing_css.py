from pathlib import Path
for s in ["astrolus", "astroship", "nexora", "saas-candy"]:
    p = Path("template_projects") / s / "app" / "globals.css"
    if p.exists():
        print(f"=== {s} globals.css ({len(p.read_text(encoding='utf-8'))} bytes) ===")
        print(p.read_text(encoding='utf-8')[:400])
        print("\n" + "="*40 + "\n")
