import os
for s in ["scripts/replace_catalogue_with_licensed_archives.py", "scripts/licensed_template_static_renderer.js", "scripts/licensed_template_tailwind_compiler.js"]:
    if os.path.exists(s):
        print(f"=== {s} ===")
        print(open(s, encoding="utf-8", errors="ignore").read()[:800])
        print("\n" + "="*40 + "\n")
