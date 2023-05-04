import { Component } from '../core/song'

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
            href: '#/movie?id=tt4520988'
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
        <span>SONG</span>.CINE
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
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
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://ifh.cc/g/7QrFfq.png" alt="User">
      </a>
    `
  }
}