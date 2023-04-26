import { Component } from '../core/Tteum'
import Headline from '../components/Headline'
import Saerch from '../components/Search'
import MovieList from '../components/MovieList'
import MovieListMore from '../components/MovieListMore'

export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Saerch().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      search,
      movieList,
      movieListMore
    )
  }
}