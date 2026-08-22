from enum import StrEnum

class Role(StrEnum):
    USER = "USER"
    SUPER_ADMIN = "SUPER_ADMIN"

class Plan(StrEnum):
    FREE = "FREE"
    STARTER = "STARTER"
    GROWTH = "GROWTH"
    MANAGED = "MANAGED"

class SiteOrigin(StrEnum):
    TEMPLATE = "TEMPLATE"
    AI = "AI"

class SiteState(StrEnum):
    DRAFT = "DRAFT"
    LIVE = "LIVE"
    ARCHIVED = "ARCHIVED"

class LeadSource(StrEnum):
    FORM = "FORM"
    CHATBOT = "CHATBOT"
    PROACTIVE = "PROACTIVE"

class ManagedLeadStatus(StrEnum):
    PENDING = "PENDING"
    CLOSED = "CLOSED"
    NOT_CLOSED = "NOT_CLOSED"

class AppointmentStatus(StrEnum):
    CONFIRMED = "CONFIRMED"
    CANCELLED = "CANCELLED"

class BlogStatus(StrEnum):
    DRAFT = "DRAFT"
    SCHEDULED = "SCHEDULED"
    PUBLISHED = "PUBLISHED"
    UNPUBLISHED = "UNPUBLISHED"
