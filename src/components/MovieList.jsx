import { useNavigate } from 'react-router-dom'
import styles from './MovieList.module.scss'

export default function MovieList(props) {
  const navigate = useNavigate()

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
            {/* <span>{movie.Title}</span> */}
          </li>
        ))}
      </ul>
    </>
  )
}
