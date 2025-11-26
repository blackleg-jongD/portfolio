# Data Model: 취업용 포트폴리오 웹사이트

**Date**: 2025-11-26  
**Feature**: 001-portfolio  
**Purpose**: 데이터 구조 및 엔티티 정의

## 개요

이 포트폴리오 웹사이트는 정적 콘텐츠를 관리하기 위해 JSON 파일을 사용합니다. 모든 데이터는 빌드 시점에 포함되며, 런타임에 동적 API 호출이 없습니다.

## 엔티티 정의

### 1. PersonalInfo (개인 정보)

지원자의 기본 정보를 나타냅니다.

**데이터 소스**: `src/data/personal-info.json`

```json
{
  "name": "string",              // 지원자 이름 (필수)
  "title": "string",             // 직무/직책 (필수, 예: "Full Stack Developer")
  "bio": "string",               // 짧은 소개 (필수, 200자 이내)
  "location": "string",          // 위치 (선택, 예: "Seoul, South Korea")
  "avatar": "string",            // 프로필 이미지 경로 (선택)
  "resume": "string"             // 이력서 PDF 링크 (선택)
}
```

**검증 규칙**:
- `name`: 필수, 비어있지 않음
- `title`: 필수, 비어있지 않음
- `bio`: 필수, 최대 200자
- `avatar`: 선택, 유효한 이미지 경로 또는 URL
- `resume`: 선택, 유효한 URL

**예시**:
```json
{
  "name": "홍길동",
  "title": "Full Stack Developer",
  "bio": "사용자 경험을 중시하는 풀스택 개발자입니다. 웹 기술과 클라우드 인프라에 관심이 많습니다.",
  "location": "Seoul, South Korea",
  "avatar": "/assets/images/avatar.jpg",
  "resume": "/assets/resume.pdf"
}
```

### 2. Project (프로젝트)

지원자가 참여한 프로젝트나 작품을 나타냅니다.

**데이터 소스**: `src/data/projects.json` (프로젝트 배열)

```json
{
  "id": "string",                // 고유 식별자 (필수)
  "title": "string",             // 프로젝트 제목 (필수)
  "description": "string",       // 프로젝트 설명 (필수, 500자 이내)
  "longDescription": "string",   // 상세 설명 (선택, 마크다운 가능)
  "technologies": ["string"],    // 사용 기술 스택 배열 (필수, 최소 1개)
  "category": "string",          // 프로젝트 카테고리 (선택, 예: "Web", "Mobile", "AI")
  "featured": "boolean",         // 주요 프로젝트 여부 (기본값: false)
  "startDate": "string",         // 시작 날짜 (선택, ISO 8601 형식)
  "endDate": "string",           // 종료 날짜 (선택, ISO 8601 형식, null이면 진행 중)
  "role": "string",              // 역할/책임 (선택, 예: "Frontend Developer", "Team Lead")
  "teamSize": "number",          // 팀 크기 (선택)
  "thumbnail": "string",         // 썸네일 이미지 경로 (필수)
  "images": ["string"],          // 프로젝트 이미지 배열 (선택)
  "demoUrl": "string",           // 데모 링크 (선택)
  "githubUrl": "string",         // GitHub 리포지토리 링크 (선택)
  "externalUrl": "string",       // 기타 외부 링크 (선택)
  "achievements": ["string"]     // 주요 성과/결과 배열 (선택)
}
```

**검증 규칙**:
- `id`: 필수, 고유함, URL-safe 문자열
- `title`: 필수, 비어있지 않음
- `description`: 필수, 최대 500자
- `technologies`: 필수, 최소 1개 요소
- `thumbnail`: 필수, 유효한 이미지 경로
- `startDate`, `endDate`: 선택, ISO 8601 형식 (YYYY-MM-DD)
- `endDate`: `startDate`보다 이후여야 함
- `demoUrl`, `githubUrl`, `externalUrl`: 선택, 유효한 URL

**상태 전환**: 없음 (정적 데이터)

**예시**:
```json
{
  "id": "ecommerce-platform",
  "title": "전자상거래 플랫폼",
  "description": "React와 Node.js를 활용한 모던 전자상거래 플랫폼입니다.",
  "longDescription": "사용자 친화적인 인터페이스와 안정적인 결제 시스템을 구축했습니다...",
  "technologies": ["React", "Node.js", "PostgreSQL", "Stripe"],
  "category": "Web",
  "featured": true,
  "startDate": "2024-01-15",
  "endDate": "2024-06-30",
  "role": "Full Stack Developer",
  "teamSize": 5,
  "thumbnail": "/assets/projects/ecommerce-thumb.jpg",
  "images": [
    "/assets/projects/ecommerce-1.jpg",
    "/assets/projects/ecommerce-2.jpg"
  ],
  "demoUrl": "https://demo.example.com",
  "githubUrl": "https://github.com/username/ecommerce",
  "achievements": [
    "페이지 로딩 속도 40% 개선",
    "매출 30% 증가"
  ]
}
```

### 3. Skill (기술 스택)

지원자가 보유한 기술을 나타냅니다.

**데이터 소스**: `src/data/skills.json` (기술 배열)

```json
{
  "id": "string",                // 고유 식별자 (필수)
  "name": "string",              // 기술명 (필수)
  "category": "string",          // 카테고리 (필수: "language", "framework", "tool", "platform", "other")
  "level": "string",             // 숙련도 레벨 (선택: "beginner", "intermediate", "advanced", "expert")
  "yearsOfExperience": "number", // 경력 년수 (선택)
  "icon": "string",              // 아이콘 경로 또는 클래스명 (선택)
  "color": "string",             // 브랜드 컬러 (선택, hex 코드)
  "description": "string"        // 기술 설명 (선택)
}
```

**검증 규칙**:
- `id`: 필수, 고유함, URL-safe 문자열
- `name`: 필수, 비어있지 않음
- `category`: 필수, 다음 중 하나: "language", "framework", "tool", "platform", "other"
- `level`: 선택, 다음 중 하나: "beginner", "intermediate", "advanced", "expert"
- `yearsOfExperience`: 선택, 0 이상의 숫자
- `icon`: 선택, 유효한 경로 또는 CSS 클래스명
- `color`: 선택, 유효한 hex 컬러 코드 (#RRGGBB)

**상태 전환**: 없음 (정적 데이터)

**예시**:
```json
{
  "id": "javascript",
  "name": "JavaScript",
  "category": "language",
  "level": "advanced",
  "yearsOfExperience": 5,
  "icon": "devicon-javascript-plain",
  "color": "#F7DF1E",
  "description": "ES6+ 기능을 활용한 모던 JavaScript 개발"
}
```

### 4. ContactInfo (연락처 정보)

지원자의 연락 방법을 나타냅니다.

**데이터 소스**: `src/data/contact.json`

```json
{
  "email": "string",             // 이메일 주소 (필수)
  "phone": "string",             // 전화번호 (선택)
  "location": "string",          // 위치 (선택)
  "socialLinks": {
    "github": "string",          // GitHub 프로필 URL (선택)
    "linkedin": "string",        // LinkedIn 프로필 URL (선택)
    "twitter": "string",         // Twitter/X 프로필 URL (선택)
    "blog": "string",            // 블로그 URL (선택)
    "website": "string"          // 개인 웹사이트 URL (선택)
  },
  "availability": "string"       // 구직 상태 (선택: "available", "busy", "not-looking")
}
```

**검증 규칙**:
- `email`: 필수, 유효한 이메일 형식
- `phone`: 선택, 유효한 전화번호 형식
- `socialLinks.*`: 선택, 유효한 URL
- `availability`: 선택, 다음 중 하나: "available", "busy", "not-looking"

**예시**:
```json
{
  "email": "contact@example.com",
  "phone": "+82-10-1234-5678",
  "location": "Seoul, South Korea",
  "socialLinks": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "twitter": "https://twitter.com/username",
    "blog": "https://blog.example.com"
  },
  "availability": "available"
}
```

## 데이터 관계

```
PersonalInfo (1)
    ↓
Projects (N) ──→ Skills (N) [many-to-many]
    ↓
ContactInfo (1)
```

**관계 설명**:
- `PersonalInfo`는 1:1 관계 (단일 개인 정보)
- `Projects`는 여러 개일 수 있으며, 각 프로젝트는 여러 `Skills`를 참조
- `Skills`는 여러 프로젝트에서 재사용됨 (many-to-many 관계)
- `ContactInfo`는 1:1 관계 (단일 연락처 정보)

## 데이터 로딩 전략

### 정적 로딩
- 모든 JSON 파일은 빌드 시점에 번들에 포함
- 런타임에 파일 시스템 또는 네트워크 요청 없음
- 빠른 초기 로딩 시간 보장

### 지연 로딩 (Lazy Loading)
- 프로젝트 이미지는 필요 시에만 로드
- 무한 스크롤이나 페이지네이션 구현 시, 데이터 청크 단위로 로드 가능

### 캐싱 전략
- 정적 JSON 파일은 브라우저 캐시 활용
- Service Worker를 통한 오프라인 지원 가능 (선택)

## 데이터 검증

### 클라이언트 사이드 검증
- JSON 스키마 검증 라이브러리 사용 (예: Ajv)
- 개발 환경에서 빌드 시점에 검증 실행
- 잘못된 데이터 형식 감지 시 경고 또는 에러

### 데이터 무결성
- 모든 필수 필드 존재 확인
- 참조 무결성 확인 (프로젝트의 기술 스택이 Skills에 존재하는지)
- 중복 ID 확인
- 날짜 형식 및 범위 확인

## 데이터 마이그레이션

향후 데이터 구조 변경 시:
1. 버전 필드 추가하여 호환성 관리
2. 마이그레이션 스크립트 작성
3. 기존 데이터 자동 변환
4. 변경 사항 문서화

## 보안 고려사항

- JSON 파일에는 민감한 정보(비밀번호, API 키 등) 포함 금지
- 이메일 주소는 스팸 방지를 위한 난독화 고려 (선택)
- 외부 링크는 HTTPS만 사용

## 확장성 고려사항

현재 구조는 다음과 같이 확장 가능:
- 다국어 지원: 언어별 JSON 파일 분리
- 동적 콘텐츠: 향후 CMS나 API로 마이그레이션 가능한 구조
- 태그 시스템: 프로젝트에 태그 추가
- 카테고리 계층 구조: 기술 스택의 계층적 분류
