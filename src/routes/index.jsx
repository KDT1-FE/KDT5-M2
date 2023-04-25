import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import MovieInfos from './MovieInfos';
//import Header from '~/components/Header'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movie/:id',
    element: <MovieInfos />,
  },
]);
