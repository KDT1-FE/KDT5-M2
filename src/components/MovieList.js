import { Component } from '~/core/coreComps'
import movieStore from '~/store/movie.js'

export default class MovieList extends Component {
  render() {
    this.el.classList.add('movie-list)')
    this.el.innerHTML = `
      <div class="movies"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      movieStore.state.movies.map(movie => {
        return movie.Title
      })
    )
    // const ulEl = this.el.querySelector('ul')
    // //랜더 함수
    // export function renderAll(ulEl, movies) {
    //   ulEl.innerHTML = ''
    //   movies.forEach(movie => {
    //     const liEl = document.createElement('li')
    //     const imgEl = document.createElement('img')
    //     imgEl.src = movie.Poster
    //     liEl.appendChild(imgEl)
    //     ulEl.appendChild(liEl)
    //   })
    // }
  }
}
