import { Component } from '~/core/coreComps'
import movieStore from '~/store/movie.js'

export default class MovieList extends Component {
  constructor() {
    super({
      tagName: 'main'
    })
    // this.render()
    movieStore.subscribe('movies', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie_list')
    this.el.innerHTML = `
      <div class="movies"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.innerHTML = ''
    movieStore.state.movies.forEach(movie => {
      const movieEl = document.createElement('a')
      movieEl.classList.add('movie')
      movieEl.href = `#/movie?id=${movie.imdbID}`
      movieEl.innerHTML = `
    <a>${movie.title}</a>
    <img src="${movie.poster}" alt="${movie.title}">
  `
      moviesEl.append(movieEl)
    })
  }
}
