import { navigate } from '~/utils/navigate.js'

export default function infoRoute() {
  document.querySelectorAll('.list__container').forEach(container => {
    container.addEventListener('click', e => {
      e.preventDefault()
      const target = e.target.closest('a')
      if (!(target instanceof HTMLAnchorElement)) return null
      navigate(target.href)
    })
  })
}
