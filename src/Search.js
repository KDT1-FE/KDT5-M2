import { request, renderMovies } from '~/core/resAPI.js'

export default function Search() {
  const inputEl = document.querySelector('input')
  const ulEl = document.querySelector('.movies')
  const buttonEl = document.querySelector('button')

  // INPUT TAG_영화 검색
  let inputText = ''
  const inputHandler = () => {
    inputText = inputEl.value
  }
  inputEl.addEventListener('input', inputHandler)
  //엔터키 눌렀을때 비동기 실행
  const keydownHandler = async event => {
    if (event.key === 'Enter') {
      const movies = await request(inputText)
      renderMovies(ulEl, movies)
    }
  }
  inputEl.addEventListener('keydown', keydownHandler)
  // 검색 버튼
  const buttonHandler = async () => {
    const movies = await request(inputText)
    renderMovies(ulEl, movies)
  }
  buttonEl.addEventListener('click', buttonHandler)
}
