import { test } from "@playwright/test";

test("Frames", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  //   await page.pause();
  // await page.frameLocator('#coming google')
  await page
    .frameLocator("#courses-iframe")
    .getByRole("link", { name: "Register" })
    .click();

  await page.waitForTimeout(3000);
});

test("Frames using Index", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allFrames = page.frames();
  console.log(allFrames);

  allFrames.forEach((f, i) => {
    console.log(`${i} = ${f.url()}`);
  });

  await allFrames[1].locator('[name="fname"]').fill("priya");
  await allFrames[5].locator('[name="email"]').fill("priya@gmail.com");
});
