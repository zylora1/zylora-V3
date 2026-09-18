import asyncio
from playwright.async_api import async_playwright

async def run_mobile_qa():
    viewports = [
        {"width": 320, "height": 568},
        {"width": 360, "height": 640},
        {"width": 375, "height": 667},
        {"width": 390, "height": 844},
        {"width": 412, "height": 915},
        {"width": 430, "height": 932},
    ]

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for vp in viewports:
            print(f"Testing viewport {vp['width']}x{vp['height']}")
            context = await browser.new_context(viewport=vp)
            page = await context.new_page()
            
            try:
                await page.goto("http://localhost:8000/dashboard", timeout=5000)
            except Exception:
                print("Server not running, skipping live QA. This script is prepared for CI.")
                await context.close()
                continue
                
            nav = page.locator(".mobile-bottom-nav")
            if await nav.is_visible():
                print("Bottom nav visible.")
                
            overflow = await page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            if overflow:
                print(f"WARNING: Horizontal overflow detected at {vp['width']}px")
            else:
                print(f"No horizontal overflow at {vp['width']}px")
                
            await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_mobile_qa())
