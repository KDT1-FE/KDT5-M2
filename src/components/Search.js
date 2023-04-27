import { Component } from '~/core/coreComps.js'
import movieStore, { requestAll } from '~/store/movie.js'

export default class Search extends Component {
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = `
      <input type="text" placeholder="스즈메의 문단속 보고싶당" />
      <button class="btn btn-main">검색</button>
    `


    const inputEl = this.el.querySelector('input')
    // INPUT TAG_영화 검색
    let inputText = ''
    const inputHandler = () => {
      inputText = inputEl.value
      // console.log(inputText)
    }
    inputEl.addEventListener('input', inputHandler)
    //엔터키 눌렀을때 비동기 실행
    const keydownHandler = async event => {
      if (event.key === 'Enter') {
        const movies = await requestAll(inputText)
        renderAll(ulEl, movies)
      }
    }
    inputEl.addEventListener('keydown', keydownHandler)
    // // 검색 버튼
    const btnEl = this.el.querySelector('button')
    const buttonHandler = async () => {
      const movies = await request(title)
      console.log(movies)
      renderAll(ulEl, movies)
    }
    btnEl.addEventListener('click', buttonHandler)
  }
}
