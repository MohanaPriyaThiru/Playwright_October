import { test, expect } from "@playwright/test";

test("UPLOAD FILE", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/file-upload.php");
  await page
    .locator("input#fileInput")
    .setInputFiles("testdata/BHA-Playwright.pdf");
  await expect(page.getByTestId("upload-file-info")).toContainText(
    /BHA-Playwright.pdf/,
  );
  await page.waitForTimeout(3000);

    await page
    .locator("input#fileInput")
    .setInputFiles(["testdata/BHA-Playwright.pdf","testdata/BHA-Playwright.pdf","testdata/BHA-Playwright.pdf"]);

await page
    .locator("input#fileInput")
    .setInputFiles([]);
  });

test("UPLOAD FILE using file chooser", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/file-upload.php");

  const [filChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByTestId("upload-browse-btn").click(),
  ]);
  await filChooser.setFiles("testdata/BHA-Playwright.pdf");
  await expect(page.getByTestId("upload-file-info")).toContainText(
    /BHA-Playwright.pdf/,
  );
  await page.waitForTimeout(3000);
});

test("File Download", async ({ page }) => {
  await page.goto("https://testing.qaautomationlabs.com/file-download.php");
  await page
    .getByTestId("download-text-input")
    .fill("       PLAYWRIGHT       ");
  await page.getByRole("button", { name: "Generate File" }).click();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByTitle("Download the generated text file").click(),
  ]);

  await download.saveAs("download/textfile.txt");
});
