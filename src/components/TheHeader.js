import { Component } from '../core/assets'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'SEARCH',
            href: '#/'
          },
          {
            name: 'RECOMMENDED',
            href: '#/movie?id=tt2194499'
          },
          {
            name: 'ABOUT',
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
        FILMISE
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map(menu => {
              const href = menu.href
              const hash = location.hash
              const isActive = href === hash
              return /* html */ `
              <li>
                <a 
                  class="${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `
            })
            .join('')}
        </ul>
      </nav>
      <a href="#/about">
        <img src="https://i.esdrop.com/d/f/w3LVwhrrgU/NSJbPV8BJI.jpg" alt="User" class="user" />
      </a>
    `
  }
}
