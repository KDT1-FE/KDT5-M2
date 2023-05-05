import { Component } from '../core/dong'
import aboutStore from '../store/about'

export default class TheFooter extends Component {
  constructor(){
    super({
      tagName: 'footer'
    })
  }
render() {
  const{github, repository} = aboutStore.state
  this.el.innerHTML =/*html */`
  
  <div>
   <a href"https://github.com/nangkong98">
  ${new Date().getFullYear()}
  DongHun
  </a>
  </div>
  `
}
}