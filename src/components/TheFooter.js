import { Component } from '../core/assets'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = /* html*/ `
      <div>
        <p>
          FASTCAMPUS ASSIGNMENT
        </p>
      </div>
      <div>
        <p>
          ${new Date().getFullYear()}
          FILMISE
        </p>
      </div>
    `
  }
}
