import { Component } from '~/core/coreComps.js'
import TheHeader from '~/components/TheHeader.js'
import Search from '~/components/Search.js'
import MovieList from '~/components/MovieList.js'

export default class Home extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    const theHeader = new TheHeader().el
    const search = new Search().el
    const movieList = new MovieList().el

    this.el.classList.add('container')
    this.el.append(theHeader, search, MovieList)

  }
}
//console.log(theHeader) // <div class="theheader">…</div>
// console.log(TheHeader) // ƒ TheHeader() {_classCallCheck(this, TheHeader);return _super.apply(this, arguments);}
