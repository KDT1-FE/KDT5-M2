import { Component } from '../core/assets'
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input 
        class="underline"
        value="${movieStore.state.searchText}" 
        placeholder="Please enter the movie title" />
      <a href="#/search"><button class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button></a>
    `
    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value
    })

    // btn 클릭시 검색 결과가 나오도록 설정
    const btnEl = this.el.querySelector('.btn')
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1)
        searchMovies(2)
      }
    })
  }
}
