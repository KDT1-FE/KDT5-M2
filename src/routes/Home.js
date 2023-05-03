import { Component } from '../core/assets'

export default class Home extends Component {
  async render() {
    this.el.classList.add('main-co')
    this.el.innerHTML = /* html */ `
      <div class="co-detail">
        <!-- Section : Trail-info -->
        <section class="trail-info">
          <div class="trail-detail">
            <div class="trail-title">
              <h3>Avengers Infinity War</h3>
              <a 
                href="https://www.youtube.com/watch?v=xUDhdCsLkjU" 
                target="_blank">
                Trailer</a>
            </div>
            <ul class="scene">
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154120_727.jpg" />
              </li>
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154123_727.jpg" />
              </li>
              <li>
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000080/80585/80585154128_727.jpg" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    `
  }
}
