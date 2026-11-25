import { test, expect } from "@playwright/test";

test("notofication", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page
    .locator('[data-test="product-name"]')
    .filter({ has: page.getByText(" Pliers ", { exact: true }) })
    .click();
  //   await page.waitForURL(/product/);
  await expect(page).toHaveURL(/product/);
  await page.locator("#btn-add-to-cart").click();
  await expect(page.locator("#toast-container")).toBeVisible();
});
