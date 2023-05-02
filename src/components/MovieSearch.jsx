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
      <div>
        <select
          //App에서 받은 setViewNumber에 value를 저장하는 이벤트 핸들링
          onChange={e => props.setViewNumber(e.target.value)}>
          <option value="1">10개</option>
          <option value="2">20개</option>
          <option value="3">30개</option>
          <option value="4">40개</option>
          <option value="5">50개</option>
        </select>
      </div>
    </div>
  )
}
