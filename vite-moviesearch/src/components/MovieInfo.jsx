import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InternetMovieDatabase from "../assets/InternetMovieDatabase.png";
import RottenTomatoes from "../assets/RottenTomatoes.png";
import Metacritic from "../assets/Metacritic.png";
import { Oval } from "react-loader-spinner";
import noimages from "../assets/noimages.png";

export default function MovieInfo() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  async function fetchDetailMovie() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&i=${
        params.movieId || "tt4520988"
      }&plot=full`
    );
    return await res.json();
  }

  useEffect(() => {
    (async () => {
      setMovie(await fetchDetailMovie());
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Oval color="yellow" height={100} width={100} />
      </div>
    );
  }

  return (
    <>
      <div className="pt-10 px-3 mx-auto sm:w-[36rem] md:w-[42.5rem] lg:w-[56.25rem] xl:w-[75rem] 2xl:w-[82.25rem]">
        <ul className="lg:flex flex-wrap">
          <li className="mr-8">
            <img
              className="lg:w-[18rem] lg:h-[27rem] xl:w-[31.5rem] xl:h-[50rem]"
              src={movie.Poster !== "N/A" ? movie.Poster : noimages}
              alt={movie.Title}
            />
          </li>
          <li className="lg:w-[32rem] lg:h-[50rem]">
            <h1 className="text-7xl font-extrabold my-6">{movie.Title}</h1>
            <span className="text-regal-yellow text-lg font-medium">
              {movie.Released}, {movie.Runtime} , {movie.Country}
            </span>
            <p className="mt-5 text-gray-500 text-base"> {movie.Plot}</p>
            <ul className=" mt-4">
              <li>
                <h2 className="font-extrabold text-xl">Ratings</h2>

                <div className="flex flex-wrap">
                  {movie.Ratings
                    ? movie.Ratings.map((rating) => (
                        <div
                          className=" flex flex-wrap text-regal-gray mr-4"
                          key={rating.Source}
                        >
                          <img
                            className="w-12
                            h-6 mr-2"
                            src={
                              rating.Source === "Internet Movie Database"
                                ? InternetMovieDatabase
                                : rating.Source === "Rotten Tomatoes"
                                ? RottenTomatoes
                                : rating.Source === "Metacritic"
                                ? Metacritic
                                : ""
                            }
                            alt={rating.Source}
                          />
                          {`${rating.Value}`}
                        </div>
                      ))
                    : []}
                </div>
              </li>
              <li className=" mt-4">
                <h2 className="font-extrabold text-xl">Actors</h2>
                <span className="text-gray-500">{movie.Actors}</span>
              </li>
              <li className=" mt-4">
                <h2 className="font-extrabold text-xl">Director</h2>
                <span className="text-gray-500">{movie.Director}</span>
              </li>
              <li className=" mt-4">
                <h2 className="font-extrabold text-xl">Production</h2>
                <span className="text-gray-500">{movie.Production}</span>
              </li>
              <li className=" mt-4">
                <h2 className="font-extrabold text-xl">Genre</h2>
                <span className="text-gray-500">{movie.Genre}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
