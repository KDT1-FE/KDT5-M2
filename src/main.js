const header = document.querySelector('header')
const searchContainer = document.querySelector('.search-container')
const close = document.querySelector('.close')
const shadow = document.querySelector('.shadow')
const searchInput = document.querySelector('.search-input')

searchContainer.addEventListener('click', addSearching)
close.addEventListener('click', removeSearching)
shadow.addEventListener('click', removeSearching)

function addSearching() {
  header.classList.add('searching')
  setTimeout(() => {
    searchInput.focus()
  }, 500)
}
function removeSearching() {
  header.classList.remove('searching')
}

const select = document.querySelector('#years')
const now = new Date()
const thisYear = now.getFullYear()
for (let year = 1950; year <= thisYear; year++) {
  const option = document.createElement('option')
  option.value = year
  option.textContent = year
  select.appendChild(option)
}

const apiKey = '7035c60c'
const movieList = document.querySelector('#movie-list')

async function fetchMovies(searchInputVal, page, year) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInputVal}&page=${page}&y=${year}`
  )
  const data = await response.json()
  return data.Search
  }

searchInput.addEventListener('keydown', async e => {
  if (e.key === 'Enter') {
    removeSearching()
    const searchInputVal = searchInput.value
    if (searchInputVal.trim() === '') {
      alert('검색어를 입력해주세요.')
      return
    }
    try {
      const year = select.value
      const page = parseInt(document.querySelector('#num-pages').value)
      const data = await fetchMovies(searchInputVal, page, year)
      const movieItems = data.map(({ Title, Year, imdbID, Poster }) => {
        return `
          <div class="swiper-slide">
            <h2>${Title} (${Year})</h2>
            <p><img class="poster" src=${Poster} alt="${Title}" onerror=" this.src='./static/No-image-available.jpg';" onclick="getDetails('${imdbID}')">
            </p>
            <div class="movie-data" style="display: none;"></div>
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
  const details = document.querySelector('.movie-data')
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
