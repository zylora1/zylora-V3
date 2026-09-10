from __future__ import annotations

import pytest

from app.studio_ai_operations import apply_v4_operations
from app.studio_document import Node, NodeAction, NodeContent, NodeGeometry, Page, SiteDocument, validate_studio_document
from app.studio_renderer import render_page


def _raw_document() -> dict:
    return {
        "schemaVersion": 5,
        "revision": 7,
        "pages": {
            "home": {
                "id": "home",
                "slug": "home",
                "name": "Home",
                "rootNodeId": "root",
                "nodes": {
                    "root": {"id": "root", "type": "page", "children": ["section"]},
                    "section": {
                        "id": "section",
                        "type": "section",
                        "parentId": "root",
                        "children": ["heading"],
                        "style": {"css": {"position": "relative", "width": "1000px", "height": "600px"}},
                    },
                    "heading": {
                        "id": "heading",
                        "type": "heading",
                        "parentId": "section",
                        "content": {"text": "Hello"},
                        "style": {"css": {"position": "absolute", "left": "100px", "top": "40px", "width": "400px", "height": "60px", "rotate": "15deg"}},
                        "metadata": {"locked": True, "headingLevel": 1},
                    },
                },
            }
        },
    }


def test_v5_normalization_adds_engine_geometry_and_canonical_lock():
    document = validate_studio_document(_raw_document())
    heading = document.pages["home"].nodes["heading"]
    assert document.schemaVersion == 5
    assert document.engineVersion == 2
    assert heading.geometry is not None
    assert heading.geometry.x == 100
    assert heading.geometry.width == 400
    assert heading.geometry.rotation == 15
    assert heading.locked is True


def test_renderer_projects_geometry_fluidly_and_uses_semantic_tags():
    root = Node(id="root", type="page", children=["section"])
    section = Node(
        id="section",
        type="section",
        parentId="root",
        children=["heading"],
        geometry=NodeGeometry(x=0, y=0, width=1000, height=600, mode="flow"),
    )
    heading = Node(
        id="heading",
        type="heading",
        parentId="section",
        content=NodeContent(text="Hello"),
        geometry=NodeGeometry(x=100, y=40, width=400, height=60, rotation=15, mode="freeform"),
        metadata={"headingLevel": 1},
    )
    document = SiteDocument(pages={"home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root, "section": section, "heading": heading})})
    rendered = render_page(document, "home")
    assert "<main" in rendered
    assert "<h1" in rendered
    assert "left: 10.00000%" in rendered
    assert "width: 40.00000%" in rendered
    assert "rotate: 15.00deg" in rendered


def test_ai_geometry_operations_are_revision_safe_and_mirror_legacy_css():
    document = validate_studio_document(_raw_document())
    document.pages["home"].nodes["heading"].locked = False
    document.pages["home"].nodes["heading"].metadata["locked"] = False
    changed = apply_v4_operations(document, [
        {"type": "UPDATE_GEOMETRY", "pageId": "home", "nodeId": "heading", "geometry": {"x": 180, "width": 520, "rotation": 22.5}},
        {"type": "UPDATE_RESPONSIVE_GEOMETRY", "pageId": "home", "nodeId": "heading", "breakpoint": "mobile", "geometry": {"width": 320, "height": 48}},
    ])
    heading = changed.pages["home"].nodes["heading"]
    assert heading.geometry is not None
    assert heading.geometry.x == 180
    assert heading.geometry.width == 520
    assert heading.geometry.rotation == 22.5
    assert heading.style.css["left"] == "180px"
    assert heading.style.css["rotate"] == "22.5deg"
    assert heading.responsiveOverrides["mobile"].geometry.width == 320
    assert heading.responsiveOverrides["mobile"].style.css["width"] == "320px"

    locked_document = validate_studio_document(_raw_document())
    with pytest.raises(ValueError, match="locked"):
        apply_v4_operations(locked_document, [{"type": "UPDATE_GEOMETRY", "pageId": "home", "nodeId": "heading", "geometry": {"x": 1}}])


def test_internal_action_resolves_page_id_after_slug_change():
    root = Node(id="root", type="page", children=["section"])
    section = Node(
        id="section",
        type="section",
        parentId="root",
        children=["button"],
        geometry=NodeGeometry(x=0, y=0, width=1000, height=600, mode="flow"),
    )
    button = Node(
        id="button",
        type="button",
        parentId="section",
        content=NodeContent(text="About", action=NodeAction(type="page", pageId="about")),
        geometry=NodeGeometry(x=80, y=80, width=180, height=48, mode="freeform"),
    )
    about = Page(id="about", slug="about", name="About", rootNodeId="about-root", nodes={
        "about-root": Node(id="about-root", type="page", children=[]),
    })
    document = SiteDocument(pages={
        "home": Page(id="home", slug="home", name="Home", rootNodeId="root", nodes={"root": root, "section": section, "button": button}),
        "about": about,
    })
    first = render_page(document, "home")
    assert 'href="/about"' in first
    document.pages["about"].slug = "company"
    second = render_page(document, "home")
    assert 'href="/company"' in second
