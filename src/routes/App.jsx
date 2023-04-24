import { React, useEffect, useState } from 'react'
import MovieList from './MovieList'

const App = () => {
  const [movies, setMovies] = useState([])

  const getMovieRequest = async () => {
    const url = 'https://omdbapi.com/?s=happy&apikey=7035c60c'
    const res = await fetch(url)
    const json = await res.json()

    setMovies(json.Search)
  }
  useEffect(() => {
    getMovieRequest()
  }, [])
  return (
    <>
      <MovieList movies={movies} />
    </>
  )
}

export default App
