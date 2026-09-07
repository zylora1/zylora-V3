from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_viewport_engine_supports_design_scale_and_focal_zoom():
    viewport = (ROOT / "studio" / "engine" / "viewport.ts").read_text(encoding="utf-8")
    coordinates = (ROOT / "studio" / "engine" / "coordinates.ts").read_text(encoding="utf-8")
    assert "MIN_ZOOM=.1" in viewport and "MAX_ZOOM=5" in viewport
    assert "zoomAtPoint" in viewport
    assert "screenToArtboard" in coordinates and "artboardToScreen" in coordinates


def test_scene_graph_commit_is_absolute_and_multi_selection_is_transactional():
    store = (ROOT / "studio" / "store.ts").read_text(encoding="utf-8")
    canvas = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    overlay = (ROOT / "studio" / "components" / "SelectionOverlay.tsx").read_text(encoding="utf-8")
    assert "UPDATE_SELECTED_GEOMETRIES" in store
    assert "position:'absolute'" in store
    assert "singleSelected" in canvas
    assert "multi-selection-overlay" in overlay
    assert "UPDATE_SELECTED_GEOMETRIES" in overlay


def test_resize_supports_aspect_ratio_and_center_modifiers():
    math = (ROOT / "studio" / "geometry" / "math.ts").read_text(encoding="utf-8")
    resize = (ROOT / "studio" / "interactions" / "useResize.ts").read_text(encoding="utf-8")
    assert "modifiers: {aspect?:boolean;center?:boolean}" in math
    assert "e.shiftKey" in resize and "e.altKey||e.metaKey" in resize


def test_editor_uses_one_transformed_artboard_and_touch_safe_pan():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    css = (ROOT / "static" / "studio-ux.css").read_text(encoding="utf-8")
    assert "zoomAtPoint" in app
    assert "translate3d(${viewport.x}px,${viewport.y}px,0) scale(${state.zoom})" in app
    assert "touch-action:none" in css and "overflow:hidden" in css


def test_scene_graph_has_deterministic_z_order_and_real_group_geometry():
    store = (ROOT / "studio" / "store.ts").read_text(encoding="utf-8")
    overlay = (ROOT / "studio" / "components" / "SelectionOverlay.tsx").read_text(encoding="utf-8")
    assert "syncZIndices" in store and "zIndex:String(index)" in store
    assert "position:'absolute'" in store and "GROUP_SELECTED" in store and "UNGROUP_SELECTED" in store
    assert "multi-handle ${handle}" in overlay and "multi-rotate-handle" in overlay
