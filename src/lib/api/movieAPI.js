import axios from "axios";
/*
  검색된 영화 API 가져오기
  method: 'GET'
*/
export async function getMovies(title, page, year) {
  try {
    const { data } = await axios({
      url: `http://omdbapi.com/?apikey=7035c60c&s=${title}&y=${year}&page=${page}`,
      method: "GET",
    });
    return data;
  } catch (e) {
    console.error(e, "API 요청에 실패했습니다.");
  }
  // const result = await axios
  //   .get(`http://omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}`)
  //   .then((res) => res.data)
  //   .catch();
  // return {
  //   Search: [...result.Search],
  // };
}
