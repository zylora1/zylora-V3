from __future__ import annotations

import io
import re
import zipfile
from uuid import uuid4

from fastapi.testclient import TestClient
from sqlalchemy import text

from app.config import settings
from app.db import SessionLocal, migrate
from app.mail_campaigns import (
    campaign_csv,
    parse_csv_recipients,
    parse_manual_recipients,
    parse_xlsx_recipients,
    process_due_campaign_jobs,
    suppress_from_token,
)
from app.main import app
from app.security import clear_rate_limits


def _signup(email: str, name: str):
    client = TestClient(app)
    response = client.post('/api/auth/signup', json={'name': name, 'email': email, 'password': 'SecurePass123!'})
    assert response.status_code == 200, response.text
    return client, {'X-CSRF-Token': response.json()['csrf_token']}


def _admin():
    client, headers = _signup(f'mail-admin-{uuid4().hex[:8]}@example.com', 'Mail Center Admin')
    with SessionLocal.begin() as db:
        user_id = db.execute(text("SELECT id FROM users WHERE email LIKE 'mail-admin-%@example.com' ORDER BY created_at DESC LIMIT 1")).scalar_one()
        db.execute(text("UPDATE users SET role='SUPER_ADMIN',email_verified=1 WHERE id=:u"), {'u': user_id})
    return client, headers


def _reset_mail_tables():
    clear_rate_limits()
    migrate()
    with SessionLocal.begin() as db:
        for table in ('email_campaign_events', 'email_campaign_unsubscribe_tokens', 'email_campaign_attachments',
                      'email_campaign_jobs', 'email_campaign_recipients', 'platform_campaigns', 'email_suppressions'):
            db.execute(text(f'DELETE FROM {table}'))


def _xlsx_bytes(rows: list[list[str]]) -> bytes:
    shared = []
    for value in rows[0]:
        shared.append(value)
    strings = ''.join(f'<si><t>{value}</t></si>' for value in shared)
    cells = []
    for row_index, row in enumerate(rows, 1):
        cells.append(f'<row r="{row_index}">' + ''.join(f'<c r="A{row_index}" t="inlineStr"><is><t>{value}</t></is></c>' for value in row) + '</row>')
    content_types = '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'
    worksheet = f'<?xml version="1.0"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>{"".join(cells)}</sheetData></worksheet>'
    out = io.BytesIO()
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as archive:
        archive.writestr('[Content_Types].xml', content_types)
        archive.writestr('xl/worksheets/sheet1.xml', worksheet)
    return out.getvalue()


def test_recipient_imports_normalize_dedupe_and_reject_bad_rows():
    manual = parse_manual_recipients([' Alice@example.com,alice@example.com ', 'not-an-email'])
    assert [row['email'] for row in manual['recipients']] == ['alice@example.com']
    assert manual['duplicates'] == 1 and len(manual['invalid']) == 1

    csv_report = parse_csv_recipients(b'contact_email,name\nBob@example.com,Bob\nbad,Bad\n')
    assert csv_report['column'] == 'contact_email'
    assert csv_report['recipients'][0]['email'] == 'bob@example.com'
    assert len(csv_report['invalid']) == 1

    xlsx_report = parse_xlsx_recipients(_xlsx_bytes([['Email'], ['Carol@example.com']]))
    assert xlsx_report['column'] == 'Email' and xlsx_report['recipients'][0]['email'] == 'carol@example.com'


def test_mail_center_api_is_admin_only_and_sanitizes_campaign_content():
    _reset_mail_tables()
    normal, normal_headers = _signup(f'mail-user-{uuid4().hex[:8]}@example.com', 'Mail User')
    assert normal.post('/api/admin/campaigns', headers=normal_headers, json={
        'title': 'No access', 'subject': 'No access', 'body_text': 'No access', 'content_format': 'TEXT',
        'manual_recipients': ['recipient@example.com'],
    }).status_code == 403

    admin, headers = _admin()
    response = admin.post('/api/admin/campaigns', headers=headers, json={
        'title': 'Safe campaign', 'subject': 'A safe update', 'audience': 'MANUAL',
        'manual_recipients': ['Recipient@example.com', 'recipient@example.com', 'bad'],
        'body_html': '<h1>Update</h1><img src="https://cdn.example/a.png" onerror="alert(1)"><script>alert(1)</script>',
    })
    assert response.status_code == 200, response.text
    body = response.json()
    assert body['import_summary']['valid'] == 1 and len(body['import_summary']['invalid']) == 1
    campaign = body['campaign']
    assert '<script' not in campaign['body_html'].lower() and 'onerror' not in campaign['body_html'].lower()
    detail = admin.get(f"/api/admin/campaigns/{campaign['id']}", headers=headers)
    assert detail.status_code == 200 and detail.json()['campaign']['recipient_counts']['PENDING'] == 1


def test_campaign_queue_processes_smtp_accepted_mail_and_records_unsubscribe(monkeypatch):
    _reset_mail_tables()
    admin, headers = _admin()
    campaign = admin.post('/api/admin/campaigns', headers=headers, json={
        'title': 'Queue campaign', 'subject': 'Queue me', 'audience': 'MANUAL',
        'manual_recipients': ['recipient@example.com'], 'body_text': 'Hello', 'content_format': 'TEXT',
    }).json()['campaign']
    queued = admin.post(f"/api/admin/campaigns/{campaign['id']}/send", headers=headers, json={})
    assert queued.status_code == 200 and queued.json()['campaign']['status'] == 'QUEUED'

    sent = []
    monkeypatch.setattr('app.mail_campaigns.email_service.send_campaign', lambda recipient, subject, body, **kwargs: sent.append((recipient, subject)))
    result = process_due_campaign_jobs(1)
    assert result['processed'] == [campaign['id']] and sent == [('recipient@example.com', 'Queue me')]
    with SessionLocal() as db:
        row = db.execute(text('SELECT status,sent_count,delivered_count FROM platform_campaigns WHERE id=:c'), {'c': campaign['id']}).mappings().one()
        token = db.execute(text('SELECT token_hash FROM email_campaign_unsubscribe_tokens WHERE campaign_id=:c'), {'c': campaign['id']}).scalar_one()
    assert row['status'] == 'COMPLETED' and row['sent_count'] == 1
    # The worker stores only a hash; the public token is never persisted in plaintext.
    assert token and len(str(token)) == 64


def test_campaign_export_neutralizes_spreadsheet_formulas_and_unsubscribe_suppresses(monkeypatch):
    _reset_mail_tables()
    admin, headers = _admin()
    campaign = admin.post('/api/admin/campaigns', headers=headers, json={
        'title': 'Export campaign', 'subject': 'Export', 'audience': 'MANUAL',
        'manual_recipients': ['recipient@example.com'], 'body_text': 'Hello', 'content_format': 'TEXT',
    }).json()['campaign']
    admin.post(f"/api/admin/campaigns/{campaign['id']}/send", headers=headers, json={})
    monkeypatch.setattr('app.mail_campaigns.email_service.send_campaign', lambda *args, **kwargs: None)
    process_due_campaign_jobs(1)
    exported = campaign_csv(campaign['id'])
    assert "'recipient@example.com" not in exported  # normal addresses are not unnecessarily rewritten
    with SessionLocal.begin() as db:
        db.execute(text("UPDATE email_campaign_recipients SET last_error='=HYPERLINK(\"https://evil.example\")' WHERE campaign_id=:c"), {'c': campaign['id']})
    assert "'=HYPERLINK" in campaign_csv(campaign['id'])

    # A token generated for a real recipient is accepted once and creates a durable suppression.
    monkeypatch.setattr(settings, 'email_unsubscribe_secret', 'x' * 48)
    # Generate a token through the worker path with a deterministic SMTP stub.
    _reset_mail_tables()
    campaign = admin.post('/api/admin/campaigns', headers=headers, json={'title':'Token campaign','subject':'Token','audience':'MANUAL','manual_recipients':['token@example.com'],'body_text':'Hello','content_format':'TEXT'}).json()['campaign']
    admin.post(f"/api/admin/campaigns/{campaign['id']}/send", headers=headers, json={})
    rendered = []
    monkeypatch.setattr('app.mail_campaigns.email_service.send_campaign', lambda recipient, subject, body, **kwargs: rendered.append(body))
    process_due_campaign_jobs(1)
    assert rendered
    token_match = re.search(r'/api/email/unsubscribe/([A-Za-z0-9_.-]+)', rendered[0])
    assert token_match
    token = token_match.group(1)
    assert suppress_from_token(token) is True
    assert suppress_from_token(token) is False
    with SessionLocal() as db:
        assert db.execute(text("SELECT 1 FROM email_suppressions WHERE email='token@example.com'")).first()
    assert suppress_from_token('not-a-valid-token') is False
