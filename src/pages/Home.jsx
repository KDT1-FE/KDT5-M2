import React, { useEffect, useState } from 'react'
import Layout from '../layouts/Layout'
import { getSearchInfitieMovies } from '../query/query'
import Search from '../components/Search'
import SearchList from '../components/SearchList'
import Spinner from '../components/Spinner'
import useScollDown from '../hooks/useScollDown'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isBottom] = useScollDown()
  const {
    data: movies,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = getSearchInfitieMovies(searchQuery)

  const handleOnSearch = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if (isBottom && isSuccess && hasNextPage) {
      fetchNextPage()
    }
  }, [isBottom])

  return (
    <Layout>
      <main>
        <h1 className="text-4xl tracking-widest mb-10">
          <p>OMDb API</p>
          <p>THE OPEN MOVIE DATABASE</p>
        </h1>
        <div>
          <p className="w-10/12 mb-2 ">
            The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are
            contributed and maintained by our users.
          </p>
          <p className="w-10/12 mb-8 ">
            If you find this service useful, please consider making a one-time donation or become a patron.
          </p>
        </div>
        <Search onSearch={handleOnSearch} />
        <section>
          <h2 className="text-2xl tracking-widest mb-10">Search List</h2>
          {isLoading && <Spinner />}
          {isSuccess ? <SearchList movies={movies} /> : <div>Search for the movie title</div>}
          {isFetchingNextPage && (
            <div className="h-screen">
              <Spinner pos="fixed bottom-28 left-0 right-0" />
            </div>
          )}
          <div className="h-56" />
        </section>
      </main>
    </Layout>
  )
}
