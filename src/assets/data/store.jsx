import { configureStore, createSlice } from '@reduxjs/toolkit'


let movies = createSlice({
  name: 'movies',
  initialState: {
    list: [],

  },
  reducers: {
    setMovies(state, action) {
      return { list: action.payload }
    },
  }
})

let movieDetail = createSlice({
  name: 'movieDetail',
  initialState: {
    list: [],
  },
  reducers: {
    setDetail(state, action) {
      return { list: action.payload }
    },
  }
})

let movieWord = createSlice({
  name: 'movieWord',
  initialState:
    {
      list: [{ name: '', type: 'Movie', count: 1, year: '' }]
    },
  reducers: {
    setMovieWord(state, action) {
      return { list: action.payload }
    },
    clearMovieWord(state, action) {
      return { list: [{ name: '', type: 'Movie', count: 1, year: "" }] }
    }
  }
})


export let { setMovies } = movies.actions
export let { setMovieWord } = movieWord.actions
export let { setDetail,setRatings } = movieDetail.actions
export let { clearMovieWord } = movieWord.actions


export default configureStore({
  reducer: {
    movies: movies.reducer,
    movieWord: movieWord.reducer,
    movieDetail: movieDetail.reducer
  }
})

