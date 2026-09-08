from pathlib import Path
import io

from PIL import Image

from app.studio_document import Gradient, GradientStop, NodeContent, NodeStyle, TextRun, create_empty_document, validate_studio_document
from app.studio_renderer import render_page


def test_blank_studio_starts_with_one_root_desktop_artboard():
    document = create_empty_document()
    page = document.pages["home"]
    section = page.nodes[page.nodes[page.rootNodeId].children[0]]

    assert section.type == "section"
    assert section.parentId == page.rootNodeId
    assert section.style.css["width"] == "1440px"
    assert section.style.css["height"] == "810px"


def test_rich_text_runs_and_structured_gradient_round_trip_to_published_html():
    document = create_empty_document()
    page = document.pages["home"]
    section_id = page.nodes[page.rootNodeId].children[0]
    section = page.nodes[section_id]
    section.children = ["headline"]
    section.style.gradient = Gradient(
        type="linear",
        angle=135,
        stops=[
            GradientStop(position=0, color="#ffffff", opacity=1),
            GradientStop(position=0.5, color="#7c3aed", opacity=0.9),
            GradientStop(position=1, color="#ec4899", opacity=1),
        ],
    )
    page.nodes["headline"] = __import__("app.studio_document", fromlist=["Node"]).Node(
        id="headline",
        type="heading",
        parentId=section_id,
        content=NodeContent(
            text="Design your future today",
            runs=[
                TextRun(start=13, end=19, marks={"fontFamily": "Georgia", "fontSize": "52px", "fontWeight": "700", "color": "#7c3aed"}),
                TextRun(start=20, end=25, marks={"gradient": Gradient(type="radial", stops=[GradientStop(position=0, color="#06b6d4"), GradientStop(position=1, color="#ec4899")])}),
            ],
        ),
    )

    checked = validate_studio_document(document.model_dump())
    html = render_page(checked, "home")

    assert 'font-family:Georgia' in html
    assert 'font-size:52px' in html
    assert 'font-weight:700' in html
    assert 'linear-gradient(135.0deg' in html
    assert 'radial-gradient(circle' in html


def test_section_insert_and_upload_replace_contracts_are_explicit():
    root = Path(__file__).resolve().parents[1]
    store = (root / "studio" / "store.ts").read_text(encoding="utf-8")
    navigator = (root / "studio" / "components" / "PageNavigator.tsx").read_text(encoding="utf-8")
    canvas = (root / "studio" / "components" / "CanvasNode.tsx").read_text(encoding="utf-8")
    assets = (root / "studio" / "components" / "AssetsPanel.tsx").read_text(encoding="utf-8")

    assert "type:'ADD_SECTION'" in store
    assert "isSection?page.rootNodeId" in store
    assert "width:'1440px'" in store and "height:'810px'" in store
    assert "dispatch({type:'ADD_SECTION'})" in navigator
    assert "application/x-zylora-asset" in canvas
    assert "detail?.message" in assets


def test_media_upload_accepts_jpeg_png_and_webp_with_actionable_errors():
    from tests.test_api import auth_client, create_site, reset_db
    from tests.billing_helpers import activate_zylora

    reset_db()
    client, headers = auth_client("studio-media-matrix@example.com", "Studio Media Matrix")
    activate_zylora(client, headers, country="GB")
    site_id = create_site(client, headers, "Studio Media Matrix")
    for extension, media_type, image_format in (("jpg", "image/jpeg", "JPEG"), ("jpeg", "image/jpeg", "JPEG"), ("png", "image/png", "PNG"), ("webp", "image/webp", "WEBP")):
        output = io.BytesIO()
        Image.new("RGB", (320, 180), (18, 84, 140)).save(output, format=image_format)
        response = client.post(f"/api/sites/{site_id}/assets", headers=headers, files={"file": (f"matrix.{extension}", output.getvalue(), media_type)})
        assert response.status_code == 200, response.text
        assert response.json()["asset"]["mime_type"] == media_type

    invalid = client.post(
        f"/api/sites/{site_id}/assets",
        headers=headers,
        files={"file": ("broken.jpg", b"not-an-image", "image/jpeg")},
    )
    assert invalid.status_code == 422
    assert invalid.json()["detail"]["code"] == "MEDIA_UPLOAD_INVALID"
    assert "broken.jpg" in invalid.json()["detail"]["message"]


def test_unknown_public_route_is_a_branded_http_404():
    from fastapi.testclient import TestClient
    from app.main import app

    response = TestClient(app).get("/definitely-not-a-zylora-route")
    assert response.status_code == 404
    assert response.headers["content-type"].startswith("text/html")
    assert "Page not found" in response.text
    assert "/dashboard" in response.text


def test_publish_plan_catalogue_is_server_authoritative_and_not_legacy_ui_data():
    from fastapi.testclient import TestClient
    from app.main import app

    response = TestClient(app).get("/api/public/plans")
    assert response.status_code == 200
    plans = response.json()["items"]
    assert [plan["plan"] for plan in plans] == ["FREE", "STARTER", "GROWTH", "PRO"]
    assert all("price_inr_minor" in plan and "price_usd_minor" in plan and "page_limit" in plan for plan in plans)
