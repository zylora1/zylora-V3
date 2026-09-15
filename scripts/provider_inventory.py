"""Inventory provider configuration and call-site references without reading secrets."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


LEGACY_SECRETS = (
    "OPENAI_API_KEY",
    "ANTHROPIC_API_KEY",
    "GOOGLE_AI_API_KEY",
    "GEMINI_API_KEY",
    "DEEPSEEK_API_KEY",
    "MISTRAL_API_KEY",
    "XAI_API_KEY",
    "RESEND_API_KEY",
    "SENDGRID_API_KEY",
    "BREVO_API_KEY",
    "TWILIO_ACCOUNT_SID",
    "TWILIO_AUTH_TOKEN",
    "TWILIO_WHATSAPP_FROM",
    "SMTP_USERNAME",
    "SMTP_PASSWORD",
    "WHATSAPP_PHONE_NUMBER_ID",
    "WHATSAPP_ACCESS_TOKEN",
)

TARGET_SECRETS = (
    "AI_GATEWAY_API_KEY",
    "TELNYX_API_KEY",
    "CLOUDFLARE_API_TOKEN",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "RAZORPAY_KEY_ID",
    "RAZORPAY_KEY_SECRET",
    "RAZORPAY_WEBHOOK_SECRET",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "PENPOT_INTERNAL_URL",
    "OIDC_SIGNING_KEY",
)

_EXTENSIONS = {
    ".py", ".ts", ".tsx", ".js", ".jsx", ".html", ".css", ".yml", ".yaml",
    ".toml", ".ini", ".json", ".md", ".txt", ".env",
}
_EXCLUDED_DIRS = {".git", ".codex", ".pytest_cache", "node_modules", "artifacts", "static/vendor"}
_EXCLUDED_FILES = {"static/studio.js", "static/dashboard.js", "static/super-admin.js"}
_SOURCE_DIRS = {"app", "scripts", "tests", "static", "docs"}
_ROOT_FILES = {".env.example", "docker-compose.yml", "pyproject.toml", "package.json", "vite.studio.config.mjs"}
_DIRECT_PROVIDER_PATTERNS = {
    "openai": re.compile(r"api\.openai\.com|openai_api_key", re.I),
    "anthropic": re.compile(r"api\.anthropic\.com|anthropic_api_key", re.I),
    "resend": re.compile(r"api\.resend\.com|resend_api_key", re.I),
    "twilio": re.compile(r"api\.twilio\.com|twilio_account_sid", re.I),
    "meta_whatsapp": re.compile(r"graph\.facebook\.com|whatsapp_access_token", re.I),
    "telnyx": re.compile(r"api\.telnyx\.com|telnyx_api_key", re.I),
    "cloudflare": re.compile(r"api\.cloudflare\.com|cloudflare_api_token", re.I),
    "razorpay": re.compile(r"api\.razorpay\.com|razorpay_key", re.I),
}


def _files(root: Path):
    for path in sorted(root.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in _EXTENSIONS:
            continue
        relative = path.relative_to(root)
        relative_parts = set(relative.parts)
        if len(relative.parts) > 1 and relative.parts[0] not in _SOURCE_DIRS:
            continue
        if len(relative.parts) == 1 and relative.name not in _ROOT_FILES:
            continue
        if relative_parts & {".git", ".codex", ".pytest_cache", "node_modules", "artifacts"}:
            continue
        if "static" in relative_parts and "vendor" in relative_parts:
            continue
        if relative.as_posix() in _EXCLUDED_FILES:
            continue
        yield path


def collect_inventory(root: Path) -> dict[str, Any]:
    root = Path(root).resolve()
    legacy_found: set[str] = set()
    target_found: set[str] = set()
    references: list[dict[str, Any]] = []
    direct_calls: dict[str, list[str]] = {name: [] for name in _DIRECT_PROVIDER_PATTERNS}

    for path in _files(root):
        try:
            lines = path.read_text(encoding="utf-8", errors="ignore").splitlines()
        except OSError:
            continue
        relative = path.relative_to(root).as_posix()
        for line_number, line in enumerate(lines, 1):
            names = sorted({name for name in LEGACY_SECRETS if name in line})
            names.extend(sorted({name for name in TARGET_SECRETS if name in line and name not in names}))
            if names:
                legacy_found.update(name for name in names if name in LEGACY_SECRETS)
                target_found.update(name for name in names if name in TARGET_SECRETS)
                references.append({"file": relative, "line": line_number, "variables": names})
            for provider, pattern in _DIRECT_PROVIDER_PATTERNS.items():
                if pattern.search(line):
                    direct_calls[provider].append(f"{relative}:{line_number}")

    return {
        "legacy_secrets": sorted(legacy_found),
        "target_secrets": sorted(target_found),
        "references": references,
        "direct_provider_calls": {key: values for key, values in direct_calls.items() if values},
    }


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    result = collect_inventory(root)
    destination = root / "artifacts" / "architecture-consolidation" / "provider-inventory.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(json.dumps({
        "legacy_secret_count": len(result["legacy_secrets"]),
        "target_secret_count": len(result["target_secrets"]),
        "direct_provider_count": len(result["direct_provider_calls"]),
        "artifact": destination.as_posix(),
    }, sort_keys=True))


if __name__ == "__main__":
    main()
