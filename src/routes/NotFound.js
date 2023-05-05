import { Component } from '../core/cores'

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */`
      <h1>
        죄송합니다<br>
        없는 페이지입니다.
      </h1>
    `
  }
}