import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Movie from './Movie'

export default createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/movies/:movieid', element: <Movie /> }
])
