import axios from 'axios'
import { setDetail } from '~/assets/data/store.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function TheDetailNet() {
  let { id } = useParams()
  let dispatch = useDispatch()

  async function fetchData() {
    try {
      const response = await axios.get(`https://omdbapi.com/?apikey=7035c60c&plot=full&i=${id}`, { responseType: 'json' })
      dispatch(setDetail(response.data))
      console.log('접속 성공 하였슴')
    } catch (error) {
      console.log('접속 실패 하였슴')
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])
  return null
}

export default TheDetailNet