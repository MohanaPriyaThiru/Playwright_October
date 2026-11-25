import { test, expect } from "@playwright/test";

test("WebTable", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const staticTable = page.locator('table[name="BookTable"]');
  const rowCount = await staticTable.locator("tbody tr").count();
  expect(rowCount).toBe(7);

  await expect(staticTable.locator("tbody tr")).toHaveCount(7);

  await expect(staticTable.locator("tbody tr th")).toHaveCount(4);

  await expect(staticTable.getByRole("columnheader")).toHaveCount(4);

  const targetRow = page.getByRole("row").filter({ hasText: "Learn JS" });

  const data = await targetRow
    .getByRole("cell")
    .filter({ hasText: "Javascript" })
    .innerText();

  console.log(data);

  const columns = await page
    .locator("#taskTable")
    .getByRole("columnheader")
    .allInnerTexts();

  expect(columns.sort()).toEqual(
    ["Name", "CPU (%)", "Network (Mbps)", "Memory (MB)", "Disk (MB/s)"].sort(),
  );

  expect(columns).toEqual(
    expect.arrayContaining([
      "Name",
      "CPU (%)",
      "Network (Mbps)",
      "Memory (MB)",
      "Disk (MB/s)",
    ]),
  );
});
