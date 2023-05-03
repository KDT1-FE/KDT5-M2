import { useEffect, useState } from 'react'
import axios from 'axios'
import { clearMovieWord, setMovies } from '~/assets/data/store.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '~/components/loading.jsx'


export default function ThefetchMovie() {

  let dispatch = useDispatch()

  // let [currentPage, setCurrentPage] = useState(1)
  let movieWord = useSelector((state) => state.movieWord.list)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  const s = `&s=${movieWord.movieName}`
  const y = `&y=${movieWord.movieYear}`
  const n = `&type=${movieWord.movieType}`


  // const handleScroll = async () => {
  //   const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
  //   const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
  //   const clientHeight = window.innerHeight
  //   const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight
  //   console.log(scrolledToBottom)

  //   if (scrolledToBottom) {
  //     const data = await fetchMovie(currentPage + 1)
  //     console.log(data)
  //     console.log(currentPage)
  //     dispatch(setMovies(data))
  //     setCurrentPage(currentPage + 1)
  //   }
  // }

  async function fetchMovie(page) {
    const url = `https://omdbapi.com/?apikey=7035c60c${s}${y}${n}&page=${page}`
    setIsLoading(true)
    setIsError(false)
    try {
      const res = await axios.get(url, { responseType: 'json' })
      let data = res.data.Search || []
      setIsError(false)
      setIsLoading(false)
      return data;
    } catch (err) {
      console.log('접속 실패 하였슴')
      setIsError(true)
      setIsLoading(false)
      return [];
    }
  }

    useEffect(() => {
      (async () => {
        try {
          const result = [];
          for (let i = 1; i <= movieWord.movieCount; i++) {
            const data = await fetchMovie(i);
            result.push(...data);
          }
          dispatch(setMovies(result));
        } catch (err) {
          setIsError(true)
        }
      })()
      // window.addEventListener('scroll', handleScroll)
      return () => {
        dispatch(clearMovieWord())
        // window.removeEventListener('scroll', handleScroll)
      }
    }, [movieWord.movieName])

    if (isLoading) {
      return <Loading size={0}/>
    }
    if (isError) {
      return (
        <div>
          <h1>접속이 어렵습니다..</h1>
        </div>
      )
    }
}


