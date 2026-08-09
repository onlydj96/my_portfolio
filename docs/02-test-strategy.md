# 테스트 전략

## 테스트 전략 요약

Luke Hwangbo Career Portfolio는 정적 포트폴리오 웹사이트로, 다음 테스트 전략을 적용한다.

| 계층 | 도구 | 주요 검증 대상 |
| --- | --- | --- |
| Unit | Vitest | 유틸 함수, Zod 스키마 검증, 데이터 변환 |
| Component | Vitest + React Testing Library | UI 상태, 접근성, 사용자 상호작용 |
| Integration | Vitest | 데이터 로딩, 라우팅, 필터 로직 |
| E2E | Playwright | 핵심 사용자 흐름, 반응형, 접근성 |

Contract Test는 초기 버전에서 외부 API가 없으므로 제외한다.

---

## Unit Test

### UT-001: Zod 스키마 - Project 필수 필드 검증

- **검증 목적**: Project 데이터의 필수 필드 누락 시 검증 실패 확인
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: title, slug, summary, role, problem, solution, techStack 누락 객체
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: Zod parse 시 ZodError 발생
- **성공 기준**: 필수 필드 누락 시 validation 실패
- **우선순위**: P0

### UT-002: Zod 스키마 - Project URL 형식 검증

- **검증 목적**: externalUrl 필드의 URL 형식 검증
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: 유효/무효 URL 문자열
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: 잘못된 URL 형식 시 ZodError 발생
- **성공 기준**: 유효한 URL만 통과
- **우선순위**: P1

### UT-003: Zod 스키마 - Career 필수 필드 검증

- **검증 목적**: Career 데이터의 필수 필드 누락 시 검증 실패 확인
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: company, position, startDate, summary, responsibilities 누락 객체
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: Zod parse 시 ZodError 발생
- **성공 기준**: 필수 필드 누락 시 validation 실패
- **우선순위**: P0

### UT-004: 프로젝트 필터 유틸 - 카테고리 필터링

- **검증 목적**: 프로젝트 카테고리 필터 함수 동작 확인
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: 다양한 카테고리를 가진 프로젝트 배열
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - "All" 선택 시 모든 공개 프로젝트 반환
  - 특정 카테고리 선택 시 해당 카테고리만 반환
  - visibility가 "HIDDEN"인 프로젝트 제외
- **성공 기준**: 필터 조건에 맞는 프로젝트만 반환
- **우선순위**: P0

### UT-005: 프로젝트 정렬 유틸 - displayOrder 기준 정렬

- **검증 목적**: 프로젝트 정렬 함수 동작 확인
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: 다양한 displayOrder를 가진 프로젝트 배열
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: displayOrder 오름차순 정렬
- **성공 기준**: displayOrder가 낮은 순으로 정렬
- **우선순위**: P1

### UT-006: Featured 프로젝트 필터

- **검증 목적**: isFeatured가 true인 프로젝트만 필터링
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: isFeatured true/false 혼합 프로젝트 배열
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: isFeatured === true인 프로젝트만 반환
- **성공 기준**: Featured 프로젝트만 반환, 최대 4개 제한
- **우선순위**: P0

### UT-007: 슬러그로 프로젝트 조회

- **검증 목적**: slug로 단일 프로젝트 조회
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: 알려진 slug, 존재하지 않는 slug
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - 존재하는 slug → 프로젝트 반환
  - 존재하지 않는 slug → undefined 반환
- **성공 기준**: 올바른 프로젝트 반환 또는 undefined
- **우선순위**: P0

### UT-008: Career 정렬 - 최신순

- **검증 목적**: Career 데이터 최신순 정렬
- **테스트 계층**: Unit
- **사전 조건**: 없음
- **테스트 데이터**: 다양한 startDate를 가진 Career 배열
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: startDate 내림차순 정렬
- **성공 기준**: 최신 경력이 먼저 표시
- **우선순위**: P1

---

## Component Test

### CT-001: Header 네비게이션 링크

- **검증 목적**: 헤더의 모든 네비게이션 링크가 올바른 경로로 연결
- **테스트 계층**: Component
- **사전 조건**: Header 컴포넌트 렌더링
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: Next.js Link 모킹 불필요 (실제 href 검증)
- **검증할 사용자 행동**: 링크 클릭
- **검증할 구현 세부사항**:
  - About 링크 → /about
  - Career 링크 → /career
  - Projects 링크 → /projects
  - Contact 링크 → /contact
- **성공 기준**: 모든 링크의 href가 올바름
- **우선순위**: P0

### CT-002: 모바일 메뉴 토글

- **검증 목적**: 모바일 화면에서 햄버거 메뉴 동작 확인
- **테스트 계층**: Component
- **사전 조건**: 모바일 뷰포트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: window.matchMedia 모킹
- **검증할 사용자 행동**: 햄버거 버튼 클릭
- **검증할 구현 세부사항**:
  - 초기 상태: 메뉴 닫힘
  - 버튼 클릭: 메뉴 열림
  - 다시 클릭: 메뉴 닫힘
- **성공 기준**: 메뉴 상태 토글
- **우선순위**: P1

### CT-003: ProjectCard 필수 정보 표시

- **검증 목적**: 프로젝트 카드에 필수 정보가 모두 표시
- **테스트 계층**: Component
- **사전 조건**: 유효한 Project 데이터
- **테스트 데이터**: 모든 필드가 채워진 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**: 카드 확인
- **검증할 구현 세부사항**:
  - 프로젝트명 표시
  - 카테고리 표시
  - 한 줄 요약 표시
  - 담당 역할 표시
  - 기술 태그 표시
- **성공 기준**: 모든 필수 정보 렌더링
- **우선순위**: P0

### CT-004: ProjectCard 이미지 fallback

- **검증 목적**: 썸네일 이미지 없을 때 placeholder 표시
- **테스트 계층**: Component
- **사전 조건**: thumbnailImage가 없는 프로젝트
- **테스트 데이터**: thumbnailImage undefined인 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: placeholder 요소 렌더링
- **성공 기준**: 이미지 없어도 레이아웃 유지
- **우선순위**: P1

### CT-005: ProjectFilter 카테고리 버튼

- **검증 목적**: 모든 카테고리 필터 버튼이 렌더링되고 클릭 가능
- **테스트 계층**: Component
- **사전 조건**: ProjectFilter 컴포넌트 렌더링
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: onFilterChange 콜백 mock
- **검증할 사용자 행동**: 필터 버튼 클릭
- **검증할 구현 세부사항**:
  - All, AX Engineering, Project Management, NLP, Computer Vision, Edge AI, Web Service 버튼 존재
  - 클릭 시 onFilterChange 호출
  - 선택된 필터 시각적 표시
- **성공 기준**: 모든 필터 버튼 동작
- **우선순위**: P0

### CT-006: CareerCard 정보 표시

- **검증 목적**: Career 카드에 모든 정보가 올바르게 표시
- **테스트 계층**: Component
- **사전 조건**: 유효한 Career 데이터
- **테스트 데이터**: 모든 필드가 채워진 Career
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - 회사명 표시
  - 직무 표시
  - 근무 기간 표시
  - 역할 요약 표시
  - 주요 업무 목록 표시
  - 기술 스택 태그 표시
- **성공 기준**: 모든 Career 정보 렌더링
- **우선순위**: P0

### CT-007: Hero 섹션 CTA 버튼

- **검증 목적**: Hero 섹션의 모든 CTA 버튼이 올바르게 렌더링
- **테스트 계층**: Component
- **사전 조건**: Hero 컴포넌트 렌더링
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - View Projects 버튼 → /projects
  - View Career 버튼 → /career
  - Contact 버튼 → /contact
  - Resume 링크 존재
- **성공 기준**: 모든 CTA 버튼 렌더링 및 링크 정확
- **우선순위**: P0

### CT-008: 접근성 - 이미지 alt 텍스트

- **검증 목적**: 모든 의미 있는 이미지에 alt 텍스트 존재
- **테스트 계층**: Component
- **사전 조건**: 이미지가 포함된 컴포넌트 렌더링
- **테스트 데이터**: 프로필 이미지, 프로젝트 이미지
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: 모든 img 태그에 alt 속성 존재
- **성공 기준**: alt 속성 빈 문자열 아님
- **우선순위**: P0

### CT-009: 접근성 - 버튼 aria-label

- **검증 목적**: 아이콘 전용 버튼에 aria-label 존재
- **테스트 계층**: Component
- **사전 조건**: 아이콘 버튼이 있는 컴포넌트 렌더링
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - 모바일 메뉴 버튼에 aria-label
  - 외부 링크 아이콘 버튼에 aria-label
- **성공 기준**: 모든 아이콘 버튼에 접근 가능한 이름
- **우선순위**: P0

### CT-010: 외부 링크 보안 속성

- **검증 목적**: 외부 링크에 noopener noreferrer 적용
- **테스트 계층**: Component
- **사전 조건**: 외부 링크가 있는 컴포넌트 렌더링
- **테스트 데이터**: externalUrl이 있는 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - target="_blank"
  - rel="noopener noreferrer"
- **성공 기준**: 모든 외부 링크에 보안 속성 적용
- **우선순위**: P0

### CT-011: 프로젝트 상세 - 섹션 렌더링

- **검증 목적**: 프로젝트 상세 페이지의 모든 섹션이 렌더링
- **테스트 계층**: Component
- **사전 조건**: 유효한 Project 데이터
- **테스트 데이터**: 모든 필드가 채워진 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - 프로젝트 개요
  - 문제 정의
  - 담당 역할
  - 해결 접근
  - 기술 스택
  - 성과 및 기여
- **성공 기준**: 모든 섹션 렌더링
- **우선순위**: P0

### CT-012: 외부 링크 없으면 버튼 미렌더링

- **검증 목적**: externalUrl이 없으면 외부 링크 버튼 미표시
- **테스트 계층**: Component
- **사전 조건**: externalUrl undefined인 프로젝트
- **테스트 데이터**: externalUrl 없는 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: 외부 링크 버튼 미렌더링
- **성공 기준**: 링크 버튼 DOM에 없음
- **우선순위**: P1

---

## Integration Test

### IT-001: 프로젝트 목록 데이터 로딩

- **검증 목적**: Projects 페이지에서 프로젝트 목록 정상 로딩
- **테스트 계층**: Integration
- **사전 조건**: 프로젝트 데이터 존재
- **테스트 데이터**: 테스트용 프로젝트 데이터
- **필요한 mock/fake/stub**: 없음 (정적 데이터)
- **검증할 구현 세부사항**:
  - 공개 프로젝트만 표시
  - visibility: "HIDDEN" 제외
- **성공 기준**: 올바른 프로젝트 목록 렌더링
- **우선순위**: P0

### IT-002: 프로젝트 필터링 + URL 동기화

- **검증 목적**: 필터 선택 시 URL query parameter 동기화
- **테스트 계층**: Integration
- **사전 조건**: Projects 페이지 렌더링
- **테스트 데이터**: 다양한 카테고리 프로젝트
- **필요한 mock/fake/stub**: Next.js router
- **검증할 구현 세부사항**:
  - 필터 클릭 → URL에 ?category=X 추가
  - URL에서 접근 → 해당 필터 활성화
  - 새로고침 후에도 필터 유지
- **성공 기준**: URL과 필터 상태 동기화
- **우선순위**: P0

### IT-003: 프로젝트 상세 페이지 동적 라우팅

- **검증 목적**: /projects/[slug] 경로로 올바른 프로젝트 로딩
- **테스트 계층**: Integration
- **사전 조건**: 프로젝트 데이터 존재
- **테스트 데이터**: 알려진 slug
- **필요한 mock/fake/stub**: Next.js params
- **검증할 구현 세부사항**:
  - slug로 프로젝트 조회
  - 프로젝트 데이터 페이지에 전달
- **성공 기준**: 올바른 프로젝트 상세 렌더링
- **우선순위**: P0

### IT-004: 존재하지 않는 프로젝트 404 처리

- **검증 목적**: 존재하지 않는 slug 접근 시 404 페이지 표시
- **테스트 계층**: Integration
- **사전 조건**: 없음
- **테스트 데이터**: 존재하지 않는 slug
- **필요한 mock/fake/stub**: Next.js notFound
- **검증할 구현 세부사항**:
  - notFound() 호출
  - 404 페이지 렌더링
- **성공 기준**: 404 페이지 표시
- **우선순위**: P0

### IT-005: Career 목록 최신순 정렬

- **검증 목적**: Career 페이지에서 경력 최신순 정렬
- **테스트 계층**: Integration
- **사전 조건**: Career 데이터 존재
- **테스트 데이터**: 다양한 기간의 Career 데이터
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**: startDate 내림차순
- **성공 기준**: 최신 경력이 먼저 표시
- **우선순위**: P1

### IT-006: Featured 프로젝트 홈 표시

- **검증 목적**: 홈 페이지에 Featured 프로젝트만 표시
- **테스트 계층**: Integration
- **사전 조건**: 프로젝트 데이터 존재
- **테스트 데이터**: isFeatured true/false 혼합
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - isFeatured === true만 표시
  - 최대 4개 제한
- **성공 기준**: Featured 프로젝트만 최대 4개 표시
- **우선순위**: P0

### IT-007: 빌드 시 데이터 검증

- **검증 목적**: 빌드 단계에서 Zod 스키마 검증 실행
- **테스트 계층**: Integration
- **사전 조건**: 프로젝트/Career 데이터
- **테스트 데이터**: 유효/무효 데이터
- **필요한 mock/fake/stub**: 없음
- **검증할 구현 세부사항**:
  - 무효 데이터 → 빌드 실패
  - 유효 데이터 → 빌드 성공
- **성공 기준**: 데이터 검증 통과해야 빌드 성공
- **우선순위**: P0

---

## E2E Test

### E2E-001: 채용담당자 플로우

- **검증 목적**: 채용담당자의 핵심 사용자 흐름 검증
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  1. 홈에서 이름, 직무 확인
  2. 대표 프로젝트 확인
  3. Career 페이지 이동
  4. 관심 프로젝트 상세 확인
  5. 이력서 또는 연락처 확인
- **성공 기준**: 3회 이내 클릭으로 핵심 정보 접근
- **우선순위**: P0

### E2E-002: 실무 면접관 플로우

- **검증 목적**: 실무 면접관의 기술 검토 흐름 검증
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  1. Projects 페이지 이동
  2. 기술 분야 필터 선택 (예: NLP)
  3. 프로젝트 상세 진입
  4. 문제, 역할, 기술, 결과 확인
  5. 아키텍처 이미지 확인
- **성공 기준**: 기술 정보에 쉽게 접근
- **우선순위**: P0

### E2E-003: 직접 URL 접근

- **검증 목적**: 프로젝트 상세 직접 URL 접근 시 정상 동작
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 알려진 프로젝트 slug
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  - /projects/notion-workspace 직접 접근
  - /projects/ai-agent-adoption 직접 접근
  - /projects/crowd-monitoring 직접 접근
- **성공 기준**: 각 프로젝트 상세 페이지 정상 렌더링
- **우선순위**: P0

### E2E-004: 404 페이지 동작

- **검증 목적**: 존재하지 않는 경로 접근 시 404 페이지 표시
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  - /projects/unknown-project 접근
  - 404 페이지 확인
  - 프로젝트 목록 이동 버튼 클릭
- **성공 기준**: 404 페이지 표시, 목록으로 복귀 가능
- **우선순위**: P0

### E2E-005: 반응형 디자인 - 모바일

- **검증 목적**: 모바일 화면에서 콘텐츠 정상 표시
- **테스트 계층**: E2E
- **사전 조건**: 모바일 뷰포트 (360px)
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  - 홈 페이지 스크롤
  - 모바일 메뉴 열기/닫기
  - 프로젝트 카드 확인
  - 가로 스크롤 없음 확인
- **성공 기준**: 가로 스크롤 없이 모든 콘텐츠 표시
- **우선순위**: P0

### E2E-006: 반응형 디자인 - 데스크톱

- **검증 목적**: 데스크톱 화면에서 레이아웃 정상 표시
- **테스트 계층**: E2E
- **사전 조건**: 데스크톱 뷰포트 (1280px)
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  - 전체 네비게이션 표시
  - 프로젝트 그리드 레이아웃
  - 사이드 여백 적절
- **성공 기준**: 데스크톱 최적화 레이아웃
- **우선순위**: P1

### E2E-007: 프로젝트 필터 동작

- **검증 목적**: 프로젝트 필터 선택 및 결과 확인
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  1. All 선택 → 모든 프로젝트 표시
  2. AX Engineering 선택 → AX 프로젝트만 표시
  3. NLP 선택 → Intention Classification 표시
  4. 새로고침 → 필터 유지
- **성공 기준**: 필터 정상 동작, URL 동기화
- **우선순위**: P0

### E2E-008: 외부 링크 동작

- **검증 목적**: 외부 링크 새 탭에서 열림
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트, 외부 링크가 있는 프로젝트
- **테스트 데이터**: Spacehong 프로젝트
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**: 외부 링크 버튼 클릭
- **성공 기준**: 새 탭에서 외부 사이트 열림
- **우선순위**: P1

### E2E-009: 키보드 네비게이션

- **검증 목적**: Tab 키로 모든 인터랙티브 요소 접근 가능
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  - Tab 키로 메뉴 순회
  - Enter 키로 링크 활성화
  - 포커스 표시 확인
- **성공 기준**: 키보드만으로 전체 사이트 탐색 가능
- **우선순위**: P0

### E2E-010: 이력서 다운로드

- **검증 목적**: 이력서 링크 정상 동작
- **테스트 계층**: E2E
- **사전 조건**: 이력서 파일 존재
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**: Resume 버튼 클릭
- **성공 기준**: 이력서 파일 접근 또는 다운로드
- **우선순위**: P1

### E2E-011: 브라우저 히스토리 네비게이션

- **검증 목적**: 브라우저 뒤로/앞으로 버튼 정상 동작
- **테스트 계층**: E2E
- **사전 조건**: 배포된 사이트
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 없음
- **검증할 사용자 행동**:
  1. 홈 → Projects 이동
  2. 프로젝트 상세 이동
  3. 뒤로 버튼 클릭 → Projects
  4. 뒤로 버튼 클릭 → 홈
  5. 앞으로 버튼 클릭 → Projects
- **성공 기준**: 히스토리 네비게이션 정상 동작
- **우선순위**: P1

### E2E-012: prefers-reduced-motion 지원

- **검증 목적**: 애니메이션 축소 설정 시 애니메이션 비활성화
- **테스트 계층**: E2E
- **사전 조건**: prefers-reduced-motion: reduce 설정
- **테스트 데이터**: 없음
- **필요한 mock/fake/stub**: 미디어 쿼리 에뮬레이션
- **검증할 사용자 행동**: 페이지 탐색
- **성공 기준**: 불필요한 애니메이션 비활성화
- **우선순위**: P1

---

## 테스트 하네스 구조

```
tests/
├── unit/
│   ├── schemas/
│   │   ├── project.schema.test.ts
│   │   └── career.schema.test.ts
│   └── utils/
│       ├── filter.test.ts
│       └── sort.test.ts
├── component/
│   ├── layout/
│   │   ├── Header.test.tsx
│   │   └── MobileMenu.test.tsx
│   ├── home/
│   │   └── Hero.test.tsx
│   ├── project/
│   │   ├── ProjectCard.test.tsx
│   │   ├── ProjectFilter.test.tsx
│   │   └── ProjectDetail.test.tsx
│   └── career/
│       └── CareerCard.test.tsx
├── integration/
│   ├── projects.test.tsx
│   ├── career.test.tsx
│   └── routing.test.tsx
└── e2e/
    ├── recruiter-flow.spec.ts
    ├── interviewer-flow.spec.ts
    ├── responsive.spec.ts
    ├── navigation.spec.ts
    └── accessibility.spec.ts
```

---

## Fixture / Factory / Mock / Seed

### Fixture

```typescript
// tests/fixtures/projects.ts
export const mockProjects: Project[] = [
  {
    id: "1",
    slug: "notion-workspace",
    title: "Notion 기반 업무 협업 및 자동화 체계 구축",
    subtitle: "전사 업무 데이터베이스 설계",
    summary: "Notion을 조직의 업무 데이터베이스로 설계하고 자동화",
    categories: ["AX", "PROJECT_MANAGEMENT"],
    role: ["업무 프로세스 분석", "데이터베이스 설계", "API 자동화"],
    company: "KIOT",
    problem: "분산된 업무 정보와 비효율적인 협업",
    solution: "Notion 기반 통합 협업 플랫폼 구축",
    responsibilities: ["전사 업무 프로세스 분석", "Database 구조 설계"],
    achievements: ["업무 효율성 향상", "반복 업무 자동화"],
    techStack: ["Notion", "Notion API", "Python"],
    isFeatured: true,
    displayOrder: 1,
    visibility: "PUBLIC",
  },
  // ... 추가 fixture
];
```

### Factory

```typescript
// tests/factories/project.factory.ts
import { faker } from "@faker-js/faker";

export const createProject = (overrides?: Partial<Project>): Project => ({
  id: faker.string.uuid(),
  slug: faker.helpers.slugify(faker.lorem.words(3)),
  title: faker.lorem.sentence(),
  subtitle: faker.lorem.sentence(),
  summary: faker.lorem.paragraph(),
  categories: [faker.helpers.arrayElement(["AX", "NLP", "WEB"])],
  role: [faker.person.jobTitle()],
  problem: faker.lorem.paragraph(),
  solution: faker.lorem.paragraph(),
  responsibilities: [faker.lorem.sentence()],
  achievements: [faker.lorem.sentence()],
  techStack: [faker.helpers.arrayElement(["React", "Python", "TypeScript"])],
  isFeatured: faker.datatype.boolean(),
  displayOrder: faker.number.int({ min: 1, max: 100 }),
  visibility: "PUBLIC",
  ...overrides,
});
```

### Mock

```typescript
// tests/mocks/next-navigation.ts
import { vi } from "vitest";

export const mockRouter = {
  push: vi.fn(),
  replace: vi.fn(),
  back: vi.fn(),
  forward: vi.fn(),
  refresh: vi.fn(),
  prefetch: vi.fn(),
};

export const mockSearchParams = {
  get: vi.fn(),
  getAll: vi.fn(),
  has: vi.fn(),
  keys: vi.fn(),
  values: vi.fn(),
  entries: vi.fn(),
  forEach: vi.fn(),
  toString: vi.fn(),
};

vi.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
  useSearchParams: () => mockSearchParams,
  usePathname: () => "/",
}));
```

### Test Setup

```typescript
// tests/setup.ts
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// window.matchMedia mock
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
```

---

## 우선순위와 실행 순서

### P0 (필수, 배포 전 통과 필수)

1. UT-001: Project 필수 필드 검증
2. UT-003: Career 필수 필드 검증
3. UT-004: 프로젝트 카테고리 필터링
4. UT-006: Featured 프로젝트 필터
5. UT-007: 슬러그로 프로젝트 조회
6. CT-001: Header 네비게이션 링크
7. CT-003: ProjectCard 필수 정보 표시
8. CT-005: ProjectFilter 카테고리 버튼
9. CT-006: CareerCard 정보 표시
10. CT-007: Hero 섹션 CTA 버튼
11. CT-008: 접근성 - 이미지 alt 텍스트
12. CT-009: 접근성 - 버튼 aria-label
13. CT-010: 외부 링크 보안 속성
14. CT-011: 프로젝트 상세 섹션 렌더링
15. IT-001: 프로젝트 목록 데이터 로딩
16. IT-002: 프로젝트 필터링 + URL 동기화
17. IT-003: 프로젝트 상세 동적 라우팅
18. IT-004: 존재하지 않는 프로젝트 404 처리
19. IT-006: Featured 프로젝트 홈 표시
20. IT-007: 빌드 시 데이터 검증
21. E2E-001: 채용담당자 플로우
22. E2E-002: 실무 면접관 플로우
23. E2E-003: 직접 URL 접근
24. E2E-004: 404 페이지 동작
25. E2E-005: 반응형 디자인 - 모바일
26. E2E-007: 프로젝트 필터 동작
27. E2E-009: 키보드 네비게이션

### P1 (중요, 첫 릴리스 전 완료)

1. UT-002: Project URL 형식 검증
2. UT-005: 프로젝트 정렬 유틸
3. UT-008: Career 정렬 최신순
4. CT-002: 모바일 메뉴 토글
5. CT-004: ProjectCard 이미지 fallback
6. CT-012: 외부 링크 없으면 버튼 미렌더링
7. IT-005: Career 목록 최신순 정렬
8. E2E-006: 반응형 디자인 - 데스크톱
9. E2E-008: 외부 링크 동작
10. E2E-010: 이력서 다운로드
11. E2E-011: 브라우저 히스토리 네비게이션
12. E2E-012: prefers-reduced-motion 지원

---

## 미해결 테스트 리스크

| ID | 리스크 | 영향 | 완화 방안 |
| --- | --- | --- | --- |
| TR-001 | 이미지 로딩 실패 시 레이아웃 깨짐 | 사용자 경험 저하 | CT-004로 fallback 검증 |
| TR-002 | 긴 텍스트 오버플로우 | 모바일 레이아웃 깨짐 | E2E-005 반응형 테스트 |
| TR-003 | 브라우저 호환성 | 일부 브라우저에서 동작 이상 | Playwright 크로스 브라우저 테스트 |
| TR-004 | 느린 네트워크에서 초기 로딩 | 사용자 이탈 | Lighthouse 성능 테스트 추가 예정 |
