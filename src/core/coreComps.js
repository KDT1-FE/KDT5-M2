//Component

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', props = {}, state = {} } = payload
    this.el = document.createElement(tagName)
    this.props = props
    this.state = state
    this.render()
  }
  render() {
    //컴포넌트 확장 사용시 이용
  }
}

// Router
// routes 매개변수는 index.js의 createRouter이다.
// http://localhost:1234/#/about?a=1234&b=456의 주소에서 #과 ?를 기준으로 구분
// loaction.hash: 현재위치,주소확인
// hash(주소)와 같은 Router를 찾기위해 .find()메소드로 검색
// route.path: 각각의 라우트 객체가 가진 path 속성. 정규표현식: /#\/about\/?$/.test('#/about')
// component클래스를 new생성자()함수로 만들고 그 요소를 'router-view'에 append
// history.replaceState() 히스토리에 내역을 남기지 않으면서 페이지 이동을 해주는 명령어
// 이걸하는 이유는 사이트 최초 접속시 주소에 /#/이 없는데 이때 리다이렉트 하기 위함
// history.ReplaceState(상태 데이터, 제목, 교체할 주소 )
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, '', '/#/')
  }
  const routerView = document.querySelector('router-view')
  const [hash, queryString = ''] = location.hash.split('?')
  // 주소의 ?뒷 부분 a=123&b=456
  // .split('&')으로 -> ['a=123', 'b=456']
  // .reduce((누적, 현재) => {}, {초기 데이터}})
  // cur.split('=')으로 -> ['a', '123'] [키, 밸류]
  // 결과적으로  { a: '123', b: '456' }
  const query = queryString.split('&').reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})
  history.replaceState(query, '')

  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().el)

  window.scrollTo(0, 0) //페이지의 스크롤 위치 최상단
}

export function createRouter(routes) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(routes) //주소가 바뀔때 마다 호출
    })
    routeRender(routes) //최초 호출
  }
}

//Store
//.defineProperty( 객체, 키, ) : 객체 데이터의 속성읊 정의하는 메서드
// state는 message.js의 new Store()의 객체 매개변수
// 즉 key값은 state['message']
export class Store {
  constructor(state) {
    this.state = {}
    this.observers = {}
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key], // => { return state[key] }을 축약
        set: val => {
          state[key] = val
          if (Array.isArray(this.observers[key])) {
            this.observers[key].forEach(observer => observer(val))
          } //this.observers['message']()
        }
      })
    }
  }
  subscribe(key, cb) {
    Array.isArray(this.observers[key]) ? this.observers[key].push(cb) : (this.observers[key] = [cb])
  }
}
//this.observers['message'] = () => {}
// { message: () => {}} 뒤에 데이터 덮어쓰기 됌
// { message: [() => {}, () => {}, () => {}]} 한개 이상 여러개 보관할 수 있게^^ { message: [cb1, cb2, cb3...] }
