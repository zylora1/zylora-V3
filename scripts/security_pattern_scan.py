from __future__ import annotations

import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", ".venv", "venv", "node_modules", "release_context", ".codex-tmp", ".temp_extract"}
PATTERNS = {
    "private-key": re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----"),
    "aws-access-key": re.compile(r"\bAKIA[0-9A-Z]{16}\b"),
    "stripe-secret": re.compile(r"\bsk_(?:live|test)_[A-Za-z0-9]{16,}\b"),
    "razorpay-secret": re.compile(r"\brzp_(?:live|test)_[A-Za-z0-9]{16,}\b"),
    "slack-token": re.compile(r"\bxox[baprs]-[A-Za-z0-9-]{20,}\b"),
    "railway-token": re.compile(r"\b(?:RAILWAY_TOKEN|RAILWAY_API_TOKEN)\s*[:=]\s*[^$\s]{16,}"),
    "database-url": re.compile(r"\bDATABASE_URL\s*[:=]\s*['\"]?(?:postgres(?:ql)?|mysql|mongodb)://[^'\"\s]+", re.I),
    "provider-secret-assignment": re.compile(r"(?<!settings\.)\b(?:RESEND_API_KEY|SENDGRID_API_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY|CLOUDFLARE_API_TOKEN|SMTP_PASSWORD|TWILIO_AUTH_TOKEN|JWT_SECRET|SESSION_SECRET)\s*[:=]\s*['\"]?(?!\$\{|os\.getenv|settings\.|your[-_ ]|change[-_ ]|replace[-_ ]|example|test|none|null)[A-Za-z0-9_./+=:-]{16,}", re.I),
}


def files_to_scan() -> list[Path]:
    raw = subprocess.check_output(["git", "ls-files", "-z"], cwd=ROOT)
    files = [ROOT / value for value in raw.decode("utf-8", "surrogateescape").split("\0") if value]
    # Include current untracked source/config additions without scanning generated
    # media, caches, local databases, or the compact deployment output.
    for relative_root in ("app", "studio", "scripts", "static", "tests"):
        base = ROOT / relative_root
        if base.exists():
            files.extend(path for path in base.rglob("*") if path.is_file() and not any(part in SKIP_DIRS for part in path.parts))
    unique: dict[str, Path] = {}
    for path in files:
        if path.exists() and path.is_file() and not any(part in SKIP_DIRS for part in path.parts):
            unique[str(path).lower()] = path
    return list(unique.values())


def main() -> int:
    findings: list[tuple[str, int, str]] = []
    for path in files_to_scan():
        if path.name in {".env.example"} or path.suffix.lower() in {".db", ".sqlite", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".woff", ".woff2", ".ttf", ".ico", ".map"}:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        for line_number, line in enumerate(text.splitlines(), 1):
            for name, pattern in PATTERNS.items():
                if pattern.search(line):
                    findings.append((path.relative_to(ROOT).as_posix(), line_number, name))
    if findings:
        for path, line, name in sorted(set(findings)):
            print(f"FINDING {path}:{line} pattern={name}")
        return 1
    print(f"No high-confidence secret patterns found in {len(files_to_scan())} source/config files; values were not printed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
