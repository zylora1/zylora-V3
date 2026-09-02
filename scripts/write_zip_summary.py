import sys, io, os, json, hashlib, zipfile, tarfile
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src_dir = r"C:\Users\joys0\OneDrive\Desktop\temp-1"
repo_dir = r"c:\Zylora-Ithanda finalu\Zylora-Production-Ready-SuperAdmin-Audited-2026-08-31-v4"

def sha256_file(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

archives_data = [
    {
        "zip_filename": "editorial-neon-yellow-v1.1.zip",
        "full_path": os.path.join(src_dir, "editorial-neon-yellow-v1.1.zip"),
        "size": os.path.getsize(os.path.join(src_dir, "editorial-neon-yellow-v1.1.zip")),
        "hash": sha256_file(os.path.join(src_dir, "editorial-neon-yellow-v1.1.zip")),
        "nested_zips": "None",
        "candidates": 1,
        "technology": "React 19 / Next.js / CSS Modules",
        "entry_point": "templates/editorial-neon-yellow/Template.tsx",
        "package_json": False,
        "build_tooling": "Next.js / Vite-compatible",
        "css_framework": "Custom CSS Modules (`styles.module.css`)",
        "js_framework": "React 19 / TypeScript",
        "image_assets": "12 WebP photography assets (hero-man, about-woman, project-city, etc.)",
        "font_assets": "System / Web fonts (Inter / Space Grotesk)",
        "existing_preview": "None",
        "license_readme": "`templates/editorial-neon-yellow/README.md` present",
        "duplicate_candidate": "No (Unique)",
        "importable": "Yes (High quality)",
        "problems_detected": "Needs normalization into Zylora `render/home.html` + `app/globals.css`, link audit",
        "planned_action": "Import into `template_projects/editorial-neon-yellow`"
    },
    {
        "zip_filename": "editorial-red-portfolio-v1.1.zip",
        "full_path": os.path.join(src_dir, "editorial-red-portfolio-v1.1.zip"),
        "size": os.path.getsize(os.path.join(src_dir, "editorial-red-portfolio-v1.1.zip")),
        "hash": sha256_file(os.path.join(src_dir, "editorial-red-portfolio-v1.1.zip")),
        "nested_zips": "None",
        "candidates": 1,
        "technology": "React 19 / Next.js / CSS Modules",
        "entry_point": "templates/editorial-red-portfolio/Template.tsx",
        "package_json": False,
        "build_tooling": "Next.js / Vite-compatible",
        "css_framework": "Custom CSS Modules (`styles.module.css`)",
        "js_framework": "React 19 / TypeScript",
        "image_assets": "13 WebP photography assets (hero-woman, about-city, work-abstract, etc.)",
        "font_assets": "System / Web fonts (Inter / Space Grotesk)",
        "existing_preview": "None",
        "license_readme": "`templates/editorial-red-portfolio/README.md` present",
        "duplicate_candidate": "No (Unique)",
        "importable": "Yes (High quality)",
        "problems_detected": "Needs normalization into Zylora `render/home.html` + `app/globals.css`, link audit",
        "planned_action": "Import into `template_projects/editorial-red-portfolio`"
    },
    {
        "zip_filename": "neo-brutal-saas-template(1).zip",
        "full_path": os.path.join(src_dir, "neo-brutal-saas-template(1).zip"),
        "size": os.path.getsize(os.path.join(src_dir, "neo-brutal-saas-template(1).zip")),
        "hash": sha256_file(os.path.join(src_dir, "neo-brutal-saas-template(1).zip")),
        "nested_zips": "None",
        "candidates": 1,
        "technology": "React 19 / Next.js / Tailwind CSS",
        "entry_point": "templates/neo-brutal-saas/Template.tsx",
        "package_json": False,
        "build_tooling": "Next.js / Tailwind",
        "css_framework": "Tailwind CSS + CSS Modules",
        "js_framework": "React 19 / TypeScript",
        "image_assets": "5 WebP assets (hero, work-01, work-02, work-03, etc.)",
        "font_assets": "Web fonts",
        "existing_preview": "None",
        "license_readme": "`templates/neo-brutal-saas/README.md` present",
        "duplicate_candidate": "No (Unique)",
        "importable": "Yes (High quality)",
        "problems_detected": "Login/Signup CTA buttons in nav/hero must be removed and layout rebalanced",
        "planned_action": "Import into `template_projects/neo-brutal-saas`"
    },
    {
        "zip_filename": "bounties-site.tar.gz",
        "full_path": os.path.join(src_dir, "bounties-site.tar.gz"),
        "size": os.path.getsize(os.path.join(src_dir, "bounties-site.tar.gz")),
        "hash": sha256_file(os.path.join(src_dir, "bounties-site.tar.gz")),
        "nested_zips": "None",
        "candidates": 1,
        "technology": "Compiled Next.js/Vinext Production Dist",
        "entry_point": "dist/server/index.js",
        "package_json": False,
        "build_tooling": "Vinext / Vite SSR",
        "css_framework": "Compiled CSS (`dist/client/_next/static/css/index.B5U6sAfI.css`)",
        "js_framework": "React / Client chunks",
        "image_assets": "3 assets (favicon.svg, noise.svg, og.png)",
        "font_assets": "Web fonts",
        "existing_preview": "`bounties-social-preview-1200x630.png`",
        "license_readme": "None (compiled dist)",
        "duplicate_candidate": "Yes (Pre-compiled build artifact of Folder 4)",
        "importable": "No (Use uncompiled source Folder 4 instead)",
        "problems_detected": "Pre-compiled dist artifact; source folder 4 contains the editable source code",
        "planned_action": "Skip archive; import editable source from `temp-1/4`"
    }
]

# Build source-zip-summary.md
lines = [
    "# Zylora Source Archive (ZIP / TAR) Analysis",
    "",
    f"**Source Directory:** `{src_dir}`  ",
    f"**Analysis Date:** 2026-09-02  ",
    "",
    "## Archive-by-Archive Inventory",
    ""
]

for a in archives_data:
    lines.append(f"### `{a['zip_filename']}`")
    lines.append("")
    lines.append(f"| Field | Value |")
    lines.append(f"|:---|:---|")
    lines.append(f"| **ZIP Filename** | `{a['zip_filename']}` |")
    lines.append(f"| **Full Source Path** | `{a['full_path']}` |")
    lines.append(f"| **File Size** | {a['size']} bytes ({a['size']/1024/1024:.2f} MB) |")
    lines.append(f"| **SHA-256 Hash** | `{a['hash']}` |")
    lines.append(f"| **Nested ZIPs** | {a['nested_zips']} |")
    lines.append(f"| **Template Candidates** | {a['candidates']} |")
    lines.append(f"| **Technology / Framework** | {a['technology']} |")
    lines.append(f"| **Primary Entry Point** | `{a['entry_point']}` |")
    lines.append(f"| **package.json Present** | {a['package_json']} |")
    lines.append(f"| **Build Tooling** | {a['build_tooling']} |")
    lines.append(f"| **CSS Framework** | {a['css_framework']} |")
    lines.append(f"| **JS Framework** | {a['js_framework']} |")
    lines.append(f"| **Image Assets** | {a['image_assets']} |")
    lines.append(f"| **Font Assets** | {a['font_assets']} |")
    lines.append(f"| **Existing Previews** | {a['existing_preview']} |")
    lines.append(f"| **License / Readme** | {a['license_readme']} |")
    lines.append(f"| **Duplicate Candidate** | {a['duplicate_candidate']} |")
    lines.append(f"| **Importable** | {a['importable']} |")
    lines.append(f"| **Problems Detected** | {a['problems_detected']} |")
    lines.append(f"| **Planned Zylora Action** | {a['planned_action']} |")
    lines.append("")

with open(os.path.join(repo_dir, "docs", "template-import", "source-zip-summary.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(lines))
print("Wrote source-zip-summary.md")
