import { Link, Outlet } from 'react-router-dom';
import context from '../api/MyContext';
import { useContext } from 'react';
//import { MyContext } from '~/api/MyContext';

export default function Home() {
  const { value } = useContext(context);
  //console.log(value);
  return (
    <>
      <Link to="/">logo</Link>
      <Link to={`/movie/${value}`}>movie</Link>
      <div>about</div>
      <h1>Home title</h1>
      <Outlet />
    </>
  );
}
