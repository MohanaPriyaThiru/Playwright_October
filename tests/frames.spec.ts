import { test } from "@playwright/test";

test("Frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  //   await page.getByPlaceholder("Enter name").fill("Priya");
  await page
    .frameLocator("#firstFr")
    .getByPlaceholder("Enter name")
    .fill("Priya");
  await page.frameLocator("#firstFr").locator('[name="lname"]').fill("Thiru");
  await page
    .frameLocator("#firstFr")
    .frameLocator('[title="Inner Frame"]')
    .locator('[name="email"]')
    .fill("priya@gmail.com");
  await page.waitForTimeout(2000);
});

test("Frames using index", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  //   await page.getByPlaceholder("Enter name").fill("Priya");

  const framesInPage = page.frames();
  //   console.log(framesInPage);

  framesInPage.forEach((f, i) => {
    console.log(`${i}=${f.url()}`);
  });
  await framesInPage[1].getByPlaceholder("Enter name").fill("Priya");
  await framesInPage[1].locator('[name="lname"]').fill("Thiru");
  await framesInPage[5].locator('[name="email"]').fill("priya@gmail.com");
     await page.waitForTimeout(2000);
});
