# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators_Prem.spec.ts >> inbuild methods
- Location: tests\locators_Prem.spec.ts:44:5

# Error details

```
Error: locator.check: Error: strict mode violation: getByRole('radio', { name: 'Male' }) resolved to 2 elements:
    1) <input id="male" type="radio" value="male" name="gender" class="form-check-input"/> aka getByRole('radio', { name: 'Male', exact: true })
    2) <input id="female" type="radio" name="gender" value="female" class="form-check-input"/> aka getByRole('radio', { name: 'Female' })

Call log:
  - waiting for getByRole('radio', { name: 'Male' })

```

# Page snapshot

```yaml
- generic [ref=f3e16]:
  - banner [ref=f3e17]:
    - generic [ref=f3e23]:
      - heading "Automation Testing Practice" [level=1] [ref=f3e25]
      - paragraph [ref=f3e27]: For Selenium, Cypress & Playwright
  - list [ref=f3e34]:
    - listitem [ref=f3e35]:
      - link "Home" [ref=f3e36] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=f3e37]:
      - link "Udemy Courses" [ref=f3e38] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=f3e39]:
      - link "Online Trainings" [ref=f3e40] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=f3e41]:
      - link "Blog" [ref=f3e42] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=f3e43]:
      - link "PlaywrightPractice" [ref=f3e44] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - generic [ref=f3e48]:
    - generic:
      - generic [ref=f3e58]:
        - generic [ref=f3e59]:
          - generic [ref=f3e64]:
            - heading [level=3] [ref=f3e65]:
              - link "Data Entry Form" [ref=f3e66] [cursor=pointer]:
                - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
            - generic [ref=f3e67]:
              - generic [ref=f3e68]:
                - generic [ref=f3e69]: "Name:"
                - textbox "Enter Name" [ref=f3e70]
                - generic [ref=f3e71]: "Email:"
                - textbox "Enter EMail" [ref=f3e72]
                - generic [ref=f3e73]: "Phone:"
                - textbox "Enter Phone" [ref=f3e74]
              - generic [ref=f3e75]:
                - generic [ref=f3e76]: "Address:"
                - textbox "Address:" [active] [ref=f3e77]: ANNA NAGAR
              - generic [ref=f3e78]:
                - generic [ref=f3e79]: "Gender:"
                - generic [ref=f3e80]:
                  - radio "Male" [ref=f3e81]
                  - generic [ref=f3e82]: Male
                - generic [ref=f3e83]:
                  - radio "Female" [ref=f3e84]
                  - generic [ref=f3e85]: Female
              - generic [ref=f3e86]:
                - generic [ref=f3e87]: "Days:"
                - generic [ref=f3e88]:
                  - checkbox "Sunday" [ref=f3e89]
                  - generic [ref=f3e90]: Sunday
                - generic [ref=f3e91]:
                  - checkbox "Monday" [ref=f3e92]
                  - generic [ref=f3e93]: Monday
                - generic [ref=f3e94]:
                  - checkbox "Tuesday" [ref=f3e95]
                  - generic [ref=f3e96]: Tuesday
                - generic [ref=f3e97]:
                  - checkbox "Wednesday" [ref=f3e98]
                  - generic [ref=f3e99]: Wednesday
                - generic [ref=f3e100]:
                  - checkbox "Thursday" [ref=f3e101]
                  - generic [ref=f3e102]: Thursday
                - generic [ref=f3e103]:
                  - checkbox "Friday" [ref=f3e104]
                  - generic [ref=f3e105]: Friday
                - generic [ref=f3e106]:
                  - checkbox "Saturday" [ref=f3e107]
                  - generic [ref=f3e108]: Saturday
              - generic [ref=f3e109]:
                - generic [ref=f3e110]: "Country:"
                - combobox "Country:" [ref=f3e111]:
                  - option "United States" [selected]
                  - option "Canada"
                  - option "United Kingdom"
                  - option "Germany"
                  - option "France"
                  - option "Australia"
                  - option "Japan"
                  - option "China"
                  - option "Brazil"
                  - option "India"
              - generic [ref=f3e112]:
                - generic [ref=f3e113]: "Colors:"
                - listbox "Colors:" [ref=f3e114]:
                  - option "Red" [ref=f3e115]
                  - option "Blue" [ref=f3e116]
                  - option "Green" [ref=f3e117]
                  - option "Yellow" [ref=f3e118]
                  - option "Red" [ref=f3e119]
                  - option "White" [ref=f3e120]
                  - option "Green" [ref=f3e121]
              - generic [ref=f3e122]:
                - generic [ref=f3e123]: "Sorted List:"
                - listbox "Sorted List:" [ref=f3e124]:
                  - option "Cat" [ref=f3e125]
                  - option "Cheetah" [ref=f3e126]
                  - option "Deer" [ref=f3e127]
                  - option "Dog" [ref=f3e128]
                  - option "Elephant" [ref=f3e129]
                  - option "Fox" [ref=f3e130]
                  - option "Giraffe" [ref=f3e131]
                  - option "Lion" [ref=f3e132]
                  - option "Rabbit" [ref=f3e133]
                  - option "Zebra" [ref=f3e134]
              - paragraph [ref=f3e135]:
                - text: "Date Picker 1 (mm/dd/yyyy):"
                - textbox [ref=f3e136]
              - paragraph [ref=f3e137]:
                - text: "Date Picker 2 (dd/mm/yyyy) :"
                - textbox [ref=f3e138]
              - generic [ref=f3e139]: "Date Picker 3: (Select a Date Range)"
              - generic [ref=f3e140]:
                - textbox [ref=f3e141]:
                  - /placeholder: Start Date
                - generic [ref=f3e142]: to
                - textbox [ref=f3e143]:
                  - /placeholder: End Date
                - button "Submit" [ref=f3e144] [cursor=pointer]
          - link "Home" [ref=f3e148] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/
          - generic [ref=f3e150]:
            - text: "Subscribe to:"
            - link "Posts (Atom)" [ref=f3e151] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
        - generic [ref=f3e152]:
          - heading "Upload Files" [level=2] [ref=f3e153]
          - generic [ref=f3e154]:
            - generic [ref=f3e155]:
              - button "Choose File" [ref=f3e156]
              - button "Upload Single File" [ref=f3e157] [cursor=pointer]
            - paragraph
            - generic [ref=f3e158]:
              - button "Choose File" [ref=f3e159]
              - button "Upload Multiple Files" [ref=f3e160] [cursor=pointer]
            - paragraph
        - generic [ref=f3e161]:
          - heading "Static Web Table" [level=2] [ref=f3e162]
          - table [ref=f3e164]:
            - rowgroup [ref=f3e165]:
              - row [ref=f3e166]:
                - columnheader "BookName" [ref=f3e167]
                - columnheader "Author" [ref=f3e168]
                - columnheader "Subject" [ref=f3e169]
                - columnheader "Price" [ref=f3e170]
              - row [ref=f3e171]:
                - cell "Learn Selenium" [ref=f3e172]
                - cell "Amit" [ref=f3e173]
                - cell "Selenium" [ref=f3e174]
                - cell "300" [ref=f3e175]
              - row [ref=f3e176]:
                - cell "Learn Java" [ref=f3e177]
                - cell "Mukesh" [ref=f3e178]
                - cell "Java" [ref=f3e179]
                - cell "500" [ref=f3e180]
              - row [ref=f3e181]:
                - cell "Learn JS" [ref=f3e182]
                - cell "Animesh" [ref=f3e183]
                - cell "Javascript" [ref=f3e184]
                - cell "300" [ref=f3e185]
              - row [ref=f3e186]:
                - cell "Master In Selenium" [ref=f3e187]
                - cell "Mukesh" [ref=f3e188]
                - cell "Selenium" [ref=f3e189]
                - cell "3000" [ref=f3e190]
              - row [ref=f3e191]:
                - cell "Master In Java" [ref=f3e192]
                - cell "Amod" [ref=f3e193]
                - cell "JAVA" [ref=f3e194]
                - cell "2000" [ref=f3e195]
              - row [ref=f3e196]:
                - cell "Master In JS" [ref=f3e197]
                - cell "Amit" [ref=f3e198]
                - cell "Javascript" [ref=f3e199]
                - cell "1000" [ref=f3e200]
        - generic [ref=f3e201]:
          - heading "Dynamic Web Table" [level=2] [ref=f3e202]
          - generic [ref=f3e203]:
            - table [ref=f3e204]:
              - rowgroup [ref=f3e205]:
                - row [ref=f3e206]:
                  - columnheader "Name" [ref=f3e207]
                  - columnheader "Disk (MB/s)" [ref=f3e208]
                  - columnheader "Network (Mbps)" [ref=f3e209]
                  - columnheader "CPU (%)" [ref=f3e210]
                  - columnheader "Memory (MB)" [ref=f3e211]
              - rowgroup [ref=f3e212]:
                - row [ref=f3e213]:
                  - cell "Firefox" [ref=f3e214]
                  - cell "0.57 MB/s" [ref=f3e215]
                  - cell "4.6 Mbps" [ref=f3e216]
                  - cell "7.7%" [ref=f3e217]
                  - cell "35.9 MB" [ref=f3e218]
                - row [ref=f3e219]:
                  - cell "Internet Explorer" [ref=f3e220]
                  - cell "0.65 MB/s" [ref=f3e221]
                  - cell "8.2 Mbps" [ref=f3e222]
                  - cell "3.7%" [ref=f3e223]
                  - cell "59.7 MB" [ref=f3e224]
                - row [ref=f3e225]:
                  - cell "System" [ref=f3e226]
                  - cell "0.36 MB/s" [ref=f3e227]
                  - cell "4.8 Mbps" [ref=f3e228]
                  - cell "7.9%" [ref=f3e229]
                  - cell "91.6 MB" [ref=f3e230]
                - row [ref=f3e231]:
                  - cell "Chrome" [ref=f3e232]
                  - cell "0.09 MB/s" [ref=f3e233]
                  - cell "5.3 Mbps" [ref=f3e234]
                  - cell "0.3%" [ref=f3e235]
                  - cell "64.6 MB" [ref=f3e236]
            - generic [ref=f3e237]:
              - paragraph [ref=f3e238]:
                - text: "CPU load of Chrome process:"
                - strong [ref=f3e239]: 0.3%
              - paragraph [ref=f3e240]:
                - text: "Memory Size of Firefox process:"
                - strong [ref=f3e241]: 35.9 MB
              - paragraph [ref=f3e242]:
                - text: "Network speed of Chrome process:"
                - strong [ref=f3e243]: 5.3 Mbps
              - paragraph [ref=f3e244]:
                - text: "Disk space of Firefox process:"
                - strong [ref=f3e245]: 0.57 MB/s
        - generic [ref=f3e246]:
          - heading "Pagination Web Table" [level=2] [ref=f3e247]
          - generic [ref=f3e249]:
            - table [ref=f3e250]:
              - rowgroup [ref=f3e251]:
                - row [ref=f3e252]:
                  - columnheader "ID" [ref=f3e253]
                  - columnheader "Name" [ref=f3e254]
                  - columnheader "Price" [ref=f3e255]
                  - columnheader "Select" [ref=f3e256]
              - rowgroup [ref=f3e257]:
                - row [ref=f3e258]:
                  - cell "1" [ref=f3e259]
                  - cell "Smartphone" [ref=f3e260]
                  - cell "$10.99" [ref=f3e261]
                  - cell [ref=f3e262]:
                    - checkbox [ref=f3e263]
                - row [ref=f3e264]:
                  - cell "2" [ref=f3e265]
                  - cell "Laptop" [ref=f3e266]
                  - cell "$19.99" [ref=f3e267]
                  - cell [ref=f3e268]:
                    - checkbox [ref=f3e269]
                - row [ref=f3e270]:
                  - cell "3" [ref=f3e271]
                  - cell "Tablet" [ref=f3e272]
                  - cell "$5.99" [ref=f3e273]
                  - cell [ref=f3e274]:
                    - checkbox [ref=f3e275]
                - row [ref=f3e276]:
                  - cell "4" [ref=f3e277]
                  - cell "Smartwatch" [ref=f3e278]
                  - cell "$7.99" [ref=f3e279]
                  - cell [ref=f3e280]:
                    - checkbox [ref=f3e281]
                - row [ref=f3e282]:
                  - cell "5" [ref=f3e283]
                  - cell "Wireless Earbuds" [ref=f3e284]
                  - cell "$8.99" [ref=f3e285]
                  - cell [ref=f3e286]:
                    - checkbox [ref=f3e287]
            - list [ref=f3e288]:
              - listitem [ref=f3e289]:
                - link "1" [ref=f3e290] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f3e291]:
                - link "2" [ref=f3e292] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f3e293]:
                - link "3" [ref=f3e294] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f3e295]:
                - link "4" [ref=f3e296] [cursor=pointer]:
                  - /url: "#"
      - generic:
        - generic:
          - complementary
      - complementary [ref=f3e299]:
        - generic [ref=f3e300]:
          - generic [ref=f3e301]:
            - heading "Tabs" [level=2] [ref=f3e302]
            - generic [ref=f3e305]:
              - link [ref=f3e307] [cursor=pointer]:
                - /url: https://wikipedia.org/wiki/
              - generic [ref=f3e309]:
                - textbox [ref=f3e311]
                - button "Submit" [ref=f3e313] [cursor=pointer]
          - generic [ref=f3e315]:
            - heading "Dynamic Button" [level=2] [ref=f3e316]
            - button "START" [ref=f3e318] [cursor=pointer]
          - generic [ref=f3e319]:
            - heading "Alerts & Popups" [level=2] [ref=f3e320]
            - generic [ref=f3e321]:
              - button "Simple Alert" [ref=f3e322] [cursor=pointer]
              - button "Confirmation Alert" [ref=f3e323] [cursor=pointer]
              - button "Prompt Alert" [ref=f3e324] [cursor=pointer]
              - paragraph
          - button "New Tab" [ref=f3e327] [cursor=pointer]
          - button "Popup Windows" [ref=f3e332] [cursor=pointer]
          - generic [ref=f3e333]:
            - heading "Mouse Hover" [level=2] [ref=f3e334]
            - generic [ref=f3e335]:
              - paragraph [ref=f3e336]: Move the mouse over the button to open the dropdown menu.
              - button "Point Me" [ref=f3e338] [cursor=pointer]
          - generic [ref=f3e339]:
            - heading "Double Click" [level=2] [ref=f3e340]
            - generic [ref=f3e341]:
              - text: "Field1:"
              - textbox [ref=f3e342]: Hello World!
              - text: "Field2:"
              - textbox [ref=f3e343]
              - button "Copy Text" [ref=f3e344] [cursor=pointer]
              - paragraph [ref=f3e345]: Double click on button, the text from Field1 will be copied into Field2.
          - generic [ref=f3e346]:
            - heading "Drag and Drop" [level=2] [ref=f3e347]
            - generic:
              - paragraph [ref=f3e349]: Drag me to my target
              - paragraph [ref=f3e351]: Drop here
          - generic [ref=f3e352]:
            - heading "Slider" [level=2] [ref=f3e353]
            - generic [ref=f3e354]:
              - paragraph [ref=f3e355]:
                - generic [ref=f3e356]: "Price range:"
                - textbox "Price range:" [ref=f3e357]: $75 - $300
              - generic [ref=f3e358]:
                - generic [ref=f3e360] [cursor=pointer]
                - generic [ref=f3e361] [cursor=pointer]
          - heading "SVG Elements" [level=2] [ref=f3e363]
          - generic [ref=f3e372]:
            - heading "Scrolling DropDown" [level=2] [ref=f3e373]
            - textbox "Select an item" [ref=f3e375]
          - generic [ref=f3e376]:
            - heading "Labels And Links" [level=2] [ref=f3e377]
            - generic [ref=f3e379]:
              - generic [ref=f3e380]:
                - heading "Mobile Labels" [level=4] [ref=f3e381]
                - generic [ref=f3e382]: Samsung
                - generic [ref=f3e383]: Real Me
                - generic [ref=f3e384]: Moto
              - generic [ref=f3e385]:
                - heading "Laptop Links" [level=4] [ref=f3e386]
                - link "Apple" [ref=f3e387] [cursor=pointer]:
                  - /url: https://www.apple.com/
                - link "Lenovo" [ref=f3e388] [cursor=pointer]:
                  - /url: https://www.lenovo.com/
                - link "Dell" [ref=f3e389] [cursor=pointer]:
                  - /url: https://www.dell.com/
              - generic [ref=f3e390]:
                - heading "Broken Links" [level=4] [ref=f3e391]
                - link "Errorcode 400" [ref=f3e392] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                - link "Errorcode 401" [ref=f3e393] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                - link "Errorcode 403" [ref=f3e394] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                - link "Errorcode 404" [ref=f3e395] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                - link "Errorcode 408" [ref=f3e396] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                - link "Errorcode 500" [ref=f3e397] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                - link "Errorcode 502" [ref=f3e398] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                - link "Errorcode 503" [ref=f3e399] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=503
          - heading "Visitors" [level=2] [ref=f3e401]
  - contentinfo [ref=f3e402]:
    - generic [ref=f3e405]:
      - table [ref=f3e406]:
        - rowgroup [ref=f3e407]:
          - row [ref=f3e408]:
            - cell [ref=f3e409]:
              - generic [ref=f3e410]:
                - generic [ref=f3e411]:
                  - heading "Form" [level=2] [ref=f3e412]
                  - generic [ref=f3e414]:
                    - generic [ref=f3e415]:
                      - heading "Section 1" [level=4] [ref=f3e416]
                      - paragraph [ref=f3e417]: This is a paragraph in Section 1.
                      - textbox [ref=f3e418]
                      - button "Submit" [ref=f3e419] [cursor=pointer]
                    - generic [ref=f3e420]:
                      - heading "Section 2" [level=4] [ref=f3e421]
                      - paragraph [ref=f3e422]: This is a paragraph in Section 2.
                      - textbox [ref=f3e423]
                      - button "Submit" [ref=f3e424] [cursor=pointer]
                    - generic [ref=f3e425]:
                      - heading "Section 3" [level=4] [ref=f3e426]
                      - paragraph [ref=f3e427]: This is a paragraph in Section 3.
                      - textbox [ref=f3e428]
                      - button "Submit" [ref=f3e429] [cursor=pointer]
                - generic [ref=f3e430]:
                  - heading "Footer Links" [level=2] [ref=f3e431]
                  - list [ref=f3e433]:
                    - listitem [ref=f3e434]:
                      - link "Home" [ref=f3e435] [cursor=pointer]:
                        - /url: http://testautomationpractice.blogspot.com/
                    - listitem [ref=f3e436]:
                      - link "Hidden Elements & AJAX" [ref=f3e437] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                    - listitem [ref=f3e438]:
                      - link "Download Files" [ref=f3e439] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
            - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=f3e440]:
              - generic [ref=f3e442]:
                - heading "ShadowDOM" [level=2] [ref=f3e443]
                - generic [ref=f3e444]:
                  - generic [ref=f3e445]:
                    - generic [ref=f3e446]: Mobiles
                    - generic [ref=f3e447]: Laptops
                    - link "Blog" [ref=f3e450] [cursor=pointer]:
                      - /url: https://www.pavantestingtools.com/
                    - textbox [ref=f3e451]
                    - checkbox [ref=f3e452]
                    - button "Choose File" [ref=f3e453]
                  - link "Youtube" [ref=f3e454] [cursor=pointer]:
                    - /url: https://www.youtube.com/@sdetpavan/videos
      - generic [ref=f3e457]:
        - text: Theme images by
        - link "merrymoonmary" [ref=f3e458] [cursor=pointer]:
          - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
        - text: . Powered by
        - link "Blogger" [ref=f3e459] [cursor=pointer]:
          - /url: https://www.blogger.com
        - text: .
```

# Test source

```ts
  1  | import { test, Page } from "@playwright/test";
  2  | 
  3  | // Locator()-->css(ID,Class,Atribute name &Atribute value) and Xpath
  4  | // inbuilt methods- role,label,text, testid,title,placeholder,altText
  5  | 
  6  | test("LOCATORS", async ({ page }) => {
  7  |   await page.goto("https://testautomationpractice.blogspot.com/");
  8  |   /*  await page.locator("#name").fill("####"); //input[@id="name"]
  9  |   await page.locator(".form-control").nth(1).fill("Prem@gmail.com");
  10 |   await page.locator("[placeholder='Enter Phone']").fill("1234567890");
  11 | 
  12 |   //input[@id="name"]
  13 |   await page
  14 |     .locator('//input[@id="name"]')
  15 |     .pressSequentially("Prem using Xpath", { delay: 500 });
  16 |   await page.locator('//input[@placeholder="Enter EMail"]').fill("gmail");
  17 |   await page.waitForTimeout(3000);
  18 |   const textLOC = page.locator(
  19 |     '//h1[normalize-space(text())="Automation Testing Practice"]',
  20 |   );
  21 |   const v = await textLOC.isVisible();
  22 |   console.log(v);
  23 |   console.log(await textLOC.innerText());
  24 |   console.log(await textLOC.textContent()); */
  25 |   await page.getByRole("link", { name: "PlaywrightPractice" }).click();
  26 |   await page.getByTestId("edit-profile-btn").click();
  27 |   await page.waitForTimeout(3000);
  28 | });
  29 | 
  30 | test("XPATH", async ({ page }) => {
  31 |   await page.goto("https://selectorshub.com/xpath-practice-page/");
  32 |   await page.locator('//input[contains(@id,"shub")]').click();
  33 |   const edit = await page.locator('//input[contains(@id,"shub")]').isEditable();
  34 |   console.log(edit);
  35 | 
  36 |   await page
  37 |     .getByPlaceholder("Enter email", { exact: true })
  38 |     .fill("Priya@gmail");
  39 |   await page.getByTitle("Password").fill("12365487");
  40 |   await page.getByText(/Submit/).click();
  41 |   await page.waitForTimeout(4000);
  42 | });
  43 | 
  44 | test("inbuild methods", async ({ page }) => {
  45 |   await page.goto("https://www.google.com/");
  46 |   await page.getByRole("combobox").fill("Playwright");
  47 |   // await page.getByRole("button", { name: "Google Search" }).click();
  48 |   await page.getByRole("link", { name: "About" }).click();
  49 | 
  50 |   await page.goto("https://testautomationpractice.blogspot.com/");
  51 |   await page
  52 |     .getByRole("heading", { name: /Automation Testing Practice/ })
  53 |     .isVisible();
  54 | 
  55 |   await page.getByRole("textbox", { name: "Address:" }).fill("ANNA NAGAR");
> 56 |   await page.getByRole("radio", { name: "Male" }).check();
     |                                                   ^ Error: locator.check: Error: strict mode violation: getByRole('radio', { name: 'Male' }) resolved to 2 elements:
  57 |   await page.waitForTimeout(3000);
  58 | });
  59 | 
```