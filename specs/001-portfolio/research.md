# Research & Technical Decisions: 취업용 포트폴리오 웹사이트

**Date**: 2025-11-26  
**Feature**: 001-portfolio  
**Purpose**: 기술 스택 및 아키텍처 의사결정 문서화

## 1. 프레임워크 선택

### Decision: 바닐라 JavaScript 또는 경량 프레임워크 사용

**Rationale**:
- GitHub Pages는 정적 사이트 호스팅만 지원하므로 클라이언트 사이드 프레임워크가 필요
- 포트폴리오는 비교적 단순한 구조로, 프레임워크 없이도 구현 가능
- 작은 번들 크기는 빠른 로딩 속도에 기여
- 하지만 컴포넌트 재사용성과 유지보수성을 고려하면 경량 프레임워크가 유리

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **바닐라 JavaScript** | 번들 크기 최소, 학습 곡선 없음, 성능 최적 | 컴포넌트 재사용 어려움, 유지보수 복잡 | 고려 중 |
| **React** | 컴포넌트 기반, 생태계 풍부, 학습 자료 많음 | 번들 크기 증가, 오버헤드 | 추천 |
| **Vue.js** | 가벼움, 학습 곡선 낮음, 점진적 도입 가능 | React 대비 생태계 작음 | 고려 중 |
| **Preact** | React와 유사하지만 경량 (3KB) | React 호환성 제한 | 대안으로 고려 |

**최종 결정**: 
- MVP는 **바닐라 JavaScript**로 시작하여 빠르게 구현
- 향후 필요 시 React 또는 Vue.js로 마이그레이션 가능하도록 모듈화된 구조 설계

## 2. 빌드 도구 선택

### Decision: Vite 사용

**Rationale**:
- 빠른 개발 서버와 HMR (Hot Module Replacement)
- 최적화된 프로덕션 빌드
- GitHub Pages 배포에 최적화된 정적 파일 생성
- 타입스크립트, CSS 전처리기 등 플러그인 생태계 풍부

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **Vite** | 빠른 개발 환경, 최적화된 빌드, 최신 표준 | 새로운 도구 (학습 필요) | ✅ 선택 |
| **Parcel** | 설정 없음, 자동 최적화 | 커스터마이징 제한 | 고려 |
| **Webpack** | 성숙한 생태계, 유연함 | 설정 복잡, 느린 빌드 | 배제 |
| **ESBuild** | 매우 빠른 빌드 | 플러그인 생태계 제한적 | 고려 |

**최종 결정**: Vite - 빠른 개발 경험과 최적화된 프로덕션 빌드의 균형

## 3. CSS 프레임워크/방식 선택

### Decision: CSS Modules + CSS Variables 사용

**Rationale**:
- 프레임워크 의존성 없이 순수 CSS 사용
- CSS Variables로 테마 관리 (다크 모드 지원 용이)
- CSS Modules로 스코프 격리 및 컴포넌트별 스타일 관리
- Tailwind CSS는 유연하지만 학습 곡선과 번들 크기 고려

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **순수 CSS + Variables** | 의존성 없음, 작은 번들, 완전한 제어 | 보일러플레이트 코드 | ✅ 선택 |
| **Tailwind CSS** | 빠른 개발, 일관된 디자인 | 학습 곡선, 설정 필요 | 대안 |
| **CSS-in-JS** | 동적 스타일링 | 런타임 오버헤드, 번들 크기 | 배제 |
| **Bootstrap** | 빠른 프로토타이핑 | 커스터마이징 제한, 번들 크기 | 배제 |

**최종 결정**: 순수 CSS + CSS Variables - 성능과 유연성의 최적 균형

## 4. 데이터 관리 방식

### Decision: JSON 파일 기반 정적 데이터 관리

**Rationale**:
- GitHub Pages는 정적 호스팅만 지원하므로 서버 사이드 데이터베이스 불가
- JSON 파일은 버전 관리 가능하며, 수정이 쉬움
- 빌드 시점에 데이터를 포함하여 런타임 API 호출 불필요
- 콘텐츠 업데이트 시 JSON 파일만 수정하면 됨

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **JSON 파일** | 단순함, 버전 관리, 빠른 로딩 | 파일 수 증가 가능 | ✅ 선택 |
| **Markdown 파일** | 콘텐츠 작성 용이 | 파싱 필요, 변환 단계 | 고려 중 |
| **외부 API** | 동적 데이터 | 의존성, 로딩 시간, 비용 | 배제 |

**최종 결정**: JSON 파일 - 프로젝트, 기술 스택, 연락처 정보를 JSON으로 관리

## 5. 이미지 최적화 전략

### Decision: WebP 형식 + Lazy Loading + Responsive Images

**Rationale**:
- WebP는 JPEG/PNG 대비 25-35% 작은 파일 크기
- Lazy loading으로 초기 로딩 시간 단축
- Responsive images로 디바이스별 최적 크기 제공
- Fallback을 통한 호환성 확보

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **WebP + Fallback** | 작은 파일 크기, 넓은 브라우저 지원 | 변환 과정 필요 | ✅ 선택 |
| **AVIF** | 더 작은 파일 크기 | 브라우저 지원 제한 | 미래 고려 |
| **JPEG/PNG** | 완벽한 호환성 | 큰 파일 크기 | Fallback으로 사용 |

**최종 결정**: WebP 형식 + JPEG/PNG Fallback + Lazy Loading

## 6. 애니메이션 라이브러리 선택

### Decision: CSS 애니메이션 우선, 필요 시 GSAP 보완

**Rationale**:
- CSS 애니메이션은 성능이 우수하고 번들 크기가 0
- 스크롤 애니메이션, 페이드 인 등 기본 효과는 CSS로 충분
- 복잡한 애니메이션이 필요한 경우에만 GSAP 도입

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **CSS Animations** | 성능 우수, 번들 없음, 단순 효과에 적합 | 복잡한 애니메이션 제한 | ✅ 기본 |
| **GSAP** | 강력한 애니메이션 기능, 성능 우수 | 번들 크기 (30KB+), 학습 필요 | 필요 시 보완 |
| **Framer Motion** | React와 잘 통합 | React 의존, 번들 크기 | React 사용 시 고려 |
| **AOS (Animate On Scroll)** | 간단한 스크롤 애니메이션 | 추가 번들, 커스터마이징 제한 | 배제 |

**최종 결정**: CSS 애니메이션으로 시작, 필요 시 GSAP 보완

## 7. 테스팅 전략

### Decision: Vitest (단위 테스트) + Playwright (E2E 테스트)

**Rationale**:
- Vitest는 Vite와 잘 통합되며 빠른 실행 속도
- Playwright는 모던 브라우저 자동화 및 접근성 테스트 지원
- Lighthouse CI를 통한 성능 및 접근성 자동 검증

**Alternatives Considered**:

| 옵션 | 장점 | 단점 | 선택 여부 |
|------|------|------|----------|
| **Vitest** | Vite 통합, 빠른 실행, Jest 호환 | 상대적으로 새로운 도구 | ✅ 선택 |
| **Jest** | 성숙한 생태계, 넓은 사용 | 설정 복잡, 느린 실행 | 배제 |
| **Playwright** | 강력한 E2E, 접근성 테스트 내장 | 학습 곡선 | ✅ 선택 |
| **Cypress** | 개발자 친화적 | 상업적 기능 제한 | 고려 중 |

**최종 결정**: Vitest + Playwright + Lighthouse CI

## 8. 배포 자동화 전략

### Decision: GitHub Actions를 통한 자동 배포

**Rationale**:
- GitHub Pages와의 통합이 자연스러움
- 빌드, 테스트, 배포를 하나의 워크플로우로 자동화
- PR별 프리뷰 배포 가능
- 무료로 제공되는 CI/CD 인프라

**배포 프로세스**:
1. 코드 푸시 또는 PR 생성
2. GitHub Actions 트리거
3. 의존성 설치 및 테스트 실행
4. 프로덕션 빌드 생성
5. GitHub Pages에 자동 배포

**최종 결정**: GitHub Actions 워크플로우 구축

## 9. 접근성 (A11y) 전략

### Decision: WCAG 2.1 Level AA 준수

**Rationale**:
- 취업 포트폴리오에서 접근성은 전문성을 나타내는 중요한 요소
- 다양한 사용자의 접근성 확보
- SEO에도 긍정적 영향

**구현 방법**:
- 시맨틱 HTML 요소 사용
- 적절한 ARIA 레이블
- 키보드 네비게이션 지원
- 색상 대비 비율 준수 (4.5:1 이상)
- 스크린 리더 테스트
- 자동화된 접근성 검사 도구 활용

**최종 결정**: WCAG 2.1 Level AA 기준 준수

## 10. SEO 최적화 전략

### Decision: 메타 태그, 구조화된 데이터, 사이트맵 생성

**Rationale**:
- 검색 엔진 최적화를 통한 노출 향상
- 소셜 미디어 공유 최적화 (Open Graph, Twitter Cards)
- 구조화된 데이터로 검색 결과 향상

**구현 항목**:
- 메타 태그 (title, description, keywords)
- Open Graph 태그 (소셜 미디어 공유)
- Twitter Cards
- 구조화된 데이터 (JSON-LD)
- 사이트맵 (sitemap.xml)
- robots.txt

**최종 결정**: 종합적인 SEO 최적화 전략 구현

## 11. 성능 최적화 전략

### Decision: Core Web Vitals 최적화 우선

**Rationale**:
- 사용자 경험과 SEO에 직접적 영향
- 성공 기준에서 명시된 로딩 시간 목표 달성

**최적화 항목**:
- 이미지 최적화 및 Lazy Loading
- 코드 분할 (Code Splitting)
- Critical CSS 인라인화
- 폰트 최적화 (preload, subset)
- 리소스 힌팅 (preconnect, dns-prefetch)
- 서비스 워커 (Service Worker)로 캐싱

**목표 지표**:
- FCP < 1.0초
- LCP < 2.5초
- TTI < 3.5초
- CLS < 0.1

**최종 결정**: Core Web Vitals 목표 달성을 위한 종합 최적화

## 요약

| 항목 | 선택된 기술/방식 | 대안 |
|------|----------------|------|
| 프레임워크 | 바닐라 JavaScript (MVP) | React, Vue.js |
| 빌드 도구 | Vite | Parcel, Webpack |
| CSS | 순수 CSS + Variables | Tailwind CSS |
| 데이터 관리 | JSON 파일 | Markdown, API |
| 이미지 | WebP + Lazy Loading | JPEG/PNG |
| 애니메이션 | CSS (기본) + GSAP (필요 시) | Framer Motion |
| 테스팅 | Vitest + Playwright | Jest + Cypress |
| 배포 | GitHub Actions | 수동 배포 |
| 접근성 | WCAG 2.1 AA | - |
| SEO | 메타 태그 + 구조화된 데이터 | - |
| 성능 | Core Web Vitals 최적화 | - |

## 다음 단계

1. 프로젝트 구조 설정
2. 개발 환경 구성 (Vite, 테스팅 도구)
3. 데이터 모델 정의 (JSON 스키마)
4. 기본 컴포넌트 구조 설계
5. 스타일 가이드라인 수립
