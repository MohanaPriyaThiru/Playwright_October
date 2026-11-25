import { test, expect } from "@playwright/test";

test("Locators-CSS", async ({ page }) => {
  test.slow();
  await page.goto("https://testautomationpractice.blogspot.com/");

  // css-- ID, class, attributename and value,tagname.

  //   ID-- very very important  (#ID)
  //   fill()
  await page.locator("#name").fill("priya");
  await page.locator("#email").fill("priya@123");

  //   class(.class)
  await page.locator(".form-control").nth(2).fill("1234567890");
  await page.waitForTimeout(2000);
  const phone = page.locator('[placeholder="Enter Phone"]');
  await phone.fill("4569871256");
  await page.waitForTimeout(2000);
  //   type()
  await page.locator('[id="textarea"]').type("ANNA NAGAR", { delay: 300 });
  await page.waitForTimeout(2000);
  //   clear()
  await page.locator('[id="textarea"]').clear();
  //   pressSequentially()
  await page
    .locator('[id="textarea"]')
    .pressSequentially(" Arumbakkam", { delay: 300 });
  await page.waitForTimeout(2000);
});

test("locators-Xpath", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  // xpath
  // basic xpath
  await page.locator('//input[@placeholder="Enter email"]').click();
  // using contains method
  await page.locator('//input[contains(@id,"shub")]').fill("priya");
  await page.locator('//input[starts-with(@id,"shub")]').fill("PriyaThiru");

  // xpath using text
  await page.locator("//button[text()='Submit']").click();

  // xpath using contains text
  await page.locator("//a[contains(text(),' SelectorsHub You')]").click();

  // xpath using normalize-space()
  //h1[normalize-space(text())="Automation Testing Practice"]

  // use position
  await page
    .locator('//input[@class="selectors-input jsSelector"]')
    .first()
    .fill("username", { force: true });
  await page
    .locator('//input[@class="selectors-input jsSelector"]')
    .last()
    .fill("password1", { force: true });
  await page.waitForTimeout(3000);

  await page
    .locator('(//input[@class="selectors-input jsSelector"])[2]')
    .fill("password2", { force: true });

  // in build methods
});

test("insta", async ({ page }) => {
  await page.goto("https://www.instagram.com/");
  await page.locator('//span[text()="Log in"]').click({ force: true });
});

test("Locator-Inbuilt methods", async ({ page }) => {
  // page.getByRole()
  // page.getByAltText()
  // page.getByLabel()
  // page.getByPlaceholder();
  // page.getByTestId()
  // page.getByText()
  // page.getByTitle()

  await page.goto("https://testautomationpractice.blogspot.com/");

  // page.getByPlaceholder();
  /*   await page.getByPlaceholder("Enter Name", { exact: true }).fill("priya");
  await page.getByPlaceholder("Enter EMail").fill("priya@gmail.com");
  await page.getByPlaceholder("Enter Phone").fill("1234567890");
  await page.waitForTimeout(2000); */

  // page.getByLabel()

  // 1.	<label for="123">Text</label>
  //    <input id= ”123”>

  await page.getByLabel("Address:").fill("ANNA NAGAR");
  await page.getByRole("link", { name: "PlaywrightPractice" }).click();
  await page.waitForURL(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  await page.getByLabel("Email Address:").fill("priya@gmail.com");

  // 2.	<label id="123">Text</label>
  // <input aria-labelledby=”123”>
  await page.getByLabel("Your Age:").fill("25");

  // 3.	<label><input>Text</label>
  await page.getByLabel(/Password:/).fill("priya@123");
  await page.getByLabel(/Standard/).check();

  // 4.	aria-label="Text"
  // await page.getByLabel("Enter your search term").fill("");
  await page.waitForTimeout(2000);
});

test("Inbuild methods", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  // page.getByAltText()
  const islogoVisible = await page.getByAltText("logo image").isVisible();
  console.log(islogoVisible);
  // // page.getByTestId()

  await page.getByTestId("edit-profile-btn").click();
  const text = await page.getByTestId("profile-email").innerText();
  console.log(text);

  const textCont = await page.getByTitle("Tooltip text").textContent();
  console.log(textCont);

  // getByTitle()
  await page.getByTitle("Click to save your changes").hover();
  // getByText()

  await page.getByText("Simple Alert").click();
  await page.waitForTimeout(3000);

  await page.goto("https://www.saucedemo.com/");
  await page.getByTestId("username").click();
  // data-cy: "login"
  //   data-pw
  //   data-qa
  //   data-testID
  //   data-id
});

test("page.getByRole()", async ({ page }) => {
  // await page.goto("https://www.amazon.in/");
  // await page.getByRole("searchbox").fill("mobiles");
  // await page.getByRole("link", { name: "Coupons" }).click({ force: true });
  // await page.getByRole("textbox", { name: "Search Amazon.in" }).fill("laptops");

  await page.goto("https://testautomationpractice.blogspot.com/");

  const heading = await page
    .getByRole("heading", { name: /Automation Testing Practice/ })
    .isHidden();
  console.log(heading);

  await page.getByRole("button", { name: "START" }).click();
  await page.getByRole("textbox", { name: "Address:" }).fill("laptops");
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.getByRole("checkbox", { name: "monday" }).check();
  await page.getByRole("checkbox", { name: "monday" }).uncheck();

  await page.waitForTimeout(3000);
});
