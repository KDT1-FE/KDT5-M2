import React, { useState } from "react";
import "./Main.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const Main = () => {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(movie.imdbID);

  const changeText = (e) => {
    // console.log("e:", e);
    setTitle(e.target.value);
  };
  // const getMovie = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://omdbapi.com/?apikey=7035c60c&s=${text}`)
  //     .then((response) => {
  //       console.log("response:", response);
  //       setMovie(response.data.Search);
  //     });
  // };

  // async function getMovies(title, year = '', page = 1) {
  //   const s = `&s=${title}`
  //   const y = `&y=${year}`
  //   const p = `&page=${page}`
  //   try {
  //     const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`)
  //     const json = await res.json()
  //     if (json.Response === 'True') {
  //       const { Search: movies, totalResults } = json
  //       return {
  //         movies,
  //         totalResults
  //       }
  //     }
  //     return json.Error
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function getMovie() {
    try {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&s=${title}`
      );
      const json = await res.json();

      console.log("json:", json);
      setMovie(json.Search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="bigLogo">
          <p>
            <span>OMDb API</span> <br />
            THE OPEN <br /> MOVIE DATABASE
          </p>
          <p>
            The OMDb API is a RESTful web service to obtain movie information,
            all content and images on the site are contributed and maintained by
            our users. <br />
            If you find this service useful, please consider making a one-time
            donation or become a patron.
          </p>
        </div>
        <div className="inputs">
          <input
            className="search"
            type="search"
            placeholder="Search for Movies, Series & more"
            value={title}
            onChange={changeText}
          />
          <select name="option" id="" className="option">
            <option value="movie">movie</option>
            <option value="series">series</option>
            <option value="episode">episode</option>
          </select>
          <select name="number" id="" className="number">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <select name="years" id="" className="years">
            <option value="all">All Years</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          <button className="apply" onClick={getMovie}>
            Apply
          </button>
        </div>
        <div className="shows">
          <p>Search for the movie title!</p>
          {movie?.map((value, index) => {
            return (
              <img
                src={value.Poster}
                alt="movie poster"
                key={index}
                onClick={() => navigate(`/detail/${value.imdbID}`)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
