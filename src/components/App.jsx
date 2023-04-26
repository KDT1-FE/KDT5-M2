import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Stack } from '@mui/material'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined'
// ################################################################################################COMPONENTS BELOW
import MovieList from '~/components/MovieList'
import SearchBox from '~/components/SearchBox'
import MovieListHeading from '~/components/MovieListHeading'
import WatchLater from '~/components/WatchLater'
import RemoveToWatch from '~/components/RemoveToWatch'

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
  // ################################################################################################  INITIAL LOADING WITH USEEFFECT
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const loadList = JSON.parse(localStorage.getItem('WatchList'))
    setToWatch(loadList)
  }, [])

  // ################################################################################################  LOCAL STORAGE
  const saveToLocalStorage = items => {
    localStorage.setItem('WatchList', JSON.stringify(items))
  }

  // ################################################################################################  ADD & REMOVE
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
  const navigate = useNavigate()

  // ################################################################################################  RENDERING  ###################################################
  return (
    <>
      {/* ################################################################################################  HEADER */}
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
              // textShadow: '0 5px 10px #42a5f5',
              letterSpacing: 13
            }}>
            CineMap
          </Button>
          <Button
            sx={{
              fontWeight: 'light',
              letterSpacing: 3
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

        {/*################################################################################################  SEARCHBOX */}

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}></SearchBox>
      </Stack>

      {/* ################################################################################################  MOVIELIST HEADING */}
      {/* 여기서 CSS 변경1!!!!! */}
      <Stack
        mr={6}
        ml={6}
        mb={2}
        sx={{
          color: 'primary.main',
          borderRadius: '16px',
          fontWeight: 'bold',
          letterSpacing: 4
        }}>
        <MovieListHeading heading="MOVIE"></MovieListHeading>
      </Stack>

      {/* ################################################################################################  MOVIELIST */}

      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}
        sx={{
          bgcolor: 'tertiary.main',
          borderRadius: '16px',
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
        <MovieList
          movies={movies}
          handleToWatchClick={addToWatch}
          watchLater={WatchLater}
        />
      </Stack>

      {/*################################################################################################  WATCH LATER HEADING */}
      {/* 여기서 CSS 변경2!!!!! */}
      <Stack
        mr={6}
        ml={6}
        mt={3}
        mb={2}
        sx={{
          color: 'primary.main',
          borderRadius: '16px',
          fontWeight: 'bold',
          letterSpacing: 4
        }}>
        <MovieListHeading heading="WATCH LATER"></MovieListHeading>
      </Stack>

      {/* ################################################################################################  WATCH LATER */}

      <Stack
        direction="row"
        overflow="scroll"
        spacing={2}
        mr={6}
        ml={6}
        sx={{
          bgcolor: 'tertiary.main',
          borderRadius: '16px',
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
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
