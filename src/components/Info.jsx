import { React, useEffect } from 'react'
import { Stack } from '@mui/material'
import { Image } from 'mui-image'
import { useLocation } from 'react-router-dom'

const Info = () => {
  const location = useLocation()
  console.log(location.state)
  const movieinfo = location.state
  console.log(location.state.Poster)
  return (
    <>
      <Stack
        direction="row"
        sx={{ height: 'calc(100vh - 120px)' }}>
        <Stack
          flexGrow={1}
          ml={6}>
          <Image src={movieinfo.Poster}></Image>
        </Stack>
        <Stack
          flexGrow={1}
          mr={6}
          justifyContent="space-evenly">
          <Stack flexGrow={3}>Title</Stack>
          <Stack flexGrow={1}>ReleaseDate,RunningTime,Country</Stack>
          <Stack flexGrow={8}>Plot</Stack>
          <Stack flexGrow={1}>Ratings</Stack>
          <Stack flexGrow={1}>RatingsInfo</Stack>
          <Stack flexGrow={1}>Cast</Stack>
          <Stack flexGrow={1}>CastList</Stack>
          <Stack flexGrow={1}>Director</Stack>
          <Stack flexGrow={1}>DirectorName</Stack>
          <Stack flexGrow={1}>Genre</Stack>
          <Stack flexGrow={1}>GenreInfo</Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Info
