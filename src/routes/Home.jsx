import React, { useState } from 'react'
import styled from 'styled-components'
import '~/styles/Home.css'
import TheMovieContainer from '~/components/TheMovieContainer'
import TheSearchBar from '~/components/TheSearchBar'
import TheHeader from '~/components/TheHeader'
import TheTitle from '~/components/TheTitle'
const Top = styled.div`
  display: flex;
  width: 100vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
`
const Bottom = styled.div`
  display: flex;
  justify-content: center;
`

export default function Home() {
  const [movies, setMovies] = useState([])
  const handleMovieState = data => {
    setMovies(data)
  }
  return (
    <>
      <TheHeader />
      <TheTitle/>
      <Top>
        <TheSearchBar handleMovieState={handleMovieState} />
      </Top>
      <Bottom>
        <TheMovieContainer movies={movies} />
      </Bottom>
    </>
  )
}
