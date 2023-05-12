import styles from './AppTop.module.scss'
import Logo from '~/components/Logo'
import Icon from '~/components/Icon'

export default function MovieInfoTop(props) {
  return (
    <div className={styles.AppTop}>
      <Logo />
      <span>{props.movies.Title}</span>
      <Icon />
    </div>
  )
}
