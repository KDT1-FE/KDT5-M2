import { Component } from '~/core/coreComps.js'
import aboutStore from '~/store/about.js'



export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github, repository } = aboutStore.state
    this.el.innerHTML = `
      <div>
        <a href="${github}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${repository}">
          ${new Date().getFullYear()}
          💻 Seong-eun Kim
        </a>
      </div>
    `
  }
}
