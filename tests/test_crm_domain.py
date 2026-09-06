from __future__ import annotations
import pytest
from uuid import uuid4
from sqlalchemy import text
from app.db import SessionLocal, now_iso
from app.crm import (
    normalize_email, normalize_phone, find_contact_by_identity,
    calculate_lead_score, ingest_lead_into_crm, move_deal_stage,
    merge_contacts, run_automations, sanitize_csv_value,
    get_crm_overview_analytics, export_contacts_csv
)

def test_normalization_and_deduplication():
    assert normalize_email('  Test.User+Filter@Domain.COM  ') == 'test.user+filter@domain.com'
    assert normalize_phone('+1 (555) 123-4567') == '+15551234567'
    assert normalize_phone('123') is None

    with SessionLocal() as db:
        user_id = str(uuid4())
        c_id = str(uuid4())
        now = now_iso()
        db.execute(text("""INSERT INTO crm_contacts (id, user_id, email, phone, first_name, last_name, display_name, lead_score, last_activity_at, created_at, updated_at)
          VALUES (:id, :u, 'alice@acme.com', '+15551234567', 'Alice', 'Smith', 'Alice Smith', 10, :now, :now, :now)"""),
          {'id': c_id, 'u': user_id, 'now': now})
        db.commit()

        # Find by email
        match_email = find_contact_by_identity(db, user_id, email='ALICE@ACME.COM')
        assert match_email is not None
        assert match_email['id'] == c_id

        # Find by phone
        match_phone = find_contact_by_identity(db, user_id, phone='+1 (555) 123-4567')
        assert match_phone is not None
        assert match_phone['id'] == c_id

        # Tenant boundary check: another user should not find Alice
        other_user = str(uuid4())
        assert find_contact_by_identity(db, other_user, email='alice@acme.com') is None

def test_lead_scoring_logic():
    score_low, temp_low, reasons_low = calculate_lead_score({'email': 'test@gmail.com'})
    assert score_low < 25
    assert temp_low == 'COLD'

    score_high, temp_high, reasons_high = calculate_lead_score({
        'email': 'procurement@enterprise.com',
        'phone': '+15559876543',
        'company': 'Enterprise Global Inc',
        'service_interest': 'Full Custom Platform',
        'intent': 'APPOINTMENT_INTENT',
        'budget': '$50,000'
    })
    assert score_high >= 50
    assert temp_high == 'HOT'
    assert len(reasons_high) >= 3

def test_lead_ingestion_and_contact_creation():
    with SessionLocal() as db:
        user_id = str(uuid4())
        site_id = str(uuid4())
        lead_id = str(uuid4())

        lead_data = {
            'id': lead_id,
            'name': 'Bob Founder',
            'email': 'bob@startup.io',
            'phone': '+15554321000',
            'company': 'Startup Inc',
            'message': 'Need website and CRM setup asap',
            'source': 'WEBSITE_FORM',
            'intent': 'QUOTE_REQUEST'
        }

        res = ingest_lead_into_crm(db, user_id, lead_data, site_id=site_id)
        assert res['contact_id'] is not None
        assert res['lead_score'] > 20

        contact = db.execute(text('SELECT * FROM crm_contacts WHERE id=:id'), {'id': res['contact_id']}).mappings().first()
        assert contact['email'] == 'bob@startup.io'
        assert contact['company_name'] == 'Startup Inc'

        # Second ingestion with same email should deduplicate to same contact
        lead_data2 = {
            'id': str(uuid4()),
            'name': 'Bob Founder',
            'email': 'BOB@STARTUP.IO',
            'message': 'Following up on our quote',
            'source': 'CHATBOT'
        }
        res2 = ingest_lead_into_crm(db, user_id, lead_data2, site_id=site_id)
        assert res2['contact_id'] == res['contact_id']

def test_deal_stage_movement_and_optimistic_locking():
    with SessionLocal() as db:
        user_id = str(uuid4())
        deal_id = str(uuid4())
        pipe_id = str(uuid4())
        s1 = str(uuid4())
        s2 = str(uuid4())

        now = now_iso()
        db.execute(text("INSERT INTO crm_pipelines (id, user_id, name, is_default, created_at, updated_at) VALUES (:p, :u, 'Sales', 1, :now, :now)"),
                   {'p': pipe_id, 'u': user_id, 'now': now})
        db.execute(text("INSERT INTO crm_pipeline_stages (id, user_id, pipeline_id, name, stage_order, probability, color, stage_type, created_at, updated_at) VALUES (:s, :u, :p, 'Lead', 0, 0.2, '#5B5CF0', 'OPEN', :now, :now)"),
                   {'s': s1, 'u': user_id, 'p': pipe_id, 'now': now})
        db.execute(text("INSERT INTO crm_pipeline_stages (id, user_id, pipeline_id, name, stage_order, probability, color, stage_type, created_at, updated_at) VALUES (:s, :u, :p, 'Won', 1, 1.0, '#16A34A', 'WON', :now, :now)"),
                   {'s': s2, 'u': user_id, 'p': pipe_id, 'now': now})

        db.execute(text("""INSERT INTO crm_deals (id, user_id, pipeline_id, stage_id, name, amount, currency, revision, created_at, updated_at)
          VALUES (:id, :u, :p, :s, 'Big Deal', 10000, 'USD', 1, :now, :now)"""),
          {'id': deal_id, 'u': user_id, 'p': pipe_id, 's': s1, 'now': now})
        db.commit()

        updated = move_deal_stage(db, user_id, deal_id, s2, expected_revision=1)
        assert updated['stage_id'] == s2
        assert updated['revision'] == 2

        with pytest.raises(ValueError, match='stale revision|modified by another'):
            move_deal_stage(db, user_id, deal_id, s1, expected_revision=1)

def test_contact_merging():
    with SessionLocal() as db:
        user_id = str(uuid4())
        c1 = str(uuid4())
        c2 = str(uuid4())
        now = now_iso()

        db.execute(text("""INSERT INTO crm_contacts (id, user_id, email, first_name, last_name, display_name, lead_score, last_activity_at, created_at, updated_at)
          VALUES (:id, :u, 'carol@primary.com', 'Carol', 'Danvers', 'Carol Danvers', 30, :now, :now, :now)"""),
          {'id': c1, 'u': user_id, 'now': now})
        db.execute(text("""INSERT INTO crm_contacts (id, user_id, phone, company_name, job_title, display_name, lead_score, last_activity_at, created_at, updated_at)
          VALUES (:id, :u, '+15559998888', 'Marvel Corp', 'Captain', 'Captain Marvel', 20, :now, :now, :now)"""),
          {'id': c2, 'u': user_id, 'now': now})
        db.commit()

        merge_res = merge_contacts(db, user_id, primary_id=c1, secondary_id=c2)
        assert merge_res['status'] == 'MERGED'

        c1_updated = db.execute(text('SELECT * FROM crm_contacts WHERE id=:id'), {'id': c1}).mappings().first()
        assert c1_updated['phone'] == '+15559998888'
        assert c1_updated['company_name'] == 'Marvel Corp'
        assert c1_updated['lead_score'] == 30

        sec = db.execute(text('SELECT is_archived FROM crm_contacts WHERE id=:id'), {'id': c2}).mappings().first()
        assert sec['is_archived'] == 1

def test_csv_sanitization():
    assert sanitize_csv_value('=1+1') == "'=1+1"
    assert sanitize_csv_value('+123') == "'+123"
    assert sanitize_csv_value('-50') == "'-50"
    assert sanitize_csv_value('@mention') == "'@mention"
    assert sanitize_csv_value('Normal Name') == 'Normal Name'
