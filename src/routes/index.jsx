import { createBrowserRouter } from 'react-router-dom'
import Search from './Search'
import Movie from './Movie'
import About from './About'

export default createBrowserRouter([
  {
    path: '/',
    element: <Search />
  },
  {
    path: '/Movies/:movieID',
    element: <Movie />
  },
  {
    path: '/About',
    element: <About />
  }
])
