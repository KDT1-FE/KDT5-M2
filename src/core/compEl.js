//component

export class Component {
  constructor(payload = {}) {
    const { tagName = 'div', state = {} } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.render()
  }
  render() {
    //컴포넌트 확장 사용시 이용
  }
}
