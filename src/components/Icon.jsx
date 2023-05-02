import styles from '~/components/Icon.module.scss'
import { NavLink } from 'react-router-dom'

export default function Icon() {
  return (
    <>
      <NavLink to="/About">
        <img
          className={styles.IconImg}
          src="https://avatars.githubusercontent.com/u/122417731?v=4"
          alt="GitHub Icon"
        />
      </NavLink>
    </>
  )
}
