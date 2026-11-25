import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { ProductPage } from "../pages/productPage";
import d from "../testdata/data.json";
import { mytest } from "../Fixture/loginFixture";

test("rahul Shetty Login", async ({ page }) => {
  // const ref = new Classname

  const loginobj = new LoginPage(page);
  await loginobj.navigate(d.URL);
  await loginobj.login(d.username, d.PASSWORD);
  await loginobj.assertion();
});

mytest("Product Added", async ({ login }) => {
  const productObj = new ProductPage(login);
  await productObj.addProduct();
  await expect(productObj.page).toHaveURL(
    "https://rahulshettyacademy.com/angularpractice/shop",
  );
});

mytest("cate", async ({ login }) => {
  const productObj = new ProductPage(login);
  await productObj.cate();
  await expect(productObj.page).toHaveURL(
    "https://rahulshettyacademy.com/angularpractice/",
  );
});
