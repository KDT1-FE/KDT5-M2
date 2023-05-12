import { NavLink } from 'react-router-dom'
import styles from '~/components/Logo.module.scss'

export default function Logo() {
  return (
    <>
      <h1 className={styles.logo}>
        <NavLink to="/">OMDbAPI</NavLink>
      </h1>
    </>
  )
}
