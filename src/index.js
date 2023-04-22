// import axios from "axios";
import { request, renderMovies } from './movie.js'
const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.movies')

let inputText = ''
const inputHander = () => {
  inputText = inputEl.value
}
inputEl.addEventListener('input', inputHander())

//엔터키 눌렀을때 비동기 실행
const keydownHander = async (event) => {
  if (event.key === 'Enter') {
    const movies = await request(inputText)
    renderMovies(ulEl, movies)
  }
}
inputEl.addEventListener('keydown', keydownHander())

// //비동기 요청 함수
// async function request(inputText) {
//   const { data } = await axios({
//     url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}}`,
//     method: "GET",
//   });
//   // console.log(data.Search);
//   return data.Search;
// }

// //화면 출력 함수
// function renderMovies(ulEl, movies) {
//   ulEl.innerHtml =''
//   movies.forEach((movie) => {
//     const liEl = document.createElement("li");
//     liEl.textContent = movie.Title;
//     ulEl.append(liEl);
//   });
// }

// function renderMovies(ulEl, movies) {
//   ulEl.innerHTML = "";
//   movies.forEach((movie) => {
//     const img = document.createElement("img");
//     img.src = movie.Poster;
//     el.append(img);
//   });
// }
