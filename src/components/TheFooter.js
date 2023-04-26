import { Component } from '../core/Tteum'
import aboutStore from '../store/about'

export default class TheFoote extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github, repository} = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a fref="${github}">
          ${new Date().getFullYear()}
          Tteum
        </a>
      </div>
    `
  }
}