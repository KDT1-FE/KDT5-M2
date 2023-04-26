import axios from 'axios'

export async function fetchMovies(
  inputText,
  typeFilter,
  countFilter,
  yearFilter
) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&type=${typeFilter}&y=${yearFilter}&page=1`,
    method: 'GET'
  })

  if (data.Res === 'False') {
    return []
  }

  const movieList = data.Search || []

  if (countFilter) {
    let result = []
    for (let i = 1; i <= countFilter / 10; i++) {
      const { data } = await axios({
        url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&type=${typeFilter}&y=${yearFilter}&page=${i}`,
        method: 'GET'
      })
      result = result.concat(data.Search || [])
    }
    return result.slice(0, countFilter)
  }

  return movieList
}
