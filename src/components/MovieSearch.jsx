import styles from './MovieSearch.module.scss'

export default function MovieSearch(props) {
  return (
    <div
      className={styles.movieSearch}
      style={props.searchMarginTop}>
      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="Search Movies!"
          // Enter 키를 누를 시 handleSearch 함수 실행
          onKeyDown={props.handleSearch}
        />
      </div>
      <div className={styles.viewNumbers}>
        <select
          //App에서 받은 setViewNumber에 value를 저장하는 이벤트 핸들링
          onChange={e => props.setViewNumber(e.target.value)}>
          <option value="1">10</option>
          <option value="2">20</option>
          <option value="3">30</option>
          <option value="4">40</option>
          <option value="5">50</option>
        </select>
      </div>
      {/* App에서 받은 setViewYear value를 저장하는 이벤트 핸들링 */}
      <div className={styles.viewYears}>
        <select onChange={e => props.setViewYear(e.target.value)}>
          <option value="">All Years</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>2007</option>
          <option>2006</option>
          <option>2005</option>
          <option>2004</option>
          <option>2003</option>
          <option>2002</option>
          <option>2001</option>
          <option>2000</option>
          <option>1999</option>
          <option>1998</option>
          <option>1997</option>
          <option>1996</option>
          <option>1995</option>
          <option>1994</option>
          <option>1993</option>
          <option>1992</option>
          <option>1991</option>
          <option>1990</option>
          <option>1989</option>
          <option>1988</option>
          <option>1987</option>
          <option>1986</option>
          <option>1985</option>
        </select>
      </div>
    </div>
  )
}
