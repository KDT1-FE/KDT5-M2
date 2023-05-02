import { Component } from '~/core/coreComps.js'

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://github.com/kse-seong-eun/valnillaJs_SearchMovieSite">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/kse-seong-eun">
          ${new Date().getFullYear()}
          💻 Seong-eun Kim
        </a>
      </div>
    `
  }
}
