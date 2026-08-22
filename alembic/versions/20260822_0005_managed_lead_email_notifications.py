"""managed lead email notifications

Revision ID: 20260822_0005
Revises: 20260822_0004
"""
from alembic import op
import sqlalchemy as sa

revision = "20260822_0005"
down_revision = "20260822_0004"
branch_labels = None
depends_on = None


def _columns(bind, table: str) -> set[str]:
    return {column["name"] for column in sa.inspect(bind).get_columns(table)}


def upgrade():
    bind=op.get_bind()
    columns=_columns(bind,"managed_leads")
    if "client_request_id" not in columns or "request_fingerprint" not in columns:
        with op.batch_alter_table("managed_leads") as batch:
            if "client_request_id" not in columns:
                batch.add_column(sa.Column("client_request_id",sa.String(128),nullable=True))
                batch.create_unique_constraint("uq_managed_lead_client_request",["client_request_id"])
            if "request_fingerprint" not in columns:
                batch.add_column(sa.Column("request_fingerprint",sa.String(64),nullable=True))
    if "managed_lead_email_deliveries" not in set(sa.inspect(bind).get_table_names()):
        op.create_table(
            "managed_lead_email_deliveries",
            sa.Column("id", sa.Integer(), primary_key=True),
            sa.Column("managed_lead_id", sa.Integer(), sa.ForeignKey("managed_leads.id"), nullable=False),
            sa.Column("kind", sa.String(32), nullable=False),
            sa.Column("recipient", sa.String(320), nullable=False),
            sa.Column("subject", sa.String(320), nullable=False),
            sa.Column("html", sa.Text(), nullable=False),
            sa.Column("status", sa.String(32), nullable=False, server_default="PENDING"),
            sa.Column("provider", sa.String(32), nullable=False, server_default="RESEND"),
            sa.Column("provider_message_id", sa.String(128), nullable=True),
            sa.Column("attempt_count", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("last_error", sa.Text(), nullable=True),
            sa.Column("created_at", sa.DateTime(), nullable=False),
            sa.Column("claimed_at", sa.DateTime(), nullable=True),
            sa.Column("sent_at", sa.DateTime(), nullable=True),
            sa.Column("failed_at", sa.DateTime(), nullable=True),
            sa.UniqueConstraint("managed_lead_id", "kind", name="uq_managed_lead_email_kind"),
        )
        op.create_index("ix_managed_lead_email_deliveries_managed_lead_id", "managed_lead_email_deliveries", ["managed_lead_id"])
        op.create_index("ix_managed_lead_email_deliveries_status", "managed_lead_email_deliveries", ["status"])
        op.create_index("ix_managed_email_pending", "managed_lead_email_deliveries", ["status", "created_at"])


def downgrade():
    bind=op.get_bind()
    if "managed_lead_email_deliveries" in set(sa.inspect(bind).get_table_names()): op.drop_table("managed_lead_email_deliveries")
    columns=_columns(bind,"managed_leads")
    if "client_request_id" in columns or "request_fingerprint" in columns:
        with op.batch_alter_table("managed_leads") as batch:
            if "client_request_id" in columns:
                batch.drop_constraint("uq_managed_lead_client_request",type_="unique")
                batch.drop_column("client_request_id")
            if "request_fingerprint" in columns: batch.drop_column("request_fingerprint")
