import {Component} from '../core/center'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor () {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github } = aboutStore.state
    this.el.innerHTML = /*html*/ `
    <div>
      <a href="${github}">
        ${new Date().getFullYear()}
        @ChoEun-Sang
      </a>
    </div>

    `
  }
}