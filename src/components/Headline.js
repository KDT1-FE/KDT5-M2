import { Component } from "../core/core"

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* HTML */ `
      <h1>
        영화검색
      </h1>
      <p>
        OMDb API를 이용한 영화검색
      </p>
    `
  }
}