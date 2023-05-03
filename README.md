# 🎬 영화 검색

주어진 API를 활용해 '[완성 예시](https://stupefied-hodgkin-d9d350.netlify.app/)' 처럼 자유롭게 영화 검색 기능을 구현해보세요!  
과제 수행 및 리뷰 기간은 별도 공지를 참고하세요!

## 배포페이지

**[영화 검색 사이트](https://omdb-api-filmise.vercel.app)**

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
- [ ] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [ ] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [△] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.

## 고찰

- 2-3주간 개인 건강문제로 JavaScript 공부가 많이 부족한 상태
  - 아직 지식이 부족하여 스스로 개발하기는 어려움
  - 제공된 강의를 보며 최대한 이해하면서 작업해내는 것이 목표였음
  - 온전히 다 이해하지 못했기 때문에 아쉬움이 많이 남음
- 강의를 들으며 어려웠던 내용, 시도했지만 실패한 선택사항들을 리스트업 => 추가 학습+적용
  - 무한 스크롤 기능을 추가하고 싶었지만 실패  
    => Scroll event와 IntersectionObserver API의 차이점 정리 + 다음에 사용해보기
  - SCSS에서 변수 적용, 메인·변수 파일 분리 X => 다음 프로젝트에서 사용해보기
  - Component, Router, Store 및 디렉토리 구조에 대해 정리하고 조원들과 나눠보기
