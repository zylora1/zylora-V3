import sys, io, os, json, re, base64, mimetypes
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))
from app.templates import render_template

slug = "forma-studio"
html = render_template(slug, {})

# Replace /template-assets/forma-studio/... with data URIs or local file paths for standalone browser testing
def inline_assets(rendered_html, template_slug):
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

standalone_html = inline_assets(html, slug)

breakpoints = [1440, 1280, 1024, 768, 430, 390, 375, 360]
results = {}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    # Capture errors
    console_errors = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    
    page.set_content(standalone_html)
    page.wait_for_load_state("networkidle")
    
    # Capture preview at 1440
    page.set_viewport_size({"width": 1440, "height": 900})
    preview_dir = ROOT / "static" / "template-previews"
    preview_dir.mkdir(parents=True, exist_ok=True)
    page.screenshot(path=str(preview_dir / f"{slug}.png"))
    print(f"Captured preview: static/template-previews/{slug}.png")
    
    for w in breakpoints:
        page.set_viewport_size({"width": w, "height": 900})
        page.wait_for_timeout(100)
        
        scroll_width = page.evaluate("document.documentElement.scrollWidth")
        client_width = page.evaluate("document.documentElement.clientWidth")
        has_overflow = scroll_width > client_width
        
        results[w] = {
            "scroll_width": scroll_width,
            "client_width": client_width,
            "overflow": has_overflow,
            "passed": not has_overflow
        }
        print(f"  Width {w:>4}px: scrollWidth={scroll_width}, clientWidth={client_width}, Overflow={has_overflow} => {'PASS' if not has_overflow else 'FAIL'}")
        
    browser.close()

print(f"\nConsole errors: {console_errors}")
all_passed = all(r["passed"] for r in results.values()) and len(console_errors) == 0
print(f"Overall Result for {slug}: {'PASS' if all_passed else 'FAIL'}")
