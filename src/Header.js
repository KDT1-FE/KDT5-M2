import { Component } from '~/core/compEl.js'

export default class AppHeader extends Component {
  constructor() {
    super({
      // tagName: 'h1',
      state: {
        inputText: ''
      }
    })
  }
  render() {
    this.el.classList.add('title')
    this.el.innerHTML = `
    <h1>OMDb API</h1>
    <h2>THE OPEN MOVIE DATABASE</h2>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
    `

    // const inputEl = this.el.querySelector('input')
    // const inputHandler = () => {
    //   this.state.inputText = inputEl.value
    // }
    // inputEl.addEventListener('input', inputHandler)

    // const buttonEl = this.el.querySelector('button')
    // const buttonHandler = () => {
    //   console.log(this.state.inputText)
    // }
    // buttonEl.addEventListener('click', buttonHandler)
  }
}
