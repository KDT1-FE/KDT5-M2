import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieSearch() {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  async function getMovies(searchValue) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${searchValue}`,
      {
        method: 'GET'
      }
    )
    const { Search } = await res.json()
    console.log(Search)
    return Search
  }

  // 검색된 value를 searchValue라는 변수에 저장해 getMovies라는 비동기 함수에 인수로 전달
  async function handleSearch(e) {
    //onKeyDown이 Enter키 일 경우 해당 함수가 실행됨
    if (e.key === 'Enter') {
      const searchValue = e.target.value
      try {
        const searchResults = await getMovies(searchValue)
        // 검색한 결과가 나오면 해당 배열을 movies에 입력
        if (searchResults && searchResults.length > 0) {
          setMovies(searchResults)
          // 검색한 결과가 나오지 않으면 movies에 빈 배열 입력
        } else {
          setMovies([])
        }
        //catch 구문으로 에러가 날 경우 빈 배열을 반환하고 에러문구를 콘솔창에 띄움
        //상기 else 구문으로 인에 검색에서 에러가 나는 상황은 나오지 않을것으로 예상
      } catch (error) {
        setMovies([])
        console.error('error:', error)
      }
    }
  }

  function handleMovieInfo(movie) {
    navigate(`/MovieInfo/${movie}`)
  }

  return (
    <>
      <h1>영화 리스트</h1>
      <input
        type="text"
        placeholder="영화제목을 입력하세요"
        // Enter 키를 누를 시 handleSearch 함수 실행
        onKeyDown={handleSearch}
      />
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title} {movie.Year}
            <img
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => handleMovieInfo(movie.imdbID)}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
