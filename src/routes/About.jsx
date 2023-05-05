import { Outlet } from 'react-router-dom'
import TheHeader from '../components/TheHeader'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <TheHeader />
      <div className={styles.about}>
        <img
          src="https://avatars.githubusercontent.com/u/51252978?s=400&u=2540d3ce1c1f42b5428dd5601126d6d86e6f4618&v=4"
          alt="user"
          className={styles.about__img}
        />
        <span className={styles.about__name}>LeeEunJi</span>
        <div className={styles.about__info}>
          <p className={styles.about__email}>eunji9180@naver.com</p>
          <p>
            <a
              className={styles.about__github}
              href="https://github.com/dmswl2030"
              target="_blank">
              github
            </a>
          </p>
        </div>
      </div>

      <Outlet />
    </>
  )
}
