import axios from "axios";

export async function axiosMovies(inputText, year, type, page) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&y=${year}&type=${type}&page=${page}`,
    method: "GET",
  });
  return data;
}
