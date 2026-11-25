# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators_Prem.spec.ts >> XPATH
- Location: tests\locators_Prem.spec.ts:27:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('enter email', { exact: true })

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
  8  |   await page.locator("#name").fill("####"); //input[@id="name"]
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
  24 |   console.log(await textLOC.textContent());
  25 | });
  26 | 
  27 | test("XPATH", async ({ page }) => {
  28 |   await page.goto("https://selectorshub.com/xpath-practice-page/");
  29 |   await page.locator('//input[contains(@id,"shub")]').click();
  30 |   const edit = await page.locator('//input[contains(@id,"shub")]').isEditable();
  31 |   console.log(edit);
  32 | 
> 33 |   await page.getByPlaceholder("enter email",{exact:true}).fill("Priya@gmail");
     |                                                           ^ Error: locator.fill: Target page, context or browser has been closed
  34 |   await page.getByTitle("Password").fill("12365487");
  35 |   await page.waitForTimeout(4000);
  36 | });
  37 | 
```