import accountStyle from '~/TheAccount.module.scss'
import TheHeader from '~/TheHeader'
import TheFooter from '~/TheFooter'

export default function TheAccount() {
  return (
    <>
      <TheHeader />
      <div className={accountStyle.account}>
        <div className={accountStyle.inner}>
          <div className={accountStyle.profile}>
            <a
              href="https://github.com/dev-junehee/"
              target="_blank"
              rel="noreferrer">
              <img
                src="https://avatars.githubusercontent.com/u/116873887?v=4"
                alt="KIMJUNEHEE"
              />
            </a>
            <div className={accountStyle.name}>KIM JUNE HEE</div>
            <div className={accountStyle.bio}>Front-end Developer</div>
            <div className={accountStyle.location}>🇰🇷</div>
            <div className={accountStyle.info}>
              <div>✨ Contact Here! ✨</div>
              <div>dev.junehee@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </>
  )
}
