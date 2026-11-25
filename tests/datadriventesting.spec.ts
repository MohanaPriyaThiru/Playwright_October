// DataDriven testing -->
// product search--textbox -->mobile,laptop,dress,toys,books
// login module -->un, pwd,email,

import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
// import dd from "../testdata/datadriven.json";
import d from "../testdata/data.json";
import { reader } from "../utils/excelReader";
const ddata = reader();
// console.log(ddata);
/* for (const setOfData of dd) {
  test(`DATA DRIVEN TESTING  with json file ${setOfData.username} and ${setOfData.PASSWORD}`, async ({
    page,
  }) => {
    const loginObj = new LoginPage(page);
    await loginObj.navigate(d.URL);
    await loginObj.login(setOfData.username, setOfData.PASSWORD);
  });
} */
// -------------------------------------------------------------------------------------

for (const c of ddata) {
  test(`DATA DRIVEN TESTING  with Excel file ${c.UserName} and ${c.Password} `, async ({
    page,
  }) => {
    const loginObj = new LoginPage(page);
    await loginObj.navigate(d.URL);
    await loginObj.login(c.UserName, c.Password);
  });
}
