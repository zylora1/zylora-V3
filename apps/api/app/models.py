from __future__ import annotations
from datetime import datetime
from sqlalchemy import String, Integer, Boolean, DateTime, ForeignKey, Text, UniqueConstraint, Index
from sqlalchemy.orm import Mapped, mapped_column
from .db import Base

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str] = mapped_column(String(320), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(Text)
    role: Mapped[str] = mapped_column(String(32), default="USER")
    plan: Mapped[str] = mapped_column(String(32), default="FREE")
    ai_credits: Mapped[int] = mapped_column(Integer, default=15)
    lead_credits: Mapped[int] = mapped_column(Integer, default=50)
    email_verified: Mapped[bool] = mapped_column(Boolean, default=False)
    google_sub: Mapped[str | None] = mapped_column(String(255), unique=True, nullable=True)
    whatsapp_number: Mapped[str | None] = mapped_column(String(16), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Site(Base):
    __tablename__ = "sites"
    __table_args__ = (Index("ix_site_owner_state", "owner_id", "state"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(160))
    slug: Mapped[str] = mapped_column(String(160), unique=True, index=True)
    origin: Mapped[str] = mapped_column(String(32))
    page_count: Mapped[int] = mapped_column(Integer)
    template_key: Mapped[str | None] = mapped_column(String(160), nullable=True)
    state: Mapped[str] = mapped_column(String(32), default="DRAFT")
    content_json: Mapped[str] = mapped_column(Text, default="{}")
    seo_json: Mapped[str] = mapped_column(Text, default="{}")
    theme_json: Mapped[str] = mapped_column(Text, default="{}")
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Lead(Base):
    __tablename__ = "leads"
    __table_args__ = (UniqueConstraint("site_id", "client_request_id", name="uq_lead_site_request"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    source: Mapped[str] = mapped_column(String(32))
    name: Mapped[str] = mapped_column(String(160))
    email: Mapped[str] = mapped_column(String(320))
    phone: Mapped[str | None] = mapped_column(String(64), nullable=True)
    message: Mapped[str | None] = mapped_column(Text, nullable=True)
    client_request_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class NotificationDelivery(Base):
    __tablename__ = "notification_deliveries"
    __table_args__ = (
        UniqueConstraint("lead_id", "channel", "event_type", name="uq_notification_lead_channel_event"),
        Index("ix_notification_pending", "status", "created_at"),
    )
    id: Mapped[int] = mapped_column(primary_key=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    lead_id: Mapped[int] = mapped_column(ForeignKey("leads.id"), index=True)
    channel: Mapped[str] = mapped_column(String(32), default="WHATSAPP")
    event_type: Mapped[str] = mapped_column(String(64), default="NEW_LEAD")
    status: Mapped[str] = mapped_column(String(32), default="PENDING", index=True)
    provider: Mapped[str] = mapped_column(String(32), default="TWILIO")
    provider_message_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    attempt_count: Mapped[int] = mapped_column(Integer, default=0)
    last_error: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    sent_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    failed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)

class SchedulingConfig(Base):
    __tablename__ = "scheduling_configs"
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), primary_key=True)
    enabled: Mapped[bool] = mapped_column(Boolean, default=False)
    timezone: Mapped[str] = mapped_column(String(80), default="Asia/Kolkata")
    duration_minutes: Mapped[int] = mapped_column(Integer, default=30)
    buffer_minutes: Mapped[int] = mapped_column(Integer, default=15)
    day_start_minute: Mapped[int] = mapped_column(Integer, default=540)
    day_end_minute: Mapped[int] = mapped_column(Integer, default=1020)
    weekdays_csv: Mapped[str] = mapped_column(String(32), default="0,1,2,3,4")

class ManagedSchedulingConfig(Base):
    __tablename__ = "managed_scheduling_config"
    id: Mapped[int] = mapped_column(primary_key=True, default=1)
    enabled: Mapped[bool] = mapped_column(Boolean, default=True)
    timezone: Mapped[str] = mapped_column(String(80), default="Asia/Kolkata")
    duration_minutes: Mapped[int] = mapped_column(Integer, default=30)
    buffer_minutes: Mapped[int] = mapped_column(Integer, default=15)
    day_start_minute: Mapped[int] = mapped_column(Integer, default=540)
    day_end_minute: Mapped[int] = mapped_column(Integer, default=1020)
    weekdays_csv: Mapped[str] = mapped_column(String(32), default="0,1,2,3,4")
    @property
    def site_id(self): return None

class Appointment(Base):
    __tablename__ = "appointments"
    id: Mapped[int] = mapped_column(primary_key=True)
    site_id: Mapped[int | None] = mapped_column(ForeignKey("sites.id"), index=True, nullable=True)
    lead_id: Mapped[int | None] = mapped_column(ForeignKey("leads.id"), nullable=True)
    managed_lead_id: Mapped[int | None] = mapped_column(ForeignKey("managed_leads.id"), nullable=True)
    starts_at: Mapped[datetime] = mapped_column(DateTime, index=True)
    ends_at: Mapped[datetime] = mapped_column(DateTime)
    timezone: Mapped[str] = mapped_column(String(80))
    status: Mapped[str] = mapped_column(String(32), default="CONFIRMED")

class ManagedLead(Base):
    __tablename__ = "managed_leads"
    __table_args__ = (UniqueConstraint("client_request_id", name="uq_managed_lead_client_request"),)
    id: Mapped[int] = mapped_column(primary_key=True)
    lead_code: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    client_request_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    request_fingerprint: Mapped[str | None] = mapped_column(String(64), nullable=True)
    name: Mapped[str] = mapped_column(String(160))
    email: Mapped[str] = mapped_column(String(320))
    website_type: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(32), default="PENDING")
    amount_received_minor: Mapped[int] = mapped_column(Integer, default=0)
    currency: Mapped[str] = mapped_column(String(3), default="INR")
    internal_notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class ManagedLeadEmailDelivery(Base):
    __tablename__ = "managed_lead_email_deliveries"
    __table_args__ = (
        UniqueConstraint("managed_lead_id", "kind", name="uq_managed_lead_email_kind"),
        Index("ix_managed_email_pending", "status", "created_at"),
    )
    id: Mapped[int] = mapped_column(primary_key=True)
    managed_lead_id: Mapped[int] = mapped_column(ForeignKey("managed_leads.id"), index=True)
    kind: Mapped[str] = mapped_column(String(32))
    recipient: Mapped[str] = mapped_column(String(320))
    subject: Mapped[str] = mapped_column(String(320))
    html: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(32), default="PENDING", index=True)
    provider: Mapped[str] = mapped_column(String(32), default="RESEND")
    provider_message_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    attempt_count: Mapped[int] = mapped_column(Integer, default=0)
    last_error: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    claimed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    sent_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    failed_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)

class BlogPost(Base):
    __tablename__ = "blog_posts"
    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(240))
    slug: Mapped[str] = mapped_column(String(240), unique=True, index=True)
    excerpt: Mapped[str] = mapped_column(Text)
    content: Mapped[str] = mapped_column(Text)
    featured_image: Mapped[str | None] = mapped_column(Text, nullable=True)
    seo_title: Mapped[str | None] = mapped_column(String(240), nullable=True)
    seo_description: Mapped[str | None] = mapped_column(String(320), nullable=True)
    canonical_url: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[str] = mapped_column(String(32), default="DRAFT")
    publish_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class PlatformConfig(Base):
    __tablename__ = "platform_config"
    key: Mapped[str] = mapped_column(String(120), primary_key=True)
    value: Mapped[str] = mapped_column(Text)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Publication(Base):
    __tablename__ = "publications"
    id: Mapped[int] = mapped_column(primary_key=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    version: Mapped[int] = mapped_column(Integer)
    storage_key: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    __table_args__ = (UniqueConstraint("site_id", "version", name="uq_publication_site_version"),)


class Subscription(Base):
    __tablename__ = "subscriptions"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    provider: Mapped[str] = mapped_column(String(32), default="RAZORPAY")
    provider_subscription_id: Mapped[str] = mapped_column(String(128), unique=True, index=True)
    plan: Mapped[str] = mapped_column(String(32))
    status: Mapped[str] = mapped_column(String(32), default="CREATED")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class CustomDomain(Base):
    __tablename__ = "custom_domains"
    id: Mapped[int] = mapped_column(primary_key=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    hostname: Mapped[str] = mapped_column(String(253), unique=True, index=True)
    cloudflare_hostname_id: Mapped[str | None] = mapped_column(String(128), nullable=True)
    status: Mapped[str] = mapped_column(String(32), default="PENDING")
    ssl_status: Mapped[str] = mapped_column(String(32), default="PENDING")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class AuthActionToken(Base):
    __tablename__ = "auth_action_tokens"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    token_hash: Mapped[str] = mapped_column(String(64), unique=True, index=True)
    purpose: Mapped[str] = mapped_column(String(32), index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime)
    used_at: Mapped[datetime | None] = mapped_column(DateTime, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class WebhookEvent(Base):
    __tablename__ = "webhook_events"
    id: Mapped[int] = mapped_column(primary_key=True)
    provider: Mapped[str] = mapped_column(String(32), index=True)
    event_key: Mapped[str] = mapped_column(String(160))
    received_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    __table_args__ = (UniqueConstraint("provider", "event_key", name="uq_webhook_provider_event"),)

class CreditTransaction(Base):
    __tablename__ = "credit_transactions"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    credit_type: Mapped[str] = mapped_column(String(16), index=True)
    kind: Mapped[str] = mapped_column(String(24))
    amount: Mapped[int] = mapped_column(Integer)
    idempotency_key: Mapped[str | None] = mapped_column(String(128), nullable=True, unique=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class ManagedLeadStatusHistory(Base):
    __tablename__ = "managed_lead_status_history"
    id: Mapped[int] = mapped_column(primary_key=True)
    managed_lead_id: Mapped[int] = mapped_column(ForeignKey("managed_leads.id"), index=True)
    actor_user_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    old_status: Mapped[str | None] = mapped_column(String(32), nullable=True)
    new_status: Mapped[str] = mapped_column(String(32))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class ChatSession(Base):
    __tablename__ = "chat_sessions"
    id: Mapped[int] = mapped_column(primary_key=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    visitor_key: Mapped[str] = mapped_column(String(128), index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    __table_args__ = (UniqueConstraint("site_id", "visitor_key", name="uq_chat_site_visitor"),)

class ChatMessage(Base):
    __tablename__ = "chat_messages"
    id: Mapped[int] = mapped_column(primary_key=True)
    session_id: Mapped[int] = mapped_column(ForeignKey("chat_sessions.id"), index=True)
    role: Mapped[str] = mapped_column(String(16))
    content: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class SiteDocument(Base):
    __tablename__ = "site_documents"
    id: Mapped[int] = mapped_column(primary_key=True)
    site_id: Mapped[int] = mapped_column(ForeignKey("sites.id"), index=True)
    name: Mapped[str] = mapped_column(String(240))
    content: Mapped[str] = mapped_column(Text)
    source_type: Mapped[str] = mapped_column(String(32), default="PASTE")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class TemplateRecord(Base):
    __tablename__ = "template_records"
    key: Mapped[str] = mapped_column(String(160), primary_key=True)
    family: Mapped[str] = mapped_column(String(120), index=True)
    quality_tier: Mapped[str] = mapped_column(String(32), default="variant", index=True)
    page_count: Mapped[int] = mapped_column(Integer, default=1)
    visible: Mapped[bool] = mapped_column(Boolean, default=True, index=True)
    featured: Mapped[bool] = mapped_column(Boolean, default=False, index=True)
    display_name: Mapped[str] = mapped_column(String(240))
    description: Mapped[str] = mapped_column(Text, default="")
    tags_csv: Mapped[str] = mapped_column(Text, default="")
    preview_image: Mapped[str | None] = mapped_column(Text, nullable=True)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
