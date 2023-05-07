import axios from "axios";
// axios는 설치해야하는 HTTP 비동기 통신 라이브러리 이다. 많은 기능을 가지고 있다.
// 자바스크립트에 내장되어 있는 fetch가 있다. axios보다는 기능이 적어 간단한 기능 구현에 사용된다.

// 해당 비동기 함수는 fetchMovies(inputText)이다. 
export async function fetchMovies(inputText, page = '') {
  const { data } = await axios({ // axios를 객체데이터 data로 받아 온다. axios() 비동기 통신 라이브러리를 사용한다. 그리고 await를 사용하여 해당 정보를 '기다려서' 받는다.
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&page=${page}`, // API의 경로를 입력한다.
    method: "GET", // 메서드는 GET로 받는다.
  });
  //입력된 data를 찾기위해 data.Search를 입력한다.
  //
  return data.Search || [];
}

console.log(fetchMovies())