import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <div>Logo</div>
        <Link to={`/movie/${id ? id : 'tt4520988'}`}>Search</Link>
        <div>About</div>
      </header>
      <Outlet />
    </>
  );
}
