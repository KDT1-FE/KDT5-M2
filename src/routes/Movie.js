import { Component } from '~/core/coreComps.js'
import movieStore, { getMovieDetails } from '~/store/movie.js'


export default class Movie extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  async render() {
    this.el.classList.add('container', 'the_movie')
    this.el.innerHTML = `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `

    await getMovieDetails(history.state.id)
    console.log(movieStore.state.movie)
    const { movie } = movieStore.state
    let bigPoster = ''

    if (movie.Poster === 'N/A') {
      bigPoster = 'https://example.com/default-poster.jpg' 
    } else {
      bigPoster = movie.Poster.replace('SX300', 'SX700')
    }

    this.el.innerHTML = `
      <div style="background-image: url(${bigPoster})"
      class="poster" ></div>
      <div class="specs">
        <div class="title ">
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
              let imageUrl = ''
              switch (rating.Source) {
                case 'Internet Movie Database':
                  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'
                  break
                case 'Rotten Tomatoes':
                  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Rotten_Tomatoes_logo.svg'
                  break
                case 'Metacritic':
                  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Metacritic_logo_original.svg'
                  break
                default:
                  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/No_Preview_image_2.png/1200px-No_Preview_image_2.png?20200726064257'
              }
              return `<div>
              <img src="${imageUrl}" alt="${rating.Source}">
              <p>${rating.Source} : ${rating.Value}</p>
              </div>
              `
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
            <p>${movie.Production}</p>
          </div>
          <div class="info">
            <h3>Genre</h3>
            <p>${movie.Genre}</p>
          </div>
      </section>    
      </div>
    `
  }
}
