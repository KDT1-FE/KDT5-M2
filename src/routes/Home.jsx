import MovieList from '../component/MovieList'
import { useState, useEffect } from 'react'
import SearchBox from '../component/SearchBox'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [show, hide] = useState({ display: 'block' })

  const getMovieRequest = async (searchValue, page = 1) => {
    const p = `&page=${page}`
    const secondP = `&page=${page + 1}`

    const res = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchValue}${p}`
    )
    const json = await res.json()

    const res2 = await fetch(
      `https://omdbapi.com?apikey=7035c60c&s=${searchValue}${secondP}`
    )
    const json2 = await res2.json()

    if (json.Response === 'True') {
      const movieList = [...json.Search, ...json2.Search]
      setMovies(movieList)
      hide({ display: 'none' })
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])
  // useEffect 안쓰고 엔터키 눌렀을 때 서치 밸류가 작동하도록...

  const clickBtn = () => {
    getMovieRequest(searchValue)
  }

  return (
    <div className="container">
      <h1 className="logo">
        <span>OMDb API</span>
        <br />
        THE OPEN MOVIE DATABASE
      </h1>
      <div className="search">
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <button
          className="btn"
          onClick={clickBtn}>
          Search
        </button>
      </div>
      <div className="movie-list">
        <div
          className="initial"
          style={show}>
          Search for the movie title!
        </div>
        <MovieList movies={movies} />
      </div>
    </div>
  )
}
