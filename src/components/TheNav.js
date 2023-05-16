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
    window.addEventListener('popstate', () => { 
      this.render()
    })
  }
  render() {
    this.el.innerHTML = `
      <a href="#/" class="logo">OMDbAPI<sapn>.com</span></a>
      <div class="nav_menu">
        <ul>
          ${this.state.menus
            .map(menu => {
              const href = menu.href.split('?')[0]
              const hash = location.hash.split('?')[0]
              const isActive = href === hash
              return `
              <li>
                <a class = "${isActive ? 'active' : ''}" href="${menu.href}">${menu.name}</a>
              </li>
            `
            })
            .join('')}
        </ul>
      </div>
      <a href="#/about"class="user">
        <img src="https://i.postimg.cc/xj7w6Mt7/image.png" alt="user">
      </a>
    `
  }
}
