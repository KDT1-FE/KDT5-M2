import { Component } from "../core/center";

export default class NotFound extends Component {
  render() {
    this.el.classList.add('comtainer', 'not-found')
    this.el.innerHTML = /*html*/`
    <h1>
      페이지를 찾을 수 없습니다.
    </h1>
    `
  }
}