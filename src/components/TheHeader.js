import { Component } from '~/core/coreComps.js'

export default class TheHeader extends Component {
  render() {
    this.el.classList.add('theheader')
    this.el.innerHTML = `
    <h1>OMDb API</h1>
    <h2>THE OPEN MOVIE DATABASE</h2>
    <p>
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users. If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
    `
  }
}
