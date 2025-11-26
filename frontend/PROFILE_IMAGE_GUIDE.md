# 프로필 사진 설정 가이드

## 프로필 사진을 넣는 방법

### 방법 1: public 폴더 사용 (권장) ✅

1. **폴더 생성**
   ```
   frontend/public/assets/images/
   ```
   이 폴더를 만듭니다.

2. **이미지 파일 복사**
   - 현재 이미지 위치: `frontend/src/assets/images/avatar.jpg`
   - 복사할 위치: `frontend/public/assets/images/avatar.jpg`
   - 위 파일을 `public/assets/images/` 폴더로 복사하세요.

3. **경로 확인**
   - `frontend/src/data/personal-info.json` 파일에서:
   ```json
   {
     "avatar": "/assets/images/avatar.jpg"
   }
   ```
   이미 `/assets/images/avatar.jpg`로 설정되어 있습니다.

### 방법 2: src/assets 사용 (추가 코드 수정 필요)

`src/assets/` 폴더의 이미지를 사용하려면 import 방식으로 코드를 수정해야 합니다.

---

## 현재 상태

- ✅ 경로는 이미 `/assets/images/avatar.jpg`로 설정됨
- ⚠️ 이미지 파일을 `frontend/public/assets/images/`에 넣어야 함

## 빠른 설정

현재 `src/assets/images/avatar.jpg`에 파일이 있다면:

1. `frontend/public/assets/images/` 폴더 생성
2. `avatar.jpg` 파일을 `public/assets/images/`로 복사
3. 완료! (경로는 이미 설정되어 있음)

이렇게 하면 웹사이트에서 프로필 사진이 정상적으로 표시됩니다.
