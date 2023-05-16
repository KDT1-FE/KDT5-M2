import { Component } from '~/core/coreComps'
import movieStore from '~/store/movie.js'

export default class MovieList extends Component {
  constructor(props) {
    super({
      props,
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
      <div class="loading hide"></div>
    `
    const moviesEl = this.el.querySelector('.movies')
    moviesEl.innerHTML = ''
    movieStore.state.movies.forEach(movie => {
      const movieEl = document.createElement('a')
      movieEl.classList.add('movie')
      movieEl.href = `#/movie?id=${movie.imdbID}`
      movieEl.innerHTML = `
    <span class="info">
    <a class="movie_title">${movie.title}</a>
    <a class="movie_year">${movie.year}</a>
    </span>
    <img src="${movie.poster === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/No_Preview_image_2.png/1200px-No_Preview_image_2.png?20200726064257' : movie.poster}" onerror="this.onerror=null;)" alt="이미지를 불러올 수 없습니다.">
  `
      moviesEl.append(movieEl)
    })
    const loadingEl = this.el.querySelector('.loading')
    movieStore.state.loading ? loadingEl.classList.remove('hide') : loadingEl.classList.add('hide')
  }
}
