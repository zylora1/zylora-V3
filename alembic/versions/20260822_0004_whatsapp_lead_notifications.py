"""tenant-safe WhatsApp lead notifications

Revision ID: 20260822_0004
Revises: 20260822_0003
"""
from alembic import op
import sqlalchemy as sa

revision = "20260822_0004"
down_revision = "20260822_0003"
branch_labels = None
depends_on = None


def _columns(bind, table: str) -> set[str]:
    return {column["name"] for column in sa.inspect(bind).get_columns(table)}


def upgrade():
    bind = op.get_bind()
    tables = set(sa.inspect(bind).get_table_names())
    if "whatsapp_number" not in _columns(bind, "users"):
        op.add_column("users", sa.Column("whatsapp_number", sa.String(16), nullable=True))
    if "client_request_id" not in _columns(bind, "leads"):
        with op.batch_alter_table("leads") as batch:
            batch.add_column(sa.Column("client_request_id", sa.String(128), nullable=True))
            batch.create_unique_constraint("uq_lead_site_request", ["site_id", "client_request_id"])
    if "notification_deliveries" not in tables:
        op.create_table(
            "notification_deliveries",
            sa.Column("id", sa.Integer(), primary_key=True),
            sa.Column("owner_id", sa.Integer(), sa.ForeignKey("users.id"), nullable=False),
            sa.Column("site_id", sa.Integer(), sa.ForeignKey("sites.id"), nullable=False),
            sa.Column("lead_id", sa.Integer(), sa.ForeignKey("leads.id"), nullable=False),
            sa.Column("channel", sa.String(32), nullable=False, server_default="WHATSAPP"),
            sa.Column("event_type", sa.String(64), nullable=False, server_default="NEW_LEAD"),
            sa.Column("status", sa.String(32), nullable=False, server_default="PENDING"),
            sa.Column("provider", sa.String(32), nullable=False, server_default="TWILIO"),
            sa.Column("provider_message_id", sa.String(128), nullable=True),
            sa.Column("attempt_count", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("last_error", sa.Text(), nullable=True),
            sa.Column("created_at", sa.DateTime(), nullable=False),
            sa.Column("sent_at", sa.DateTime(), nullable=True),
            sa.Column("failed_at", sa.DateTime(), nullable=True),
            sa.UniqueConstraint("lead_id", "channel", "event_type", name="uq_notification_lead_channel_event"),
        )
        op.create_index("ix_notification_deliveries_owner_id", "notification_deliveries", ["owner_id"])
        op.create_index("ix_notification_deliveries_site_id", "notification_deliveries", ["site_id"])
        op.create_index("ix_notification_deliveries_lead_id", "notification_deliveries", ["lead_id"])
        op.create_index("ix_notification_deliveries_status", "notification_deliveries", ["status"])
        op.create_index("ix_notification_pending", "notification_deliveries", ["status", "created_at"])


def downgrade():
    bind = op.get_bind()
    tables = set(sa.inspect(bind).get_table_names())
    if "notification_deliveries" in tables:
        op.drop_table("notification_deliveries")
    if "client_request_id" in _columns(bind, "leads"):
        with op.batch_alter_table("leads") as batch:
            batch.drop_constraint("uq_lead_site_request", type_="unique")
            batch.drop_column("client_request_id")
    if "whatsapp_number" in _columns(bind, "users"):
        op.drop_column("users", "whatsapp_number")
