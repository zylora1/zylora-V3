from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def test_crop_and_section_reorder_contracts_are_present():
    store = (ROOT / "studio" / "store.ts").read_text(encoding="utf-8")
    canvas = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    layers = (ROOT / "studio" / "components" / "LayersPanel.tsx").read_text(encoding="utf-8")
    assert "cropNodeId" in store
    assert "UPDATE_NODE_CROP" in store
    assert "REORDER_SECTION" in store
    assert "crop-toolbar" in canvas
    assert "Zoom in crop" in canvas
    assert "data-layer-node-id" in layers
    assert "studio/section-id" in layers


def test_pan_contract_does_not_mutate_document_geometry():
    app = (ROOT / "studio" / "App.tsx").read_text(encoding="utf-8")
    canvas = (ROOT / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    assert "button===1" in app
    assert "__zyloraSpacePressed" in app
    assert "button===1" in canvas
    assert "UPDATE_NODE_GEOMETRY" in canvas


def test_crop_is_backward_compatible_in_document_and_renderer():
    document = (ROOT / "app" / "studio_document.py").read_text(encoding="utf-8")
    renderer = (ROOT / "app" / "studio_renderer.py").read_text(encoding="utf-8")
    assert "class NodeCrop" in document
    assert "crop: Optional[NodeCrop]" in document
    assert "object-position" in renderer
    assert "overflow:hidden" in renderer
