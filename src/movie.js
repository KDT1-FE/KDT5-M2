import axios from 'axios'

//비동기 요청 함수
export async function request(inputText) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}}`,
    method: 'GET'
  })
  // console.log(data.Search);
  return data.Search
}

//화면 출력 함수
export function renderMovies(ulEl, movies) {
  ulEl.innerHTML = ''
  movies.forEach(movie => {
    const liEl = document.createElement('li')
    liEl.textContent = movie.Title
    ulEl.append(liEl)
  })
}

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
