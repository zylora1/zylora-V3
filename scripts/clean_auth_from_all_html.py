import sys, io, os, json, hashlib, re
from pathlib import Path

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

IMPORTED_SLUGS = [
    "forma-studio", "mariana-design", "square-card", "bounties-work", "incention-story",
    "experience-studio", "versatile-flow", "solaria-energy", "craft-minimal", "luma-portfolio",
    "uniqum-services", "lauritz-magazine", "creacy-portfolio", "commerce-ventures", "hofin-real-estate",
    "lavender-coach", "cono-photography", "isomeet-marketplace", "rendr-fintech", "iso-studio",
    "green-infrastructure", "metta-community", "hollhii-agency", "atacama-action", "apex-digital",
    "moss-retreat", "zita-portfolio", "gentle-systems", "trofo-roofing", "belonging-collective",
    "smile-studio", "nature-initiatives", "radiante-salon", "coretex-studio", "godesign-studio",
    "luxe-salon", "mountain-saas", "master-handyman", "editorial-neon-yellow", "editorial-red-portfolio",
    "neo-brutal-saas"
]

for slug in IMPORTED_SLUGS:
    tpl_dir = ROOT / "template_projects" / slug
    home_p = tpl_dir / "render" / "home.html"
    if not home_p.exists(): continue
    
    html = home_p.read_text(encoding="utf-8")
    orig_html = html
    
    # 1. Remove standalone Sign In / Log in buttons/links
    auth_links = [
        r'<a\b[^>]*>\s*(?:Sign\s*in|Log\s*in|Login|Sign\s*In|Log\s*In|Member\s*Login|Client\s*Portal|Admin)\s*</a>',
        r'<button\b[^>]*>\s*(?:Sign\s*in|Log\s*in|Login|Sign\s*In|Log\s*In|Member\s*Login|Client\s*Portal|Admin)\s*</button>',
    ]
    for p in auth_links:
        html = re.sub(p, '', html, flags=re.IGNORECASE)
        
    # 2. For Sign Up / Register in newsletter / CTA buttons: replace with Get Started or Subscribe
    html = re.sub(r'>\s*Sign\s*up\s*<', '>Subscribe<', html, flags=re.IGNORECASE)
    html = re.sub(r'>\s*Sign\s*in\s*<', '>Get Started<', html, flags=re.IGNORECASE)
    html = re.sub(r'>\s*Log\s*in\s*<', '>Get Started<', html, flags=re.IGNORECASE)
    html = re.sub(r'>\s*Register\s*<', '>Get Started<', html, flags=re.IGNORECASE)
    html = re.sub(r'>\s*Create\s*Account\s*<', '>Get Started<', html, flags=re.IGNORECASE)
    
    if html != orig_html:
        home_p.write_text(html, encoding="utf-8")
        home_sha = sha256_file(str(home_p))
        gate_p = tpl_dir / "verification" / "render-gate.json"
        gate = json.loads(gate_p.read_text(encoding="utf-8"))
        gate["render_home_sha256"] = home_sha
        gate["page_sha256"]["home"] = home_sha
        gate_p.write_text(json.dumps(gate, indent=2), encoding="utf-8")
        print(f"Cleaned auth text in: {slug}")

print("Completed cleaning auth UI.")
