데모페이지(1차): [https://644e8d9b847cab6579ed17ce--frolicking-trifle-07d151.netlify.app/]
# 🎬 영화 검색

주어진 API를 활용해 '[완성 예시](https://stupefied-hodgkin-d9d350.netlify.app/)' 처럼 자유롭게 영화 검색 기능을 구현해보세요!  
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## 과제 수행 및 제출 방법

```
KDT기수번호_이름  |  E.g, KDT0_ParkYoungWoong
```
## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.    
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.  

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [ ] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.
---
파일 구조
C:.
│  index.html
│  main.js :: 각 페이지가 #app 요소 안에 렌더링 되도록 DOMContentLoaded 이벤트를 추가합니다.
│  package-lock.json
│  package.json
│  README.md
│  style.scss
│
├─public
│      github-mark.png
│      imdb.png
│      metacritic.png
│      movietour_logong.svg
│      movietour_logo_smile.ico
│      movietour_logo_smile.svg
│      rotten.png
│      xboxdog.jpg
│
└─src
    │  app.js :: header 요소에 클릭 이벤트를 추가하고, 최초 실행 시 랜딩페이지를 불러옵니다.
    │  router.js :: route주소를 받아와 SPA 기능을 제어합니다.
    │
    ├─constants
    │      routeInfo.js :: route주소 정보와 경로를 담고 있습니다.
    │
    ├─core
    │      getDetail.js :: 영화의 세부정보를 fetch합니다.
    │      movieFetch.js :: 검색어에 맞는 영화 정보를 fetch합니다.
    │
    ├─pages :: 이 폴더 안의 js파일은 각 주소에 렌더링 될 요소를 결정합니다.
    │  │  about.js
    │  │  main.js :: createMovieList를 호출합니다.
    │  │  movieinfo.js
    │  │  notfound.js :: URL주소가 잘못됐을 때 렌더링됩니다.
    │  │
    │  └─styles
    │          about.scss
    │          main.scss
    │          movieinfo.scss
    │
    ├─scripts
    │  ├─infoPage
    │  │      createEl.js :: detailRes.js에서 받아온 데이터를 화면에 출력합니다.
    │  │      detailRes.js :: getDetail.js를 통해 받아온 데이터에서, 필요한 데이터만 꺼내어 저장합니다.
    │  │      infoRoute.js :: main화면에서 검색 결과 요소(영화목록 중 하나)를 선택 시, 해당 주소로 URL 전환을 담당합니다.
    │  │
    │  └─mainPage
    │          createMovieList.js :: 검색 시 이벤트와, 스크롤 시 추가 데이터 fetch 이벤트를 제어합니다.
    │          movieResult.js     :: API에서 받아온 영화 목록 데이터를 화면에 출력합니다.
    │
    └─utils
            navigate.js      :: URL주소가 바뀔 때 이벤트를 발송합니다.
            querySelector.js :: querySelector 메서드를 `$`로 단축합니다. 찾을 수 없을 시 오류처리도 포함합니다.

---
package :
    "eslint": "^8.38.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.8.7",
    "sass": "^1.62.0",
    "vite": "^4.3.0"
