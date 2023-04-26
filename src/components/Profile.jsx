import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Stack, Avatar, Link, Tooltip, Box, Button } from '@mui/material'

const Profile = () => {
  const navigate = useNavigate()

  return (
    <Stack
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="center">
      <Avatar
        alt="HOOKOR"
        src="https://avatars.githubusercontent.com/u/115582699?v=4"
        sx={{
          border: 5,
          borderColor: '#e0e3e7',
          width: 300,
          height: 300,
          boxShadow: '15px 15px 25px #0059B2',
          mt: 1,
          mb: 4
        }}></Avatar>
      <Tooltip
        title="Visit my Github!"
        placement="right"
        enterDelay={200}
        leaveDelay={100}>
        <Link
          href="https://github.com/hookor"
          underline="none"
          sx={{
            fontWeight: 500,
            fontSize: '40px',
            letterSpacing: -4,
            '&:hover': { textShadow: '0 5px 35px #42a5f5' }
          }}>
          HOOKOR
        </Link>
      </Tooltip>
      <Box
        sx={{
          fontSize: '16px',
          fontWeight: 300,
          letterSpacing: 0
        }}>
        gerrard1219@gmail.com
      </Box>
      <Box
        sx={{
          fontSize: '16px',
          fontWeight: 300,
          letterSpacing: 0
        }}>
        +82-10-1234-5678
      </Box>
      <Button
        sx={{
          fontSize: '30px',
          fontWeight: 300,
          letterSpacing: -4
        }}
        onClick={() => {
          navigate('/')
        }}>
        CINEMAP
      </Button>
    </Stack>
  )
}

export default Profile
