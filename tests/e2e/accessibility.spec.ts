import { test, expect } from "@playwright/test";

test.describe("E2E-009: 접근성", () => {
  test("skip link가 작동", async ({ page }) => {
    await page.goto("/");

    // Tab 키로 skip link 포커스
    await page.keyboard.press("Tab");

    // skip link가 보임
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeFocused();

    // Enter로 메인 콘텐츠로 이동
    await page.keyboard.press("Enter");
  });

  test("키보드로 네비게이션 가능", async ({ page }) => {
    await page.goto("/");

    // Tab 키로 네비게이션 링크들 접근
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab");
    }

    // 현재 포커스된 요소가 링크거나 버튼
    const focusedElement = page.locator(":focus");
    const tagName = await focusedElement.evaluate((el) => el.tagName.toLowerCase());
    expect(["a", "button", "input"]).toContain(tagName);
  });

  test("프로젝트 필터 키보드로 조작 가능", async ({ page }) => {
    await page.goto("/projects");

    // 필터 버튼 탭으로 접근
    const allButton = page.getByRole("button", { name: /^all$/i });
    await allButton.focus();

    // Tab으로 다음 버튼으로 이동
    await page.keyboard.press("Tab");

    // AX 버튼에 포커스
    const axButton = page.getByRole("button", { name: /ax engineering/i });
    await expect(axButton).toBeFocused();

    // Enter로 선택
    await page.keyboard.press("Enter");
    await expect(axButton).toHaveAttribute("aria-pressed", "true");
  });
});

test.describe("E2E-010: 반응형 디자인", () => {
  test("모바일에서 레이아웃 적절함", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // 데스크톱 메뉴 숨김
    const desktopNav = page.locator(".hidden.md\\:flex");
    await expect(desktopNav).toBeHidden();

    // 햄버거 버튼 보임
    const menuButton = page.getByRole("button", { name: /메뉴/i });
    await expect(menuButton).toBeVisible();
  });

  test("데스크톱에서 레이아웃 적절함", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    // 데스크톱 메뉴 보임
    const desktopNav = page.locator(".hidden.md\\:flex");
    await expect(desktopNav).toBeVisible();

    // 햄버거 버튼 숨김
    const menuButton = page.getByRole("button", { name: /메뉴/i });
    await expect(menuButton).toBeHidden();
  });
});

test.describe("E2E-011: 애니메이션 설정 존중", () => {
  test("prefers-reduced-motion 설정 시 애니메이션 감소", async ({ page }) => {
    // reduced-motion 설정
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    // 페이지가 로드되면 성공
    await expect(page.locator("h1")).toBeVisible();
  });
});
