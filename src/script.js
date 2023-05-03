import App from './App'
import router from './routes'

const info = document.querySelector('.info')
info.append(new App().el)

router()

// toTop 클릭 시 상단으로 이동
const toTopEl = document.querySelector('.to-top')

toTopEl.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
