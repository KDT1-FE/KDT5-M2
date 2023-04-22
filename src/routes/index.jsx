import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'

export default createBrowserRouter([
  // path: '페이지 경로'
  // element: '페이지에서 사용할 컴포넌트'
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])
