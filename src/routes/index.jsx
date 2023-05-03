import { createBrowserRouter } from 'react-router-dom'
import Home from '~/routes/Home.jsx'
import Detail from '~/routes/Detail.jsx'
import About from '~/routes/About.jsx'
import Loading from '~/components/loading.jsx'


export default createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/loading',
    element: <Loading />,
  }
])
