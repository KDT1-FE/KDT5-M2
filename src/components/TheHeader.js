import {Component} from '../core/center'

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: '검색하기',
            href: '#/'
          },
          {
            name: '추천영화',
            href: '#/movie?id=tt4154796'
          },
          {
            name: '내 정보',
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
    this.el.innerHTML = /*html*/`
    <div class="inner">
     <a href="#/" class="logo">OMDbAPI</a>
    
    <nav>
      <ul>
      ${this.state.menus.map(menu => {
          const href = menu.href.split('?')[0]
          const hash = location.hash.split('?')[0]
          const isActive = href === hash 
          return /*html*/`
        <li>
          <a 
          class ="${isActive? 'active': ''}"
          href="${menu.href}">
        ${menu.name}</a>
        </li>
        `
      }).join('')}
      </ul>
    </nav>
    </div>
    `
  }
}