"""Authoritative SMTP email transport for transactional and campaign mail.

Feature code calls this module (directly or through the backwards-compatible
``providers.send_email`` facade); it must never create its own SMTP connection.
"""
from __future__ import annotations

import hashlib
import json
import re
import smtplib
import ssl
import time
from dataclasses import dataclass
from email.message import EmailMessage
from email.utils import formataddr, make_msgid
from typing import Iterable

from email_validator import EmailNotValidError, validate_email
from sqlalchemy import text

from .config import settings
from .content_safety import html_to_text, looks_like_html, sanitize_email_html
from .db import SessionLocal, now_iso
from .operations import record_operational_event, safe_exception_summary

_HEADER_BREAK = re.compile(r"[\r\n]")


class EmailConfigurationError(RuntimeError):
    """Raised when a live SMTP delivery was requested without usable settings."""


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
    cleaned = ' '.join(str(value or '').split())
    if not cleaned or _HEADER_BREAK.search(str(value or '')):
        raise ValueError(f'Invalid {label}')
    return cleaned[:limit]


def smtp_is_configured() -> bool:
    return bool(settings.smtp_host and settings.smtp_from_email)


def _outbox(recipient: str, subject: str, body: str, *, category: str, metadata: dict, status: str = 'SENT') -> None:
    with SessionLocal.begin() as db:
        db.execute(
            text('''INSERT INTO outbox(channel,recipient,subject,body,status,metadata,created_at)
              VALUES ('EMAIL',:r,:s,:b,:status,:m,:a)'''),
            {'r': recipient, 's': subject, 'b': body, 'status': status,
             'm': json.dumps({'category': category, **metadata}, separators=(',', ':')),
             'a': now_iso()},
        )


class EmailService:
    """Composes MIME mail and delivers it through one SMTP transport."""

    def _message(self, recipient: str, subject: str, body: str, *, html: str | None,
                 reply_to: str | None, attachments: Iterable[EmailAttachment]) -> tuple[EmailMessage, str, str]:
        recipient = normalize_recipient(recipient)
        subject = _clean_header(subject, 'subject', 200)
        if _HEADER_BREAK.search(str(reply_to or '')):
            raise ValueError('Invalid reply-to address')
        html_body = sanitize_email_html(html if html is not None else body) if (html is not None or looks_like_html(body)) else None
        # Preserve the caller's explicit plain-text alternative (campaigns use
        # it for the unsubscribe URL); only derive text from HTML when no
        # plain-text content was supplied.
        text_body = str(body or '').strip() or (html_to_text(html_body) if html_body is not None else '')
        if not text_body:
            raise ValueError('Email body is required')
        message = EmailMessage()
        message['From'] = formataddr((_clean_header(settings.smtp_from_name or 'Zylora', 'from name', 120), normalize_recipient(settings.smtp_from_email)))
        message['To'] = recipient
        message['Subject'] = subject
        message['Message-ID'] = make_msgid(domain=normalize_recipient(settings.smtp_from_email).split('@', 1)[1])
        configured_reply = reply_to if reply_to is not None else settings.smtp_reply_to
        if configured_reply:
            message['Reply-To'] = normalize_recipient(configured_reply)
        message.set_content(text_body, charset='utf-8')
        if html_body is not None:
            message.add_alternative(html_body, subtype='html', charset='utf-8')
        for attachment in attachments:
            filename = re.sub(r'[^A-Za-z0-9._ -]+', '-', str(attachment.filename or 'attachment')).strip(' .')[:120] or 'attachment'
            main, _, sub = str(attachment.content_type or 'application/octet-stream').partition('/')
            message.add_attachment(attachment.content, maintype=main or 'application', subtype=sub or 'octet-stream', filename=filename)
        return message, text_body, html_body or ''

    def _smtp_send(self, message: EmailMessage, recipient: str) -> None:
        if not smtp_is_configured():
            raise EmailConfigurationError('SMTP_HOST and SMTP_FROM_EMAIL are required for email delivery')
        security = settings.smtp_security.strip().lower()
        if security not in {'starttls', 'tls', 'none'}:
            raise EmailConfigurationError('SMTP_SECURITY must be starttls, tls, or none')
        timeout = max(1, min(int(settings.smtp_connection_timeout or settings.smtp_send_timeout), 120))
        context = ssl.create_default_context()
        client = None
        try:
            if security == 'tls':
                client = smtplib.SMTP_SSL(settings.smtp_host, int(settings.smtp_port), timeout=timeout, context=context)
            else:
                client = smtplib.SMTP(settings.smtp_host, int(settings.smtp_port), timeout=timeout)
                client.ehlo()
                if security == 'starttls':
                    client.starttls(context=context)
                    client.ehlo()
            if bool(settings.smtp_username) != bool(settings.smtp_password):
                raise EmailConfigurationError('SMTP_USERNAME and SMTP_PASSWORD must be supplied together')
            if settings.smtp_username:
                client.login(settings.smtp_username, settings.smtp_password)
            client.send_message(message, to_addrs=[recipient])
        finally:
            if client is not None:
                try:
                    client.quit()
                except Exception:
                    try: client.close()
                    except Exception: pass

    def send(self, recipient: str, subject: str, body: str, *, html: str | None = None,
             category: str = 'TRANSACTIONAL', reply_to: str | None = None,
             attachments: Iterable[EmailAttachment] = ()) -> dict:
        message, text_body, html_body = self._message(recipient, subject, body, html=html, reply_to=reply_to, attachments=attachments)
        normalized = normalize_recipient(recipient)
        message_id = str(message['Message-ID'])
        started = time.monotonic()
        if not smtp_is_configured() and settings.app_env != 'production':
            _outbox(normalized, subject, text_body, category=category, metadata={'provider': 'local', 'message_id': message_id, 'has_html': bool(html_body)})
            return {'provider': 'local', 'status': 'SENT', 'message_id': message_id}
        try:
            self._smtp_send(message, normalized)
        except Exception as exc:
            record_operational_event('EMAIL', 'SMTP_SEND_FAILED', safe_exception_summary(exc), severity='ERROR', metadata={
                'category': category, 'recipient_sha256': hashlib.sha256(normalized.encode()).hexdigest()[:16],
            })
            _outbox(normalized, subject, text_body, category=category, metadata={'provider': 'smtp', 'error': safe_exception_summary(exc)}, status='FAILED')
            raise
        duration_ms = round((time.monotonic() - started) * 1000, 1)
        _outbox(normalized, subject, text_body, category=category, metadata={'provider': 'smtp', 'message_id': message_id, 'has_html': bool(html_body), 'duration_ms': duration_ms})
        return {'provider': 'smtp', 'status': 'SENT', 'message_id': message_id}

    def send_transactional(self, recipient: str, subject: str, body: str, **kwargs) -> dict:
        return self.send(recipient, subject, body, category='TRANSACTIONAL', **kwargs)

    def send_campaign(self, recipient: str, subject: str, body: str, **kwargs) -> dict:
        return self.send(recipient, subject, body, category='CAMPAIGN', **kwargs)


email_service = EmailService()
