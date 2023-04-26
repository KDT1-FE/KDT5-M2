// export default async function fetchMovies(inputText) {
//   const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${inputText}`)
//   return (await res.json()).Search
// }

export default async function fetchMovies(title, year = '', type = 'movie', page = 1) {
  const s = `&s=${title}`
  const y = `&y=${year}`
  const p = `&page=${page}`
  const t = `&type=${type}`
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${t}${p}`)
    const json = await res.json()
    if (json.Response === 'True') {
      const { Search: movies, totalResults, Response } = json
      return {
        movies,
        totalResults,
        Response
      }
      // console.log(movies);
      
    }
    else if (json.Response === 'False') {
      const { Response, Error } = json;
      return { Response, Error }

    }
    return json.Error
  } catch (error) {
    console.log(error)
  }
}