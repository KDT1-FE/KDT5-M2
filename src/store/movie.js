import { Store } from '~/core/coreComps'
import axios from 'axios'

const store = new Store({
  searchText: '',
  page: 1,
  year: '',
  movie: {},
  movies: []
})

export default store
export async function requestAll(searchText, year = '', page = 1) {
  const s = `&s=${searchText}`
  const y = `&y=${year}`
  const p = `&page=${page}`
  if (page === 1) {
    store.state.page = 1
    store.state.movies = []
  }
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${s}${y}${p}`,
    method: 'GET'
  })
  if (data.Response === 'True') {
    const movies = data.Search.map(movie => {
      return { imdbID: movie.imdbID, title: movie.Title, poster: movie.Poster }
    })
    store.state.movies = [...store.state.movies, ...movies]
  }
}

export async function getMovieDetails(id) {
  const i = `&i=${id}`
  try {
    const res = await axios(`https://omdbapi.com/?apikey=7035c60c${i}&plot=full`)
    store.state.movie = res.data
  } catch (error) {
    console.log('getNovieDetails:', error)
  }
}

// //화면 출력 함수
// export function renderMovies(ulEl, movies) {
//   ulEl.innerHTML = ''
//   movies.forEach(movie => {
//     const liEl = document.createElement('li')
//     liEl.textContent = movie.Title
//     ulEl.append(liEl)
//   })
// }

// //랜더 함수
// export function renderAll(ulEl, movies) {
//   ulEl.innerHTML = ''
//   movies.forEach(movie => {
//     const liEl = document.createElement('li')
//     const imgEl = document.createElement('img')
//     imgEl.src = movie.Poster
//     liEl.appendChild(imgEl)
//     ulEl.appendChild(liEl)
//   })
// }
