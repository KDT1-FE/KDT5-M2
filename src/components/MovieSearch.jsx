import styles from './MovieSearch.module.scss'

export default function MovieSearch(props) {
  return (
    <div className={styles.movieSearch}>
      <h1>OMDbAPI Movie</h1>
      <input
        type="text"
        placeholder="영화제목을 입력하세요"
        // Enter 키를 누를 시 handleSearch 함수 실행
        onKeyDown={props.handleSearch}
      />
    </div>
  )
}
