import App from './App'
import router from './routes'

const info = document.querySelector('.info')
info.append(new App().el)

router()
