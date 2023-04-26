import React,  { useCallback,useState, useEffect } from 'react'
import axios from '../api/axios'
import './Row.scss'

const Row = ({title, fetchUrl}) => {
  const [movies, setMovies] = useState([])

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])

  return (
    <>
      <h2>{title}</h2>
      <div className="rowposters">
        {movies.map((movie) => (
          // eslint-disable-next-line react/jsx-key
          <a href={`${movie.id}`}>
            <div className="poster-container">
              <img 
                key={movie.id}
                className="rowposter"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                alt={movie.name} />
              <div className="poster-title">{movie.title}</div>
            </div>
          </a>
        ))}
      </div>        
      </>
  )
}

export default Row