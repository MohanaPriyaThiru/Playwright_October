# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Frames_Prem.spec.ts >> Frames
- Location: tests\Frames_Prem.spec.ts:3:5

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for locator('#coming google').contentFrame().getByRole('radio', { name: 'Yes' })

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | 
  3  | test("Frames", async ({ page }) => {
  4  |   await page.goto("https://selectorshub.com/xpath-practice-page/");
  5  |   await page.pause();
  6  |   // await page.frameLocator('#coming google')
  7  |   await page
  8  |     .locator("#courses-iframe").contentFrame()
  9  |     .getByRole("link", { name: "Register" })
> 10 |     .check();
     |      ^ Error: locator.check: Target page, context or browser has been closed
  11 | 
  12 |   await page.waitForTimeout(3000);
  13 | });
  14 | 
```