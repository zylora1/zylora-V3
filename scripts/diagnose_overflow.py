import sys, io, os, json, re
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))

import app.templates
from scripts.master_import_all_41 import inline_assets_for_qa

def diagnose_overflow(slug):
    print(f"\n==========================================")
    print(f"DIAGNOSING OVERFLOW FOR: {slug}")
    print(f"==========================================")
    
    rendered = app.templates.render_template(slug, {})
    standalone = inline_assets_for_qa(rendered, slug)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_content(standalone)
        page.wait_for_load_state("networkidle")
        
        for w in [1440, 1024, 768, 430, 390, 375, 360]:
            page.set_viewport_size({"width": w, "height": 900})
            page.wait_for_timeout(50)
            sw = page.evaluate("document.documentElement.scrollWidth")
            cw = page.evaluate("document.documentElement.clientWidth")
            if sw > cw:
                # Find which element is overflowing!
                offenders = page.evaluate("""() => {
                    const docW = document.documentElement.clientWidth;
                    const bad = [];
                    const all = document.querySelectorAll('*');
                    for (const el of all) {
                        const rect = el.getBoundingClientRect();
                        if (rect.right > docW + 1 || rect.left < -1) {
                            bad.push({
                                tag: el.tagName,
                                id: el.id,
                                className: el.className,
                                width: rect.width,
                                right: rect.right,
                                left: rect.left,
                                text: (el.innerText || '').slice(0, 30)
                            });
                        }
                    }
                    return bad.slice(0, 8);
                }""")
                print(f"  Width {w}px: scrollWidth={sw}, clientWidth={cw}, Offenders:")
                for o in offenders:
                    print(f"    <{o['tag']} id='{o['id']}' class='{o['className']}'> width={o['width']:.1f}, right={o['right']:.1f} ({o['text']})")
        browser.close()

for s in ["lavender-coach", "godesign-studio", "neo-brutal-saas"]:
    diagnose_overflow(s)
