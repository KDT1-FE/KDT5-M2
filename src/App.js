// 요소 추가하기 예제
// import { Component } from '~/core/compEl.js'

// export default class App extends Component {
//   constructor() {
//     super({
//       tagName: 'h1'
//     })
//   }
//   render() {
//     this.el.textContent = 'Hello World'
//   }
// }

// input 요소 추가하기
import { Component } from '~/core/compEl.js'

export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: ''
      }
    })
  }
  render() {
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
    <input />
    <button>click</button>
    `

    const inputEl = this.el.querySelector('input')
    const inputHandler = () => {
      this.state.inputText = inputEl.value
    }
    inputEl.addEventListener('input', inputHandler)

    const buttonEl = this.el.querySelector('button')
    const buttonHandler = () => {
      console.log(this.state.inputText)
    }
    buttonEl.addEventListener('click', buttonHandler)
  }
}
