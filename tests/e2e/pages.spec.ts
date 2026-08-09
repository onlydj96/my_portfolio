import { test, expect } from "@playwright/test";

test.describe("E2E-006: 홈 페이지", () => {
  test("홈 페이지 로드 및 구성 확인", async ({ page }) => {
    await page.goto("/");

    // Hero 섹션 확인
    await expect(page.locator("h1")).toBeVisible();

    // Featured Projects 섹션 확인
    await expect(page.locator('text="Featured Projects"')).toBeVisible();

    // Core Competencies 섹션 확인
    await expect(page.locator('text="Core Competencies"')).toBeVisible();

    // CTA 버튼 확인
    await expect(page.locator('text="View Projects"')).toBeVisible();
  });
});

test.describe("E2E-007: Career 페이지", () => {
  test("Career 페이지 로드 및 구성 확인", async ({ page }) => {
    await page.goto("/career");

    // 페이지 제목 확인
    await expect(page.locator("h1")).toContainText(/Career/i);

    // Career 카드 확인
    const careerCards = page.locator("article");
    await expect(careerCards.first()).toBeVisible();

    // 현재 직장 표시 확인
    await expect(page.locator('text="현재"').first()).toBeVisible();
  });
});

test.describe("E2E-008: Contact 페이지", () => {
  test("Contact 페이지 로드 및 구성 확인", async ({ page }) => {
    await page.goto("/contact");

    // 페이지 제목 확인
    await expect(page.locator("h1")).toContainText(/Contact/i);

    // 연락처 정보 확인
    await expect(page.locator("body")).toContainText(/@|email|mail/i);
  });
});

test.describe("E2E-012: 페이지 로드 성능", () => {
  test("홈 페이지가 3초 내 로드", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(3000);
  });

  test("프로젝트 목록 페이지가 3초 내 로드", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/projects", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(3000);
  });
});
