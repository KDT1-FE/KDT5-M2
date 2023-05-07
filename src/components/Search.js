import { Component } from '../core/heropy'
import movieSotre, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /*html*/ `
    <input placeholder="Enter the movie title to search!" />
    <button class="btn btn-primary">
      Search!
    </button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieSotre.state.searchText = inputEl.value
    })
    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter' && movieSotre.state.searchText.trim()) {
        searchMovies(1)
      }
    })

    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      if (movieSotre.state.searchText.trim()) {
        searchMovies(1)
      }
    })
  }
}
