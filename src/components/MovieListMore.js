import { Component } from "../core/dragon";
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
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
    this.el.classList.add('btn', 'view-more', 'hide')
    this.el.textContent = 'View more'

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide')
      // view more 버튼을 눌렀을 때 20개의 리스트가 더 나오게 되는 코드.
      const morePage = movieStore.state.page;
      for (let i = morePage + 2; i <= morePage + 4; i += 2) {
        await searchMovies(i);
      }
      // view more 버튼을 눌렀을 때 20개의 리스트가 더 나오게 되는 코드.
    })
  }
}