import { Component } from '~/core/coreComps.js'
import movieStore, { requestAll } from '~/store/movie.js'

export default class Search extends Component {
  constructor() {
    super({
      tagName: 'section'
    })
  }
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = `
      <input class="search_bar" type="text" placeholder="스즈메의 문단속 보고싶당" />
      <button class="btn btn_main">검색</button>
    `
    const inputEl = this.el.querySelector('input')
    //// INPUT TAG_영화 검색 ////
    const inputHandler = () => {
      inputEl.innerText = ''
      movieStore.state.searchText = inputEl.value
      console.log(movieStore.state.searchText)
    }
    inputEl.addEventListener('input', inputHandler)

    ////엔터키 비동기 실행 ////
    const keydownHandler = async event => {
      if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
        requestAll(movieStore.state.searchText, '', 1)
      }
    }
    inputEl.addEventListener('keydown', keydownHandler)

    //// 버튼 비동기 실행  ////
    const btnEl = this.el.querySelector('button')
    const buttonHandler = () => {
      if (movieStore.state.searchText.trim()) {
        requestAll(movieStore.state.searchText, '', 1)
      }
    }
    btnEl.addEventListener('click', buttonHandler)
  }
}
