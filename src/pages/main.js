import fetchMovies from '../core/movieFetch';

function Main($container) {
  this.$container = $container;
  


  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <main class="mainPage">
        메인 페이지에요.
        <form id="searchForm">
          <input type="text" class="search" placeholder="검색" value=""/>
          <button type="submit">Search</button>
        </form>
        <div id="result">
          <ul class="resultList">
          </ul>
        </div>
      </main>
    `;
    const searchInput = document.querySelector('.search');
    const searchForm = document.querySelector('#searchForm');
    searchForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const inputText = searchInput.value;
      await fetchMovies(inputText)
      .then(Search => {
        const resultList = document.querySelector('.resultList');
        resultList.innerHTML = '';
        Search.forEach((movie) => {
          const li = document.createElement('li');
          li.textContent = movie.Title;
          resultList.appendChild(li);
        });
      })
      .catch(error => {
        console.error(error);
      });
    });

  };


  this.render();
}

export default Main;