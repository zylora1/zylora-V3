from app.penpot_migration import migrate_site_document, persist_migration_result, rollback_migration
from app.penpot_roundtrip import compare_semantics
from app.studio_document import Node, NodeGeometry, Page, SiteDocument, validate_studio_document


def test_legacy_migration_is_repeatable_and_rollback_safe():
    root = Node(id="root", type="page", geometry=NodeGeometry(width=1200, height=800), children=["title"])
    title = Node(id="title", type="heading", parentId="root", content={"text": "Hello"}, geometry=NodeGeometry(width=400, height=60))
    doc = validate_studio_document(SiteDocument(id="site-1", pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root, "title": title})}).model_dump())
    mapping = {"site_id": "site-1", "penpot_file_id": "file-1"}
    first = migrate_site_document(doc, site_id="site-1", mapping=mapping)
    second = migrate_site_document(doc, site_id="site-1", mapping=mapping)
    assert first.status == "READY"
    assert first.document_hash == second.document_hash
    restored = rollback_migration(first.migration_id)
    assert restored.id == "site-1"
    assert restored.pages["home"].nodes["title"].content.text == "Hello"


def test_legacy_migration_carries_every_page_and_semantic_components():
    home_root = Node(id="home-root", type="page", geometry=NodeGeometry(width=1200, height=800), children=["home-lead"])
    home_lead = Node(
        id="home-lead", type="lead_form", parentId="home-root",
        metadata={"zylora": {"componentType": "lead-form", "instanceId": "zl_cmp_home_lead", "runtimeConfig": {"formId": "form_1"}}},
    )
    about_root = Node(id="about-root", type="page", geometry=NodeGeometry(width=1200, height=800), children=[])
    source = validate_studio_document(SiteDocument(
        id="site-1",
        pages={
            "home": Page(id="home", slug="home", name="Home", rootNodeId="home-root", nodes={"home-root": home_root, "home-lead": home_lead}),
            "about": Page(id="about", slug="about", name="About", rootNodeId="about-root", nodes={"about-root": about_root}),
        },
    ).model_dump())
    result = migrate_site_document(source, site_id="site-1", mapping={"penpot_file_id": "file-1"})
    assert set(result.document.pages) == {"home", "about"}
    assert compare_semantics(source, result.document)["status"] == "PASS"


def test_validated_migration_can_persist_auditable_mapping(monkeypatch):
    root = Node(id="root", type="page", geometry=NodeGeometry(width=1200, height=800), children=[])
    doc = validate_studio_document(SiteDocument(id="site-1", pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root})}).model_dump())
    result = migrate_site_document(doc, site_id="site-1", mapping={"penpot_file_id": "file-1"})
    seen = {}

    def upsert(site_id, **kwargs):
        seen["site_id"] = site_id
        seen.update(kwargs)
        return {"site_id": site_id, **kwargs}

    monkeypatch.setattr("app.penpot_migration.penpot_mapping_service.upsert", upsert)
    saved = persist_migration_result(result, mapping={"penpot_file_id": "file-1", "migration_version": "2"})
    assert saved["site_id"] == "site-1"
    assert seen["migration_status"] == "READY"
    assert seen["compiled_site_document_revision"] == result.document.revision
    assert seen["last_compiled_at"]
    assert '"id":"site-1"' in seen["rollback_snapshot_json"]
