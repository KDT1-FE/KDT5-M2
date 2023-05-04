import axios from "axios";

export async function axiosDetailMovies(movieId) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=full`,
    method: "GET",
  });

  return data;
}
