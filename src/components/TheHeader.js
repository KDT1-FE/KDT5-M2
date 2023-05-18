import { Component } from '../core/bear'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Home',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt0948470'
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
    this.el.innerHTML = `
      <a href="#/" class="logo">
      🐻
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map(menu => {
              const href = menu.href.split('?')[0]
              const hash = location.hash.split('?')[0]
              const isActive = href === hash
              return `
              <li>
                <a class="${isActive ? 'active' : ''}" href="${menu.href}">${menu.name}</a>
              </li>
            `
            })
            .join('')}
        </ul>
      </nav>
      <a href="#/love" class="love">
        <span class="material-icons">
          favorite_border
        </span>
      </a>
    `
  }
}
