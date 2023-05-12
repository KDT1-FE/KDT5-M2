import detailRes from '~/scripts/infoPage/detailRes'

function MovieInfo($container) {
  this.$container = $container
  this.render = async () => {
    const details = await detailRes()
    this.$container.innerHTML = `
      <main class="movieInfo">
        <div class="movieInfo__detail">
          <div class="detail__container">
            <div class="detail__poster">
              <img src="${
                details.Poster === 'N/A' || details.Response === 'False'
                  ? '/xboxdog.jpg'
                  : details.Poster.replace('SX300', 'SX700')
              }" alt="포스터를 못찾았어요.">
            </div>
            <div class="container__infos">
              <div class="detail__title">
                <h2>${details.Title}</h2>
              </div>
              <div class="detail__rating">
                <ul class="rating__container">
                  ${details.Ratings.map(
                    rating => `
                    <li class="rating__${rating.Source.replace(
                      /\s/g,
                      ''
                    ).toLowerCase()}">
                      ${
                        rating.Source === 'Internet Movie Database'
                          ? '<img src="/imdb.png" class="rating__imdb">'
                          : ''
                      }
                      ${
                        rating.Source === 'Rotten Tomatoes'
                          ? '<img src="/rotten.png" class="rating__rt">'
                          : ''
                      }
                      ${
                        rating.Source === 'Metacritic'
                          ? '<img src="/metacritic.png" class="rating__mt">'
                          : ''
                      }
                      ${rating.Value}
                    </li>
                  `
                  ).join('')}
                </ul>
              </div>
              <ul class="detail__info">
                <li class="info__plot"><h2>PLOT</h2><p>${details.Plot}</p></li>
                <li class="info__genre"><h2>GENRE</h2><p>${
                  details.Genre
                }</p></li>
                <li class="info__year"><h2>YEAR</h2><p>${details.Year}</p></li>
                <li class="info__director"><h2>DIRECTOR</h2><p>${
                  details.Director
                }</p></li>
                <li class="info__actors"><h2>ACTORS</h2><p>${
                  details.Actors
                }</p></li>
                <li class="info__runtime"><h2>RUNTIME</h2><p>${
                  details.Runtime
                }</p></li>
                <li class="info__released"><h2>RELEASED</h2><p>${
                  details.Released
                }</p></li>
                <li class="info__country"><h2>COUNTRY</h2><p>${
                  details.Country
                }</p></li>
                <li class="info__language"><h2>LANGUAGE</h2><p>${
                  details.Language
                }</p></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    `
  }
  this.render()
}
export default MovieInfo
