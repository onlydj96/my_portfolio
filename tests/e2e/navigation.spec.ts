import { test, expect } from "@playwright/test";

test.describe("E2E-001: 메인 네비게이션", () => {
  test("홈에서 각 페이지로 이동", async ({ page }) => {
    await page.goto("/");

    // About 페이지로 이동
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL("/about");
    await expect(page.locator("h1")).toContainText(/About|Luke/i);

    // Career 페이지로 이동
    await page.click('a[href="/career"]');
    await expect(page).toHaveURL("/career");
    await expect(page.locator("h1")).toContainText(/Career/i);

    // Projects 페이지로 이동
    await page.click('a[href="/projects"]');
    await expect(page).toHaveURL("/projects");
    await expect(page.locator("h1")).toContainText(/Projects/i);

    // Contact 페이지로 이동
    await page.click('a[href="/contact"]');
    await expect(page).toHaveURL("/contact");
    await expect(page.locator("h1")).toContainText(/Contact/i);

    // Home으로 돌아가기
    await page.click('a[href="/"]');
    await expect(page).toHaveURL("/");
  });

  test("로고 클릭 시 홈으로 이동", async ({ page }) => {
    await page.goto("/about");
    await page.click('text="Luke Hwangbo"');
    await expect(page).toHaveURL("/");
  });
});

test.describe("E2E-002: 모바일 네비게이션", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("모바일에서 햄버거 메뉴 작동", async ({ page }) => {
    await page.goto("/");

    // 햄버거 버튼 클릭
    const menuButton = page.getByRole("button", { name: /메뉴/i });
    await menuButton.click();

    // 메뉴가 열림
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    // 메뉴 링크가 보일 때까지 대기 후 클릭
    const aboutLink = page.locator('nav a:has-text("About")').last();
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();
    await expect(page).toHaveURL("/about");
  });
});
