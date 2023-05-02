import styles from './AppTop.module.scss'
import Logo from '~/components/Logo'

export default function MovieInfoTop(props) {
  return (
    <div className={styles.AppTop}>
      <Logo />
      <span>{props.movies.Title}</span>
      <div>icon</div>
    </div>
  )
}
