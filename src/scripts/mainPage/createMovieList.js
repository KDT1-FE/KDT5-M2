import fetchMovies from '~/core/movieFetch';
import { $ } from '~/utils/querySelector';
import { movieResult } from './movieResult.js';
import infoRoute from '~/scripts/infoPage/infoRoute'

function createMovieList() {
  const searchInput = $('.search');
  const searchForm = $('#searchForm');
  const resultList = $('.result__ul');
  let searchPage = 1;
  const loading = document.createElement('div');
  loading.classList.add('loading');
  const resultBox = $('#search__result');

  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    searchPage = 1;
    resultList.innerHTML = '';
    
    try {
      await fetchMovieList();
      resultBox.addEventListener('scroll', () => debouncedHandleScroll(resultBox));
      infoRoute();
    } catch (error) {
      console.log(error);
    }
  });

  //fetchMovieList 및 movieResult로 화면에 response 띄우기.
  async function fetchMovieList() {
    const inputText = $('.search').value;
    const t = $('.select:first-child').value;
    const y = $('.select:nth-child(2)').value;
    resultList.appendChild(loading);

    const moviesRes = await fetchMovies(inputText, y, t, searchPage);
    loading.remove();

    if(moviesRes.Response === "False"){
      const error = document.createElement('p');
      error.textContent = moviesRes.Error;
      resultList.appendChild(error);
    } else {
      moviesRes.movies.forEach(movie => movieResult(movie));
    }
  }

  //handleScroll 이벤트
  async function handleScroll (resultBox) {
    const inputText = searchInput.value;
    const t = $('.select:first-child').value;
    const y = $('.select:nth-child(2)').value;

    if(!resultBox) return console.log("resultBox is not DOMel");

    const { scrollTop, scrollHeight, clientHeight } = resultBox;
    console.log(scrollTop, clientHeight, scrollHeight);
    if( scrollTop + clientHeight >= scrollHeight -5 ) {
      try {
        resultList.appendChild(loading);
        searchPage++
        const nextPageRes = await fetchMovies(inputText, y, t, searchPage);
        loading.remove()
        if(nextPageRes.Response === "False"){
          resultBox.removeEventListener('scroll', handleScroll(resultBox));
          const error = document.createElement('p');
          error.textContent = nextPageRes.Error;
          resultList.appendChild(error);
        } else {
          nextPageRes.movies.forEach(movie => movieResult(movie));
          infoRoute();
        }        
      } catch (error) {
        console.log(error);
      }
    }
  }
  let debounceTimeoutId;
    //handleScroll 중복실행 방지
    function debouncedHandleScroll(resultBox) {
      if (debounceTimeoutId) {
        clearTimeout(debounceTimeoutId);
      }
      debounceTimeoutId = setTimeout(() => handleScroll(resultBox), 250);
    }
}

export default createMovieList;