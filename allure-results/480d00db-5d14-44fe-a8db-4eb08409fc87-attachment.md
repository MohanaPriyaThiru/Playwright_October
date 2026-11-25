# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileUpload.spec.ts >> UPLOAD FILE using file chooser
- Location: tests\fileUpload.spec.ts:14:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "filechooser"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - button "Toggle tools sidebar" [ref=e5] [cursor=pointer]:
          - generic [ref=e6]: 
        - link [ref=e7] [cursor=pointer]:
          - /url: https://qaautomationlabs.com/
          - img "QA Automation Labs" [ref=e8]
        - navigation [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/
          - link "About" [ref=e11] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/about/
          - link "Courses" [ref=e12] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/courses/
          - link "Events" [ref=e13] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/events/
          - link "Shop" [ref=e14] [cursor=pointer]:
            - /url: https://shop.qaautomationlabs.com/
          - link "API" [ref=e15] [cursor=pointer]:
            - /url: https://api.qaautomationlabs.com/
          - link "Testing" [ref=e16] [cursor=pointer]:
            - /url: index.php
          - link "Blog" [ref=e17] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/blog/
          - link "Interview Preparation" [ref=e18] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/interview-preparation/
          - link "Contacts" [ref=e19] [cursor=pointer]:
            - /url: https://qaautomationlabs.com/contacts/
        - search [ref=e21]:
          - searchbox "Search" [ref=e22]
    - complementary [ref=e23]:
      - link " Testing Tools" [ref=e24] [cursor=pointer]:
        - /url: index.php
        - generic [ref=e25]: 
        - text: Testing Tools
      - navigation [ref=e27]:
        - menu [ref=e28]:
          - listitem [ref=e29]:
            - link " Dashboard" [ref=e30] [cursor=pointer]:
              - /url: index.php
              - generic [ref=e31]: 
              - paragraph [ref=e32]: Dashboard
          - listitem [ref=e33]:
            - link " Checkbox" [ref=e34] [cursor=pointer]:
              - /url: checkbox.php
              - generic [ref=e35]: 
              - paragraph [ref=e36]: Checkbox
          - listitem [ref=e37]:
            - link " Radio Button" [ref=e38] [cursor=pointer]:
              - /url: radio-button.php
              - generic [ref=e39]: 
              - paragraph [ref=e40]: Radio Button
          - listitem [ref=e41]:
            - link " Dropdown" [ref=e42] [cursor=pointer]:
              - /url: select-dropdown.php
              - generic [ref=e43]: 
              - paragraph [ref=e44]: Dropdown
          - listitem [ref=e45]:
            - link " Form" [ref=e46] [cursor=pointer]:
              - /url: form.php
              - generic [ref=e47]: 
              - paragraph [ref=e48]: Form
          - listitem [ref=e49]:
            - link " Web Table" [ref=e50] [cursor=pointer]:
              - /url: web-table.php
              - generic [ref=e51]: 
              - paragraph [ref=e52]: Web Table
          - listitem [ref=e53]:
            - link " iFrame" [ref=e54] [cursor=pointer]:
              - /url: iframe.php
              - generic [ref=e55]: 
              - paragraph [ref=e56]: iFrame
          - listitem [ref=e57]:
            - link " Shadow DOM" [ref=e58] [cursor=pointer]:
              - /url: shadow-dom.php
              - generic [ref=e59]: 
              - paragraph [ref=e60]: Shadow DOM
          - listitem [ref=e61]:
            - link " Drag & Drop" [ref=e62] [cursor=pointer]:
              - /url: drag-and-drop.php
              - generic [ref=e63]: 
              - paragraph [ref=e64]: Drag & Drop
          - listitem [ref=e65]:
            - link " Notifications" [ref=e66] [cursor=pointer]:
              - /url: notifications.php
              - generic [ref=e67]: 
              - paragraph [ref=e68]: Notifications
          - listitem [ref=e69]:
            - link " JavaScript Alert" [ref=e70] [cursor=pointer]:
              - /url: javaScript-alert.php
              - generic [ref=e71]: 
              - paragraph [ref=e72]: JavaScript Alert
          - listitem [ref=e73]:
            - link " File Upload" [ref=e74] [cursor=pointer]:
              - /url: file-upload.php
              - generic [ref=e75]: 
              - paragraph [ref=e76]: File Upload
          - listitem [ref=e77]:
            - link " File Download" [ref=e78] [cursor=pointer]:
              - /url: file-download.php
              - generic [ref=e79]: 
              - paragraph [ref=e80]: File Download
          - listitem [ref=e81]:
            - link " Window Popup Modal" [ref=e82] [cursor=pointer]:
              - /url: window-popup-modal.php
              - generic [ref=e83]: 
              - paragraph [ref=e84]: Window Popup Modal
          - listitem [ref=e85]:
            - link " List Box" [ref=e86] [cursor=pointer]:
              - /url: list-box.php
              - generic [ref=e87]: 
              - paragraph [ref=e88]: List Box
          - listitem [ref=e89]:
            - link " Slider" [ref=e90] [cursor=pointer]:
              - /url: slider.php
              - generic [ref=e91]: 
              - paragraph [ref=e92]: Slider
    - generic [ref=e95]:
      - generic [ref=e96]:
        - generic [ref=e97] [cursor=pointer]:
          - heading " Automation snippets — File Upload" [level=3] [ref=e98]:
            - generic [ref=e99]: 
            - text: Automation snippets — File Upload
          - generic [ref=e100]: 
        - generic [ref=e102]:
          - tablist [ref=e103]:
            - listitem [ref=e104]:
              - link "Playwright" [ref=e105] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e106]:
              - link "Selenium" [ref=e107] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e108]:
              - link "Cypress" [ref=e109] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e110]:
            - button "Copy" [ref=e111] [cursor=pointer]
            - code [ref=e113]: await page.setInputFiles('#fileInput', 'tests/fixtures/avatar.png'); await expect(page.locator('#fileInfo')).toContainText('avatar.png');
      - generic [ref=e115]:
        - heading "File Upload Demo" [level=1] [ref=e120]
        - generic [ref=e125]:
          - paragraph [ref=e127]: File Upload
          - generic "Drag and drop a file here" [ref=e128]:
            - paragraph [ref=e129]: Drag & Drop your file here
            - paragraph [ref=e130]: or
            - generic "Browse for a file to upload" [ref=e131] [cursor=pointer]: Browse File
  - contentinfo [ref=e132]:
    - paragraph [ref=e135]:
      - text: © 2026
      - link "QA Automation Labs" [ref=e136] [cursor=pointer]:
        - /url: https://qaautomationlabs.com
      - text: . All Rights Reserved.
  - generic [ref=e137]:
    - button "Inspect locators" [ref=e138] [cursor=pointer]:
      - generic [ref=e139]: 
    - button "Toggle dark mode" [ref=e140] [cursor=pointer]:
      - generic [ref=e141]: 
    - button "Toggle challenge mode" [ref=e142] [cursor=pointer]:
      - generic [ref=e143]: 
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("UPLOAD FILE", async ({ page }) => {
  4  |   await page.goto("https://testing.qaautomationlabs.com/file-upload.php");
  5  |   await page
  6  |     .locator("input#fileInput")
  7  |     .setInputFiles("testdata/BHA-Playwright.pdf");
  8  |   await expect(page.getByTestId("upload-file-info")).toContainText(
  9  |     /BHA-Playwright.pdf/,
  10 |   );
  11 |   await page.waitForTimeout(3000);
  12 | });
  13 | 
  14 | test("UPLOAD FILE using file chooser", async ({ page }) => {
  15 |   await page.goto("https://testing.qaautomationlabs.com/file-upload.php");
  16 | 
  17 |   const [filChooser] = await Promise.all([
> 18 |     page.waitForEvent("filechooser"),
     |          ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
  19 |     page.locator("input#fileInput").click(),
  20 |   ]);
  21 |   await filChooser.setFiles("testdata/BHA-Playwright.pdf");
  22 |   await expect(page.getByTestId("upload-file-info")).toContainText(
  23 |     /BHA-Playwright.pdf/,
  24 |   );
  25 |   await page.waitForTimeout(3000);
  26 | });
  27 | 
```