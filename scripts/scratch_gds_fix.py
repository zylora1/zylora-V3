import sys, io, os, json, hashlib, re, shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))
import app.templates
from scripts.master_import_all_41 import inline_assets_for_qa

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

# Read astrolus tailwind base
tw_base = (ROOT / "template_projects" / "astrolus" / "app" / "globals.css").read_text(encoding="utf-8")

# Let's fix godesign-studio
gds_css_path = ROOT / "template_projects" / "godesign-studio" / "app" / "globals.css"
gds_css = gds_css_path.read_text(encoding="utf-8")
new_gds_css = tw_base + "\n\n/* Custom Template Styles */\n" + gds_css + "\n\n/* Overflow Prevention */\nmain, .w-full, div, section { max-width: 100%; }\n"
gds_css_path.write_text(new_gds_css, encoding="utf-8")

# Update gate & manifest for godesign-studio
tpl_dir = ROOT / "template_projects" / "godesign-studio"
gate_path = tpl_dir / "verification" / "render-gate.json"
gate = json.loads(gate_path.read_text(encoding="utf-8"))
gate["css_sha256"] = sha256_file(str(gds_css_path))
gate_path.write_text(json.dumps(gate, indent=2), encoding="utf-8")

# Reload catalogue
app.templates.TEMPLATES = app.templates._load_catalogue()
app.templates.BY_SLUG = {app.templates.AI_RUNTIME_SLUG: app.templates.AI_RUNTIME_META, app.templates.IMPORTED_RUNTIME_SLUG: app.templates.IMPORTED_RUNTIME_META, **{str(t['slug']):t for t in app.templates.TEMPLATES}}

# Test godesign-studio with Playwright
rendered = app.templates.render_template("godesign-studio", {})
standalone = inline_assets_for_qa(rendered, "godesign-studio")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_content(standalone)
    page.wait_for_load_state("networkidle")
    
    print("Testing godesign-studio after Tailwind utility injection:")
    for w in [1440, 1280, 1024, 768, 430, 390, 375, 360]:
        page.set_viewport_size({"width": w, "height": 900})
        page.wait_for_timeout(20)
        sw = page.evaluate("document.documentElement.scrollWidth")
        cw = page.evaluate("document.documentElement.clientWidth")
        print(f"  Width {w}px: scroll={sw}, client={cw} => {'PASS' if sw <= cw else 'FAIL'}")
    browser.close()
