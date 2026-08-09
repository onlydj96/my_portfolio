# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> E2E-009: 접근성 >> skip link가 작동
- Location: tests\e2e\accessibility.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeFocused() failed

Locator:  locator('a[href="#main-content"]')
Expected: focused
Received: inactive
Timeout:  5000ms

Call log:
  - Expect "toBeFocused" with timeout 5000ms
  - waiting for locator('a[href="#main-content"]')
    13 × locator resolved to <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900">Skip to main content</a>
       - unexpected value "inactive"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("E2E-009: 접근성", () => {
  4  |   test("skip link가 작동", async ({ page }) => {
  5  |     await page.goto("/");
  6  | 
  7  |     // Tab 키로 skip link 포커스
  8  |     await page.keyboard.press("Tab");
  9  | 
  10 |     // skip link가 보임
  11 |     const skipLink = page.locator('a[href="#main-content"]');
> 12 |     await expect(skipLink).toBeFocused();
     |                            ^ Error: expect(locator).toBeFocused() failed
  13 | 
  14 |     // Enter로 메인 콘텐츠로 이동
  15 |     await page.keyboard.press("Enter");
  16 |   });
  17 | 
  18 |   test("키보드로 네비게이션 가능", async ({ page }) => {
  19 |     await page.goto("/");
  20 | 
  21 |     // Tab 키로 네비게이션 링크들 접근
  22 |     for (let i = 0; i < 10; i++) {
  23 |       await page.keyboard.press("Tab");
  24 |     }
  25 | 
  26 |     // 현재 포커스된 요소가 링크거나 버튼
  27 |     const focusedElement = page.locator(":focus");
  28 |     const tagName = await focusedElement.evaluate((el) => el.tagName.toLowerCase());
  29 |     expect(["a", "button", "input"]).toContain(tagName);
  30 |   });
  31 | 
  32 |   test("프로젝트 필터 키보드로 조작 가능", async ({ page }) => {
  33 |     await page.goto("/projects");
  34 | 
  35 |     // 필터 버튼 탭으로 접근
  36 |     const allButton = page.getByRole("button", { name: /^all$/i });
  37 |     await allButton.focus();
  38 | 
  39 |     // Tab으로 다음 버튼으로 이동
  40 |     await page.keyboard.press("Tab");
  41 | 
  42 |     // AX 버튼에 포커스
  43 |     const axButton = page.getByRole("button", { name: /ax engineering/i });
  44 |     await expect(axButton).toBeFocused();
  45 | 
  46 |     // Enter로 선택
  47 |     await page.keyboard.press("Enter");
  48 |     await expect(axButton).toHaveAttribute("aria-pressed", "true");
  49 |   });
  50 | });
  51 | 
  52 | test.describe("E2E-010: 반응형 디자인", () => {
  53 |   test("모바일에서 레이아웃 적절함", async ({ page }) => {
  54 |     await page.setViewportSize({ width: 375, height: 667 });
  55 |     await page.goto("/");
  56 | 
  57 |     // 데스크톱 메뉴 숨김
  58 |     const desktopNav = page.locator(".hidden.md\\:flex");
  59 |     await expect(desktopNav).toBeHidden();
  60 | 
  61 |     // 햄버거 버튼 보임
  62 |     const menuButton = page.getByRole("button", { name: /메뉴/i });
  63 |     await expect(menuButton).toBeVisible();
  64 |   });
  65 | 
  66 |   test("데스크톱에서 레이아웃 적절함", async ({ page }) => {
  67 |     await page.setViewportSize({ width: 1280, height: 800 });
  68 |     await page.goto("/");
  69 | 
  70 |     // 데스크톱 메뉴 보임
  71 |     const desktopNav = page.locator(".hidden.md\\:flex");
  72 |     await expect(desktopNav).toBeVisible();
  73 | 
  74 |     // 햄버거 버튼 숨김
  75 |     const menuButton = page.getByRole("button", { name: /메뉴/i });
  76 |     await expect(menuButton).toBeHidden();
  77 |   });
  78 | });
  79 | 
  80 | test.describe("E2E-011: 애니메이션 설정 존중", () => {
  81 |   test("prefers-reduced-motion 설정 시 애니메이션 감소", async ({ page }) => {
  82 |     // reduced-motion 설정
  83 |     await page.emulateMedia({ reducedMotion: "reduce" });
  84 |     await page.goto("/");
  85 | 
  86 |     // 페이지가 로드되면 성공
  87 |     await expect(page.locator("h1")).toBeVisible();
  88 |   });
  89 | });
  90 | 
```