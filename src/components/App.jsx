import { React, useEffect, useState } from 'react'
import MovieList from './MovieList'
import SearchBox from './SearchBox'
import MovieListHeading from '~/components/MovieListHeading'
import { Button, Stack, ButtonGroup } from '@mui/material'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'
import WatchLater from './WatchLater'
import RemoveToWatch from './RemoveToWatch'

const App = () => {
  const [movies, setMovies] = useState([])
  const [toWatch, setToWatch] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = `https://omdbapi.com/?s=${searchValue}&apikey=7035c60c`
    const res = await fetch(url)
    const json = await res.json()

    if (json.Response === 'True') {
      setMovies(json.Search)
    }
  }
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  const addToWatch = movie => {
    const watchList = [...toWatch, movie]
    setToWatch(watchList)
  }
  const removeToWatch = movie => {
    const watchList = toWatch.filter(li => li.imdbID !== movie.imdbID)
    setToWatch(watchList)
  }

  return (
    <>
      {/* HEADER */}
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
        {/* BEGINNING - SEARCHBOX INPUT */}
        <SearchBox
          color="secondary"
          searchValue={searchValue}
          setSearchValue={setSearchValue}></SearchBox>
      </Stack>
      {/* MOVIELIST HEADING */}
      <Stack>
        <MovieListHeading heading="MOVIE"></MovieListHeading>
      </Stack>
      {/* MOVIELIST */}
      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}>
        {/* <App  /> */}
        <MovieList
          movies={movies}
          handleToWatchClick={addToWatch}
          watchLater={WatchLater}
        />
      </Stack>
      {/* WATCH LATER HEADING */}
      <Stack>
        <MovieListHeading heading="Watch Later"></MovieListHeading>
      </Stack>
      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}>
        {/* <App  /> */}
        <MovieList
          movies={toWatch}
          handleToWatchClick={removeToWatch}
          watchLater={RemoveToWatch}
        />
      </Stack>
    </>
  )
}

export default App
