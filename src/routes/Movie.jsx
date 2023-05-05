import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
`
const Inner = styled.div`
  width: 50vw;
`
const Title = styled.div`
  font-size: 50px;
`
export default function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  async function fetchDetailMovie() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}`
    )
    return await res.json()
  }
  useEffect(() => {
    ;(async () => {
      setMovie(await fetchDetailMovie())
    })()
  }, [])
  return (
    <Container>
      <Title>{movie.Title}</Title>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <Inner>
        <p>{movie.Plot}</p>
      </Inner>
    </Container>
  )
}
