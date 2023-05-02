import AboutTop from '~/components/AboutTop'
import NavigationBar from '~/components/NavigationBar'
import styles from '~/components/About.module.scss'

export default function About() {
  return (
    <>
      <AboutTop />
      <NavigationBar />
      <div className={styles.about}>
        <div className={styles.contact}>
          <span className={styles.heading}>Contact</span>
          <span className={styles.phone}>010-1111-2222</span>
          <span className={styles.mail}>abc@mail.com</span>
        </div>
        <div className={styles.blog}>
          <span className={styles.heading}>Blog</span>
          <a
            className={styles.blogUrl}
            href="https://velog.io/@cdm1263">
            Dongmin's Blog
          </a>
        </div>
        <div className={styles.github}>
          <span className={styles.heading}>Github</span>
          <a
            className={styles.githubUrl}
            href="https://github.com/cdm1263">
            cdm1263's Github
          </a>
        </div>
      </div>
    </>
  )
}
