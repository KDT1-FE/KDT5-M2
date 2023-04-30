import { Component } from '~/core/coreComps.js'
import movieStore, { totalPages } from '~/store/movie.js'

export default class MovieListMore extends Component {
  constructor() {
    super({
      name: 'button'
    })
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      pageMax > page ? this.el.classList.remove('hide') : this.el.classList.add('hide')
    })
  }
  render() {
    this.el.classList.add('btn', 'view_more', 'hide')
    this.el.textContent = 'View more..'

    const btnClickHandler = async () => {
      await totalPages(movieStore.state.page + 1)
    }
    this.el.addEventListener('click', btnClickHandler)
  }
}
