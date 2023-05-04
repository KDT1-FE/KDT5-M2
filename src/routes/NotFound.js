import { Component } from "../core/song"

export default class NotFound extends Component {
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */ `
    <h1>
      죄송합니다..<br>
      페이지를 찾을 수 없습니다.
    </h1>
    `
  }
}