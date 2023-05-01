import { Component } from '~/core/coreComps.js'
import movieStore, { getMovieDetails } from '~/store/movie.js'

export default class Movie extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  async render() {
    await getMovieDetails(history.state.id)
    // console.log(movieStore.state.movie)
    const { movie } = movieStore.state
    const bigPoster = movie.Poster.replace('SX300', 'SX700')

    this.el.classList.add('container', 'the_movie')
    this.el.innerHTML = `
      <div style="background-image: url(${bigPoster})"
      class="poster"></div>
      <div class="specs">
        <div class="title">
          ${movie.Title}
        </div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">${movie.Plot}</div>
        <section>
          <div class="info">
            <h3>Ratings</h3>
            ${movie.Ratings.map(rating => {
              return `<p>${rating.Source} - ${rating.Value}</p>`
            }).join('')}
          </div>
          <div class="info">
            <h3>Actors</h3>
            <p>${movie.Actors}</p>
          </div>
          <div class="info">
            <h3>Director</h3>
            <p>${movie.Director}</p>
          </div>
          <div class="info">
            <h3>Production</h3>
            <p><${movie.Production}/p>
          </div>
          <div class="info">
            <h3>Genre</h3>
            <p><${movie.Genre}/p>
          </div>
      </section>    
      </div>
    `
  }
}
