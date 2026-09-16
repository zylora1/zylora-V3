"""Provider-neutral customer payment service facade."""

from __future__ import annotations

from typing import Any


class RazorpayPaymentService:
    provider = "razorpay"

    def create_order(self, **kwargs: Any):
        from .providers import razorpay_create_order
        return razorpay_create_order(int(kwargs["amount_minor"]), str(kwargs["currency"]), str(kwargs["receipt"]), kwargs.get("notes"))

    def create_subscription(self, **kwargs: Any):
        compatibility_factory = kwargs.pop("compatibility_factory", None)
        if compatibility_factory is not None:
            # Transitional injection hook used by the existing route's
            # provider-error tests; production code still enters through this
            # facade and the hook is never supplied by the browser.
            return compatibility_factory(str(kwargs["plan_id"]), idempotency_key=str(kwargs["idempotency_key"]), notes=kwargs.get("notes"))
        from .providers import razorpay_create_subscription
        return razorpay_create_subscription(str(kwargs["plan_id"]), idempotency_key=str(kwargs["idempotency_key"]), notes=kwargs.get("notes"))

    def get_subscription(self, **kwargs: Any):
        from .providers import razorpay_get_subscription
        return razorpay_get_subscription(str(kwargs["subscription_id"]))

    def verify_webhook(self, **kwargs: Any) -> bool:
        from .providers import razorpay_verify_webhook
        return bool(razorpay_verify_webhook(bytes(kwargs["raw_body"]), str(kwargs.get("signature") or "")))

    def verify_payment(self, **kwargs: Any) -> bool:
        from .providers import razorpay_verify_payment
        return bool(razorpay_verify_payment(str(kwargs["order_id"]), str(kwargs["payment_id"]), str(kwargs["signature"])))

    def verify_subscription_payment(self, **kwargs: Any) -> bool:
        from .providers import razorpay_verify_subscription_payment
        return bool(razorpay_verify_subscription_payment(str(kwargs["subscription_id"]), str(kwargs["payment_id"]), str(kwargs["signature"])))

    def get_payment(self, **kwargs: Any):
        from .providers import razorpay_get_payment
        return razorpay_get_payment(str(kwargs["payment_id"]))

    def cancel_subscription(self, **kwargs: Any):
        from .providers import razorpay_cancel_subscription
        return razorpay_cancel_subscription(str(kwargs["subscription_id"]), cancel_at_cycle_end=bool(kwargs.get("cancel_at_cycle_end", True)))


payment_service = RazorpayPaymentService()
