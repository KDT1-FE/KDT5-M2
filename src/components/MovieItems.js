import { Component } from '../core/assets'
import movieStore from '../store/movie'
import MovieItem from './Movieitem'

export default class MovieItems extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => {
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
    this.el.classList.add('movie-items')
    this.el.innerHTML = /* html */ `
      ${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
      <div class="the-loader hide"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl?.append(
      ...movieStore.state.movies.map(
        movie =>
          new MovieItem({
            movie
          }).el
      )
    )
    // Loading 시 숨겨져 있던 the-loader css animation이 보이도록 설정
    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading
      ? loaderEl.classList.remove('hide')
      : loaderEl.classList.add('hide')
  }
}
