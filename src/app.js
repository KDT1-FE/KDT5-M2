import { navigate } from '~/utils/navigate'
import { $ } from '~/utils/querySelector'
import Router from '~/router'

export default function App($container) {
  const init = () => {
    $('.navbar').addEventListener('click', e => {
      e.preventDefault()
      const target = e.target.closest('a')
      if (!(target instanceof HTMLAnchorElement)) return
      navigate(target.href)
    })
    new Router($container)
  }
  init()
}
