# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators_Prem.spec.ts >> inbuild methods
- Location: tests\locators_Prem.spec.ts:44:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button') resolved to 5 elements:
    1) <a class="gb_C" tabindex="0" role="button" aria-expanded="false" aria-label="Google apps" href="https://www.google.co.in/intl/en/about/products">…</a> aka getByRole('button', { name: 'Google apps' })
    2) <button tabindex="0" type="button" class="UbbAWe" jsname="ko0Zye" aria-haspopup="menu" jsaction="AO4mJ;blur:dOOLne;keydown:YR8sId" aria-label="Add files, tools, and select a model" data-ved="2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ0J0RegQIABAJ">…</button> aka getByRole('button', { name: 'Add files, tools, and select' })
    3) <input name="btnK" tabindex="0" role="button" type="submit" class="gNO89b" value="Google Search" aria-label="Google Search" data-ved="2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ4dUDegQIABAh"/> aka getByRole('button', { name: 'Google Search' })
    4) <input name="btnI" type="submit" class="RNmpXc" jscontroller="s980lf" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" jsaction="rcuQ6b:npT2md;QIWlh" data-ved="2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ19QEegQIABAi"/> aka getByRole('button', { name: 'I\'m Feeling Lucky' })
    5) <div tabindex="0" role="button" class="CcNe6e" jsname="oYxtQd" aria-haspopup="true" aria-expanded="false" jsaction="WFrRFb;keydown:uYT2Vb">…</div> aka getByRole('button', { name: 'Settings' })

Call log:
  - waiting for getByRole('button')

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
        - generic [ref=e38]:
          - button "Add files, tools, and select a model" [ref=e40] [cursor=pointer]
          - generic: Add files, tools, and select a model
        - combobox "Search" [active] [ref=e50]: Playwright
        - link "AI Mode" [ref=e52] [cursor=pointer]
      - generic [ref=e60]:
        - button "Google Search" [ref=e61] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e62] [cursor=pointer]
  - generic [ref=e65]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e66] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=hi&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAp
    - link "বাংলা" [ref=e67] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=bn&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAq
    - link "తెలుగు" [ref=e68] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=te&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAr
    - link "मराठी" [ref=e69] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=mr&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAs
    - link "தமிழ்" [ref=e70] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=ta&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAt
    - link "ગુજરાતી" [ref=e71] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=gu&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAu
    - link "ಕನ್ನಡ" [ref=e72] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=kn&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAv
    - link "മലയാളം" [ref=e73] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=ml&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAw
    - link "ਪੰਜਾਬੀ" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_urgnLZuZXrbsJwIRlhpSCT4u08U%3D&hl=pa&source=homepage&sa=X&ved=2ahUKEwjmvPT5kYSYAxVOT2cHHUk_CksQ2ZgBegQIABAx
  - contentinfo [ref=e76]:
    - generic [ref=e77]: India
    - generic [ref=e78]:
      - generic [ref=e79]:
        - link "Advertising" [ref=e80] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e81] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e82] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e83]:
        - link "Privacy" [ref=e84] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e85] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e89] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, Page } from "@playwright/test";
  2  | 
  3  | // Locator()-->css(ID,Class,Atribute name &Atribute value) and Xpath
  4  | // inbuilt methods- role,label,text, testid,title,placeholder,altText
  5  | 
  6  | test("LOCATORS", async ({ page }) => {
  7  |   await page.goto("https://testautomationpractice.blogspot.com/");
  8  |   /*  await page.locator("#name").fill("####"); //input[@id="name"]
  9  |   await page.locator(".form-control").nth(1).fill("Prem@gmail.com");
  10 |   await page.locator("[placeholder='Enter Phone']").fill("1234567890");
  11 | 
  12 |   //input[@id="name"]
  13 |   await page
  14 |     .locator('//input[@id="name"]')
  15 |     .pressSequentially("Prem using Xpath", { delay: 500 });
  16 |   await page.locator('//input[@placeholder="Enter EMail"]').fill("gmail");
  17 |   await page.waitForTimeout(3000);
  18 |   const textLOC = page.locator(
  19 |     '//h1[normalize-space(text())="Automation Testing Practice"]',
  20 |   );
  21 |   const v = await textLOC.isVisible();
  22 |   console.log(v);
  23 |   console.log(await textLOC.innerText());
  24 |   console.log(await textLOC.textContent()); */
  25 |   await page.getByRole("link", { name: "PlaywrightPractice" }).click();
  26 |   await page.getByTestId("edit-profile-btn").click();
  27 |   await page.waitForTimeout(3000);
  28 | });
  29 | 
  30 | test("XPATH", async ({ page }) => {
  31 |   await page.goto("https://selectorshub.com/xpath-practice-page/");
  32 |   await page.locator('//input[contains(@id,"shub")]').click();
  33 |   const edit = await page.locator('//input[contains(@id,"shub")]').isEditable();
  34 |   console.log(edit);
  35 | 
  36 |   await page
  37 |     .getByPlaceholder("Enter email", { exact: true })
  38 |     .fill("Priya@gmail");
  39 |   await page.getByTitle("Password").fill("12365487");
  40 |   await page.getByText(/Submit/).click();
  41 |   await page.waitForTimeout(4000);
  42 | });
  43 | 
  44 | test("inbuild methods", async ({ page }) => {
  45 |   await page.goto("https://www.google.com/");
  46 |   await page.getByRole("combobox").fill("Playwright");
> 47 |   await page.getByRole("button").click();
     |                                  ^ Error: locator.click: Error: strict mode violation: getByRole('button') resolved to 5 elements:
  48 |   await page.waitForTimeout(3000);
  49 | });
  50 | 
```