export default async function fetchMovieDetail(data) {
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&${data}`);
    const json = await res.json();
    if (json.Response === 'False') throw new Error(json.Error);
    return json;
  } catch (err) {
    alert(err);
  }
}
