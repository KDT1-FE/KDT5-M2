import MovieSearch from '~/components/MovieSearch'
import NavigationBar from '~/components/NavigationBar'
import MovieList from '~/components/MovieList'
import LoadingPage from '~/components/Loading'
import { useState } from 'react'
import './App.scss'

export default function App() {
  const [movies, setMovies] = useState([])
  //로딩화면을 구현하기 위한 state 선언
  const [loading, setLoading] = useState(false)
  // 가져올 영화의 수를 지정하는 state 선언
  const [viewNumber, setViewNumber] = useState('1')

  async function getMovies(searchValue, setLoading) {
    // viewNumber에 따라 반복 호출되는 영화 목록을 저장할 배열 선언
    let results = []
    // viewNumber는 문자열이므로 숫자로 변환한 후 1부터 viewNumber까지 인수로 넣어 반복호출
    for (let i = 1; i <= parseInt(viewNumber); i++) {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${searchValue}&page=${i}`,
        {
          method: 'GET'
        }
      )
      const { Search } = await res.json()
      console.log(Search)
      // 빈 배열과 호출한 내용의 배열을 concat 메소드로 병합
      results = results.concat(Search)
    }
    //fetch가 끝나면 로딩 화면 대신 MovieList를 표시함
    setLoading(false)
    return results
  }

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
        <MovieSearch
          handleSearch={handleSearch}
          viewNumber={viewNumber}
          setViewNumber={setViewNumber}
        />
      </header>
      <nav>
        <NavigationBar />
      </nav>
      {/* loading의 값이 참이면 로딩화면을, 거짓이면 MovieList를 보여줌 */}
      <main>{loading ? <LoadingPage /> : <MovieList movies={movies} />}</main>
    </>
  )
}
