import { test, expect } from "@playwright/test";

test("Alets handling", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  page.once("dialog", async (a) => {
    console.log(a.message());
    console.log(a.type());
    await page.waitForTimeout(3000);
    await a.accept(); //OK click
    // a.dismiss()//click cancel
  });

  await page.locator("#alertbtns").click();
});
