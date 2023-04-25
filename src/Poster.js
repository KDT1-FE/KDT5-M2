import { fetch } from '~/core/resPoster.js'

// ResponseValue 타입 정의
export default function Poster_res_value() {
  const ResponseValue = {
    Search: [], // 검색된 영화 목록, 최대 10개
    totalResults: '', // 검색된 영화 개수
    Response: 'True' | 'False' // 요청 성공 여부
  }

  // Movie
  const Movie = {
    Title: '', // 영화 제목
    Year: '', // 영화 개봉연도
    imdbID: '', // 영화 고유 ID
    Type: '', // 영화 타입
    Poster: '' // 영화 포스터 이미지 URL
  }
}
