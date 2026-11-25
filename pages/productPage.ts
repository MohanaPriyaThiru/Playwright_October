import { Locator, Page, expect } from "@playwright/test";

export class ProductPage {
  ShopName: Locator;
  productName: Locator;
  AddToCart: Locator;
  checkout: Locator;
  page: Page;
  Category2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.AddToCart = page.getByRole("button", { name: /Add/ }).first();
    this.ShopName = page.getByRole("heading", { name: "Shop Name" });
    this.checkout = page.getByText(/Checkout/);
    this.productName = page.getByText("Samsung Note 8");
    this.Category2 = page.getByRole("link", { name: "Category 2" });
  }

  async cate() {
    await this.Category2.click();
  }

  async addProduct() {
    await expect(this.productName).toBeVisible();
    await expect(this.productName).toBeVisible();
    await this.AddToCart.click();
    await this.checkout.click();
  }
}
