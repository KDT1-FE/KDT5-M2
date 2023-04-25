/*
  검색된 영화 API 가져오기
  method: 'GET'
*/
export async function getMovies(title, movieId) {
  try {
    const url = `http://omdbapi.com/?apikey=7035c60c&s=${title}&i=${movieId}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e, "API 요청에 실패했습니다.");
  }
}
