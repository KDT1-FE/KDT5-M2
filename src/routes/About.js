import {Component} from '../core/center'
import aboutStore from '../store/about'

export default class About extends Component {
  render() {
    const {photo, name, github} = aboutStore.state
    this.el.classList.add('container', 'about')
    this.el.innerHTML = /*html*/`
    <div 
    style="background-image: url(${photo})" 
    class="photo"></div>
    <p class="name">${name}</p>
    <p><a href="${github}" target="_blank">GitHub</a></p>

    `
  }
}