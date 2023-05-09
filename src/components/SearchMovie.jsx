import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/SearchMovie.module.scss'

export default function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState('') //검색어
  const [movieList, setMovieList] = useState([]) //영화 목록
  const navigate = useNavigate() //페이지 이동

  //컴포넌트가 Mount되었을 때 실행, 브라우저 세션스토리지에 저장된 검색어, 결과를 가져와서 초기화
  useEffect(() => {
    //sessionStorage의 데이터는 페이지 세션이 끝날 때 제거됨
    const savedQuery = sessionStorage.getItem('searchQuery')
    const savedResults = sessionStorage.getItem('movieList')
    if (savedQuery && savedResults) {
      setSearchQuery(savedQuery)
      setMovieList(JSON.parse(savedResults))
    }
  }, [])

  //검색어와 검색결과가 바뀔 때마다 실행
  useEffect(() => {
    sessionStorage.setItem('searchQuery', searchQuery)
    sessionStorage.setItem('movieList', JSON.stringify(movieList))
  }, [searchQuery, movieList])

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
      Math.ceil(movieList.length / 20) + 1
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
        {/* movieList가 undefined일 경우를 조건 추가*/}
        {movieList?.length === 0 && console.log('No Found Movie')}

        {movieList?.length > 0 && (
          <ul id={styles.movieList}>
            {movieList.map(movie => (
              <div
                className={styles.movieItem}
                key={movie.imdbID}
                onClick={() => handleMovieClick(movie.imdbID)}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  onError={e => {
                    e.target.src =
                      'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                    e.target.alt = '이미지를 불러올 수 없습니다.'
                  }}
                />
                <h2 className={styles.movieTitle}>{movie.Title}</h2>
              </div>
            ))}
          </ul>
        )}
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
