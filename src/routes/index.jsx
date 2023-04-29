import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import MovieInfos from './MovieInfos';
import Search from './Search';
import About from './About';

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'movie/:id',
        element: <MovieInfos />,
      },
    ],
  },
]);
