from datetime import datetime
from pydantic import BaseModel, EmailStr, Field

class RegisterIn(BaseModel):
    email: str
    password: str = Field(min_length=8)

class SiteCreateIn(BaseModel):
    name: str
    slug: str
    origin: str
    page_count: int
    template_key: str | None = None

class LeadIn(BaseModel):
    source: str
    name: str
    email: str
    phone: str | None = None
    message: str | None = None

class ManagedLeadIn(BaseModel):
    name: str
    email: str
    website_type: str
