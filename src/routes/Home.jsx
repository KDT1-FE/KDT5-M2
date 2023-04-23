import AppBar from '@mui/material/AppBar'
import { theme } from './Theme'
import { Button, Stack, ButtonGroup, ThemeProvider } from '@mui/material'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'

export default function Home() {
  return (
    <Stack direction="row">
      <Button
        startIcon={<TheatersOutlinedIcon />}
        color="primary">
        CineMap
      </Button>{' '}
      <ButtonGroup
        variant="text"
        aria-label="text button group">
        <Button>Search</Button>
        <Button>Movie</Button>
        <Button>About</Button>
      </ButtonGroup>
    </Stack>
  )
}
