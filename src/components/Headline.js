import { Component } from "../core/center";

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /*html*/`
    <div>
    <h1>
    OMDb API에서<br>
    국내영화부터 해외영화까지!<br>
    다양한 영화를 검색해보세요.
    </h1>
    </div>
    `
  }
}

