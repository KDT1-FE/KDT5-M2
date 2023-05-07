import { Component } from '../core/core'
import Headline from '../components/Headline'
import Search from '../components/Search'
import MovieList from '../components/MovieList'
import MovieListMore from '../components/MovieListMore'

export default class Home extends Component {
  render () {
    this.el.classList.add('homeContainer')
    const container1 = document.createElement('div')
    const headline = new Headline().el
    const search = new Search().el
    container1.classList.add('container1')
    container1.append(
      headline,
      search
    )

    const container2 = document.createElement('div')
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el
    container2.classList.add('container2')
    container2.append(
      movieList,
      movieListMore
    )

    this.el.innerHTML = ''
    this.el.append(
      container1,
      container2
    )
  }
}