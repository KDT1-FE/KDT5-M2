import fetchMovies from '~/core/movieFetch';
import { $ } from '~/utils/querySelector';

function Main($container) {
  this.$container = $container;
  



  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
        <h2>
        <span>OMDB API</span><br/> 영화검색 사이트</h2>

        <form id="searchForm">
          <div class="selects">
            <select class="select">
              <option>movie</option>
              <option>series</option>
              <option>episode</option>
            </select>
            <select class="select">
              <option value="">All Years</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option> 
              <option>2011</option>
              <option>2010</option>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
              <option>2006</option>
              <option>2005</option>
              <option>2004</option>
              <option>2003</option>
              <option>2002</option>
              <option>2001</option>
              <option>2000</option>
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
    createMoveieList();
  };
  
  function createMoveieList() {
    const searchInput = $('.search');
    const searchForm = $('#searchForm');
    
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const inputText = searchInput.value;
      const t = $('.select:first-child').value;
      const y = $('.select:nth-child(2)').value;
  
      try {
        let { movies, totalResults } = await fetchMovies(inputText, y, t);
        console.log(movies);
        movies.forEach(movie => {
          // const li = document.createElement('li');
          // li.classList.add('list__movie');
          // li.textContent = movie.Title;
          // resultList.appendChild(li);
          movieResult(movie);
          });
        } catch (error) {
        console.log(error);
        }
    });
  }

  function movieResult (movie) {
    const resultList = $('.result__ul');
    const li = document.createElement('li');
    li.classList.add('list__movie');
    li.textContent = movie.Title;
    resultList.appendChild(li);
  }

  this.render();

}

export default Main;