export async function getMovies(title) {
  try {
    const url = `http://omdbapi.com/?apikey=7035c60c&s=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
}
