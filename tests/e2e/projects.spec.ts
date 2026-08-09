import { test, expect } from "@playwright/test";

test.describe("E2E-003: 프로젝트 목록", () => {
  test("프로젝트 목록 페이지 로드", async ({ page }) => {
    await page.goto("/projects");

    // 페이지 제목 확인
    await expect(page.locator("h1")).toContainText(/Projects/i);

    // 필터 버튼 확인
    await expect(page.getByRole("button", { name: /all/i })).toBeVisible();

    // 프로젝트 카드 확인
    const projectCards = page.locator("article");
    await expect(projectCards.first()).toBeVisible();
  });
});

test.describe("E2E-004: 프로젝트 필터링", () => {
  test("카테고리 필터 작동", async ({ page }) => {
    await page.goto("/projects");

    // AX 카테고리 선택
    await page.getByRole("button", { name: /ax engineering/i }).click();

    // URL에 쿼리 파라미터 확인
    await expect(page).toHaveURL(/category=AX/);

    // All 선택 시 쿼리 파라미터 제거
    await page.getByRole("button", { name: /^all$/i }).click();
    await expect(page).not.toHaveURL(/category=/);
  });

  test("필터 상태가 URL에 반영", async ({ page }) => {
    // URL로 직접 접근
    await page.goto("/projects?category=AX");

    // AX 버튼이 활성화됨
    const axButton = page.getByRole("button", { name: /ax engineering/i });
    await expect(axButton).toHaveAttribute("aria-pressed", "true");
  });
});

test.describe("E2E-005: 프로젝트 상세 페이지", () => {
  test("프로젝트 카드 클릭 시 상세 페이지 이동", async ({ page }) => {
    await page.goto("/projects");

    // 첫 번째 프로젝트 카드 클릭
    const firstProject = page.locator("article").first();
    const projectTitle = await firstProject.locator("h3").textContent();

    await firstProject.click();

    // 상세 페이지로 이동
    await expect(page).toHaveURL(/\/projects\/.+/);

    // 프로젝트 제목 확인
    if (projectTitle) {
      await expect(page.locator("h1")).toContainText(projectTitle);
    }
  });

  test("존재하지 않는 프로젝트 접근 시 404", async ({ page }) => {
    await page.goto("/projects/non-existent-slug");

    // 404 또는 not-found 페이지
    await expect(page.locator("body")).toContainText(/not found|404/i);
  });
});
