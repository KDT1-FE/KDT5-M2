import axios from 'axios'

//비동기 요청 함수
export async function request(title, year = '', page = 1) {
  const s = `&s=${title}`
  const y = `&y=${year}`
  const p = `&page=${page}`
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${s}${y}${p}}`,
    method: 'GET'
  })
  console.log(data.Search)
  return data.Search
}

//화면 출력 함수
export function renderMovies(ulEl, movies) {
  ulEl.innerHTML = ''
  movies.forEach(movie => {
    const liYearEl = document.createElement('li')
    liYearEl.textContent = movie.Year
    const liEl = document.createElement('li')
    liEl.textContent = movie.Title
    const imgEl = document.createElement('img')
    imgEl.src = movie.Poster
    ulEl.appendChild(liYearEl)
    liEl.appendChild(imgEl)
    ulEl.appendChild(liEl)
  })
}
