from __future__ import annotations

"""Zylora site rendering primitives.

The public catalogue is loaded from verified template projects under
template_projects/. The current catalogue contains user-supplied licensed source
archives adapted into Zylora's editable/publish/export runtime, while the existing
exact-source and reference-reconstruction gates remain available for future
imports. AI-created websites continue to use the hidden internal renderer below.
"""

from html import escape
import hashlib
import json
from pathlib import Path
import re
from urllib.parse import quote

from .config import ROOT

AI_RUNTIME_SLUG = "ai-runtime"
IMPORTED_RUNTIME_SLUG = "imported-runtime"

_NEUTRAL_VISUAL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23ebe9e3'/%3E%3Cpath d='M0 610L420 270l250 205 210-170 320 305v190H0z' fill='%23d8d5cd'/%3E%3Ccircle cx='900' cy='210' r='115' fill='%23f7f6f2'/%3E%3C/svg%3E"

# Public catalogue is rebuilt from verified projects under template_projects/.
# A metadata file alone must never publish a template: every candidate is fail-closed
# behind its applicable source/rights + render-verification gate.
def _safe_relative(project: Path, value: object) -> Path | None:
    rel=str(value or '').strip().replace('\\','/')
    if not rel or rel.startswith('/') or '..' in Path(rel).parts:
        return None
    target=(project/rel).resolve()
    project=project.resolve()
    return target if project in target.parents else None


def _sha256_matches(path: Path, expected: object) -> bool:
    value = str(expected or '').strip().lower()
    if not bool(re.fullmatch(r'[0-9a-f]{64}', value)):
        return False
    data = path.read_bytes()
    if hashlib.sha256(data).hexdigest() == value:
        return True
    # Git checks out LF on Linux containers (Railway) and CRLF on Windows.
    # Allow canonical newline normalization for text files so gates remain valid cross-platform.
    if path.suffix.lower() in {'.html', '.css', '.json', '.txt', '.js', '.svg'}:
        normalized = data.replace(b'\r\n', b'\n')
        if hashlib.sha256(normalized).hexdigest() == value:
            return True
        crlf = normalized.replace(b'\n', b'\r\n')
        if hashlib.sha256(crlf).hexdigest() == value:
            return True
    return False


def _load_gate(path: Path) -> dict | None:
    try:
        gate=json.loads(path.read_text(encoding='utf-8'))
    except Exception:
        return None
    return gate if isinstance(gate,dict) else None


def _exact_source_ready(project: Path, meta: dict, source: dict, verification: dict) -> bool:
    repo=str(source.get('repository') or '')
    commit=str(source.get('commit_sha') or '')
    if not re.fullmatch(r'https://github\.com/[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+/?',repo):
        return False
    if not re.fullmatch(r'[0-9a-f]{40}',commit):
        return False

    source_root=_safe_relative(project,source.get('local_path') or 'upstream')
    license_file=_safe_relative(project,source.get('license_file') or 'LICENSE.upstream')
    gate_file=_safe_relative(project,verification.get('gate_file') or 'verification/render-gate.json')
    render_home=_safe_relative(project,verification.get('render_home') or 'render/home.html')
    css_file=_safe_relative(project,verification.get('css_file') or 'app/globals.css')
    if not source_root or not source_root.is_dir():
        return False
    if not license_file or not license_file.is_file():
        return False
    if not gate_file or not gate_file.is_file() or not render_home or not render_home.is_file() or not css_file or not css_file.is_file():
        return False
    gate=_load_gate(gate_file)
    if not gate or gate.get('status')!='passed' or gate.get('commit_sha')!=commit:
        return False
    for flag in ('source_tree_local','binary_assets_local','render_smoke_passed','content_adapter_passed'):
        if gate.get(flag) is not True:
            return False
    return _sha256_matches(render_home,gate.get('render_home_sha256'))


def _reference_reconstruction_ready(project: Path, meta: dict, source: dict, verification: dict) -> bool:
    reference_url=str(source.get('reference_url') or '').strip()
    if not re.match(r'^https?://',reference_url,re.I):
        return False
    rights=meta.get('rights') if isinstance(meta.get('rights'),dict) else {}
    mode=str(rights.get('mode') or '')
    if mode not in {'third_party_reference','owned','permissively_licensed'}:
        return False
    # Third-party references are design inputs only. Their proprietary source,
    # logos and protected media must not be silently promoted into Zylora.
    if mode=='third_party_reference':
        if rights.get('proprietary_source_reused') is not False:
            return False
        if rights.get('protected_brand_assets_reused') is not False:
            return False

    gate_file=_safe_relative(project,verification.get('gate_file') or 'verification/render-gate.json')
    render_home=_safe_relative(project,verification.get('render_home') or 'render/home.html')
    css_file=_safe_relative(project,verification.get('css_file') or 'app/globals.css')
    assets_manifest=_safe_relative(project,verification.get('assets_manifest') or 'assets-manifest.json')
    if not gate_file or not gate_file.is_file() or not render_home or not render_home.is_file() or not css_file or not css_file.is_file():
        return False
    if not assets_manifest or not assets_manifest.is_file():
        return False
    try:
        asset_data=json.loads(assets_manifest.read_text(encoding='utf-8'))
    except Exception:
        return False
    if not isinstance(asset_data,dict) or asset_data.get('all_assets_local') is not True or asset_data.get('commercial_reuse_verified') is not True:
        return False
    html=render_home.read_text(encoding='utf-8',errors='ignore')
    css=css_file.read_text(encoding='utf-8',errors='ignore')
    if re.search(r'<(?:img|source|video|audio)[^>]+(?:src|srcset)=[\"\']https?://',html,re.I):
        return False
    if re.search(r'url\(\s*[\"\']?https?://',css,re.I):
        return False
    gate=_load_gate(gate_file)
    if not gate or gate.get('status')!='passed':
        return False
    for flag in (
        'rights_check_passed','independent_source_passed','asset_license_passed',
        'no_hotlinks','render_smoke_passed','responsive_passed','motion_review_passed',
        'content_adapter_passed'
    ):
        if gate.get(flag) is not True:
            return False
    try:
        visual_score=float(gate.get('visual_fidelity_score'))
    except (TypeError,ValueError):
        return False
    if visual_score < 8.5:
        return False
    return _sha256_matches(render_home,gate.get('render_home_sha256'))



def _neutral_ingestion_ready(project: Path, meta: dict, source: dict, verification: dict) -> bool:
    """Fail-closed gate for user-supplied templates independently rebuilt in Zylora.

    This mode deliberately does not retain or execute source-template code/assets.
    Public eligibility is based on the neutral reconstruction artefacts and their
    deterministic integrity records, not on the discarded source identity.
    """
    rights=meta.get('rights') if isinstance(meta.get('rights'),dict) else {}
    if str(rights.get('mode') or '')!='user_supplied_reference_reconstruction':
        return False
    if rights.get('original_source_code_reused') is not False:
        return False
    if rights.get('original_binary_assets_reused') is not False:
        return False
    if rights.get('protected_brand_assets_reused') is not False:
        return False
    if rights.get('source_identity_stripped') is not True:
        return False
    if source.get('source_identity_retained') is not False:
        return False

    gate_file=_safe_relative(project,verification.get('gate_file') or 'verification/render-gate.json')
    render_home=_safe_relative(project,verification.get('render_home') or 'render/home.html')
    css_file=_safe_relative(project,verification.get('css_file') or 'app/globals.css')
    assets_manifest=_safe_relative(project,verification.get('assets_manifest') or 'assets-manifest.json')
    if not gate_file or not gate_file.is_file() or not render_home or not render_home.is_file() or not css_file or not css_file.is_file():
        return False
    if not assets_manifest or not assets_manifest.is_file():
        return False
    try:
        asset_data=json.loads(assets_manifest.read_text(encoding='utf-8'))
    except Exception:
        return False
    if not isinstance(asset_data,dict):
        return False
    for key in ('all_assets_local','commercial_reuse_verified'):
        if asset_data.get(key) is not True:
            return False
    if asset_data.get('production_hotlinks') is not False or asset_data.get('original_source_assets_reused') is not False:
        return False
    for asset in asset_data.get('assets') or []:
        if not isinstance(asset,dict) or not asset.get('license'):
            return False
        local=_safe_relative(project,asset.get('local_path') or asset.get('path'))
        if not local or not local.is_file():
            return False
        expected=str(asset.get('sha256') or '').strip().lower()
        if expected and not _sha256_matches(local,expected):
            return False

    gate=_load_gate(gate_file)
    if not gate or gate.get('status')!='passed':
        return False
    for flag in (
        'rights_check_passed','independent_source_passed','asset_license_passed',
        'no_hotlinks','render_smoke_passed','responsive_passed','motion_review_passed',
        'content_adapter_passed','brand_identity_stripped',
        'site_document_compatible','functional_semantics_mapped'
    ):
        if gate.get(flag) is not True:
            return False
    if gate.get('source_code_reused') is not False or gate.get('source_binary_assets_reused') is not False or gate.get('source_identity_retained') is not False:
        return False
    # Complete source projects verify their detected page inventory. Missing-DOM
    # packages use a distinct fail-closed path: only the independently authored
    # reconstruction may publish, and only after its recovered functional-signal
    # inventory has been explicitly verified. This never claims the absent source
    # DOM/page graph was recovered.
    if gate.get('page_inventory_verified') is not True:
        if not (
            gate.get('source_page_document_available') is False
            and gate.get('reconstructed_from_functional_signals') is True
            and gate.get('recovered_signal_inventory_verified') is True
        ):
            return False

    render_dir=(project/'render').resolve()
    pages=sorted(render_dir.glob('*.html')) if render_dir.is_dir() else []
    expected_pages=int(meta.get('pages') or 0)
    if expected_pages<1 or len(pages)!=expected_pages or not any(p.name=='home.html' for p in pages):
        return False
    expected_slugs={'home', *[str(v) for v in (meta.get('page_slugs') or [])]}
    actual_slugs={p.stem for p in pages}
    if actual_slugs!=expected_slugs:
        return False
    page_hashes=gate.get('page_sha256') if isinstance(gate.get('page_sha256'),dict) else {}
    if set(page_hashes)!=actual_slugs:
        return False
    for page in pages:
        if not _sha256_matches(page,page_hashes.get(page.stem)):
            return False
        html=page.read_text(encoding='utf-8',errors='ignore')
        if re.search(r'<(?:img|source|video|audio)[^>]+(?:src|srcset)=["\']https?://',html,re.I):
            return False
    css=css_file.read_text(encoding='utf-8',errors='ignore')
    if re.search(r'url\(\s*["\']?https?://',css,re.I):
        return False
    return _sha256_matches(render_home,gate.get('render_home_sha256'))

def _licensed_archive_ready(project: Path, meta: dict, source: dict, verification: dict) -> bool:
    """Fail-closed publication gate for user-supplied licensed source archives.

    Unlike neutral reconstruction, this mode intentionally preserves source layout,
    styles and bundled media. Publication requires an explicit user rights attestation,
    deterministic page/CSS hashes, a local bundled-asset manifest and successful
    adaptation into Zylora's page/content runtime.
    """
    rights=meta.get('rights') if isinstance(meta.get('rights'),dict) else {}
    if str(rights.get('mode') or '')!='user_supplied_licensed_archive':
        return False
    if rights.get('user_attested_commercial_builder_rights') is not True:
        return False
    if rights.get('original_source_code_reused') is not True or rights.get('original_binary_assets_reused') is not True:
        return False
    archive_sha=str(source.get('archive_sha256') or '').strip().lower()
    if not re.fullmatch(r'[0-9a-f]{64}',archive_sha):
        return False

    gate_file=_safe_relative(project,verification.get('gate_file') or 'verification/render-gate.json')
    render_home=_safe_relative(project,verification.get('render_home') or 'render/home.html')
    css_file=_safe_relative(project,verification.get('css_file') or 'app/globals.css')
    assets_manifest=_safe_relative(project,verification.get('assets_manifest') or 'assets-manifest.json')
    if not gate_file or not gate_file.is_file() or not render_home or not render_home.is_file() or not css_file or not css_file.is_file():
        return False
    if not assets_manifest or not assets_manifest.is_file():
        return False
    try:
        asset_data=json.loads(assets_manifest.read_text(encoding='utf-8'))
    except Exception:
        return False
    if not isinstance(asset_data,dict):
        return False
    if asset_data.get('all_bundled_assets_local') is not True or asset_data.get('commercial_reuse_verified') is not True:
        return False
    if asset_data.get('license_basis')!='user_attested_commercial_builder_rights':
        return False
    if asset_data.get('source_archive_sha256')!=archive_sha or asset_data.get('external_dependencies_reviewed') is not True:
        return False

    gate=_load_gate(gate_file)
    if not gate or gate.get('status')!='passed' or gate.get('source_archive_sha256')!=archive_sha:
        return False
    for flag in (
        'rights_check_passed','user_license_attestation','licensed_source_reused',
        'asset_manifest_verified','render_smoke_passed','responsive_source_preserved',
        'motion_source_preserved_or_static_fallback','content_adapter_passed',
        'site_document_compatible','functional_semantics_mapped','page_inventory_verified',
        'external_dependencies_reviewed'
    ):
        if gate.get(flag) is not True:
            return False

    render_dir=(project/'render').resolve()
    pages=sorted(render_dir.glob('*.html')) if render_dir.is_dir() else []
    expected_pages=int(meta.get('pages') or 0)
    if expected_pages<1 or len(pages)!=expected_pages or not any(p.name=='home.html' for p in pages):
        return False
    expected_slugs={'home', *[str(v) for v in (meta.get('page_slugs') or [])]}
    actual_slugs={p.stem for p in pages}
    if actual_slugs!=expected_slugs:
        return False
    page_hashes=gate.get('page_sha256') if isinstance(gate.get('page_sha256'),dict) else {}
    if set(page_hashes)!=actual_slugs:
        return False
    for page in pages:
        if not _sha256_matches(page,page_hashes.get(page.stem)):
            return False
    if not _sha256_matches(render_home,gate.get('render_home_sha256')):
        return False
    return _sha256_matches(css_file,gate.get('css_sha256'))

def _catalogue_project_ready(project: Path, meta: dict) -> bool:
    if not isinstance(meta,dict) or meta.get('hidden'):
        return False
    publication=meta.get('publication') if isinstance(meta.get('publication'),dict) else {}
    source=meta.get('source') if isinstance(meta.get('source'),dict) else {}
    verification=meta.get('verification') if isinstance(meta.get('verification'),dict) else {}

    # Publication is explicit and fail-closed. Merely writing metadata or a
    # render file can never expose a template in the catalogue.
    if publication.get('state')!='public' or publication.get('render_gate')!='passed':
        return False
    fidelity=str(source.get('fidelity') or '')
    if fidelity=='exact_source':
        return _exact_source_ready(project,meta,source,verification)
    if fidelity=='reference_reconstruction':
        return _reference_reconstruction_ready(project,meta,source,verification)
    if fidelity=='neutral_ingestion':
        return _neutral_ingestion_ready(project,meta,source,verification)
    if fidelity=='licensed_archive':
        return _licensed_archive_ready(project,meta,source,verification)
    return False

def _load_catalogue() -> list[dict]:
    root=ROOT/'template_projects'
    items=[]
    if not root.exists(): return items
    for meta_path in sorted(root.glob('*/metadata.json')):
        try:
            meta=json.loads(meta_path.read_text(encoding='utf-8'))
        except Exception:
            continue
        if not isinstance(meta,dict) or not meta.get('slug'):
            continue
        slug=str(meta['slug'])
        if meta_path.parent.name != slug or not _catalogue_project_ready(meta_path.parent,meta):
            continue
        meta.setdefault('preview',f'/static/template-previews/{slug}.png')
        meta.setdefault('compatibility',{'site_document':3,'effects':1,'next_export':16})
        items.append(meta)
    return items

TEMPLATES: list[dict] = _load_catalogue()

AI_RUNTIME_META = {
    "slug": AI_RUNTIME_SLUG,
    "name": "AI generated site runtime",
    "category": "Internal",
    "industry": "Any",
    "style": "Prompt-derived",
    "tone": "Prompt-derived",
    "accent": "#111111",
    "pages": 1,
    "page_slugs": [],
    "version": "2.0.0",
    "hidden": True,
    "art_direction": "Derived from the site brief and SiteDocument rather than a catalogue template.",
    "compatibility": {"site_document": 3, "effects": 1, "next_export": 16},
    "demo_business_name": "Business",
    "demo_tagline": "A clear website, built around the brief.",
    "demo_description": "A prompt-derived public website created with Zylora AI.",
}

IMPORTED_RUNTIME_META = {
    "slug": IMPORTED_RUNTIME_SLUG,
    "name": "Imported website runtime",
    "category": "Internal",
    "industry": "Any",
    "style": "Imported source",
    "tone": "Imported source",
    "accent": "#111111",
    "pages": 1,
    "page_slugs": [],
    "version": "1.0.0",
    "hidden": True,
    "art_direction": "Safely normalized from an uploaded website/project without executing uploaded build scripts.",
    "compatibility": {"site_document": 3, "effects": 1, "next_export": 16},
    "demo_business_name": "Imported website",
    "demo_tagline": "Imported website",
    "demo_description": "Website imported into Zylora.",
}

# Runtime registry contains verified catalogue metadata plus the hidden AI renderer.
BY_SLUG = {AI_RUNTIME_SLUG: AI_RUNTIME_META, IMPORTED_RUNTIME_SLUG: IMPORTED_RUNTIME_META, **{str(t['slug']):t for t in TEMPLATES}}

def reload_catalogue() -> list[dict]:
    global TEMPLATES, BY_SLUG
    TEMPLATES = _load_catalogue()
    BY_SLUG = {AI_RUNTIME_SLUG: AI_RUNTIME_META, IMPORTED_RUNTIME_SLUG: IMPORTED_RUNTIME_META, **{str(t['slug']):t for t in TEMPLATES}}
    return TEMPLATES

def list_all_template_projects() -> list[dict]:
    root = ROOT / 'template_projects'
    items = []
    if not root.exists():
        return items
    for meta_path in sorted(root.glob('*/metadata.json')):
        try:
            meta = json.loads(meta_path.read_text(encoding='utf-8'))
        except Exception:
            continue
        if not isinstance(meta, dict) or not meta.get('slug'):
            continue
        slug = str(meta['slug'])
        pub = meta.get('publication') if isinstance(meta.get('publication'), dict) else {}
        is_ready = _catalogue_project_ready(meta_path.parent, meta)
        meta['is_ready'] = is_ready
        meta['state'] = pub.get('state', 'unknown')
        meta['render_gate'] = pub.get('render_gate', 'unknown')
        meta.setdefault('preview', f'/static/template-previews/{slug}.png')
        items.append(meta)
    return items


def _doc(content: dict) -> dict:
    raw = content.get("published_structure_json") or content.get("draft_structure_json")
    if isinstance(raw, dict):
        return raw
    try:
        data = json.loads(raw or "{}")
    except Exception:
        data = {}
    return data if isinstance(data, dict) else {}


def _pages(content: dict) -> list[dict]:
    data = _doc(content)
    out: list[dict] = []
    for item in data.get("pages") or []:
        if not isinstance(item, dict):
            continue
        key = str(item.get("id") or item.get("slug") or "").strip().lower()
        if not key:
            continue
        out.append(
            {
                "id": key,
                "title": str(item.get("title") or key.replace("-", " ").title())[:120],
                "purpose": str(item.get("purpose") or "").strip()[:360],
            }
        )
    if not out:
        out = [{"id": "home", "title": "Home", "purpose": "Primary overview"}]
    if out[0]["id"] != "home":
        out.insert(0, {"id": "home", "title": "Home", "purpose": "Primary overview"})
    return out


def _design_direction(content: dict) -> str:
    data = _doc(content)
    plan = data.get("designPlan") if isinstance(data.get("designPlan"), dict) else {}
    value = str(plan.get("archetype") or plan.get("direction") or "swiss-minimal").strip().lower()
    aliases = {
        "minimal": "swiss-minimal",
        "minimal editorial": "editorial-asymmetric",
        "editorial": "editorial-asymmetric",
        "image-led": "cinematic-image-led",
        "cinematic": "cinematic-image-led",
        "organic": "soft-organic",
        "warm organic": "soft-organic",
        "technical": "technical-grid",
        "dark technical": "technical-grid",
        "poster": "poster-brutalist",
        "bold poster": "poster-brutalist",
        "bento": "modular-bento",
        "typography": "typography-led",
    }
    value = aliases.get(value, value)
    allowed = {
        "swiss-minimal",
        "editorial-asymmetric",
        "cinematic-image-led",
        "soft-organic",
        "technical-grid",
        "poster-brutalist",
        "modular-bento",
        "typography-led",
        "immersive-story",
    }
    return value if value in allowed else "swiss-minimal"


def _base(content: dict) -> str:
    slug = quote(str(content.get("slug") or "preview").strip(), safe="-")
    return f"/s/{slug}"


def _nav(content: dict, pages: list[dict]) -> str:
    base = _base(content)
    links = []
    for page in pages[:10]:
        key = page["id"]
        href = base if key == "home" else f"{base}/{quote(key, safe='-')}"
        links.append(f'<a href="{href}">{escape(page["title"])}</a>')
    return "".join(links)


def _page_href(content: dict, key: str) -> str:
    base = _base(content)
    return base if key == "home" else f"{base}/{quote(key, safe='-')}"


def _runtime_css(direction: str, accent: str) -> str:
    # One restrained renderer with composition variants.  These are runtime
    # layout rules, not catalogue templates.
    return f"""
:root{{--ink:#111214;--muted:#666a70;--paper:#f7f6f2;--surface:#ffffff;--line:#d9d8d3;--accent:{accent};--radius:18px}}
*{{box-sizing:border-box}}html{{scroll-behavior:smooth}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased}}a{{color:inherit}}.skip{{position:fixed;left:-9999px;top:10px;z-index:100;background:#111;color:#fff;padding:10px 14px}}.skip:focus{{left:10px}}
.zy-ai-nav{{height:76px;display:grid;grid-template-columns:1fr auto;align-items:center;padding:0 clamp(22px,4vw,64px);border-bottom:1px solid var(--line);background:color-mix(in srgb,var(--paper) 92%,transparent);backdrop-filter:blur(18px);position:sticky;top:0;z-index:20}}
.zy-ai-brand{{font-family:'Space Grotesk',Inter,sans-serif;font-size:23px;font-weight:700;letter-spacing:-.055em;text-decoration:none}}.zy-ai-nav nav{{display:flex;gap:22px;align-items:center;flex-wrap:wrap;justify-content:flex-end}}.zy-ai-nav nav a{{font-size:12px;text-decoration:none;color:#4f5358}}.zy-ai-nav nav a:hover{{color:#111}}
.zy-ai-main{{max-width:1560px;margin:auto;padding:0 clamp(22px,5vw,80px)}}.zy-ai-hero{{min-height:76vh;display:grid;grid-template-columns:minmax(0,1.3fr) minmax(280px,.7fr);gap:7vw;align-items:end;padding:clamp(80px,10vw,150px) 0 clamp(72px,8vw,120px);border-bottom:1px solid var(--line)}}
.zy-ai-kicker{{font-size:10px;text-transform:uppercase;letter-spacing:.16em;font-weight:700;color:#74777c;margin-bottom:20px}}.zy-ai-hero h1,.zy-ai-page h1{{font-family:'Space Grotesk',Inter,sans-serif;font-weight:500;letter-spacing:-.065em;line-height:.9;margin:0}}.zy-ai-hero h1{{font-size:clamp(62px,9vw,150px);max-width:11ch}}.zy-ai-hero-copy{{align-self:end;padding-bottom:7px}}.zy-ai-hero-copy p{{font-size:clamp(17px,1.45vw,22px);line-height:1.55;color:#51555b;margin:0 0 28px;max-width:620px}}.zy-ai-hero-media,.zy-ai-page-media{{margin:0 0 26px;border:1px solid var(--line);border-radius:calc(var(--radius) * .75);overflow:hidden;background:#ebe9e3;aspect-ratio:4/3}}.zy-ai-hero-media img,.zy-ai-page-media img{{width:100%;height:100%;display:block;object-fit:cover}}.zy-ai-page-media{{margin-top:10px;max-width:640px}}.zy-ai-actions{{display:flex;gap:10px;flex-wrap:wrap}}.zy-ai-button{{display:inline-flex;min-height:44px;align-items:center;justify-content:center;padding:0 18px;border:1px solid #111;border-radius:999px;text-decoration:none;font-size:12px;font-weight:700;background:#111;color:#fff}}.zy-ai-button.secondary{{background:transparent;color:#111}}
.zy-ai-index{{padding:clamp(72px,9vw,130px) 0}}.zy-ai-index-head{{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;margin-bottom:48px}}.zy-ai-index h2{{font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(42px,5vw,76px);font-weight:500;line-height:.96;letter-spacing:-.05em;margin:0}}.zy-ai-index-head p{{color:var(--muted);line-height:1.6;max-width:620px;margin:0}}.zy-ai-grid{{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}}.zy-ai-card{{min-height:250px;padding:26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);text-decoration:none;display:flex;flex-direction:column;justify-content:space-between;transition:background .2s ease,transform .2s ease}}.zy-ai-card:hover{{background:#fff}}.zy-ai-card span{{font-size:10px;color:#85898e}}.zy-ai-card h3{{font-family:'Space Grotesk',Inter,sans-serif;font-size:28px;letter-spacing:-.035em;margin:32px 0 12px}}.zy-ai-card p{{font-size:13px;line-height:1.55;color:#65696f;margin:0}}
.zy-ai-contact{{margin:0 0 clamp(70px,8vw,120px);padding:clamp(36px,5vw,72px);background:#111;color:#fff;display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;border-radius:var(--radius)}}.zy-ai-contact h2{{font:500 clamp(38px,5vw,70px)/.95 'Space Grotesk',Inter,sans-serif;letter-spacing:-.055em;margin:0 0 12px}}.zy-ai-contact p{{color:#c9cbce;margin:0;max-width:600px;line-height:1.55}}.zy-ai-contact .zy-ai-button{{background:#fff;color:#111;border-color:#fff}}
.zy-ai-page{{min-height:72vh;padding:clamp(90px,12vw,180px) 0 clamp(80px,10vw,140px);display:grid;grid-template-columns:minmax(0,1.15fr) minmax(300px,.85fr);gap:8vw;align-items:start;border-bottom:1px solid var(--line)}}.zy-ai-page h1{{font-size:clamp(64px,9vw,142px);max-width:10ch}}.zy-ai-page-copy{{padding-top:34px}}.zy-ai-page-copy p{{font-size:clamp(18px,1.5vw,23px);line-height:1.6;color:#555a60;max-width:650px}}.zy-ai-page-copy .zy-ai-actions{{margin-top:32px}}.zy-ai-footer{{max-width:1560px;margin:auto;padding:30px clamp(22px,5vw,80px) 42px;display:flex;justify-content:space-between;gap:20px;font-size:11px;color:#777b80}}.zy-ai-footer strong{{font-family:'Space Grotesk',Inter,sans-serif;color:#111}}
body[data-direction='editorial-asymmetric'] .zy-ai-hero{{grid-template-columns:.72fr 1.28fr}}body[data-direction='editorial-asymmetric'] .zy-ai-hero>div:first-child{{grid-column:2;grid-row:1}}body[data-direction='editorial-asymmetric'] .zy-ai-hero-copy{{grid-column:1;grid-row:1}}body[data-direction='editorial-asymmetric'] .zy-ai-hero h1{{max-width:9ch}}
body[data-direction='cinematic-image-led']{{background:#111;color:#f5f4f1}}body[data-direction='cinematic-image-led'] .zy-ai-nav{{background:#111;border-color:#303033}}body[data-direction='cinematic-image-led'] .zy-ai-nav nav a,body[data-direction='cinematic-image-led'] .zy-ai-hero-copy p,body[data-direction='cinematic-image-led'] .zy-ai-index-head p,body[data-direction='cinematic-image-led'] .zy-ai-card p,body[data-direction='cinematic-image-led'] .zy-ai-footer{{color:#a7aaae}}body[data-direction='cinematic-image-led'] .zy-ai-hero,body[data-direction='cinematic-image-led'] .zy-ai-grid,body[data-direction='cinematic-image-led'] .zy-ai-card,body[data-direction='cinematic-image-led'] .zy-ai-page{{border-color:#303033}}body[data-direction='cinematic-image-led'] .zy-ai-card:hover{{background:#19191a}}body[data-direction='cinematic-image-led'] .zy-ai-button.secondary{{color:#fff;border-color:#fff}}body[data-direction='cinematic-image-led'] .zy-ai-footer strong{{color:#fff}}
body[data-direction='soft-organic']{{--paper:#f2efe7;--line:#d7d1c3;--radius:32px}}body[data-direction='soft-organic'] .zy-ai-hero h1,body[data-direction='soft-organic'] .zy-ai-page h1,body[data-direction='soft-organic'] .zy-ai-index h2,body[data-direction='soft-organic'] .zy-ai-card h3{{font-family:Georgia,serif;font-weight:400;letter-spacing:-.045em}}
body[data-direction='technical-grid']{{--paper:#f4f5f2;--line:#cdd2cc}}body[data-direction='technical-grid'] .zy-ai-hero,body[data-direction='technical-grid'] .zy-ai-page{{grid-template-columns:1fr 1fr}}body[data-direction='technical-grid'] .zy-ai-kicker,body[data-direction='technical-grid'] .zy-ai-card span,body[data-direction='technical-grid'] .zy-ai-nav nav a{{font-family:'IBM Plex Mono',monospace;letter-spacing:.04em}}
body[data-direction='poster-brutalist']{{--paper:#f1f0eb;--line:#111;--radius:0}}body[data-direction='poster-brutalist'] .zy-ai-nav,body[data-direction='poster-brutalist'] .zy-ai-hero,body[data-direction='poster-brutalist'] .zy-ai-grid,body[data-direction='poster-brutalist'] .zy-ai-card,body[data-direction='poster-brutalist'] .zy-ai-page{{border-width:2px;border-color:#111}}body[data-direction='poster-brutalist'] .zy-ai-hero h1{{font-weight:700;letter-spacing:-.075em}}body[data-direction='poster-brutalist'] .zy-ai-card:hover{{transform:translate(-4px,-4px);box-shadow:4px 4px 0 #111}}
body[data-direction='modular-bento'] .zy-ai-grid{{border:0;gap:12px}}body[data-direction='modular-bento'] .zy-ai-card{{border:1px solid var(--line);border-radius:20px;background:#fff}}body[data-direction='modular-bento'] .zy-ai-card:nth-child(4n+1){{grid-column:span 2}}
body[data-direction='typography-led'] .zy-ai-hero{{grid-template-columns:1fr}}body[data-direction='typography-led'] .zy-ai-hero-copy{{max-width:760px}}body[data-direction='typography-led'] .zy-ai-hero h1{{max-width:13ch;font-size:clamp(68px,11vw,180px)}}
@media(max-width:860px){{.zy-ai-nav{{height:auto;min-height:66px;padding-top:15px;padding-bottom:15px;gap:14px}}.zy-ai-nav nav{{gap:11px}}.zy-ai-hero,.zy-ai-page,.zy-ai-index-head{{grid-template-columns:1fr!important}}body[data-direction='editorial-asymmetric'] .zy-ai-hero>div:first-child,body[data-direction='editorial-asymmetric'] .zy-ai-hero-copy{{grid-column:auto;grid-row:auto}}.zy-ai-hero{{min-height:auto;padding-top:88px}}.zy-ai-hero-copy{{padding-top:24px}}.zy-ai-grid{{grid-template-columns:1fr 1fr}}.zy-ai-contact{{grid-template-columns:1fr}}}}
@media(max-width:560px){{.zy-ai-nav nav a:nth-child(n+4){{display:none}}.zy-ai-main{{padding-left:18px;padding-right:18px}}.zy-ai-hero h1,.zy-ai-page h1{{font-size:56px}}.zy-ai-grid{{grid-template-columns:1fr}}body[data-direction='modular-bento'] .zy-ai-card:nth-child(4n+1){{grid-column:auto}}.zy-ai-card{{min-height:200px;padding:22px}}.zy-ai-footer{{padding-left:18px;padding-right:18px;flex-direction:column}}}}
@media(prefers-reduced-motion:reduce){{*{{scroll-behavior:auto!important;transition:none!important;animation:none!important}}}}
"""


def _render_ai_runtime(content: dict, page_slug: str = "home") -> str:
    pages = _pages(content)
    key = (page_slug or "home").strip().lower()
    current = next((p for p in pages if p["id"] == key), None)
    if current is None:
        raise KeyError(key)

    business = escape(str(content.get("business_name") or "Business"))
    tagline = escape(str(content.get("tagline") or business))
    description = escape(str(content.get("description") or ""))
    accent_raw = str(content.get("accent") or "#111111")
    accent = accent_raw if len(accent_raw) == 7 and accent_raw.startswith("#") else "#111111"
    direction = _design_direction(content)
    nav = _nav(content, pages)
    css = _runtime_css(direction, escape(accent))
    base = _base(content)

    if key == "home":
        cards = []
        for idx, page in enumerate(pages[1:9], 1):
            purpose = escape(page.get("purpose") or f"Learn more about {page['title'].lower()}.")
            cards.append(
                f'<a class="zy-ai-card" href="{_page_href(content, page["id"])}">'
                f'<span>{idx:02d}</span><div><h3>{escape(page["title"])}</h3><p>{purpose}</p></div></a>'
            )
        if not cards:
            cards.append(
                '<a class="zy-ai-card" href="#zylora-enquiry"><span>01</span><div><h3>Start a conversation</h3>'
                '<p>Use the website assistant to send an enquiry directly to the team.</p></div></a>'
            )
        body = f"""
<main id="main" class="zy-ai-main">
  <section class="zy-ai-hero">
    <div><div class="zy-ai-kicker">{business}</div><h1>{tagline}</h1></div>
    <div class="zy-ai-hero-copy"><figure class="zy-ai-hero-media"><img src="{_NEUTRAL_VISUAL}" alt="Abstract neutral visual placeholder"></figure><p>{description}</p><div class="zy-ai-actions"><a class="zy-ai-button" href="#zylora-enquiry">Get in touch</a>{('<a class="zy-ai-button secondary" href="#zylora-booking">Book an appointment</a>' if 'appointment' in str((_doc(content).get('businessProfile') or {})).lower() else '')}</div></div>
  </section>
  <section class="zy-ai-index"><div class="zy-ai-index-head"><h2>Everything people need, clearly organised.</h2><p>The page structure comes from the business brief rather than a subscription-plan page quota or a starting template.</p></div><div class="zy-ai-grid">{''.join(cards)}</div></section>
  <section class="zy-ai-contact"><div><h2>Ready to talk?</h2><p>Send an enquiry through the website assistant and the team can follow up using the details you provide.</p></div><a class="zy-ai-button" href="#zylora-enquiry">Send an enquiry</a></section>
</main>"""
        page_title = f"{business} — {tagline}"
        meta_description = description
    else:
        purpose = escape(current.get("purpose") or f"Information about {current['title']}.")
        body = f"""
<main id="main" class="zy-ai-main">
  <section class="zy-ai-page">
    <div><div class="zy-ai-kicker">{business} · {escape(current['title'])}</div><h1>{escape(current['title'])}</h1></div>
    <div class="zy-ai-page-copy"><figure class="zy-ai-page-media"><img src="{_NEUTRAL_VISUAL}" alt="Abstract neutral visual placeholder"></figure><p>{purpose}</p><p>{description}</p><div class="zy-ai-actions"><a class="zy-ai-button" href="#zylora-enquiry">Get in touch</a><a class="zy-ai-button secondary" href="{base}">Back home</a></div></div>
  </section>
</main>"""
        page_title = f"{escape(current['title'])} — {business}"
        meta_description = purpose

    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{page_title}</title><meta name="description" content="{meta_description}"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"><style>{css}</style></head><body data-direction="{escape(direction)}"><a class="skip" href="#main">Skip to content</a><header class="zy-ai-nav"><a class="zy-ai-brand" href="{base}">{business}</a><nav aria-label="Primary">{nav}</nav></header>{body}<footer class="zy-ai-footer"><strong>{business}</strong><span>Built with Zylora</span></footer></body></html>"""


def _render_catalogue_project(slug: str, content: dict, page_slug: str='home') -> str:
    meta=BY_SLUG.get(slug)
    if not meta or slug==AI_RUNTIME_SLUG:
        raise KeyError(slug)
    page=(page_slug or 'home').strip('/').lower() or 'home'
    allowed={'home',*map(str,meta.get('page_slugs') or [])}
    if page not in allowed:
        raise KeyError(page)
    project=(ROOT/'template_projects'/slug).resolve()
    body_path=(project/'render'/f'{page}.html').resolve()
    css_path=(project/'app'/'globals.css').resolve()
    if project not in body_path.parents or project not in css_path.parents or not body_path.is_file() or not css_path.is_file():
        raise KeyError(page)
    body=body_path.read_text(encoding='utf-8')
    css=css_path.read_text(encoding='utf-8')
    # Template-project source keeps portable ../assets references for standalone export.
    # Rewrite them only in the hosted runtime to the guarded per-template asset route.
    asset_base=f'/template-assets/{quote(slug)}/'
    body=body.replace('../assets/',asset_base).replace('./assets/',asset_base)
    css=css.replace('../assets/',asset_base).replace('./assets/',asset_base)
    assets_dir = project / 'assets'
    if assets_dir.is_dir():
        rel_files = []
        for p in assets_dir.rglob('*'):
            if p.is_file():
                rel_files.append(p.relative_to(assets_dir).as_posix())
        rel_files.sort(key=len, reverse=True)
        for rel in rel_files:
            body = re.sub(r'((?:src|href|poster)=["\'])\/?' + re.escape(rel) + r'(["\'])', r'\1' + asset_base + rel + r'\2', body)
            body = re.sub(r'(url\([\'"]?)\/?' + re.escape(rel) + r'([\'"]?\))', r'\1' + asset_base + rel + r'\2', body)
            css = re.sub(r'(url\([\'"]?)\/?' + re.escape(rel) + r'([\'"]?\))', r'\1' + asset_base + rel + r'\2', css)
            base_name = Path(rel).name
            if base_name != rel:
                body = re.sub(r'((?:src|href|poster)=["\'])\/?' + re.escape(base_name) + r'(["\'])', r'\1' + asset_base + rel + r'\2', body)
                body = re.sub(r'(url\([\'"]?)\/?(?:[A-Za-z0-9_.-]+\/)*' + re.escape(base_name) + r'([\'"]?\))', r'\1' + asset_base + rel + r'\2', body)
                css = re.sub(r'(url\([\'"]?)\/?(?:[A-Za-z0-9_.-]+\/)*' + re.escape(base_name) + r'([\'"]?\))', r'\1' + asset_base + rel + r'\2', css)
    # Catalogue projects use the shared Zylora effects runtime rather than
    # shipping one-off animation engines inside individual templates.
    effects_css_path=ROOT/'static'/'zylora-template-effects.css'
    effects_js_path=ROOT/'static'/'zylora-template-effects.js'
    effects_css=effects_css_path.read_text(encoding='utf-8') if effects_css_path.is_file() else ''
    effects_js=effects_js_path.read_text(encoding='utf-8') if effects_js_path.is_file() else ''
    # Avoid an accidental script terminator if the shared runtime changes later.
    effects_js=effects_js.replace('</script>','<\\/script>')
    business=escape(str(content.get('business_name') or meta.get('demo_business_name') or meta.get('name') or 'Business'))
    tagline=escape(str(content.get('tagline') or meta.get('demo_tagline') or 'A distinctive website.'))
    description=escape(str(content.get('description') or meta.get('demo_description') or ''))
    accent=escape(str(content.get('accent') or meta.get('accent') or '#111111'))
    values={'{{BUSINESS_NAME}}':business,'{{TAGLINE}}':tagline,'{{DESCRIPTION}}':description,'{{ACCENT}}':accent}
    for key,value in values.items():
        body=body.replace(key,value)
        css=css.replace(key,value)
    title=(business+' — '+tagline) if page=='home' else (page.replace('-', ' ').title()+' — '+business)
    head=(
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'<title>{title}</title><meta name="description" content="{description}">'
        f'<meta name="template-version" content="{escape(str(meta.get("version") or "1.0.0"))}">'
        f'<style>{css}\n{effects_css}</style></head><body data-template="{escape(slug)}" data-template-page="{escape(page)}">'
    )
    runtime=f'<script data-zylora-effects>{effects_js}</script>' if effects_js else ''
    return head+body+runtime+'</body></html>'


def render_template(slug: str, content: dict) -> str:
    if slug == AI_RUNTIME_SLUG:
        return _render_ai_runtime(content, "home")
    return _render_catalogue_project(slug,content,'home')


def render_template_page(slug: str, content: dict, page_slug: str) -> str:
    if slug == AI_RUNTIME_SLUG:
        return _render_ai_runtime(content, page_slug or "home")
    if slug == IMPORTED_RUNTIME_SLUG:
        from .importer import render_imported_page
        site_id=str(content.get('id') or '')
        if not site_id: raise KeyError('Imported site id missing')
        return render_imported_page(site_id,page_slug or 'home')
    return _render_catalogue_project(slug,content,page_slug or 'home')
