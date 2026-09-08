from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_studio_uses_beginner_first_workspace_labels():
    source = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    for rail in ("Sections", "Elements", "Text", "Uploads", "Draw", "Layers", "AI"):
        assert f"'{rail}']" in source
    for retired in ("['templates', 'Templates']", "['brand', 'Brand']", "['tools', 'Tools']", "['projects', 'Projects']", "['apps', 'Apps']", "['photos', 'Photos']"):
        assert retired not in source
    assert "const rails: Array" in source
    assert "<RailIcon id={id}/>" in source
    assert "['components'" not in source


def test_studio_is_built_by_vite_not_the_retired_esbuild_script():
    package = (ROOT / "package.json").read_text(encoding="utf-8")
    config = (ROOT / "vite.studio.config.mjs").read_text(encoding="utf-8")
    assert '"build:studio": "vite build --config vite.studio.config.mjs"' in package
    assert 'studio/index.tsx' in config
    assert not (ROOT / "scripts" / "build_studio.js").exists()


def test_add_panel_exposes_small_semantic_primitive_set():
    source = (ROOT / "studio" / "components" / "AddPanel.tsx").read_text(encoding="utf-8")
    for label in ("Button", "Circle", "Rectangle", "Icon", "Star burst", "2×2"):
        assert label in source
    assert "const textItem=item('Text'" in source
    assert "'image-frame'" in source and "gridItem" in source
    assert "Add blank section" in source and "Header / Navbar" not in source
    assert "displayName:x.label" in source


def test_layers_panel_never_displays_internal_ids_by_default():
    source = (ROOT / "studio" / "components" / "LayersPanel.tsx").read_text(encoding="utf-8")
    assert "substring" not in source
    assert "title={nodeId}" not in source
    assert "semanticType" in source
    assert "Image frame" in source
    assert "Sales Assistant" in source
    assert "return 'Group'" in source
    assert "transparentLayout" in source


def test_static_studio_shell_loads_the_production_ux_stylesheet():
    shell = (ROOT / "static" / "studio.html").read_text(encoding="utf-8")
    assert '<link rel="stylesheet" href="/static/studio-ux.css">' in shell


def test_studio_mobile_shell_and_zoom_controls_are_present():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    assert "studio-mobile-nav" in app
    navigator = (ROOT / "studio" / "components" / "PageNavigator.tsx").read_text(encoding="utf-8")
    assert "Canvas zoom" in navigator
    assert "Fit canvas" in navigator
    assert ".studio-mobile-nav" in css
    assert "env(safe-area-inset-bottom)" in css
    assert "@media(max-width:420px)" in css


def test_studio_has_visual_page_section_navigator_and_progressive_color_controls():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    navigator = (ROOT / "studio" / "components" / "PageNavigator.tsx").read_text(encoding="utf-8")
    toolbar = (ROOT / "studio" / "components" / "ContextToolbar.tsx").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    assert "<PageNavigator onFit={fit}/>" in app
    assert "PageNavigator" in navigator and "aria-label=\"Pages and sections\"" in navigator
    assert "GradientEditor" in toolbar and "Gradient type" in toolbar and "Text gradient" in toolbar
    assert ".studio-page-navigator" in css and ".section-add-bar" in css
    assert "zoom-range" in navigator and ".navigator-zoom" in css


def test_panel_drag_payload_preserves_primitive_and_drop_geometry():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    panel = (ROOT / "studio" / "components" / "AddPanel.tsx").read_text(encoding="utf-8")
    canvas = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    assert "application/x-zylora-node" in panel
    assert "subtree" in panel
    assert "screenToCanvas" in app
    assert "position:'absolute'" in app
    assert "item.node||" in canvas
    assert "(e.clientX-bounds.left)/state.zoom" in canvas


def test_selection_supports_shift_multiselect_and_keyboard_nudging():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    canvas = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    store = (ROOT / "studio" / "store.ts").read_text(encoding="utf-8")
    assert "e.shiftKey?(isSelected?" in canvas
    assert "NUDGE_SELECTED" in app
    assert "case 'NUDGE_SELECTED'" in store
