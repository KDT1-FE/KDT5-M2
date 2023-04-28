import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavigationBar from '~/components/NavigationBar'
import MovieSearch from '~/components/MovieSearch'
import LoadingPage from '~/components/Loading'
import styles from './Movieinfo.module.scss'

export default function MovieInfo() {
  // useParams를 이용해 URL params 값 가져오기
  const { movieId } = useParams()
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getMovies() {
      setLoading(true)
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
      )
      const movieData = await res.json()
      setMovies(movieData)
      setLoading(false)
    }
    getMovies()
  }, [movieId])

  return (
    <>
      <MovieSearch />
      <NavigationBar />
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={styles.movieInfo}>
          <h1>{movies.Title}</h1>
          <div>
            <img
              src={movies.Poster}
              alt={movies.Title}
            />
            <div>
              <span>{movies.DVD}</span>
              <span>{movies.Country}</span>
              <span>{movies.Actors}</span>
              <span>{movies.Director}</span>
              <span>{movies.Plot}</span>
              <span>{movies.imdbRating}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
