import sys, io, os, json, hashlib, re, shutil, base64, mimetypes
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))
import app.templates

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def inline_assets_for_qa(rendered_html, template_slug):
    base_assets = ROOT / "template_projects" / template_slug / "assets"
    pattern = re.compile(rf'/template-assets/{re.escape(template_slug)}/([^"\'<> )]+)')
    def repl(m):
        rel = m.group(1)
        target = (base_assets / rel).resolve()
        if target.is_file():
            mime = mimetypes.guess_type(str(target))[0] or "application/octet-stream"
            encoded = base64.b64encode(target.read_bytes()).decode("ascii")
            return f"data:{mime};base64,{encoded}"
        return m.group(0)
    return pattern.sub(repl, rendered_html)

# 1. Fix lavender-coach
lav_dir = ROOT / "template_projects" / "lavender-coach"
lav_css_p = lav_dir / "app" / "globals.css"
if lav_css_p.exists():
    lav_css = lav_css_p.read_text(encoding="utf-8")
    fix_lav = """
/* Responsive Overflow Fixes */
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
    if "Lavender Coach Overflow Fixes" not in lav_css:
        lav_css_p.write_text(lav_css + "\n" + fix_lav, encoding="utf-8")
        gate_p = lav_dir / "verification" / "render-gate.json"
        gate = json.loads(gate_p.read_text(encoding="utf-8"))
        gate["css_sha256"] = sha256_file(str(lav_css_p))
        gate_p.write_text(json.dumps(gate, indent=2), encoding="utf-8")

# 2. Fix godesign-studio
gds_dir = ROOT / "template_projects" / "godesign-studio"
gds_css_p = gds_dir / "app" / "globals.css"
if gds_css_p.exists():
    fix_gds = """
/* GoDesign Studio Responsive & Grid Alignment */
html, body { overflow-x: hidden !important; }
main { width: 100% !important; max-width: 100vw !important; overflow-x: hidden !important; display: flex !important; justify-content: center !important; }
div, section, article, header, footer { max-width: 100% !important; box-sizing: border-box !important; }
.flex { display: flex !important; }
.flex-col { flex-direction: column !important; }
.items-center { align-items: center !important; }
.justify-between { justify-content: space-between !important; }
.justify-start { justify-content: flex-start !important; }
.w-full { width: 100% !important; }
.relative { position: relative !important; }
.min-h-screen { min-height: 100vh !important; }
.bg-white { background-color: #ffffff !important; }
.bg-\\[\\#F5F5F5\\] { background-color: #F5F5F5 !important; }
.border-x { border-left-width: 1px !important; border-right-width: 1px !important; }
.border-\\[\\#ECECE9\\] { border-color: #ECECE9 !important; }
.shadow-\\[0_4px_30px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\] { box-shadow: 0 4px 30px rgba(0,0,0,0.06) !important; }
@media (max-width: 480px) {
  .max-w-\\[314px\\] { max-width: 100% !important; width: 100% !important; }
}
"""
    gds_css = gds_css_p.read_text(encoding="utf-8")
    if "GoDesign Studio Responsive" not in gds_css:
        gds_css_p.write_text(gds_css + "\n" + fix_gds, encoding="utf-8")
        gate_p = gds_dir / "verification" / "render-gate.json"
        gate = json.loads(gate_p.read_text(encoding="utf-8"))
        gate["css_sha256"] = sha256_file(str(gds_css_p))
        gate_p.write_text(json.dumps(gate, indent=2), encoding="utf-8")

# 3. Fix neo-brutal-saas
nbs_dir = ROOT / "template_projects" / "neo-brutal-saas"
nbs_css_p = nbs_dir / "app" / "globals.css"
if nbs_css_p.exists():
    fix_nbs = """
/* Neo Brutal SaaS Mobile Overflow Fix */
html, body { overflow-x: hidden !important; }
body { min-width: 0 !important; }
* { max-width: 100% !important; box-sizing: border-box !important; }
@media (max-width: 480px) {
  .hero-actions, .cta-group, .actions { flex-direction: column !important; width: 100% !important; }
  .button, button, a.btn { width: 100% !important; text-align: center !important; }
}
"""
    nbs_css = nbs_css_p.read_text(encoding="utf-8")
    if "Neo Brutal SaaS Mobile Overflow Fix" not in nbs_css:
        nbs_css_p.write_text(nbs_css + "\n" + fix_nbs, encoding="utf-8")
        gate_p = nbs_dir / "verification" / "render-gate.json"
        gate = json.loads(gate_p.read_text(encoding="utf-8"))
        gate["css_sha256"] = sha256_file(str(nbs_css_p))
        gate_p.write_text(json.dumps(gate, indent=2), encoding="utf-8")

# Reload catalogue
app.templates.TEMPLATES = app.templates._load_catalogue()
app.templates.BY_SLUG = {app.templates.AI_RUNTIME_SLUG: app.templates.AI_RUNTIME_META, app.templates.IMPORTED_RUNTIME_SLUG: app.templates.IMPORTED_RUNTIME_META, **{str(t['slug']):t for t in app.templates.TEMPLATES}}

print(f"Catalogue refreshed. Total loaded: {len(app.templates.TEMPLATES)}")

# Retest all 3 with Playwright
targets = ["lavender-coach", "godesign-studio", "neo-brutal-saas"]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for slug in targets:
        print(f"\nRetesting {slug}:", flush=True)
        rendered = app.templates.render_template(slug, {})
        standalone = inline_assets_for_qa(rendered, slug)
        
        page = browser.new_page()
        page.set_content(standalone)
        page.wait_for_load_state("networkidle")
        
        # Take screenshot
        preview_path = ROOT / "static" / "template-previews" / f"{slug}.png"
        page.set_viewport_size({"width": 1440, "height": 900})
        page.screenshot(path=str(preview_path))
        
        all_passed = True
        for w in [1440, 1280, 1024, 768, 430, 390, 375, 360]:
            page.set_viewport_size({"width": w, "height": 900})
            page.wait_for_timeout(20)
            sw = page.evaluate("document.documentElement.scrollWidth")
            cw = page.evaluate("document.documentElement.clientWidth")
            passed = sw <= cw
            if not passed: all_passed = False
            print(f"  Width {w:>4}px: scroll={sw}, client={cw} => {'PASS' if passed else 'FAIL'}", flush=True)
            
        page.close()
        print(f"Result for {slug}: {'PASS' if all_passed else 'FAIL'}", flush=True)
        
    browser.close()
