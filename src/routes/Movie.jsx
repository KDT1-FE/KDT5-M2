import { useEffect, useState } from 'react'

export default function Movie() {
  const [movieInfo, setMovieInfo] = useState({})
  async function getMovie(id) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
    )
    const json = await res.json()
    console.log(json)

    if (json.Response === 'True') {
      return setMovieInfo(json)
    }
    return json.Error
  }

  const para = document.location.href.split('=').pop()
  useEffect(() => {
    getMovie(para)
  }, [])

  let bigPoster = undefined

  if (movieInfo.Poster) {
    bigPoster = movieInfo.Poster.replace('SX300', 'SX700')
  }

  return (
    <>
      <div className="the-movie wrap">
        <img
          src={bigPoster}
          alt="poster"
        />
        <div className="specs">
          <div className="title">{movieInfo.Title}</div>
          <div className="labels">
            <span>{movieInfo.Released}</span>
            &nbsp;/&nbsp;
            <span>{movieInfo.Runtime}</span>
            &nbsp;/&nbsp;
            <span>{movieInfo.Country}</span>
          </div>
          <div className="plot">{movieInfo.Plot}</div>

          {/* <div>
            <h3>Ratings</h3>
            {movieInfo.Ratings &&
              movieInfo.Ratings.map(rating => {
                return (
                  <p>
                    {rating.Source} - {rating.Value}
                  </p>
                )
              }).join('')}
          </div> */}
          <div>
            <h3>Actors</h3>
            <p>{movieInfo.Actors}</p>
          </div>
          <div>
            <h3>Director</h3>
            <p>{movieInfo.Director}</p>
          </div>
          <div>
            <h3>Production</h3>
            <p>{movieInfo.Production}</p>
          </div>
          <div>
            <h3>Genre</h3>
            <p>{movieInfo.Genre}</p>
          </div>
        </div>
      </div>
    </>
  )
}
