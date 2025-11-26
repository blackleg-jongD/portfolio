# 기술 스택(Skills) 섹션 가이드

## 📍 기술 스택 수정 위치

기술 스택의 내용은 다음 파일에서 수정할 수 있습니다:

```
frontend/src/data/skills.json
```

## 📝 기술 스택 데이터 구조

각 기술 항목은 다음과 같은 필드로 구성되어 있습니다:

```json
{
  "id": "unique-id",           // 고유 식별자 (영문, 하이픈 사용 가능)
  "name": "기술 이름",          // 표시될 기술 이름
  "category": "category-type", // 카테고리 (아래 참고)
  "level": "level-type",       // 숙련도 (아래 참고)
  "yearsOfExperience": 5,      // 경력 년수
  "color": "#HEX코드",         // 배지 색상 (선택사항)
  "description": "설명"        // 기술에 대한 설명 (선택사항)
}
```

## 🏷️ 카테고리 종류

기술들은 다음 카테고리로 자동 분류됩니다:

- `language`: 프로그래밍 언어 (C, C++, Python 등)
- `framework`: 프레임워크 & 라이브러리 (ROS/ROS2, TensorFlow 등)
- `platform`: 플랫폼 (Linux, Arduino, Raspberry Pi, ESP32 등)
- `tool`: 도구 (Git, Gazebo, Yocto Project 등)
- `other`: 기타 (위에 해당하지 않는 기술)

### 카테고리 라벨 (한국어)

카테고리별 표시 이름은 다음과 같습니다:
- `language` → "프로그래밍 언어"
- `framework` → "프레임워크 & 라이브러리"
- `platform` → "플랫폼"
- `tool` → "도구"
- `other` → "기타"

## 📊 숙련도 레벨

`level` 필드에 사용 가능한 값:

- `beginner`: 초급
- `intermediate`: 중급
- `advanced`: 고급
- `expert`: 전문가

숙련도 레벨이 지정되면 배지에 레벨 표시가 나타납니다.

## 🎨 기술 스택 추가/수정 방법

### 1. 새 기술 추가하기

`skills.json` 파일의 배열에 새 객체를 추가하세요:

```json
{
  "id": "new-technology",
  "name": "새로운 기술",
  "category": "tool",
  "level": "intermediate",
  "yearsOfExperience": 2,
  "color": "#FF5733",
  "description": "기술에 대한 설명"
}
```

### 2. 기존 기술 수정하기

기존 기술 객체의 필드를 원하는 값으로 수정하세요:

```json
{
  "id": "python",
  "name": "Python",
  "category": "language",
  "level": "expert",  // ← advanced에서 expert로 변경
  "yearsOfExperience": 6,  // ← 경력 년수 업데이트
  "color": "#3776AB",
  "description": "머신러닝 및 로봇 제어 스크립팅"
}
```

### 3. 기술 삭제하기

해당 기술 객체를 배열에서 제거하세요.

## 📋 현재 기술 스택 목록

현재 설정된 기술들:

### 프로그래밍 언어
- C (고급, 4년)
- C++ (고급, 4년)
- Python (고급, 5년)

### 프레임워크 & 라이브러리
- ROS/ROS2 (고급, 3년)
- TensorFlow (중급, 2년)

### 플랫폼
- Linux (고급, 5년)
- Arduino (고급, 4년)
- Raspberry Pi (고급, 3년)
- ESP32 (중급, 2년)

### 도구
- OpenCV (중급, 3년)
- Git (고급, 5년)
- Gazebo (중급, 2년)
- Yocto Project (중급, 2년)

## 💡 작성 팁

### 기술을 추가할 때 고려사항:

1. **카테고리 분류**
   - 언어는 `language`
   - 프레임워크나 라이브러리는 `framework`
   - 운영체제나 하드웨어 플랫폼은 `platform`
   - 개발/빌드 도구는 `tool`

2. **숙련도 표시**
   - 솔직하고 정확하게 표시
   - 과장하지 않기
   - 면접 준비 시 설명할 수 있는 수준으로

3. **경력 년수**
   - 실제 사용한 기간 기준
   - 공부 기간 포함 가능 (합리적인 범위 내)

4. **색상 코드**
   - 공식 로고/브랜드 색상 사용 추천
   - [Simple Icons](https://simpleicons.org/)에서 기술별 색상 확인 가능
   - 예: Python → #3776AB

### 예시: 새로운 기술 추가

```json
{
  "id": "stm32",
  "name": "STM32",
  "category": "platform",
  "level": "intermediate",
  "yearsOfExperience": 1,
  "color": "#03234B",
  "description": "ARM Cortex-M 마이크로컨트롤러 개발"
}
```

## 🔧 수정 후 확인

1. `frontend/src/data/skills.json` 파일 수정
2. 저장
3. 브라우저 새로고침
4. Skills 섹션에서 변경사항 확인

## 📌 참고사항

- 기술 이름은 간결하고 명확하게
- ID는 소문자, 하이픈 사용 권장
- 카테고리나 레벨이 없으면 `"other"` 카테고리나 레벨 없이 표시됨
- 색상 코드는 16진수 형식 (#RRGGBB)

## 🎯 임베디드/로봇 개발자에게 추천 기술

### 필수 기술
- C/C++ (시스템 프로그래밍)
- Python (스크립팅, 프로토타이핑)
- Linux (임베디드 시스템)
- Git (버전 관리)

### 로봇 개발
- ROS/ROS2
- Gazebo (시뮬레이션)
- MoveIt (로봇 팔 제어)
- OpenCV (컴퓨터 비전)

### 임베디드 플랫폼
- Arduino
- Raspberry Pi
- ESP32/ESP8266
- STM32

### IoT & 통신
- MQTT
- LoRaWAN
- Bluetooth
- WiFi

### 개발 도구
- Yocto Project / Buildroot
- CMake
- Docker (선택)
- Jenkins/GitHub Actions (CI/CD)

필요한 기술을 추가하거나 수정하시면 됩니다!
