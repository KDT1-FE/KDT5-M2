import { Store } from '../core/bear'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 2,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try {
    for(i=0; i<2; i++) {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
      )
      const { Search, totalResults, Response, Error } = await res.json()
      if (Response === 'True') {
        store.state.movies = [...store.state.movies, ...Search]
        store.state.pageMax = Math.ceil(Number(totalResults) / 10)
      } else {
        store.state.message = Error
      }
      page++
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
    )
    store.state.movie = await res.json()
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
