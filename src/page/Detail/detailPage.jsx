import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from '../../scss/Detail/detail.module.scss'
import classNames from 'classnames/bind'
import DetailSkeleton from './component/skelaton';

function DetailPage () {

  const {id} = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, useData] = useState([]);
  const st = classNames.bind(styles)

  useEffect( () =>{
    async function fetchData() {
      setLoading(true)
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
      )
      const json = await res.json();
      setMovie(json);
      useData(json.Ratings);
      setLoading(false)
    }
    fetchData();
  },[id]); 

  return(
    <>
    <div className={st('Detail-Container')}>
      <div className={st('Detail-Container_box')}>
        <div className={st('Detail-Container_inner')}>
        
          { loading ? < DetailSkeleton /> : (
            <>
          <div className={st('Detail-Container__moviebox')}>
            <img className={st('Detail-Container__movieimg')} 
            src={movie.Poster !== 'N/A' ? movie.Poster.replace('SX300', 'SX700'): "https://joonfont.com/wp-content/uploads/2019/07/notdef2.jpg"}/>   
          </div>

          <div className={st('Detail-Container__infobox')}>
            <div className={st('Detail-infobox__title')}>
                <span>{movie?.Title}</span>
            </div>

            <div className={st('Detail-infobox__label')}>
              <span>{movie.Released} • {movie.Runtime} • {movie.Country}</span>
            </div>

            <div className={st('Detail-infobox__plot')}>
              <span>{movie.Plot}</span>
            </div>
        
            <div className={st('Detail-infobox__ratings')}>
              <h3>Ratings</h3>
      
              <div className={st('Detail-Database__box')}>
                {data.map((obj) => (
                <div title={obj.Source} className={st('Detail-Movie__Database')}>
                  <img src={`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${obj.Source}.png`} alt={obj.Source} />
                  <span>{obj.Value}</span>
                </div> 
                ))
                }
              </div>
            </div>

            <div className={st('Detail-infobox__actors')}>
              <h3>Actor</h3>
              <span>{movie.Actors}</span>
            </div>

            <div className={st('Detail-infobox__actors')}>
              <h3>Director</h3>
              <span>{movie.Director}</span>
            </div>

            <div className={st('Detail-infobox__actors')}>
              <h3>Production</h3>
              <span>{movie.Production}</span>
            </div>

            <div className={st('Detail-infobox__actors')}>
              <h3>Genre</h3>
              <span>{movie.Genre}</span>
            </div>
          </div>
          </>
          )}
        </div>  
      </div>
    </div>
    </>
  )
};
export default DetailPage;