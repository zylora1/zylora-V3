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

slug = "lavender-coach"
css_path = ROOT / "template_projects" / slug / "app" / "globals.css"
css = css_path.read_text(encoding="utf-8")

# Fix lavender-coach overflow
fix_css = """
/* Lavender Coach Overflow Fixes */
html, body { overflow-x: hidden !important; }
body { min-width: 0 !important; }
.hero, .final, .magic, .section, main { overflow: hidden !important; max-width: 100% !important; }
.shell { max-width: calc(100% - 24px) !important; }
@media (max-width: 900px) {
  .magic .every, .magic .where { margin-left: 0 !important; }
  .magic-content { grid-template-columns: 1fr !important; gap: 24px !important; }
  .integration-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .edge-stamp { display: none !important; }
  .magic h2 { font-size: clamp(32px, 8vw, 50px) !important; }
  .coach-grid { grid-template-columns: 1fr !important; }
  .feed-copy { position: relative !important; left: 0 !important; top: 0 !important; width: 100% !important; padding: 15px !important; }
  .chart { position: relative !important; right: 0 !important; top: 0 !important; width: 100% !important; margin-top: 10px !important; }
  .anywhere { height: auto !important; grid-template-columns: 1fr !important; padding: 20px !important; }
  .anywhere-ui { min-height: 120px !important; }
  .giant-copy { font-size: 40px !important; width: auto !important; }
  .signup { width: 100% !important; max-width: 320px !important; }
  .footer { position: relative !important; left: 0 !important; transform: none !important; bottom: 0 !important; grid-template-columns: 1fr !important; gap: 10px !important; text-align: center !important; }
}
"""

new_css = css + "\n" + fix_css
css_path.write_text(new_css, encoding="utf-8")

# Update gate
tpl_dir = ROOT / "template_projects" / slug
gate_path = tpl_dir / "verification" / "render-gate.json"
gate = json.loads(gate_path.read_text(encoding="utf-8"))
gate["css_sha256"] = sha256_file(str(css_path))
gate_path.write_text(json.dumps(gate, indent=2), encoding="utf-8")

# Reload catalogue
app.templates.TEMPLATES = app.templates._load_catalogue()
app.templates.BY_SLUG = {app.templates.AI_RUNTIME_SLUG: app.templates.AI_RUNTIME_META, app.templates.IMPORTED_RUNTIME_SLUG: app.templates.IMPORTED_RUNTIME_META, **{str(t['slug']):t for t in app.templates.TEMPLATES}}

rendered = app.templates.render_template(slug, {})
standalone = inline_assets_for_qa(rendered, slug)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_content(standalone)
    page.wait_for_load_state("networkidle")
    
    # Capture screenshot
    preview_path = ROOT / "static" / "template-previews" / f"{slug}.png"
    page.set_viewport_size({"width": 1440, "height": 900})
    page.screenshot(path=str(preview_path))
    
    print(f"Testing {slug} responsive breakpoints:", flush=True)
    all_pass = True
    for w in [1440, 1280, 1024, 768, 430, 390, 375, 360]:
        page.set_viewport_size({"width": w, "height": 900})
        page.wait_for_timeout(20)
        sw = page.evaluate("document.documentElement.scrollWidth")
        cw = page.evaluate("document.documentElement.clientWidth")
        passed = sw <= cw
        if not passed: all_pass = False
        print(f"  Width {w:>4}px: scroll={sw}, client={cw} => {'PASS' if passed else 'FAIL'}", flush=True)
        
    browser.close()
    print(f"\nFinal result for {slug}: {'PASS' if all_pass else 'FAIL'}", flush=True)
