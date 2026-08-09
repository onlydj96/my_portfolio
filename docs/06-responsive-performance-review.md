# 반응형 디자인 및 성능 최적화 검토

## 목적

포트폴리오 웹사이트의 반응형 디자인 구현 상태와 성능 최적화 사항을 검토하고, 개선 권장사항을 제시합니다.

## 반응형 디자인 검토

### ✅ 구현 완료 항목

#### 1. Tailwind CSS 반응형 브레이크포인트 활용
모든 주요 컴포넌트에서 모바일 우선(mobile-first) 반응형 디자인 적용:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)

#### 2. 레이아웃 반응형 구현

**Header ([Header.tsx:28-123](src/components/layout/Header.tsx#L28-L123))**
```tsx
✅ 데스크톱: 가로 네비게이션 (hidden md:flex)
✅ 모바일: 햄버거 메뉴 (md:hidden)
✅ 모바일 메뉴: 조건부 렌더링 (isMenuOpen)
✅ 접근성: aria-expanded, aria-label
```

**Hero ([Hero.tsx:7-95](src/components/home/Hero.tsx#L7-L95))**
```tsx
✅ 프로필 이미지: w-56 sm:w-72 (모바일 224px, 데스크톱 288px)
✅ 레이아웃: flex-col lg:flex-row (모바일 세로, 데스크톱 가로)
✅ 텍스트 정렬: text-center lg:text-left
✅ 버튼 그룹: flex-wrap, justify-center lg:justify-start
✅ Next.js Image 최적화: sizes 속성 사용
```

**ProjectCard ([ProjectCard.tsx:12-87](src/components/project/ProjectCard.tsx#L12-L87))**
```tsx
✅ 썸네일: aspect-video (16:9 비율 유지)
✅ 패딩: p-4 sm:p-6
✅ Next.js Image: sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
✅ 텍스트 말줄임: line-clamp-1, line-clamp-2
```

**Projects Grid ([ProjectsPage:55-59](src/app/projects/page.tsx#L55-L59))**
```tsx
✅ 그리드: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
✅ 간격: gap-6 (일관된 간격)
```

#### 3. 타이포그래피 반응형

```css
✅ 제목: text-3xl sm:text-4xl → text-4xl sm:text-5xl
✅ 본문: text-base → text-lg
✅ 작은 텍스트: text-sm
```

#### 4. 간격 시스템

```css
✅ 섹션 패딩: py-16 sm:py-24
✅ 컨테이너 패딩: px-4 sm:px-6 lg:px-8
✅ 일관된 간격: gap-4, gap-6, gap-8, gap-12
```

#### 5. 접근성 (Accessibility)

**전역 설정 ([globals.css:22-36](src/app/globals.css#L22-L36))**
```css
✅ prefers-reduced-motion 지원
✅ focus-visible 스타일링
✅ Skip to main content 링크
```

**키보드 네비게이션**
```tsx
✅ 모든 인터랙티브 요소에 적절한 포커스 스타일
✅ aria-label, aria-expanded, aria-current 속성
✅ 시맨틱 HTML 사용 (nav, article, section)
```

### 🔍 E2E 테스트 결과

**반응형 테스트 ([accessibility.spec.ts:53-78](tests/e2e/accessibility.spec.ts#L53-L78))**
- ✅ Chromium (Desktop): 100% 통과
- ✅ Mobile (WebKit, 375x667): 84% 통과
- ⚠️ 일부 실패: 개발 환경 이슈 (Next.js Dev Tools)

## 성능 최적화 검토

### ✅ 구현 완료 항목

#### 1. Next.js Image 최적화

**자동 최적화 기능**
```tsx
✅ WebP/AVIF 포맷 자동 변환
✅ Lazy loading (기본값)
✅ 반응형 이미지 (sizes 속성)
✅ Priority 설정 (Hero 이미지)
```

**사용 예시**
```tsx
// Hero.tsx:14-21
<Image
  src={profile.profileImage}
  alt={`${profile.name.korean} 프로필 사진`}
  fill
  className="object-cover"
  priority  // LCP 최적화
  sizes="(max-width: 640px) 224px, 288px"
/>
```

#### 2. 빌드 최적화

**Production Build 결과**
```
Route (app)
┌ ○ /                    # Static (빠른 로딩)
├ ○ /about               # Static
├ ○ /career              # Static
├ ○ /contact             # Static
├ ○ /projects            # Static (Suspense 처리)
└ ● /projects/[slug]     # SSG (7개 페이지 사전 생성)
```

**최적화 특징**
- ✅ 정적 페이지 사전 렌더링 (SSG)
- ✅ 동적 라우트 generateStaticParams 사용
- ✅ Turbopack 컴파일 (1.4초)
- ✅ TypeScript 검증 통합 (1.8초)

#### 3. 코드 분할 (Code Splitting)

```tsx
✅ 페이지별 자동 코드 분할 (Next.js App Router)
✅ 클라이언트 컴포넌트 분리 ("use client")
✅ Suspense 경계 설정 (ProjectsPage)
```

#### 4. 폰트 최적화

**Google Fonts 최적화 ([layout.tsx:7-15](src/app/layout.tsx#L7-L15))**
```tsx
✅ next/font/google 사용
✅ variable 폰트 설정
✅ 자동 폰트 서브셋팅
✅ 폰트 프리로딩
```

#### 5. CSS 최적화

```css
✅ Tailwind CSS v4 (최신 버전)
✅ 사용되지 않는 CSS 자동 제거 (PurgeCSS)
✅ 최소화된 CSS 번들
✅ CSS-in-JS 없음 (성능 이점)
```

#### 6. 라이브러리 의존성 최적화

**필수 의존성 ([package.json:16-22](package.json#L16-L22))**
```json
{
  "next": "16.2.12",           // 최신 안정 버전
  "react": "19.2.4",           // 최신 안정 버전
  "zod": "^3.24.0",            // 경량 스키마 검증 (11KB)
  "framer-motion": "^11.15.0"  // 애니메이션 (현재 미사용)
}
```

**최적화 가능 항목**
- ⚠️ framer-motion: 현재 미사용 상태 (~80KB gzipped)

## 개선 권장사항

### 🔴 P0 (높은 우선순위)

#### 1. 미사용 의존성 제거
```bash
# framer-motion이 사용되지 않으면 제거
npm uninstall framer-motion
```
**예상 효과**: ~80KB 번들 크기 감소

#### 2. 이미지 에셋 최적화
현재 누락된 이미지 추가 시 최적화 적용:
- 프로필 이미지: 적절한 해상도로 리사이징 (1200x1200 → 800x800)
- 썸네일: WebP 포맷 사전 변환 (선택사항, Next.js가 자동 처리)
- 용량: 각 이미지 500KB 이하 권장

#### 3. 메타데이터 최적화
Open Graph 이미지 추가 ([layout.tsx:25-31](src/app/layout.tsx#L25-L31)):
```tsx
// 현재: openGraph.images 없음
// 권장:
openGraph: {
  // ... 기존 설정
  images: [
    {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Luke Hwangbo Portfolio',
    },
  ],
}
```

### 🟡 P1 (중간 우선순위)

#### 4. 로딩 상태 개선
Suspense fallback을 더 나은 로딩 UI로 교체:
```tsx
// 현재: 단순 텍스트
<p>로딩 중...</p>

// 권장: 스켈레톤 UI
<div className="animate-pulse">
  <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="h-64 bg-gray-200 rounded"></div>
    ))}
  </div>
</div>
```

#### 5. 에러 바운더리 추가
페이지별 에러 처리:
```tsx
// app/error.tsx 생성
// app/projects/error.tsx 생성
```

#### 6. 로봇 메타데이터 업데이트
배포 시 robots 설정 변경 ([layout.tsx:21-24](src/app/layout.tsx#L21-L24)):
```tsx
// 현재: 개발 환경
robots: {
  index: false,
  follow: false,
}

// 배포 시:
robots: {
  index: true,
  follow: true,
}
```

### 🟢 P2 (낮은 우선순위)

#### 7. Progressive Web App (PWA) 지원
- manifest.json 추가
- 오프라인 지원 (Service Worker)
- 앱 설치 가능

#### 8. 애니메이션 추가 (선택적)
현재 framer-motion이 설치되어 있지만 미사용:
- 사용할 경우: 페이지 전환, 스크롤 애니메이션
- 사용하지 않을 경우: 제거 권장

#### 9. 검색 기능 추가
프로젝트/경력 검색 기능

#### 10. 다국어 지원 (i18n)
한국어/영어 전환 기능

## 성능 벤치마크 목표

### Lighthouse 점수 목표
- **Performance**: ≥90
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥90

### Core Web Vitals 목표
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### 현재 예상 점수
프로덕션 빌드 기준:
- ✅ 정적 페이지 사전 렌더링 (빠른 FCP)
- ✅ Next.js Image 최적화 (LCP 개선)
- ✅ 최소한의 JavaScript (FID 개선)
- ✅ 반응형 레이아웃 (CLS 안정적)

## 체크리스트

### 반응형 디자인
- [x] 모바일 우선 디자인
- [x] 3개 브레이크포인트 (sm, md, lg)
- [x] 반응형 그리드 레이아웃
- [x] 반응형 타이포그래피
- [x] 모바일 네비게이션
- [x] 터치 친화적 UI

### 성능 최적화
- [x] Next.js Image 최적화
- [x] 정적 페이지 생성 (SSG)
- [x] 코드 분할
- [x] 폰트 최적화
- [x] CSS 최적화
- [ ] 미사용 의존성 제거 (framer-motion)
- [ ] 이미지 에셋 최적화
- [ ] Open Graph 이미지 추가

### 접근성
- [x] prefers-reduced-motion 지원
- [x] 키보드 네비게이션
- [x] ARIA 속성
- [x] 시맨틱 HTML
- [x] Skip to main content
- [x] Focus visible 스타일

## 다음 단계

1. **P0 항목 완료**
   - framer-motion 제거 결정 (사용 여부 확인)
   - 이미지 에셋 최적화
   - Open Graph 메타데이터 추가

2. **Lighthouse 성능 테스트**
   ```bash
   npm run build
   npm run start
   # Chrome DevTools → Lighthouse 실행
   ```

3. **실제 디바이스 테스트**
   - iPhone (Safari)
   - Android (Chrome)
   - iPad (Safari)
   - Desktop (Chrome, Firefox, Edge)

4. **성능 모니터링 설정**
   - Vercel Analytics (배포 시)
   - Google Analytics (선택사항)

## 참고 자료

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Core Web Vitals](https://web.dev/vitals/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
