"""Authenticated REST and MCP gateway for deterministic Zylora site automation.

The transport handlers in this module are intentionally thin.  REST ``invoke``
and MCP ``tools/call`` both dispatch through :func:`invoke_tool`, so scope,
tenant, revision, validation, and idempotency rules cannot drift between
clients.
"""

from __future__ import annotations

from datetime import datetime, timezone
import hashlib
import json
import re
import secrets
from typing import Any
from uuid import uuid4

from fastapi import APIRouter, Header, HTTPException, Request
from fastapi.responses import JSONResponse, Response
from pydantic import BaseModel, Field, field_validator
from sqlalchemy import text

from .db import SessionLocal, now_iso
from .config import ROOT, settings
from .security import current_user, require_csrf, durable_rate_limit
from .studio_document import validate_studio_document
from .studio_mutations import StudioMutationConflict, add_page, apply_operations, commit_document, create_agent_site, preview_operations
from .plans import MAX_PAGES_PER_SITE



router = APIRouter(prefix="/api/agent")
mcp_router = APIRouter()

ALLOWED_SCOPES = {"account.read", "sites.read", "sites.edit", "sites.create", "sites.publish"}
_SCOPE_ORDER = ("account.read", "sites.read", "sites.edit", "sites.create", "sites.publish")


class ConnectorCreateIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    scopes: list[str] = Field(default_factory=lambda: ["account.read"])
    site_ids: list[str] = Field(default_factory=list, max_length=200)
    all_sites: bool = False
    expires_at: str | None = None

    @field_validator("name")
    @classmethod
    def clean_name(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("Connector name is required")
        return value

    @field_validator("scopes")
    @classmethod
    def valid_scopes(cls, values: list[str]) -> list[str]:
        unique = list(dict.fromkeys(str(value).strip() for value in values))
        invalid = sorted(set(unique) - ALLOWED_SCOPES)
        if invalid:
            raise ValueError(f"Unsupported connector scope: {', '.join(invalid)}")
        if not unique:
            raise ValueError("At least one connector scope is required")
        return [scope for scope in _SCOPE_ORDER if scope in unique]


class InvokeIn(BaseModel):
    tool: str = Field(min_length=1, max_length=120)
    arguments: dict[str, Any] = Field(default_factory=dict)
    idempotency_key: str | None = Field(default=None, min_length=1, max_length=160)


TOOL_SPECS: tuple[dict[str, Any], ...] = (
    {
        "name": "zylora.get_capabilities",
        "description": "Return the connector's available scopes and protocol capabilities.",
        "scope": "account.read",
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "zylora.list_sites",
        "description": "List the sites visible to this connector.",
        "scope": "sites.read",
        "inputSchema": {"type": "object", "properties": {}, "additionalProperties": False},
    },
    {
        "name": "zylora.create_site",
        "description": "Create a blank hosted Zylora site with a canonical SiteDocument.",
        "scope": "sites.create",
        "inputSchema": {
            "type": "object",
            "required": ["name"],
            "properties": {
                "name": {"type": "string", "minLength": 2, "maxLength": 120},
                "description": {"type": "string", "maxLength": 6000},
            },
            "additionalProperties": False,
        },
    },
    {
        "name": "zylora.get_site_revision",
        "description": "Read the current canonical Studio revision for a site.",
        "scope": "sites.read",
        "inputSchema": {
            "type": "object",
            "required": ["site_id"],
            "properties": {"site_id": {"type": "string"}},
            "additionalProperties": False,
        },
    },
    {
        "name": "zylora.get_site_structure",
        "description": "Read the validated canonical SiteDocument for a site.",
        "scope": "sites.read",
        "inputSchema": {
            "type": "object",
            "required": ["site_id"],
            "properties": {"site_id": {"type": "string"}},
            "additionalProperties": False,
        },
    },
    {
        "name": "zylora.apply_site_patch",
        "description": "Apply typed patch operations to the canonical SiteDocument with concurrency protection.",
        "scope": "sites.edit",
        "inputSchema": {
            "type": "object",
            "required": ["site_id", "base_revision", "operations"],
            "properties": {
                "site_id": {"type": "string"},
                "base_revision": {"type": "integer", "minimum": 0},
                "operations": {"type": "array", "maxItems": 100},
                "dry_run": {"type": "boolean"},
                "idempotency_key": {"type": "string", "maxLength": 160},
            },
            "additionalProperties": False,
        },
    },
    {
        "name": "zylora.add_page",
        "description": "Add a page to the canonical SiteDocument with an exact base revision.",
        "scope": "sites.edit",
        "inputSchema": {
            "type": "object",
            "required": ["site_id", "base_revision", "name", "slug"],
            "properties": {
                "site_id": {"type": "string"},
                "base_revision": {"type": "integer", "minimum": 0},
                "name": {"type": "string", "minLength": 1, "maxLength": 80},
                "slug": {"type": "string", "minLength": 1, "maxLength": 80},
                "idempotency_key": {"type": "string", "maxLength": 160},
            },
            "additionalProperties": False,
        },
    },
    {
        "name": "zylora.publish_site",
        "description": "Publish a site through the normal Zylora publisher after explicit publish authorization.",
        "scope": "sites.publish",
        "inputSchema": {
            "type": "object",
            "required": ["site_id"],
            "properties": {
                "site_id": {"type": "string"},
                "base_revision": {"type": "integer", "minimum": 0},
                "selected_plan": {"type": "string", "enum": ["FREE", "STARTER", "GROWTH"]},
                "confirm_free_structural_reset": {"type": "boolean"},
                "idempotency_key": {"type": "string", "maxLength": 160},
            },
            "additionalProperties": False,
        },
    },
)
_TOOLS_BY_NAME = {item["name"]: item for item in TOOL_SPECS}


def _problem(status: int, code: str, message: str, **extra: Any) -> HTTPException:
    detail = {"code": code, "message": message}
    detail.update(extra)
    return HTTPException(status_code=status, detail=detail)


def _parse_iso(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        parsed = datetime.fromisoformat(str(value).replace("Z", "+00:00"))
    except ValueError as exc:
        raise _problem(422, "INVALID_EXPIRY", "expires_at must be an ISO-8601 timestamp.") from exc
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def _scopes(connector: dict[str, Any]) -> list[str]:
    try:
        raw = json.loads(connector.get("scopes_json") or "[]")
    except (TypeError, ValueError):
        raw = []
    return [scope for scope in _SCOPE_ORDER if scope in raw]


def _allowed_site_ids(connector: dict[str, Any]) -> set[str] | None:
    raw = connector.get("site_ids_json")
    if raw in (None, "", "null"):
        return None
    try:
        parsed = json.loads(raw)
    except (TypeError, ValueError):
        return set()
    return {str(value) for value in parsed if str(value).strip()} if isinstance(parsed, list) else set()


def _connector_public(row: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": row["id"],
        "name": row["name"],
        "scopes": _scopes(row),
        "site_ids": sorted(_allowed_site_ids(row) or []),
        "all_sites": _allowed_site_ids(row) is None,
        "status": row["status"],
        "expires_at": row.get("expires_at"),
        "created_at": row["created_at"],
        "revoked_at": row.get("revoked_at"),
        "last_used_at": row.get("last_used_at"),
    }


def issue_connector(
    db,
    *,
    user_id: str,
    name: str,
    scopes: list[str],
    site_ids: list[str] | None = None,
    all_sites: bool = False,
    expires_at: str | None = None,
    audience: str | None = None,
) -> tuple[str, dict[str, Any]]:
    """Issue one opaque connector token for both dashboard and OAuth clients."""
    raw_token = "zylora_ag_" + secrets.token_urlsafe(32)
    connector_id = str(uuid4())
    normalized_sites = sorted(set(str(value) for value in (site_ids or []) if str(value).strip()))
    row = {
        "id": connector_id,
        "user_id": user_id,
        "name": name.strip()[:120],
        "token_hash": hashlib.sha256(raw_token.encode("utf-8")).hexdigest(),
        "scopes_json": json.dumps(scopes, separators=(",", ":")),
        "site_ids_json": None if all_sites or not normalized_sites else json.dumps(normalized_sites, separators=(",", ":")),
        "status": "ACTIVE",
        "expires_at": expires_at,
        "created_at": now_iso(),
        "audience": audience,
    }
    db.execute(text("""INSERT INTO agent_connectors(id,user_id,name,token_hash,scopes_json,site_ids_json,status,expires_at,created_at,audience)
        VALUES (:id,:user_id,:name,:token_hash,:scopes_json,:site_ids_json,:status,:expires_at,:created_at,:audience)"""), row)
    return raw_token, row


def _session_user(request: Request, csrf: bool = False) -> dict[str, Any]:
    user = current_user(request)
    if csrf:
        require_csrf(request, user, request.headers.get("X-CSRF-Token"))
    return user


def _authenticate_agent(authorization: str | None) -> tuple[dict[str, Any], dict[str, Any]]:
    if not authorization or not authorization.lower().startswith("bearer "):
        raise _problem(401, "UNAUTHENTICATED", "A connector bearer token is required.")
    raw_token = authorization[7:].strip()
    if not raw_token or len(raw_token) > 512:
        raise _problem(401, "UNAUTHENTICATED", "A connector bearer token is required.")
    digest = hashlib.sha256(raw_token.encode("utf-8")).hexdigest()
    with SessionLocal() as db:
        row = db.execute(
            text("""SELECT c.*, u.email, u.name AS user_name, u.status AS user_status
                   FROM agent_connectors c JOIN users u ON u.id=c.user_id
                   WHERE c.token_hash=:token_hash"""),
            {"token_hash": digest},
        ).mappings().first()
    if not row:
        raise _problem(401, "UNAUTHENTICATED", "The connector token is invalid.")
    connector = dict(row)
    if str(connector.get("status") or "").upper() != "ACTIVE":
        raise _problem(401, "TOKEN_REVOKED", "The connector token has been revoked.")
    if str(connector.get("user_status") or "ACTIVE").upper() in {"RESTRICTED", "SUSPENDED"}:
        raise _problem(403, "ACCOUNT_RESTRICTED", "The connector owner's account is restricted.")
    expiry = _parse_iso(connector.get("expires_at"))
    if expiry and expiry <= datetime.now(timezone.utc):
        raise _problem(401, "TOKEN_EXPIRED", "The connector token has expired.")
    audience = str(connector.get("audience") or "").strip()
    expected_audience = settings.app_url.rstrip("/") + "/api/agent"
    if audience and audience != expected_audience:
        raise _problem(401, "INVALID_AUDIENCE", "The connector token is not issued for this Agent Gateway.")
    try:
        durable_rate_limit(f"agent-connector:{connector['id']}", 120, 60)
    except HTTPException as exc:
        if exc.status_code == 429:
            raise _problem(429, "RATE_LIMITED", "This connector has exceeded its request rate limit.") from exc
        raise
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE agent_connectors SET last_used_at=:now WHERE id=:id AND status='ACTIVE'"), {"now": now_iso(), "id": connector["id"]})
    user = {"id": connector["user_id"], "email": connector.get("email"), "name": connector.get("user_name")}
    return connector, user


def _require_scope(connector: dict[str, Any], scope: str) -> None:
    if scope not in _scopes(connector):
        raise _problem(403, "FORBIDDEN_SCOPE", f"This connector requires the {scope} scope.", required_scope=scope)


def _site_for(db, connector: dict[str, Any], user_id: str, site_id: str) -> dict[str, Any]:
    allowlist = _allowed_site_ids(connector)
    if allowlist is not None and site_id not in allowlist:
        raise _problem(403, "SITE_NOT_ALLOWED", "The connector is not allowlisted for this site.", site_id=site_id)
    row = db.execute(text("SELECT * FROM sites WHERE id=:site_id AND user_id=:user_id"), {"site_id": site_id, "user_id": user_id}).mappings().first()
    if not row:
        raise _problem(403, "SITE_NOT_ALLOWED", "The connector cannot access this site.", site_id=site_id)
    return dict(row)


def _ensure_edit_source(*, site_id: str | None, user_id: str, operation: str) -> None:
    pass


def _visible_sites(db, connector: dict[str, Any], user_id: str) -> list[dict[str, Any]]:
    rows = db.execute(text("SELECT id,name,business_name,slug,status,updated_at,studio_revision,page_count FROM sites WHERE user_id=:user_id ORDER BY updated_at DESC"), {"user_id": user_id}).mappings().all()
    allowlist = _allowed_site_ids(connector)
    return [
        dict(row)
        for row in rows
        if allowlist is None or str(row["id"]) in allowlist
    ]


def _canonical_site_document(site: dict[str, Any]):
    raw = site.get("studio_document_json")
    if not raw:
        raise _problem(409, "STUDIO_DOCUMENT_REQUIRED", "The site does not have a canonical Studio document yet.")
    try:
        return validate_studio_document(json.loads(raw))
    except (TypeError, ValueError, json.JSONDecodeError) as exc:
        raise _problem(422, "STUDIO_DOCUMENT_CORRUPT", "The site's canonical Studio document is invalid.") from exc


def _json_safe_payload(value: Any, *, key: str = "") -> None:
    """Reject executable or raw markup payloads before typed Studio dispatch."""
    if isinstance(value, dict):
        for item_key, item_value in value.items():
            lowered = str(item_key).lower()
            if lowered in {"html", "innerhtml", "outerhtml", "script", "javascript"}:
                raise _problem(422, "UNSAFE_PATCH", "Raw HTML and executable patch fields are not accepted.", field=str(item_key))
            _json_safe_payload(item_value, key=str(item_key))
    elif isinstance(value, list):
        for item in value:
            _json_safe_payload(item, key=key)
    elif isinstance(value, str):
        lowered = value.lower()
        if any(marker in lowered for marker in ("<script", "javascript:", "vbscript:", "expression(", "onerror=", "onclick=", "data:text/html")):
            raise _problem(422, "UNSAFE_PATCH", "Executable HTML and script URLs are not accepted.", field=key)


def _tool_list(connector: dict[str, Any]) -> list[dict[str, Any]]:
    scopes = set(_scopes(connector))
    return [
        {key: value for key, value in spec.items() if key != "scope"}
        for spec in TOOL_SPECS
        if spec["scope"] in scopes
    ]


def _publish_via_normal_path(connector: dict[str, Any], user: dict[str, Any], args: dict[str, Any], request_hash: str, key: str | None) -> dict[str, Any]:
    """Run the existing Zylora publisher with a short-lived internal session.

    This keeps publish policy, QA, entitlements, renderer snapshotting and
    hosted routing in ``app.api.publish`` instead of creating a gateway copy.
    """
    site_id = str(args.get("site_id") or "")
    if not site_id:
        raise _problem(422, "INVALID_ARGUMENTS", "site_id is required.")
    with SessionLocal() as db:
        site = _site_for(db, connector, user["id"], site_id)
        if args.get("base_revision") is not None:
            try:
                expected = int(args["base_revision"])
            except (TypeError, ValueError) as exc:
                raise _problem(422, "INVALID_ARGUMENTS", "base_revision must be an integer.") from exc
            current = int(site.get("studio_revision") or 0)
            if expected != current:
                raise _problem(409, "STALE_REVISION", "The site's Studio revision changed; reload before publishing.", current_revision=current)
    with SessionLocal() as db:
        if key:
            stored = db.execute(text("SELECT request_hash,response_json FROM agent_idempotency WHERE connector_id=:connector_id AND idempotency_key=:idempotency_key"), {"connector_id": connector["id"], "idempotency_key": key}).mappings().first()
            if stored:
                if stored["request_hash"] != request_hash:
                    raise _problem(409, "IDEMPOTENCY_CONFLICT", "The idempotency key was already used for different arguments.")
                return json.loads(stored["response_json"])
    from starlette.requests import Request as StarletteRequest
    from .api import PublishIn, publish
    from .security import new_session
    session_token, csrf_token, _ = new_session(user["id"])
    scope = {
        "type": "http", "http_version": "1.1", "method": "POST", "scheme": "http",
        "path": f"/api/sites/{site_id}/publish", "raw_path": f"/api/sites/{site_id}/publish".encode(),
        "query_string": b"", "headers": [(b"cookie", f"zylora_session={session_token}".encode()), (b"x-csrf-token", csrf_token.encode())],
        "client": ("127.0.0.1", 0), "server": ("zylora-agent-gateway", 80),
    }
    try:
        publish_result = publish(site_id, StarletteRequest(scope), PublishIn(
            selected_plan=args.get("selected_plan"),
            confirm_free_structural_reset=bool(args.get("confirm_free_structural_reset", False)),
        ))
    finally:
        with SessionLocal.begin() as db:
            db.execute(text("DELETE FROM sessions WHERE token=:token"), {"token": session_token})
    result = {"ok": True, "tool": "zylora.publish_site", "site_id": site_id, **publish_result}
    if key:
        with SessionLocal.begin() as db:
            db.execute(text("INSERT INTO agent_idempotency(connector_id,idempotency_key,request_hash,response_json,created_at) VALUES (:connector_id,:idempotency_key,:request_hash,:response_json,:created_at)"), {
                "connector_id": connector["id"], "idempotency_key": key, "request_hash": request_hash,
                "response_json": json.dumps(result, separators=(",", ":")), "created_at": now_iso(),
            })
    return result


def _idempotency_key(arguments: dict[str, Any], supplied: str | None) -> str | None:
    value = supplied or arguments.get("idempotency_key")
    if value is None:
        return None
    value = str(value).strip()
    if not value or len(value) > 160 or not re.fullmatch(r"[A-Za-z0-9._:-]{1,160}", value):
        raise _problem(422, "INVALID_IDEMPOTENCY_KEY", "idempotency_key contains unsupported characters.")
    return value


def invoke_tool(connector: dict[str, Any], user: dict[str, Any], tool: str, arguments: dict[str, Any], idempotency_key: str | None = None) -> dict[str, Any]:
    spec = _TOOLS_BY_NAME.get(tool)
    if not spec:
        raise _problem(404, "UNKNOWN_TOOL", f"Unknown agent tool: {tool}")
    _require_scope(connector, spec["scope"])
    args = dict(arguments or {})
    args.pop("idempotency_key", None)
    key = _idempotency_key(arguments or {}, idempotency_key)
    if tool in {"zylora.apply_site_patch", "zylora.apply_penpot_interaction", "zylora.create_site", "zylora.add_page", "zylora.publish_site"} and not key:
        raise _problem(422, "MISSING_IDEMPOTENCY_KEY", "Mutating agent tools require an idempotency_key.")
    if tool in {"zylora.apply_site_patch", "zylora.apply_penpot_interaction", "zylora.create_site", "zylora.add_page", "zylora.publish_site"}:
        _ensure_edit_source(
            site_id=str(args.get("site_id") or "") or None,
            user_id=user["id"],
            operation=tool,
        )
    request_hash = hashlib.sha256(json.dumps({"tool": tool, "arguments": args}, sort_keys=True, separators=(",", ":")).encode("utf-8")).hexdigest()

    if tool == "zylora.publish_site":
        return _publish_via_normal_path(connector, user, args, request_hash, key)

    with SessionLocal.begin() as db:
        if key:
            stored = db.execute(text("SELECT request_hash,response_json FROM agent_idempotency WHERE connector_id=:connector_id AND idempotency_key=:idempotency_key"), {"connector_id": connector["id"], "idempotency_key": key}).mappings().first()
            if stored:
                if stored["request_hash"] != request_hash:
                    raise _problem(409, "IDEMPOTENCY_CONFLICT", "The idempotency key was already used for different arguments.")
                try:
                    return json.loads(stored["response_json"])
                except (TypeError, ValueError) as exc:
                    raise _problem(500, "IDEMPOTENCY_CORRUPT", "Stored idempotency response is corrupt.") from exc

        if tool == "zylora.get_capabilities":
            result = {"gateway": "zylora-agent-gateway", "protocols": ["rest", "mcp"], "scopes": _scopes(connector), "tools": [item["name"] for item in _tool_list(connector)]}
        elif tool == "zylora.list_sites":
            result = {"items": _visible_sites(db, connector, user["id"])}
        elif tool == "zylora.create_site":
            if _allowed_site_ids(connector) is not None:
                raise _problem(403, "SITE_ALLOWLIST_REQUIRED", "sites.create connectors must allow all current and future sites.")
            name = str(args.get("name") or "").strip()
            description = str(args.get("description") or "").strip()
            try:
                created = create_agent_site(
                    db,
                    user_id=user["id"],
                    name=name,
                    description=description,
                    audit_metadata={"connector_id": connector["id"], "tool": tool},
                )
            except ValueError as exc:
                message = str(exc)
                if message.startswith("DRAFT_LIMIT_REACHED:"):
                    _, limit, drafts = message.split(":", 2)
                    raise _problem(409, "DRAFT_LIMIT_REACHED", "The account has reached its draft-site limit.", limit=int(limit), drafts=int(drafts)) from exc
                raise _problem(422, "INVALID_ARGUMENTS", message) from exc
            result = {
                "ok": True,
                "tool": tool,
                "site_id": created["site_id"],
                "slug": created["slug"],
                "revision": created["revision"],
                "page_count": created["page_count"],
                "document": created["document"].model_dump(mode="json", exclude_none=True),
            }
        elif tool == "zylora.get_site_revision":
            site_id = str(args.get("site_id") or "")
            if not site_id:
                raise _problem(422, "INVALID_ARGUMENTS", "site_id is required.")
            site = _site_for(db, connector, user["id"], site_id)
            document = _canonical_site_document(site)
            result = {"site_id": site_id, "revision": int(site.get("studio_revision") or document.revision or 0), "schema_version": document.schemaVersion, "updated_at": site.get("updated_at"), "status": site.get("status"), "design_source": "penpot" if str(settings.studio_engine).lower() == "penpot" else "site_document", "runtime_source": "site_document"}
        elif tool == "zylora.get_site_structure":
            site_id = str(args.get("site_id") or "")
            if not site_id:
                raise _problem(422, "INVALID_ARGUMENTS", "site_id is required.")
            site = _site_for(db, connector, user["id"], site_id)
            document = _canonical_site_document(site)
            result = {"site_id": site_id, "revision": int(site.get("studio_revision") or document.revision or 0), "document": document.model_dump(mode="json", exclude_none=True), "design_source": "penpot" if str(settings.studio_engine).lower() == "penpot" else "site_document", "runtime_source": "site_document"}
        elif tool == "zylora.apply_site_patch":
            site_id = str(args.get("site_id") or "")
            if not site_id:
                raise _problem(422, "INVALID_ARGUMENTS", "site_id is required.")
            try:
                base_revision = int(args.get("base_revision"))
            except (TypeError, ValueError) as exc:
                raise _problem(422, "INVALID_ARGUMENTS", "base_revision must be an integer.") from exc
            operations = args.get("operations")
            if not isinstance(operations, list) or not operations:
                raise _problem(422, "INVALID_ARGUMENTS", "operations must contain at least one typed operation.")
            if len(operations) > 100:
                raise _problem(422, "PATCH_TOO_LARGE", "A patch may contain at most 100 operations.")
            _json_safe_payload(operations)
            site = _site_for(db, connector, user["id"], site_id)
            document = _canonical_site_document(site)
            current_revision = int(site.get("studio_revision") or document.revision or 0)
            if base_revision != current_revision:
                raise _problem(409, "STALE_REVISION", "The site's Studio revision changed; reload and rebase the patch.", current_revision=current_revision)
            dry_run = bool(args.get("dry_run", False))
            try:
                if dry_run:
                    patched = preview_operations(document, operations)
                    committed = None
                else:
                    committed = apply_operations(
                        db,
                        site_id=site_id,
                        user_id=user["id"],
                        document=document,
                        operations=operations,
                        base_revision=current_revision,
                        kind="AGENT_PATCH",
                        label="Agent patch",
                        audit_metadata={"connector_id": connector["id"], "tool": tool},
                    )
                    patched = committed["document"]
            except StudioMutationConflict as exc:
                raise _problem(409, "STALE_REVISION", "The site's Studio revision changed; reload and rebase the patch.", current_revision=exc.current_revision) from exc
            except (TypeError, ValueError) as exc:
                raise _problem(422, "INVALID_PATCH", str(exc)) from exc
            if dry_run:
                result = {"ok": True, "tool": tool, "site_id": site_id, "dry_run": True, "base_revision": current_revision, "would_revision": current_revision + 1, "document": patched.model_dump(mode="json", exclude_none=True)}
            else:
                result = {"ok": True, "tool": tool, "site_id": site_id, "dry_run": False, "base_revision": current_revision, "revision": committed["new_revision"], "document": patched.model_dump(mode="json", exclude_none=True)}
        elif tool == "zylora.add_page":
            site_id = str(args.get("site_id") or "")
            if not site_id:
                raise _problem(422, "INVALID_ARGUMENTS", "site_id is required.")
            try:
                base_revision = int(args.get("base_revision"))
            except (TypeError, ValueError) as exc:
                raise _problem(422, "INVALID_ARGUMENTS", "base_revision must be an integer.") from exc
            site = _site_for(db, connector, user["id"], site_id)
            document = _canonical_site_document(site)
            current_revision = int(site.get("studio_revision") or document.revision or 0)
            if base_revision != current_revision:
                raise _problem(409, "STALE_REVISION", "The site's Studio revision changed; reload and rebase the page addition.", current_revision=current_revision)
            try:
                document, page_id = add_page(document, str(args.get("name") or ""), str(args.get("slug") or ""))
                committed = commit_document(
                    db,
                    site_id=site_id,
                    user_id=user["id"],
                    document=document,
                    base_revision=current_revision,
                    kind="AGENT_PAGE_ADD",
                    label=f"Agent added page {page_id}",
                    audit_metadata={"connector_id": connector["id"], "tool": tool, "page_id": page_id},
                )
                document = committed["document"]
            except StudioMutationConflict as exc:
                raise _problem(409, "STALE_REVISION", "The site's Studio revision changed; reload and rebase the page addition.", current_revision=exc.current_revision) from exc
            except ValueError as exc:
                message = str(exc)
                if message.startswith("A page with this slug already exists:"):
                    raise _problem(409, "DUPLICATE_PAGE_SLUG", message, slug=str(args.get("slug") or "").strip().strip("/").lower()) from exc
                if message.startswith("Each website supports a maximum"):
                    raise _problem(422, "PAGE_LIMIT_EXCEEDED", message, page_limit=MAX_PAGES_PER_SITE) from exc
                raise _problem(422, "INVALID_PAGE", message) from exc
            result = {"ok": True, "tool": tool, "site_id": site_id, "page_id": page_id, "base_revision": current_revision, "revision": committed["new_revision"], "page_count": len(document.pages), "document": document.model_dump(mode="json", exclude_none=True)}
        else:  # pragma: no cover - guarded by _TOOLS_BY_NAME
            raise _problem(404, "UNKNOWN_TOOL", f"Unknown agent tool: {tool}")

        if key and spec["scope"] in {"sites.edit", "sites.create"} and not bool(args.get("dry_run", False)):
            db.execute(text("INSERT INTO agent_idempotency(connector_id,idempotency_key,request_hash,response_json,created_at) VALUES (:connector_id,:idempotency_key,:request_hash,:response_json,:created_at)"), {
                "connector_id": connector["id"],
                "idempotency_key": key,
                "request_hash": request_hash,
                "response_json": json.dumps(result, separators=(",", ":")),
                "created_at": now_iso(),
            })
        return result


@router.post("/connectors")
def create_connector(payload: ConnectorCreateIn, request: Request):
    user = _session_user(request, csrf=True)
    expiry = _parse_iso(payload.expires_at)
    if expiry and expiry <= datetime.now(timezone.utc):
        raise _problem(422, "INVALID_EXPIRY", "expires_at must be in the future.")
    site_scopes = {"sites.read", "sites.edit", "sites.publish"}.intersection(payload.scopes)
    if payload.all_sites and payload.site_ids:
        raise _problem(422, "INVALID_SITE_ALLOWLIST", "Choose explicit sites or all sites, not both.")
    if site_scopes and not payload.site_ids and not payload.all_sites:
        raise _problem(422, "SITE_ALLOWLIST_REQUIRED", "Select at least one site or explicitly allow all sites.")
    if "sites.create" in payload.scopes and not payload.all_sites:
        raise _problem(422, "SITE_ALLOWLIST_REQUIRED", "sites.create requires all current and future sites because a new site ID is not known before creation.")
    with SessionLocal.begin() as db:
        if payload.site_ids:
            rows = db.execute(text("SELECT id FROM sites WHERE user_id=:user_id AND id IN (%s)" % ",".join(f":site_{index}" for index in range(len(payload.site_ids)))), {"user_id": user["id"], **{f"site_{index}": value for index, value in enumerate(payload.site_ids)}}).scalars().all()
            if set(rows) != set(payload.site_ids):
                raise _problem(422, "INVALID_SITE_ALLOWLIST", "Every allowlisted site must belong to the authenticated account.")
        raw_token, row = issue_connector(db, user_id=user["id"], name=payload.name, scopes=payload.scopes,
                                         site_ids=payload.site_ids, all_sites=payload.all_sites,
                                         expires_at=expiry.isoformat() if expiry else None)
    return {**_connector_public({**row, "status": "ACTIVE", "revoked_at": None, "last_used_at": None}), "token": raw_token}


@router.get("/connectors")
def list_connectors(request: Request):
    user = _session_user(request)
    with SessionLocal() as db:
        rows = db.execute(text("SELECT * FROM agent_connectors WHERE user_id=:user_id ORDER BY created_at DESC"), {"user_id": user["id"]}).mappings().all()
    return {"items": [_connector_public(dict(row)) for row in rows]}


@router.get("/registry")
def integration_registry(request: Request):
    """Return the centrally maintained, provenance-aware integration registry."""
    _session_user(request)
    try:
        integrations = json.loads((ROOT / "data" / "integration-registry.json").read_text(encoding="utf-8"))
        assets = json.loads((ROOT / "data" / "brand-assets.json").read_text(encoding="utf-8"))
    except (OSError, TypeError, ValueError) as exc:
        raise _problem(503, "REGISTRY_UNAVAILABLE", "The integration registry is temporarily unavailable.") from exc
    return {"registry": integrations, "brand_assets": assets}


@router.post("/connectors/{connector_id}/revoke")
def revoke_connector(connector_id: str, request: Request):
    user = _session_user(request, csrf=True)
    with SessionLocal.begin() as db:
        updated = db.execute(text("UPDATE agent_connectors SET status='REVOKED',revoked_at=:revoked_at WHERE id=:id AND user_id=:user_id AND status='ACTIVE'"), {"id": connector_id, "user_id": user["id"], "revoked_at": now_iso()})
        if updated.rowcount != 1:
            raise _problem(404, "CONNECTOR_NOT_FOUND", "Active connector not found.")
    return {"ok": True, "id": connector_id, "status": "REVOKED"}


@router.get("/capabilities")
def capabilities(authorization: str | None = Header(default=None)):
    connector, _ = _authenticate_agent(authorization)
    return {"gateway": "zylora-agent-gateway", "protocols": ["rest", "mcp"], "scopes": _scopes(connector), "tools": [item["name"] for item in _tool_list(connector)]}


@router.get("/tools")
def tools(authorization: str | None = Header(default=None)):
    connector, _ = _authenticate_agent(authorization)
    return {"tools": _tool_list(connector)}


@router.post("/invoke")
def invoke(payload: InvokeIn, authorization: str | None = Header(default=None)):
    connector, user = _authenticate_agent(authorization)
    return invoke_tool(connector, user, payload.tool, payload.arguments, payload.idempotency_key)


def _mcp_error(request_id: Any, code: int, message: str, data: Any = None) -> JSONResponse:
    error: dict[str, Any] = {"code": code, "message": message}
    if data is not None:
        error["data"] = data
    return JSONResponse({"jsonrpc": "2.0", "id": request_id, "error": error})


@mcp_router.post("/mcp")
async def mcp(request: Request, authorization: str | None = Header(default=None)):
    connector, user = _authenticate_agent(authorization)
    try:
        message = await request.json()
    except Exception:
        return _mcp_error(None, -32700, "Parse error")
    if not isinstance(message, dict) or message.get("jsonrpc") != "2.0" or "method" not in message:
        return _mcp_error(message.get("id") if isinstance(message, dict) else None, -32600, "Invalid Request")
    request_id = message.get("id")
    method = message.get("method")
    params = message.get("params") or {}
    if method == "notifications/initialized":
        return Response(status_code=204)
    if method == "initialize":
        return JSONResponse({"jsonrpc": "2.0", "id": request_id, "result": {
            "protocolVersion": "2025-06-18",
            "capabilities": {"tools": {}},
            "serverInfo": {"name": "zylora-agent-gateway", "version": "1.0"},
        }})
    if method == "tools/list":
        return JSONResponse({"jsonrpc": "2.0", "id": request_id, "result": {"tools": _tool_list(connector)}})
    if method != "tools/call":
        return _mcp_error(request_id, -32601, "Method not found")
    if not isinstance(params, dict) or not params.get("name"):
        return _mcp_error(request_id, -32602, "tools/call requires a tool name")
    arguments = params.get("arguments") or {}
    if not isinstance(arguments, dict):
        return _mcp_error(request_id, -32602, "tools/call arguments must be an object")
    try:
        result = invoke_tool(connector, user, str(params["name"]), arguments, arguments.get("idempotency_key"))
    except HTTPException as exc:
        detail = exc.detail if isinstance(exc.detail, dict) else {"message": str(exc.detail)}
        return _mcp_error(request_id, -32000, str(detail.get("message") or "Tool call failed"), detail)
    except Exception as exc:  # fail closed; do not leak tracebacks through MCP
        return _mcp_error(request_id, -32000, "Tool call failed", {"code": "TOOL_FAILED", "message": str(exc)})
    return JSONResponse({"jsonrpc": "2.0", "id": request_id, "result": {
        "content": [{"type": "text", "text": json.dumps(result, separators=(",", ":"))}],
        "structuredContent": result,
        "isError": False,
    }})
