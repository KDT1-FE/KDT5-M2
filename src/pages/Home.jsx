import React, { useState } from 'react'
import Layout from '../layouts/Layout'
import Header from '../components/Header'
import { getSearchInfitieMovies } from '../query/query'
import Search from '../components/Search'
import SearchList from '../components/SearchList'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const {
    data: movies,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = getSearchInfitieMovies(searchQuery)

  const handleOnSearch = (query) => {
    setSearchQuery(query)
  }
  const GetNextMovies = () => {
    fetchNextPage()
  }
  return (
    <Layout>
      <Header />
      <main>
        <h1>OMDb API THE OPEN MOVIE DATABASE</h1>
        <p className="underline">
          The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are
          contributed and maintained by our users.
        </p>
        <p>If you find this service useful, please consider making a one-time donation or become a patron.</p>
        <Search onSearch={handleOnSearch} />
        <section>
          <h2>SearchList</h2>
          {isLoading && <p>Loading...</p>}
          {isSuccess ? <SearchList movies={movies} /> : <div>Search for the movie title</div>}
        </section>
      </main>
      <button type="button" onClick={GetNextMovies}>
        get next data
      </button>
    </Layout>
  )
}
