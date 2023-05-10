import { Component } from '../core/assets'
import MovieItems from '../components/MovieItems'
import MovieItemsMore from '../components/MovieItemsMore'
import Search from '../components/Search'

export default class Home extends Component {
  render() {
    const movieItems = new MovieItems().el
    const movieItemsMore = new MovieItemsMore().el
    const search = new Search().el

    this.el.classList.add('searchpage')
    this.el.append(search, movieItems, movieItemsMore)
  }
}
