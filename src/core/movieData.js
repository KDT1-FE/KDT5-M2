import axios from "axios";

export async function fetchMovies(inputText, page) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&page=${page}`,
    method: "GET",
  });

  return data;
}
