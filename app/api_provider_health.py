"""Super Admin-only provider operations endpoints."""

from __future__ import annotations

from fastapi import APIRouter, HTTPException, Request

from .provider_health import provider_health_snapshot, provider_usage_snapshot
from .security import current_user


router = APIRouter()


def _admin(request: Request) -> dict:
    user = current_user(request)
    if user.get("role") != "SUPER_ADMIN":
        raise HTTPException(status_code=403, detail="Admin only")
    return user


@router.get("/api/admin/provider-health")
def admin_provider_health(request: Request):
    _admin(request)
    return provider_health_snapshot()


@router.get("/api/admin/provider-usage")
def admin_provider_usage(request: Request, days: int = 30):
    _admin(request)
    return provider_usage_snapshot(days)
