import { Component } from '../core/assets'

// MovieItem 클래스명으로 하여 tagName을 a로 하여 클릭 시 Movie page로 이동하도록 구성
export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a'
    })
  }
  render() {
    const { movie } = this.props

    // setArrtribute 기능으로 #/movie 해당 imdbID로 출력되도록 구성
    this.el.setAttribute('href', `#/movie?id=${movie.imdbID}`)
    this.el.classList.add('movie')
    this.el.innerHTML = /* html */ `
      <div class="info">
        <div class="year">
          ${movie.Year}
        </div>
        <div class="title">
          ${movie.Title}
        </div>
        <div class="type">
          ${movie.Type}
        </div>
      </div>
      <!-- 영화 포스터가 없을 경우 onerror 속성을 통해 대체 이미지 '스즈메의 문단속 포스터' 출력 -->
      <img src="${movie.Poster}"  onerror="this.src='https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86815/86815_1000.jpg'" />
    `
  }
}
