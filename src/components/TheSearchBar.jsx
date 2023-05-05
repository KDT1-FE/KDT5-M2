import React, { useState } from 'react'
import { fetchMovies } from '~/core/movie.js'
import styled from 'styled-components'

const SearchBar = styled.div`
  position: absolute;
  top: 30%;
  width: 582px;
  height: 46px;
  padding: 0 20px;
  border-radius: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  border: solid;
`
const Input = styled.input`
  width: 500px;
  border: none;
  margin: 0 10px;
  overflow: auto;
  outline: none;
  font-size: 20px;
`

export default function TheSearchBar({ handleMovieState }) {
  const [inputText, setInputText] = useState('')
  async function getMovie(e) {
    setInputText(e.target.value)

    if (inputText.trim() === '') return
    const movieList = await fetchMovies(inputText)
    handleMovieState(movieList)
  }

  return (
    <SearchBar>
      <span className="material-symbols-outlined">search</span>
      <Input
        type="text"
        value={inputText}
        placeholder="영화를 검색하세요"
        onFocus={e => {
          e.target.placeholder = ''
        }}
        onBlur={e => {
          e.target.placeholder = '영화를 검색하세요'
        }}
        onChange={getMovie}
      />
    </SearchBar>
  )
}
