# GitHub Pages 배포 가이드

포트폴리오를 GitHub Pages에 배포하는 방법을 안내합니다.

## 📋 배포 전 체크리스트

### 1. 저장소 이름 확인
GitHub Pages는 두 가지 방식으로 배포할 수 있습니다:
- **사용자/조직 페이지**: `username.github.io` 저장소 → 루트 경로 (`/`)
- **프로젝트 페이지**: `username.github.io/repository-name` 저장소 → 서브 경로 (`/repository-name/`)

### 2. Base URL 설정
`frontend/vite.config.js` 파일의 `base` 값을 저장소 이름에 맞게 수정해야 합니다.

## 🚀 배포 단계

### 방법 1: GitHub Actions 자동 배포 (권장)

#### 1단계: GitHub 저장소 생성

1. GitHub에 로그인
2. 새 저장소(Repository) 생성
   - 저장소 이름: 원하는 이름 (예: `portfolio`, `my-portfolio` 등)
   - Public 또는 Private 선택
   - **README, .gitignore, license 추가하지 않기** (이미 있음)

#### 2단계: Base URL 설정

`frontend/vite.config.js` 파일을 열고 `base` 경로를 저장소 이름에 맞게 수정:

**사용자/조직 페이지인 경우** (`username.github.io`):
```javascript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

**프로젝트 페이지인 경우** (`username.github.io/portfolio`):
```javascript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```
⚠️ **중요**: `/portfolio/` 부분을 실제 저장소 이름으로 변경하세요!

#### 3단계: 코드 푸시

터미널에서 다음 명령어 실행:

```bash
# 현재 디렉토리 확인
cd C:\Users\SSAFY\Desktop\port

# Git 초기화 (이미 되어 있다면 스킵)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Portfolio website"

# GitHub 저장소 연결 (YOUR_USERNAME과 REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 또는 SSH 사용하는 경우
# git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# main 브랜치로 푸시
git branch -M main
git push -u origin main
```

#### 4단계: GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `gh-pages` 선택
   - **Folder**: `/ (root)` 선택
   - 또는
   - **GitHub Actions** 선택 (이 방법이 더 권장됨)
5. **Save** 클릭

#### 5단계: GitHub Actions 활성화

1. **Settings** > **Actions** > **General** 이동
2. **Actions permissions**에서:
   - ✅ **Allow all actions and reusable workflows** 선택
   - 또는
   - ✅ **Allow local actions and reusable workflows** 선택
3. **Save** 클릭

#### 6단계: 배포 확인

1. 저장소 페이지에서 **Actions** 탭 클릭
2. 워크플로우가 실행되는지 확인
3. 약 2-3분 후 **Settings** > **Pages**에서 배포된 URL 확인
4. URL 형식: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### 방법 2: 수동 배포

자동 배포가 작동하지 않는 경우 수동으로 배포할 수 있습니다.

#### 1단계: 로컬 빌드

```bash
cd frontend
npm install
npm run build
```

#### 2단계: gh-pages 브랜치에 배포

```bash
# gh-pages 설치 (한 번만)
npm install --save-dev gh-pages

# package.json에 deploy 스크립트 추가 (아래 참고)

# 배포 실행
npm run deploy
```

`frontend/package.json`에 다음 스크립트 추가:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

## ⚙️ 설정 파일 확인

### vite.config.js 설정 확인

현재 설정:
```javascript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

**⚠️ 중요**: `/portfolio/`를 실제 저장소 이름으로 변경해야 합니다!

예시:
- 저장소 이름이 `my-portfolio`인 경우: `'/my-portfolio/'`
- 저장소 이름이 `portfolio`인 경우: `'/portfolio/'`
- 사용자 페이지(`username.github.io`)인 경우: `'/'`

### GitHub Actions 워크플로우

`.github/workflows/deploy.yml` 파일이 자동으로 배포를 처리합니다. 수정할 필요가 없습니다.

## 🔧 문제 해결

### 배포 후 404 에러가 발생하는 경우

1. **Base URL 확인**: `vite.config.js`의 `base` 경로가 저장소 이름과 일치하는지 확인
2. **빌드 확인**: 로컬에서 `npm run build` 실행 후 `dist` 폴더 내용 확인
3. **캐시 삭제**: 브라우저 캐시 삭제 후 다시 시도

### 이미지가 표시되지 않는 경우

1. 이미지 경로가 `/assets/...` 형식인지 확인
2. 이미지 파일이 `frontend/public/assets/` 폴더에 있는지 확인
3. 빌드 후 `dist/assets/` 폴더에 이미지가 포함되어 있는지 확인

### GitHub Actions가 실행되지 않는 경우

1. **Settings** > **Actions** > **General**에서 Actions가 활성화되어 있는지 확인
2. **Settings** > **Pages**에서 소스를 **GitHub Actions**로 설정
3. `.github/workflows/deploy.yml` 파일이 `main` 브랜치에 있는지 확인

## 📝 배포 후 할 일

### 1. 도메인 연결 (선택사항)

커스텀 도메인을 사용하려면:

1. 도메인 제공업체에서 DNS 설정:
   - Type: `CNAME`
   - Name: `www` (또는 `@`)
   - Value: `YOUR_USERNAME.github.io`

2. 저장소 루트에 `CNAME` 파일 생성:
   ```
   www.yourdomain.com
   ```

3. GitHub 저장소 **Settings** > **Pages** > **Custom domain**에 도메인 입력

### 2. SEO 최적화

`frontend/src/index.html`의 메타 태그를 업데이트:

```html
<meta property="og:url" content="https://YOUR_USERNAME.github.io/REPO_NAME/" />
<meta property="twitter:url" content="https://YOUR_USERNAME.github.io/REPO_NAME/" />
```

### 3. Google Analytics 추가 (선택사항)

`frontend/src/index.html`의 `<head>`에 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 업데이트 배포

내용을 수정한 후:

1. 변경사항 커밋:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

2. GitHub Actions가 자동으로 재배포 (약 2-3분 소요)

## 📚 참고 자료

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions 문서](https://docs.github.com/en/actions)

## 🆘 도움이 필요하신가요?

문제가 발생하면 다음을 확인하세요:
1. GitHub 저장소의 **Actions** 탭에서 에러 메시지 확인
2. 로컬에서 `npm run build` 성공 여부 확인
3. 브라우저 개발자 도구(F12)에서 콘솔 에러 확인

행운을 빕니다! 🚀
