import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'
import './DetailPage.scss'

const DetailPage = () => {
  let {movieId} = useParams()
  const [movie, setmovie] = useState({})

  useEffect(()=> {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      setmovie(response.data)
    }
    fetchData()
  },[movieId])

  if(!movie) return null

  return (
    <div className='container'>
      <img
      className='poster-img'
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      alt="img"/>
      <div className='movie-info'>
        <div className='title'> {movie.title}</div>
        <div className='label'>개봉일 : {movie.release_date}</div>
        <div className='label'> 상영시간 : {movie.runtime}</div>
        <div className='label'> 평점 : {movie.vote_average}</div>
        <div className='label'> 인기 : {movie.popularity}</div>
        <div className='overview'> {movie.overview}</div>        
      </div>
    </div>
  )
}

export default DetailPage