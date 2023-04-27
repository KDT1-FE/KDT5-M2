import { Store } from '~/core/coreComps'
import axios from 'axios'

const store = new Store({
  searchText: '',
  page: 1,
  year: '',
  movies: []
})

export default store
export async function requestAll(searchText, year = '', page = 1) {
  const s = `&s=${searchText}`
  const y = `&y=${year}`
  const p = `&page=${page}`
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${s}${y}${p}}`,
    method: 'GET'
  })
  // console.log(data.Search)
  return data.Search
}
