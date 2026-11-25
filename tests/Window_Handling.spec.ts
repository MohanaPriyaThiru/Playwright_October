import { test } from "@playwright/test";

test("Window Handling in amazon", async ({ page, context }) => {
  await page.goto("https://www.amazon.in/");
  const searchbox = page.locator("#twotabsearchtextbox");
  await searchbox.fill("mobiles");
  await searchbox.press("Enter");

  const [newTab] = await Promise.all([
    context.waitForEvent("page"), //page-->popup, context-->page
    page
      .getByLabel(/Apple iPhone 17 /)
      .first()
      .click(),
  ]); //-->golden rule

  await newTab.waitForLoadState();
  console.log(
    await newTab
      .getByLabel("Selected Colour is Deep Blue. Tap to collapse.")
      .isVisible(),
  );

  await page.bringToFront();
  await page
    .getByLabel("Apply the filter Get It by Tomorrow to narrow results")
    .click();
  await page.reload();
  await page.goBack();
  await page.goForward();
  await page.waitForTimeout(3000);
  
});
