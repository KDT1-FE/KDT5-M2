import { Component } from '~/core/coreComps.js'

export default class TheNav extends Component {
  constructor() {
    super({
      tagName: 'nav',
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
  }
  render() {
    this.el.innerHTML = `
      <a href="#/" class="logo">OMDbAPI<sapn>.com</span></a>
      <div class="nav_menu">
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
      </div>
      <a href="#/Movie" class ="Movie"></a>
      <a href="#/About"class="user">
        <img src="https://cdn.iconscout.com/icon/free/png-256/user-370-456322.png" alt="user">
      </a>
    `
  }
}
