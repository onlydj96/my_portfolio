# 이미지 에셋 가이드

## 목적

포트폴리오 웹사이트에서 사용되는 이미지 에셋의 경로, 용도, 상태를 정리한 문서입니다.

## 현재 상태

### ✅ 존재하는 이미지

```
public/images/
├── profile.jpg                              # 프로필 사진 (존재)
├── profile.png                              # 프로필 사진 (존재)
└── projects/
    ├── notion-workspace/
    │   └── thumbnail.png                    # Notion 프로젝트 썸네일 (존재)
    └── spacehong/
        └── thumbnail.png                    # Spacehong 프로젝트 썸네일 (존재)
```

### ❌ 누락된 이미지

#### 프로필 이미지 (Profile)
```
/images/profile-mobile.jpg                   # 모바일용 프로필 이미지
/images/og-image.jpg                         # Open Graph 이미지 (SNS 공유용)
```

#### 프로젝트 이미지 (Projects)
```
/images/projects/crowd-monitoring/
  └── architecture.png                       # 밀집인파 관제 아키텍처 다이어그램
```

#### 소스 이미지 (Sources)
```
/source/notion/
  ├── notion_dashboard.png                   # Notion 대시보드 화면
  └── notion_schedule.png                    # Notion 일정 관리 화면

/source/spacehong/
  └── spacehong_homepage.png                 # Spacehong 홈페이지 화면

/source/profile/
  └── profile_image.png                      # 포트폴리오 프로필 이미지
```

#### 이력서 (Resume)
```
/resume/resume.pdf                           # 이력서 PDF 파일
```

## 이미지 요구사항

### 프로필 이미지
- **profile.png**: 1200x1200px, PNG, 메인 프로필 이미지
- **profile-mobile.jpg**: 800x800px, JPG, 모바일 최적화
- **og-image.jpg**: 1200x630px, JPG, SNS 공유용 (Open Graph)

### 프로젝트 썸네일
- **크기**: 1200x800px (3:2 비율)
- **포맷**: PNG 또는 JPG
- **용량**: 500KB 이하 권장
- **내용**: 프로젝트를 대표하는 UI 화면 또는 결과물

### 프로젝트 아키텍처 다이어그램
- **크기**: 1600x1200px 이상
- **포맷**: PNG (투명 배경 가능)
- **내용**: 시스템 구조, 데이터 흐름, 기술 스택

### 소스 이미지
- **크기**: 1920x1080px 또는 원본 비율 유지
- **포맷**: PNG
- **용량**: 1MB 이하 권장
- **내용**: 실제 작업물 스크린샷

## 이미지 준비 방법

### 1. 프로필 이미지 준비
```bash
# 디렉토리 확인
ls public/images/

# 필요한 이미지
# - profile.png (이미 존재)
# - profile-mobile.jpg
# - og-image.jpg
```

### 2. 프로젝트 이미지 준비
```bash
# 프로젝트별 디렉토리 생성
mkdir -p public/images/projects/crowd-monitoring

# 아키텍처 다이어그램 추가
# public/images/projects/crowd-monitoring/architecture.png
```

### 3. 소스 이미지 준비
```bash
# 소스 이미지 디렉토리 생성
mkdir -p public/source/notion
mkdir -p public/source/spacehong
mkdir -p public/source/profile

# 스크린샷 추가
# public/source/notion/notion_dashboard.png
# public/source/notion/notion_schedule.png
# public/source/spacehong/spacehong_homepage.png
# public/source/profile/profile_image.png
```

### 4. 이력서 준비
```bash
# 이력서 디렉토리 생성
mkdir -p public/resume

# 이력서 PDF 추가
# public/resume/resume.pdf
```

## 이미지 최적화 권장사항

### 압축 도구
- **ImageOptim** (Mac)
- **TinyPNG** (Web)
- **Sharp** (Node.js)

### Next.js Image 컴포넌트 사용
Next.js의 `next/image` 컴포넌트는 자동으로 이미지를 최적화합니다:
- WebP/AVIF 포맷 자동 변환
- Lazy loading
- 반응형 크기 조정

### 예시
```tsx
import Image from 'next/image';

<Image
  src="/images/profile.png"
  alt="Profile"
  width={400}
  height={400}
  priority
/>
```

## 체크리스트

- [x] profile.png
- [x] projects/notion-workspace/thumbnail.png
- [x] projects/spacehong/thumbnail.png
- [ ] profile-mobile.jpg
- [ ] og-image.jpg
- [ ] projects/crowd-monitoring/architecture.png
- [ ] source/notion/notion_dashboard.png
- [ ] source/notion/notion_schedule.png
- [ ] source/spacehong/spacehong_homepage.png
- [ ] source/profile/profile_image.png
- [ ] resume/resume.pdf

## 다음 단계

1. 누락된 이미지 준비
2. 이미지 최적화 (압축, 포맷 변환)
3. 이미지 추가 후 개발 서버에서 확인
4. 반응형 테스트 (모바일, 태블릿, 데스크톱)
5. Lighthouse 성능 점수 확인
