import { React, useEffect, useState } from 'react'
import { Stack, Box } from '@mui/material'
import { Image } from 'mui-image'
import { useLocation } from 'react-router-dom'
//영화목록/저장소에서 포스터 클릭시 상세 페이지, useNavigate에서 객체 전달 후 useLocation으로 객체 수신
const Info = () => {
  const location = useLocation()
  const movieinfo = location.state
  const movieID = movieinfo.imdbID

  const [film, setFilm] = useState([])
  const [rating, setRating] = useState([])

  async function getMovie(ID) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${ID}&plot=full`
    )
    const json = await res.json()
    if (json.Response === 'True') {
      setFilm(json)
    }
    return json.Error
  }
  useEffect(() => {
    getMovie(movieID)
  }, [])
  useEffect(() => {
    if (film) {
      setRating()
    }
  }, [])

  // ######################################################################## RENDERING

  return (
    <>
      <Stack
        direction="row"
        spacing={12}
        justifyContent="space-evenly"
        sx={{ height: 'calc(100vh - 120px)' }}
        mr={6}>
        <Stack
          sx={{ width: '40%' }}
          ml={6}>
          <Image
            src={movieinfo.Poster.replace('SX300', 'SX900')}
            fit="fill"
            duration={1000}
            sx={{
              width: '50%',
              height: '50%',
              borderRadius: '16px'
            }}></Image>
        </Stack>

        {/* ############################################################### IMAGE ON LEFT SIDE*/}

        <Stack
          sx={{ width: '60%' }}
          spacing={2}
          justifyContent="space-evenly">
          <Stack
            flexGrow={3}
            color="primary.main"
            sx={{
              fontWeight: '900',
              fontSize: '60px',
              letterSpacing: -4
            }}>
            {film.Title}
          </Stack>
          <Stack
            flexGrow={1}
            direction="row"
            spacing={4}
            color="secondary.main"
            sx={{
              fontWeight: 'bold',
              letterSpacing: -1
            }}>
            <Box>{film.Released}</Box>
            <Box> {film.Runtime}</Box>
            <Box> {film.Country}</Box>
          </Stack>
          <Stack
            flexGrow={7}
            flexWrap="wrap"
            overflow="scroll"
            sx={{
              fontWeight: 'light',
              letterSpacing: 1,
              lineHeight: 1.6
            }}>
            {film.Plot}
          </Stack>
          <Stack
            flexGrow={1}
            color="primary.main"
            sx={{
              fontWeight: 'bold',
              letterSpacing: -1
            }}>
            RATING
          </Stack>
          <Stack
            flexGrow={2}
            direction="row"
            spacing={3}
            sx={{
              fontWeight: 'light',
              letterSpacing: 2
            }}>
            <Stack
              direction="row"
              alignItems="center">
              <Image
                fit="fill"
                duration={1000}
                height="30px"
                src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Internet%20Movie%20Database.png"></Image>
              {film.Ratings?.[0]?.Value ?? 'TBD'}
            </Stack>
            <Stack
              direction="row"
              alignItems="center">
              <Image
                fit="fill"
                duration={1000}
                height="30px"
                src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Rotten%20Tomatoes.png"></Image>
              {film.Ratings?.[1]?.Value ?? 'TBD'}
            </Stack>
            <Stack
              direction="row"
              alignItems="center">
              <Image
                fit="fill"
                duration={1000}
                height="30px"
                src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Metacritic.png"></Image>
              {film.Ratings?.[2]?.Value ?? 'TBD'}
            </Stack>
          </Stack>
          <Stack
            flexGrow={1}
            color="primary.main"
            sx={{
              fontWeight: 'bold',
              letterSpacing: -1
            }}>
            CAST
          </Stack>
          <Stack
            flexGrow={1}
            sx={{
              fontWeight: 'light',
              letterSpacing: 2
            }}>
            {film.Actors}
          </Stack>
          <Stack
            flexGrow={1}
            color="primary.main"
            sx={{
              fontWeight: 'bold',
              letterSpacing: -1
            }}>
            DIRECTOR
          </Stack>
          <Stack
            flexGrow={1}
            sx={{
              fontWeight: 'light',
              letterSpacing: 2
            }}>
            {film.Director}
          </Stack>
          <Stack
            flexGrow={1}
            color="primary.main"
            sx={{
              fontWeight: 'bold',
              letterSpacing: -1
            }}>
            GENRE
          </Stack>
          <Stack
            flexGrow={1}
            sx={{
              fontWeight: 'light',
              letterSpacing: 2
            }}>
            {film.Genre}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Info
