import { test, Page } from "@playwright/test";

// Locator()-->css(ID,Class,Atribute name &Atribute value) and Xpath
// inbuilt methods- role,label,text, testid,title,placeholder,altText

test("LOCATORS", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  /*  await page.locator("#name").fill("####"); //input[@id="name"]
  await page.locator(".form-control").nth(1).fill("Prem@gmail.com");
  await page.locator("[placeholder='Enter Phone']").fill("1234567890");

  //input[@id="name"]
  await page
    .locator('//input[@id="name"]')
    .pressSequentially("Prem using Xpath", { delay: 500 });
  await page.locator('//input[@placeholder="Enter EMail"]').fill("gmail");
  await page.waitForTimeout(3000);
  const textLOC = page.locator(
    '//h1[normalize-space(text())="Automation Testing Practice"]',
  );
  const v = await textLOC.isVisible();
  console.log(v);
  console.log(await textLOC.innerText());
  console.log(await textLOC.textContent()); */
  await page.getByRole("link", { name: "PlaywrightPractice" }).click();
  await page.getByTestId("edit-profile-btn").click();
  await page.waitForTimeout(3000);
});

test("XPATH", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.locator('//input[contains(@id,"shub")]').click();
  const edit = await page.locator('//input[contains(@id,"shub")]').isEditable();
  console.log(edit);

  await page
    .getByPlaceholder("Enter email", { exact: true })
    .fill("Priya@gmail");
  await page.getByTitle("Password").fill("12365487");
  await page.getByText(/Submit/).click();
  await page.waitForTimeout(4000);
});

test("inbuild methods", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("combobox").fill("Playwright");
  // await page.getByRole("button", { name: "Google Search" }).click();
  await page.getByRole("link", { name: "About" }).click();

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: /Automation Testing Practice/ })
    .isVisible();

  await page.getByRole("textbox", { name: "Address:" }).fill("ANNA NAGAR");
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.waitForTimeout(3000);
});

test("video capturing", async ({ browser }) => {
  const context = await browser.newContext({ recordVideo: { dir: "video" } });
  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await page.getByRole("combobox").fill("Playwright");
  // await page.getByRole("button", { name: "Google Search" }).click();
  await page.getByRole("link", { name: "About" }).click();

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .getByRole("heading", { name: /Automation Testing Practice/ })
    .isVisible();

  await page.getByRole("textbox", { name: "Address:" }).fill("ANNA NAGAR");
  await context.close();
});
