import { createBrowserRouter } from 'react-router-dom'
import App from '~/routes/App'
import MovieInfo from '~/components/MovieInfo'
import MovieList from '~/components/MovieList'

export default createBrowserRouter([
  {
    // path: '페이지 경로'
    // element: '페이지에서 사용할 컴포넌트'
    path: '/',
    element: <App />
    // // 하위 경로로 MovieList 설정시 props를 제대로 넘겨주지 못하는 문제 해결실패
    // children: {
    //   path: 'MovieList',
    //   element: <MovieList />
    // }
  },
  {
    path: '/MovieInfo/:movieId',
    element: <MovieInfo />
  }
])
