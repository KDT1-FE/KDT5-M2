import { Component } from '../core/cores'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt3538766'
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a 
      href="#/" 
      class="logo">
      <span>OMDbAPI</span>.COM
    </a>
    <nav>
      <ul>
        ${this.state.menus.map(menu => {
          const href = menu.href.split('?')[0]
          const hash = location.hash.split('?')[0] 
          const isActive = href === hash
          return /*html */`
          <li>
            <a
              class="${isActive ? 'active': ''}" 
              href="${menu.href}">
              ${menu.name}
            </a>
          </li>
          `
        }).join('')}
      </ul>
    </nav>
    <a href="#/about" class="user">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" alt="User">
    </a>
    `
  }
}