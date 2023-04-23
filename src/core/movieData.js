import axios from "axios";

export async function fetchMovies(inputText) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}`,
    method: "GET",
  });
  // ` || [] `:  array.map 오류 방지
  console.log(data.Searach);
  return data.Search || [];
}
