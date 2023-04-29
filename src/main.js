const header = document.querySelector('header')
const searchContainer = document.querySelector('.search-container')
const close = document.querySelector('.close')
const shadow = document.querySelector('.shadow')

searchContainer.addEventListener('click', addSearching)
close.addEventListener('click', removeSearching)
shadow.addEventListener('click', removeSearching)

function addSearching() {
  header.classList.add('searching')
}
function removeSearching() {
  header.classList.remove('searching')
}

const apiKey = '7035c60c'
const input = document.querySelector('input')
const movieList = document.querySelector('#movie-list')

async function fetchMovies(inputV, page) {
  const numPages = parseInt(document.querySelector('#num-pages').value)
  if (![1, 2, 3].includes(numPages)) {
    return
  }
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${inputV}&page=${page}`
  )
  const data = await response.json()
  return data
}
input.addEventListener('keydown', async e => {
  if (e.key === 'Enter') {
    removeSearching()
    const inputV = input.value
    if (inputV.trim() === '') {
      alert('검색어를 입력해주세요.')
      return
    }
    try {
      const numPages = parseInt(document.querySelector('#num-pages').value)
      const movies = []
      for (let i = 1; i <= numPages; i++) {
        const data = await fetchMovies(inputV, i)
        movies.push(...data.Search)
      }
      const movieList = document.getElementById('movie-list')
      const movieItems = movies.map(({ Title, Year, imdbID, Poster }) => {
        return `
          <div class="swiper-slide">
            <h2>${Title} (${Year})</h2>
            <p><img class="poster" src=${Poster} onclick="getDetails('${imdbID}')" alt="${Title}"/></p>
            <div class="movie-data" id="details-${imdbID}" style="display: none;"></div>
          </div>
        `
      })
      movieList.innerHTML = movieItems.join('')
    } catch (error) {
      alert('API 요청에 실패했습니다. ', error)
    }
  }
})
async function getDetails(imdbID) {
  const details = document.querySelector(`#details-${imdbID}`)
  if (details.style.display === 'block') {
    details.style.display = 'none'
  } else {
    details.innerHTML = '<p>Loading...</p>'
    details.style.display = 'block'
    const url_ = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
    await fetch(url_)
      .then(response => response.json())
      .then(data => {
        details.innerHTML = `
          <p><strong>Director</strong> <p>${data.Director}</p></p>
          <p><strong>Actors</strong> <p>${data.Actors}</p></p>
          <p><strong>Runtime</strong> <p>${data.Runtime}</p></p>
          <p><strong>Genre</strong> <p>${data.Genre}</p></p>
          <p><strong>Plot</strong> <p>${data.Plot}</p></p>
          <p><strong>Ratings</strong></p>
<ul class="ratings">
  ${data.Ratings.map(
    rating =>
      `<li>
    ${
      rating.Source === 'Internet Movie Database'
        ? '<img class="rating-logo "src="/imdb.jpg" alt="IMDb" />'
        : ''
    }
    ${
      rating.Source === 'Rotten Tomatoes'
        ? '<img class="rating-logo" src="/r.png" alt="Rotten Tomatoes" />'
        : ''
    }
    ${
      rating.Source === 'Metacritic'
        ? '<img class="rating-logo" src="/m.png" alt="Metacritic" />'
        : ''
    }
    ${rating.Value}
    </li>`
  ).join('')}
</ul>
    `
        details.style.display = 'block'
      })
      .catch(error => alert.error('API 요청에 실패했습니다.:', error))
  }
}
const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,
  observer: true,
  observeParents: true,
  loopedSlides: 1
})
