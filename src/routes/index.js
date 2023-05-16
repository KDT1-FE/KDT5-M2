import { createRouter } from '../core/mainComponent'
import Home from './Home'
import MovieDetails from './MovieDetails'
import About from './About'
import NotFound from './NotFoundPage'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: MovieDetails },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }
])