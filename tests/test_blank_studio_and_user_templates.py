from __future__ import annotations

import json
from pathlib import Path

from sqlalchemy import text

from app.db import SessionLocal
from app.config import settings
from app.studio_document import validate_studio_document
from tests.test_api import auth_client, reset_db


def _blank_site(client, headers, name: str = "Untitled website") -> dict:
    response = client.post("/api/sites/blank", headers=headers, json={"name": name})
    assert response.status_code == 200, response.text
    return response.json()


def test_create_website_opens_a_truly_blank_home_document_without_ai_charge():
    reset_db()
    client, headers = auth_client("blank-owner@example.com", "Blank Owner")
    before = client.get("/api/auth/me").json()["ai_credits"]

    created = _blank_site(client, headers)

    assert created["origin"] == "MANUAL"
    assert created["studio_url"] == f"/studio/{created['id']}"
    site = client.get(f"/api/sites/{created['id']}").json()
    assert site["origin"] == "MANUAL"
    assert site["page_count"] == 1
    assert client.get("/api/auth/me").json()["ai_credits"] == before
    with SessionLocal() as db:
        raw = db.execute(
            text("SELECT studio_document_json FROM sites WHERE id=:site"),
            {"site": created["id"]},
        ).scalar_one()
    document = validate_studio_document(json.loads(raw))
    assert list(document.pages) == ["home"]
    home = document.pages["home"]
    assert home.name == "Home"
    assert home.rootNodeId == "root"
    assert home.nodes["root"].children == []


def test_private_user_template_is_sanitized_isolated_and_cloned_with_fresh_ids():
    reset_db()
    owner, owner_headers = auth_client("template-owner@example.com", "Template Owner")
    created = _blank_site(owner, owner_headers, "Reusable launch")
    site_id = created["id"]
    with SessionLocal() as db:
        raw = json.loads(
            db.execute(
                text("SELECT studio_document_json FROM sites WHERE id=:site"),
                {"site": site_id},
            ).scalar_one()
        )
    home = raw["pages"]["home"]
    home["nodes"]["hero_title"] = {
        "id": "hero_title",
        "type": "text",
        "parentId": "root",
        "children": [],
        "content": {"text": "A reusable title"},
        "style": {"css": {"position": "absolute", "left": "80px", "top": "64px"}},
        "metadata": {"label": "Main title"},
    }
    home["nodes"]["root"]["children"] = ["hero_title"]
    raw["dataSources"] = {"private_customer_records": {"token": "never-copy"}}
    raw["settings"] = {"apiKey": "never-copy", "pageBackground": "#fff"}
    saved = owner.post(f"/api/sites/{site_id}/studio-save", headers=owner_headers, json=raw)
    assert saved.status_code == 200, saved.text

    snapshot = owner.post(
        f"/api/sites/{site_id}/user-templates",
        headers=owner_headers,
        json={"name": "My launch", "description": "Private reusable layout"},
    )
    assert snapshot.status_code == 200, snapshot.text
    template_id = snapshot.json()["id"]
    listed = owner.get("/api/user-templates").json()["items"]
    assert [item["id"] for item in listed] == [template_id]
    assert listed[0]["visibility"] == "PRIVATE"

    with SessionLocal() as db:
        stored = json.loads(
            db.execute(
                text("SELECT document_json FROM user_site_templates WHERE id=:template"),
                {"template": template_id},
            ).scalar_one()
        )
    assert stored["dataSources"] == {}
    assert "apiKey" not in stored["settings"]
    assert stored["settings"]["pageBackground"] == "#fff"

    intruder, intruder_headers = auth_client("template-intruder@example.com", "Intruder")
    assert intruder.get("/api/user-templates").json()["items"] == []
    denied = intruder.post(
        f"/api/user-templates/{template_id}/create",
        headers=intruder_headers,
        json={"name": "Stolen"},
    )
    assert denied.status_code == 404

    cloned_response = owner.post(
        f"/api/user-templates/{template_id}/create",
        headers=owner_headers,
        json={"name": "Cloned launch"},
    )
    assert cloned_response.status_code == 200, cloned_response.text
    clone_id = cloned_response.json()["id"]
    with SessionLocal() as db:
        clone = json.loads(
            db.execute(
                text("SELECT studio_document_json FROM sites WHERE id=:site"),
                {"site": clone_id},
            ).scalar_one()
        )
    validate_studio_document(clone)
    source_page = next(iter(stored["pages"].values()))
    clone_page = next(iter(clone["pages"].values()))
    assert set(source_page["nodes"]).isdisjoint(clone_page["nodes"])
    assert source_page["id"] != clone_page["id"]
    clone_title = next(node for node in clone_page["nodes"].values() if node["type"] == "text")
    clone_title["content"]["text"] = "Changed only in clone"
    assert next(node for node in source_page["nodes"].values() if node["type"] == "text")["content"]["text"] == "A reusable title"


def test_optional_studio_ai_mutates_same_document_and_advances_revision(monkeypatch):
    reset_db()
    client, headers = auth_client("studio-ai@example.com", "Studio AI")
    site_id = _blank_site(client, headers, "AI optional")["id"]
    document = client.post(f"/api/sites/{site_id}/studio-migrate", headers=headers).json()["document"]
    page = document["pages"]["home"]
    page["nodes"]["manual_title"] = {
        "id": "manual_title", "type": "heading", "parentId": page["rootNodeId"], "children": [],
        "content": {"text": "Manual title"},
        "style": {"css": {"position": "absolute", "left": "120px", "top": "80px", "width": "420px"}, "tokens": {}},
        "metadata": {"displayName": "Main title"},
    }
    page["nodes"][page["rootNodeId"]]["children"].append("manual_title")
    saved = client.post(f"/api/sites/{site_id}/studio-save", headers=headers, json=document)
    assert saved.status_code == 200, saved.text
    monkeypatch.setattr(settings, "openai_api_key", "")
    edited = client.post(
        f"/api/sites/{site_id}/ai-edit",
        headers={**headers, "Idempotency-Key": "optional-ai-edit"},
        json={"instruction": "Make this heading bigger", "page": "home", "selection": ["manual_title"]},
    )
    assert edited.status_code == 200, edited.text
    result = edited.json()
    assert result["provider"] == "local"
    assert result["structure"]["revision"] == saved.json()["newRevision"] + 1
    title = result["structure"]["pages"]["home"]["nodes"]["manual_title"]
    assert title["style"]["css"]["fontSize"] == "48px"
    assert title["style"]["css"]["left"] == "120px"
    assert title["style"]["css"]["top"] == "80px"
    assert title["content"]["text"] == "Manual title"


def test_studio_source_contract_is_blank_first_and_asset_driven():
    root = Path(__file__).resolve().parents[1]
    dashboard = (root / "static" / "dashboard.js").read_text(encoding="utf-8")
    app_source = (root / "studio" / "App.tsx").read_text(encoding="utf-8")
    add_panel = (root / "studio" / "components" / "AddPanel.tsx").read_text(encoding="utf-8")
    assert "/api/sites/blank" in dashboard and "/ai-create" not in dashboard and "/api/templates" not in dashboard
    assert "'sections', 'Sections'" in app_source and "'ai', 'AI'" in app_source
    assert "INSERT_SUBTREE" in app_source and "Save as Template" in app_source
    for section in ("Header / Navbar", "Hero", "Features", "Services", "About", "Gallery", "Logo strip", "Statistics", "Testimonials", "Pricing", "Team", "FAQ", "Contact", "CTA", "Footer"):
        assert section in add_panel
    for element in ("Rectangle", "Circle", "Line", "Button", "Card", "Container", "Icon", "Badge", "Spacer"):
        assert element in add_panel
    for frame in ("Square frame", "Portrait frame", "Landscape frame", "Circle frame", "Rounded frame"):
        assert frame in add_panel
