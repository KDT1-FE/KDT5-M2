import React from 'react'

export default function MovieList(props) {
  const { movies, inputText } = props
  return (
    <>
      {movies.length ? (
        <ul className="flex flex-wrap bg-gray-200 place-content-start flex justify-center m-2 p-6">
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <a
                className="overflow-hidden relative"
                href={`/movies/${movie.imdbID}`}>
                <img
                  className="w-[12.5rem] h-[18.75rem] rounded mr-4 mt-4"
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <div className="  bg-regal-blue backdrop-blur-md bg-white/30  rounded absolute w-[12.5rem] h-[3.75rem] text-center p-3.5 inset-x-0 bottom-0 z-10">
                  <p className=" text-regal-yellow text-s font-normal leading-tight">
                    {movie.Year}
                  </p>
                  <p className=" text-md text-white font-medium leading-tight">
                    {movie.Title}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className=" mt-4 bg-gray-200  w-full h-[12rem] flex justify-center items-center text-gray-300 font-semibold text-2xl">
          {!inputText.trim()
            ? 'Search for the movie title!'
            : 'Request failed with status code 400'}
        </div>
      )}
    </>
  )
}
