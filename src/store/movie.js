import { Store } from '~/core/coreComps'
import axios from 'axios'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  year: '',
  movie: {},
  movies: [],
  loading: false,
  message: 'Search for th movie title!'
})

//영화 정보 이것저것
export default store
export async function requestAll(searchText, year = '', page = 1) {
  const s = `&s=${searchText}`
  const y = `&y=${year}`
  const p = `&page=${page}`
  store.state.loading = true

  if (page === 1) {
    store.state.movies = []
  }
  try {
    const { data } = await axios({
      url: `https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`,
      method: 'GET'
    })
    //로딩끝
    store.state.loading = false

    if (data.Response === 'True') {
      store.state.pageMax = data.totalResults < 20 ? 1 : Math.ceil(data.totalResults / 10)

      const movies = data.Search.map(movie => {
        return { imdbID: movie.imdbID, title: movie.Title, year: movie.Year, poster: movie.Poster }
      })
      store.state.movies = [...store.state.movies, ...movies]
    }
  } catch (error) {
    console.log('requestAll:', error)
  }
}

//영화 전체 페이지 계산
export async function totalPages(page) {
  await requestAll(store.state.searchText, store.state.year, page)
}

//영화 상세 페이지 정보
export async function getMovieDetails(id) {
  const i = `&i=${id}`
  try {
    const res = await axios(`https://omdbapi.com/?apikey=7035c60c${i}&plot=full`)
    store.state.movie = res.data
  } catch (error) {
    console.log('getMovieDetails:', error)
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
