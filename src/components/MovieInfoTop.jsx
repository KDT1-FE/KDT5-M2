import styles from './MovieInfoTop.module.scss'
import { NavLink } from 'react-router-dom'

export default function MovieInfoTop(props) {
  return (
    <div className={styles.MovieInfoTop}>
      <h1>
        <NavLink to="/">OMDbAPI</NavLink>
      </h1>
      <span>{props.movies.Title}</span>
      <div>icon</div>
    </div>
  )
}
