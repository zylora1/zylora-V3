import pytest

from app.penpot_adapter import PenpotAdapterError, translate_penpot_interaction
from app.penpot_compiler import PenpotCompileError, compile_penpot_document
from app.penpot_semantics import (
    SemanticValidationError,
    canonicalize_component_metadata,
    component_types,
    duplicate_component_metadata,
)
from app.studio_ai_operations import apply_v4_operations
from app.studio_document import Node, NodeGeometry, Page, SiteDocument, validate_studio_document


def _document():
    root = Node(id="root", type="page", geometry=NodeGeometry(width=1200, height=800), children=[])
    page = Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root})
    return validate_studio_document(SiteDocument(id="site-1", pages={"home": page}).model_dump())


def test_registry_covers_v1_website_semantics():
    required = {
        "button", "navigation", "lead-form", "contact-form", "appointment-widget",
        "ai-sales-assistant", "cms-list", "blog-list", "faq", "pricing", "map",
    }
    assert required.issubset(set(component_types()))


def test_metadata_is_versioned_and_instance_id_is_stable():
    first, warnings = canonicalize_component_metadata(
        {"componentType": "lead_form", "formId": "form_1"}, node_id="node-lead"
    )
    second, _ = canonicalize_component_metadata(
        {"componentType": "lead_form", "formId": "form_1"}, node_id="node-lead"
    )
    assert warnings == ()
    assert first == second
    assert first["schemaVersion"] == 1
    assert first["componentType"] == "lead-form"
    assert first["instanceId"].startswith("zl_cmp_")
    assert first["runtimeConfig"]["formId"] == "form_1"


def test_duplicate_regenerates_identity_but_keeps_runtime_references():
    source = {
        "schemaVersion": 1,
        "componentType": "appointment-widget",
        "instanceId": "zl_cmp_original",
        "runtimeConfig": {"calendarId": "calendar_1"},
        "bindings": {"timezone": "Asia/Kolkata"},
    }
    duplicate = duplicate_component_metadata(
        source, source_node_id="node-a", destination_node_id="node-b"
    )
    assert duplicate["instanceId"] != source["instanceId"]
    assert duplicate["runtimeConfig"] == source["runtimeConfig"]
    assert duplicate["bindings"] == source["bindings"]
    assert duplicate == duplicate_component_metadata(source, source_node_id="node-a", destination_node_id="node-b")


def test_semantic_validation_rejects_unknown_schema_and_unsafe_links():
    with pytest.raises(SemanticValidationError):
        canonicalize_component_metadata({"schemaVersion": 2, "componentType": "button"}, node_id="button")
    with pytest.raises(SemanticValidationError):
        canonicalize_component_metadata(
            {"componentType": "button", "actions": [{"type": "external_url", "url": "javascript:alert(1)"}]},
            node_id="button",
        )
    with pytest.raises(SemanticValidationError):
        canonicalize_component_metadata(
            {"componentType": "button", "actions": [{"type": "email", "value": "%6aavascript:alert(1)"}]},
            node_id="button-encoded",
        )


def test_compiler_emits_canonical_semantics_and_nonfatal_effect_warning():
    result = compile_penpot_document(
        {
            "site_id": "site-1",
            "metadata": {"zyloraWebsiteSchemaVersion": 1},
            "page": {
                "id": "home",
                "slug": "home",
                "name": "Home",
                "rootNodeId": "root",
                "objects": [
                    {"id": "root", "zyloraType": "page", "children": ["button"], "geometry": {"width": 1200, "height": 800}},
                    {
                        "id": "button", "parentId": "root", "kind": "shape", "unsupportedEffects": ["blur"],
                        "metadata": {"zylora": {"componentType": "button", "actions": [{"type": "internal_page", "targetPageId": "home"}]}},
                    },
                ],
            },
        },
        site_id="site-1",
    )
    metadata = result.document.pages["home"].nodes["button"].metadata["zylora"]
    assert metadata["schemaVersion"] == 1
    assert metadata["instanceId"].startswith("zl_cmp_")
    assert metadata["actions"][0]["type"] == "internal_page"
    assert result.document.metadata["zyloraWebsiteSchemaVersion"] == 1
    assert result.warnings == ("Visual effects on node button are not represented by SiteDocument and were safely degraded",)


def test_add_and_update_component_use_canonical_mutation_operations():
    document = _document()
    operations = translate_penpot_interaction(document, {
        "type": "add_component", "pageId": "home", "parentId": "root", "nodeId": "lead",
        "componentType": "lead-form", "config": {"runtimeConfig": {"formId": "form_1"}},
    })
    created = apply_v4_operations(document, operations)
    lead = created.pages["home"].nodes["lead"]
    assert lead.type == "lead_form"
    assert lead.metadata["zylora"]["componentType"] == "lead-form"
    updated_ops = translate_penpot_interaction(created, {
        "type": "set_component_config", "pageId": "home", "nodeId": "lead",
        "config": {"runtimeConfig": {"formId": "form_2"}},
    })
    updated = apply_v4_operations(created, updated_ops)
    assert updated.pages["home"].nodes["lead"].metadata["zylora"]["runtimeConfig"]["formId"] == "form_2"


def test_add_component_rejects_unknown_type():
    with pytest.raises(PenpotAdapterError):
        translate_penpot_interaction(_document(), {
            "type": "add_component", "pageId": "home", "parentId": "root", "nodeId": "x",
            "componentType": "unknown-widget",
        })


def test_compiler_rejects_invalid_semantic_metadata():
    payload = {
        "page": {
            "id": "home", "slug": "home", "name": "Home", "rootNodeId": "root",
            "objects": [
                {"id": "root", "zyloraType": "page", "children": ["x"]},
                {"id": "x", "parentId": "root", "metadata": {"zylora": {"componentType": "not-real"}}},
            ],
        }
    }
    with pytest.raises(PenpotCompileError, match="Unknown Zylora component type"):
        compile_penpot_document(payload, site_id="site-1")
