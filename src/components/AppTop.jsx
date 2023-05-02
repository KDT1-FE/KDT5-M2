import styles from './AppTop.module.scss'
import Logo from '~/components/Logo'

export default function AboutTop() {
  return (
    <div className={styles.AppTop}>
      <Logo />
      <span>Movie Search API</span>
      <div>icon</div>
    </div>
  )
}
