// Dropdown
// Select tag --native
// Non Select tag // div, ol, ul

// SELECT dropdown

import { test, expect } from "@playwright/test";

test("Select dropdown", async ({ page }) => {
  //   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");

  const dropdown = page.locator("#country");
  await dropdown.scrollIntoViewIfNeeded();

  await expect(dropdown).toBeVisible();
  const edit = await dropdown.isEditable();
  console.log(edit);
  await expect(dropdown).toBeEditable();

  await expect(dropdown).toBeEnabled();

  const totalOptions = await dropdown.locator("option").count();
  console.log(totalOptions);
  await expect.soft(dropdown.locator("option")).toHaveCount(10);
  expect(totalOptions).toBe(10);

  //   selectOption()--single select dropdown
  await dropdown.selectOption({ value: "uk" }); //using value attribute
  const value = await dropdown.inputValue();
  console.log(value);
  await await page.waitForTimeout(2000);
  await dropdown.selectOption({ label: "France" }); //using visible text
  await page.waitForTimeout(2000);
  await dropdown.selectOption({ index: 5 }); //using index
  await page.waitForTimeout(2000);
});

test("assertion", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  // page Assertion

  await expect(page).toHaveTitle(
    "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  );

  // generic assertion
  const q = await page.title();

  expect(q).toBe(
    "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  );
});

test("multiple dropdown", async ({ page }) => {
  await page.goto("https://letcode.in/dropdowns");
  // single selct dropdown
  /*  await page
    .getByRole("combobox", { name: "Select the apple using visible text" })//role for single select
    .selectOption("2");
  const value = await page
    .getByRole("combobox", { name: "Select the apple using visible text" })
    .inputValue();
  console.log(value); */

  // multi select dropdown

  const multiSelectDD = page.getByRole("listbox"); //role for multi select
  // giving waits
  await multiSelectDD.locator("option").first().waitFor(); // waitfor is used on single elemnt
  const count = await multiSelectDD.locator("option").count(); //to get the matching elemnet count
  console.log(count);

  await expect(multiSelectDD.locator("option")).toHaveCount(29);
  expect(count).toBe(29);
  // All textContent is used when getting the text of more than 1 matching element
  const allText = await multiSelectDD.locator("option").allTextContents();
  console.log(allText);
  await multiSelectDD.selectOption(["bt", "ca", "hb"]);

  console.log(
    "All selected options",
    await multiSelectDD.locator("option:checked").allTextContents(), //to get the selected options text
  );

  console.log(
    "All not selected options",
    await multiSelectDD.locator("option:not(:checked)").allTextContents(), //to get the not selected options text
  );

  await page.waitForTimeout(2000);
  await multiSelectDD.selectOption([]); //to clear the options
  await page.waitForTimeout(2000);

  await multiSelectDD.selectOption([
    { value: "bt" },
    { label: "Green Lantern" },
    { index: 5 },
  ]);
  await page.waitForTimeout(2000);
});

test("Auto sugges", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("#autocomplete").pressSequentially("ind", { delay: 300 });
  await page.locator("//li[@class='ui-menu-item']/div[text()='India']").click();
  await page.waitForTimeout(2000);
});

test("Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator('[role="combobox"]').fill("Playwright");
  await page
    .getByLabel("india national cricket team vs west indies cricket team", {
      exact: true,
    })
    .click();
});

test("Click first Google suggestion", async ({ page }) => {
  await page.goto("https://www.google.com");

  const searchBox = page.getByRole("combobox", {
    name: /search/i,
  });

  await searchBox.fill("India");

  const suggestions = page.locator(
    'ul[role="listbox"] li[role="presentation"] [role="option"]',
  );

  await expect(suggestions.first()).toBeVisible();

  // Click the first suggestion dynamically
  const firstSuggestion = suggestions.first();

  console.log("Selected suggestion:", await firstSuggestion.innerText());

  await firstSuggestion.click();

  await expect(page).toHaveURL(/google\./);
});
