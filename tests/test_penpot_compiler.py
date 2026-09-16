import pytest

from app.penpot_compiler import PenpotCompileError, compile_penpot_document


def payload():
    return {
        "site_id": "site-1",
        "revision": 4,
        "tokens": {"brand.primary": "#123456"},
        "page": {
            "id": "page_home",
            "slug": "home",
            "name": "Home",
            "rootNodeId": "root",
            "objects": [
                {"id": "root", "zyloraType": "page", "children": ["hero"], "geometry": {"width": 1200, "height": 800}},
                {"id": "hero", "parentId": "root", "zyloraType": "section", "children": ["title"], "geometry": {"x": 10, "y": 20, "width": 900, "height": 400}},
                {"id": "title", "parentId": "hero", "zyloraType": "heading", "children": [], "content": {"text": "Hello"}, "metadata": {"zylora": {"componentType": "heading"}}},
            ],
        },
    }


def test_compile_preserves_stable_ids_semantics_geometry_and_hash():
    result = compile_penpot_document(payload(), site_id="site-1", expected_revision=4)
    assert result.document.pages["page_home"].nodes["title"].content.text == "Hello"
    assert result.document.pages["page_home"].nodes["title"].metadata["zylora"]["componentType"] == "heading"
    assert result.document.pages["page_home"].nodes["hero"].geometry.width == 900
    assert result.document_hash == compile_penpot_document(payload(), site_id="site-1", expected_revision=4).document_hash


def test_compile_rejects_wrong_site_unsafe_values_and_unknown_parent():
    with pytest.raises(PenpotCompileError):
        compile_penpot_document(payload(), site_id="site-other")
    unsafe = payload()
    unsafe["page"]["objects"][2]["content"] = {"text": "<script>alert(1)</script>"}
    with pytest.raises(PenpotCompileError):
        compile_penpot_document(unsafe, site_id="site-1")
    orphan = payload()
    orphan["page"]["objects"][2]["parentId"] = "missing"
    with pytest.raises(PenpotCompileError):
        compile_penpot_document(orphan, site_id="site-1")


def test_compile_projects_semantic_action_accessibility_and_bindings_into_runtime_fields():
    source = payload()
    source["page"]["objects"][1]["metadata"] = {
        "zylora": {
            "componentType": "heading2",
            "accessibility": {"ariaLabel": "Primary heading"},
            "actions": [{"type": "internal_page", "targetPageId": "page_home"}],
            "bindings": {"text": {"kind": "FIELD", "collectionId": "content", "fieldId": "headline"}},
        }
    }
    result = compile_penpot_document(source, site_id="site-1")
    node = result.document.pages["page_home"].nodes["hero"]
    assert node.content.action.type == "page"
    assert node.content.action.pageId == "page_home"
    assert node.accessibility["ariaLabel"] == "Primary heading"
    assert node.bindings["text"]["fieldId"] == "headline"
    assert node.metadata["headingLevel"] == 2


def test_compile_rejects_duplicate_slugs_and_unknown_semantic_page_references():
    source = payload()
    source["pages"] = [
        source.pop("page"),
        {"id": "page_about", "slug": "home", "name": "About", "rootNodeId": "about-root", "objects": [{"id": "about-root", "zyloraType": "page"}]},
    ]
    with pytest.raises(PenpotCompileError, match="Duplicate page slug"):
        compile_penpot_document(source, site_id="site-1")

    source = payload()
    source["page"]["objects"][1]["metadata"] = {
        "zylora": {"componentType": "button", "actions": [{"type": "internal_page", "targetPageId": "missing-page"}]}
    }
    with pytest.raises(PenpotCompileError, match="unknown page"):
        compile_penpot_document(source, site_id="site-1")


def test_compile_rejects_malformed_object_fields_instead_of_dropping_them():
    source = payload()
    source["page"]["objects"][1]["children"] = "title"
    with pytest.raises(PenpotCompileError, match="children must be an array"):
        compile_penpot_document(source, site_id="site-1")


def test_compile_rejects_broken_cms_bindings():
    source = payload()
    source["page"]["objects"][1]["metadata"] = {
        "zylora": {
            "componentType": "cms-list",
            "bindings": {"items": {"kind": "REPEATER", "collectionId": ""}},
        }
    }
    with pytest.raises(PenpotCompileError, match="collectionId"):
        compile_penpot_document(source, site_id="site-1")
