// alert--warning--handle
// playwright -- By default -- handle warning --dismiss/cancel

import { test, expect } from "@playwright/test";

test("Alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.once("dialog", async (a) => {
    console.log(a.type()); //returns the type of alert

    console.log(a.message()); //.returns the message

    await page.waitForTimeout(3000);
    await a.accept(); //clicks ok
  });
  await page.getByRole("button", { name: "Simple Alert" }).click();
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  await page.getByRole("button", { name: "Prompt Alert" }).click();
});

test("Confirm Alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (a) => {
    console.log(a.type()); //returns the type of alert

    console.log(a.message()); //.returns the message

    await page.waitForTimeout(3000);
    // await a.accept(); //clicks ok
    await a.dismiss(); //clicks cancel
  });
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
});

test("Prompt Alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.on("dialog", async (a) => {
    console.log(a.type()); //returns the type of alert

    console.log(a.message()); //.returns the message

    await page.waitForTimeout(3000);
    console.log(a.defaultValue());

    await a.accept("priya"); //clicks ok
    // await a.dismiss(); //clicks cancel
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  await expect(page.locator("#demo")).toHaveText(
    "Hello priya! How are you today?",
  );
});

test("mordern alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");
  await page.locator("#modern").click();
  const v = await page.locator(".card-content p").innerText();
  console.log(v);
  await page.getByRole("button", { name: "close", exact: true }).click();
});
