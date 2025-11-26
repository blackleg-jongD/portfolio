# 취업용 포트폴리오 웹사이트

GitHub Pages를 통해 호스팅되는 개인 포트폴리오 웹사이트입니다.

## 프로젝트 개요

이 프로젝트는 취업 지원자를 위한 개인 포트폴리오 웹사이트입니다. 지원자의 프로젝트, 기술 스택, 연락처 정보를 깔끔하고 전문적으로 표시합니다.

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 웹 접근성 준수 (WCAG 2.1 AA)
- ✅ SEO 최적화 (메타 태그, Open Graph, JSON-LD)
- ✅ 프로젝트 필터링 및 상세 모달
- ✅ 기술 스택 카테고리별 표시
- ✅ 부드러운 스크롤 애니메이션
- ✅ GitHub Pages 자동 배포

## 기술 스택

- **빌드 도구**: Vite
- **언어**: HTML5, CSS3, JavaScript (ES6+)
- **배포**: GitHub Pages + GitHub Actions

## 프로젝트 구조

```
frontend/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── ProjectCard/
│   │   ├── ProjectModal/
│   │   ├── SkillBadge/
│   │   ├── SocialLinks/
│   │   └── Footer/
│   ├── sections/        # 페이지 섹션
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   └── Contact/
│   ├── data/            # JSON 데이터 파일
│   │   ├── personal-info.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── contact.json
│   ├── styles/          # 스타일시트
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── components/
│   ├── utils/           # 유틸리티 함수
│   └── assets/          # 이미지, 아이콘 등
├── public/              # 정적 파일
│   ├── robots.txt
│   └── sitemap.xml
└── .github/
    └── workflows/
        └── deploy.yml
```

## 시작하기

### 전제 조건

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
cd frontend
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 콘텐츠 업데이트

프로젝트 정보, 기술 스택, 연락처 정보는 `src/data/` 디렉토리의 JSON 파일을 수정하여 업데이트할 수 있습니다:

### 개인 정보 (`src/data/personal-info.json`)

```json
{
  "name": "박종원",
  "title": "Embedded & Robotics Developer",
  "bio": "전기전자 공학과 반도체, 로봇, 임베디드 개발에 관심이 있는 개발자입니다.",
  "location": "Seoul, South Korea",
  "avatar": "/assets/images/avatar.jpg",
  "resume": "/assets/resume.pdf"
}
```

### 프로젝트 (`src/data/projects.json`)

프로젝트 배열을 JSON 형식으로 추가합니다. 각 프로젝트는 다음 필드를 포함해야 합니다:
- `id`: 고유 식별자
- `title`: 프로젝트 제목
- `description`: 프로젝트 설명
- `technologies`: 사용 기술 배열
- `thumbnail`: 썸네일 이미지 경로

자세한 구조는 `specs/001-portfolio/data-model.md`를 참고하세요.

### 기술 스택 (`src/data/skills.json`)

기술 배열을 JSON 형식으로 추가합니다. 각 기술은 다음 필드를 포함합니다:
- `id`: 고유 식별자
- `name`: 기술명
- `category`: 카테고리 (language, framework, tool, platform, other)
- `level`: 숙련도 (beginner, intermediate, advanced, expert)

### 연락처 (`src/data/contact.json`)

```json
{
  "email": "contact@example.com",
  "location": "Seoul, South Korea",
  "socialLinks": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username"
  }
}
```

## 배포

### GitHub Pages 자동 배포

1. GitHub 저장소 생성
2. 코드 푸시
3. 저장소 Settings > Pages에서 GitHub Actions를 소스로 선택
4. `main` 브랜치에 푸시하면 자동으로 배포됩니다

### 수동 배포

```bash
npm run build
# dist/ 디렉토리의 내용을 GitHub Pages에 업로드
```

### Base URL 설정

GitHub Pages에서 서브 경로로 배포하는 경우, `vite.config.js`의 `base` 값을 수정하세요:

```js
base: '/your-repo-name/',
```

그리고 `index.html`의 메타 태그 URL도 업데이트하세요.

## 성능 최적화

- 이미지 최적화 (WebP 형식 권장)
- 코드 압축 및 최소화
- 리소스 힌트 (preconnect, dns-prefetch)
- 지연 로딩 (Lazy loading)

## 접근성

- WCAG 2.1 AA 표준 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환
- 색상 대비 비율 준수 (4.5:1)

## 라이선스

개인 사용을 위한 프로젝트입니다.

## 기여

버그 리포트나 기능 제안은 Issue를 통해 알려주세요.