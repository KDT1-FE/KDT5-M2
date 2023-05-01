import { useContext } from 'react';
import context from '~/store/MyContext';
import { NavLink, Link } from 'react-router-dom';
import styles from '~/styles/Header.module.scss';

export default function Header() {
  const { value } = useContext(context);
  return (
    <header>
      <nav>
        <Link to="/" className={`omdb ${styles.logo}`}>
          <span className="yellow">OMDbAPI</span>.COM
        </Link>
        <NavLink to="/" className="btn yellow">
          Search
        </NavLink>
        <NavLink to={`/movie/${value}`} className="btn yellow">
          Movie
        </NavLink>
        <NavLink to="/about" className="btn yellow">
          About
        </NavLink>
      </nav>
      <Link to="about">
        <img src="/public/assets/pic1.jpg" alt="" />
      </Link>
    </header>
  );
}
