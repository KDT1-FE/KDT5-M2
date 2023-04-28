import { createRouter } from '~/core/coreComps.js'
import Home from '~/routes/Home.js'
import Movie from '~/routes/Movie.js'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie }
])
