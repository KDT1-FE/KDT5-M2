import { useLocation, useNavigate } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from '../api/axios'
import './SearchPage.scss'
import not from '../img/not.png'

const SearchPage = () => {

  const [searchResults, setsearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }

  let query = useQuery()
  const searchTerm = query.get("q")
  const navigate = useNavigate() 

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`)
      setsearchResults(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {searchResults.length > 0 ? (
        <section className="search-container">
          {searchResults.map((movie) => {
            const movieImageUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : not;
            return (
              <div className="movie" key={movie.id}>
                <div className='column-poster' onClick={()=> navigate(`/${movie.id}`) }>
                  <img className='poster'
                    src={movieImageUrl} 
                    alt="not"
                  />
                  <div className='poster-text'>{movie.title}</div>
                </div>
              </div>
            )
          })}
        </section>
      ) : (
        <div className="no-results">
          There are no movies matching your search term "{searchTerm}"
        </div>
      )}
    </>
  )
}

export default SearchPage
