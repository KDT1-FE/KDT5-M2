import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function NavigationBar() {
  //useParams로 동적 세그먼트를 불러와 undefined면 특정 영화 ID를 NavLink의 경로로 반환하는 함수 선언
  const { movieId } = useParams()
  const movieUrl = () => {
    if (movieId === undefined) {
      return '/MovieInfo/tt4520988'
    }
    return `/MovieInfo/${movieId}`
  }

  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Search</NavLink>
        </li>
        <li>
          <NavLink to={movieUrl()}>Movie</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
      </ul>
    </>
  )
}
