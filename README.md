# 🎬 Movie API Search Page

## 👉🏻 [영화 검색은 Wutcha!]('https://wutcha.netlify.app/')

<br />

---

## ⚒️ 프로젝트 소개

### OMdb Api를 활용한 영화 검색 페이지 제작을 하였습니다.

### 영화 검색과 정보는 영문으로만 지원됩니다.

  <br />

---

## ⚙️ Stacks

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![WebPack](https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white)

### Style

![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

<br />

---

## 🖥️ 화면 구성

|                                                                 메인 페이지                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="600" alt="image" src="https://user-images.githubusercontent.com/83483378/236198695-961389e1-e950-40c3-bc32-5b39a20d7464.png" /> |
|                                                                  검색 결과                                                                  |
| <img width="600" alt="image" src="https://user-images.githubusercontent.com/83483378/236198453-1381e4ff-3d34-4c24-baae-e3d08bd19c01.png" /> |
|                                                          상세 페이지 About 페이지                                                           |
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/83483378/236199819-c4db1c99-d867-4f9e-8d3a-15cb7b645a90.png">  |

<br />

---

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [x] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [x] 영화와 관련된 기타 기능도 고려해보세요.

<br />

---

## 🔥 주요 기능 피드백

<br />

### 1. 영화 제목으로 검색

```
영화 정보 input 후, Enter나 Click을 통해 검색을 시도하면, apiHandler()를 실행하여 데이터 수신
이는 setMovies를 통해 동적으로 관리
```

<img width="515" alt="image" src="https://user-images.githubusercontent.com/83483378/236204350-12b4d717-73e7-4a32-810c-0c57af531901.png">

<br />

---

### 2. 검색된 영화 목록 출력

```
Category.jsx에서 설정해둔 조건에 따라 axios 통신으로 영화를 검색
```

<img width="380" alt="image" src="https://user-images.githubusercontent.com/83483378/236205426-2b2c7857-3bf1-417a-a069-8e25c7e7d3e8.png">

<br />
<br />

<img width="421" alt="image" src="https://user-images.githubusercontent.com/83483378/236204811-80e13ee3-d83b-4305-aa45-22c1e2fc46ae.png">

<br />

---

### 3. 영화 상세 정보

```
useParams를 통해 movieId 값을 받아와 movieId 값에 따른 axios 통신, data 객체로 반환하여 상세 정보를 반환
```

<img width="518" alt="image" src="https://user-images.githubusercontent.com/83483378/236206551-4a370e38-3821-45c7-9122-65f21c3cffeb.png">

<br />

---

### 4. 한 번의 검색으로 20개 이상의 영화 정보 가져오기

```
불러올 영화의 개수를 page, 연도를 year, 유형을 type으로 정리하고
이 조건들을 useState()를 통해 동적으로 관리
page 개수에 따라 for문을 통해 movies 배열에 push하여 불러올 개수를 조절
```

<br />

<img width="292" alt="image" src="https://user-images.githubusercontent.com/83483378/236209005-b89a2b7a-c26d-4823-8176-8fc79ce53af4.png">
<img width="567" alt="image" src="https://user-images.githubusercontent.com/83483378/236208444-298ccb0a-5687-4f30-af58-4388dd83f5e9.png">

<br />
<br />

<img width="412" alt="image" src="https://user-images.githubusercontent.com/83483378/236208569-35a4fb10-863f-475d-93c1-f264ca6fbb6d.png">

<br />

---

### 5. 영화 목록을 검색하는 동안 로딩 애니메이션 구현

```
useState를 통해 loading을 동적으로 관리, 기본 값은 false
검색 결과를 받아오는 중에는 로딩 스피너를 유지해야 하므로 setLoading(true)를 유지
그러나 try-catch문을 벗어나게 되면 따라서 setLoading(false)로 로딩 스피너를 종료

const [loading, setLoading] = useState(false);
```

<br />

---

### 6. 무한 스크롤 기능 추가

<img width="919" alt="image" src="https://im5.ezgif.com/tmp/ezgif-5-fab64b550c.gif">

<br />

사용한 라이브러리 [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)

```
검색 결과가 있으면(data.Response가 Truty면) setPosts 함수를 사용하여 현재 페이지의 검색 결과를 posts 배열에 추가.
이전 posts 배열과 서버에서 반환된 data.Search 배열을 합함.
```

<img width="919" alt="image" src="https://user-images.githubusercontent.com/83483378/236242060-1821b68c-ea30-4288-931d-5934ae7443a4.png">

<br />

---

### 7. 영화 포스터가 없을 경우 대체 이미지를 출력

```
altImage는 movie.Poster의 값이 "N/A"일 때 대체 이미지로 사용.
즉, 만약 movie.Poster의 값이 "N/A"라면, 대신 altImage의 이미지를 background로 사용
```

<img width="919" alt="image" src="https://user-images.githubusercontent.com/83483378/236248666-158109e5-b9fc-463e-a2f4-88751c39fab7.png">

<br />

---

### 8. 영화 상세정보가 출력되기 전에 로딩 애니메이션 구현

<img width="919" alt="image" src="https://im5.ezgif.com/tmp/ezgif-5-d9e36df229.gif">

```
axios 통신 전에 보여질 스켈레톤을 구현해야 하므로, bigPoster에 조건을 걸었다.
Poster가 Falsy면 Skelton을 랜딩하고, Truthy면 상세정보가 출력될 준비가 되었으므로 정상적으로 Poster를 출력함.
```

<img width="919" alt="image" src="https://user-images.githubusercontent.com/83483378/236250431-9f5691a3-9534-4571-bb69-64f046837080.png
">

<br />

---

### 9. 영화 상세정보 포스터를 고해상도로 출력

<br />

- replace 메소드를 통해 Poster 리사이징

```
const bigPoster = movie.Poster ? movie.Poster.replace("SX300", "SX500") : "";
```

<br />

---

## 🌵 셀프 피드백

- 제시된 예제가 있어 큰 틀을 벗어나진 않았지만, 최대한 직접 만들어보려 노력하였습니다.
- 처음으로 scss를 이용해 스타일링을 해보았고, 모듈화 또한 처음 경험해보았습니다.
- 비록 라이브러리를 이용하였지만, 무한 스크롤을 구현하면서 리액트를 더 공부할 수 있었습니다.
- 더욱이 React 학습을 심도있게 해야함을 느꼈습니다.
- 상세한 README 작성을 통해 다시 회고하며 복습할 수 있도록 정리하였습니다.

<br />

---

## 💧 아쉬운 점

- 비교적 동적인 페이지를 만들 지 못했습니다.
- API 호출을 다루는 방식이 서툴렀다고 생각합니다.
- 세세하게 컴포넌트를 나누지 못한 것 같아, 다소 난잡하게 보이는 JSX가 있습니다.
- props를 더 적극적으로 활용하지 못한 아쉬움이 있습니다.
