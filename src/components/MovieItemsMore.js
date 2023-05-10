import { Component } from '../core/assets'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieItemsMore extends Component {
  constructor() {
    super({
      tagName: 'button'
    })
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state
      pageMax > page
        ? this.el.classList.remove('hide')
        : this.el.classList.add('hide')
    })
  }
  render() {
    // more btn Element를 클릭 시 검색 결과가 더 나오도록 설정
    this.el.classList.add('btn', 'more', 'hide')
    this.el.textContent = 'More'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      await searchMovies(movieStore.state.page + 1)
    })
  }
}
