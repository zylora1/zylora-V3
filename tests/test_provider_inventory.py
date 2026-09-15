import json
from pathlib import Path

from scripts.provider_inventory import collect_inventory


def test_inventory_lists_direct_legacy_calls_without_secret_values():
    result = collect_inventory(Path("."))

    assert "OPENAI_API_KEY" in result["legacy_secrets"]
    assert "RESEND_API_KEY" in result["legacy_secrets"]
    assert "TWILIO_ACCOUNT_SID" in result["legacy_secrets"]
    assert "sk-" not in json.dumps(result)

