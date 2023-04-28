import MovieSearch from '~/components/MovieSearch'
import NavigationBar from '~/components/NavigationBar'
import MovieList from '~/components/MovieList'
import LoadingPage from '~/components/Loading'
import { useState } from 'react'
import { getMovies } from '~/components/FetchMovieFunc'
import './App.scss'

export default function App() {
  const [movies, setMovies] = useState([])
  //로딩화면을 구현하기 위한 state 선언
  const [loading, setLoading] = useState(false)

  // 검색된 value를 searchValue라는 변수에 저장해 getMovies라는 비동기 함수에 인수로 전달
  // App.jsx에서 setMovies를 사용하기 위해 파라미터로 추가
  async function handleSearch(e) {
    //onKeyDown이 Enter키 일 경우 해당 함수가 실행됨
    if (e.key === 'Enter') {
      const searchValue = e.target.value
      //Enter키를 입력하는 순간 로딩화면을 보여줌
      setLoading(true)
      try {
        // getMovies 함수 내에 setLoading을 전달해 fetch가 끝난 시점에 로딩화면을 끝내도록 함
        const searchResults = await getMovies(searchValue, setLoading)
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

  return (
    <>
      <header>
        <MovieSearch handleSearch={handleSearch} />
      </header>
      <nav>
        <NavigationBar />
      </nav>
      {/* loading의 값이 참이면 로딩화면을, 거짓이면 MovieList를 보여줌 */}
      <main>{loading ? <LoadingPage /> : <MovieList movies={movies} />}</main>
    </>
  )
}
