import { Component } from '../core/song'

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
      <h1>
        <span>SONG.CINE</span><br>
        MOVIE SEARCH !
      </h1>
      <p>
      SONG.CINE 영화 검색 사이트
      </p>
    `
  }
}