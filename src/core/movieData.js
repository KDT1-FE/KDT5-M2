import axios from "axios";

export async function axiosMovies(inputText, page) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&page=${page}`,
    method: "GET",
  });

  return data;
}
