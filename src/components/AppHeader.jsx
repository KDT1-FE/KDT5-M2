import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'
//검색영역 제외 App.jsx내의 헤더와 동일
const AppHeader = () => {
  const navigate = useNavigate()

  return (
    <>
      {' '}
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={3}
        borderBottom={2}
        borderColor="tertiary.main"
        p={2}>
        <Stack direction="row">
          <Button
            startIcon={<TheatersOutlinedIcon />}
            sx={{
              fontWeight: 900,
              mx: '30px',
              letterSpacing: 13
            }}
            onClick={() => {
              navigate('/')
            }}>
            CineMap
          </Button>
          <Button
            sx={{
              fontWeight: 'light',
              letterSpacing: 3
            }}
            onClick={() => {
              navigate('/')
            }}>
            Search
          </Button>
          <Button
            sx={{
              fontWeight: 'light',
              letterSpacing: 3
            }}
            onClick={() => {
              navigate('/movie', {
                state: {
                  Title: 'Midnight in Paris',
                  Year: '2011',
                  imdbID: 'tt1605783',
                  Type: 'movie',
                  Poster:
                    'https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg'
                }
              })
            }}>
            Movie
          </Button>
          <Button
            sx={{
              fontWeight: 'light',
              letterSpacing: 3
            }}
            onClick={() => {
              navigate('/about')
            }}>
            About
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default AppHeader
