import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetailById } from '~/api'
import { saveMyMovie, deleteMovie, isSavedByMovieId } from '../storage'
import AppHeader from '~/components/AppHeader'
import styles from './Detail.module.scss'
import imdbIcon from '/public/icon_imdb.png'
import rottenIcon from '/public/icon_rotten.png'
import metacriticIcon from '/public/icon_metacritic.png'

export default function Detail() {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [movie, setMovie] = useState({})
  const [bigPoster, setBigPoster] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    getMovieDetail()
    const saved = isSavedByMovieId(params.id)
    setSaved(saved)
  }, [])

  useEffect(() => {
    const poster = movie.Poster?.replace('SX300', 'SX500')
    setBigPoster(poster)
  }, [movie])

  const getMovieDetail = async () => {
    setIsLoading(true)
    const movie = await getMovieDetailById(params.id)
    setMovie(movie)
    setIsLoading(false)
  }

  const onMyMoviesChecked = () => {
    if (saved) {
      deleteMovie(params.id)
    } else {
      saveMyMovie(movie)
    }
    setSaved(!saved)
  }

  return (
    <div className={styles.detail}>
      <AppHeader />
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={saved}
          onChange={onMyMoviesChecked}
          id="my-movies"
        />
        <label htmlFor="my-movies"></label>
        <h1
          className={
            isLoading ? `${styles.title} ${styles.skeleton}` : styles.title
          }>
          {movie.Title}
        </h1>
        <div
          className={
            isLoading
              ? `${styles.released} ${styles.skeleton} ${styles.sub}`
              : styles.released
          }>
          {movie.Released}
        </div>
        <div className={styles.specs}>
          {isLoading ? (
            <div className={`${styles.skeleton}`}></div>
          ) : (
            <div
              style={{
                backgroundImage: `url(${bigPoster})`
              }}
              className={
                bigPoster !== 'N/A'
                  ? styles.poster
                  : `${styles.poster} ${styles['no-image']}`
              }></div>
          )}

          <div className={styles.infos}>
            <div>
              <h4>런타임</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Runtime}
              </p>
            </div>
            <div>
              <h4>국가</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Country}
              </p>
            </div>
            <div>
              <h4>장르</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Genre}
              </p>
            </div>
            <div>
              <h4>감독</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Director}
              </p>
            </div>
            <div>
              <h4>출연자</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Actors}
              </p>
            </div>
            <div>
              <h4>제작사</h4>
              <p className={isLoading ? styles['skeleton-description'] : ''}>
                {movie.Production}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.plot}>
          <h4>줄거리</h4>
          <p
            className={
              isLoading ? `${styles.plottext} ${styles.skeleton}` : ''
            }>
            {movie.Plot}
          </p>
        </div>

        <div className={styles.ratings}>
          <h4>평점</h4>
          {isLoading ? (
            <div className={styles.skeleton}></div>
          ) : (
            <ul>
              {movie.Ratings?.map((rating, index) => {
                return (
                  <RatingItem
                    rating={rating}
                    key={index}
                  />
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

function RatingItem({ rating }) {
  switch (rating.Source) {
    case 'Internet Movie Database':
      return (
        <li>
          <img
            src={imdbIcon}
            alt="Internet Movie Database"
            className={styles.imdb}
          />
          - <span>{rating.Value}</span>
        </li>
      )
    case 'Rotten Tomatoes':
      return (
        <li>
          <img
            src={rottenIcon}
            alt="Rotten Tomatoes"
            className={styles.rotten}
          />
          - <span>{rating.Value}</span>
        </li>
      )
    case 'Metacritic':
      return (
        <li>
          <img
            src={metacriticIcon}
            alt="Metacritic"
            className={styles.metacritic}
          />
          - <span>{rating.Value}</span>
        </li>
      )
    default:
      return (
        <li>
          ETC - <span>{rating.Value}</span>
        </li>
      )
  }
}
