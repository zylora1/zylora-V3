"""Provider-neutral infrastructure service facade.

The existing provider functions remain compatibility facades during the
staged migration.  This service is the boundary new code should depend on;
Cloudflare credentials and request details stay in the provider module.
"""

from __future__ import annotations

from typing import Any

from .provider_services import ProviderServiceError


class CloudflareInfrastructureService:
    provider = "cloudflare"

    def ensure_domain(self, **kwargs: Any):
        from .providers import cloudflare_create_hostname
        return cloudflare_create_hostname(str(kwargs["hostname"]))

    def get_domain(self, **kwargs: Any):
        from .providers import cloudflare_get_hostname
        return cloudflare_get_hostname(str(kwargs["provider_id"]), str(kwargs["hostname"]))

    def delete_domain(self, **kwargs: Any):
        from .providers import cloudflare_delete_hostname
        return cloudflare_delete_hostname(str(kwargs["provider_id"]))

    def verify_turnstile(self, **kwargs: Any) -> bool:
        from .providers import verify_turnstile
        return bool(verify_turnstile(str(kwargs.get("token") or ""), str(kwargs.get("remote_ip") or "")))

    def put_media(self, **kwargs: Any):
        # Media storage already has its own canonical service.  Keep this
        # method explicit so Cloudflare R2 can be selected without exposing an
        # S3 client to feature modules.
        raise ProviderServiceError("R2 media operations still use the canonical media service")


infrastructure_service = CloudflareInfrastructureService()
