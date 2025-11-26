# Quick Start Guide: 취업용 포트폴리오 웹사이트

**Date**: 2025-11-26  
**Feature**: 001-portfolio  
**Purpose**: 프로젝트 시작을 위한 빠른 가이드

## 전제 조건

- Node.js 18+ 및 npm/yarn/pnpm
- Git
- GitHub 계정 (GitHub Pages 배포용)

## 프로젝트 초기화

### 1. 프로젝트 생성

```bash
# Vite를 사용한 새 프로젝트 생성
npm create vite@latest portfolio-website -- --template vanilla

# 또는 React 템플릿 사용
npm create vite@latest portfolio-website -- --template react
```

### 2. 프로젝트 디렉토리 구조 설정

```
portfolio-website/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트
│   ├── sections/        # 페이지 섹션
│   ├── data/            # JSON 데이터 파일
│   │   ├── personal-info.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── contact.json
│   ├── styles/          # 스타일시트
│   ├── utils/           # 유틸리티 함수
│   └── assets/          # 이미지, 아이콘 등
├── public/              # 정적 파일
├── tests/               # 테스트 파일
└── package.json
```

### 3. 필수 의존성 설치

```bash
cd portfolio-website
npm install

# 개발 도구
npm install -D vitest @vitest/ui
npm install -D @playwright/test
npm install -D @testing-library/dom @testing-library/jest-dom

# 선택적 의존성 (필요 시)
npm install ajv              # JSON 스키마 검증
npm install lucide-icons     # 아이콘 라이브러리
```

## 데이터 파일 생성

### 1. 개인 정보 (`src/data/personal-info.json`)

```json
{
  "name": "홍길동",
  "title": "Full Stack Developer",
  "bio": "사용자 경험을 중시하는 풀스택 개발자입니다.",
  "location": "Seoul, South Korea",
  "avatar": "/assets/images/avatar.jpg",
  "resume": "/assets/resume.pdf"
}
```

### 2. 프로젝트 (`src/data/projects.json`)

```json
[
  {
    "id": "example-project",
    "title": "예제 프로젝트",
    "description": "프로젝트 설명입니다.",
    "technologies": ["React", "Node.js"],
    "thumbnail": "/assets/projects/example-thumb.jpg",
    "featured": true
  }
]
```

### 3. 기술 스택 (`src/data/skills.json`)

```json
[
  {
    "id": "javascript",
    "name": "JavaScript",
    "category": "language",
    "level": "advanced"
  }
]
```

### 4. 연락처 (`src/data/contact.json`)

```json
{
  "email": "contact@example.com",
  "socialLinks": {
    "github": "https://github.com/username"
  }
}
```

## 기본 HTML 구조

### `index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>포트폴리오</title>
</head>
<body>
  <header id="header"></header>
  <main>
    <section id="hero"></section>
    <section id="about"></section>
    <section id="projects"></section>
    <section id="skills"></section>
    <section id="contact"></section>
  </main>
  <footer id="footer"></footer>
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

## 기본 JavaScript 구조

### `src/main.js`

```javascript
// 데이터 로드
import personalInfo from './data/personal-info.json';
import projects from './data/projects.json';
import skills from './data/skills.json';
import contact from './data/contact.json';

// 컴포넌트 초기화
function init() {
  loadPersonalInfo();
  loadProjects();
  loadSkills();
  loadContact();
}

function loadPersonalInfo() {
  const heroSection = document.getElementById('hero');
  // PersonalInfo 데이터로 Hero 섹션 렌더링
}

function loadProjects() {
  const projectsSection = document.getElementById('projects');
  // Projects 데이터로 Projects 섹션 렌더링
}

// DOM이 로드된 후 초기화
document.addEventListener('DOMContentLoaded', init);
```

## 스타일 설정

### `src/styles/global.css`

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-text: #212529;
  --color-bg: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
}
```

## 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 빌드 및 배포

### 로컬 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### GitHub Pages 배포

#### 1. GitHub Actions 워크플로우 생성

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 2. GitHub 저장소 설정

1. GitHub에 저장소 생성
2. Settings > Pages에서 소스 브랜치를 `gh-pages`로 설정
3. 코드 푸시 시 자동으로 배포됨

## 테스트 실행

### 단위 테스트

```bash
npm run test
```

### E2E 테스트

```bash
npx playwright test
```

### 성능 및 접근성 테스트

```bash
npm run build
npx serve dist
npx lighthouse http://localhost:3000 --view
```

## 다음 단계

1. ✅ 프로젝트 초기화
2. ⬜ 데이터 파일 작성
3. ⬜ 기본 컴포넌트 구현
4. ⬜ 스타일링
5. ⬜ 반응형 디자인 구현
6. ⬜ 접근성 개선
7. ⬜ 성능 최적화
8. ⬜ 배포 및 테스트

## 유용한 리소스

- [Vite 공식 문서](https://vitejs.dev/)
- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [WCAG 가이드라인](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev 성능 가이드](https://web.dev/performance/)

## 문제 해결

### 빌드 오류

- Node.js 버전 확인: `node --version` (18+ 필요)
- 의존성 재설치: `rm -rf node_modules package-lock.json && npm install`

### 배포 오류

- GitHub Actions 로그 확인
- `dist/` 디렉토리가 생성되었는지 확인
- GitHub Pages 설정 확인

### 이미지 로딩 문제

- 이미지 경로 확인 (절대 경로 사용)
- 이미지 파일이 `public/` 또는 `src/assets/`에 있는지 확인
