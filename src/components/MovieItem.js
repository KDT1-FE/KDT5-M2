import { Component } from '../core/core'
import { getMovieDetails } from '../store/movie'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'div'
    })

    this.onDblClick = this.onDblClick.bind(this)
  }

  onDblClick() {
    window.location.href = `#/movie?id=${this.props.movie.imdbID}`
  }

  async render() {
    const {movie} = this.props
    
    this.el.setAttribute('class', 'movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
  
    this.el.ondblclick = () => {
      window.location.href = `#/movie?id=${movie.imdbID}`
    }

    this.el.innerHTML = /* HTML */ `
      <div class="info">
        <div class="year">${movie.Year}</div>
        <div class="title">${movie.Title}</div>
      </div>
    `


    const movieInfo = await getMovieDetails(movie.imdbID)

    this.el.innerHTML = /* HTML */ `
      <div class="info">
        <div class="year">${movie.Year}</div>
        <div class="title">${movie.Title}</div>
      </div>
      <div class = 'shortDetails'>
        <div>
          <span>영화줄거리<br></span>
          <div class = 'shortPlot'>${movieInfo.Plot}</div>
        </div>
      </div>
    `

    const sDEl = this.el.querySelector('.shortDetails')

    if(sDEl) {
      sDEl.classList.add('movie','hide')
      this.el.addEventListener('click', () => {
        sDEl.classList.toggle('hide')
      })
    }
  }
}