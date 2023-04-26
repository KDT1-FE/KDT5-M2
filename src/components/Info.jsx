import { React, useEffect } from 'react'
import { Stack } from '@mui/material'

const Info = () => {
  return (
    <>
      <Stack
        direction="row"
        sx={{ height: 'calc(100vh - 120px)' }}>
        <Stack
          flexGrow={1}
          ml={6}>
          IMAGE
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
