# 🎬 OMDb API 활용 영화검색 사이트 'CineMap'

## 배포주소

> <a href="https://kdt5-ahnjoonghoo--snazzy-custard-444e32.netlify.app/">CINEMAP</a>

---

## 화면 구성 🪟

|                                                           메인 페이지                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: |
| <img width="600" src="https://user-images.githubusercontent.com/115582699/235587478-119bd187-0913-460d-8602-b4c54faada3c.png"/> |
|                                                       **상세정보 페이지**                                                       |
| <img width="600" src="https://user-images.githubusercontent.com/115582699/235587566-bff7b6b0-6aae-4bef-bb01-386c310297e4.png"/> |
|                                                         **소개 페이지**                                                         |
| <img width="600" src="https://user-images.githubusercontent.com/115582699/235587572-a9b6f4c3-a249-4035-aae2-9de61038cb73.png"/> |

---

## 기술 스택

### Config

![Vite](https://img.shields.io/badge/VITE-646CFF?style=flat-square&logo=vite&logoColor=white) ![Npm](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)

### Development

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![JAVASCRIPT](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=flat-square&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=react&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)

### Deployment

<img src="https://img.shields.io/badge/NETLIFY-00C7B7?style=flat-square&logo=netlify&logoColor=white">

---

## 요구사항

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [ ] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [ ] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [ ] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [ ] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요.(실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 영화와 관련된 기타 기능도 고려해보세요.

---

## 추가기능

### Watch Later

- 영화 검색 후 포스터 우측 하단에서 아이콘을 클릭할 시 LocalStorage를 활용해 WatchLater에 선택한 영화를 저장 후 하단 목록에 출력될 수 있도록 했습니다.

### 좌/우 커서 이동시 자동 스크롤

1. 가로스크롤을 사용하도록 화면을 구성했기 때문에 노트북 트랙패드/터치패드/태블릿 등을 사용할 시 스크롤에 어려움이 없지만 **일반 데스크탑 환경에서 마우스를 사용할 때 Shift + 마우스 휠을 통해 조작해야 사용가능**하다는 점을 확인했습니다.
2. 따라서 커서의 이동만으로 좌/우 스크롤을 구현하는 것이 사용자 경험 측면에서는 필수적인 기능이라고 판단했고 기존의 세로스크롤 라이브러리를 수정해 가로스크롤에 맞게 적용했습니다.
3. 또한 아이콘을 우측 **하단**에 배치시킴으로 인해 **스크롤바와 위치가 겹치는 문제점이 발생**했고 스크롤바를 CSS를 통해 보이지 않도록 설정했습니다. 따라서 스크롤바가 없을 때 추가적인 목록 확인을 위해 목록 우측으로 커서를 위치시키는 것이 사용자로부터 예측 가능한 다음 행동 중 하나임을 고려해 자동스크롤을 적용했습니다.

## 프로젝트 회고

### 배운점(Insight)

- 1차 과제에서 **README**에 대한 피드백을 받았고 이번 과제를 위해 다양한 예시들을 찾아보면서 문서의 중요성 및 작성방법을 배웠습니다.

- 개인적으로 구글의 모든 제품에 관심이 많아서 1차 과제에서도 Material Design 웹사이트 레이아웃을 클론코딩했습니다. 이번에는 더 나아가 Material Design이 적용된 MUI를 사용해볼 수 있어 몰입해서 프로젝트를 진행할 수 있었고 이전 멘토링 답변에서 들었던 **생산성과 자동화**를 React + MUI를 통해 느낄 수 있었습니다.

- MUI사용으로 인해 더 효율적인 작업이 가능할 걸로 기대했지만 사용법에 익숙해지기까지 많은 시간이 걸린다는 걸 간과해 간단한 스타일 적용에도 어려움을 겪었습니다. 아무리 좋은 기술이더라도 초기에는 **학습시간에 대한 기회비용을 고려**해야한다는 점을 배웠습니다.

- (검색 => 포스터 클릭 => 영화 상세정보 조회)의 과정에서 데이터 전달시 컴포넌트 구성이 (조상 => 부모 => 자식) 구조였다면 props 전달이 용이했겠지만 (부모 => 자식 => 페이지 변경 후 데이터 전달)의 과정이 되었고 결과적으로 **useNavigate에서 state를 전달할 수 있는 방법**이 있다는 걸 배웠습니다.

### 문제점(Challenge)

- React로 만들어진 해당 프로젝트 내에 사용된 기술들의 작동원리를 **JavaScript**로 모두 설명할 수 있을지 자문해보면 아직 못할 것 같습니다. 또한 과제 진행 중 마주한 오류들에서도 JS기본의 중요성을 느꼈고 꾸준한 자바스크립트 학습의 필요성을 느꼈습니다.

- MUI사용으로 별도의 CSS파일 관리 없이 스타일 작업이 가능했지만 **컴포넌트에 직접 작성된 스타일 속성**들로 인해 **가독성**을 해친다는 느낌을 받았습니다.

- 자동스크롤의 모션이 부드럽지 않지만 라이브러리 사용으로 인해 어떤 방식으로 수정을 해야할지 갈피를 잡지 못해 작동 확인에만 그친 후 추가적인 수정을 하지 못했습니다.

### 궁금한 점(Questions)

- MUI사용시 Layout설정시 **App Bar, Stack, Box**등 여러 방법의 차이점이 궁금합니다. HTML에서는 1. div + class를 사용시/2. Semantic tags를 사용시 의미적으로 명확한 차이가 있지만 이미 만들어진 컴포넌트를 사용시 어떤 차이점에 주의해야할지 궁금합니다.

- 처음엔 **Home.jsx에 렌더링**을 바로 시도했지만 가장 먼저 확인하게 되는 페이지에서 긴 코드를 마주하게 되어 App.jsx로 컴포넌트 분리 후 Home은 App을 import해 홈페이지라는 명시를 위한 용도로만 사용했습니다. 라우터 관리 시에 더 보편적이고 좋은 방식이 어떤건지 궁금합니다.

- 1.App.jsx(Home)에서 사용한 **AppHeader.jsx**로 별개의 Component로 분리했지만 App.jsx 내에서 SearchBox.jsx를 AppHeader내부로 적용시키지 못해 **컴포넌트 사용이 아닌 AppHeader.jsx내부의 코드를 작성해 감싸 Header를 구성**했습니다.<br>
  2.1.<u>SearchBox 컴포넌트를 AppHeader 내부에 하나의 컴포넌트로 병합시키는 방법</u>도 고려했지만 Movie/About등 타 페이지의 헤더를 검색창 없이 구현하고 싶었습니다. <br>
  2.2 <u>SearchBox가 검색기능로직에 관련한 데이터를 사용하고 있었기 때문에도 분리의 어려움</u>이 있었습니다.) <br>
  위와 같은 문제에서 더 좋은 방식이 있는지 궁금합니다.
