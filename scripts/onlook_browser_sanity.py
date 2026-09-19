"""Validate that the installed Playwright browser workers can launch.

This is intentionally independent of the Zylora application so browser-worker
failures cannot be misdiagnosed as Studio runtime failures.
"""

from __future__ import annotations

import json
import argparse

from playwright.sync_api import BrowserType, sync_playwright


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.parse_args()
    results: list[dict[str, object]] = []
    with sync_playwright() as playwright:
        for name in ("chromium", "firefox", "webkit"):
            browser_type: BrowserType = getattr(playwright, name)
            browser = browser_type.launch(headless=True)
            try:
                page = browser.new_page()
                page.set_content("<!doctype html><title>sanity</title><main id='probe'>ok</main>")
                value = page.locator("#probe").inner_text()
                if value != "ok":
                    raise AssertionError(f"{name} returned unexpected probe text: {value!r}")
                results.append({"browser": name, "status": "PASS"})
            finally:
                browser.close()
    print(json.dumps(results, sort_keys=True))


if __name__ == "__main__":
    main()
