import { Component } from '~/core/coreComps.js'
import movieStore, { totalPages } from '~/store/movie.js'

export default class MovieListMore extends Component {
  constructor() {
    super({})
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      pageMax <= page ? this.el.classList.remove('hide') : this.el.classList.add('hide')
      console.log(pageMax, page)
    })
  }
  render() {
    this.el.classList.add('movie_list_More')
    this.el.innerHTML = `
      <button class="btn view_more hide">View more..</button>
    `

    const btnClickHandler = async (page) => {
      movieStore.state.page += 1
      await totalPages(movieStore.state.page)
    }
    this.el.addEventListener('click', btnClickHandler)
  }
}
