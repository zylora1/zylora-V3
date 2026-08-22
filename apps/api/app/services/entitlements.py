from dataclasses import dataclass
from ..enums import Plan, SiteOrigin

@dataclass(frozen=True)
class Entitlement:
    page_limit: int
    branding_removed: bool
    default_ai_credits: int

DEFAULTS = {
    Plan.FREE: Entitlement(2, False, 15),
    Plan.STARTER: Entitlement(5, True, 100),
    Plan.GROWTH: Entitlement(8, True, 500),
}

def entitlement_for(plan: str) -> Entitlement:
    try: return DEFAULTS[Plan(plan)]
    except Exception as exc: raise ValueError("managed_plan_has_no_self_service_entitlement") from exc

def validate_page_count(plan: str, origin: str, current_pages: int, requested_pages: int) -> None:
    ent = entitlement_for(plan)
    if requested_pages < 1: raise ValueError("invalid_page_count")
    if requested_pages > ent.page_limit: raise ValueError("page_limit_exceeded")
    if origin == SiteOrigin.TEMPLATE and requested_pages != current_pages:
        raise ValueError("template_page_count_fixed")

def can_use_template(plan: str, template_pages: int) -> bool:
    if template_pages > 10 or template_pages < 1: return False
    return template_pages <= entitlement_for(plan).page_limit
