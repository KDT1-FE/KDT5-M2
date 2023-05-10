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
      <dl>
        <dt>
          FASTCAMPUS ASSIGNMENT
        </dt>
        <dd>
          ${new Date().getFullYear()}
          FILMISE
        </dd>
      </dl>
    `
  }
}
