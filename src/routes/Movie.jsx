import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TheHeader from '~/components/TheHeader'
import '../styles/Movie.scss'

export default function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()

  async function fetchDetailsMovie() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${params.movieID}&plot=full`
    )
    return await res.json()
  }

  useEffect(() => {
    ;(async () => {
      setMovie(await fetchDetailsMovie())
    })()
  }, [])

  return (
    <>
      <header>
        <TheHeader />
      </header>
      <main className="movie">
        <div className="movie__inner">
          <h3 className="movie__title">{movie.Title}</h3>
          <h4 className="movie__category">
            {movie.Type} | {movie.Genre}
          </h4>
          <ul className="movie__info">
            <li className="movie__info--type">Rleased</li>
            <li className="movie__info--value">{movie.Released}</li>
            <li className="movie__info--type">Runtime</li>
            <li className="movie__info--value">{movie.Runtime}</li>
            <li className="movie__info--type">Country</li>
            <li className="movie__info--value">{movie.Country}</li>
          </ul>
          <div className="movie__content">{movie.Plot}</div>
          <img
            className="movie__poster"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div className="movie__add-container">
            <div className="movie__add">
              <div>
                Metascore <span>{movie.Metascore}</span>
                <br />
                imdbRating <span>{movie.imdbRating}</span>
                <br />
                BoxOffice <span>{movie.BoxOffice}</span>
                <br />
                <br />
                Director <span>{movie.Director}</span>
                <br />
                Writer <span>{movie.Writer}</span>
                <br />
                Actors <span>{movie.Actors}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
