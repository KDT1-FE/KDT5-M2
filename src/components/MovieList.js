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
    this.el.classList.add('movie-list')
    this.el.innerHTML = `
      <div class="movies"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.innerHTML = ''
    movieStore.state.movies.forEach(movie => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      movieEl.innerHTML = `
      <h3>${movie.title}</h3>
      <img src="${movie.poster}" alt="${movie.title}">
    `
      moviesEl.append(movieEl)
    })
  }
}
