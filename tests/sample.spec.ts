import { test } from "@playwright/test";

test("Title of the testcase", async ({ page }) => {
  test.slow();
  await page.goto("https://testautomationpractice.blogspot.com/");
});

test.fail("Facebook", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.waitForTimeout(3000);
});

test("TEST 1", async () => {
  console.log("TEST 1");
});

test("TEST 2", async () => {
  console.log("TEST 2");
});
