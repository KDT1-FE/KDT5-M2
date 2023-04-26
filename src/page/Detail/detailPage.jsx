import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from '../../scss/Detail/detail.module.scss'
import classNames from 'classnames/bind'
import Loading from '../../components/loading';


function DetailPage () {

  const {id} = useParams();
  const [movieimg, setMovieimg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, useData] = useState([]);
  const st = classNames.bind(styles)

  useEffect( () =>{
    async function fetchData() {
      setLoading(true)
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
      )
      // .then(response => response.json())
      const json = await res.json();
      setMovieimg(json);
      useData(json.Ratings);
      setLoading(false)
    }
    fetchData();
  },[id]); 

  return(
    <>
    {/* {loading ? <Loading/>: null}  */}
    {/* <Loading/> */}
    
    { loading ? <div className={st('Load')}><Loading/></div> : 
    <div className={st('Detail-Container')}>
      <div className={st('Detail-Container_box')}>
        
        <div className={st('Detail-Container__moviebox')} delay={4000}>
          <img className={st('Detail-Container__movieimg')} 
          src={String(movieimg.Poster).replace('SX300', 'SX700')}/>   
        </div>
       
        <div className={st('Detail-Container__infobox')}>
          <div className={st('Detail-infobox__title')}>
              <span>{movieimg.Title}</span>
          </div>

          <div className={st('Detail-infobox__label')}>
            <span>{movieimg.Released} • {movieimg.Runtime} • {movieimg.Country}</span>
          </div>

          <div className={st('Detail-infobox__plot')}>
            <span>{movieimg.Plot}</span>
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
            <span>{movieimg.Actors}</span>
          </div>

          <div className={st('Detail-infobox__actors')}>
            <h3>Director</h3>
            <span>{movieimg.Director}</span>
          </div>

          <div className={st('Detail-infobox__actors')}>
            <h3>Production</h3>
            <span>{movieimg.Production}</span>
          </div>

          <div className={st('Detail-infobox__actors')}>
            <h3>Genre</h3>
            <span>{movieimg.Genre}</span>
          </div>
        </div>  
      </div>
    </div>
     }
    </>
  )
};
export default DetailPage;