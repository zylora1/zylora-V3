from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_studio_uses_beginner_first_workspace_labels():
    source = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    assert "['add', '+', 'Add']" in source
    assert "['assets', '▧', 'Media']" in source
    assert "['site', '◉', 'Site']" in source
    assert "const rails: Array" in source
    assert "['components'" not in source


def test_add_panel_exposes_small_semantic_primitive_set():
    source = (ROOT / "studio" / "components" / "AddPanel.tsx").read_text(encoding="utf-8")
    for label in ("Text", "Button", "Card", "Image frame", "Shape", "Section"):
        assert f"label:'{label}'" in source
    assert "Heading" not in source
    assert "Container" not in source
    assert "displayName:item.label" in source


def test_layers_panel_never_displays_internal_ids_by_default():
    source = (ROOT / "studio" / "components" / "LayersPanel.tsx").read_text(encoding="utf-8")
    assert "substring" not in source
    assert "title={nodeId}" not in source
    assert "semanticType" in source
    assert "Image frame" in source
    assert "Sales Assistant" in source


def test_studio_mobile_shell_and_zoom_controls_are_present():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    assert "studio-mobile-nav" in app
    assert "Canvas zoom" in app
    assert "Fit canvas" in app
    assert ".studio-mobile-nav" in css
    assert "env(safe-area-inset-bottom)" in css
    assert "@media(max-width:420px)" in css


def test_studio_has_visual_page_section_navigator_and_progressive_color_controls():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    navigator = (ROOT / "studio" / "components" / "PageNavigator.tsx").read_text(encoding="utf-8")
    toolbar = (ROOT / "studio" / "components" / "ContextToolbar.tsx").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    assert "<PageNavigator/>" in app
    assert "PageNavigator" in navigator and "aria-label=\"Pages and sections\"" in navigator
    assert "Soft gradient" in toolbar and "Dark gradient" in toolbar
    assert ".studio-page-navigator" in css and ".section-chip" in css
