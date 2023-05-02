## 🎞MovieApi Web Page🎞

## 배포 주소
-> https://web-movieapi-6g2llffebnui.sel3.cloudtype.app/

## 예시 사이트 
-> https://stupefied-hodgkin-d9d350.netlify.app/#/


## 📌 유의사항 
-> 모든 디바이스의 최적화 되어있지 않습니다.<br/>

## 📜 프로젝트 소개
->  영화 Api를 이용한 영화 웹페이지 만들기 과제입니다. 
기본틀은 주어진 예시 사이트와 같게 만들었으며 필요한 추가 적인 기능 구현 하였습니다. 


## 시작 가이드
### Requirements
For building and running the application you need:

- [Npm 8.19.3](https://www.npmjs.com/package/npm/v/8.19.3)


### Installation
``` bash
$ git clone git@github.com:KDT1-FE/KDT5-M2.git
$ cd KDT5-M2
```

#### Frontend
```
$ cd KDT5-M2
$ npm install 
$ npm run dev
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        
![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=Vite&logoColor=white)

---
## 화면 구성 📺
| 메인 페이지  | 
| :-------------------------------------------: |
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235584049-e1311998-715c-445b-9df1-3d82d2d100c8.png">| 
| 검색 결과| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235588693-cf602881-0fb2-4529-86b0-62e86efc0f24.png">| 
| 상세 페이지(이전에 보던 포스터가 없을때 기본으로 보이는 상세페이지 )| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235585598-0363a2a3-4343-459d-b67c-cd3349b94597.png">| 
| 상세 페이지(검색 결과에 나온 포스터를 클릭후 보이는 상세페이지 )| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235586832-37958fcc-f1cc-4456-86dc-6b1267aea50f.png">|
| About 페이지| 
|  <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235586925-5e214b27-a9fa-4cd5-a603-0c121daf2c70.png">| 
---
## ✨필수 요구사항✨

- [X] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

---


## 🎈선택 요구사항🎈

- [X]  영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [X]  영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [X]  무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [X]  영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [X]  영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [X]  영화와 관련된 기타 기능도 고려해보세요.
- [X]  영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [X]  차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.

---

## ✨ 필수 요구사항 활용 ✨

#### ⭐️ 1) 영화 검색 기능 
-> input창에 검색 정보를 입력할때 handleChange 의 함수가 실행되고 button 을 클릭하면 props.setData 를 사용해 info 정보를 SearchResult 의 컴포넌트에 데이터를 받아오게 됩니다.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235608457-0b04464b-19b5-4a77-b354-14c6b98767ea.png">
<img width="482" alt="image" src="https://user-images.githubusercontent.com/101441685/235608980-000b77c9-144c-491c-adda-e7772627d8b1.png">


#### ⭐️ 2) 검색조건에 따른 영화 목록 출력
-> api 파라미터 조건 값으로 영화 조건이 검색 됩니다.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235610019-d0098b08-e864-45be-bb0e-61e68d3ed268.png">


#### ⭐️ 3) 영화 상세 정보 
-> useParams를 통해 id값을 받아와 id값이 변하면  fetchData 콜하면서 fetch을 이용하여 get 방식으로 api콜 하여 response 결과를 json 형태로 setMovie 에는 영화정보를<br/>
useData 에는 평점내용을 각각 보관하는 부분 입니다. 

<img width="364" alt="image" src="https://user-images.githubusercontent.com/101441685/235617685-5ec7fdff-fc12-425d-9c7c-fd8df3b55634.png">

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235614683-73c0dda1-feb0-4aef-ba5e-f0bcd657f00a.png">

->  movie(state) 에 담아져 있는 데이터를 이용해 아래와 같이 id 값으로 전달받은 영화 상세 정보를 나타내 주었습니다. 

<img width="710" alt="image" src="https://user-images.githubusercontent.com/101441685/235619756-f08c673c-dc93-44a6-a205-0814c0b6467a.png">

---

## ✨ 선택 요구사항 활용 ✨


#### ✨ 1) 영화 개봉연도로 검색할 수 있도록 만들어보세요. 

-> 검색창 , 연도와 , 시리즈를 선택할수 있는 select 의 부분을 한개의 SearchForm component 로 만들었습니다.  
개봉연도를 선택할수 있는 YearBox 라는 컴포넌트를 만들어 search component 안에 import 하였습니다.

<img width="500" alt="image" src="https://user-images.githubusercontent.com/101441685/235639809-b12eecd3-e165-4421-a858-d7411a84b6af.png">


->input창에 입력할때, select가 선택될때 객체의 이벤트가 일어나는 e.target. 이 공통으로 이뤄지기 때문에, 상위요소인 SearchForm 컴포넌트에 handleChange 의 함수를 생성하여 공통 이벤트 의 속성을 넣어 주었습니다.  < YearBox > 의 컴포넌트에도 동일하게 해당 이벤트를 주기 위하여,handleChange 의 함수를  props로 전달 하였습니다. 

📁Home<br/>
 <br/> L components
 <br/>   L search.jsx
  
<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235646133-0c6e18be-1b6a-4ec3-a2fb-c28f2f4749f4.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235646388-de9c17aa-25d6-4a26-b231-151d4f622020.png">
 
📁Home<br/>
 <br/> L section
 <br/>   L year.jsx
  
 <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235652502-34927fde-b7cd-4be8-b971-9e4bd41ec375.png">


#### ✨ 2) 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요. 
#### ✨ 3) 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
-> 구현모습 

![loadinggif](https://user-images.githubusercontent.com/101441685/235664702-916061df-773a-4309-9ee2-0db9cd45acef.gif)

-> MUI 에서 스켈레톤의 라이브러리를 사용하였습니다.<br/>
"스켈레톤 UI" 이란? <br/>
-> 유저가 원하는 데이터를 받아오는 동안 아무것도 표시되지 않으면  쉽게 지치고 지루함을 느낄수 있습니다. 따라 단순한 색으로 처리하는게 아닌, 
데이터를 가져오는 동안 콘텐츠를 표시하는 컴포넌트 , 데이터를 가져오고 있다는 것을 알려주는 사용자 친화적인 UI를 나타냅니다.<br/> 
스켈레톤 UI의 가장 일반적인 패턴은 흰색 배경과 반짝이는 CSS 애니메이션이 있는 작은 박스 입니다. 

#### 📌 스켈레톤 UI가 필요한 페이지 

<b> 1) 영화 검색 결과 노출 (SearchResult)</b>

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235713663-a606b8a8-5c5a-401b-8b6d-815f11a672f7.png">

-> 스켈레톤의 UI는 로딩중일때 적용이 되야 합니다. 영화데이터를 최대 10개씩 가져오기 때문에 new Array(10) 새로운 10개의 배열을 만들어 map으로 반복하게 만들어 주었습니다.
그후 movie? 의 데이터가 있을때와, 없을때 조건으로 나누었습니다. 
없을때는 설정해둔 적용된 컴포넌트의 모습이 보이게 하였습니다. 

<b> 2) 상세페이지 (DetailPage)</b>

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235722099-008b5586-53b4-494d-aab0-65b44f63e431.gif">

<b> 코드 </b>

<img width="489" alt="image" src="https://user-images.githubusercontent.com/101441685/235724542-bb50e7a5-ea9d-4500-83d8-59223547ec4b.png">

-> 상세 페이지가 로딩중일때 스켈레톤 컴포넌트가 출력됩니다. 

#### ✨ 4) 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.

<img width="577" alt="image" src="https://user-images.githubusercontent.com/101441685/235745520-489fa8e9-29e1-453a-8984-8ce379fbf855.png">

<img width="557" alt="image" src="https://user-images.githubusercontent.com/101441685/235745645-176b3e7f-f5b8-4ea7-923b-cdfb4d992c08.png">

<img width="493" alt="image" src="https://user-images.githubusercontent.com/101441685/235745709-1989832b-74c9-45c9-a989-014a4d811bb8.png">



#### ✨ 5) 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요. 

1) 네트워크에서 받아오는 영화 정보를 보면 아래와 같이 Poster의 데이터가 "N/A" 로 뜨는것을 볼수 있습니다. 

<img width="200" alt="image" src="https://user-images.githubusercontent.com/101441685/235733182-484afb62-0bb7-4e1e-8158-135c8b2dbd89.png">

따라 아래의 로직에서 movie.Poster 와  'N/A' 가 같지 않을시 왼쪽의 로직이 실행되고 같을시 
대체 이미지를 출력하도록 이미지 경로를 넣어 주었습니다. 

<img width="762" alt="image" src="https://user-images.githubusercontent.com/101441685/235728978-d093e3ed-ec55-492e-8380-6d742628e27e.png">

#### ✨ 6) 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)

-> 현재 받아오는 영화 Api 사이트는 실시간 이미지 리사이징이 되고 있다고 합니다. 따라, 데이터로 받아오는 이미지의 크기값을 replace 를 사용하여 SX300 에서<br/>
SX700으로 바꿔주었습니다. 

<img width="400" alt="image" src="https://user-images.githubusercontent.com/101441685/235734664-b139c022-2b72-4bc5-8b13-048dc52f0f60.png">

#### ✨ 7) 영화와 관련된 기타 기능도 고려해보세요.

-> 영화 검색 결과가 나오고 검색 결과에서 포스터를 눌렀을때 상세 페이지에 해당 포스터의 정보가 보여집니다. 하지만, 예시사이트에서는 홈 으로 돌아갔다, 상세 페이지에 들어갔을때
이전의 클릭했던 영화 정보가 보이는게 아닌, 지정된 값의 영화 정보가 보였습니다. 따라 이 문제를 해결하고자, 
페이지의 상태를 공유하는 기능을 구현하였습니다. 

<b> ContextApi 활용하기 </b>
 
 ```
 Context API는 리액트에 내장된 기능으로 Props를 사용하지 않아도 특정 값이 필요한 컴포넌트끼리 쉽게 값을 공유할 수 있게 해 준다.
주로 프로젝트에서 전역 상태를 관리할 때 많이 사용한다. 
새로운 Context를 만들 때는 createContext 함수를 사용한다.
 
 ```
 🧡 1. createContext 만들기

-> useState를 사용해 간단한 문자열 상태 값을 관리하고, Provider의 value에는 value와 setValue를 넣어줬습니다.
 
<img width="530" alt="image" src="https://user-images.githubusercontent.com/101441685/235738024-e4091125-f717-47f5-aad8-26966e2d07f2.png">

💚 2. PageContextProvider라는 컴포넌트 안에 다른 페이지 컴포넌트를 넣어주면 하위에 있는 컴포넌트 안에서 useState로 선언된 value 와 setVlue를 Context 통해서 공유할 수 있습니다.

<img width="530" alt="image" src="https://user-images.githubusercontent.com/101441685/235739594-3edfded1-9a35-40d8-8598-7238bbe67e49.png">

💜 3. 상태가 공유되야 하는 header 부분의 Movie페이지 , 검색 결과 값이 나오는 결과 포스터 페이지 

<b> header 부분의 Movie페이지 </b>

<img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235738420-16e827c7-9e1c-46ea-ba93-e1a2e899de50.png">

 -> PageContext 의 value 를 사용하여 movie경로 의 뒷부분 {id} 의 부분을 {value} 로 바꿔 주었습니다. 
 
 <b> 검색 결과 값이 나오는 결과 포스터 페이지 </b>
 
 -> 포스터를 클릭하면 일어나는 함수 onClickMovie 함수가 실행되고 파라미터로 받은 value 값을 setValue를 통하여 저장하였습니다. 
 그후, navigate를 이용해 받아온 value 값의 영화 데이터로 상세 페이지가 보여집니다. 
 
 <img width="600" alt="image" src="https://user-images.githubusercontent.com/101441685/235741423-c65a9fd3-9197-4f23-97e5-d979cb4c5bf7.png">

---

##  🎇 느낀점 

-> 만들어진 api를 이용해 데이터를 출력하는 예제들을 많이 보아서 쉽게 접근 할수 있다고 생각 했습니다.<br/>
받아오는 api의 로직도 지정해 주셔서 데이터를 받아오는 부분은 조금 수월하게 구현할수 있었습니다.<br/>
처음 영화 api의 프로젝트를 진행하며 컴포넌트 부분에서 신경을 쓰고 설계를 하였습니다.<br/>
컴포넌트를 최대한 나눠서 구현하다보니 props에 대해서 확실하게 깨닫고 쓸수 있는 계기가 되었습니다.<br/>
module.scss 를 사용하여 scss를 조금더 다양하게 활용할수 있게 되었습니다. <br/>
또한, 그동안 구현해 보지 못하는 무한스크롤기능을 구현함으로써 다양한 기능 구현을 경험할수 있게 되었습니다.<br/> 


##  🎇 아쉬운점

->  api키를 환경 변수로 만들지 못하였습니다. <br/>
->  변수명을 의미있게 짓지 못한것 같아서 아쉬운 부분이 있습니다. <br/>
->  조금더 다양한 기능을 구현하지 못한 아쉬움이 있습니다. 

-------


