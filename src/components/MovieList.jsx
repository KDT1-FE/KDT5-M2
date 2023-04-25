import { useNavigate } from 'react-router-dom'

export default function MovieList(props) {
  const navigate = useNavigate()
  function handleMovieInfo(movie) {
    navigate(`/MovieInfo/${movie}`)
  }

  return (
    <>
      <ul>
        {props.movies.map(movie => (
          <li key={movie.imdbID}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handleMovieInfo(movie.imdbID)}
            />
            {movie.Title}
          </li>
        ))}
      </ul>
    </>
  )
}
