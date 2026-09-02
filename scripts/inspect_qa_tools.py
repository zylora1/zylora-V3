for s in ["scripts/template_browser_qa.py", "scripts/template_visual_qa.py", "scripts/platform_responsive_qa.py"]:
    print(f"=== {s} ===")
    print(open(s, encoding="utf-8", errors="ignore").read()[:600])
    print("\n" + "="*40 + "\n")
