import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'

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
              navigate('/movie')
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
