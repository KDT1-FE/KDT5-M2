export default async function fetchMovies(title, type, years, num, i = 1) {
  let movies = [];

  for (; i <= num; i++) {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${title}&type=${type}&page=${i}&y=${years}`
    );
    const json = await res.json();
    if (json.Response === 'False') throw new Error(json.Error);
    movies = [...movies, ...json.Search];
  }

  return movies;
}
