import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  userName: Locator;
  password: Locator;
  termsCheckbox: Locator;
  siginBtn: Locator;
  Admin: Locator;
  user: Locator;
  StudentDropdown: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.getByLabel("Password:");
    this.Admin = page.getByLabel("Admin");
    this.termsCheckbox = page.locator("#terms");
    this.siginBtn = page.locator("#signInBtn");
    this.StudentDropdown = page.locator("select.form-control");
    this.user = page.locator("#usertype");
  }

  async navigate(URL: string) {
    await this.page.goto(URL);
  }

  async login(username: string, password: string) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.Admin.check();
    await this.termsCheckbox.check();
    await this.siginBtn.click();
  }

  async assertion() {
    await expect(this.page).toHaveURL(
      "https://rahulshettyacademy.com/angularpractice/shop",
    );
  }
}
