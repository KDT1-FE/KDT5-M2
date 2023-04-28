import createEl from "~/scripts/infoPage/createEl";

function MovieInfo($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="movieInfo">
        <div class="movieInfo__detail">
          <div class="detail__container">
            <div class="detail__poster"></div>
            <div class="container__infos">
              <div class="detail__title"></div>
              <div class="detail__rating">
              <ul class="rating__container">
              </ul>
              </div>
              <ul class="detail__info">
                <li class="info__plot"></li>
                <li class="info__genre"></li>
                <li class="info__year"></li>
                <li class="info__director"></li>
                <li class="info__actors"></li>
                <li class="info__runtime"></li>
                <li class="info__released"></li>
                <li class="info__country"></li>
                <li class="info__language"></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    `;
    createEl();
  };


  this.render();
}
export default MovieInfo;