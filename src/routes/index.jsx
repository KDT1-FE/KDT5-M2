import { createBrowserRouter } from 'react-router-dom'
import App from '~/routes/App'
import MovieInfo from '~/components/MovieInfo'
import About from '~/components/About'
// import MovieList from '~/components/MovieList'

export default createBrowserRouter([
  {
    path: '/',
    element: <App />
    // MovieList를 하위 경로로 설정시 movies라는 props를 App에서 제대로 넘겨주지 못하는 문제로 주석처리
    // children: {
    //   path: 'MovieList',
    //   element: <MovieList />
    // }
  },
  {
    path: '/MovieInfo/:movieId',
    element: <MovieInfo />
  },
  {
    path: '/About',
    element: <About />
  }
])
