import { createBrowserRouter } from 'react-router-dom'
import MovieInfo from '~/MovieInfo'
import MovieSearch from '~/MovieSearch'

export default createBrowserRouter([
  {
    path: '/',
    element: <MovieSearch />
  },
  {
    path: '/MovieInfo/:movieId',
    element: <MovieInfo />
  }
])

// path: '페이지 경로'
// element: '페이지에서 사용할 컴포넌트'
