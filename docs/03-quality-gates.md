# 품질 게이트

## 목적

코드 프로젝트가 생성된 뒤 모든 변경에 적용할 최소 검증 기준을 정의한다.

## 기본 검증 명령

TypeScript 프로젝트가 존재하면 아래 명령을 우선 실행한다.

```bash
tsc --noEmit
npm run lint
```

## 권장 검증 명령

프로젝트 스크립트가 준비되면 아래 명령을 표준화한다.

```bash
npm run typecheck
npm run lint
npm run test
npm run test:unit
npm run test:integration
npm run test:e2e:web
npm run test:e2e:mobile
```

## 통과 기준

- 타입 오류 없음
- lint 오류 없음
- 핵심 unit test 통과
- 핵심 integration test 통과
- 핵심 E2E test 통과
- API contract test 통과

## 실패 처리 기준

- 타입 오류는 다음 작업으로 넘어가기 전에 수정한다.
- lint 오류는 다음 작업으로 넘어가기 전에 수정한다.
- 테스트 실패는 원인을 분류하고 수정한다.
- 외부 환경 문제로 실행 불가하면 실행 불가 사유를 문서에 기록한다.

## 현재 상태

- 코드 프로젝트 없음
- `package.json` 없음
- `tsconfig.json` 없음
- 따라서 `tsc --noEmit`과 lint 실행 대상 없음

## 미정 항목

- 패키지 매니저
- typecheck 스크립트명
- lint 도구
- unit test 도구
- integration test 도구
- E2E test 도구
