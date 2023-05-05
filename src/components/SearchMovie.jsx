import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/SearchMovie.module.scss'

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState('') //검색어
  const [movieList, setMovieList] = useState([]) //영화 목록
  const navigate = useNavigate() //페이지 이동

  // 영화검색 API요청 보내기
  async function fetchMovieList(title, year = '', page = 1) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    try {
      const res = await fetch(
        `https://omdbapi.com/?apikey=13b6291d${s}${y}${p}`
      )
      const json = await res.json()
      if (json.Response === 'True') {
        const { Search: movies, totalResults } = json
        return {
          movies,
          totalResults
        }
      }
      return json.Error
    } catch (error) {
      console.log(error)
    }
  }

  //영화 리스트 데이터 받기
  async function handleSearch(event) {
    event.preventDefault()
    const searchResult = await fetchMovieList(searchQuery)
    console.log(searchResult)
    setMovieList(searchResult.movies)
  }

  //각 영화를 누를 때 페이지 이동
  async function handleMovieClick(movieId) {
    navigate(`/movie/${movieId}`)
  }

  //viwemore 버튼 페이지 추가
  async function handleViewMore() {
    // 현재 페이지 + 1 페이지를 가져와서 기존 목록에 추가
    const nextPage = await fetchMovieList(
      searchQuery,
      '',
      Math.ceil(movieList.length / 10) + 1
    )
    setMovieList(prevMovies => [...prevMovies, ...nextPage.movies])
  }

  return (
    <div className={styles.searchMovie}>
      <span className={styles.headerText}>
        <strong>OMDb API</strong>
        <br />
        THE OPEN
        <br />
        MOVIE DATABASE
      </span>
      <div className={styles.searchView}>
        <form
          id="search-form"
          onSubmit={handleSearch}>
          <input
            type="text"
            id="search-input"
            placeholder="Enter movie title"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <ul id={styles.movieList}>
          {movieList.length > 0 &&
            movieList.map(movie => (
              <div
                className={styles.movieItem}
                key={movie.imdbID}
                onClick={() => handleMovieClick(movie.imdbID)}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h2 className={styles.movieTitle}>{movie.Title}</h2>
              </div>
            ))}
        </ul>
        {movieList?.length > 0 && (
          <button
            className={styles.viewMore}
            onClick={handleViewMore}>
            View More
          </button>
        )}
      </div>
    </div>
  )
}
