import React from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'
import { Box } from '@mui/material'

const WatchLater = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      Watch later <WatchLaterOutlinedIcon />
    </Box>
  )
}

export default WatchLater
