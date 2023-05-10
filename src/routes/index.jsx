import { createBrowserRouter } from 'react-router-dom'
import Home from '~/routes/Home'
import About from '~/routes/About'
import Movie from '~/routes/Movie'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/movie',
    element: <Movie />
  },
  {
    path: '/about',
    element: <About />
  }
])
