import createMovieList from '~/scripts/mainPage/createMovieList'
import { $ } from '~/utils/querySelector'


function Main($container) {
  this.$container = $container;
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">

        <form id="searchForm">
          <div class="selects">
            <select class="select">
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
            <select class="select">
              <option value="">All Years</option>
            </select>
          </div>
          <input type="text" class="search" placeholder="영화를 입력해주세요!" value=""/>
          <button type="submit">Search</button>

        </form>
        <div id="search__result">
          <ul class="result__ul">
          </ul>
        </div>
      </main>
    `;
    addYearOps();
    createMovieList();
  };
  
  function addYearOps() {
    const selectYear = $('.select:last-child');
    const currentYear = new Date().getFullYear();
    for(let i = currentYear; i >= 1985; i--) {
      const option = document.createElement('option');
      option.value = i;
      option.innerText = i;
      selectYear.appendChild(option);
    }
  }

  this.render();

}

export default Main;