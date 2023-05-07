import { Component } from "../core/dragon";

export default class NotFound extends Component {
  render() {
    this.el.classList.add('contatiner', 'not-found')
    this.el.innerHTML = /* html */ `
      <h1>
        Sorry..<br>
        page Not Found.
      </h1>
    `
  }
}