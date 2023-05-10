import { Component } from '../core/cores'

export default class Headline extends Component{
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
    <h1>
      <span>OMDb API</span><br>
      The OPEN<br>
      MOVIE DATABASE
    </h1>
    <p>
    영화를 검색해보세요
    </p>
    `
  }
}