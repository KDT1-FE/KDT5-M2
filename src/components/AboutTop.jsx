import styles from './AppTop.module.scss'
import Logo from '~/components/Logo'
import Icon from '~/components/Icon'

export default function AboutTop() {
  return (
    <div className={styles.AppTop}>
      <Logo />
      <span>Dong Min</span>
      <Icon />
    </div>
  )
}
