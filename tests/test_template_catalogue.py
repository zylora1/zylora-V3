from pathlib import Path
import json,re,hashlib,pytest
ROOT=Path(__file__).resolve().parents[1]
TROOT=ROOT/'apps/web/templates'
FILES=sorted(TROOT.glob('template-*.tsx'))
CATALOGUE=json.loads((ROOT/'apps/web/public/template-catalogue.json').read_text(encoding='utf-8'))
MANIFEST=json.loads((ROOT/'apps/web/public/template-design-manifests.json').read_text(encoding='utf-8'))

@pytest.mark.parametrize('path', FILES, ids=lambda p:p.stem)
def test_each_template_is_independent_content_driven_responsive_and_accessible(path):
    text=path.read_text(encoding='utf-8')
    assert 'GenericTemplate' not in text
    assert 'export default function Template' in text
    assert 'qualityTier' in text and 'premium' in text
    assert 'standalone' in text
    assert 'composition' in text
    assert 'SiteTemplateProps' in text
    assert 'content = {}' in text and 'theme = {}' in text
    assert 'businessName' in text and 'headline' in text and 'description' in text
    assert 'heroImage' in text and 'imageAlt' in text
    assert '@media(max-width:1024px)' in text
    assert '@media(max-width:768px)' in text
    assert '@media(max-width:430px)' in text
    assert '@media(prefers-reduced-motion:reduce)' in text
    assert 'id="contact"' in text
    assert 'href="#contact"' in text
    # No internal audit fingerprint is printed into live footer content.
    footer=text.split('<footer',1)[1]
    assert 'structural_signature' not in footer


def test_catalogue_has_exactly_1008_unique_ids_files_sources_and_structural_signatures():
    assert len(FILES)==1008
    assert len(CATALOGUE)==1008
    assert len(MANIFEST)==1008
    assert len({x['key'] for x in CATALOGUE})==1008
    assert len({x['file'] for x in CATALOGUE})==1008
    assert {x['file'] for x in CATALOGUE}=={p.name for p in FILES}
    assert len({hashlib.sha256(p.read_bytes()).hexdigest() for p in FILES})==1008
    assert len({x['structural_signature'] for x in MANIFEST})==1008


def test_catalogue_meets_diversity_floor_and_page_limit():
    assert len({x['industry_tags'][0] for x in MANIFEST})>=60
    assert len({x['design_style'] for x in MANIFEST})>=70
    assert len({x['layout_archetype'] for x in MANIFEST})>=30
    assert len({x['hero_archetype'] for x in MANIFEST})>=30
    assert len({x['navigation_pattern'] for x in MANIFEST})>=16
    assert len({x['typography_personality'] for x in MANIFEST})>=20
    assert all(1<=x['page_count']<=10 for x in MANIFEST)
    assert set(x['page_count'] for x in MANIFEST)==set(range(1,9))


def test_registry_has_exactly_one_loader_for_every_template():
    registry=(ROOT/'apps/web/lib/templateRegistry.ts').read_text(encoding='utf-8')
    for x in CATALOGUE:
        assert registry.count(json.dumps(x['key']))==1
        assert f'import("../templates/{x["key"]}")' in registry


def test_gallery_previews_exist_and_are_not_one_placeholder():
    previews=[ROOT/'apps/web/public'/x['preview_image'].lstrip('/') for x in CATALOGUE]
    assert all(p.exists() for p in previews)
    assert len({hashlib.sha256(p.read_bytes()).hexdigest() for p in previews})>=900


def test_random_50_have_distinct_structural_signatures():
    sample=[MANIFEST[(i*37+19)%1008] for i in range(50)]
    assert len({x['structural_signature'] for x in sample})==50
    assert len({x['hero_archetype'] for x in sample})>=20
    assert len({x['design_style'] for x in sample})>=35
