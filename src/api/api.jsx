import axios from 'axios'

export async function fetchMovies(inputText, selectedType, page) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}&type=${selectedType}&page=${page}`,
    method: 'GET'
  })
  return data.Search || []
}
