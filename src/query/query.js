import axios from 'axios'

import { useQuery, useInfiniteQuery } from 'react-query'

export const getSearchMovies = (query) => {
  console.log('QUERY : ', query)
  console.log('GSM :', `https://omdbapi.com/?apikey=7035c60c&${query}`)
  return useQuery(
    ['1', query],
    async () => {
      try {
        // page수 만큼 api요청 보내는 queue 만들어야 함
        const { data } = await axios({
          url: `https://omdbapi.com/?apikey=7035c60c&${query}`,
          method: 'GET',
        })
        return data.Search
      } catch (err) {
        return []
      }
    },
    {
      enabled: !!query,
    },
  )
}

export const getSearchInfitieMovies = (query) =>
  useInfiniteQuery(
    [`2${query}`],
    async ({ pageParam = 1 }) => {
      console.log(`https://omdbapi.com/?apikey=7035c60c&${query}&page=${pageParam}`)
      const { data } = await axios({
        url: `https://omdbapi.com/?apikey=7035c60c&${query}&page=${pageParam}`,
        method: 'GET',
      })
      return data.Search
    },
    {
      enabled: !!query,
      getPreviousPageParam: (firstPage) =>
        // console.log('Previous page id', firstPage)
        firstPage.previousId ?? undefined,
      getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    },
  )

export const getMovieDetail = () => {}
