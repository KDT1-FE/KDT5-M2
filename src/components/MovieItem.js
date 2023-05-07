import { Component } from '../core/core'
import movieStore, { getMovieDetails } from '../store/movie'

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'div'
    })
  }
  render() {
    const { movie } = this.props
    this.el.classList.add('movie')
    this.el.innerHTML = /*HTML*/ `
      <div class="poster-wrap">
      <div 
        class="poster" 
        style=${
          movie.Poster === 'N/A'
            ? `background-image:url("./resource/noimage.png")`
            : `background-image:url(${movie.Poster})`
        }  >
      </div>
      </div>
      <p class="title">
        ${movie.Title}
      </p>
    `

    this.el.addEventListener('click', async () => {
      movieStore.state.movie = {}
      movieStore.state.contents = false
      movieStore.state.modal = true
      await getMovieDetails(movie.imdbID)
    })
  }
}
