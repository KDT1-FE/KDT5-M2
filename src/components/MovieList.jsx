import React from 'react'
import { Box } from '@mui/material'
import { Image } from 'mui-image'
import WatchLater from './WatchLater'
//Here give styles to each poster
//??how to scroll by hover
const MovieList = props => {
  const WatchLater = props.watchLater
  return (
    <>
      {props.movies.map((movie, index) => (
        <Box
          key={index}
          sx={{
            '&:hover': {
              opacity: [0.9, 0.8]
            }
          }}>
          <Image
            sx={{ borderRadius: '16px' }}
            src={movie.Poster}
            alt="movie"
            width="200px"
            height="260px"
            fit="fill"
            duration={2000}
          />
          <Box onClick={() => props.handleToWatchClick(movie)}>
            <WatchLater />
          </Box>
        </Box>
      ))}
    </>
  )
}

export default MovieList
