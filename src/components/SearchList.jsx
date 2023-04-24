import React from 'react'
import PropTypes from 'prop-types'
// import htmlEntitiesDecoder from 'html-entities-decoder'
// import { useMoviesData } from '../context/movieContext'
// const movies = JSON.parse(htmlEntitiesDecoder(useMoviesData()))

export default function SearchList({ movies }) {
  console.log(' movies :', movies)
  return (
    <ul className="flex justify-center flex-wrap">
      {movies &&
        movies.pages.map((page) =>
          page.map((movie) => (
            <li key={movie.imdbID}>
              <img
                src={
                  movie.Poster === 'N/A'
                    ? 'http:yoonbumtae.com/wp-content/uploads/2022/10/1_hFwwQAW45673VGKrMPE2qQ.png'
                    : movie.Poster
                }
                style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                alt="Movie Poster"
              />
              <div className="description">
                <p>{movie.Year}</p>
                <p>{movie.Title}</p>
              </div>
            </li>
          )),
        )}
    </ul>
  )
  // return (
  //   <ul className="flex justify-center flex-wrap">
  //     {movies ? (
  //       movies.map((movie) => (
  //         <li key={movie.imdbID}>
  //           <img
  //             src={
  //               movie.Poster === 'N/A'
  //                 ? 'http://yoonbumtae.com/wp-content/uploads/2022/10/1_hFwwQAW45673VGKrMPE2qQ.png'
  //                 : movie.Poster
  //             }
  //             style={{ width: '200px', height: '300px', objectFit: 'cover' }}
  //             alt="Movie Poster"
  //           />
  //           <div className="description">
  //             <p>{movie.Year}</p>
  //             <p>{movie.Title}</p>
  //           </div>
  //         </li>
  //       ))
  //     ) : (
  //       <li>empty!</li>
  //     )}
  //   </ul>
  // )
}

SearchList.propTypes = {
  movies: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        imdbID: PropTypes.string,
        Type: PropTypes.string,
      }),
    ),
  }).isRequired,
}
