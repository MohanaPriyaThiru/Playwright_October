import { test } from "@playwright/test";

test("NEW TAB HANDLING", async ({ page, context }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByPlaceholder("Search Amazon.in").fill("iphone");
  await page.getByPlaceholder("Search Amazon.in").press("Enter");

  const [newpage] = await Promise.all([
    context.waitForEvent("page"),
    page
      .locator("//span[contains(text(),'iPhone 17 256 GB: 15.93 cm (6.3')]")
      .first()
      .click(),
  ]);

  await newpage.waitForLoadState();
  const titleOfNewPage = await newpage.title();
  console.log(titleOfNewPage);
  await page.bringToFront();
  await page.waitForTimeout(2000);
  console.log(
    await page
      .getByRole("heading", { name: "Brands", exact: true })
      .isVisible(),
  );
});
