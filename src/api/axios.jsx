import axios from 'axios'

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "47043aaf6dff877d2f8aca2adf7331cb",
    language: "ko-KR"
  }
})

export default instance