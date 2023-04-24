declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.jpg';
declare module '*.png';
interface NavItem {
  name: string;
  href: string;
}

interface Movie {
  Title: string; // 영화 제목
  Year: string; // 영화 개봉연도
  imdbID: string; // 영화 고유 ID
  Type: string; // 영화 타입
  Poster: string; // 영화 포스터 이미지 URL
}
interface MovieDetail {
  Title: string; // 영화 제목
  Year: string; // 영화 개봉연도
  Rated: string; // 영화 등급
  Released: string; // 영화 개봉일
  Runtime: string; // 영화 상영시간
  Genre: string; // 영화 장르
  Director: string; // 영화 감독
  Writer: string; // 영화 작가
  Actors: string; // 영화 출연진
  Plot: string; // 영화 줄거리
  Language: string; // 영화 언어
  Country: string; // 영화 제작 국가
  Awards: string; // 영화 수상 내역
  Poster: string; // 영화 포스터 이미지 URL
  Ratings: Rating[]; // 영화 평점 정보
  Metascore: string; // 영화 메타스코어
  imdbRating: string; // 영화 IMDB 평점
  imdbVotes: string; // 영화 IMDB 투표 수
  imdbID: string; // 영화 고유 ID
  Type: string; // 영화 타입
  DVD: string; // 영화 DVD 출시일
  BoxOffice: string; // 영화 박스오피스
  Production: string; // 영화 제작사
  Website: string; // 영화 공식 웹사이트
  Response: string; // 요청 성공 여부
}
interface Rating {
  // 영화 평점 정보
  Source: string; // 평점 제공 사이트
  Value: string; // 평점
}
