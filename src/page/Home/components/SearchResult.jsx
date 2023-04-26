import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames/bind'
import Loading from "../../../components/loading";
import styles from '../../../scss/home/components/SearchResult.module.scss'

function SearchResult (props) {

  const navigate = useNavigate();
  const st = classNames.bind(styles)

  const [param, setParam] = useState({
    title: '',
    type: '',
    number: '10',
    year: '',
    page: 1
  });

  const [dataList, setDatalist] = useState([]);
  const [dataState, setDataState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if(props.setInfo){
        setParam({...param, ...props.setInfo});
    }
  }, [props.setInfo]);

  useEffect(() => {
    console.log("param", param);
    if(param.title){
      setDatalist([]);
      let max = param.number/10;
      //max = 10->1, 20->2, 30->3
      for(let i=1; i<max+1; i++){
        sendApi(i);
      }
      console.log(i)  
    }       
  }, [param]);

  const sendApi = async (page) => {
    setLoading(true)
    const s = `&s=${param.title}`;
    const y = `&y=${param.year}`;
    const p = `&page=${page}`;

    try {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`);
      const json = await res.json();
      if (json.Response === "True") {
          setLoading(false);
          const { Search: movies } = json;
          setDatalist(dataList => [...dataList, ...movies]); // 영화 목록을 state에 저장
          setDataState(true); // 영화 목록이 있다는 상태를 true로 설정
      } else {
        setLoading(true);
        alert(data.Error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onclickMovie = (id) => {
    navigate(`/movie/${id}`)
  }
  
  return(
    <>
    <div className={st('Resultcontainer')}>
      <div className={st('Resultcontainer-box')}>
      {dataState ? (  
        <div className={st('Result-container__inner')}>
          <div className={st('Result-container__movies')}>
          {loading ? <Loading/>: 
            dataList.map((movie) => (
              <div className={st('Result-container__MovieItem')} 
                onClick={() => onclickMovie(movie.imdbID)} key={movie.imdbID} 
                style={{'--props-image': `url(${movie.Poster})`}}>
                <div className={st('MovieItem-info')}>
                  <div className="year">{movie.Year}</div>
                  <div className="title">{movie.Title}</div>
                </div>
              </div>
            ))
          }   
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
    </div>
    </>
  )
};
export default SearchResult