# React 프로젝트 폴더 구조 설명

이 문서는 주어진 React 프로젝트의 폴더 구조와 각 디렉토리의 역할을 설명합니다.
```
├── public
└── src
    ├── assets
    ├── lib
    └── router
        ├── Public_compoment
        └── singup
        |    └── compment
        └─  {name}
```
---

## 1. `public`
- 정적 파일(HTML, favicon 등)이 위치하는 폴더입니다.
- 일반적으로 웹팩/CRA에서 빌드 시 복사되는 리소스가 들어갑니다.

---

## 2. `src`
- 실제 소스 코드가 위치하는 폴더입니다.

### 2.1. `assets`
- 이미지, 폰트, 아이콘 등 정적 리소스를 저장하는 곳입니다.
- 예시: 로고, 배경 이미지 등

### 2.2. `lib`
- 외부 라이브러리, 유틸 함수, API 모듈 등 공용으로 사용할 코드가 위치합니다.

### 2.3. `router`
- 여러 페이지를 관리하는 라우터 관련 폴더입니다.

#### 2.3.1. `Public_compoment`
- 여러 페이지에서 공통적으로 사용하는 컴포넌트를 저장합니다.
- 예시: Header, Footer, Navbar 등

#### 2.3.2. `{name}`
- 실제로 우리가 만드는 각 페이지별 폴더입니다.  
  (예: signup, login, dashboard 등)
- 각 페이지별로 독립적인 구조를 가질 수 있습니다.

##### - `compoment`
  - 해당 페이지에서만 사용하는 컴포넌트들을 저장합니다.
  - 예시: signup 폴더라면, SignupForm, SignupButton 등

##### - `layer`
  - 해당 페이지의 레이아웃(틀, 구조)을 담당하는 파일입니다.
  - 예시: 페이지별로 다른 레이아웃이 필요한 경우 사용

---
# Planity_project
