// 영화 API 연결
export async function fetchMovies(inputText) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&s=${inputText}`,
    {
      method: 'GET'
    }
  )
  const json = await res.json()
  console.log(json.Search)
  return json.Search || []
}
fetchMovies()
