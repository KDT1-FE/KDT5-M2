import { Component } from '../core/assets'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /* html */ `
      <section class="info">
        <p class="year">
          ${movie.Year}
        </p>
        <h5 class="title">
          ${movie.Title}
        </h5>
      </section>
    `
  }
}
