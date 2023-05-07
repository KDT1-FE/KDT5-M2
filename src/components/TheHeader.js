import { Component } from '../core/bear'

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
            href: '#/movie?id='
          },
          {
            name: 'About',
            href: '#/about'
          }
        ]
      }
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
              return `
              <li>
                <a href="${menu.href}">${menu.name}</a>
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
