import { request, renderMovies } from '~/movie.js'
import '~/reset.css'
import '~/style.scss'

// import { searchtBtn } from '~/button.js'

const Header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.movies')

const headerHandler = () => {}
Header.addEventListener('click', headerHandler)

const mainHandler = () => {}

// INPUT TAG_영화 검색
let inputText = ''
const inputHander = () => {
  inputText = inputEl.value
}
inputEl.addEventListener('input', inputHander)

//엔터키 눌렀을때 비동기 실행
const keydownHander = async event => {
  if (event.key === 'Enter') {
    const movies = await request(inputText)
    renderMovies(ulEl, movies)
  }
}
inputEl.addEventListener('keydown', keydownHander)
