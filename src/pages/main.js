import createMovieList from '~/scripts/mainPage/createMovieList'
import { $ } from '~/utils/querySelector'

function Main($container) {
  this.$container = $container
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
    `
    addYearOps()
    createMovieList()
  }

  function addYearOps() {
    const selectYear = $('.select:last-child')
    const currentYear = new Date().getFullYear()
    const endYear = 1985
    // for (let i = currentYear; i >= 1985; i--) {
    //   const option = document.createElement('option')
    //   option.value = i
    //   option.innerText = i
    //   selectYear.appendChild(option)
    // }
    selectYear.insertAdjacentHTML(
      'afterbegin',
      Array.from({ length: currentYear - endYear + 1 }, (_, i) => {
        if (i) {
          return /*HTML*/ `<option>${currentYear - i}</option>`
        } else {
          return /*HTML*/ `<option value=''>All Years</option>
          <option>${currentYear - i}</option>`
        }
      }).join('')
    )
  }

  this.render()
}

export default Main
