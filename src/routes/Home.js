import { Component } from "../core/center";
import Headline from '../components/Headline'
import Search from '../components/Search'
import MovieList from "../components/MovieList";
import MovieListMore from "../components/MovieListMore";

export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const searchInput = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el

    this.el.classList.add('container')
    this.el.append(
      headline,
      searchInput,
      movieList,
      movieListMore
    
    )
  }
}