import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavigationBar from '~/components/NavigationBar'

export default function MovieInfo() {
  // useParams를 이용해 URL params 값 가져오기
  const { movieId } = useParams()
  const [movies, setMovies] = useState({})

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
      )
      const movieData = await res.json()
      console.log(movieData)
      setMovies(movieData)
    }
    getMovies()
  }, [movieId])

  return (
    <>
      <h1>{movies.Title}</h1>
      <NavigationBar />
      <span>{movies.DVD}</span>
      <span>{movies.Country}</span>
      <span>{movies.Actors}</span>
      <span>{movies.Director}</span>
      <img
        src={movies.Poster}
        alt={movies.Title}
      />
      <span>{movies.Plot}</span>
      <span>{movies.imdbRating}</span>
    </>
  )
}
