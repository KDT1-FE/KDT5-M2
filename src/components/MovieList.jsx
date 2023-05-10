import { React } from 'react'
import { Box } from '@mui/material'
import { Image } from 'mui-image'
import { useNavigate } from 'react-router-dom'
const MovieList = props => {
  const navigate = useNavigate()
  const Icon = props.action

  return (
    <>
      {props.movies &&
        props.movies.map((movie, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
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
              duration={1000}
              onClick={() =>
                navigate('/movie', {
                  state: { ...movie }
                })
              }
            />
            <Box
              onClick={() => props.handleToWatchClick(movie)}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                border: 1,
                borderRadius: '16px',
                opacity: 0.7,
                borderColor: 'primary.main',
                bgcolor: 'primary.main',
                color: '#fff',
                position: 'absolute',
                bottom: 0,
                right: 0
              }}>
              <Icon />
            </Box>
          </Box>
        ))}
    </>
  )
}

export default MovieList
