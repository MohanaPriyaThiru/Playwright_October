import { test as base, Page } from "@playwright/test";
import d from "../testdata/data.json";
import { LoginPage } from "../pages/loginpage";

export type loginFix = {
  login: Page;
};
export const mytest = base.extend<loginFix>({
  login: async ({ page }, use) => {
    const loginobj = new LoginPage(page);
    await loginobj.navigate(d.URL);
    await loginobj.login(d.username, d.PASSWORD);
    await loginobj.assertion();
    use(page);
  },
});
