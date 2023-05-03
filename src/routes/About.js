import { Component } from '../core/assets'
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const { photo, name, email, github } = aboutStore.state
    this.el.classList.add('container', 'about')
    this.el.innerHTML = /* html */ `
      <img src="https://i.esdrop.com/d/f/w3LVwhrrgU/NSJbPV8BJI.jpg" class="photo" />
      <p class="name">${name}</p>
      <p>
        <a href="javascript:void(0)">${email}</a>
      </p>
      <p>
        <a 
          href="${github}" 
          target="_blank">GitHub
        </a>
      </p>
    `
  }
}
