export async function getMovieInfo(id) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
  )
  const j = await res.json()
  if (j.Response === 'True') {
    return alert(j)
  }
  return j.Error
}
