/**
 * 서버와 통신하는 컴포넌트는 간단해야합니다.
 * 서버와 통신하는 로직 외 DOM과의 상호 작용은 하위 컴포넌트에 작성해야 합니다!
 */
import React from 'react'
import htmlEntitiesDecoder from 'html-entities-decoder'
import { useMoviesData } from './context/movieContext'

export default function Comments() {
  const movies = JSON.parse(htmlEntitiesDecoder(useMoviesData()))
  return (
    <>
      {movies.map((movie) => (
        <p className="comment" key={movie}>
          {movie.Title}
        </p>
      ))}
    </>
  )
}
