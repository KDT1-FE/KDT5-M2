import { Component } from '~/core/coreComps.js'
import movieStore, { totalPages } from '~/store/movie.js'

export default class MovieListMore extends Component {
  constructor() {
    super({})
    //동작안함
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      pageMax > page ? this.el.classList.remove('hide') : this.el.classList.add('hide')
    })
  }
  render() {
    this.el.classList.add()
    this.el.innerHTML = `
      <button class="btn view_more hide">View more..</button>
    `

    const btnClickHandler = async () => {
      await totalPages(movieStore.state.page + 1)
    }
    this.el.addEventListener('click', btnClickHandler)
  }
}
