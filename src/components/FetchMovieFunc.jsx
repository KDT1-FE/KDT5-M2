export async function getMovies(searchValue, setLoading) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&s=${searchValue}`,
    {
      method: 'GET'
    }
  )
  const { Search } = await res.json()
  console.log(Search)
  //fetch가 끝나면 로딩 화면 대신 MovieList를 표시함
  setLoading(false)
  return Search
}
