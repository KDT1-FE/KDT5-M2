import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TheHeader from '../components/TheHeader'
import style from '../styles/Movie.module.scss'

export default function Movie() {
  const [selectedMovie, setSelectedMovie] = useState({})
  const params = useParams() //현재 url의 파라미터에서 movieId를 가져옴

  //영화 정보 가져오기
  async function fetchDetailMovie(movieId) {
    try {
      const res = await fetch(
        `https://omdbapi.com/?apikey=13b6291d&i=${movieId}&plot=full`
      )
      const data = await res.json() //영화 정보를 data에 할당
      //요청이 실패하면 error
      if (data.Response === 'False') {
        throw new Error(data.Error)
      }
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
      // 예외처리를 위해 빈 객체를 반환
      return {}
    }
  }

  //처음 렌더링 될때만 실행
  useEffect(() => {
    ;(async () => {
      setSelectedMovie(await fetchDetailMovie(params.movieId))
    })()
  }, [])

  //고해상도 포스터
  const highResPoster = selectedMovie.Poster?.replace(/_SX\d{3}/, '_SX1000')

  return (
    <>
      <TheHeader />
      {selectedMovie && (
        <div className={style.movieDetail}>
          <img
            src={highResPoster}
            alt={selectedMovie.Title}
            className={style.movie__poster}
          />
          <div className={style.movie__info}>
            <h1 className={style.movieTitle}>{selectedMovie.Title}</h1>
            <div className={style.movieLabels}>
              <p>{selectedMovie.Year}</p>
              <p>{selectedMovie.Runtime}</p>
              <p>{selectedMovie.Country}</p>
            </div>
            <div className={style.moviePlot}>{selectedMovie.Plot}</div>
            <div>
              <p className={style.infoTitle}>Ratings</p>
              {selectedMovie.Ratings && (
                <div>
                  <p className={style.infoText}>
                    {selectedMovie.Ratings.map((rating, index) => (
                      <p key={index}>
                        {rating.Source}: {rating.Value}{' '}
                      </p>
                    ))}
                  </p>
                </div>
              )}
            </div>
            <div>
              <p className={style.infoTitle}>Actors</p>
              <p className={style.infoText}>{selectedMovie.Actors}</p>
            </div>
            <div>
              <p className={style.infoTitle}>Director</p>
              <p className={style.infoText}>{selectedMovie.Director}</p>
            </div>
            {/* genre가 배열일때만 표시되도록 */}
            <div className={style.infoTitle}>
              <p>Genre</p>
              {Array.isArray(selectedMovie.Genre) ? (
                <p>
                  {selectedMovie.Genre.map((genre, index) => (
                    <span key={index}>{genre} </span>
                  ))}
                </p>
              ) : (
                <p className={style.infoText}>{selectedMovie.Genre}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
