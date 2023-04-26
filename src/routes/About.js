import { Component } from '../core/Tteum'
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const { photo, name, email, github, blog} = aboutStore.state 

    this.el.classList.add('container', 'about')
    this.el.innerHTML = /* html */ `
      <div 
      style="background-image: url(${photo})" 
      class="photo"></div>
      <p class="name">${name}</p>
    <p>
      <a 
        href="https://velog.io/@swon0o0/mail/?view=cm&fs=1&tp=${email}" 
        terget="_blank">
        ${email}
      </a>
    </p>
      <p><a href="${github}" terget="_blank">GitHub</a></p>
      <p><a href="${blog}" terget="_blank">Blog</a></p>
    `
  }
}