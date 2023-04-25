export default async function fetchMovies(data) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&${data}`);
  const json = await res.json();
  console.log(json);
  if (json.Response === 'False') return false;
  return json;
}
