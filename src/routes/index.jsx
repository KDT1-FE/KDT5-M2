import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Movie from './Movie'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/movie',
    element: <Movie />,
    errorElement: <NotFound />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NotFound />
  }
])
