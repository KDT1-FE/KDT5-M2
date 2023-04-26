import { request, renderMovies, requestAll, renderPoster } from '~/core/resAPI.js'
import Header from '~/Header.js'
import '~/styles/reset.css'
import '~/styles/style.scss'

// ---------------header title----------------//
const header = document.querySelector('#header')
header.append(new Header().el)
//el은 Header 클래스에서 생성된 HTML 요소를 의미합니다.

// -----------------API실행함수-------------------//
const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.movies')
const buttonEl = document.querySelector('button')

// INPUT TAG_영화 검색
let title = ''
const inputHandler = () => {
  title = inputEl.value
}
inputEl.addEventListener('input', inputHandler)

//엔터키 눌렀을때 비동기 실행
const keydownHandler = async event => {
  if (event.key === 'Enter') {
    const movies = await request(title)
    renderMovies(ulEl, movies)
  }
}
inputEl.addEventListener('keydown', keydownHandler)

// 검색 버튼
const buttonHandler = async () => {
  const movies = await request(title)
  renderMovies(ulEl, movies)
}
buttonEl.addEventListener('click', buttonHandler)
