# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown_prem.spec.ts >> Autosugges
- Location: tests\dropdown_prem.spec.ts:70:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"

```

# Test source

```ts
  1  | // Dropdown
  2  | /* 
  3  | // Native drop down -->SELECT(tagName) -->SelectOption()
  4  |     custom dropdown/Auto suggestions --> div/ol/ul ->normal locators
  5  |        value
  6  |        index
  7  |        label
  8  |     */
  9  | 
  10 | import { test, expect } from "@playwright/test";
  11 | 
  12 | test("DropDown", async ({ page }) => {
  13 |   await page.goto("https://www.amazon.in/");
  14 |   await expect
  15 |     .soft(page)
  16 |     .toHaveTitle(
  17 |       "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  18 |     );
  19 | 
  20 |   await page
  21 |     .locator("#searchDropdownBox")
  22 |     .selectOption({ value: "search-alias=audible" });
  23 |   // await page.waitForTimeout(2000);
  24 |   await expect(page.locator("#searchDropdownBox")).toHaveValue(
  25 |     "search-alias=audible",
  26 |   );
  27 |   await page.locator("#searchDropdownBox").selectOption({ label: "Furniture" });
  28 |   // await page.waitForTimeout(2000);
  29 |   await page.locator("#searchDropdownBox").selectOption({ index: 5 });
  30 |   await page.waitForTimeout(2000);
  31 | 
  32 |   const options: string[] = await page
  33 |     .locator("#searchDropdownBox option")
  34 |     .allTextContents();
  35 |   console.log(options);
  36 |   console.log(` option selected
  37 |    ${await page.locator("#searchDropdownBox option:checked").innerText()}`);
  38 | 
  39 |   console.log(
  40 |     await page
  41 |       .locator("#searchDropdownBox option:not(:checked)")
  42 |       .allTextContents(),
  43 |   );
  44 |   console.log(` options not selected
  45 |    ${await page.locator("#searchDropdownBox option:not(:checked)").allTextContents()}`);
  46 | });
  47 | 
  48 | test("Multiple dropdown", async ({ page }) => {
  49 |   await page.goto("https://testautomationpractice.blogspot.com/");
  50 | 
  51 |   await page.getByLabel("Sorted List:").scrollIntoViewIfNeeded();
  52 |   await page
  53 |     .getByLabel("Sorted List:")
  54 |     .selectOption([
  55 |       { value: "cheetah" },
  56 |       { label: "Elephant".trim() },
  57 |       { index: 6 },
  58 |     ]);
  59 |   await page.waitForTimeout(3000);
  60 |   expect(page.getByLabel("Sorted List:")).toBeTruthy();
  61 |   await expect(page.getByLabel("Sorted List:")).toHaveValues([
  62 |     "cheetah",
  63 |     "elephant",
  64 |     "giraffe",
  65 |   ]);
  66 | 
  67 |   await expect(page.locator("#animals option:checked")).toHaveCount(3);
  68 | });
  69 | 
  70 | test("Autosugges", async ({ page }) => {
> 71 |   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     |              ^ Error: page.goto: Target page, context or browser has been closed
  72 |   await page
  73 |     .getByPlaceholder("Type to Select Countries")
  74 |     .pressSequentially("IND", { delay: 300 });
  75 |   await page.getByRole("listitem").filter({ hasText: /^India$/ }).click();
  76 | });
  77 | 
```