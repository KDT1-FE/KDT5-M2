import axios from "axios";

export async function getMovies(title) {
  const pageOne = await axios
    .get(`http://omdbapi.com/?apikey=7035c60c&s=${title}&page=1`)
    .then((res) => res.data)
    .catch((e) => console.error(e, "API 요청에 실패했습니다."));

  const pageTwo = await axios
    .get(`http://omdbapi.com/?apikey=7035c60c&s=${title}&page=2`)
    .then((res) => res.data)
    .catch((e) => console.error(e, "API 요청에 실패했습니다."));

  const pageThree = await axios
    .get(`http://omdbapi.com/?apikey=7035c60c&s=${title}&page=3`)
    .then((res) => res.data)
    .catch((e) => console.error(e, "API 요청에 실패했습니다."));

  const pageFour = await axios
    .get(`http://omdbapi.com/?apikey=7035c60c&s=${title}&page=3`)
    .then((res) => res.data)
    .catch((e) => console.error(e, "API 요청에 실패했습니다."));

  return {
    Search: [
      ...pageOne.Search,
      ...pageTwo.Search,
      ...pageThree.Search,
      ...pageFour.Search,
    ],
  };
}
