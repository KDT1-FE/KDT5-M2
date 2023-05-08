import { Component } from '../core/CoreMovie'
import movieStore, { searchMovies } from '../store/movie'

export default class MovieListMore extends Component {
  constructor() {
    super ({
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
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more..'

    this.el.addEventListener('click', async () => {
      // 영화의 정보를 가져오기 직전에, 더보기 버튼을 사용자가 또한번 누르는 것을 방지하기 위해서
      this.el.classList.add('hide')
      await searchMovies(movieStore.state.page + 1)  // 다음 페이지
    })
  }
}