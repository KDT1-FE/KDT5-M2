import { Component } from '~/core/coreComps.js'
// import TheNav from './components/TheNav'

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view')
    this.el.append(routerView)
  }
}
//클래스인 TheHeader는 this.el에 바로 추가 못함. 생성자 함수 new와 함께 생성자 함수로 만들고 그 요소(.el)를 추가하게 한다.
//router는 프엔에서 page를 지칭한다. 'router-view'는 표준 html 문법이 아님을 알아두고 이런 작업을 할때는 헷갈리지 않도록 '-'로 이루어진 두 단어로 사용해라!
//
