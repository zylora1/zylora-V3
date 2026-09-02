import pytest, json, re, hashlib
from pathlib import Path
from app.templates import TEMPLATES, BY_SLUG, render_template

ROOT = Path(".").resolve()

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

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def test_all_41_imported_templates_present_in_catalogue():
    catalogue_slugs = {t["slug"] for t in TEMPLATES}
    for slug in IMPORTED_SLUGS:
        assert slug in catalogue_slugs, f"Template {slug} missing from catalogue"
        assert slug in BY_SLUG, f"Template {slug} missing from BY_SLUG registry"

@pytest.mark.parametrize("slug", IMPORTED_SLUGS)
def test_imported_template_structure_and_hashes(slug):
    tpl_dir = ROOT / "template_projects" / slug
    assert tpl_dir.is_dir(), f"Directory missing for {slug}"
    
    meta_p = tpl_dir / "metadata.json"
    gate_p = tpl_dir / "verification" / "render-gate.json"
    manifest_p = tpl_dir / "assets-manifest.json"
    home_p = tpl_dir / "render" / "home.html"
    css_p = tpl_dir / "app" / "globals.css"
    preview_p = ROOT / "static" / "template-previews" / f"{slug}.png"
    
    assert meta_p.is_file(), f"metadata.json missing for {slug}"
    assert gate_p.is_file(), f"render-gate.json missing for {slug}"
    assert manifest_p.is_file(), f"assets-manifest.json missing for {slug}"
    assert home_p.is_file(), f"home.html missing for {slug}"
    assert css_p.is_file(), f"globals.css missing for {slug}"
    assert preview_p.is_file() and preview_p.stat().st_size > 1000, f"Preview image missing/invalid for {slug}"
    
    meta = json.loads(meta_p.read_text(encoding="utf-8"))
    gate = json.loads(gate_p.read_text(encoding="utf-8"))
    manifest = json.loads(manifest_p.read_text(encoding="utf-8"))
    
    assert meta.get("rights", {}).get("mode") == "user_supplied_licensed_archive"
    assert meta.get("rights", {}).get("user_attested_commercial_builder_rights") is True
    assert meta.get("publication", {}).get("state") == "public"
    assert meta.get("publication", {}).get("render_gate") == "passed"
    
    assert gate.get("status") == "passed"
    assert gate.get("render_home_sha256") == sha256_file(str(home_p))
    assert gate.get("css_sha256") == sha256_file(str(css_p))
    assert manifest.get("all_bundled_assets_local") is True
    assert manifest.get("commercial_reuse_verified") is True

@pytest.mark.parametrize("slug", IMPORTED_SLUGS)
def test_imported_template_rendering_and_clean_contract(slug):
    custom_content = {
        "business_name": "Acme Global Dynamics",
        "tagline": "Next Generation Operational Excellence",
        "description": "Pioneering industry leadership with verified quality and performance.",
        "accent": "#10b981"
    }
    rendered = render_template(slug, custom_content)
    assert len(rendered) > 500, f"Render output too short for {slug}"
    assert "Acme Global Dynamics" in rendered or "acme" in rendered.lower()
    
    # Check no forbidden auth patterns
    forbidden_auth = [
        r'>\s*Log\s*in\s*<', r'>\s*Sign\s*in\s*<', r'>\s*Sign\s*up\s*<',
        r'>\s*Create\s*Account\s*<', r'>\s*Member\s*Login\s*<'
    ]
    for p in forbidden_auth:
        assert not re.search(p, rendered, re.I), f"Forbidden auth UI found in {slug} matching {p}"
        
    # Check no marketplace links
    forbidden_mkt = [r'themeforest\.net', r'envato\.com', r'templatemonster\.com', r'bootstrapmade\.com']
    for p in forbidden_mkt:
        assert not re.search(p, rendered, re.I), f"Forbidden marketplace link found in {slug} matching {p}"
