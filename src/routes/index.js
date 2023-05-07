import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie'
// import About from './About' 이렇게 쓰면 오류가 남. 아래와 같이 써야 정상 작동함.
import About from '../routes/About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }

])