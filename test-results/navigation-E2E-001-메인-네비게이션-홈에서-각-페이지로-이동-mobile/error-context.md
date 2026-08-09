# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> E2E-001: 메인 네비게이션 >> 홈에서 각 페이지로 이동
- Location: tests\e2e\navigation.spec.ts:4:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/about"]')
    - locator resolved to <a href="/about" class="transition-colors font-medium text-gray-600 hover:text-gray-900">About</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    44 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link "Skip to main content" [ref=e3]:
      - /url: "#main-content"
    - navigation "메인 네비게이션" [ref=e4]:
      - generic [ref=e5]:
        - link "Luke Hwangbo" [ref=e6]:
          - /url: /
        - button "메뉴 열기" [ref=e7]
  - main [ref=e10]:
    - generic [ref=e13]:
      - img "황보동준 프로필 사진" [ref=e16]
      - generic [ref=e17]:
        - heading "Luke Hwangbo" [level=1] [ref=e18]
        - paragraph [ref=e19]: 황보동준
        - paragraph [ref=e20]: "[object Object] · [object Object] · [object Object] · [object Object]"
        - paragraph [ref=e21]: AI 기술과 개발 프로세스를 실제 조직과 서비스에 적용하는 AX Engineer이자 Development PM입니다.
        - generic [ref=e22]:
          - link "View Projects" [ref=e23]:
            - /url: /projects
          - link "View Career" [ref=e24]:
            - /url: /career
          - link "Contact" [ref=e25]:
            - /url: /contact
          - link "이력서 다운로드 (새 탭에서 열림)" [ref=e26]:
            - /url: /resume/resume.pdf
            - text: Resume
    - generic [ref=e28]:
      - heading "Core Competencies" [level=2] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "AX Engineering" [level=3] [ref=e35]
          - paragraph [ref=e36]: AI Agent · Workflow Automation · Process Design
        - generic [ref=e37]:
          - heading "AI Development" [level=3] [ref=e41]
          - paragraph [ref=e42]: NLP · Computer Vision · Edge AI
        - generic [ref=e43]:
          - heading "Development PM" [level=3] [ref=e47]
          - paragraph [ref=e48]: Requirements · Schedule · Communication
    - generic [ref=e50]:
      - generic [ref=e51]:
        - heading "Featured Projects" [level=2] [ref=e52]
        - link "View All →" [ref=e53]:
          - /url: /projects
      - generic [ref=e54]:
        - article [ref=e55]:
          - link "Notion 기반 업무 협업 및 자동화 체계 구축 프로젝트 상세보기" [ref=e56]:
            - /url: /projects/notion-workspace
            - img "Notion 기반 업무 협업 및 자동화 체계 구축" [ref=e58]
            - generic [ref=e59]:
              - generic [ref=e60]:
                - generic [ref=e61]: AX Engineering
                - generic [ref=e62]: Project Management
              - heading "Notion 기반 업무 협업 및 자동화 체계 구축" [level=3] [ref=e63]
              - paragraph [ref=e64]: Notion을 단순 문서 작성 도구가 아닌 조직의 업무 데이터베이스로 설계하고, Notion API를 활용해 반복 업무와 정보 연동을 자동화했습니다.
              - generic [ref=e65]:
                - text: 담당 역할
                - paragraph [ref=e66]: 전사 업무 프로세스 분석, 데이터베이스 설계, Notion API 자동화
              - generic [ref=e67]:
                - generic [ref=e68]: Notion
                - generic [ref=e69]: Notion API
                - generic [ref=e70]: Python
        - article [ref=e71]:
          - link "AI Agent 도입 및 개발 프로세스 개선 프로젝트 상세보기" [ref=e72]:
            - /url: /projects/ai-agent-adoption
            - generic [ref=e77]:
              - generic [ref=e78]: AX Engineering
              - heading "AI Agent 도입 및 개발 프로세스 개선" [level=3] [ref=e80]
              - paragraph [ref=e81]: AI Agent가 일회성 코드 생성 도구에 머무르지 않도록 프로젝트 컨텍스트, 작업 규칙, 실행 도구와 검증 절차를 구조화하여 개발 프로세스에 적용했습니다.
              - generic [ref=e82]:
                - text: 담당 역할
                - paragraph [ref=e83]: AI Agent 도입 및 활용 체계 설계, Harness Engineering 적용
              - generic [ref=e84]:
                - generic [ref=e85]: Claude Code
                - generic [ref=e86]: Codex
                - generic [ref=e87]: Cursor
                - generic [ref=e88]: Python
        - article [ref=e89]:
          - link "밀집인파 관제 및 공간 기반 군중 밀집도 분석 프로젝트 상세보기" [ref=e90]:
            - /url: /projects/crowd-monitoring
            - generic [ref=e95]:
              - generic [ref=e96]:
                - generic [ref=e97]: Computer Vision
                - generic [ref=e98]: Edge AI
              - heading "밀집인파 관제 및 공간 기반 군중 밀집도 분석" [level=3] [ref=e99]
              - paragraph [ref=e100]: 단순 인원 계수를 넘어 카메라의 원근감과 공간적 제약으로 발생하는 오차를 분석하고, 3차원 공간 정보를 활용해 실제 공간 기준의 밀집도를 산출하는 방향으로 시스템을 고도화했습니다.
              - generic [ref=e101]:
                - text: 담당 역할
                - paragraph [ref=e102]: Crowd Density Estimation 모델 개발, Edge Device 연동, 개발 PM
              - generic [ref=e103]:
                - generic [ref=e104]: Python
                - generic [ref=e105]: PyTorch
                - generic [ref=e106]: OpenCV
                - generic [ref=e107]: NVIDIA Jetson
                - generic [ref=e108]: "+1"
        - article [ref=e109]:
          - link "BERT 기반 Intention Classification 모델 개발 프로젝트 상세보기" [ref=e110]:
            - /url: /projects/intention-classification
            - generic [ref=e115]:
              - generic [ref=e116]: NLP
              - heading "BERT 기반 Intention Classification 모델 개발" [level=3] [ref=e118]
              - paragraph [ref=e119]: BERT 기반 Intention Classification 모델을 개발하고 도메인 적응 학습과 네트워크 구조 개선을 통해 기존 외부 기준 모델보다 향상된 성능을 확보했습니다.
              - generic [ref=e120]:
                - text: 담당 역할
                - paragraph [ref=e121]: NLP 모델 개발, 도메인 적응 학습, 성능 최적화
              - generic [ref=e122]:
                - generic [ref=e123]: Python
                - generic [ref=e124]: PyTorch
                - generic [ref=e125]: Transformers
                - generic [ref=e126]: BERT
  - contentinfo [ref=e127]:
    - generic [ref=e129]:
      - generic [ref=e130]: © 2026 Luke Hwangbo. All rights reserved.
      - generic [ref=e131]:
        - link "Contact" [ref=e132]:
          - /url: /contact
        - link "GitHub 프로필 (새 탭에서 열림)" [ref=e133]:
          - /url: https://github.com/yourusername
        - link "LinkedIn 프로필 (새 탭에서 열림)" [ref=e136]:
          - /url: https://linkedin.com/in/yourusername
  - button "Open Next.js Dev Tools" [ref=e144] [cursor=pointer]
  - alert [ref=e150]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("E2E-001: 메인 네비게이션", () => {
  4  |   test("홈에서 각 페이지로 이동", async ({ page }) => {
  5  |     await page.goto("/");
  6  | 
  7  |     // About 페이지로 이동
> 8  |     await page.click('a[href="/about"]');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  9  |     await expect(page).toHaveURL("/about");
  10 |     await expect(page.locator("h1")).toContainText(/About|Luke/i);
  11 | 
  12 |     // Career 페이지로 이동
  13 |     await page.click('a[href="/career"]');
  14 |     await expect(page).toHaveURL("/career");
  15 |     await expect(page.locator("h1")).toContainText(/Career/i);
  16 | 
  17 |     // Projects 페이지로 이동
  18 |     await page.click('a[href="/projects"]');
  19 |     await expect(page).toHaveURL("/projects");
  20 |     await expect(page.locator("h1")).toContainText(/Projects/i);
  21 | 
  22 |     // Contact 페이지로 이동
  23 |     await page.click('a[href="/contact"]');
  24 |     await expect(page).toHaveURL("/contact");
  25 |     await expect(page.locator("h1")).toContainText(/Contact/i);
  26 | 
  27 |     // Home으로 돌아가기
  28 |     await page.click('a[href="/"]');
  29 |     await expect(page).toHaveURL("/");
  30 |   });
  31 | 
  32 |   test("로고 클릭 시 홈으로 이동", async ({ page }) => {
  33 |     await page.goto("/about");
  34 |     await page.click('text="Luke Hwangbo"');
  35 |     await expect(page).toHaveURL("/");
  36 |   });
  37 | });
  38 | 
  39 | test.describe("E2E-002: 모바일 네비게이션", () => {
  40 |   test.use({ viewport: { width: 375, height: 667 } });
  41 | 
  42 |   test("모바일에서 햄버거 메뉴 작동", async ({ page }) => {
  43 |     await page.goto("/");
  44 | 
  45 |     // 햄버거 버튼 클릭
  46 |     const menuButton = page.getByRole("button", { name: /메뉴/i });
  47 |     await menuButton.click();
  48 | 
  49 |     // 메뉴가 열림
  50 |     await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  51 | 
  52 |     // 메뉴 링크가 보일 때까지 대기 후 클릭
  53 |     const aboutLink = page.locator('nav a:has-text("About")').last();
  54 |     await expect(aboutLink).toBeVisible();
  55 |     await aboutLink.click();
  56 |     await expect(page).toHaveURL("/about");
  57 |   });
  58 | });
  59 | 
```