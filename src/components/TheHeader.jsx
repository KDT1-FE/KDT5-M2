import { NavLink, Link } from 'react-router-dom'
import styles from '../styles/TheHeader.module.scss'
import '../styles/TheHeader.scss'
import myimg from '../assets/sewoo.jpeg'

export default function Theheader() {
  return (
    <header>
      <h1>
        <NavLink
          to="/"
          className="logo">
          <span className="logo--color">Mov</span>iecu <span>!</span>
        </NavLink>
      </h1>
      <ul className="main-menu">
        <li className="main-menu__search">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : 'main-menu main-menu__item'
            }>
            Search
          </NavLink>
        </li>
        <li className="main-menu__movie">
          <NavLink
            to="/Movies/tt3262342"
            className={({ isActive }) =>
              isActive ? styles.active : 'main-menu main-menu__item'
            }>
            Movie
          </NavLink>
        </li>
        <li className="main-menu__about">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? styles.active : 'main-menu main-menu__item'
            }>
            About
          </NavLink>
        </li>
      </ul>
      <div className="my-profile">
        <Link to="/About">
          <img
            src={myimg}
            alt="SEWOO"
          />
        </Link>
      </div>
    </header>
  )
}
