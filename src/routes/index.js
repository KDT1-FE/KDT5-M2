import { createRouter } from '../core/assets'
import Home from './Home'
import Search from './SearchPage'
import Movie from './Movie'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/search', component: Search },
  { path: '#/movie', component: Movie }
])
