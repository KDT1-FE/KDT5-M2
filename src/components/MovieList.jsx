import React from 'react'
import { Box } from '@mui/material'
//Here give styles to each poster
//??how to scroll by hover
const MovieList = props => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Box>
          <img
            src={movie.Poster}
            alt="movie"
            width="300px"
            height="390px"
          />
        </Box>
      ))}
    </>
  )
}

export default MovieList
