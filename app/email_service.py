"""Provider-neutral email transport for transactional and campaign mail.

Telnyx is the canonical production transport. The Resend adapter remains only
as an explicit compatibility path for local/staged migrations; no production
feature requires a Resend credential when Telnyx is configured.
"""
from __future__ import annotations

import base64
import hashlib
import json
import re
import time
from dataclasses import dataclass
from email.utils import formataddr, make_msgid, parseaddr
from typing import Iterable

import httpx
from email_validator import EmailNotValidError, validate_email
from sqlalchemy import text

from .config import settings
from .content_safety import html_to_text, looks_like_html, sanitize_email_html
from .db import SessionLocal, now_iso
from .operations import record_operational_event, safe_exception_summary
from .communication_service import communication_service

_HEADER_BREAK = re.compile(r"[\r\n]")
_RESEND_ENDPOINT = 'https://api.resend.com/emails'


class EmailConfigurationError(RuntimeError):
    """Raised when live email delivery was requested without usable settings."""


class EmailDeliveryError(RuntimeError):
    """Raised when the selected email provider rejects a message."""


@dataclass(frozen=True)
class EmailAttachment:
    filename: str
    content: bytes
    content_type: str


def normalize_recipient(value: str) -> str:
    try:
        return validate_email(str(value or '').strip(), check_deliverability=False).normalized.lower()
    except EmailNotValidError as exc:
        raise ValueError('Invalid email address') from exc


def _clean_header(value: str, label: str, limit: int) -> str:
    raw = str(value or '')
    if not raw.strip() or _HEADER_BREAK.search(raw):
        raise ValueError(f'Invalid {label}')
    return ' '.join(raw.split())[:limit]


def _sender() -> tuple[str, str]:
    """Return a provider-safe display name and normalized sender address."""
    configured = _clean_header(settings.telnyx_email_from or settings.email_from, 'EMAIL_FROM', 254)
    name, address = parseaddr(configured)
    address = normalize_recipient(address or configured)
    return (_clean_header(name, 'sender name', 120) if name else 'Zylora', address)


def resend_is_configured() -> bool:
    try:
        _sender()
    except (ValueError, EmailNotValidError):
        return False
    return bool(settings.resend_api_key.strip())


def _outbox(recipient: str, subject: str, body: str, *, category: str, metadata: dict,
            status: str = 'SENT') -> None:
    with SessionLocal.begin() as db:
        db.execute(
            text('''INSERT INTO outbox(channel,recipient,subject,body,status,metadata,created_at)
              VALUES ('EMAIL',:r,:s,:b,:status,:m,:a)'''),
            {'r': recipient, 's': subject, 'b': body, 'status': status,
             'm': json.dumps({'category': category, **metadata}, separators=(',', ':')),
             'a': now_iso()},
        )


class EmailService:
    """Compose and deliver mail through the canonical communications boundary."""

    def _payload(self, recipient: str, subject: str, body: str, *, html: str | None,
                 reply_to: str | None, attachments: Iterable[EmailAttachment],
                 idempotency_key: str | None = None) -> tuple[dict, str, str, str, str]:
        normalized = normalize_recipient(recipient)
        subject = _clean_header(subject, 'subject', 200)
        if _HEADER_BREAK.search(str(reply_to or '')):
            raise ValueError('Invalid reply-to address')
        html_body = sanitize_email_html(html if html is not None else body) if (html is not None or looks_like_html(body)) else None
        # Preserve explicit plain text (campaigns include the unsubscribe URL).
        text_body = str(body or '').strip() or (html_to_text(html_body) if html_body is not None else '')
        if not text_body:
            raise ValueError('Email body is required')
        display_name, sender_address = _sender()
        message_id = make_msgid(domain=sender_address.split('@', 1)[1])
        configured_reply = reply_to if reply_to is not None else settings.email_reply_to
        payload: dict[str, object] = {
            'from': formataddr((display_name, sender_address)),
            'to': [normalized],
            'subject': subject,
            'text': text_body,
        }
        if html_body is not None:
            payload['html'] = html_body
        if configured_reply:
            payload['reply_to'] = [normalize_recipient(configured_reply)]
        encoded_attachments = []
        for attachment in attachments:
            filename = re.sub(r'[^A-Za-z0-9._ -]+', '-', str(attachment.filename or 'attachment')).strip(' .')[:120] or 'attachment'
            encoded_attachments.append({
                'filename': filename,
                'content': base64.b64encode(bytes(attachment.content)).decode('ascii'),
            })
        if encoded_attachments:
            payload['attachments'] = encoded_attachments
        if idempotency_key:
            payload['headers'] = {'X-Entity-Ref-ID': _clean_header(idempotency_key, 'idempotency key', 200)}
        return payload, normalized, text_body, html_body or '', message_id

    def _resend_send(self, payload: dict, message_id: str, idempotency_key: str | None = None) -> str:
        if not resend_is_configured():
            raise EmailConfigurationError('RESEND_API_KEY and EMAIL_FROM are required for email delivery')
        timeout = max(1, min(int(settings.email_send_timeout or 20), 120))
        headers = {
            'Authorization': f'Bearer {settings.resend_api_key.strip()}',
            'Content-Type': 'application/json',
            # Stable provider correlation/idempotency key for retries.
            'Idempotency-Key': (idempotency_key or message_id).strip('<>')[:200],
        }
        with httpx.Client(timeout=timeout) as client:
            response = client.post(_RESEND_ENDPOINT, headers=headers, json=payload)
        if response.status_code >= 400:
            raise EmailDeliveryError(f'Resend API rejected email (HTTP {response.status_code})')
        try:
            data = response.json()
        except ValueError as exc:
            raise EmailDeliveryError('Resend API returned invalid JSON') from exc
        provider_id = str(data.get('id') or '').strip()
        if not provider_id:
            raise EmailDeliveryError('Resend API response did not include a message id')
        return provider_id

    def send(self, recipient: str, subject: str, body: str, *, html: str | None = None,
             category: str = 'TRANSACTIONAL', reply_to: str | None = None,
             attachments: Iterable[EmailAttachment] = (),
             idempotency_key: str | None = None) -> dict:
        # Campaign callers may pass a generator.  Materialize once so the
        # payload builder and Telnyx adapter see the same attachments.
        attachments = tuple(attachments or ())
        payload, normalized, text_body, html_body, message_id = self._payload(
            recipient, subject, body, html=html, reply_to=reply_to,
            attachments=attachments, idempotency_key=idempotency_key,
        )
        started = time.monotonic()
        # Telnyx is the target communications provider.  The legacy Resend
        # path remains available only while TELNYX_API_KEY is absent, so a
        # staged deployment can switch credentials without interrupting mail.
        if settings.telnyx_api_key.strip():
            try:
                result = communication_service.send_email(
                    recipient=normalized,
                    subject=subject,
                    text_body=text_body,
                    html_body=html_body or None,
                    idempotency_key=idempotency_key or message_id,
                    attachments=[
                        {'filename': a.filename, 'content': base64.b64encode(bytes(a.content)).decode('ascii'), 'content_type': a.content_type}
                        for a in attachments
                    ],
                )
            except Exception as exc:
                record_operational_event('EMAIL', 'TELNYX_SEND_FAILED', safe_exception_summary(exc), severity='ERROR', metadata={
                    'category': category,
                    'recipient_sha256': hashlib.sha256(normalized.encode()).hexdigest()[:16],
                })
                _outbox(normalized, subject, text_body, category=category,
                        metadata={'provider': 'telnyx', 'error': safe_exception_summary(exc)}, status='FAILED')
                raise
            provider_id = result.provider_id or message_id
            _outbox(normalized, subject, text_body, category=category, metadata={
                'provider': 'telnyx', 'message_id': provider_id, 'has_html': bool(html_body),
                'duration_ms': round((time.monotonic() - started) * 1000, 1),
            })
            return {'provider': 'telnyx', 'status': result.status, 'message_id': provider_id}
        # Development/test retain deterministic local outbox behavior. Production
        # never silently falls back when the configured provider is unavailable.
        if not settings.resend_api_key.strip() and settings.app_env != 'production':
            _outbox(normalized, subject, text_body, category=category,
                     metadata={'provider': 'local', 'message_id': message_id, 'has_html': bool(html_body)})
            return {'provider': 'local', 'status': 'SENT', 'message_id': message_id}
        try:
            provider_id = self._resend_send(payload, message_id, idempotency_key)
        except Exception as exc:
            record_operational_event('EMAIL', 'RESEND_SEND_FAILED', safe_exception_summary(exc), severity='ERROR', metadata={
                'category': category,
                'recipient_sha256': hashlib.sha256(normalized.encode()).hexdigest()[:16],
            })
            _outbox(normalized, subject, text_body, category=category,
                    metadata={'provider': 'resend', 'error': safe_exception_summary(exc)}, status='FAILED')
            raise
        duration_ms = round((time.monotonic() - started) * 1000, 1)
        _outbox(normalized, subject, text_body, category=category, metadata={
            'provider': 'resend', 'message_id': provider_id, 'has_html': bool(html_body),
            'duration_ms': duration_ms,
        })
        return {'provider': 'resend', 'status': 'SENT', 'message_id': provider_id}

    def send_transactional(self, recipient: str, subject: str, body: str, **kwargs) -> dict:
        return self.send(recipient, subject, body, category='TRANSACTIONAL', **kwargs)

    def send_campaign(self, recipient: str, subject: str, body: str, **kwargs) -> dict:
        return self.send(recipient, subject, body, category='CAMPAIGN', **kwargs)


email_service = EmailService()
