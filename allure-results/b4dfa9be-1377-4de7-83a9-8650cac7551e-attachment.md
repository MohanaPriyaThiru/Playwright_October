# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown_prem.spec.ts >> Google
- Location: tests\dropdown_prem.spec.ts:81:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('listitem').filter({ hasText: /^India$/ })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e23]
  - search [ref=e31]:
    - generic [ref=e33]:
      - generic [ref=e35]:
        - button "Add files, tools, and select a model" [ref=e41] [cursor=pointer]
        - combobox "Search" [expanded] [active] [ref=e46]:
          - text: IND
          - listbox [ref=e48]:
            - option "india national cricket team vs west indies cricket team players" [ref=e54]
            - option "india national cricket team vs new zealand national cricket team match scorecard" [ref=e61]
            - option "india national cricket team vs sri lanka national cricket team match scorecard" [ref=e68]
            - option "india national football team vs pakistan national football team stats" [ref=e75]
            - option "india national cricket team vs west indies cricket team matches" [ref=e82]
            - option "india national cricket team vs west indies cricket team" [ref=e89]
            - option "india national cricket team vs west indies cricket team stats" [ref=e96]
            - option "india national football team vs pakistan national football team" [ref=e103]
            - option "india national cricket team vs afghanistan national cricket team match scorecard" [ref=e110]
            - option "ind vs nz" [ref=e117]
        - link "AI Mode" [ref=e120] [cursor=pointer]
      - generic [ref=e127]:
        - generic [ref=e131]:
          - button "Google Search" [ref=e132] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e133] [cursor=pointer]
        - button "Report inappropriate predictions" [ref=e134] [cursor=pointer]
      - generic [ref=e137]:
        - button "Google Search" [ref=e138] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e139] [cursor=pointer]
  - generic [ref=e142]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e143] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=hi&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAn
    - link "বাংলা" [ref=e144] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=bn&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAo
    - link "తెలుగు" [ref=e145] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=te&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAp
    - link "मराठी" [ref=e146] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=mr&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAq
    - link "தமிழ்" [ref=e147] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=ta&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAr
    - link "ગુજરાતી" [ref=e148] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=gu&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAs
    - link "ಕನ್ನಡ" [ref=e149] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=kn&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAt
    - link "മലയാളം" [ref=e150] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=ml&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAu
    - link "ਪੰਜਾਬੀ" [ref=e151] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_-p7JGlHmHqVUy29KfFg8UO3xHMc%3D&hl=pa&source=homepage&sa=X&ved=2ahUKEwjgvpLH4pCYAxW9k-EIHV21JDgQ2ZgBegQIABAv
  - contentinfo [ref=e153]:
    - generic [ref=e154]: India
    - generic [ref=e155]:
      - generic [ref=e156]:
        - link "Advertising" [ref=e157] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e158] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e159] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e160]:
        - link "Privacy" [ref=e161] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e162] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e166] [cursor=pointer]
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
  71 |   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  72 |   await page
  73 |     .getByPlaceholder("Type to Select Countries")
  74 |     .pressSequentially("IND", { delay: 300 });
  75 |   await page
  76 |     .getByRole("listitem")
  77 |     .filter({ hasText: /^India$/ })
  78 |     .click();
  79 | });
  80 | 
  81 | test("Google", async ({ page }) => {
  82 |   await page.goto("https://www.google.com/");
  83 |   await page.getByRole("combobox").pressSequentially("IND", { delay: 300 });
  84 |   await page
  85 |     .getByRole("listitem")
  86 |     .filter({ hasText: /^India$/ })
> 87 |     .click();
     |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  88 |   const droplistitems = page.getByRole("listbox").locator("li");
  89 | 
  90 |   const matchingLocatorCount = await droplistitems.count();
  91 |   console.log(matchingLocatorCount);
  92 | 
  93 |   const allSuggestions = await droplistitems.allTextContents();
  94 |   const value = allSuggestions.at(5);
  95 | });
  96 | 
```