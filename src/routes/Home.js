import { Component  } from "../core/dragon.js";
import Headline from "../components/Headline.js";
import Search from "../components/Search.js";
import MovieList from "../components/MovieList.js";
import MovieListMore from "../components/MovieListMore.js";
import Banner from "../components/Banner.js";

export default class Home extends Component {
    render() {
        const headline = new Headline().el
        const banner = new Banner().el
        const search = new Search().el
        const movieList = new MovieList().el
        const movieListMore = new MovieListMore().el

        this.el.classList.add('container')
        this.el.append(
            headline,
            banner,
            search,
            movieList,
            movieListMore
        )
    }
}