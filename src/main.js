import App from '~/app'
import './style.scss'
import { $ } from '~/utils/querySelector'

window.addEventListener('DOMContentLoaded', () => {
  new App($('#app'))
})
