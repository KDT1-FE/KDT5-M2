import axios from "axios";

export async function getMovies() {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=frozen`,
    method: "GET",
  });
  console.log(data.Search);
}
