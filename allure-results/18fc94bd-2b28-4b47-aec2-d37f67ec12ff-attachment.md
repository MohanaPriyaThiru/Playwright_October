# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automationNotification.spec.ts >> notofication
- Location: tests\automationNotification.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('[data-test="product-name"]').filter({ hasText: 'Pliers' }) resolved to 4 elements:
    1) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Combination Pliers </h5> aka getByTestId('product-01M72B04JA3DVTNK59Y8GTY4S6')
    2) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Pliers </h5> aka getByTestId('product-01M72B04K2ZXM27GT1P515MZ4J')
    3) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Long Nose Pliers </h5> aka getByTestId('product-01M72B04KSCRVN0NCC1NFJNA18')
    4) <h5 class="card-title" data-test="product-name" _ngcontent-ng-c2621549667=""> Slip Joint Pliers </h5> aka getByTestId('product-01M72B04KVX4YZA2V4ZYXGT5NT')

Call log:
  - waiting for locator('[data-test="product-name"]').filter({ hasText: 'Pliers' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - heading "Practice Software Testing - Toolshop" [level=1] [ref=e50]
      - paragraph [ref=e51]:
        - img "Banner" [ref=e52]
      - separator [ref=e53]
      - generic [ref=e54]:
        - text: Enjoyed testing this app? Level up with hands-on software testing courses.
        - link "Explore courses" [ref=e57] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io/?utm_source=pst&utm_medium=homepage&utm_campaign=app_promo
    - generic [ref=e58]:
      - generic [ref=e59]:
        - heading [level=4] [ref=e60]
        - separator [ref=e64]
        - combobox "sort" [ref=e67]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading [level=4] [ref=e68]
        - separator [ref=e72]
        - generic "ngx-slider" [ref=e74]:
          - slider "ngx-slider" [ref=e79] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e80] [cursor=pointer]
          - generic [ref=e81]: "0"
          - generic [ref=e82]: "200"
          - generic [ref=e83]: "1"
          - generic [ref=e84]: "100"
        - heading [level=4] [ref=e86]
        - separator [ref=e90]
        - generic [ref=e92]:
          - generic [ref=e93]: Search
          - textbox "Search" [ref=e94]
          - button "X" [ref=e95] [cursor=pointer]
          - button "Search" [ref=e96] [cursor=pointer]
        - heading [level=4] [ref=e97]
        - separator [ref=e101]
        - heading "By category:" [level=4] [ref=e102]
        - group "Categories" [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - checkbox "Hand Tools" [ref=e107]
              - text: Hand Tools
            - list [ref=e108]:
              - group "Categories" [ref=e109]:
                - generic [ref=e112]:
                  - checkbox "Hammer" [ref=e113]
                  - text: Hammer
                - generic [ref=e115]:
                  - checkbox "Hand Saw" [ref=e116]
                  - text: Hand Saw
                - generic [ref=e118]:
                  - checkbox "Wrench" [ref=e119]
                  - text: Wrench
                - generic [ref=e121]:
                  - checkbox "Screwdriver" [ref=e122]
                  - text: Screwdriver
                - generic [ref=e124]:
                  - checkbox "Pliers" [ref=e125]
                  - text: Pliers
                - generic [ref=e127]:
                  - checkbox "Chisels" [ref=e128]
                  - text: Chisels
                - generic [ref=e130]:
                  - checkbox "Measures" [ref=e131]
                  - text: Measures
          - generic [ref=e132]:
            - generic [ref=e133]:
              - checkbox "Power Tools" [ref=e134]
              - text: Power Tools
            - list [ref=e135]:
              - group "Categories" [ref=e136]:
                - generic [ref=e139]:
                  - checkbox "Grinder" [ref=e140]
                  - text: Grinder
                - generic [ref=e142]:
                  - checkbox "Sander" [ref=e143]
                  - text: Sander
                - generic [ref=e145]:
                  - checkbox "Saw" [ref=e146]
                  - text: Saw
                - generic [ref=e148]:
                  - checkbox "Drill" [ref=e149]
                  - text: Drill
          - generic [ref=e150]:
            - generic [ref=e151]:
              - checkbox "Other" [ref=e152]
              - text: Other
            - list [ref=e153]:
              - group "Categories" [ref=e154]:
                - generic [ref=e157]:
                  - checkbox "Tool Belts" [ref=e158]
                  - text: Tool Belts
                - generic [ref=e160]:
                  - checkbox "Storage Solutions" [ref=e161]
                  - text: Storage Solutions
                - generic [ref=e163]:
                  - checkbox "Workbench" [ref=e164]
                  - text: Workbench
                - generic [ref=e166]:
                  - checkbox "Safety Gear" [ref=e167]
                  - text: Safety Gear
                - generic [ref=e169]:
                  - checkbox "Fasteners" [ref=e170]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e172]
        - group "Brands" [ref=e173]:
          - generic [ref=e176]:
            - checkbox "ForgeFlex Tools" [ref=e177]
            - text: ForgeFlex Tools
          - generic [ref=e179]:
            - checkbox "MightyCraft Hardware" [ref=e180]
            - text: MightyCraft Hardware
          - generic [ref=e182]:
            - checkbox "9ndM" [ref=e183]
            - text: 9ndM
        - heading "Sustainability:" [level=4] [ref=e185]
        - group "Eco-Friendly Products" [ref=e186]:
          - generic [ref=e189]:
            - checkbox "Show only eco-friendly products" [ref=e190]
            - text: Show only eco-friendly products
      - generic [ref=e191]:
        - generic [ref=e192]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e193] [cursor=pointer]':
            - /url: /product/01M72B04JA3DVTNK59Y8GTY4S6
            - generic [ref=e194]:
              - img "Combination Pliers" [ref=e195]
              - button "Compare" [ref=e196]
            - generic [ref=e200]:
              - heading "Combination Pliers" [level=5] [ref=e201]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e202]:
                - text: "CO₂:"
                - generic [ref=e203]: A
                - generic [ref=e204]: B
                - generic [ref=e205]: C
                - generic [ref=e206]: D
                - generic [ref=e207]: E
            - generic [ref=e208]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e210] [cursor=pointer]':
            - /url: /product/01M72B04K2ZXM27GT1P515MZ4J
            - generic [ref=e211]:
              - img "Pliers" [ref=e212]
              - button "Compare" [ref=e213]
            - generic [ref=e217]:
              - heading "Pliers" [level=5] [ref=e218]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e219]:
                - text: "CO₂:"
                - generic [ref=e220]: A
                - generic [ref=e221]: B
                - generic [ref=e222]: C
                - generic [ref=e223]: D
                - generic [ref=e224]: E
            - generic [ref=e225]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e227] [cursor=pointer]':
            - /url: /product/01M72B04KJ1TAQG8T3347W698G
            - generic [ref=e228]:
              - img "Bolt Cutters" [ref=e229]
              - button "Compare" [ref=e230]
            - generic [ref=e234]:
              - heading "Bolt Cutters" [level=5] [ref=e235]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e236]:
                - text: "CO₂:"
                - generic [ref=e237]: A
                - generic [ref=e238]: B
                - generic [ref=e239]: C
                - generic [ref=e240]: D
                - generic [ref=e241]: E
            - generic [ref=e242]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e244] [cursor=pointer]':
            - /url: /product/01M72B04KSCRVN0NCC1NFJNA18
            - generic [ref=e245]:
              - img "Long Nose Pliers" [ref=e246]
              - button "Compare" [ref=e247]
            - generic [ref=e251]:
              - heading "Long Nose Pliers" [level=5] [ref=e252]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e253]:
                - text: "CO₂:"
                - generic [ref=e254]: A
                - generic [ref=e255]: B
                - generic [ref=e256]: C
                - generic [ref=e257]: D
                - generic [ref=e258]: E
            - generic [ref=e259]:
              - generic [ref=e260]: Out of stock
              - generic [ref=e261]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e262] [cursor=pointer]':
            - /url: /product/01M72B04KVX4YZA2V4ZYXGT5NT
            - generic [ref=e263]:
              - img "Slip Joint Pliers" [ref=e264]
              - button "Compare" [ref=e265]
            - generic [ref=e269]:
              - heading "Slip Joint Pliers" [level=5] [ref=e270]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e271]:
                - text: "CO₂:"
                - generic [ref=e272]: A
                - generic [ref=e273]: B
                - generic [ref=e274]: C
                - generic [ref=e275]: D
                - generic [ref=e276]: E
            - generic [ref=e277]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e279] [cursor=pointer]':
            - /url: /product/01M72B04KX5Q9349W6A8R4EBW0
            - generic [ref=e280]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e281]
              - button "Compare" [ref=e282]
            - generic [ref=e286]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e287]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e288]:
                - text: "CO₂:"
                - generic [ref=e289]: A
                - generic [ref=e290]: B
                - generic [ref=e291]: C
                - generic [ref=e292]: D
                - generic [ref=e293]: E
            - generic [ref=e294]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e296] [cursor=pointer]':
            - /url: /product/01M72B04KZ1C13GAQ9XD0E8JA9
            - generic [ref=e297]:
              - img "Hammer" [ref=e298]
              - button "Compare" [ref=e299]
            - generic [ref=e303]:
              - heading "Hammer" [level=5] [ref=e304]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e305]:
                - text: "CO₂:"
                - generic [ref=e306]: A
                - generic [ref=e307]: B
                - generic [ref=e308]: C
                - generic [ref=e309]: D
                - generic [ref=e310]: E
            - generic [ref=e311]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e313] [cursor=pointer]':
            - /url: /product/01M72B04M0W94EPMRHR9VQGQE7
            - generic [ref=e314]:
              - img "Claw Hammer" [ref=e315]
              - button "Compare" [ref=e316]
            - generic [ref=e320]:
              - heading "Claw Hammer" [level=5] [ref=e321]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e322]:
                - text: "CO₂:"
                - generic [ref=e323]: A
                - generic [ref=e324]: B
                - generic [ref=e325]: C
                - generic [ref=e326]: D
                - generic [ref=e327]: E
            - generic [ref=e328]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e330] [cursor=pointer]':
            - /url: /product/01M72B04M27QBH9X4CEXYEXZYS
            - generic [ref=e331]:
              - img "Thor Hammer" [ref=e332]
              - button "Compare" [ref=e333]
            - generic [ref=e337]:
              - heading "Thor Hammer" [level=5] [ref=e338]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e339]:
                - text: "CO₂:"
                - generic [ref=e340]: A
                - generic [ref=e341]: B
                - generic [ref=e342]: C
                - generic [ref=e343]: D
                - generic [ref=e344]: E
            - generic [ref=e345]: $11.14
        - navigation [ref=e349]:
          - list [ref=e350]:
            - listitem [ref=e351]:
              - button "Previous": «
            - listitem [ref=e352]:
              - button "Page-1" [ref=e353] [cursor=pointer]: "1"
            - listitem [ref=e354]:
              - button "Page-2" [ref=e355] [cursor=pointer]: "2"
            - listitem [ref=e356]:
              - button "Page-3" [ref=e357] [cursor=pointer]: "3"
            - listitem [ref=e358]:
              - button "Page-4" [ref=e359] [cursor=pointer]: "4"
            - listitem [ref=e360]:
              - button "Page-5" [ref=e361] [cursor=pointer]: "5"
            - listitem [ref=e362]:
              - button "Page-6" [ref=e363] [cursor=pointer]: "6"
            - listitem [ref=e364]:
              - button "Next" [ref=e365] [cursor=pointer]: »
  - contentinfo [ref=e367]:
    - generic [ref=e369]:
      - generic [ref=e370]: Learn & Explore
      - generic [ref=e371]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e373] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e376]:
            - generic [ref=e377]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e379] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e382]:
            - generic [ref=e383]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e385] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e388]:
            - generic [ref=e389]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=e390]:
      - generic [ref=e391]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=e392] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e393] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e394] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e395]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=e397] [cursor=pointer]
  - button "Show live shop activity" [ref=e401] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("notofication", async ({ page }) => {
  4  |   await page.goto("https://practicesoftwaretesting.com/");
  5  |   await page
  6  |     .locator('[data-test="product-name"]')
  7  |     .filter({ hasText: "Pliers" })
> 8  |     .click();
     |      ^ Error: locator.click: Error: strict mode violation: locator('[data-test="product-name"]').filter({ hasText: 'Pliers' }) resolved to 4 elements:
  9  | });
  10 | 
```