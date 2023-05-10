import TheHeader from '~/components/TheHeader'
import Mypage from '~/components/AboutMypage'
import TheFooter from '../components/TheFooter'

export default function About() {
  return (
    <>
      <header>
        <TheHeader />
      </header>
      <main>
        <Mypage />
      </main>
      <TheFooter />
    </>
  )
}
