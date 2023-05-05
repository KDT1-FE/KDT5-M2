import React, { useState, useEffect } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  // async function getMovie(id) {
  //   const res = await fetch(
  //     `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
  //   );
  //   const json = await res.json();
  //   console.log("json:", json);
  //   if (json.Response === "True") {
  //     return json;
  //   }
  //   return json.Error;
  // }
  // console.log(getMovie);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`
      );
      const json = await res.json();
      setMovie(json);
    }
    fetchData();
  }, [id]);
  console.log("movie:", movie);

  return (
    <div className="container">
      {Array(movie) &&
        Array(movie).map((value, index) => {
          return (
            <>
              <div className="poster">
                <img src={value.Poster} alt="" key={index - 1} />
              </div>
              <div className="title">
                <p key={index - 2}>{value.Title}</p>
              </div>
              <div className="sub-title">
                <p>
                  <span key={index - 3}>{value.DVD}/</span>{" "}
                  <span key={index - 8}>{value.Runtime}/</span>
                  <span key={index - 9}>{value.Country}</span>
                </p>
              </div>
              <div className="explains">
                <p key={index - 4}>{value.Plot}</p>
              </div>
              <div className="ratings">
                <span className="rating-title">Ratings</span>
                <div className="rating">
                  <img
                    src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Internet%20Movie%20Database.png"
                    alt=""
                    className="imdb"
                  />
                  <p>6.8/10</p>
                  <img
                    src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Rotten%20Tomatoes.png"
                    alt=""
                    className="rotten-tomatoes"
                  />
                  <p>77%</p>
                  <img
                    src="https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Metacritic.png"
                    alt=""
                    className="m"
                  />
                  <p>64/100</p>
                </div>
                <div className="relation">
                  <div className="actors">
                    <span>Actors</span>
                    <p key={index - 5}>{value.Actors}</p>
                  </div>
                  <div className="director">
                    <span>Director</span>
                    <p key={index - 6}>{value.Director}</p>
                  </div>
                  <div className="genre">
                    <span>Genre</span>
                    <p key={index - 7}>{value.Genre}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Detail;
