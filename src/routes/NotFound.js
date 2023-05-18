import { Component } from "../core/bear";

export default class NotFound extends Component {
  render() {
    this.el.classList.add('not-found')
    this.el.innerHTML = `
      <h1> Sorry Page Not Found. </h1>
    `
  }
}