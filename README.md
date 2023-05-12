# 🎬 영화 검색

<a href="https://kdt5-chadongmin--omdbapi-movie-search.netlify.app/">영화 검색 배포 사이트</a>

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [ ] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.

## 과제 수행 내용

### 컴포넌트 구조

- App

  - AppTop
    - Logo
    - Icon
  - NavigationBar
  - MovieSearch
  - Loading
  - MovieList

- MovieInfo

  - MovieInfoTop
    - Logo
    - Icon
  - NavigationBar
  - Loading

- About
  - AboutTop
    - Logo
    - Icon
  - NevigationBar

### 부족했던 점

1. webpack 구성에 미숙하여 viteJS로 구성한 점 (현업에서 webpack을 더 많이 사용하게 됨에도 불구)
1. MovieList를 App의 하위 경로로 설정하는 과정에서 `Outlet` 컴포넌트와 props를 동시에 사용했는데 오류가 발생해 하위경로로 설정하지 못한 점
1. 상기 문제로 인해 MovieList가 렌더링 된 화면도 루트 경로인게 되므로 처음 화면으로 돌아가려면 새로고침을 해야하는 점
1. App 내에 fetch 함수가 있음에도 MovieInfo 내에도 별도의 fetch 함수를 중복 작성한 점
1. MovieSearch의 select를 분리하려 했으나 Props Drilling으로 인해 데이터 관리가 복잡해지는 문제로 못한 점
1. Top 컴포넌트들이 대부분 비슷하게 생겼음에도 여러개로 나누어 관리하는 점
