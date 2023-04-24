declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
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
