import App from '~/components/App'
import { Button, Stack, ButtonGroup, Input } from '@mui/material'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'

export default function Home() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={4}>
        <ButtonGroup
          variant="text"
          aria-label="text button group">
          <Button
            startIcon={<TheatersOutlinedIcon />}
            color="primary">
            CineMap
          </Button>
          <Button>Search</Button>
          <Button>Movie</Button>
          <Button>About</Button>
        </ButtonGroup>
        <Input placeholder="Search"></Input>
      </Stack>
      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}>
        <App />
      </Stack>
    </>
  )
}
