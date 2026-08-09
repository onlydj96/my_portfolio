Luke Hwangbo Career Portfolio 제품/기술 명세

문서 목적

본 문서는 **Luke Hwangbo(황보동준)**의 AX Engineer, AI Engineer, Development PM 경력을 소개하는 웹 포트폴리오의 제품 및 기술 명세다.

포트폴리오는 구인·구직 플랫폼에 URL 형태로 등록하여 채용담당자와 실무 면접관에게 전달한다. 일반 검색을 통한 대규모 공개를 주목적으로 하지 않으며, 링크를 전달받은 사용자가 별도의 로그인 없이 확인할 수 있는 읽기 전용 웹사이트로 구현한다.

제품 개요

1. 제품명

Luke Hwangbo Career Portfolio

영문명: Luke Hwangbo

한국명: 황보동준

주요 포지션:

AX Engineer

AI Engineer

Development PM

2. 제품 목적

본 제품은 AI 개발, 업무 프로세스 개선, AI Agent 도입, 개발 프로젝트 관리 경험을 구조적으로 보여주는 웹 기반 커리어 포트폴리오다.

단순한 이력과 기술 스택 나열이 아니라 각 프로젝트를 다음 관점으로 설명한다.

어떤 문제를 해결하려 했는가

본인이 담당한 역할은 무엇인가

어떤 기술과 프로세스를 적용했는가

어떤 기술적·업무적 의사결정을 내렸는가

프로젝트를 통해 어떤 결과를 만들었는가

3. 핵심 메시지

AI 기술과 개발 프로세스를 실제 조직과 서비스에 적용하는 AX Engineer이자 Development PM

4. 핵심 역량

역량 영역

주요 내용

AX Engineering

AI Agent 도입, 업무 자동화, AI 활용 프로세스 설계

AI Development

NLP, Intention Classification, Computer Vision, Crowd Density Estimation

Development PM

요구사항 정의, 일정 관리, 리소스 관리, 고객사 커뮤니케이션

Workflow Design

Notion 기반 업무 데이터베이스 및 전사 협업 체계 설계

Development Infrastructure

NAS, GitLab, 코드 및 문서 관리 체계 구축

Edge AI

NVIDIA Jetson, ODROID, DEEPX 기반 AI 솔루션 개발

Web Service

React 기반 웹서비스 개발 및 유지보수

5. 기술 구성

본 제품은 React 기반으로 구현한다. 포트폴리오별 URL, 정적 페이지 생성, 이미지 최적화 및 배포 편의성을 고려하여 Next.js 사용을 권장한다.

구분

권장 기술

Framework

Next.js

UI Library

React

Language

TypeScript

Styling

Tailwind CSS

Animation

Framer Motion

Content

TypeScript Object, JSON 또는 MDX

Validation

Zod

Deployment

Vercel

Version Control

GitHub 또는 GitLab

Analytics

Vercel Analytics 또는 Google Analytics

6. 배포 방식

포트폴리오는 Vercel 등에 배포하고 구인·구직 플랫폼에 URL을 등록한다.

예시:

https://luke-hwangbo-portfolio.vercel.app

검색엔진 노출이 필요하지 않은 경우 noindex를 적용한다.

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

단, noindex는 검색 노출을 제한하는 설정일 뿐 접근 권한을 통제하지는 않는다. 링크를 알고 있는 사용자는 사이트를 열람할 수 있으므로 회사 기밀과 개인정보는 포함하지 않는다.

7. 프로젝트 리소스 폴더

프로젝트에서 사용하는 프로필 사진, 프로젝트 대표 이미지, 아키텍처 이미지 및 이력서 등의 원본 자료는 프로젝트 루트의 /source 폴더를 우선 참고한다.

예시 구조:

/source
├── profile_image.jpg
├── profile_image_mobile.jpg
├── resume.pdf
├── og_image.jpg
├── company_logo/
│   ├── posicube.png
│   └── kiot.png
└── projects/
    ├── notion/
    │   ├── thumbnail.jpg
    │   └── architecture.png
    ├── ai-agent/
    │   ├── thumbnail.jpg
    │   └── workflow.png
    ├── crowd-monitoring/
    │   ├── thumbnail.jpg
    │   ├── architecture.png
    │   └── result.jpg
    ├── intention-classification/
    │   ├── thumbnail.jpg
    │   └── model-flow.png
    └── spacehong/
        ├── thumbnail.jpg
        └── screenshot.jpg

개발 시 다음 규칙을 따른다.

프로필 이미지는 /source/profile_image.jpg를 우선 참고한다.

모바일 전용 프로필 이미지가 존재하면 /source/profile_image_mobile.jpg를 사용한다.

프로젝트별 이미지는 /source/projects/{project-slug}/ 경로를 확인한다.

이미지가 존재하지 않을 경우 임의의 외부 이미지를 사용하지 않는다.

이미지가 없으면 텍스트와 기본 Placeholder로 UI를 구성한다.

최종 웹 빌드에 사용하는 이미지는 /public/images로 복사하거나 빌드 단계에서 참조 가능한 위치로 이동한다.

/source에 있는 회사 내부 문서, 원본 데이터 및 비공개 자료는 공개 자산으로 배포하지 않는다.

사용자와 역할

1. 채용담당자

지원자의 전체 경력과 직무 적합성을 빠르게 확인한다.

주요 관심 정보:

지원 포지션

전체 경력 요약

핵심 역량

대표 프로젝트

프로젝트별 담당 역할

주요 성과

이력서 및 연락처

2. 실무 면접관

프로젝트의 기술적 깊이와 지원자의 실제 기여도를 확인한다.

주요 관심 정보:

문제 정의

기술 선택 이유

시스템 아키텍처

AI 모델 및 기술 스택

담당 범위

트러블슈팅

성능 개선 과정

기술적 의사결정

3. 개발 조직 리더 및 PM

지원자가 개발과 비즈니스 사이에서 프로젝트를 조율할 수 있는지 확인한다.

주요 관심 정보:

요구사항 정의

일정 및 리소스 관리

개발 프로세스 개선

협업 도구 구축

AI Agent 도입 경험

조직 내 AI 활용 체계 설계

고객사 및 이해관계자 커뮤니케이션

4. 사이트 소유자

Luke Hwangbo가 프로젝트와 경력을 추가·수정하고 사이트를 재배포한다.

초기 버전에서는 별도의 관리자 페이지를 제공하지 않는다. TypeScript, JSON 또는 MDX 콘텐츠를 수정한 후 Git 저장소에 Push하면 자동 배포되도록 구성한다.

5. 권한 구분

역할

권한

방문자

공개된 경력과 프로젝트 조회

사이트 소유자

콘텐츠 추가, 수정, 삭제 및 배포

관리자

초기 버전에서는 별도로 두지 않음

회원가입과 로그인은 제공하지 않는다.

핵심 기능과 사용자 흐름

1. 홈

첫 화면에서 10초 안에 지원자의 이름, 직무 방향과 핵심 역량을 이해할 수 있어야 한다.

표시 정보:

Luke Hwangbo

황보동준

AX Engineer · AI Engineer · Development PM

한 줄 소개

핵심 역량

대표 프로젝트

Career 및 Projects 이동 버튼

이력서와 연락처

추천 소개 문구:

AI 기술과 개발 프로세스를 실제 조직과 서비스에 적용하는 AX Engineer이자 Development PM입니다.

2. About

개인적인 성장사를 길게 설명하지 않고 현재 직무 역량이 형성된 커리어 흐름을 보여준다.

NLP Engineer
→ Computer Vision & Edge AI Engineer
→ AI Solution Developer
→ Development PM
→ Workflow Automation
→ AI Agent & AX Engineer

추천 설명:

자연어처리 모델 개발자로 커리어를 시작하여 Computer Vision과 Edge AI 솔루션 개발로 영역을 확장했습니다. 이후 프로젝트 기획, 요구사항 정의, 일정 관리와 고객사 커뮤니케이션을 담당하며 개발 PM 역할을 수행했습니다. 현재는 AI Agent와 업무 자동화를 실제 조직의 개발 및 운영 프로세스에 적용하는 AX Engineer로 역량을 확장하고 있습니다.

3. Career

회사별 경력과 역할을 최신순으로 표시한다.

각 경력은 다음 정보를 포함한다.

회사명

직무

근무 기간

역할 요약

주요 업무

대표 프로젝트

핵심 성과

기술 스택

4. Projects

프로젝트 목록을 카드 형태로 표시하고 분야별 필터를 제공한다.

필터:

All

AX Engineering

Project Management

NLP

Computer Vision

Edge AI

Web Service

5. 프로젝트 상세

모든 프로젝트는 동일한 정보 구조를 사용한다.

프로젝트 개요

문제 정의

담당 역할

해결 접근

시스템 또는 업무 아키텍처

핵심 구현 내용

기술적 의사결정

결과 및 기여

회고

관련 이미지 및 외부 링크

6. Contact

다음 연락 수단을 제공한다.

이메일

GitHub 또는 GitLab 공개 프로필

LinkedIn

이력서

외부 서비스 링크

개인 전화번호는 공개하지 않는 것을 기본 원칙으로 한다.

7. 사용자 흐름

채용담당자

구인·구직 사이트에서 링크 클릭
→ 홈에서 포지션과 핵심 역량 확인
→ 대표 프로젝트 확인
→ Career에서 경력 검토
→ 관심 프로젝트 상세 확인
→ 이력서 또는 연락처 확인

실무 면접관

사이트 접속
→ Projects 이동
→ 관심 기술 분야 필터 선택
→ 프로젝트 상세 진입
→ 문제, 역할, 기술, 결과 확인
→ 아키텍처 및 기술적 의사결정 검토

프로젝트 링크 직접 공유

/projects/notion-workspace
/projects/ai-agent-adoption
/projects/crowd-monitoring
/projects/intention-classification
/projects/spacehong

포트폴리오 콘텐츠

1. Notion 기반 업무 협업 및 자동화 체계 구축

프로젝트 개요

개발 일정, 프로젝트 문서, 업무 요청 및 전사 운영 정보를 구조화된 데이터로 관리할 수 있도록 Notion 기반 협업 플랫폼을 설계하고 운영했다.

주요 역할

전사 업무 프로세스 분석

프로젝트, 업무, 담당자, 일정 및 문서 데이터베이스 설계

Notion Database 간 Relation 및 Rollup 구조 설계

개발 일정 및 업무 진행 상태 관리 체계 구축

프로젝트 템플릿 표준화

Notion API 기반 반복 업무 자동화

구성원 사용 가이드와 운영 정책 수립

전사 협업 플랫폼 유지보수 및 개선

핵심 메시지

Notion을 단순 문서 작성 도구가 아닌 조직의 업무 데이터베이스로 설계하고, Notion API를 활용해 반복 업무와 정보 연동을 자동화했습니다.

2. AI Agent 도입 및 개발 프로세스 개선

프로젝트 개요

Claude Code, Codex 등 AI Agent와 다양한 AI 도구를 회사의 개발 및 문서 업무에 도입하고, 실제 업무에서 안정적으로 활용하기 위한 컨텍스트와 검증 체계를 설계했다.

주요 역할

AI Agent 및 생성형 AI 도구 조사와 도입

개발 업무별 AI 활용 방식 정의

Prompt Engineering 적용

프로젝트 문맥과 코드베이스를 제공하기 위한 Context Engineering 적용

도구, 규칙, 권한, 테스트와 검증 절차를 포함한 Harness Engineering 적용

AI 생성 코드와 문서의 리뷰 체계 설계

개발팀 활용 가이드 제공

반복 개발 및 문서 업무 자동화

역량 발전 과정

Prompt Engineering
→ Context Engineering
→ Agent Workflow Design
→ Harness Engineering

핵심 메시지

AI Agent가 일회성 코드 생성 도구에 머무르지 않도록 프로젝트 컨텍스트, 작업 규칙, 실행 도구와 검증 절차를 구조화하여 개발 프로세스에 적용했습니다.

3. NAS 및 GitLab 기반 개발 자산 관리 체계 구축

프로젝트 개요

분산되어 있던 코드, 모델, 데이터, 개발 문서 및 회사 자료를 체계적으로 관리하기 위해 사내 NAS와 GitLab을 운영하고 관리 기준을 수립했다.

주요 역할

GitLab 프로젝트 및 Repository 구조 관리

코드 버전 관리 체계 정립

Branch 및 Merge Request 운영 기준 정리

프로젝트와 조직별 접근 권한 관리

NAS 폴더 및 문서 분류 구조 설계

모델 가중치, 데이터셋 및 배포 산출물 관리

개발 코드와 운영 문서의 보관 기준 수립

프로젝트 생성, 운영, 종료 및 인수인계 체계 정리

백업 및 개발 자산 관리 프로세스 운영

핵심 메시지

개발팀의 코드와 조직 문서가 지속적으로 축적되고 추적·인수인계될 수 있도록 NAS와 GitLab 기반의 개발 자산 관리 체계를 구축했습니다.

4. BERT 기반 Intention Classification 모델 개발

프로젝트 개요

포지큐브에서 자연어 사용자 발화를 분류하는 Intention Classification 모델 개발을 담당했다.

주요 역할

BERT 기반 의도 분류 모델 개발

도메인 데이터 수집, 정제 및 전처리

도메인 데이터 기반 추가 사전학습

Domain Adaptation 적용

네트워크 구조 변경 및 실험

하이퍼파라미터 튜닝

성능 평가 및 오류 분석

기존 외부 기준 모델과 성능 비교

서비스 적용을 위한 모델 교체 검토 지원

성과 표현

BERT 기반 Intention Classification 모델을 개발하고 도메인 적응 학습과 네트워크 구조 개선을 통해 기존 외부 기준 모델보다 향상된 성능을 확보했습니다. 이후 서비스 적용을 위한 자사 모델 전환 검토 단계까지 프로젝트를 진행했습니다.

정확한 성능 수치가 존재할 경우에만 다음 형식으로 표시한다.

Accuracy: 기존 대비 ○%p 향상
F1-score: 기존 대비 ○%p 향상

5. 밀집인파 관제 및 공간 기반 군중 밀집도 분석

프로젝트 개요

KIOT에서 Computer Vision 기반 밀집인파 관제 시스템을 개발하고, 카메라 화각과 원근감으로 인해 영상 내 위치별 밀집도 정확도가 달라지는 문제를 개선했다.

주요 역할

Crowd Density Estimation 모델 개발

데이터셋 구성 및 Annotation 기준 수립

카메라 영상 기반 군중 수와 밀집도 분석

화각과 원근감으로 발생하는 측정 편차 분석

Camera Calibration 및 공간 정보 보정

3D Gaussian Splatting 기반 공간 표현 및 보정 방식 검토·구현

실제 공간 단위 밀집도 산정 로직 개발

Edge AI 환경의 모델 최적화

관제 서버 연동

현장 테스트 및 성능 검증

프로젝트 요구사항, 개발 일정 및 고객사 커뮤니케이션 관리

처리 흐름

CCTV 영상
→ Crowd Density Estimation
→ Density Map 생성
→ 카메라 원근 및 공간 정보 보정
→ 실제 공간 단위 밀집도 추정
→ 위험 구역 판단
→ 관제 화면과 알림 시스템 연동

핵심 메시지

단순 인원 계수를 넘어 카메라의 원근감과 공간적 제약으로 발생하는 오차를 분석하고, 3차원 공간 정보를 활용해 실제 공간 기준의 밀집도를 산출하는 방향으로 시스템을 고도화했습니다.

6. Edge AI 솔루션 개발

프로젝트 개요

다양한 현장 환경에서 AI 모델을 독립적으로 실행할 수 있도록 NVIDIA Jetson, ODROID 및 DEEPX 장비 기반의 영상 분석 솔루션을 개발했다.

활용 장비

NVIDIA Jetson Xavier NX

NVIDIA Jetson Orin Nano

ODROID

DEEPX NPU 기반 장비

주요 역할

장비별 AI 모델 실행 환경 구성

영상 입력 및 실시간 추론 파이프라인 개발

장치 성능에 맞춘 모델 변환과 최적화

Edge Device와 중앙 서버 간 데이터 연동

추론 결과, 이미지 및 장비 상태 전송

현장 설치와 장애 대응

장비별 호환성 및 성능 검증

아키텍처

Camera
→ Edge Device
→ AI Inference
→ Count / Event / Snapshot / Health
→ Central API Server
→ Database
→ Monitoring Dashboard

7. Spacehong 웹서비스 개발 및 유지보수

프로젝트 개요

공간대여 서비스 Spacehong 웹사이트의 개발과 유지보수를 지원하고 있다.

주요 역할

실제로 담당한 항목만 화면에 표시한다.

웹 페이지 개발

반응형 UI 구현

예약 또는 문의 기능 개선

운영 중 오류 수정

신규 요구사항 반영

코드 리팩터링

배포 및 유지보수

운영 이슈 대응

외부 링크

프로젝트 데이터의 externalUrl에 실제 Spacehong URL을 등록한다.

<a
  href={project.externalUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  서비스 바로가기
</a>

핵심 메시지

운영 중인 실제 웹서비스의 기능 개선과 유지보수를 지원하며, 사용자 요청과 운영 이슈를 반영한 지속적인 서비스 개선 경험을 쌓고 있습니다.

화면과 UI/UX

1. 디자인 원칙

첫 화면에서 10초 안에 이름과 지원 직무가 이해되어야 한다.

프로젝트에서 본인이 담당한 역할을 즉시 확인할 수 있어야 한다.

기술 나열보다 문제, 행동, 결과의 연결을 우선한다.

채용담당자가 필요한 정보에 3회 이내 클릭으로 접근할 수 있어야 한다.

데스크톱과 모바일 모두에서 읽기 쉬워야 한다.

애니메이션은 콘텐츠 열람을 방해하지 않아야 한다.

2. 공통 헤더

Luke Hwangbo

About | Career | Projects | Contact

3. 홈 화면

Hero

Luke Hwangbo
황보동준

AX Engineer · AI Engineer · Development PM

AI 기술과 개발 프로세스를
실제 조직과 서비스에 적용합니다.

프로필 사진은 /source/profile_image.jpg를 참고하여 구성한다.

CTA:

View Projects

View Career

Contact

Resume

Core Competencies

AX Engineering
AI Agent · Workflow Automation · Process Design

AI Development
NLP · Computer Vision · Edge AI

Development PM
Requirements · Schedule · Communication

Featured Projects

메인 화면에는 최대 4개의 대표 프로젝트만 표시한다.

Notion 업무 협업 및 자동화

AI Agent 도입 및 Harness Engineering

밀집인파 관제 시스템

BERT 기반 Intention Classification

4. 프로젝트 카드

각 카드에는 다음 정보를 표시한다.

프로젝트 대표 이미지

카테고리

프로젝트명

한 줄 문제 정의

담당 역할

핵심 기술 태그

상세보기 버튼

프로젝트 이미지는 /source/projects/{project-slug}/thumbnail.jpg를 우선 참고한다.

5. 프로젝트 상세 화면

프로젝트 제목
한 줄 요약
소속 · 역할 · 기술

프로젝트 개요
문제 정의
담당 역할
해결 접근
시스템 아키텍처
핵심 구현
기술적 의사결정
성과 및 기여
회고

6. 반응형 기준

화면

기준

Mobile

360px 이상

Tablet

768px 이상

Desktop

1024px 이상

Wide Desktop

최대 콘텐츠 폭 1200px 내외

7. 애니메이션

허용:

섹션 진입 시 가벼운 Fade-in

카드 Hover

프로젝트 필터 전환

페이지 전환

지양:

긴 로딩 애니메이션

반복 타이핑 효과

과도한 Parallax

콘텐츠보다 강한 3D 효과

자동 재생 사운드와 영상

8. 접근성

모든 의미 있는 이미지에 alt를 제공한다.

키보드로 메뉴와 버튼을 조작할 수 있어야 한다.

아이콘 단독 버튼에 aria-label을 제공한다.

텍스트와 배경의 명암비를 확보한다.

prefers-reduced-motion을 지원한다.

링크와 버튼을 시각적으로 구분한다.

데이터와 도메인 규칙

1. Career 데이터 구조

interface Career {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  projectIds: string[];
}

2. Project 데이터 구조

type ProjectCategory =
  | "AX"
  | "PROJECT_MANAGEMENT"
  | "NLP"
  | "COMPUTER_VISION"
  | "EDGE_AI"
  | "WEB";

interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  categories: ProjectCategory[];
  role: string[];
  company?: string;
  problem: string;
  solution: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  architectureImage?: string;
  thumbnailImage?: string;
  gallery?: string[];
  externalUrl?: string;
  repositoryUrl?: string;
  isFeatured: boolean;
  displayOrder: number;
  visibility: "PUBLIC" | "SUMMARY_ONLY" | "HIDDEN";
}

3. Skill 데이터 구조

interface Skill {
  id: string;
  name: string;
  category:
    | "AI"
    | "AX"
    | "PM"
    | "FRONTEND"
    | "INFRASTRUCTURE";
  description?: string;
  relatedProjectIds: string[];
}

4. 도메인 규칙

담당 역할 필수

모든 프로젝트에는 본인의 담당 역할을 명시한다.

잘못된 예:

밀집인파 관제 시스템을 구축했습니다.

권장 예:

Crowd Density Estimation 모델 개발과 Edge Device 연동을 담당하고, 개발 PM으로서 요구사항과 현장 일정을 관리했습니다.

검증되지 않은 수치 사용 금지

근거가 있을 때만 다음 정보를 표시한다.

정확도 향상률

업무 시간 감소율

비용 절감률

사용자 수

매출

처리 속도 개선율

기술 숙련도 퍼센트 금지

Python 95%
React 80%
PM 90%

위와 같은 표현 대신 프로젝트와 역할을 통해 경험을 증명한다.

공개 범위

다음 정보는 공개하지 않는다.

고객 및 임직원 개인정보

내부 IP 주소

서버 계정과 비밀번호

API Key와 Token

비공개 저장소 URL

계약 금액

회사 내부 문서 원문

공개 허가를 받지 않은 소스코드

원본 학습 데이터

고객사와의 비공개 커뮤니케이션

외부 링크

https 링크만 허용한다.

새 탭에서 연다.

rel="noopener noreferrer"를 적용한다.

URL이 없으면 버튼을 렌더링하지 않는다.

운영 서비스와 본인의 담당 범위를 명확히 구분한다.

API 명세

1. 초기 버전

초기 버전은 정적 포트폴리오로 구현하므로 필수 백엔드 API는 없다.

콘텐츠는 다음 형식 중 하나로 관리한다.

TypeScript

JSON

Markdown

MDX

2. 선택적 Contact API

문의 폼을 제공할 경우에만 API를 추가한다.

POST /api/contact

Request:

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
}

website는 일반 사용자에게 보이지 않는 Honeypot 필드로 사용할 수 있다.

Response:

interface ContactResponse {
  success: boolean;
  message: string;
}

상태 코드

의미

200

전송 성공

400

입력값 오류

429

요청 횟수 초과

500

서버 또는 메일 전송 오류

초기 버전에서는 문의 폼보다 이메일 링크 사용을 우선한다.

<a href="mailto:your-email@example.com">Contact</a>

상태 관리와 캐시

1. 상태 관리 원칙

정적 포트폴리오에는 Redux와 같은 복잡한 전역 상태 관리 도구를 사용하지 않는다.

로컬 상태

useState로 관리한다.

모바일 메뉴

프로젝트 필터

이미지 모달

복사 완료 메시지

문의 폼 입력값

URL 상태

프로젝트 필터는 Query Parameter로 유지할 수 있다.

/projects?category=AX
/projects?category=NLP

전역 상태

초기 버전에서는 사용하지 않는다.

다국어, 테마 또는 관리자 기능이 추가될 경우 React Context 또는 Zustand 도입을 검토한다.

2. 캐시 전략

정적 자산

Cache-Control: public, max-age=31536000, immutable

HTML

재배포 시 최신 콘텐츠가 반영되도록 장기 고정 캐시를 적용하지 않는다.

이미지

WebP 또는 AVIF 사용

반응형 이미지 제공

화면 밖 이미지는 Lazy Loading

Hero 프로필 이미지는 우선 로딩

이미지 크기를 미리 지정하여 Layout Shift 방지

3. 콘텐츠 업데이트 흐름

/source 및 콘텐츠 확인
→ 콘텐츠 파일 수정
→ 로컬 빌드 및 검증
→ Git Commit
→ 원격 저장소 Push
→ Vercel 자동 배포
→ 배포 URL 확인

권한과 보안

1. 접근 정책

초기 버전은 로그인 없는 읽기 전용 사이트로 운영한다.

구인·구직 사이트에 링크를 등록하는 방식이므로 접근 편의성을 위해 별도의 비밀번호를 사용하지 않는 것을 기본으로 한다.

2. 검색엔진 노출 제어

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

필요하면 robots.txt도 추가한다.

User-agent: *
Disallow: /

3. 개인정보 보호

공개 가능:

Luke Hwangbo

황보동준

지원 직무

업무용 이메일

공개 프로필

공개 가능한 경력과 프로젝트

공개 지양:

생년월일

상세 주소

주민등록번호

운전면허번호

개인 전화번호

가족 관계

회사 내부 계정

고객 개인정보

4. 환경변수

CONTACT_EMAIL=
EMAIL_API_KEY=
NEXT_PUBLIC_ANALYTICS_ID=

API Key와 민감 정보는 저장소에 Commit하지 않는다.

5. /source 보안 규칙

/source 폴더 전체를 정적 배포 경로로 노출하지 않는다.

웹에서 사용할 수 있도록 검토된 파일만 /public로 복사한다.

원본 이력서에 전화번호와 주소가 포함되어 있다면 공개 버전을 별도로 만든다.

회사 로고와 프로젝트 이미지는 공개 권한을 확인한다.

스크린샷에 사용자 이름, 이메일, IP 주소, 고객 정보가 포함되어 있는지 검토한다.

이미지의 EXIF 위치 정보와 불필요한 메타데이터를 제거한다.

오류와 예외

1. 존재하지 않는 프로젝트 URL

/projects/unknown-project

처리:

404 페이지 표시

프로젝트 목록 이동 버튼 제공

빈 화면을 표시하지 않음

2. 이미지 로딩 실패

기본 Placeholder 표시

이미지 영역 크기 유지

레이아웃 이동 방지

의미 있는 alt 제공

/source 파일이 없더라도 빌드가 중단되지 않도록 처리

3. 외부 링크 오류

URL이 없으면 버튼을 표시하지 않는다.

배포 전 외부 링크 유효성을 확인한다.

서비스가 종료되면 프로젝트 설명은 유지하고 링크만 제거한다.

4. JavaScript 오류

페이지 단위 Error Boundary 적용

새로고침 및 홈 이동 버튼 제공

특정 프로젝트 오류가 전체 사이트를 중단시키지 않도록 구성

5. 콘텐츠 데이터 누락

필수값:

title
slug
summary
role
problem
solution
techStack

Zod를 이용해 빌드 단계에서 검증한다.

import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  role: z.array(z.string()).min(1),
  problem: z.string().min(1),
  solution: z.string().min(1),
  techStack: z.array(z.string()).min(1),
  externalUrl: z.string().url().optional(),
});

6. 느린 네트워크

텍스트를 이미지보다 먼저 표시한다.

대용량 영상 자동 재생을 금지한다.

프로젝트 이미지는 Lazy Loading한다.

저속 네트워크에서도 이름, 직무와 핵심 경력이 우선 표시되어야 한다.

7. 모바일 예외

긴 기술명이 화면 밖으로 넘치지 않아야 한다.

표는 가로 스크롤 또는 카드 형태로 전환한다.

버튼의 최소 터치 영역을 확보한다.

모바일 메뉴가 열린 상태에서 스크롤과 포커스를 적절히 제어한다.

반드시 막아야 할 회귀

1. 라우팅

홈, About, Career, Projects, Contact가 정상적으로 열린다.

프로젝트 카드 클릭 시 올바른 상세 페이지로 이동한다.

직접 URL을 입력해도 프로젝트 상세 페이지가 열린다.

존재하지 않는 Slug는 404로 처리된다.

새로고침 후에도 페이지가 정상 표시된다.

브라우저 이전 및 다음 탐색이 정상 작동한다.

2. 프로필 및 콘텐츠

Luke Hwangbo가 올바르게 표시된다.

황보동준이 올바르게 표시된다.

직무명이 AX Engineer, AI Engineer, Development PM으로 일관된다.

/source/profile_image.jpg가 존재하면 프로필 영역에 올바르게 반영된다.

프로필 이미지가 없으면 Placeholder가 표시된다.

모든 프로젝트에 본인의 역할이 표시된다.

팀 성과와 개인 기여가 구분된다.

비공개 프로젝트는 목록과 상세 경로에 노출되지 않는다.

필수 데이터가 누락되면 빌드 검증에서 감지된다.

3. UI

모바일에서 불필요한 가로 스크롤이 발생하지 않는다.

고정 헤더가 본문 제목을 가리지 않는다.

긴 프로젝트명과 기술 태그가 레이아웃을 벗어나지 않는다.

이미지 로딩 전후 큰 Layout Shift가 발생하지 않는다.

프로젝트 카드가 다양한 콘텐츠 길이에서도 깨지지 않는다.

Hover가 없는 모바일에서도 모든 기능을 사용할 수 있다.

4. 필터

All 선택 시 모든 공개 프로젝트가 표시된다.

AX 선택 시 AX 관련 프로젝트만 표시된다.

NLP 선택 시 Intention Classification 프로젝트가 표시된다.

필터 결과가 없으면 안내 문구를 표시한다.

Query Parameter로 접근하면 해당 필터가 활성화된다.

새로고침 후에도 URL 기반 필터가 유지된다.

5. 링크

이메일 버튼이 올바른 주소로 연결된다.

이력서 링크가 정상적으로 열린다.

Spacehong 링크가 실제 서비스로 연결된다.

외부 링크는 새 탭에서 열린다.

외부 링크에 noopener noreferrer가 적용된다.

URL이 없는 프로젝트에는 링크 버튼이 표시되지 않는다.

내부 링크는 불필요하게 새 탭을 열지 않는다.

6. 접근성

Tab 키로 메뉴와 버튼에 접근할 수 있다.

현재 포커스 위치가 시각적으로 표시된다.

모든 의미 있는 이미지에 대체 텍스트가 있다.

아이콘 전용 버튼에 접근 가능한 이름이 있다.

모달이 열리면 포커스가 모달 안에 유지된다.

ESC 키로 모달을 닫을 수 있다.

prefers-reduced-motion 설정에서 불필요한 애니메이션이 비활성화된다.

7. 성능

초기 화면에 불필요한 대용량 JavaScript가 포함되지 않는다.

원본 고해상도 이미지가 그대로 전송되지 않는다.

화면 밖 이미지는 Lazy Loading된다.

영상은 사용자가 재생하기 전까지 다운로드를 최소화한다.

모바일 환경에서도 이름, 직무와 핵심 설명이 빠르게 표시된다.

8. 보안

소스코드에 API Key가 포함되지 않는다.

회사 내부 IP와 서버 계정이 노출되지 않는다.

비공개 저장소 URL이 표시되지 않는다.

고객과 임직원 개인정보가 노출되지 않는다.

/source 폴더가 그대로 웹에 공개되지 않는다.

공개 이미지와 스크린샷에 민감 정보가 포함되지 않는다.

문의 입력값이 그대로 HTML로 렌더링되지 않는다.

noindex 설정이 배포 이후에도 유지된다.

9. 링크 미리보기

페이지 제목에 이름과 직무가 포함된다.

Open Graph 제목과 설명이 표시된다.

/source/og_image.jpg가 존재하면 검토 후 공유 이미지로 사용한다.

프로젝트별 제목과 설명이 다르게 표시된다.

noindex 설정이 링크 미리보기 생성을 방해하지 않는다.

예시:

export const metadata = {
  title: "Luke Hwangbo | AX Engineer & Development PM",
  description:
    "AI 개발, 업무 자동화, AI Agent 도입 및 개발 프로젝트 관리 경험을 소개하는 황보동준의 커리어 포트폴리오입니다.",
  robots: {
    index: false,
    follow: false,
  },
};

권장 프로젝트 구조

portfolio/
├── source/
│   ├── profile_image.jpg
│   ├── profile_image_mobile.jpg
│   ├── resume.pdf
│   ├── og_image.jpg
│   └── projects/
│       ├── notion/
│       ├── ai-agent/
│       ├── crowd-monitoring/
│       ├── intention-classification/
│       └── spacehong/
├── public/
│   ├── images/
│   └── resume/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── career/
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── career/
│   │   ├── project/
│   │   └── common/
│   ├── content/
│   │   ├── profile.ts
│   │   ├── careers.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── lib/
│   │   ├── validation.ts
│   │   └── utils.ts
│   └── types/
│       └── portfolio.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── package.json
└── README.md

최종 구현 원칙

React 기반 Next.js와 TypeScript를 사용한다.

관리자 페이지, 회원가입 및 데이터베이스는 초기 버전에서 제외한다.

콘텐츠는 TypeScript, JSON 또는 MDX로 관리한다.

/source 폴더의 이미지와 문서를 우선 참고하되, 검토된 자료만 공개 경로로 이동한다.

프로젝트마다 문제, 역할, 해결 방식과 결과를 명확히 구분한다.

화려한 시각 효과보다 정보 전달력, 접근성과 성능을 우선한다.

회사 기밀과 개인정보를 공개하지 않는다.

구인·구직 플랫폼에서 전달받은 사용자가 별도 설명 없이도 지원자의 역량을 이해할 수 있도록 구성한다.