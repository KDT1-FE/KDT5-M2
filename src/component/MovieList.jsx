import { NavLink } from 'react-router-dom'

const MovieList = props => {
  return (
    <>
      {props.movies &&
        props.movies.map(movie => (
          <NavLink
            to={`/movies/=${movie.imdbID}`}
            className="img-container"
            key={movie.imdbID}>
            <div className="info">
              <div className="year">{movie.Year}</div>
              <div className="title">{movie.Title}</div>
            </div>
            <img
              src={movie.Poster}
              alt="movie"
            />
          </NavLink>
        ))}
    </>
  )
}
//navlink 사용
//<NavLink to={`/movies/${movie.imdbID}`}></NavLink>

export default MovieList
//props 사용하기
