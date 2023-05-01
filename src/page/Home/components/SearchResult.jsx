import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames/bind'
import Loading from "../../../components/loading";
import styles from '../../../scss/home/components/SearchResult.module.scss'
import PageContext from "../../../store/context";
import { Skeleton } from "@mui/material";

function SearchResult(props) {

  const navigate = useNavigate();
  const st = classNames.bind(styles)
  const { value, setValue } = useContext(PageContext);

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
  const [hasNextPage, setHasNextPage] = useState(false);
  const Pagee = useRef(1);
  const observerTargetEl = useRef(null);

// 1번 입력한 데이터를 받아오고 저장
  useEffect(() => {
    if (props.setInfo) {
      setParam({ ...param, ...props.setInfo });
    }
  }, [props.setInfo]);

//2번 api 호출 및 기본값 설정 
  useEffect(() => {
    if (param.title) {
      //기본값 초기값 지정 화면에서 다른조건을 입력했을때 데이터추가방지
      setDatalist([]);
      Pagee.current = 1;
      setHasNextPage(false);
      sendApi(Pagee.current);
    }else{
      setDataState(false);
    }
  }, [param]);

  const sendApi = async (page) => {
    if (!param.title) return false;
    setLoading(true);
    const s = `&s=${param.title}`;
    const y = `&y=${param.year}`;
    const p = `&page=${page}`;
  
    try {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`);
      const json = await res.json();
      if (json.Response === "True") {
        
        const { Search: movies, totalResults: total } = json;
        setDatalist(prevDataList => [...prevDataList, ...movies]);
        // true 로 만들어 주기 위해 아래 식 무한스크롤을 위한 조건식 
        setHasNextPage(Pagee.current < Math.round(total/10));
        // 데이터 유무 
        setDataState(true);
        setLoading(false);
        
      } else {
        setLoading(false);
        alert(json.Error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
// 무한스크롤
  useEffect(() => {
    console.log("IntersectionObserver")
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면아래 내렸을때 동작
        if (entries[0].isIntersecting && hasNextPage) {
          Pagee.current++;
          sendApi(Pagee.current); 
        }
      },
    );

    // 화면아래 영역을 감시하도록한다.
    if (observerTargetEl.current) {
      observer.observe(observerTargetEl.current);
    }
  
    return () => {
      // 영역 감시 해제 
      observer.disconnect();
    };
  }, [hasNextPage]);

  //상세페이지 이동 
  const onclickMovie = (value) => {
    setValue(value);
    navigate(`/movie/${value}`)
  }

    return(
    <>
      <div className={st('Resultcontainer')}>
        <div className={st('Resultcontainer-box')}>
        {dataState ? (  
          <div className={st('Result-container__inner')}>
            <div className={st('Result-container__movies')}>
            {
              (loading ? Array.from(new Array(10)) : dataList).map((movie, index) => (
                // 스켈레톤 적용. movie 데이터가 있을때?
                movie ? (
                  <div className={st('Result-container__MovieItem')}
                    onClick={() => onclickMovie(movie.imdbID)} key={`${movie.imdbID}`} 
                    style={{'--props-image': movie.Poster !== 'N/A' ? `url(${movie.Poster})` : 'url(https://joonfont.com/wp-content/uploads/2019/07/notdef2.jpg)',}}>
                    <div className={st('MovieItem-info')}>
                      <div className="year">{movie.Year}</div>
                      <div className="title">{movie.Title}</div>
                    </div>
                  </div>
                ) : (
                  // 없을때 
                  <div className={st('Result-container__MovieItem')} >
                    <Skeleton variant="rectangular" width={200} height={300} animation="wave"/>
                  </div>
                )
              ))
            }   
            </div>
            <div className={st('Result-container__next')} ref={observerTargetEl}>
              {loading ? <Loading/> : ""}
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