## 🎬 2차 과제 : API를 활용한 영화 검색 사이트 만들기
<br>

> 작성자 : 양준용 - 4조  
> 제출 날짜 : (1차) 05.04, (2차:피어 리뷰 후 수정) 5월 7일

<br>

[결과물](https://kdt5-yangjunyong-movie-search.netlify.app/#/)  

<br>

> HTML, CSS, SCSS, JS 활용

<br><br>


## 필수 요구사항

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

<br>

## 선택 요구사항

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [ ] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 영화와 관련된 기타 기능도 고려해보세요.

<br><br>

## 화면구성
|Home|
|:--:|
|![](https://user-images.githubusercontent.com/128226527/236654694-12a94401-bf96-4116-8e81-01eab8a9a0c7.png)|
|Search|
|![](https://user-images.githubusercontent.com/128226527/236654767-6641e477-c492-49a5-ba39-788f44d10dce.png)|
|Movie|
|![](https://user-images.githubusercontent.com/128226527/236654790-e432fce7-e26e-4831-8751-047f8eedef8c.png)|

<br><br>

## 주요기능
<br>

### 1. 한 번의 검색으로 20개 출력   

- if 함수를 활용하여 searchMovies(2)를 추가하여 .btn 클릭 시 영화 리스트가 더 출력이 되도록 설정 

```js
const btnEl = this.el.querySelector('.btn')
btnEl.addEventListener('click', () => {
  if (movieStore.state.searchText.trim()) {
    searchMovies(1)
    searchMovies(2)
    }
  })
```
<br>

---

<br>

### 2. 영화 포스터가 없을 경우 대체 이미지를 출력  

- src에 ${movie.Poster}를 입력하여 포스터를 불러오고, onerror 속성을 사용하여 '스즈메의 문단속' 포스터로 이미지를 대체

```js
<img src="${movie.Poster}"  onerror="this.src='https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86815/86815_1000.jpg'" />
```

<br>

---

<br>

### 3. 영화 상세정보 포스터를 고해상도로 출력  

- replace라는 메서드를 활용하여 'SX1000'을 추가하여 고해상도로 출력

```js
const bigPoster = movie.Poster.replace('SX300', 'SX1000')
```

<br>

---

<br><br>

## 어려웠던 점 
- Intersection Observer API에 대한 지식 부족
- 개봉연도로 검색할 수 있도록 하는 Js 문법 지식 부족 

<br>

## 궁금한 점 
- img 태그를 활용하여 onerror 속성을 통해 대체 이미지를 출력하는 방법 이외에 다른 방법이 있는지 궁금합니다.