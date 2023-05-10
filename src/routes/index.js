// 프로젝트에서 관리하는 페이지들을 정리하는 파일

import { createRouter } from '../core/CoreMovie'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter([
  { path: '#/', component: Home },        // 해시의 슬래쉬 주소로, Home컴포넌트로 출력
  { path: '#/movie', component: Movie },  // 상세페이지
  { path: '#/about', component: About },
  { path: '.*', component: NotFound }
])