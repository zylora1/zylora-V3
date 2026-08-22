from __future__ import annotations
import base64, hashlib, hmac, json, os, time

class SecurityError(ValueError):
    pass

def hash_password(password: str, salt: bytes | None = None) -> str:
    if len(password) < 8:
        raise SecurityError("password_too_short")
    salt = salt or os.urandom(16)
    dk = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 210_000)
    return f"pbkdf2_sha256${base64.urlsafe_b64encode(salt).decode()}${base64.urlsafe_b64encode(dk).decode()}"

def verify_password(password: str, encoded: str) -> bool:
    try:
        scheme, salt_b64, digest_b64 = encoded.split("$", 2)
        if scheme != "pbkdf2_sha256": return False
        salt = base64.urlsafe_b64decode(salt_b64.encode())
        expected = base64.urlsafe_b64decode(digest_b64.encode())
        actual = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 210_000)
        return hmac.compare_digest(actual, expected)
    except Exception:
        return False

def issue_token(user_id: int, role: str, secret: str, ttl_seconds: int = 3600, now: int | None = None) -> str:
    now = int(time.time() if now is None else now)
    payload = {"sub": user_id, "role": role, "iat": now, "exp": now + ttl_seconds}
    body = base64.urlsafe_b64encode(json.dumps(payload, separators=(",", ":")).encode()).decode().rstrip("=")
    sig = hmac.new(secret.encode(), body.encode(), hashlib.sha256).digest()
    return body + "." + base64.urlsafe_b64encode(sig).decode().rstrip("=")

def parse_token(token: str, secret: str, now: int | None = None) -> dict:
    try:
        body, sig_text = token.split(".", 1)
        pad = "=" * (-len(sig_text) % 4)
        supplied = base64.urlsafe_b64decode((sig_text + pad).encode())
        expected = hmac.new(secret.encode(), body.encode(), hashlib.sha256).digest()
        if not hmac.compare_digest(supplied, expected):
            raise SecurityError("invalid_signature")
        pad = "=" * (-len(body) % 4)
        payload = json.loads(base64.urlsafe_b64decode((body + pad).encode()))
        current = int(time.time() if now is None else now)
        if current >= int(payload["exp"]):
            raise SecurityError("token_expired")
        return payload
    except SecurityError:
        raise
    except Exception as exc:
        raise SecurityError("invalid_token") from exc
