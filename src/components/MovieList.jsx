import { useNavigate } from 'react-router-dom'
import styles from './MovieList.module.scss'

export default function MovieList(props) {
  const navigate = useNavigate()

  // 포스터를 클릭하면 해당 영화 정보페이지로 이동
  function handleMovieInfo(movie) {
    navigate(`/MovieInfo/${movie}`)
  }

  return (
    <>
      <ul className={styles.movieList}>
        {props.movies.map(movie => (
          <li key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handleMovieInfo(movie.imdbID)}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
