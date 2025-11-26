# Contracts: 취업용 포트폴리오 웹사이트

이 디렉토리는 포트폴리오 웹사이트의 데이터 계약을 정의합니다.

## 개요

이 프로젝트는 정적 웹사이트이므로 전통적인 API 계약은 없습니다. 대신, JSON 데이터 파일의 구조와 검증을 위한 스키마를 정의합니다.

## 파일 구조

```
contracts/
├── data-schema.json    # JSON Schema 정의
└── README.md          # 이 파일
```

## 데이터 스키마

### data-schema.json

포트폴리오 웹사이트에서 사용하는 모든 JSON 데이터 파일의 구조를 정의하는 JSON Schema입니다.

**지원하는 데이터 타입**:
- PersonalInfo (개인 정보)
- Projects (프로젝트 배열)
- Skills (기술 스택 배열)
- ContactInfo (연락처 정보)

## 스키마 검증

개발 환경에서 데이터 파일의 유효성을 검증하려면:

```bash
# JSON Schema 검증 라이브러리 사용 예시
npm install -g ajv-cli

# 데이터 파일 검증
ajv validate -s contracts/data-schema.json -d src/data/personal-info.json
```

## 스키마 버전 관리

데이터 구조가 변경될 경우:
1. 스키마 버전 업데이트
2. 기존 데이터 마이그레이션 계획
3. 변경 사항 문서화

## 확장 계획

향후 동적 기능이 추가될 경우:
- REST API 계약 (OpenAPI/Swagger)
- GraphQL 스키마
- 웹소켓 프로토콜 정의
