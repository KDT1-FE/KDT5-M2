import { Component } from '../core/CoreMovie'

export default class Headline extends Component {
  render() {
    this.el.classList.add('headline')
    this.el.innerHTML = /* html */ `
    <h1>
      <span>OMDb API</span><br>
      Movie Search 🎬
    </h1>
    `
  }
}