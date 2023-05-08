export default async function fetchMovies(
  title: string,
  year: string,
  type: string,
  page: string
) {
  const s = `&s=${title.trim()}`;
  const y = year === 'All Years' ? '' : `&y=${year}`;
  const t = `&type=${type}`;
  let movies: Movie[] = [];
  let errorMsg: string = '';
  try {
    for (let i = 1; i <= parseInt(page) / 10; i++) {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c${s}${y}${t}&page=${i}`
      );
      const json = await res.json();
      if (json.Response === 'True') {
        movies = [...movies, ...json.Search];
      } else {
        errorMsg = json.Error || 'Fetch Failed';
      }
    }
    return { movies, errorMsg };
  } catch (error) {
    console.log(error);
  }
}
