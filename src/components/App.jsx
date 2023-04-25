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
  // ################################################################################################ INITIAL LOADING WITH USEEFFECT
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const loadList = JSON.parse(localStorage.getItem('WatchList'))
    setToWatch(loadList)
  }, [])

  // ################################################################################################ LOCAL STORAGE
  const saveToLocalStorage = items => {
    localStorage.setItem('WatchList', JSON.stringify(items))
  }

  // ################################################################################################ ADD & REMOVE
  const addToWatch = movie => {
    const watchList = [...toWatch, movie]
    setToWatch(watchList)
    saveToLocalStorage(watchList)
  }
  const removeToWatch = movie => {
    const watchList = toWatch.filter(li => li.imdbID !== movie.imdbID)
    setToWatch(watchList)
    saveToLocalStorage(watchList)
  }
  // ################################################################################################ RENDERING
  return (
    <>
      {/* ################################################################################################ HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={4}>
        <Stack direction="row">
          <Button startIcon={<TheatersOutlinedIcon />}>CineMap</Button>
          <Button>Search</Button>
          <Button>Movie</Button>
          <Button>About</Button>
        </Stack>

        {/*################################################################################################  SEARCHBOX */}

        <SearchBox
          color="secondary"
          searchValue={searchValue}
          setSearchValue={setSearchValue}></SearchBox>
      </Stack>

      {/* ################################################################################################ MOVIELIST HEADING */}

      <Stack>
        <MovieListHeading heading="MOVIE"></MovieListHeading>
      </Stack>

      {/* ################################################################################################ MOVIELIST */}

      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}
        sx={{ bgcolor: 'tertiary.main', borderRadius: '16px' }}>
        <MovieList
          movies={movies}
          handleToWatchClick={addToWatch}
          watchLater={WatchLater}
        />
      </Stack>

      {/*################################################################################################ WATCH LATER HEADING */}

      <Stack>
        <MovieListHeading heading="Watch Later"></MovieListHeading>
      </Stack>

      {/* ################################################################################################ WATCH LATER */}

      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}
        sx={{ bgcolor: 'tertiary.main', borderRadius: '16px' }}>
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
