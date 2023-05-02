import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavigationBar from '~/components/NavigationBar'
import MovieInfoTop from '~/components/MovieInfoTop'
import LoadingPage from '~/components/Loading'
import styles from '~/MovieInfo.module.scss'

export default function MovieInfo() {
  // useParams를 이용해 URL params 값 가져오기
  const { movieId } = useParams()
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(false)

  //movieId값을 감시하고 있다가 값이 변화하면 해당 Id를 가진 영화 정보를 가져옴
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
      <MovieInfoTop movies={movies} />
      <NavigationBar />
      {/* fetch하는동안 로딩페이지 render */}
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={styles.movieInfo}>
          <div className={styles.poster}>
            <img
              src={movies.Poster}
              alt={movies.Title}
            />
          </div>
          <div className={styles.details}>
            <div>
              <span className={styles.info}>
                {movies.Year} | {movies.Country}
              </span>
              <span className={styles.info}>
                {movies.Rated} | {movies.Runtime} | {movies.Genre}
              </span>
            </div>
            <div>
              <h2 className={styles.heading}>Plot</h2>
              <p className={styles.plot}>{movies.Plot}</p>
            </div>
            <div>
              <h2 className={styles.heading}>Actors</h2>
              <p className={styles.actors}>{movies.Actors}</p>
            </div>
            <div>
              <h2 className={styles.heading}>Director</h2>
              <p className={styles.director}>{movies.Director}</p>
            </div>
            <div>
              <h2 className={styles.heading}>IMDb Rating</h2>
              <p className={styles.rating}>{movies.imdbRating}/10</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
