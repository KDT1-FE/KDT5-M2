/*
  검색된 영화 API 가져오기
  method: 'GET'
*/
export async function getMovies(title, type, years, num) {
  let movies = [];
  try {
    for (let page = 1; page <= num; page++) {
      const url = `https://omdbapi.com/?apikey=7035c60c&s=${title}&type=${type}&page=${page}&y=${years}`;
      const response = await fetch(url);
      const result = await response.json();
      movies = [...movies, ...result.Search];
    }
    return movies;
  } catch (e) {
    console.error(e, "API 요청에 실패했습니다.");
  }
}
