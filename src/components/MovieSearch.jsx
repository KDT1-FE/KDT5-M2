import styles from './MovieSearch.module.scss'
import { NavLink } from 'react-router-dom'

export default function MovieSearch(props) {
  return (
    <div className={styles.movieSearch}>
      <div>
        <h1>
          <NavLink to="/">OMDbAPI</NavLink>
        </h1>
        <input
          type="text"
          placeholder="Search Movies!"
          // Enter 키를 누를 시 handleSearch 함수 실행
          onKeyDown={props.handleSearch}
        />
      </div>
      <div>icon</div>
    </div>
  )
}
