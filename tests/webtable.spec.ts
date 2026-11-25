import { test, expect } from "@playwright/test";

test("Webtable", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-table/");
  const colCount = await page.locator("table thead tr th").count();
  await expect(page.locator("table thead tr th")).toHaveCount(6);
  const rowCount = await page.locator("table tbody tr").count();
  expect(rowCount).toBe(9);
  console.log(colCount, rowCount);

  const columnData = await page.locator("table thead tr th").allTextContents();

  console.log(columnData);
  expect
    .soft(columnData)
    .toEqual(["ID", "Course Name", "Language", "Level", "Enrollments", "Link"]);

  //   await expect(page.locator("table thead tr th")).toHaveText([
  //     "ID",
  //     "Course Name",
  //     "Language",
  //     "Level",
  //     "Enrollments",
  //     "Link",
  //   ]);

  //   To fetch the single data
  console.log(
    await page
      .locator("table tbody tr:nth-child(3) td:nth-child(4)")
      .innerText(),
  );

  console.log(await page.locator("table tbody tr:nth-child(4)").innerText());
  await expect(page.locator("table tbody tr:nth-child(5)")).toContainText(
    "REST Assured",
  );
});

test("Filter Java", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-table/");

  console.log(await page.getByRole("row").count());

  await page.check('[value="Java"]');
  // const row = page.locator('table tbody tr')
  const rows = page.getByRole("row").filter({ has: page.locator("td") });
  const count = await rows.count();
  console.log(count);

  for (let i = 0; i < count; i++) {
    const lang = await rows
      .nth(i)
      .locator('td[data-col="language"]')
      .innerText();
    expect(lang).toContain("Java");
  }

  const col = await page.getByRole("columnheader").count();
  console.log("col header=" + col);

  console.log(await page.getByRole("cell").filter({ hasText: "Java" }).count());

  await expect(page.getByRole("table")).toBeVisible();
});
