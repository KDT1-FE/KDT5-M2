export default async function fetchMovies(inputText) {
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${inputText}`)
  const { Search } = await res.json()
  return Search
}
