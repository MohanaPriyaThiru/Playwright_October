// Dropdown
/* 
// Native drop down -->SELECT(tagName) -->SelectOption()
    custom dropdown/Auto suggestions --> div/ol/ul ->normal locators
       value
       index
       label
    */

import { test, expect } from "@playwright/test";

test("DropDown", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await expect
    .soft(page)
    .toHaveTitle(
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
    );

  await page
    .locator("#searchDropdownBox")
    .selectOption({ value: "search-alias=audible" });
  // await page.waitForTimeout(2000);
  await expect(page.locator("#searchDropdownBox")).toHaveValue(
    "search-alias=audible",
  );
  await page.locator("#searchDropdownBox").selectOption({ label: "Furniture" });
  // await page.waitForTimeout(2000);
  await page.locator("#searchDropdownBox").selectOption({ index: 5 });
  await page.waitForTimeout(2000);

  const options: string[] = await page
    .locator("#searchDropdownBox option")
    .allTextContents();
  console.log(options);
  console.log(` option selected
   ${await page.locator("#searchDropdownBox option:checked").innerText()}`);

  console.log(
    await page
      .locator("#searchDropdownBox option:not(:checked)")
      .allTextContents(),
  );
  console.log(` options not selected
   ${await page.locator("#searchDropdownBox option:not(:checked)").allTextContents()}`);
});

test("Multiple dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.screenshot({ path: "fullpage.png", fullPage: true });
  await page.getByLabel("Sorted List:").scrollIntoViewIfNeeded();
  await page
    .getByLabel("Sorted List:")
    .selectOption([
      { value: "cheetah" },
      { label: "Elephant".trim() },
      { index: 6 },
    ]);
  await page.waitForTimeout(3000);
  expect(page.getByLabel("Sorted List:")).toBeTruthy();
  await expect(page.getByLabel("Sorted List:")).toHaveValues([
    "cheetah",
    "elephant",
    "giraffe",
  ]);

  await expect(page.locator("#animals option:checked")).toHaveCount(3);
});

test("Autosugges", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page
    .getByPlaceholder("Type to Select Countries")
    .pressSequentially("IND", { delay: 300 });
  await page
    .getByRole("listitem")
    .filter({ hasText: /^India$/ })
    .click();
});

test("Google", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator('[role="img"]').screenshot({ path: "google.jpeg" });
  await page.screenshot({ path: "screenshot/fullpage.jpeg", fullPage: true });

  await page.getByRole("combobox").pressSequentially("IND", { delay: 300 });
  await page.screenshot({ path: "screenshot/suggList.jpeg" });

  const droplistitems = page.getByRole("listbox").locator("li");

  const matchingLocatorCount = await droplistitems.count();
  console.log(matchingLocatorCount);

  const allSuggestions = await droplistitems.allInnerTexts();
  const value = allSuggestions.at(5);
  console.log(value);

  // await page.getByRole("listbox").locator("li").nth(4).click();
  await page.waitForTimeout(3000);

  await page
    .getByRole("listbox")
    .locator("li")
    .filter({ hasText: value })
    .screenshot({ path: "screenshot/partiElement.png" });
  await page
    .getByRole("listbox")
    .locator("li")
    .filter({ hasText: value })
    .click();
});
