import sys, io, os, json, hashlib, re
from pathlib import Path

ROOT = Path(".").resolve()
sys.path.insert(0, str(ROOT))
import app.templates

def check_all_templates():
    tpls = app.templates._load_catalogue()
    print(f"Total verified templates in catalogue: {len(tpls)}")
    slugs = [t["slug"] for t in tpls]
    
    # Check 41 imported slugs
    imported_slugs = [
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
    
    missing = [s for s in imported_slugs if s not in slugs]
    present = [s for s in imported_slugs if s in slugs]
    print(f"Imported templates verified & loaded: {len(present)}/41")
    if missing:
        print(f"Missing templates ({len(missing)}): {missing}")

if __name__ == "__main__":
    check_all_templates()
