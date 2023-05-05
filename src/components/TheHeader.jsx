import { NavLink } from 'react-router-dom'
import styles from '../styles/TheHeader.module.scss'

export default function TheHeader() {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : '')}>
              About
            </NavLink>
          </li>
        </ul>
        <div className={styles.user}>
          <NavLink
            to="/about"
            About>
            <img
              src="https://avatars.githubusercontent.com/u/51252978?s=400&u=2540d3ce1c1f42b5428dd5601126d6d86e6f4618&v=4"
              alt="user"
            />
          </NavLink>
        </div>
      </header>
    </>
  )
}
