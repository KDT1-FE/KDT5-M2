import { React, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { Image } from 'mui-image'
import { useLocation } from 'react-router-dom'

const Info = () => {
  const location = useLocation()
  const movieinfo = location.state
  const movieID = movieinfo.imdbID
  const [film, setFilm] = useState([])

  async function getMovie(ID) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${ID}&plot=full`
    )
    const json = await res.json()
    if (json.Response === 'True') {
      console.log(json)
      setFilm(json)
      console.log(json.Ratings[0].Value)
    }
    return json.Error
  }
  useEffect(() => {
    getMovie(movieID)
  }, [movieID])

  return (
    <>
      <Stack
        direction="row"
        sx={{ height: 'calc(100vh - 120px)' }}>
        <Stack
          flexGrow={1}
          ml={6}>
          <Image
            src={movieinfo.Poster}
            width="400px"
            height="520px"></Image>
        </Stack>
        <Stack
          flexGrow={1}
          mr={6}
          justifyContent="space-evenly">
          <Stack flexGrow={3}>{film.Title}</Stack>
          <Stack flexGrow={1}>
            {film.Released}
            {film.Runtime}
            {film.Country}
          </Stack>
          <Stack flexGrow={8}>{film.Plot}</Stack>
          <Stack flexGrow={1}>Rating</Stack>
          <Stack flexGrow={1}>
            {film.Ratings[0].Source}
            {film.Ratings[0].Value}
            {film.Ratings[1].Source}
            {film.Ratings[1].Value}
            {film.Ratings[2].Source}
            {film.Ratings[2].Value}
          </Stack>
          <Stack flexGrow={1}>Cast</Stack>
          <Stack flexGrow={1}>{film.Actors}</Stack>
          <Stack flexGrow={1}>Director</Stack>
          <Stack flexGrow={1}>{film.Director}</Stack>
          <Stack flexGrow={1}>Genre</Stack>
          <Stack flexGrow={1}>{film.Genre}</Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Info
