import React, { useEffect, useState } from "react";
import styles from '../../../scss/SearchResult.module.scss'
import classNames from 'classnames/bind'
import { useNavigate } from "react-router-dom";

function SearchResult (props) {

  const navigate = useNavigate();
  const st = classNames.bind(styles)

  const [param, setParam] = useState({
    title: '',
    type: '',
    number: '',
    year: '',
    page: 1
  });

  const [dataList, setDatalist] = useState([]);
  const [dataState, setDataState] = useState(false);

  useEffect(()=>{
    if(props.setInfo){
        setParam({...param, ...props.setInfo});
    }
  }, [props.setInfo]);

useEffect(() => {
    console.log("param", param);
    if(param.title){
        sendApi();
    }       
}, [param]);

  const sendApi = async () => {
    const s = `&s=${param.title}`;
    const y = `&y=${param.year}`;
    const p = `&page=${param.page}`;
    try {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`);
      const json = await res.json();
      if (json.Response === "True") {
        const { Search: movies, totalResults } = json;
        setDatalist(movies);
        setDataState(true); 
        return {
          movies,
          totalResults
        };
      }
      return json.Error;
    } catch (error) {
      console.log(error);
    }
  };

  const onclickMovie = (id) => {
    navigate(`/movie/${id}`)
  }

  return(
    <div className={st('Result-container')}>
      { dataState ? (
        <div className={st('Result-container__inner')}>
          <div className={st('Result-container__movies')}>
          {dataList.map((movie) => (
            <div className={st('Result-container__MovieItem')} 
             onClick={() => onclickMovie(movie.imdbID)} key={movie.imdbID} 
            style={{'--props-image': `url(${movie.Poster})`}}>
              <div className={st('MovieItem-info')}>
                <div className="year">{movie.Year}</div>
                  <div className="title">{movie.Title}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
        ) : (
          <div className={st('NotFoundLayer')}>
            <div className={st('NotFoundLayer-title')}>
              Search for the movie title!
            </div>
          </div>
        )
      }
    </div>
  )
};
export default SearchResult