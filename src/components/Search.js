import { Component } from "../core/dragon";
import movieStore, { searchMovies } from '../store/movie'

export default class Search extends Component {
    render() {
        this.el.classList.add('search')
        this.el.innerHTML = /* html */ `
            <input value="${movieStore.state.searchText}"
            placeholder="Search for the title of the movie in English." />
            <button class="btn btn-primary">
                Search!
            </button>
        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            movieStore.state.searchText = inputEl.value
        })
        inputEl.addEventListener('keydown', event => {
            if (event.key === 'Enter' && movieStore.state.searchText.trim()) {
                searchMovies(1)
                searchMovies(2)
                // 엔터를 쳤을 때 20개의 목록이 나오게 api에 요청을 2번 한다.
            }
        })

        const btnEl = this.el.querySelector('.btn')
        btnEl.addEventListener('click', () => {
            searchMovies(1)
            searchMovies(2)
            // search 버튼을 click 했을 때 20개의 목록이 나오게 요청을 2번 한다.
        })
    }
}
