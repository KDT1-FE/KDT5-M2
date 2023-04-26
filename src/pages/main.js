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
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
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
            <p class="total"></p>
          </ul>
        </div>
      </main>
    `;
    createMovieList();
  };


  function createMovieList() {
    const searchInput = $('.search');
    const searchForm = $('#searchForm');
    const resultList = $('.result__ul');
    const total = $('.total');

    let searchPage = 1;

    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      searchPage = 1;
      resultList.innerHTML = '';
      total.textContent = '';

      const inputText = searchInput.value;
      const t = $('.select:first-child').value;
      const y = $('.select:nth-child(2)').value;
      
      try {
        //create Loading Animation
        const loading = document.createElement('div');
        loading.classList.add('loading');
        resultList.appendChild(loading);

        
        //fetch Movies
        const moviesRes = await fetchMovies(inputText, y, t, searchPage);

        loading.remove();

        if(moviesRes.Response === "False"){
          const error = document.createElement('p');
          error.textContent = moviesRes.Error;
          resultList.appendChild(error);
        }
        else {
          moviesRes.movies.forEach(movie => movieResult(movie));
        }
        // totalResults
        total.textContent = `Total Results: ${moviesRes.totalResults}`;

        //scrollEvent
        if(moviesRes.Response === "False") {
          window.removeEventListener('scroll', handleScroll);
        }
        else {
          window.addEventListener('scroll', handleScroll);
        }
      } catch (error) {
      console.log(error);
      }
    });
    

    const fetchNextPage = async () => {
      const inputText = searchInput.value;
      const t = $('.select:first-child').value;
      const y = $('.select:nth-child(2)').value;
      searchPage++;
      try {
        const moviesRes = await fetchMovies(inputText, y, t, searchPage);
        if(moviesRes.Response === "False") {
          window.removeEventListener('scroll', handleScroll);
          const error = document.createElement('p');
          error.textContent = moviesRes.Error;
          resultList.appendChild(error);
        }
        else {
        moviesRes.movies.forEach(movie => movieResult(movie));
        }
      }
        catch(error) {
          console.log(error);
        }
    };

    async function handleScroll (event) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if( scrollTop + clientHeight >= scrollHeight - 5 ) {
        await fetchNextPage();
      }
    }


  function movieResult (movie) {
    //create List
    const resultList = $('.result__ul');
    const li = document.createElement('li');
    li.classList.add('list__movie'); 
    resultList.appendChild(li);

    //Container
    const container = document.createElement('div');
    container.classList.add('list__container');
    li.appendChild(container)

    //Poster
    const po = document.createElement('img');
    po.classList.add('list__poster');
    if (movie.Poster === "N/A") {  // 포스터가 없는 경우
      po.setAttribute('src', '/src/images/xboxdog.jpg');
    } else {  // 포스터가 있는 경우
      po.setAttribute('src', movie.Poster);
    }
    po.alt = "포스터를 찾을 수 없어요..";

    
    container.appendChild(po);

    //Title
    const title = document.createElement('h3');
    title.classList.add('list__title');
    title.textContent = movie.Title;
    container.appendChild(title);

    //Year
    const year = document.createElement('p');
    year.classList.add('list__year');
    year.textContent = movie.Year;
    container.appendChild(year);
    }



  }
  

  
  this.render();

}

export default Main;