import { Component } from "../core/core";

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
            href: `#/movie?id=tt4520988`
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
    this.el.innerHTML = /* HTML */ `
      <a 
        href="/" 
        class = "logo">
        <span>OMDbAPI</span>.com
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* HTML */ `
              <li>
                <a class = "${isActive ? 'active' : ''}"
                   href = "${menu.href}">
                   ${menu.name}</a>
              </li>
            `
          }).join('')}
        </ul>
      </nav>
      <a href = "#/about" class = "user">
        <img src = "https://lh3.google.com/u/0/ogw/AOLn63Ho7yTWq8NFduxZOWQ4APLUF7_dDvHkXgSFYKfT=s32-c-mo" alt = "User">
      </a>
    `
  }
}