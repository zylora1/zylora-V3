"""Contract tests for the authenticated REST and MCP agent gateway."""

from copy import deepcopy
from uuid import uuid4
import json
import pytest

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.db import SessionLocal, migrate
from app.main import app
from app.security import clear_rate_limits


def _owner(label: str):
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        db.execute(text("DELETE FROM rate_limit_buckets"))
    client = TestClient(app)
    signup = client.post(
        "/api/auth/signup",
        json={
            "name": f"Gateway {label}",
            "email": f"gateway-{label.lower()}-{uuid4().hex}@example.com",
            "password": "GatewayTest123!",
        },
    )
    assert signup.status_code == 200, signup.text
    payload = signup.json()
    verify = client.post("/api/auth/email/verify", json={"token": payload["debug_verification_token"]})
    assert verify.status_code == 200, verify.text
    headers = {"X-CSRF-Token": payload["csrf_token"]}
    billing = client.post("/api/billing/select", headers=headers, json={"plan": "FREE"})
    assert billing.status_code == 200, billing.text
    site = client.post("/api/sites/blank", headers=headers, json={"name": f"Gateway {label} site"})
    assert site.status_code == 200, site.text
    site_id = site.json()["id"]
    migrated = client.post(f"/api/sites/{site_id}/studio-migrate", headers=headers)
    assert migrated.status_code == 200, migrated.text
    return client, headers, site_id, migrated.json()["document"]


def _connector(client, headers, scopes, site_ids=None, *, all_sites=False):
    response = client.post(
        "/api/agent/connectors",
        headers=headers,
        json={"name": "CI connector", "scopes": scopes, "site_ids": site_ids or [], "all_sites": all_sites},
    )
    assert response.status_code == 200, response.text
    body = response.json()
    assert body.get("token")
    assert "token_hash" not in body
    token = body["token"]
    listing = client.get("/api/agent/connectors", headers=headers)
    assert listing.status_code == 200, listing.text
    assert all("token" not in item and "token_hash" not in item for item in listing.json()["items"])
    return body, {"Authorization": f"Bearer {token}"}


def _patch(site_id, base_revision, *, text_value="Hello from an agent"):
    return {
        "site_id": site_id,
        "base_revision": base_revision,
        "operations": [
            {
                "type": "INSERT_NODE",
                "pageId": "home",
                "parentId": "section_1",
                "node": {
                    "id": f"agent_{uuid4().hex[:10]}",
                    "type": "paragraph",
                    "content": {"text": text_value},
                    "style": {"css": {"color": "#222222"}},
                    "geometry": {"x": 20, "y": 20, "width": 400, "height": 40, "mode": "freeform"},
                },
            }
        ],
    }


def test_connector_scopes_patch_cas_and_idempotency():
    client, headers, site_id, document = _owner("patch")
    connector, agent_headers = _connector(client, headers, ["account.read", "sites.read", "sites.edit"], [site_id])

    registry = client.get("/api/agent/registry", headers=headers)
    assert registry.status_code == 200, registry.text
    assert registry.json()["registry"]["surface"]["status"] == "PROTOCOL_COMPATIBLE"
    assert registry.json()["brand_assets"]["third_party_assets"] == []

    capabilities = client.get("/api/agent/capabilities", headers=agent_headers)
    assert capabilities.status_code == 200, capabilities.text
    assert set(capabilities.json()["scopes"]) == {"account.read", "sites.read", "sites.edit"}
    tools = client.get("/api/agent/tools", headers=agent_headers)
    assert tools.status_code == 200, tools.text
    names = {item["name"] for item in tools.json()["tools"]}
    assert "zylora.apply_site_patch" in names
    assert "zylora.publish_site" not in names

    current = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.get_site_revision", "arguments": {"site_id": site_id}, "idempotency_key": "read-1"},
    )
    assert current.status_code == 200, current.text
    base = current.json()["revision"]
    request = _patch(site_id, base)
    request["idempotency_key"] = "patch-1"
    first = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.apply_site_patch", "arguments": request})
    assert first.status_code == 200, first.text
    assert first.json()["revision"] == base + 1
    after_first = client.get("/api/agent/tools", headers=agent_headers)
    assert after_first.status_code == 200

    replay = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.apply_site_patch", "arguments": request})
    assert replay.status_code == 200, replay.text
    assert replay.json() == first.json()

    changed = deepcopy(request)
    changed["operations"][0]["node"]["content"]["text"] = "different payload"
    conflict = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.apply_site_patch", "arguments": changed})
    assert conflict.status_code == 409, conflict.text
    assert conflict.json()["detail"]["code"] == "IDEMPOTENCY_CONFLICT"

    stale = _patch(site_id, base, text_value="stale")
    stale["idempotency_key"] = "patch-stale"
    response = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.apply_site_patch", "arguments": stale})
    assert response.status_code == 409, response.text
    assert response.json()["detail"]["code"] == "STALE_REVISION"

    unsafe = _patch(site_id, base + 1, text_value="<script>alert(1)</script>")
    unsafe["idempotency_key"] = "patch-unsafe"
    rejected = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.apply_site_patch", "arguments": unsafe})
    assert rejected.status_code == 422, rejected.text
    assert rejected.json()["detail"]["code"] == "UNSAFE_PATCH"

    structure = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.get_site_structure", "arguments": {"site_id": site_id}, "idempotency_key": "structure-1"},
    )
    assert structure.status_code == 200, structure.text
    assert any(
        node.get("content", {}).get("text") == "Hello from an agent"
        for node in structure.json()["document"]["pages"]["home"]["nodes"].values()
    )
    client.close()


def test_external_agent_create_page_publish_scope_and_revoke_continuity():
    client, headers, _, _ = _owner("continuity")
    scopes = ["account.read", "sites.read", "sites.edit", "sites.create", "sites.publish"]
    _, agent_headers = _connector(client, headers, scopes, all_sites=True)

    created = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.create_site", "arguments": {"name": "Cross Client Studio", "description": "A site created through the universal gateway."}, "idempotency_key": "create-continuity-1"},
    )
    assert created.status_code == 200, created.text
    site_id = created.json()["site_id"]
    assert created.json()["revision"] == 1
    assert client.get(f"/api/sites/{site_id}", headers=headers).status_code == 200
    listed = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.list_sites", "arguments": {}})
    assert listed.status_code == 200 and any(item["id"] == site_id for item in listed.json()["items"])

    page_revision = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.get_site_revision", "arguments": {"site_id": site_id}}).json()["revision"]
    added = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.add_page", "arguments": {"site_id": site_id, "base_revision": page_revision, "name": "Services", "slug": "services", "idempotency_key": "page-continuity-1"}},
    )
    assert added.status_code == 200, added.text
    assert added.json()["page_count"] == 2
    assert "services" in {page["slug"] for page in added.json()["document"]["pages"].values()}

    readonly_publish, readonly_headers = _connector(client, headers, ["account.read", "sites.read", "sites.edit"], [site_id])
    denied = client.post("/api/agent/invoke", headers=readonly_headers, json={"tool": "zylora.publish_site", "arguments": {"site_id": site_id, "idempotency_key": "publish-denied-1"}})
    assert denied.status_code == 403, denied.text
    assert denied.json()["detail"]["code"] == "FORBIDDEN_SCOPE"

    latest = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.get_site_revision", "arguments": {"site_id": site_id}}).json()["revision"]
    published = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.publish_site", "arguments": {"site_id": site_id, "base_revision": latest, "selected_plan": "FREE", "confirm_free_structural_reset": True, "idempotency_key": "publish-continuity-1"}},
    )
    assert published.status_code == 200, published.text
    assert published.json()["ok"] is True
    assert client.get(f"/api/sites/{site_id}", headers=headers).json()["status"] == "LIVE"

    connector_id = next(item["id"] for item in client.get("/api/agent/connectors", headers=headers).json()["items"] if "sites.create" in item["scopes"])
    assert client.post(f"/api/agent/connectors/{connector_id}/revoke", headers=headers).status_code == 200
    revoked = client.post("/api/agent/invoke", headers=agent_headers, json={"tool": "zylora.list_sites", "arguments": {}})
    assert revoked.status_code == 401, revoked.text
    assert client.get(f"/api/sites/{site_id}", headers=headers).json()["status"] == "LIVE"
    client.close()


def test_read_only_scope_and_allowlist_revoke_and_cross_tenant():
    client, headers, site_id, _ = _owner("readonly")
    _, readonly_headers = _connector(client, headers, ["account.read", "sites.read"], [site_id])
    read = client.post(
        "/api/agent/invoke",
        headers=readonly_headers,
        json={"tool": "zylora.list_sites", "arguments": {}, "idempotency_key": "list-1"},
    )
    assert read.status_code == 200, read.text
    denied = client.post(
        "/api/agent/invoke",
        headers=readonly_headers,
        json={"tool": "zylora.apply_site_patch", "arguments": {"site_id": site_id, "base_revision": 1, "operations": []}},
    )
    assert denied.status_code == 403, denied.text
    assert denied.json()["detail"]["code"] == "FORBIDDEN_SCOPE"

    other, other_headers, other_site, _ = _owner("foreign")
    cross = client.post(
        "/api/agent/invoke",
        headers=readonly_headers,
        json={"tool": "zylora.get_site_revision", "arguments": {"site_id": other_site}, "idempotency_key": "foreign-1"},
    )
    assert cross.status_code == 403, cross.text
    assert cross.json()["detail"]["code"] == "SITE_NOT_ALLOWED"

    created = client.get("/api/agent/connectors", headers=headers).json()["items"]
    connector_id = created[0]["id"]
    revoked = client.post(f"/api/agent/connectors/{connector_id}/revoke", headers=headers)
    assert revoked.status_code == 200, revoked.text
    assert client.get("/api/agent/capabilities", headers=readonly_headers).status_code == 401
    other.close()
    client.close()


@pytest.mark.skip(reason="Penpot retired in favor of native studio and Onlook code engine")
def test_penpot_projection_and_interaction_use_canonical_revision_cas():
    client, headers, site_id, document = _owner("penpot")
    _, agent_headers = _connector(client, headers, ["account.read", "sites.read", "sites.edit"], [site_id])

    projection = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.get_penpot_projection", "arguments": {"site_id": site_id}},
    )
    assert projection.status_code == 200, projection.text
    body = projection.json()
    assert body["projection"]["source"] == "zylora-site-document"
    assert body["projection"]["capabilities"]["marquee"] is True
    assert any(item["metadata"].get("businessComponent") is False for item in body["projection"]["page"]["objects"])

    revision = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.get_site_revision", "arguments": {"site_id": site_id}},
    ).json()["revision"]
    interaction = {
        "type": "drag",
        "pageId": "home",
        "nodeId": "section_1",
        "delta": {"x": 24, "y": 12},
    }
    missing_key = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.apply_penpot_interaction", "arguments": {"site_id": site_id, "base_revision": revision, "interaction": interaction}},
    )
    assert missing_key.status_code == 422
    assert missing_key.json()["detail"]["code"] == "MISSING_IDEMPOTENCY_KEY"
    edited = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={
            "tool": "zylora.apply_penpot_interaction",
            "arguments": {"site_id": site_id, "base_revision": revision, "interaction": interaction, "idempotency_key": "penpot-edit-1"},
        },
    )
    assert edited.status_code == 200, edited.text
    assert edited.json()["revision"] == revision + 1
    assert edited.json()["operations"][0]["type"] == "UPDATE_GEOMETRY"

    stale = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={
            "tool": "zylora.apply_penpot_interaction",
            "arguments": {"site_id": site_id, "base_revision": revision, "interaction": interaction, "idempotency_key": "penpot-stale-1"},
        },
    )
    assert stale.status_code == 409, stale.text
    assert stale.json()["detail"]["code"] == "STALE_REVISION"
    structure = client.post(
        "/api/agent/invoke",
        headers=agent_headers,
        json={"tool": "zylora.get_site_structure", "arguments": {"site_id": site_id}},
    )
    assert structure.status_code == 200, structure.text
    section = structure.json()["document"]["pages"]["home"]["nodes"]["section_1"]
    assert section["geometry"]["x"] == 24 and section["geometry"]["y"] == 12
    client.close()


def test_mcp_initialize_tools_and_call_share_rest_contract():
    client, headers, site_id, _ = _owner("mcp")
    _, agent_headers = _connector(client, headers, ["account.read", "sites.read"], [site_id])

    initialize = client.post(
        "/mcp",
        headers=agent_headers,
        json={"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2025-06-18"}},
    )
    assert initialize.status_code == 200, initialize.text
    assert initialize.json()["result"]["protocolVersion"] == "2025-06-18"
    listed = client.post("/mcp", headers=agent_headers, json={"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}})
    assert listed.status_code == 200, listed.text
    assert "zylora.get_site_revision" in {tool["name"] for tool in listed.json()["result"]["tools"]}
    called = client.post(
        "/mcp",
        headers=agent_headers,
        json={
            "jsonrpc": "2.0",
            "id": 3,
            "method": "tools/call",
            "params": {"name": "zylora.get_site_revision", "arguments": {"site_id": site_id, "idempotency_key": "mcp-1"}},
        },
    )
    assert called.status_code == 200, called.text
    assert called.json()["result"]["structuredContent"]["site_id"] == site_id
    assert client.post("/mcp", headers=agent_headers, json={"jsonrpc": "2.0", "id": 4, "method": "nope"}).json()["error"]["code"] == -32601
    client.close()
