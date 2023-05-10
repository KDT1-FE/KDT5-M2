import { Component } from "../core/dragon";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')

    // 포스터 미리보기 대체 이미지 
    if (movie.Poster === "N/A") {
      this.el.style.backgroundImage = `url('https://www.freeiconspng.com/uploads/no-image-icon-8.png')`;
      this.el.style.backgroundSize = "cover";
      this.el.style.backgroundPosition = "center";
    } else {
      this.el.style.backgroundImage = `url(${movie.Poster})`
    }
    // 포스터 미리보기 대체 이미지 

    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
      </div>
    
    `
  }
}
