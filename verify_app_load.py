from playwright.sync_api import sync_playwright

def verify_app_load():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000")
            page.goto("http://localhost:3000")

            # Wait for the title or some element to ensure it loaded
            page.wait_for_selector("text=BONUSTIME AI", timeout=10000)

            print("Taking screenshot...")
            page.screenshot(path="verification_screenshot.png")
            print("Screenshot saved to verification_screenshot.png")

        except Exception as e:
            print(f"Error: {e}")
            # Take a screenshot anyway if possible to debug
            try:
                page.screenshot(path="error_screenshot.png")
            except:
                pass
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app_load()
