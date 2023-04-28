import { $ } from "~/utils/querySelector.js";

function MovieInfo($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="movieInfo">
        개별영화정보 페이지입니다.
      </main>
    `;
    detailMovieInfo();
  };
  this.render();
}
export default MovieInfo;