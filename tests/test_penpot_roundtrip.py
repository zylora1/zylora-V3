import json
from pathlib import Path

from app.penpot_roundtrip import compare_semantics, semantic_snapshot
from app.penpot_semantics import component_types
from app.studio_document import Node, NodeGeometry, Page, SiteDocument, validate_studio_document


def _semantic_document():
    root = Node(id="root", type="page", geometry=NodeGeometry(width=1200, height=800), children=["hero", "lead"])
    hero = Node(
        id="hero", type="section", parentId="root", geometry=NodeGeometry(width=1200, height=400),
        metadata={"zylora": {"schemaVersion": 1, "componentType": "section", "instanceId": "zl_cmp_hero"}},
    )
    lead = Node(
        id="lead", type="lead_form", parentId="root", geometry=NodeGeometry(y=420, width=500, height=280),
        metadata={"zylora": {"schemaVersion": 1, "componentType": "lead-form", "instanceId": "zl_cmp_lead", "runtimeConfig": {"formId": "form_1"}}},
    )
    return validate_studio_document(SiteDocument(
        id="site-1", metadata={"zyloraWebsiteSchemaVersion": 1},
        pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root, "hero": hero, "lead": lead})},
    ).model_dump())


def test_semantic_snapshot_ignores_visual_geometry():
    before = _semantic_document()
    after = before.model_copy(deep=True)
    after.pages["home"].nodes["hero"].geometry = NodeGeometry(x=700, y=20, width=900, height=300, rotation=12)
    result = compare_semantics(before, after)
    assert result["status"] == "PASS"
    assert semantic_snapshot(before)["components"] == semantic_snapshot(after)["components"]


def test_semantic_snapshot_detects_runtime_meaning_loss():
    before = _semantic_document()
    after = before.model_copy(deep=True)
    del after.pages["home"].nodes["lead"].metadata["zylora"]
    result = compare_semantics(before, after)
    assert result["status"] == "FAIL"
    assert "components" in result["mismatches"]


def test_golden_fixture_catalog_covers_ten_business_shapes():
    path = Path(__file__).parent / "fixtures" / "penpot" / "golden-sites.json"
    fixtures = json.loads(path.read_text(encoding="utf-8"))
    assert len(fixtures) == 10
    assert {item["id"] for item in fixtures} >= {"restaurant", "clinic", "school", "gym", "salon", "agency", "consultant", "portfolio", "coaching-centre", "local-service-business"}
    registry = set(component_types())
    assert all(set(item["components"]).issubset(registry) for item in fixtures)
