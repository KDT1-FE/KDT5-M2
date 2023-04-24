import React from 'react'
import { Box } from '@mui/material'
//Here give styles to each poster
//??how to scroll by hover
const MovieList = props => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Box key={index}>
          <img
            src={movie.Poster}
            alt="movie"
            width="200px"
            height="260px"
          />
        </Box>
      ))}
    </>
  )
}

export default MovieList
