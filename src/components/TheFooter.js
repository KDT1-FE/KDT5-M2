import {Component} from '../core/cores'
import aboutStore from '../store/about'

export default class TheFooter extends Component{
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const {github, repository } = aboutStore.state 
    this.el.innerHTML = /* html */ `
    <div>
      <a href="${github}">
      ${new Date().getFullYear()}
      JinYoung Park
      </a>
    </div>
    `
  }
}