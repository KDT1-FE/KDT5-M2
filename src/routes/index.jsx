import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/movie/:movieId',
    element: <Movie />
  }
])
