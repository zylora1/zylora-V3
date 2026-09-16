"""Canonical Zylora website semantics for the Penpot bridge.

Penpot owns visual composition.  This module owns the typed, versioned
metadata that makes a visual object a Zylora website component.  The registry
is shared with the first-party plugin through the checked-in JSON artifact;
the compiler is the enforcement boundary before a document reaches
SiteDocument/publishing.
"""

from __future__ import annotations

from copy import deepcopy
import hashlib
import json
from pathlib import Path
import re
from typing import Any
from urllib.parse import unquote, urlsplit

from pydantic import BaseModel, ConfigDict, Field, model_validator


ZYLORA_WEBSITE_SCHEMA_VERSION = 1
ZYLORA_COMPONENT_SCHEMA_VERSION = 1
SEMANTIC_KEY = "zylora"
INSTANCE_ID_PATTERN = re.compile(r"^zl_cmp_[A-Za-z0-9_-]{1,120}$")
SAFE_ID_PATTERN = re.compile(r"^[A-Za-z0-9_-]{1,128}$")
UNSAFE_VALUE_PATTERN = re.compile(r"(?is)<\s*script|javascript\s*:|vbscript\s*:|data\s*:\s*text/html|on[a-z]+\s*=")


class SemanticValidationError(ValueError):
    """Raised when Penpot semantic metadata cannot be safely published."""


def _registry_path() -> Path:
    return Path(__file__).resolve().parents[1] / "integrations" / "penpot" / "zylora-component-registry.json"


def _load_registry() -> dict[str, Any]:
    try:
        raw = json.loads(_registry_path().read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise RuntimeError("The Zylora component registry is missing or invalid") from exc
    if raw.get("websiteSchemaVersion") != ZYLORA_WEBSITE_SCHEMA_VERSION:
        raise RuntimeError("Unsupported Zylora website schema registry version")
    if raw.get("componentSchemaVersion") != ZYLORA_COMPONENT_SCHEMA_VERSION:
        raise RuntimeError("Unsupported Zylora component schema registry version")
    components = raw.get("components")
    if not isinstance(components, list) or not components:
        raise RuntimeError("The Zylora component registry must contain components")
    by_type: dict[str, Any] = {}
    for item in components:
        if not isinstance(item, dict) or not SAFE_ID_PATTERN.fullmatch(str(item.get("type") or "")):
            raise RuntimeError("The Zylora component registry contains an invalid type")
        by_type[str(item["type"])] = dict(item)
    raw["by_type"] = by_type
    return raw


REGISTRY = _load_registry()
COMPONENT_REGISTRY: dict[str, dict[str, Any]] = REGISTRY["by_type"]
COMPONENT_ALIASES: dict[str, str] = {
    str(key).strip().lower(): str(value).strip().lower()
    for key, value in (REGISTRY.get("aliases") or {}).items()
}


def component_types() -> tuple[str, ...]:
    return tuple(COMPONENT_REGISTRY)


def canonical_component_type(value: Any) -> str:
    candidate = str(value or "").strip().lower().replace("_", "-")
    candidate = COMPONENT_ALIASES.get(candidate, candidate)
    if candidate not in COMPONENT_REGISTRY:
        raise SemanticValidationError(f"Unknown Zylora component type: {value}")
    return candidate


def node_type_for_component(component_type: Any) -> str:
    return str(COMPONENT_REGISTRY[canonical_component_type(component_type)]["nodeType"])


def _safe_instance_id(value: Any, *, node_id: str) -> str:
    candidate = str(value or "").strip()
    if not candidate:
        digest = hashlib.sha256(str(node_id).encode("utf-8")).hexdigest()[:16]
        return f"zl_cmp_{digest}"
    if not INSTANCE_ID_PATTERN.fullmatch(candidate):
        raise SemanticValidationError("Zylora component instanceId is invalid")
    return candidate


def _safe_value(value: Any, path: str = "metadata") -> None:
    if isinstance(value, str):
        # Decode once before validation so an encoded javascript/data URL or
        # event-handler marker cannot slip through the semantic boundary and
        # get decoded later by the browser/runtime.
        if UNSAFE_VALUE_PATTERN.search(unquote(value)):
            raise SemanticValidationError(f"Unsafe executable value at {path}")
    elif isinstance(value, dict):
        for key, item in value.items():
            _safe_value(item, f"{path}.{key}")
    elif isinstance(value, list):
        for index, item in enumerate(value):
            _safe_value(item, f"{path}[{index}]")


def validate_link_target(action: dict[str, Any]) -> dict[str, Any]:
    if not isinstance(action, dict):
        raise SemanticValidationError("A Zylora action must be an object")
    normalized = dict(action)
    action_type = str(normalized.get("type") or "").strip().lower()
    action_type = {"navigate": "internal_page", "page": "internal_page", "external": "external_url"}.get(action_type, action_type)
    allowed = {"internal_page", "external_url", "section_anchor", "email", "phone", "appointment", "form", "modal", "download", "none"}
    if action_type not in allowed:
        raise SemanticValidationError(f"Unsupported link action type: {action_type or 'missing'}")
    normalized["type"] = action_type
    if action_type == "internal_page" and not SAFE_ID_PATTERN.fullmatch(str(normalized.get("targetPageId") or "")):
        raise SemanticValidationError("internal_page actions require a valid targetPageId")
    if action_type == "section_anchor" and not SAFE_ID_PATTERN.fullmatch(str(normalized.get("targetSectionId") or normalized.get("sectionId") or "")):
        raise SemanticValidationError("section_anchor actions require a valid targetSectionId")
    if action_type == "external_url":
        url = str(normalized.get("url") or "").strip()
        parsed = urlsplit(url)
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise SemanticValidationError("external_url actions require an http(s) URL")
        normalized["url"] = url
    if action_type == "email" and not str(normalized.get("value") or "").strip():
        raise SemanticValidationError("email actions require a value")
    if action_type == "phone" and not str(normalized.get("value") or "").strip():
        raise SemanticValidationError("phone actions require a value")
    _safe_value(normalized, "action")
    return normalized


class ZyloraComponentMetadata(BaseModel):
    """Formal, versioned metadata stored in Penpot pluginData."""

    model_config = ConfigDict(extra="forbid")

    schemaVersion: int = Field(default=ZYLORA_COMPONENT_SCHEMA_VERSION, ge=1)
    componentType: str
    instanceId: str
    runtimeConfig: dict[str, Any] = Field(default_factory=dict)
    bindings: dict[str, Any] = Field(default_factory=dict)
    actions: list[dict[str, Any]] = Field(default_factory=list)
    responsive: dict[str, Any] = Field(default_factory=dict)
    accessibility: dict[str, Any] = Field(default_factory=dict)
    seo: dict[str, Any] = Field(default_factory=dict)
    metadata: dict[str, Any] = Field(default_factory=dict)

    @model_validator(mode="after")
    def validate_semantics(self) -> "ZyloraComponentMetadata":
        if self.schemaVersion != ZYLORA_COMPONENT_SCHEMA_VERSION:
            raise ValueError(f"Unsupported Zylora component schema version: {self.schemaVersion}")
        canonical_component_type(self.componentType)
        if not INSTANCE_ID_PATTERN.fullmatch(self.instanceId):
            raise ValueError("Zylora component instanceId is invalid")
        for index, action in enumerate(self.actions):
            self.actions[index] = validate_link_target(action)
        _safe_value(self.runtimeConfig, "runtimeConfig")
        _safe_value(self.bindings, "bindings")
        _safe_value(self.responsive, "responsive")
        _safe_value(self.accessibility, "accessibility")
        _safe_value(self.seo, "seo")
        _safe_value(self.metadata, "metadata")
        return self


def _actions_from_raw(raw: dict[str, Any]) -> list[dict[str, Any]]:
    actions = raw.get("actions")
    if actions is None and raw.get("action") is not None:
        actions = raw.get("action")
    if actions is None and raw.get("targetPageId") is not None:
        actions = {"type": "internal_page", "targetPageId": raw.get("targetPageId")}
    if isinstance(actions, dict):
        actions = [actions]
    if isinstance(actions, str):
        actions = [{"type": actions, "targetPageId": raw.get("targetPageId")}]
    if not isinstance(actions, list):
        return []
    return [validate_link_target(item) for item in actions]


def canonicalize_component_metadata(
    raw: dict[str, Any] | None,
    *,
    node_id: str,
    used_instance_ids: set[str] | None = None,
) -> tuple[dict[str, Any], tuple[str, ...]]:
    """Validate and normalize pluginData without losing legacy metadata.

    Missing instance IDs are generated from the stable Penpot node ID. If a
    duplicated object carries an existing ID, a deterministic replacement is
    derived from the source ID and destination node ID.
    """

    if not isinstance(raw, dict):
        raise SemanticValidationError("Zylora metadata must be an object")
    source = deepcopy(raw)
    source.pop("schemaVersion", None) if source.get("schemaVersion") is None else None
    component_type = canonical_component_type(source.get("componentType"))
    if "schemaVersion" in raw:
        try:
            schema_version = int(raw["schemaVersion"])
        except (TypeError, ValueError) as exc:
            raise SemanticValidationError("Zylora component schemaVersion must be an integer") from exc
        if schema_version != ZYLORA_COMPONENT_SCHEMA_VERSION:
            raise SemanticValidationError(f"Unsupported Zylora component schema version: {raw['schemaVersion']}")
    instance_id = _safe_instance_id(source.get("instanceId"), node_id=node_id)
    warnings: list[str] = []
    used = used_instance_ids if used_instance_ids is not None else set()
    if instance_id in used:
        digest = hashlib.sha256(f"{instance_id}:{node_id}".encode("utf-8")).hexdigest()[:16]
        instance_id = f"zl_cmp_{digest}"
        warnings.append(f"Duplicate semantic instance ID regenerated for node {node_id}")
        while instance_id in used:
            digest = hashlib.sha256(f"{instance_id}:collision".encode("utf-8")).hexdigest()[:16]
            instance_id = f"zl_cmp_{digest}"
    used.add(instance_id)
    runtime = dict(source.get("runtimeConfig") or {})
    for legacy_key in ("formId", "calendarId", "collectionId", "fieldId"):
        if legacy_key in source and legacy_key not in runtime:
            runtime[legacy_key] = source[legacy_key]
    normalized = ZyloraComponentMetadata(
        schemaVersion=ZYLORA_COMPONENT_SCHEMA_VERSION,
        componentType=component_type,
        instanceId=instance_id,
        runtimeConfig=runtime,
        bindings=dict(source.get("bindings") or {}),
        actions=_actions_from_raw(source),
        responsive=dict(source.get("responsive") or {}),
        accessibility=dict(source.get("accessibility") or {}),
        seo=dict(source.get("seo") or {}),
        metadata=dict(source.get("metadata") or {}),
    )
    return normalized.model_dump(exclude_none=True), tuple(warnings)


def duplicate_component_metadata(
    raw: dict[str, Any],
    *,
    source_node_id: str,
    destination_node_id: str,
    used_instance_ids: set[str] | None = None,
) -> dict[str, Any]:
    """Create a duplicate with a deterministic runtime identity.

    Form, calendar, CMS and navigation references stay shared in runtimeConfig
    and bindings; only the component instance identity is regenerated.
    """

    canonical, _ = canonicalize_component_metadata(raw, node_id=source_node_id, used_instance_ids=set())
    digest = hashlib.sha256(f"{canonical['instanceId']}:{destination_node_id}".encode("utf-8")).hexdigest()[:16]
    candidate = f"zl_cmp_{digest}"
    used = used_instance_ids if used_instance_ids is not None else set()
    while candidate in used:
        digest = hashlib.sha256(f"{candidate}:collision".encode("utf-8")).hexdigest()[:16]
        candidate = f"zl_cmp_{digest}"
    canonical["instanceId"] = candidate
    used.add(candidate)
    return canonical


def document_semantic_metadata(payload: dict[str, Any] | None) -> dict[str, Any]:
    """Return the versioned website-level semantic envelope."""

    source = dict(payload or {})
    version = source.get("zyloraWebsiteSchemaVersion", source.get("schemaVersion", ZYLORA_WEBSITE_SCHEMA_VERSION))
    try:
        version = int(version)
    except (TypeError, ValueError) as exc:
        raise SemanticValidationError("zyloraWebsiteSchemaVersion must be an integer") from exc
    if version != ZYLORA_WEBSITE_SCHEMA_VERSION:
        raise SemanticValidationError(f"Unsupported Zylora website schema version: {version}")
    return {**source, "zyloraWebsiteSchemaVersion": ZYLORA_WEBSITE_SCHEMA_VERSION}
