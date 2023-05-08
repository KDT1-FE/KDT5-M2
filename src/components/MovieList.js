import { Component } from '../core/CoreMovie'
import movieStore from '../store/movie'
import MovieItem from './MovieItem'

// 구독, 감시(subscribe)를 해서
// 'movies'라는 상태가 서버에서 영화 정보를 가지고 와서 갱신 될 때 마다 콜백 함수가 실행될 수 있는 구조

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {  // movies가 변경되면 render가 실행 될 수 있도록
      this.render()
    })
    movieStore.subscribe('loading', () => {
      this.render()
    })
    movieStore.subscribe('message', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */ `
      ${movieStore.state.message 
        ? `<div class="message">${movieStore.state.message}</div>` 
        : '<div class="movies"></div>'}
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    // 로딩(loading)
    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl.classList.remove('hide') 
      : loaderEl.classList.add('hide')
  }
}