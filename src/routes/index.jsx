import { createBrowserRouter } from 'react-router-dom'
import App from '~/routes/App'
import MovieInfo from '~/components/MovieInfo'

export default createBrowserRouter([
  {
    // path: '페이지 경로'
    // element: '페이지에서 사용할 컴포넌트'
    path: '/',
    element: <App />
  },
  {
    path: '/MovieInfo/:movieId',
    element: <MovieInfo />
  }
])
